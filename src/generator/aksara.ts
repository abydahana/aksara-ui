export interface ComponentOptions {
  [key: string]: unknown;
}

export interface ModalOptions extends ComponentOptions {
  backdrop?: boolean | "static" | string;
  keyboard?: boolean | string;
  focus?: boolean | string;
  scrollLock?: boolean | string;
  draggable?: boolean | string;
}

export interface DropdownOptions extends ComponentOptions {
  menu?: string | HTMLElement;
  target?: string | HTMLElement;
  placement?: "top" | "bottom" | "start" | "end" | "auto" | string;
  container?: string | HTMLElement;
  offset?: number;
  keyboard?: boolean;
  closeOnSelect?: boolean;
  closeOnOutside?: boolean;
}

export interface FloatingTextOptions extends ComponentOptions {
  content?: string;
  text?: string;
  container?: string | HTMLElement;
  html?: boolean;
  placement?: "top" | "bottom" | "left" | "right" | "start" | "end" | "auto" | string;
  trigger?: string;
  offset?: number;
  showDelay?: number;
  hideDelay?: number;
  keyboard?: boolean;
}

export type TooltipOptions = FloatingTextOptions;
export type PopoverOptions = FloatingTextOptions;

export interface AccordionOptions extends ComponentOptions {
  parent?: boolean | string | HTMLElement;
  collapsible?: boolean;
  buttonSelector?: string;
  duration?: number;
}

export interface TabsOptions extends ComponentOptions {
  tabSelector?: string;
  panelSelector?: string | null;
  active?: string | HTMLElement | null;
  activeIndex?: number;
  keyboard?: boolean;
  loop?: boolean;
  orientation?: "horizontal" | "vertical" | string;
}

export interface ToastOptions extends ComponentOptions {
  delay?: number;
  autohide?: boolean;
}

export interface CarouselOptions extends ComponentOptions {
  interval?: number;
  autoplay?: boolean;
  pauseOnHover?: boolean;
  keyboard?: boolean;
  loop?: boolean;
  activeIndex?: number;
}

export type OffcanvasOptions = ModalOptions;

export type TargetElements = string | Element | NodeList | Element[] | HTMLElement | HTMLElement[] | null | undefined;

export interface ComponentConstructor<T extends Component = Component, O extends ComponentOptions = ComponentOptions> {
  new (element: HTMLElement, options?: O): T;
  componentName: string;
}

interface DragState {
  originX: number;
  originY: number;
  pointerX: number;
  pointerY: number;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

const registry = new Map<string, WeakMap<Element, Component>>();
const instances = new Set<Component>();

const focusableSelector = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

function toElements(target: TargetElements): HTMLElement[] {
  if (!target) return [];
  if (typeof target === "string") return Array.from(document.querySelectorAll<HTMLElement>(target));
  if (target instanceof HTMLElement) return [target];
  if (target instanceof Element) return [target as HTMLElement];
  if (target instanceof NodeList || Array.isArray(target)) {
    return Array.from(target).filter((item): item is HTMLElement => item instanceof HTMLElement);
  }
  return [];
}

function resolveArgs<O extends ComponentOptions>(
  target: TargetElements | (O & { target?: TargetElements; selector?: TargetElements }),
  options?: O,
  defaultSelector?: string
): { target: TargetElements; options: O } {
  if (
    target &&
    typeof target === "object" &&
    !(target instanceof Element) &&
    !(target instanceof NodeList) &&
    !Array.isArray(target)
  ) {
    const opts = target as O & { target?: TargetElements; selector?: TargetElements };
    const resolvedTarget = opts.target || opts.selector || defaultSelector;
    return { target: resolvedTarget, options: opts };
  }
  return { target: (target as TargetElements) || defaultSelector, options: (options || {}) as O };
}

function dataName(name: string): string {
  return name.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

function getData(element: Element | null | undefined, component: string, name: string): string | null {
  return element?.getAttribute(`data-${component}-${dataName(name)}`) ?? null;
}

function getOption<T>(
  options: Record<string, unknown>,
  element: Element | null | undefined,
  component: string,
  name: string,
  fallback: T
): T {
  if (options[name] !== undefined) return options[name] as T;
  const value = getData(element, component, name);
  return value !== null ? (value as unknown as T) : fallback;
}

function getBooleanOption(
  options: Record<string, unknown>,
  element: Element | null | undefined,
  component: string,
  name: string,
  fallback: boolean
): boolean {
  const value = getOption<unknown>(options, element, component, name, fallback);
  if (value === "true" || value === true) return true;
  if (value === "false" || value === false) return false;
  return Boolean(value);
}

function getNumberOption(
  options: Record<string, unknown>,
  element: Element | null | undefined,
  component: string,
  name: string,
  fallback: number
): number {
  const value = getOption<unknown>(options, element, component, name, fallback);
  const number = Number(value);
  return Number.isNaN(number) ? fallback : number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function emit(element: Element, name: string, detail: Record<string, unknown> = {}): void {
  element.dispatchEvent(new CustomEvent(`aksara:${name}`, { bubbles: true, detail }));
}

function getInstance<T extends Component, O extends ComponentOptions>(
  element: HTMLElement,
  Type: ComponentConstructor<T, O>,
  options: O = {} as O
): T {
  const key = Type.componentName;
  let map = registry.get(key);
  if (!map) {
    map = new WeakMap();
    registry.set(key, map);
  }
  if (!map.has(element)) {
    const instance = new Type(element, options);
    map.set(element, instance);
    instances.add(instance);
  } else if (options && Object.keys(options).length) {
    const instance = map.get(element) as T | undefined;
    if (instance && typeof instance.updateOptions === "function") {
      instance.updateOptions(options);
    }
  }
  return map.get(element) as T;
}

function createInstanceList<T extends Component>(instanceArray: T[]): unknown {
  return new Proxy(instanceArray, {
    get(target: T[], prop: string | symbol) {
      if (prop in target) {
        const val = (target as unknown as Record<string | symbol, unknown>)[prop];
        return typeof val === "function" ? (val as (...args: unknown[]) => unknown).bind(target) : val;
      }
      return (...args: unknown[]) => {
        target.forEach((inst: T) => {
          const fn = (inst as unknown as Record<string | symbol, unknown>)[prop];
          if (typeof fn === "function") {
            (fn as (...args: unknown[]) => unknown)(...args);
          }
        });
        return createInstanceList(target);
      };
    }
  });
}

function createAll<T extends Component, O extends ComponentOptions>(
  target: TargetElements,
  Type: ComponentConstructor<T, O>,
  options: O = {} as O
): T {
  const items = toElements(target);
  const insts = items.map((element) => getInstance(element, Type, options));
  if (insts.length === 1) return insts[0];
  return createInstanceList(insts) as unknown as T;
}

export class Component {
  element: HTMLElement;
  options: Record<string, unknown>;
  cleanups: Array<() => void>;

  constructor(element: HTMLElement, options: Record<string, unknown> = {}) {
    this.element = element;
    this.options = options;
    this.cleanups = [];
  }

  updateOptions(options: Record<string, unknown> = {}): this {
    this.options = { ...this.options, ...options };
    return this;
  }

  on(
    target: EventTarget,
    type: string,
    handler: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void {
    target.addEventListener(type, handler, options);
    this.cleanups.push(() => target.removeEventListener(type, handler, options));
  }

  destroy(): void {
    this.cleanups.splice(0).forEach((cleanup) => cleanup());
    instances.delete(this);
    const ctor = this.constructor as typeof Component & { componentName?: string };
    if (ctor.componentName) registry.get(ctor.componentName)?.delete(this.element);
    emit(this.element, `${ctor.componentName || "component"}:destroy`, { instance: this });
  }
}

// ── Overlay stack ──────────────────────────────────────────────────────────────
// Open modals/offcanvases in opening order. Escape and focus trapping only apply to
// the topmost overlay, and the page scroll stays locked until the last one closes.
const overlayStack: Component[] = [];
let scrollLockCount = 0;

function pushOverlay(overlay: Component, lockScroll: boolean): void {
  if (!overlayStack.includes(overlay)) overlayStack.push(overlay);
  if (lockScroll && typeof document !== "undefined") {
    scrollLockCount += 1;
    document.documentElement.style.overflow = "hidden";
  }
}

function popOverlay(overlay: Component, lockScroll: boolean): void {
  const index = overlayStack.indexOf(overlay);
  if (index >= 0) overlayStack.splice(index, 1);
  if (lockScroll && typeof document !== "undefined") {
    scrollLockCount = Math.max(0, scrollLockCount - 1);
    if (scrollLockCount === 0) document.documentElement.style.overflow = "";
  }
}

function isTopOverlay(overlay: Component): boolean {
  return overlayStack[overlayStack.length - 1] === overlay;
}

export class Modal extends Component {
  static componentName = "modal";

  isOpen: boolean;
  previousFocus: HTMLElement | null = null;
  dialog: HTMLElement | null;
  dragState: DragState | null = null;
  backdrop!: boolean | "static";
  keyboard!: boolean;
  focus!: boolean;
  scrollLock!: boolean;
  draggable!: boolean;

  constructor(element: HTMLElement, options: ModalOptions = {}) {
    super(element, options);
    this.isOpen = element.classList.contains("modal-open");
    this.dialog = element.querySelector<HTMLElement>(".modal-dialog");
    this.updateOptions(options);

    this.element.setAttribute("role", this.element.getAttribute("role") || "dialog");
    this.element.setAttribute("aria-modal", "true");
    this.element.setAttribute("aria-hidden", this.isOpen ? "false" : "true");

    this.on(this.element, "click", (event: Event) => {
      if (this.isBackdropClick(event)) {
        if (this.backdrop === "static") {
          const staticClass = `${(this.constructor as typeof Modal).componentName}-static`;
          this.element.classList.add(staticClass);
          setTimeout(() => this.element.classList.remove(staticClass), 150);
        } else if (this.backdrop) {
          this.hide();
        }
      }
    });
    this.on(document, "keydown", (event: Event) => this.onKeydown(event as KeyboardEvent));
    this.bindDrag();
  }

  updateOptions(options: ModalOptions = {}): this {
    super.updateOptions(options);
    const component = (this.constructor as typeof Modal).componentName;
    const backdrop = getOption<boolean | string>(this.options, this.element, component, "backdrop", true);
    this.backdrop = backdrop === "static" ? "static" : !((backdrop as unknown) === false || backdrop === "false");
    this.keyboard = getBooleanOption(this.options, this.element, component, "keyboard", true);
    this.focus = getBooleanOption(this.options, this.element, component, "focus", true);
    this.scrollLock = getBooleanOption(this.options, this.element, component, "scrollLock", true);
    this.draggable = getBooleanOption(this.options, this.element, component, "draggable", true);
    return this;
  }

  /** A click on the full-screen `.modal` wrapper (outside the dialog) is a backdrop click. */
  isBackdropClick(event: Event): boolean {
    return event.target === this.element;
  }

  bindDrag(): void {
    if (!this.dialog) return;

    const header = this.dialog.querySelector<HTMLElement>(".modal-header");
    if (!header) return;

    this.on(header, "pointerdown", (event: Event) => this.startDrag(event as PointerEvent));
  }

  startDrag(event: PointerEvent): void {
    if (!this.isOpen || !this.draggable || !this.dialog || event.button !== 0) return;

    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest("button,a,input,select,textarea,label,[data-modal-close],[data-no-drag]")) return;

    const originX = Number.parseFloat(this.dialog.style.getPropertyValue("--aksara-modal-x")) || 0;
    const originY = Number.parseFloat(this.dialog.style.getPropertyValue("--aksara-modal-y")) || 0;
    const rect = this.dialog.getBoundingClientRect();
    const baseLeft = rect.left - originX;
    const baseTop = rect.top - originY;
    const padding = 8;
    const move = (moveEvent: PointerEvent) => this.drag(moveEvent);
    const end = () => {
      document.removeEventListener("pointermove", move as EventListener);
      document.removeEventListener("pointerup", end);
      document.removeEventListener("pointercancel", end);
      this.dialog?.classList.remove("is-dragging");
      this.dragState = null;
    };

    this.dragState = {
      originX,
      originY,
      pointerX: event.clientX,
      pointerY: event.clientY,
      minX: padding - baseLeft,
      maxX: window.innerWidth - padding - rect.width - baseLeft,
      minY: padding - baseTop,
      maxY: window.innerHeight - padding - rect.height - baseTop
    };

    this.dialog.classList.add("is-dragging");
    document.addEventListener("pointermove", move as EventListener);
    document.addEventListener("pointerup", end);
    document.addEventListener("pointercancel", end);
    event.preventDefault();
  }

  drag(event: PointerEvent): void {
    if (!this.dialog || !this.dragState) return;

    const nextX = clamp(
      this.dragState.originX + event.clientX - this.dragState.pointerX,
      this.dragState.minX,
      this.dragState.maxX
    );
    const nextY = clamp(
      this.dragState.originY + event.clientY - this.dragState.pointerY,
      this.dragState.minY,
      this.dragState.maxY
    );

    this.dialog.style.setProperty("--aksara-modal-x", `${nextX}px`);
    this.dialog.style.setProperty("--aksara-modal-y", `${nextY}px`);
  }

  resetPosition(): void {
    if (!this.dialog) return;

    this.dialog.style.removeProperty("--aksara-modal-x");
    this.dialog.style.removeProperty("--aksara-modal-y");
    this.dialog.classList.remove("is-dragging");
  }

  show(): this {
    if (this.isOpen) return this;
    this.previousFocus = document.activeElement as HTMLElement | null;
    this.isOpen = true;
    this.element.classList.add("modal-open");
    this.element.setAttribute("aria-hidden", "false");
    pushOverlay(this, this.scrollLock);
    if (this.focus) this.focusFirst();
    emit(this.element, "modal:show", { instance: this });
    return this;
  }

  hide(): this {
    if (!this.isOpen) return this;
    this.isOpen = false;
    this.element.classList.remove("modal-open");
    this.element.setAttribute("aria-hidden", "true");
    this.resetPosition();
    popOverlay(this, this.scrollLock);
    if (this.previousFocus && typeof this.previousFocus.focus === "function") this.previousFocus.focus();
    emit(this.element, "modal:hide", { instance: this });
    return this;
  }

  toggle(): this {
    return this.isOpen ? this.hide() : this.show();
  }

  focusFirst(): void {
    const focusable = Array.from(this.element.querySelectorAll<HTMLElement>(focusableSelector));
    const first = focusable[0] || this.element;
    if (!this.element.hasAttribute("tabindex")) this.element.setAttribute("tabindex", "-1");
    first.focus({ preventScroll: true });
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.isOpen || !isTopOverlay(this)) return;
    if (event.key === "Escape") {
      if (this.keyboard) {
        event.preventDefault();
        this.hide();
      } else if (this.backdrop === "static") {
        const staticClass = `${(this.constructor as typeof Modal).componentName}-static`;
        this.element.classList.add(staticClass);
        setTimeout(() => this.element.classList.remove(staticClass), 150);
      }
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(this.element.querySelectorAll<HTMLElement>(focusableSelector));
    if (!focusable.length) {
      event.preventDefault();
      this.element.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

export class Dropdown extends Component {
  static componentName = "dropdown";

  trigger: HTMLElement | null;
  menu: HTMLElement | null;
  isOpen: boolean;
  originalParent: Node | null;
  originalSibling: Node | null;
  scrollHandler: ((event?: Event) => void) | null;
  wheelHandler: ((event: WheelEvent) => void) | null;
  placement!: string;
  container!: string | HTMLElement;
  offset!: number;
  keyboard!: boolean;
  closeOnSelect!: boolean;
  closeOnOutside!: boolean;

  constructor(element: HTMLElement, options: DropdownOptions = {}) {
    super(element, options);

    let trigger: HTMLElement | null;
    let menu: HTMLElement | null = null;

    if (element.matches("[data-dropdown]")) {
      trigger = element;
    } else if (element.classList.contains("dropdown")) {
      trigger =
        element.querySelector<HTMLElement>("[data-dropdown]") || element.querySelector<HTMLElement>("button, a");
      menu = element.querySelector<HTMLElement>(".dropdown-menu");
    } else {
      trigger = element;
    }

    this.trigger = trigger;

    if (!menu) {
      const menuSelector =
        options.menu ||
        options.target ||
        (trigger && (trigger.getAttribute("data-dropdown") || trigger.getAttribute("data-target")));
      if (menuSelector && typeof menuSelector === "string") {
        menu = document.querySelector<HTMLElement>(menuSelector);
      } else if (menuSelector instanceof HTMLElement) {
        menu = menuSelector;
      }

      if (!menu && trigger) {
        if (trigger.nextElementSibling && trigger.nextElementSibling.classList.contains("dropdown-menu")) {
          menu = trigger.nextElementSibling as HTMLElement;
        } else {
          menu = trigger.parentElement?.querySelector<HTMLElement>(".dropdown-menu") || null;
        }
      }
    }

    this.menu = menu;
    this.isOpen = false;
    this.originalParent = null;
    this.originalSibling = null;
    this.scrollHandler = null;
    this.wheelHandler = null;
    this.updateOptions(options);

    if (
      this.trigger?.matches(".btn-sm, .input-sm, .form-control-sm, .form-select-sm") ||
      this.element.classList.contains("dropdown-sm")
    ) {
      this.menu?.classList.add("dropdown-menu-sm");
    }

    if (this.trigger) {
      this.trigger.setAttribute("aria-haspopup", "menu");
      this.trigger.setAttribute("aria-expanded", "false");
      if (this.menu) {
        if (!this.menu.id) this.menu.id = `aksara-dropdown-${Math.random().toString(36).slice(2, 9)}`;
        this.trigger.setAttribute("aria-controls", this.menu.id);
        this.menu.setAttribute("role", this.menu.getAttribute("role") || "menu");
      }
      this.on(this.trigger, "click", (event: Event) => {
        const customEvent = event as Event & { __aksaraDropdownHandled?: boolean };
        if (customEvent.__aksaraDropdownHandled) return;
        customEvent.__aksaraDropdownHandled = true;
        event.preventDefault();
        this.toggle(event);
      });
    }

    this.on(document, "click", (event: Event) => {
      if (!this.closeOnOutside) return;
      const target = event.target as Node;
      if (!this.element.contains(target) && !this.menu?.contains(target)) {
        this.hide();
      }
    });

    this.on(document, "keydown", (event: Event) => {
      const key = (event as KeyboardEvent).key;
      if (!this.isOpen || !this.keyboard) return;
      if (key === "Escape") {
        // Return focus to the trigger when the menu had focus.
        const hadFocus = Boolean(this.menu?.contains(document.activeElement));
        this.hide();
        if (hadFocus) this.trigger?.focus();
        return;
      }
      if (key === "ArrowDown" || key === "ArrowUp" || key === "Home" || key === "End") {
        const items = Array.from(
          this.menu?.querySelectorAll<HTMLElement>(".dropdown-item:not(.disabled):not(:disabled)") ?? []
        );
        if (!items.length) return;
        event.preventDefault();
        const current = items.indexOf(document.activeElement as HTMLElement);
        let next = 0;
        if (key === "End") next = items.length - 1;
        else if (key === "ArrowDown") next = current < 0 ? 0 : (current + 1) % items.length;
        else if (key === "ArrowUp") next = current < 0 ? items.length - 1 : (current - 1 + items.length) % items.length;
        items[next].focus();
      }
    });

    if (this.menu) {
      this.on(this.menu, "click", (event: Event) => {
        const target = event.target as Element;
        const item = target.closest<HTMLElement>(".dropdown-item");
        if (
          this.closeOnSelect &&
          item &&
          !(item as HTMLButtonElement).disabled &&
          !item.classList.contains("disabled")
        ) {
          this.hide();
        }
      });
    }
  }

  updateOptions(options: DropdownOptions = {}): this {
    super.updateOptions(options);
    this.placement = getOption(
      this.options,
      this.trigger,
      "dropdown",
      "placement",
      getData(this.element, "dropdown", "placement") || "bottom"
    );
    this.container = getOption(
      this.options,
      this.trigger,
      "dropdown",
      "container",
      getData(this.element, "dropdown", "container") || "body"
    );
    this.offset = getNumberOption(
      this.options,
      this.trigger,
      "dropdown",
      "offset",
      getNumberOption({}, this.element, "dropdown", "offset", 4)
    );
    this.keyboard = getBooleanOption(
      this.options,
      this.trigger,
      "dropdown",
      "keyboard",
      getBooleanOption({}, this.element, "dropdown", "keyboard", true)
    );
    this.closeOnSelect = getBooleanOption(
      this.options,
      this.trigger,
      "dropdown",
      "closeOnSelect",
      getBooleanOption({}, this.element, "dropdown", "closeOnSelect", true)
    );
    this.closeOnOutside = getBooleanOption(
      this.options,
      this.trigger,
      "dropdown",
      "closeOnOutside",
      getBooleanOption({}, this.element, "dropdown", "closeOnOutside", true)
    );
    return this;
  }

  position(): void {
    if (!this.menu || !this.isOpen || !this.trigger) return;

    if (!this.trigger.isConnected || !document.body.contains(this.trigger)) {
      this.hide();
      return;
    }

    this.menu.style.display = "block";
    this.menu.style.position = "absolute";
    this.menu.style.zIndex = "1060"; // portaled to <body>: must sit above modals (1050) and offcanvas (1045)
    this.menu.style.overscrollBehavior = "contain";

    const triggerRect = this.trigger.getBoundingClientRect();
    if (
      this.trigger.classList.contains("form-select") ||
      this.element.classList.contains("variant-form-select") ||
      this.element.hasAttribute("data-dropdown-select")
    ) {
      this.menu.style.width = `${triggerRect.width}px`;
      this.menu.style.minWidth = `${triggerRect.width}px`;
    }
    const menuRect = this.menu.getBoundingClientRect();
    const gap = this.offset;
    let top: number;
    let left: number;

    const spaceBelow = window.innerHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    let placement = this.placement;
    if (placement === "auto") {
      placement = spaceBelow >= menuRect.height || spaceBelow >= spaceAbove ? "bottom" : "top";
    }

    this.menu.classList.remove("dropdown-top", "dropdown-bottom", "dropdown-start", "dropdown-end");
    this.menu.classList.add(`dropdown-${placement}`);

    const isRtl =
      document.documentElement.getAttribute("dir") === "rtl" || document.body?.getAttribute("dir") === "rtl";

    // `.dropdown-menu-end` aligns the menu's end edge with the trigger's end edge.
    const alignEnd = this.menu.classList.contains("dropdown-menu-end") !== isRtl;
    const alignedLeft = alignEnd ? triggerRect.right - menuRect.width : triggerRect.left;

    if (placement === "top") {
      top = triggerRect.top - menuRect.height - gap;
      left = alignedLeft;
    } else if (placement === "start") {
      top = triggerRect.top;
      left = isRtl ? triggerRect.right + gap : triggerRect.left - menuRect.width - gap;
    } else if (placement === "end") {
      top = triggerRect.top;
      left = isRtl ? triggerRect.left - menuRect.width - gap : triggerRect.right + gap;
    } else {
      top = triggerRect.bottom + gap;
      left = alignedLeft;
    }

    const viewportWidth = window.innerWidth;
    left = Math.max(8, Math.min(left, viewportWidth - menuRect.width - 8));

    const availableHeight = Math.max(
      120,
      Math.floor(placement === "top" ? spaceAbove - gap - 16 : spaceBelow - gap - 16)
    );
    if (this.menu.scrollHeight > availableHeight || availableHeight < 300) {
      this.menu.style.maxHeight = `${availableHeight}px`;
      this.menu.style.overflowY = "auto";
    }

    this.menu.style.top = `${top + window.scrollY}px`;
    this.menu.style.left = `${left + window.scrollX}px`;
    this.menu.style.bottom = "auto";
    this.menu.style.right = "auto";
  }

  show(): this {
    if (!this.menu || this.isOpen) return this;
    this.isOpen = true;

    this.originalParent = this.menu.parentNode;
    this.originalSibling = this.menu.nextSibling;

    let containerEl: HTMLElement = document.body;
    if (typeof this.container === "string" && this.container !== "body") {
      containerEl = document.querySelector<HTMLElement>(this.container) || document.body;
    } else if (this.container instanceof HTMLElement) {
      containerEl = this.container;
    }
    containerEl.appendChild(this.menu);

    this.menu.classList.add("dropdown-open");
    this.trigger?.setAttribute("aria-expanded", "true");

    this.position();

    this.scrollHandler = (event?: Event) => {
      if (
        (this.menu && (this.menu.matches(":hover") || this.menu.contains(document.activeElement))) ||
        (this.trigger && this.trigger.matches(":hover")) ||
        (event?.target && this.menu && (this.menu === event.target || this.menu.contains(event.target as Node)))
      ) {
        return;
      }
      this.position();
    };
    window.addEventListener("scroll", this.scrollHandler, { passive: true, capture: true });
    window.addEventListener("resize", this.scrollHandler);

    this.wheelHandler = (e: WheelEvent) => {
      if (!this.menu) return;
      const { deltaY } = e;
      if (deltaY === 0) return;

      const atTop = this.menu.scrollTop <= 0;
      const atBottom = this.menu.scrollTop + this.menu.clientHeight >= this.menu.scrollHeight - 1;

      if ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom) || this.menu.scrollHeight <= this.menu.clientHeight) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    this.menu.addEventListener("wheel", this.wheelHandler, { passive: false });

    emit(this.element, "dropdown:show", { instance: this });
    return this;
  }

  hide(): this {
    if (!this.menu || !this.isOpen) return this;
    this.isOpen = false;

    if (this.scrollHandler) {
      window.removeEventListener("scroll", this.scrollHandler, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", this.scrollHandler);
      this.scrollHandler = null;
    }
    if (this.wheelHandler && this.menu) {
      this.menu.removeEventListener("wheel", this.wheelHandler);
      this.wheelHandler = null;
    }

    this.menu.classList.remove("dropdown-open", "dropdown-top", "dropdown-bottom", "dropdown-start", "dropdown-end");
    this.trigger?.setAttribute("aria-expanded", "false");

    if (this.originalParent) {
      this.originalParent.insertBefore(this.menu, this.originalSibling);
    }

    this.menu.style.display = "";
    this.menu.style.position = "";
    this.menu.style.top = "";
    this.menu.style.left = "";
    this.menu.style.zIndex = "";

    emit(this.element, "dropdown:hide", { instance: this });
    return this;
  }

  toggle(event?: Event): this {
    const clickEvent = (event || window.event) as (Event & { __aksaraDropdownHandled?: boolean }) | undefined;
    if (clickEvent && clickEvent.type === "click") {
      if (clickEvent.__aksaraDropdownHandled && !event) {
        return this;
      }
      clickEvent.__aksaraDropdownHandled = true;
    }
    return this.isOpen ? this.hide() : this.show();
  }

  destroy(): void {
    this.hide();
    super.destroy();
  }
}

export class FloatingText extends Component {
  static dataAttribute: string = "data-floating";
  static role: string = "tooltip";
  static componentName = "floating";

  tip: HTMLElement | null;
  showTimeout: ReturnType<typeof setTimeout> | null;
  hideTimeout: ReturnType<typeof setTimeout> | null;
  container!: string | HTMLElement;
  html!: boolean;
  content!: string;
  placement!: string;
  trigger!: string;
  offset!: number;
  showDelay!: number;
  hideDelay!: number;
  keyboard!: boolean;

  constructor(element: HTMLElement, options: FloatingTextOptions = {}) {
    super(element, options);
    this.tip = null;
    this.showTimeout = null;
    this.hideTimeout = null;
    this.updateOptions(options);
    this.bindTriggers();
    this.on(document, "keydown", (event: Event) => {
      if (this.keyboard && (event as KeyboardEvent).key === "Escape") this.hide();
    });
  }

  updateOptions(options: FloatingTextOptions = {}): this {
    super.updateOptions(options);
    const ctor = this.constructor as typeof FloatingText;
    const component = ctor.componentName;
    const rawContent = (this.options.content ??
      this.options.text ??
      getData(this.element, component, "content") ??
      this.element.getAttribute(ctor.dataAttribute) ??
      "") as string;
    this.container = getOption(
      this.options,
      this.element,
      component,
      "container",
      this.element.getAttribute("data-container") || "body"
    );
    this.html = getBooleanOption(
      this.options,
      this.element,
      component,
      "html",
      this.element.getAttribute("data-html") === "true"
    );
    this.content = rawContent;
    this.placement = getOption(
      this.options,
      this.element,
      component,
      "placement",
      this.element.getAttribute("data-placement") || "top"
    );
    this.trigger = getOption(this.options, this.element, component, "trigger", "hover focus");
    this.offset = getNumberOption(this.options, this.element, component, "offset", 8);
    this.showDelay = getNumberOption(this.options, this.element, component, "showDelay", 0);
    this.hideDelay = getNumberOption(this.options, this.element, component, "hideDelay", 0);
    this.keyboard = getBooleanOption(this.options, this.element, component, "keyboard", true);
    if (this.tip) {
      if (this.html) {
        this.tip.innerHTML = this.content;
      } else {
        this.tip.textContent = this.content;
      }
      this.position();
    }
    return this;
  }

  bindTriggers(): void {
    const triggers = String(this.trigger).split(/\s+/).filter(Boolean);
    if (triggers.includes("hover")) {
      this.on(this.element, "mouseenter", () => this.scheduleShow());
      this.on(this.element, "mouseleave", () => this.scheduleHide());
    }
    if (triggers.includes("focus")) {
      this.on(this.element, "focus", () => this.scheduleShow());
      this.on(this.element, "blur", () => this.scheduleHide());
    }
    if (triggers.includes("click")) {
      this.on(this.element, "click", (event: Event) => {
        event.preventDefault();
        this.toggle();
      });
    }
  }

  scheduleShow(): void {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    if (this.showTimeout) clearTimeout(this.showTimeout);
    this.showTimeout = setTimeout(() => this.show(), this.showDelay);
  }

  scheduleHide(): void {
    if (this.showTimeout) clearTimeout(this.showTimeout);
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(() => this.hide(), this.hideDelay);
  }

  show(): this {
    if (this.tip || !this.content) return this;
    const ctor = this.constructor as typeof FloatingText;
    this.tip = document.createElement("div");
    this.tip.className = ctor.componentName;
    this.tip.id = `aksara-${ctor.componentName}-${Math.random().toString(36).slice(2, 9)}`;
    const body = document.createElement("div");
    if (this.html) {
      body.innerHTML = this.content;
    } else {
      body.textContent = this.content;
    }
    // Popovers support a title (`title` option or `data-popover-title`).
    const title =
      ctor.componentName === "popover"
        ? (this.options.title as string | undefined) || this.element.getAttribute("data-popover-title")
        : null;
    if (title) {
      const header = document.createElement("div");
      header.className = "popover-header";
      header.textContent = title;
      body.className = "popover-body";
      this.tip.append(header, body);
    } else {
      this.tip.append(...Array.from(body.childNodes));
    }
    this.tip.setAttribute("role", ctor.role);
    // Screen readers announce the tooltip/popover as the trigger's description.
    const describedBy = (this.element.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
    this.element.setAttribute("aria-describedby", [...describedBy, this.tip.id].join(" "));

    let containerEl: HTMLElement = document.body;
    if (typeof this.container === "string" && this.container !== "body") {
      containerEl = document.querySelector<HTMLElement>(this.container) || document.body;
    } else if (this.container instanceof HTMLElement) {
      containerEl = this.container;
    }
    containerEl.append(this.tip);

    this.position();
    emit(this.element, `${ctor.componentName}:show`, { instance: this });
    return this;
  }

  toggle(): this {
    return this.tip ? this.hide() : this.show();
  }

  hide(): this {
    if (!this.tip) return this;
    const ctor = this.constructor as typeof FloatingText;
    const remaining = (this.element.getAttribute("aria-describedby") || "")
      .split(/\s+/)
      .filter((id) => id && id !== this.tip?.id);
    if (remaining.length) this.element.setAttribute("aria-describedby", remaining.join(" "));
    else this.element.removeAttribute("aria-describedby");
    this.tip.remove();
    this.tip = null;
    emit(this.element, `${ctor.componentName}:hide`, { instance: this });
    return this;
  }

  position(): void {
    if (!this.tip) return;
    const rect = this.element.getBoundingClientRect();
    const tipRect = this.tip.getBoundingClientRect();
    const gap = this.offset;
    const isRtl =
      document.documentElement.getAttribute("dir") === "rtl" || document.body?.getAttribute("dir") === "rtl";

    let placement = this.placement;
    if (placement === "auto") {
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      placement = spaceAbove >= tipRect.height || spaceAbove >= spaceBelow ? "top" : "bottom";
    }

    let physicalPlacement = placement;
    if (placement === "start") {
      physicalPlacement = isRtl ? "right" : "left";
    } else if (placement === "end") {
      physicalPlacement = isRtl ? "left" : "right";
    }

    const ctor = this.constructor as typeof FloatingText;
    this.tip.className = `${ctor.componentName} ${ctor.componentName}-${placement}`;

    const topMap: Record<string, number> = {
      top: rect.top - tipRect.height - gap,
      bottom: rect.bottom + gap,
      left: rect.top + rect.height / 2 - tipRect.height / 2,
      right: rect.top + rect.height / 2 - tipRect.height / 2
    };
    const top = topMap[physicalPlacement] ?? rect.top - tipRect.height - gap;

    const leftMap: Record<string, number> = {
      top: rect.left + rect.width / 2 - tipRect.width / 2,
      bottom: rect.left + rect.width / 2 - tipRect.width / 2,
      left: rect.left - tipRect.width - gap,
      right: rect.right + gap
    };
    const left = leftMap[physicalPlacement] ?? rect.left;

    this.tip.style.top = `${Math.max(4, top + window.scrollY)}px`;
    this.tip.style.left = `${Math.max(4, left + window.scrollX)}px`;
  }

  destroy(): void {
    if (this.showTimeout) clearTimeout(this.showTimeout);
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.hide();
    super.destroy();
  }
}

export class Tooltip extends FloatingText {
  static override componentName = "tooltip";
  static override dataAttribute = "data-tooltip";
  static override role = "tooltip";
}

export class Popover extends FloatingText {
  static override componentName = "popover";
  static override dataAttribute = "data-popover";
  static override role = "dialog";
}

interface AnimatedPanel extends HTMLElement {
  _aksaraCollapseTimer?: ReturnType<typeof setTimeout>;
  _aksaraCollapseEnd?: (e: TransitionEvent) => void;
}

function collapsePanel(panel: HTMLElement, duration = 250): void {
  const animatedPanel = panel as AnimatedPanel;

  if (animatedPanel._aksaraCollapseTimer) {
    clearTimeout(animatedPanel._aksaraCollapseTimer);
    delete animatedPanel._aksaraCollapseTimer;
  }
  if (animatedPanel._aksaraCollapseEnd) {
    panel.removeEventListener("transitionend", animatedPanel._aksaraCollapseEnd);
    delete animatedPanel._aksaraCollapseEnd;
  }

  if (
    duration <= 0 ||
    (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
  ) {
    panel.hidden = true;
    panel.style.removeProperty("height");
    panel.style.removeProperty("overflow");
    panel.style.removeProperty("padding-top");
    panel.style.removeProperty("padding-bottom");
    panel.style.removeProperty("opacity");
    panel.style.removeProperty("transition");
    return;
  }

  const computed = window.getComputedStyle(panel);
  const currentHeight = panel.getBoundingClientRect().height;
  const currentPaddingTop = computed.paddingTop;
  const currentPaddingBottom = computed.paddingBottom;

  panel.style.overflow = "hidden";
  panel.style.height = `${currentHeight}px`;
  panel.style.paddingTop = currentPaddingTop;
  panel.style.paddingBottom = currentPaddingBottom;
  panel.style.opacity = "1";
  panel.style.transition = `height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), padding-top ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), padding-bottom ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${Math.round(duration * 0.7)}ms ease`;

  void panel.offsetHeight;

  panel.style.height = "0px";
  panel.style.paddingTop = "0px";
  panel.style.paddingBottom = "0px";
  panel.style.opacity = "0";

  const cleanup = () => {
    panel.hidden = true;
    panel.style.removeProperty("height");
    panel.style.removeProperty("overflow");
    panel.style.removeProperty("padding-top");
    panel.style.removeProperty("padding-bottom");
    panel.style.removeProperty("opacity");
    panel.style.removeProperty("transition");
    if (animatedPanel._aksaraCollapseEnd) {
      panel.removeEventListener("transitionend", animatedPanel._aksaraCollapseEnd);
      delete animatedPanel._aksaraCollapseEnd;
    }
    delete animatedPanel._aksaraCollapseTimer;
  };

  const onEnd = (e: TransitionEvent) => {
    if (e.target === panel && e.propertyName === "height") {
      cleanup();
    }
  };

  animatedPanel._aksaraCollapseEnd = onEnd;
  panel.addEventListener("transitionend", onEnd);
  animatedPanel._aksaraCollapseTimer = setTimeout(cleanup, duration + 60);
}

function expandPanel(panel: HTMLElement, duration = 250): void {
  const animatedPanel = panel as AnimatedPanel;

  if (animatedPanel._aksaraCollapseTimer) {
    clearTimeout(animatedPanel._aksaraCollapseTimer);
    delete animatedPanel._aksaraCollapseTimer;
  }
  if (animatedPanel._aksaraCollapseEnd) {
    panel.removeEventListener("transitionend", animatedPanel._aksaraCollapseEnd);
    delete animatedPanel._aksaraCollapseEnd;
  }

  if (
    duration <= 0 ||
    (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
  ) {
    panel.hidden = false;
    panel.style.removeProperty("height");
    panel.style.removeProperty("overflow");
    panel.style.removeProperty("padding-top");
    panel.style.removeProperty("padding-bottom");
    panel.style.removeProperty("opacity");
    panel.style.removeProperty("transition");
    return;
  }

  panel.hidden = false;
  panel.style.removeProperty("height");
  panel.style.removeProperty("padding-top");
  panel.style.removeProperty("padding-bottom");
  panel.style.removeProperty("opacity");
  panel.style.removeProperty("transition");

  const computed = window.getComputedStyle(panel);
  const targetPaddingTop = computed.paddingTop;
  const targetPaddingBottom = computed.paddingBottom;
  const targetHeight = panel.getBoundingClientRect().height;

  panel.style.overflow = "hidden";
  panel.style.height = "0px";
  panel.style.paddingTop = "0px";
  panel.style.paddingBottom = "0px";
  panel.style.opacity = "0";

  void panel.offsetHeight;

  panel.style.transition = `height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), padding-top ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), padding-bottom ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${duration}ms ease`;
  panel.style.height = `${targetHeight}px`;
  panel.style.paddingTop = targetPaddingTop;
  panel.style.paddingBottom = targetPaddingBottom;
  panel.style.opacity = "1";

  const cleanup = () => {
    panel.style.removeProperty("height");
    panel.style.removeProperty("overflow");
    panel.style.removeProperty("padding-top");
    panel.style.removeProperty("padding-bottom");
    panel.style.removeProperty("opacity");
    panel.style.removeProperty("transition");
    if (animatedPanel._aksaraCollapseEnd) {
      panel.removeEventListener("transitionend", animatedPanel._aksaraCollapseEnd);
      delete animatedPanel._aksaraCollapseEnd;
    }
    delete animatedPanel._aksaraCollapseTimer;
  };

  const onEnd = (e: TransitionEvent) => {
    if (e.target === panel && e.propertyName === "height") {
      cleanup();
    }
  };

  animatedPanel._aksaraCollapseEnd = onEnd;
  panel.addEventListener("transitionend", onEnd);
  animatedPanel._aksaraCollapseTimer = setTimeout(cleanup, duration + 60);
}

export class Accordion extends Component {
  static componentName = "accordion";

  parent!: boolean | string | HTMLElement;
  collapsible!: boolean;
  buttonSelector!: string;
  duration!: number;

  constructor(element: HTMLElement, options: AccordionOptions = {}) {
    super(element, options);
    this.updateOptions(options);
    this.on(element, "click", (event: Event) => {
      const target = event.target as Element;
      const button = target.closest<HTMLElement>(this.buttonSelector);
      if (!button || !element.contains(button)) return;
      const panelSelector = button.getAttribute("data-accordion");
      if (!panelSelector) return;
      const panel = document.querySelector<HTMLElement>(panelSelector);
      if (!panel) return;
      const expanded = button.getAttribute("aria-expanded") === "true";
      if (expanded && !this.collapsible) return;

      const parentScope = this.getParentScope();
      if (!expanded && parentScope) {
        parentScope.querySelectorAll<HTMLElement>(this.buttonSelector).forEach((otherButton) => {
          if (otherButton === button) return;
          otherButton.setAttribute("aria-expanded", "false");
          const otherPanelSelector = otherButton.getAttribute("data-accordion");
          if (otherPanelSelector) {
            const otherPanel = document.querySelector<HTMLElement>(otherPanelSelector);
            if (otherPanel && (!otherPanel.hidden || otherPanel.offsetHeight > 0)) {
              collapsePanel(otherPanel, this.duration);
            }
          }
        });
      }

      button.setAttribute("aria-expanded", String(!expanded));
      if (expanded) {
        collapsePanel(panel, this.duration);
      } else {
        expandPanel(panel, this.duration);
      }
      emit(element, "accordion:toggle", { button, panel, expanded: !expanded });
    });
  }

  updateOptions(options: AccordionOptions = {}): this {
    super.updateOptions(options);
    const parentVal = getOption<boolean | string | HTMLElement>(
      this.options,
      this.element,
      "accordion",
      "parent",
      true
    );
    if ((parentVal as unknown) === "true") this.parent = true;
    else if ((parentVal as unknown) === "false") this.parent = false;
    else this.parent = parentVal;
    this.collapsible = getBooleanOption(this.options, this.element, "accordion", "collapsible", true);
    this.buttonSelector = getOption(this.options, this.element, "accordion", "buttonSelector", "[data-accordion]");
    this.duration = getNumberOption(this.options, this.element, "accordion", "duration", 250);
    return this;
  }

  getParentScope(): Element | null {
    if (this.parent === false) return null;
    if (this.parent === true) return this.element;
    if (this.parent instanceof Element) return this.parent;
    if (typeof this.parent === "string") return document.querySelector(this.parent) || this.element;
    return this.element;
  }
}

export class Tabs extends Component {
  static componentName = "tabs";

  tabSelector!: string;
  panelSelector!: string | null;
  active!: string | HTMLElement | null;
  activeIndex!: number;
  keyboard!: boolean;
  loop!: boolean;
  orientation!: string;

  constructor(element: HTMLElement, options: TabsOptions = {}) {
    super(element, options);
    this.updateOptions(options);
    this.on(element, "click", (event: Event) => {
      const target = event.target as Element;
      const tab = target.closest<HTMLElement>(this.tabSelector);
      if (!tab || !element.contains(tab)) return;
      event.preventDefault();
      this.show(tab);
    });
    this.on(element, "keydown", (event: Event) => {
      if (!this.keyboard) return;
      const keyEvent = event as KeyboardEvent;
      const keys = this.orientation === "vertical" ? ["ArrowUp", "ArrowDown"] : ["ArrowLeft", "ArrowRight"];
      if (!keys.includes(keyEvent.key)) return;
      const tabs = Array.from(element.querySelectorAll<HTMLElement>(this.tabSelector));
      const index = tabs.indexOf(document.activeElement as HTMLElement);
      if (index < 0) return;
      event.preventDefault();
      const isNext = keyEvent.key === "ArrowRight" || keyEvent.key === "ArrowDown";
      const fallback = this.loop ? (isNext ? tabs[0] : tabs[tabs.length - 1]) : tabs[index];
      const next = isNext ? tabs[index + 1] || fallback : tabs[index - 1] || fallback;
      if (next) {
        next.focus();
        this.show(next);
      }
    });
    this.bindSliderGestures();
    this.activateInitial();
  }

  updateOptions(options: TabsOptions = {}): this {
    const shouldActivate =
      (options.active !== undefined || options.activeIndex !== undefined) && this.cleanups.length > 0;
    super.updateOptions(options);
    this.tabSelector = getOption(this.options, this.element, "tabs", "tabSelector", "[data-tabs]");
    this.panelSelector = getOption(this.options, this.element, "tabs", "panelSelector", null);
    this.active = getOption(this.options, this.element, "tabs", "active", null);
    this.activeIndex = getNumberOption(this.options, this.element, "tabs", "activeIndex", -1);
    this.keyboard = getBooleanOption(this.options, this.element, "tabs", "keyboard", true);
    this.loop = getBooleanOption(this.options, this.element, "tabs", "loop", true);
    this.orientation = getOption(
      this.options,
      this.element,
      "tabs",
      "orientation",
      this.element.getAttribute("aria-orientation") || "horizontal"
    );
    this.element.setAttribute("role", this.element.getAttribute("role") || "tablist");
    this.element.setAttribute("aria-orientation", this.orientation);
    if (shouldActivate) this.activateInitial();
    return this;
  }

  activateInitial(): void {
    const tabs = Array.from(this.element.querySelectorAll<HTMLElement>(this.tabSelector));
    if (!tabs.length) return;

    let initial: HTMLElement | null = null;
    if (this.active instanceof HTMLElement) {
      initial = this.active;
    } else if (typeof this.active === "string") {
      initial =
        this.element.querySelector<HTMLElement>(this.active) || document.querySelector<HTMLElement>(this.active);
    }
    if (!initial && this.activeIndex >= 0) {
      initial = tabs[this.activeIndex] || null;
    }
    if (!initial) {
      initial = tabs.find((tab) => tab.getAttribute("aria-selected") === "true") || tabs[0];
    }
    if (initial) this.show(initial, false);
  }

  getSliderTrack(): HTMLElement | null {
    const wrapper =
      this.element.closest(".tabs-wrapper") ||
      this.element.closest("main, .page-container, [data-tabs-wrapper]") ||
      this.element.parentElement;
    // Scoped to this tab set's wrapper; a page-wide lookup would bind another tab set's slider.
    return wrapper?.querySelector<HTMLElement>(".tabs-slider-track, [data-tabs-slider]") ?? null;
  }

  bindSliderGestures(): void {
    const track = this.getSliderTrack();
    if (!track || (track as unknown as Record<string, unknown>).__sliderGesturesBound) return;
    (track as unknown as Record<string, unknown>).__sliderGesturesBound = true;

    let startX = 0;
    let startY = 0;
    let deltaX = 0;
    let deltaY = 0;
    let isSwiping = false;
    let isVertical = false;

    this.on(
      track,
      "touchstart",
      ((e: TouchEvent) => {
        if (e.touches.length !== 1) return;
        const target = e.target as HTMLElement | null;
        if (
          target?.closest(
            "input, textarea, select, [contenteditable='true'], video, audio, .carousel, [data-prevent-swipe]"
          )
        ) {
          return;
        }
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        deltaX = 0;
        deltaY = 0;
        isSwiping = false;
        isVertical = false;
      }) as EventListener,
      { passive: true }
    );

    this.on(
      track,
      "touchmove",
      ((e: TouchEvent) => {
        if (e.touches.length !== 1 || isVertical) return;
        const touch = e.touches[0];
        deltaX = touch.clientX - startX;
        deltaY = touch.clientY - startY;

        if (!isSwiping) {
          if (Math.abs(deltaY) > 8 && Math.abs(deltaY) > Math.abs(deltaX)) {
            isVertical = true;
            return;
          }
          if (Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(deltaY)) {
            isSwiping = true;
          }
        }

        if (isSwiping) {
          if (e.cancelable) e.preventDefault();
          const tabs = Array.from(this.element.querySelectorAll<HTMLElement>(this.tabSelector));
          const maxIdx = Math.max(0, tabs.length - 1);
          let currentDelta = deltaX;
          const currentIdx = tabs.findIndex((t) => t.classList.contains("active"));
          const safeIdx = currentIdx >= 0 ? currentIdx : 0;
          if ((safeIdx === 0 && currentDelta > 0) || (safeIdx === maxIdx && currentDelta < 0)) {
            currentDelta = currentDelta * 0.3;
          }
          track.style.transition = "none";
          track.style.transform = `translate3d(calc(-${safeIdx * 100}% + ${currentDelta}px), 0, 0)`;
        }
      }) as EventListener,
      { passive: false }
    );

    const onTouchEnd = () => {
      if (!isSwiping) return;
      isSwiping = false;
      const tabs = Array.from(this.element.querySelectorAll<HTMLElement>(this.tabSelector));
      const maxIdx = Math.max(0, tabs.length - 1);
      const currentIdx = tabs.findIndex((t) => t.classList.contains("active"));
      const safeIdx = currentIdx >= 0 ? currentIdx : 0;
      track.style.transition = "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)";

      if (deltaX < -50 && safeIdx < maxIdx) {
        this.show(tabs[safeIdx + 1]);
      } else if (deltaX > 50 && safeIdx > 0) {
        this.show(tabs[safeIdx - 1]);
      } else {
        track.style.transform = `translate3d(-${safeIdx * 100}%, 0, 0)`;
      }
    };

    this.on(track, "touchend", onTouchEnd, { passive: true });
    this.on(track, "touchcancel", onTouchEnd, { passive: true });
  }

  show(tab: HTMLElement, animate = true): this {
    const selector = tab.getAttribute("data-tabs");
    const panel = selector ? document.querySelector<HTMLElement>(selector) : null;
    if (!panel) return this;

    const tabs = Array.from(this.element.querySelectorAll<HTMLElement>(this.tabSelector));
    const targetIndex = tabs.indexOf(tab);

    const track = this.getSliderTrack();
    const isSlider = Boolean(track && track.contains(panel));

    tabs.forEach((item) => {
      const selected = item === tab;
      item.setAttribute("role", item.getAttribute("role") || "tab");
      item.setAttribute("aria-selected", String(selected));
      item.classList.toggle("active", selected);
      item.tabIndex = selected ? 0 : -1;
      const targetSelector = item.getAttribute("data-tabs");
      const target = targetSelector ? document.querySelector<HTMLElement>(targetSelector) : null;
      if (target) {
        target.classList.toggle("active", selected);
        if (!isSlider) {
          target.hidden = !selected;
        }
      }
    });

    if (this.panelSelector && !isSlider) {
      document.querySelectorAll<HTMLElement>(this.panelSelector).forEach((item) => {
        if (item !== panel) item.hidden = true;
      });
    }

    panel.setAttribute("role", panel.getAttribute("role") || "tabpanel");

    if (isSlider && track && targetIndex >= 0) {
      track.style.transition = animate ? "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)" : "none";
      track.style.transform = `translate3d(-${targetIndex * 100}%, 0, 0)`;
    }

    // Keep the active tab visible inside its own (horizontally scrolling) tab list,
    // without scrolling the page; skipped on initial activation.
    if (animate) {
      const list = tab.parentElement;
      if (list && list.scrollWidth > list.clientWidth) {
        list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
      }
    }
    emit(this.element, "tabs:show", { tab, panel, index: targetIndex, instance: this });
    return this;
  }
}

export class Toast extends Component {
  static componentName = "toast";

  timeout: ReturnType<typeof setTimeout> | null = null;
  delay!: number;
  autohide!: boolean;

  constructor(element: HTMLElement, options: ToastOptions = {}) {
    super(element, options);
    this.updateOptions(options);
    element.setAttribute("role", element.getAttribute("role") || "status");
    element.setAttribute("aria-live", element.getAttribute("aria-live") || "polite");
  }

  updateOptions(options: ToastOptions = {}): this {
    super.updateOptions(options);
    this.delay = getNumberOption(this.options, this.element, "toast", "delay", 5000);
    this.autohide = getBooleanOption(this.options, this.element, "toast", "autohide", true);
    return this;
  }

  show(): this {
    this.element.classList.add("toast-show");
    if (this.timeout) clearTimeout(this.timeout);
    if (this.autohide && this.delay > 0) this.timeout = setTimeout(() => this.hide(), this.delay);
    emit(this.element, "toast:show", { instance: this });
    return this;
  }

  hide(): this {
    this.element.classList.remove("toast-show");
    if (this.timeout) clearTimeout(this.timeout);
    emit(this.element, "toast:hide", { instance: this });
    return this;
  }

  destroy(): void {
    if (this.timeout) clearTimeout(this.timeout);
    super.destroy();
  }
}

export class Carousel extends Component {
  static componentName = "carousel";

  timeout: ReturnType<typeof setInterval> | null = null;
  items: HTMLElement[];
  index: number;
  interval!: number;
  autoplay!: boolean;
  pauseOnHover!: boolean;
  keyboard!: boolean;
  loop!: boolean;

  constructor(element: HTMLElement, options: CarouselOptions = {}) {
    super(element, options);
    this.items = Array.from(element.querySelectorAll<HTMLElement>("[data-carousel-item]"));
    this.index = this.resolveInitialIndex();
    this.updateOptions(options);
    this.show(this.index);
    this.on(element, "click", (event: Event) => {
      const target = event.target as Element;
      const indicator = target.closest<HTMLElement>("[data-carousel-to]");
      if (indicator) {
        this.show(Number(indicator.getAttribute("data-carousel-to")));
        return;
      }
      const action = target.closest<HTMLElement>("[data-carousel]");
      if (!action) return;
      const value = action.getAttribute("data-carousel");
      if (value === "next") this.next();
      if (value === "prev") this.prev();
      if (value !== "next" && value !== "prev" && value !== "") this.show(Number(value));
    });
    this.on(element, "keydown", (event: Event) => {
      const keyEvent = event as KeyboardEvent;
      if (!this.keyboard || !["ArrowLeft", "ArrowRight"].includes(keyEvent.key)) return;
      event.preventDefault();
      if (keyEvent.key === "ArrowRight") this.next();
      if (keyEvent.key === "ArrowLeft") this.prev();
    });
    if (this.pauseOnHover) {
      this.on(element, "mouseenter", () => this.pause());
      this.on(element, "mouseleave", () => this.play());
    }
    if (this.autoplay) this.play();
  }

  updateOptions(options: CarouselOptions = {}): this {
    super.updateOptions(options);
    this.interval = getNumberOption(this.options, this.element, "carousel", "interval", 5000);
    this.autoplay = getBooleanOption(this.options, this.element, "carousel", "autoplay", false);
    this.pauseOnHover = getBooleanOption(this.options, this.element, "carousel", "pauseOnHover", true);
    this.keyboard = getBooleanOption(this.options, this.element, "carousel", "keyboard", true);
    this.loop = getBooleanOption(this.options, this.element, "carousel", "loop", true);
    const activeIndex = getNumberOption(this.options, this.element, "carousel", "activeIndex", -1);
    if (activeIndex >= 0) this.show(activeIndex);
    if (this.autoplay) this.play();
    if (!this.autoplay) this.pause();
    return this;
  }

  resolveInitialIndex(): number {
    const configured = getNumberOption(this.options, this.element, "carousel", "activeIndex", -1);
    if (configured >= 0) return configured;
    return Math.max(
      0,
      this.items.findIndex((item) => !item.hidden)
    );
  }

  show(index: number): this {
    if (!this.items.length) return this;
    if (!this.loop && (index < 0 || index >= this.items.length)) return this;
    this.index = (index + this.items.length) % this.items.length;
    this.items.forEach((item, itemIndex) => {
      item.hidden = itemIndex !== this.index;
    });
    this.element.querySelectorAll<HTMLElement>("[data-carousel-to]").forEach((indicator) => {
      const isActive = Number(indicator.getAttribute("data-carousel-to")) === this.index;
      indicator.classList.toggle("active", isActive);
      if (isActive) indicator.setAttribute("aria-current", "true");
      else indicator.removeAttribute("aria-current");
    });
    emit(this.element, "carousel:show", { index: this.index, instance: this });
    return this;
  }

  next(): this {
    return this.show(this.index + 1);
  }

  prev(): this {
    return this.show(this.index - 1);
  }

  play(): this {
    if (this.timeout) clearInterval(this.timeout);
    if (this.autoplay && this.interval > 0) {
      this.timeout = setInterval(() => this.next(), this.interval);
    }
    return this;
  }

  pause(): this {
    if (this.timeout) clearInterval(this.timeout);
    this.timeout = null;
    return this;
  }

  destroy(): void {
    this.pause();
    super.destroy();
  }
}

export class Offcanvas extends Modal {
  static override componentName = "offcanvas";

  constructor(element: HTMLElement, options: OffcanvasOptions = {}) {
    super(element, options);
    // The panel is the element itself, so "outside" means outside the panel.
    this.on(document, "pointerdown", (event: Event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!this.isOpen || !isTopOverlay(this) || !target || this.element.contains(target)) return;
      if (target.closest("[data-offcanvas], [data-offcanvas-toggle]")) return;
      if (this.backdrop === "static") return;
      if (this.backdrop) this.hide();
    });
  }

  override isBackdropClick(): boolean {
    return false;
  }

  override show(): this {
    if (this.isOpen) return this;
    this.previousFocus = document.activeElement as HTMLElement | null;
    this.isOpen = true;
    this.element.classList.add("offcanvas-open");
    this.element.setAttribute("aria-hidden", "false");
    pushOverlay(this, this.scrollLock);
    if (this.focus) this.focusFirst();
    emit(this.element, "offcanvas:show", { instance: this });
    return this;
  }

  override hide(): this {
    if (!this.isOpen) return this;
    this.isOpen = false;
    this.element.classList.remove("offcanvas-open");
    this.element.setAttribute("aria-hidden", "true");
    popOverlay(this, this.scrollLock);
    if (this.previousFocus && typeof this.previousFocus.focus === "function") this.previousFocus.focus();
    emit(this.element, "offcanvas:hide", { instance: this });
    return this;
  }
}

function readTriggerOptions(trigger: Element, component: string, names: string[]): Record<string, string> {
  return names.reduce<Record<string, string>>((options, name) => {
    const value = getData(trigger, component, name);
    if (value !== null) options[name] = value;
    return options;
  }, {});
}

function dismissTarget(target: HTMLElement | null): void {
  if (!target) return;
  if (target.classList.contains("modal")) {
    getInstance(target, Modal).hide();
  } else if (target.classList.contains("offcanvas")) {
    getInstance(target, Offcanvas).hide();
  } else if (target.classList.contains("toast")) {
    getInstance(target, Toast).hide();
  } else if (target.classList.contains("dropdown") || target.matches("[data-dropdown]")) {
    getInstance(target, Dropdown).hide();
  } else {
    target.remove();
  }
}

function resolveDismissTargets(trigger: Element): HTMLElement[] {
  const selector = trigger.getAttribute("data-dismiss");
  if (selector) {
    try {
      return Array.from(document.querySelectorAll<HTMLElement>(selector));
    } catch {
      return [];
    }
  }

  const localTarget = trigger.closest<HTMLElement>(".alert,.toast,.modal,.offcanvas,.dropdown,.popover,.tooltip");
  return localTarget ? [localTarget] : [];
}

// ── Delegated data API ─────────────────────────────────────────────────────────
// One document-level listener per event type: works for content rendered after
// init() and never accumulates per-element listeners across SPA re-renders.
let delegatedDataApiBound = false;

function setCollapse(panel: HTMLElement, open: boolean, trigger: HTMLElement | null): void {
  panel.classList.toggle("collapse-show", open);
  panel.classList.toggle("show", open);
  const id = panel.id ? `#${panel.id}` : null;
  document.querySelectorAll<HTMLElement>("[data-collapse],[data-collapse-target]").forEach((item) => {
    const selector = item.getAttribute("data-collapse-target") || item.getAttribute("data-collapse");
    if (item === trigger || (id && selector === id)) item.setAttribute("aria-expanded", String(open));
  });
  emit(panel, open ? "collapse:show" : "collapse:hide", { trigger });
}

function autogrowTextarea(textarea: HTMLTextAreaElement): void {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function bindDelegatedDataApi(): void {
  if (delegatedDataApiBound || typeof document === "undefined") return;
  delegatedDataApiBound = true;

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const collapseTrigger = target.closest<HTMLElement>("[data-collapse],[data-collapse-target]");
    if (collapseTrigger) {
      const selector =
        collapseTrigger.getAttribute("data-collapse-target") || collapseTrigger.getAttribute("data-collapse");
      const panel = selector ? document.querySelector<HTMLElement>(selector) : null;
      if (panel) {
        event.preventDefault();
        setCollapse(panel, !panel.classList.contains("collapse-show"), collapseTrigger);
      }
      return;
    }

    const chipRemove = target.closest<HTMLElement>("[data-chip-remove]");
    if (chipRemove) {
      const chip = chipRemove.closest<HTMLElement>(".chip");
      if (!chip) return;
      event.preventDefault();
      // Cancelable: listeners can call preventDefault() to keep the chip.
      const removeEvent = new CustomEvent("aksara:chip:remove", { bubbles: true, cancelable: true, detail: { chip } });
      if (chip.dispatchEvent(removeEvent)) chip.remove();
      return;
    }

    const spyLink = target.closest<HTMLAnchorElement>("[data-scrollspy-link]");
    if (spyLink) {
      const container = document.querySelector<HTMLElement>(spyLink.getAttribute("data-scrollspy-container") || "");
      const section = container?.querySelector<HTMLElement>(spyLink.getAttribute("href") || "");
      if (container && section) {
        event.preventDefault();
        container.scrollTo({ top: section.offsetTop - container.offsetTop, behavior: "smooth" });
      }
    }
  });

  document.addEventListener("input", (event) => {
    const field = event.target;
    if (field instanceof HTMLTextAreaElement && field.matches('[data-role="autogrow"]')) autogrowTextarea(field);
  });

  // Scrollspy: highlight the link of the section nearest the container's top edge.
  document.addEventListener(
    "scroll",
    (event) => {
      const container = event.target instanceof HTMLElement ? event.target : null;
      if (!container?.id) return;
      const links = document.querySelectorAll<HTMLAnchorElement>(
        `[data-scrollspy-link][data-scrollspy-container="#${container.id}"]`
      );
      if (!links.length) return;
      let active: HTMLAnchorElement | null = null;
      for (const link of Array.from(links)) {
        const section = container.querySelector<HTMLElement>(link.getAttribute("href") || "");
        if (section && section.offsetTop - container.offsetTop <= container.scrollTop + 8) active = link;
      }
      active = active ?? links[0];
      links.forEach((link) => {
        link.classList.toggle("active", link === active);
        if (link === active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    },
    true
  );
}

function bindDataApi(): void {
  document.querySelectorAll<HTMLElement>("[data-dismiss]").forEach((trigger) => {
    const customTrigger = trigger as HTMLElement & { __aksaraDismissTrigger?: boolean };
    if (customTrigger.__aksaraDismissTrigger) return;
    customTrigger.__aksaraDismissTrigger = true;
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      resolveDismissTargets(trigger).forEach((target) => dismissTarget(target));
    });
  });
  document.querySelectorAll<HTMLElement>("[data-modal-close]").forEach((trigger) => {
    const customTrigger = trigger as HTMLElement & { __aksaraModalCloseTrigger?: boolean };
    if (customTrigger.__aksaraModalCloseTrigger) return;
    customTrigger.__aksaraModalCloseTrigger = true;
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSelector = trigger.getAttribute("data-modal-close");
      const modal = targetSelector
        ? document.querySelector<HTMLElement>(targetSelector)
        : trigger.closest<HTMLElement>(".modal");
      if (modal) getInstance(modal, Modal).hide();
    });
  });
  document.querySelectorAll<HTMLElement>("[data-modal]").forEach((trigger) => {
    const customTrigger = trigger as HTMLElement & { __aksaraModalTrigger?: boolean };
    if (customTrigger.__aksaraModalTrigger) return;
    customTrigger.__aksaraModalTrigger = true;
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSelector = trigger.getAttribute("data-modal");
      if (targetSelector) {
        const target = document.querySelector<HTMLElement>(targetSelector);
        if (target) {
          const options = readTriggerOptions(trigger, "modal", [
            "backdrop",
            "keyboard",
            "focus",
            "scrollLock",
            "draggable"
          ]);
          getInstance(target, Modal, options).show();
        }
      }
    });
  });
  document.querySelectorAll<HTMLElement>("[data-offcanvas-close]").forEach((trigger) => {
    const customTrigger = trigger as HTMLElement & { __aksaraOffcanvasCloseTrigger?: boolean };
    if (customTrigger.__aksaraOffcanvasCloseTrigger) return;
    customTrigger.__aksaraOffcanvasCloseTrigger = true;
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSelector = trigger.getAttribute("data-offcanvas-close");
      const panel = targetSelector
        ? document.querySelector<HTMLElement>(targetSelector)
        : trigger.closest<HTMLElement>(".offcanvas");
      if (panel) getInstance(panel, Offcanvas).hide();
    });
  });
  document.querySelectorAll<HTMLElement>("[data-offcanvas]").forEach((trigger) => {
    const customTrigger = trigger as HTMLElement & { __aksaraOffcanvasTrigger?: boolean };
    if (customTrigger.__aksaraOffcanvasTrigger) return;
    customTrigger.__aksaraOffcanvasTrigger = true;
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSelector = trigger.getAttribute("data-offcanvas");
      if (targetSelector) {
        const target = document.querySelector<HTMLElement>(targetSelector);
        if (target) {
          const options = readTriggerOptions(trigger, "offcanvas", ["backdrop", "keyboard", "focus", "scrollLock"]);
          getInstance(target, Offcanvas, options).show();
        }
      }
    });
  });
  document.querySelectorAll<HTMLElement>("[data-toast]").forEach((trigger) => {
    const customTrigger = trigger as HTMLElement & { __aksaraToastTrigger?: boolean };
    if (customTrigger.__aksaraToastTrigger) return;
    customTrigger.__aksaraToastTrigger = true;
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSelector = trigger.getAttribute("data-toast");
      if (targetSelector) {
        const target = document.querySelector<HTMLElement>(targetSelector);
        if (target) {
          const options = readTriggerOptions(trigger, "toast", ["delay", "autohide"]);
          getInstance(target, Toast, options).show();
        }
      }
    });
  });
}

export interface ConfirmModalOptions {
  title: string;
  message: string;
  tone?: "danger" | "warning" | "primary" | "info" | "success" | string;
  confirmLabel?: string;
  cancelLabel?: string;
  icon?: string;
}

export interface AlertModalOptions {
  title: string;
  message: string;
  tone?: "primary" | "danger" | "warning" | "info" | "success" | string;
  buttonLabel?: string;
  icon?: string;
}

export interface ToastNotifyOptions {
  icon?: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | string;
  duration?: number;
}

export interface AksaraNamespace {
  Modal: typeof Modal;
  Tooltip: typeof Tooltip;
  Popover: typeof Popover;
  Accordion: typeof Accordion;
  Dropdown: typeof Dropdown;
  Tabs: typeof Tabs;
  Toast: typeof Toast;
  Carousel: typeof Carousel;
  Offcanvas: typeof Offcanvas;
  modal(
    target?: TargetElements | (ModalOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: ModalOptions
  ): Modal;
  tooltip(
    target?: TargetElements | (TooltipOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: TooltipOptions
  ): Tooltip;
  popover(
    target?: TargetElements | (PopoverOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: PopoverOptions
  ): Popover;
  accordion(
    target?: TargetElements | (AccordionOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: AccordionOptions
  ): Accordion;
  dropdown(
    target?: TargetElements | (DropdownOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: DropdownOptions
  ): Dropdown;
  tabs(
    target?: TargetElements | (TabsOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: TabsOptions
  ): Tabs;
  toast(
    target?: TargetElements | (ToastOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: ToastOptions
  ): Toast;
  carousel(
    target?: TargetElements | (CarouselOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: CarouselOptions
  ): Carousel;
  offcanvas(
    target?: TargetElements | (OffcanvasOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: OffcanvasOptions
  ): Offcanvas;
  setTheme(theme: "light" | "dark" | "system"): "light" | "dark" | "system";
  getTheme(): "light" | "dark" | "system";
  initTheme(): "light" | "dark" | "system";
  confirm(options: ConfirmModalOptions): Promise<boolean>;
  alert(options: AlertModalOptions): Promise<void>;
  notify(message: string, options?: ToastNotifyOptions): void;
  clipboard(target: string | HTMLElement, text?: string): Promise<boolean>;
  init(root?: ParentNode | Document | HTMLElement): AksaraNamespace;
  destroy(): AksaraNamespace;
}

const injectedArbitraryRules = new Set<string>();
let arbitrarySheet: CSSStyleSheet | null = null;

function getArbitrarySheet(): CSSStyleSheet | null {
  if (typeof document === "undefined") return null;
  if (!arbitrarySheet) {
    if ("adoptedStyleSheets" in document && typeof CSSStyleSheet !== "undefined") {
      try {
        arbitrarySheet = new CSSStyleSheet();
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, arbitrarySheet];
        return arbitrarySheet;
      } catch {
        // Fallback to style tag below
      }
    }
    let styleEl = document.getElementById("aksara-arbitrary-styles") as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "aksara-arbitrary-styles";
      document.head?.appendChild(styleEl);
    }
    arbitrarySheet = styleEl.sheet;
  }
  return arbitrarySheet;
}

export function escapeArbitraryClass(className: string): string {
  return Array.from(className)
    .map((char, index) => {
      if (/^[a-zA-Z_-]$/.test(char)) return char;
      if (/^[0-9]$/.test(char)) {
        return index === 0 ? `\\${char.charCodeAt(0).toString(16).padStart(6, "0")}` : char;
      }
      return `\\${char}`;
    })
    .join("");
}

const cssColorValuePattern =
  /^(#[0-9a-fA-F]{3,8}$|(rgba?|hsla?|hwb|lab|lch|oklab|oklch|color|color-mix|light-dark)\(|var\(--|currentColor$|transparent$)/i;
const cssImageValuePattern = /^(url|image-set|(repeating-)?(linear|radial|conic)-gradient)\(/i;

export const runtimeArbitraryPropertyMap: Record<string, (v: string) => string> = {
  m: (v) => `margin:${v}`,
  mt: (v) => `margin-block-start:${v}`,
  mb: (v) => `margin-block-end:${v}`,
  ms: (v) => `margin-inline-start:${v}`,
  me: (v) => `margin-inline-end:${v}`,
  mx: (v) => `margin-inline:${v}`,
  my: (v) => `margin-block:${v}`,
  p: (v) => `padding:${v}`,
  pt: (v) => `padding-block-start:${v}`,
  pb: (v) => `padding-block-end:${v}`,
  ps: (v) => `padding-inline-start:${v}`,
  pe: (v) => `padding-inline-end:${v}`,
  px: (v) => `padding-inline:${v}`,
  py: (v) => `padding-block:${v}`,
  gap: (v) => `gap:${v}`,
  "row-gap": (v) => `row-gap:${v}`,
  "col-gap": (v) => `column-gap:${v}`,
  "gap-y": (v) => `row-gap:${v}`,
  "gap-x": (v) => `column-gap:${v}`,
  g: (v) => `--aksara-gutter-x:${v};--aksara-gutter-y:${v}`,
  gx: (v) => `--aksara-gutter-x:${v}`,
  gy: (v) => `--aksara-gutter-y:${v}`,
  w: (v) => `width:${v}`,
  h: (v) => `height:${v}`,
  "min-w": (v) => `min-width:${v}`,
  "max-w": (v) => `max-width:${v}`,
  "min-h": (v) => `min-height:${v}`,
  "max-h": (v) => `max-height:${v}`,
  top: (v) => `inset-block-start:${v}`,
  bottom: (v) => `inset-block-end:${v}`,
  start: (v) => `inset-inline-start:${v}`,
  end: (v) => `inset-inline-end:${v}`,
  left: (v) => `left:${v}`,
  right: (v) => `right:${v}`,
  inset: (v) => `inset:${v}`,
  "inset-x": (v) => `inset-inline:${v}`,
  "inset-y": (v) => `inset-block:${v}`,
  "inset-block-start": (v) => `inset-block-start:${v}`,
  "inset-block-end": (v) => `inset-block-end:${v}`,
  "inset-inline-start": (v) => `inset-inline-start:${v}`,
  "inset-inline-end": (v) => `inset-inline-end:${v}`,
  "inset-block": (v) => `inset-block:${v}`,
  "inset-inline": (v) => `inset-inline:${v}`,
  "translate-x": (v) => `transform:translateX(${v})`,
  "translate-y": (v) => `transform:translateY(${v})`,
  rotate: (v) => `transform:rotate(${v})`,
  scale: (v) => `transform:scale(${v})`,
  "skew-x": (v) => `transform:skewX(${v})`,
  "skew-y": (v) => `transform:skewY(${v})`,
  rounded: (v) => `border-radius:${v}`,
  // `border-[#ccc]` is a color; `border-[2px]` / `border-[var(--w)]` stay widths.
  border: (v) => (cssColorValuePattern.test(v) && !/^var\(/i.test(v) ? `border-color:${v}` : `border-width:${v}`),
  "border-t": (v) => `border-top-width:${v}`,
  "border-b": (v) => `border-bottom-width:${v}`,
  "border-s": (v) => `border-inline-start-width:${v}`,
  "border-e": (v) => `border-inline-end-width:${v}`,
  "border-x": (v) => `border-inline-width:${v}`,
  "border-y": (v) => `border-block-width:${v}`,
  opacity: (v) => `opacity:${v}`,
  z: (v) => `z-index:${v}`,
  leading: (v) => `line-height:${v}`,
  tracking: (v) => `letter-spacing:${v}`,
  text: (v) => {
    if (/^(start|center|end|justify|left|right|inline-start|inline-end)$/i.test(v)) {
      return `text-align:${v}`;
    }
    return cssColorValuePattern.test(v) ? `color:${v}` : `font-size:${v}`;
  },
  bg: (v) => (cssImageValuePattern.test(v) ? `background-image:${v}` : `background-color:${v}`),
  "bg-color": (v) => `background-color:${v}`,
  overscroll: (v) => `overscroll-behavior:${v}`,
  "overscroll-x": (v) => `overscroll-behavior-x:${v}`,
  "overscroll-y": (v) => `overscroll-behavior-y:${v}`,
  fw: (v) => `font-weight:${v}`,
  "font-weight": (v) => `font-weight:${v}`,
  fs: (v) => `font-size:${v}`,
  "font-size": (v) => `font-size:${v}`,
  lh: (v) => `line-height:${v}`,
  "line-height": (v) => `line-height:${v}`,
  "text-align": (v) => `text-align:${v}`,
  align: (v) => `vertical-align:${v}`,
  "vertical-align": (v) => `vertical-align:${v}`,
  items: (v) => `align-items:${v}`,
  "align-items": (v) => `align-items:${v}`,
  justify: (v) => `justify-content:${v}`,
  "justify-content": (v) => `justify-content:${v}`,
  self: (v) => `align-self:${v}`,
  "align-self": (v) => `align-self:${v}`,
  content: (v) => `align-content:${v}`,
  "align-content": (v) => `align-content:${v}`,
  d: (v) => `display:${v}`,
  display: (v) => `display:${v}`,
  pos: (v) => `position:${v}`,
  position: (v) => `position:${v}`,
  aspect: (v) => `aspect-ratio:${v}`,
  "aspect-ratio": (v) => `aspect-ratio:${v}`,
  cursor: (v) => `cursor:${v}`,
  select: (v) => `user-select:${v}`,
  "user-select": (v) => `user-select:${v}`,
  pointer: (v) => `pointer-events:${v}`,
  "pointer-events": (v) => `pointer-events:${v}`,
  fit: (v) => `object-fit:${v}`,
  "object-fit": (v) => `object-fit:${v}`,
  overflow: (v) => `overflow:${v}`,
  "overflow-x": (v) => `overflow-x:${v}`,
  "overflow-y": (v) => `overflow-y:${v}`,
  shadow: (v) => `box-shadow:${v}`,
  "box-shadow": (v) => `box-shadow:${v}`,
  flex: (v) => `flex:${v}`,
  grow: (v) => `flex-grow:${v}`,
  "flex-grow": (v) => `flex-grow:${v}`,
  shrink: (v) => `flex-shrink:${v}`,
  "flex-shrink": (v) => `flex-shrink:${v}`,
  order: (v) => `order:${v}`,
  backdrop: (v) => `backdrop-filter:${v}`,
  "backdrop-filter": (v) => `backdrop-filter:${v}`,
  "backdrop-blur": (v) => `backdrop-filter:blur(${v})`,
  "backdrop-saturate": (v) => `backdrop-filter:saturate(${v})`,
  filter: (v) => `filter:${v}`,
  blur: (v) => `filter:blur(${v})`,
  transition: (v) => `transition:${v}`,
  duration: (v) => `transition-duration:${v}`,
  ease: (v) => `transition-timing-function:${v}`,
  delay: (v) => `transition-delay:${v}`,
  "line-clamp": (v) => `display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:${v};overflow:hidden`,
  whitespace: (v) => `white-space:${v}`,
  "white-space": (v) => `white-space:${v}`
};

export const runtimeBreakpoints: Record<string, string> = {
  sm: "36rem",
  md: "48rem",
  lg: "62rem",
  xl: "75rem",
  "2xl": "87.5rem",
  "3xl": "100rem"
};

export const runtimeStateSelectors: Record<string, string> = {
  hover: ":hover",
  focus: ":focus",
  active: ":active",
  disabled: ":disabled",
  checked: ":checked",
  selected: '[aria-selected="true"]',
  visited: ":visited",
  first: ":first-child",
  last: ":last-child",
  odd: ":nth-child(odd)",
  even: ":nth-child(even)"
};

export function parseModifiersAndUtility(className: string): { modifiers: string[]; utility: string } {
  const parts: string[] = [];
  let bracketDepth = 0;
  let current = "";
  for (let i = 0; i < className.length; i++) {
    const ch = className[i];
    if (ch === "[") bracketDepth++;
    else if (ch === "]") bracketDepth--;

    if (ch === ":" && bracketDepth === 0) {
      parts.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  parts.push(current);
  const utility = parts.pop() ?? "";
  return { modifiers: parts, utility };
}

/**
 * Semantic palette names that support on-demand color opacity utilities
 * (`bg-primary/10`, `border-danger/30`, `hover:text-info/80`, ...).
 * Must stay in sync with the `colors` map in `src/generator/build.ts`
 * (enforced by the acceptance tests).
 */
const runtimeColorNames = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "danger",
  "warning",
  "info",
  "dark",
  "light"
] as const;

const runtimeColorOpacityProperties: Record<string, string> = {
  bg: "background-color",
  text: "color",
  border: "border-color",
  decoration: "text-decoration-color",
  ring: "--aksara-ring-color"
};

const runtimeColorOpacityPattern = new RegExp(
  `^(${Object.keys(runtimeColorOpacityProperties).join("|")})-(${runtimeColorNames.join("|")})\\/(\\d{1,3})$`
);

/**
 * Color opacity utilities are not shipped in the static stylesheet (101 levels x
 * 5 properties x 9 colors would add thousands of rules). They are resolved on
 * demand, like arbitrary bracket classes, once `Aksara.init()` has run.
 */
function resolveColorOpacity(utility: string): string | null {
  const match = utility.match(runtimeColorOpacityPattern);
  if (!match) return null;
  const level = Number(match[3]);
  if (level > 100) return null;
  return `${runtimeColorOpacityProperties[match[1]]}:rgb(var(--aksara-${match[2]}) / ${level / 100})`;
}

export function resolveArbitraryDeclarations(utility: string): string | null {
  let prop: string;
  let val: string;
  let isNegative = false;

  const bracketMatch = utility.match(/^\[([a-zA-Z0-9_-]+):(.+)\]$/);
  if (bracketMatch) {
    prop = bracketMatch[1];
    if (!prop.startsWith("-")) {
      prop = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    val = bracketMatch[2];
  } else {
    const match = utility.match(/^(-)?([a-zA-Z0-9_-]+)-\[(.+)\]$/);
    if (!match) return null;
    isNegative = Boolean(match[1]);
    prop = match[2];
    val = match[3];

    // If leading hyphen was part of a vendor prefix (-webkit-, -moz-, -ms-, -o-), treat it as part of prop
    if (isNegative && /^(webkit|moz|ms|o)-/i.test(prop)) {
      prop = `-${prop}`;
      isNegative = false;
    } else {
      prop = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
  }

  // Convert unescaped underscores to spaces (e.g. shadow-[0_4px_6px_rgba(...)])
  val = val
    .replace(/(?<!\\)_/g, " ")
    .replace(/\\_/g, "_")
    .trim();

  if (isNegative && !val.startsWith("-")) {
    val = `-${val}`;
  }

  // A value must stay a single declaration value: `w-[1px;position:fixed]` or
  // `bg-[red;}body{...]` would otherwise inject extra declarations or rules.
  if (!val || /[;{}]/.test(val) || /[;{}]/.test(prop)) return null;

  const resolver = runtimeArbitraryPropertyMap[prop];
  return resolver ? resolver(val) : `${prop}:${val}`;
}

/**
 * Margin, padding and radius utilities carry `!important` (they must beat component
 * CSS). Static and runtime-generated classes share this rule so `p-3 md:p-[2rem]`
 * behaves the same whether the class was precompiled or generated on demand.
 */
export function shouldUseImportant(utility: string): boolean {
  if (/^(rounded|radius)(-|$)/.test(utility)) return true;
  return /^-?m[tbeasxy]?-(auto|\d+|\[.+\])$/.test(utility) || /^p[tbeasxy]?-(auto|\d+|\[.+\])$/.test(utility);
}

export function withImportant(declarations: string): string {
  return declarations
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((decl) => (decl.includes("!important") ? decl : `${decl} !important`))
    .join(";");
}

const themeVariantNames = ["dark", "light"];
const breakpointOrder = Object.keys(runtimeBreakpoints);

interface ParsedVariants {
  theme: string | null;
  breakpoint: string | null;
  states: string[];
  groupHover: boolean;
}

/**
 * Validates variant prefixes: known names only, in `theme -> breakpoint -> state`
 * order. Unknown or misordered variants return null instead of silently producing
 * an unconditional rule (`print:m-[3px]` must not become `margin:3px` everywhere).
 */
function parseVariants(modifiers: string[]): ParsedVariants | null {
  const parsed: ParsedVariants = { theme: null, breakpoint: null, states: [], groupHover: false };
  let stage = 0;
  for (const variant of modifiers) {
    let next: number;
    if (themeVariantNames.includes(variant)) next = 1;
    else if (runtimeBreakpoints[variant]) next = 2;
    else if (runtimeStateSelectors[variant] || variant === "group-hover") next = 3;
    else return null;
    if (next < stage || (next === stage && next !== 3)) return null;
    stage = next;
    if (next === 1) parsed.theme = variant;
    else if (next === 2) parsed.breakpoint = variant;
    else if (variant === "group-hover") parsed.groupHover = true;
    else parsed.states.push(variant);
  }
  return parsed;
}

/** Static utility declarations, looked up for variants (`hover:bg-subtle`, `last:border-0`). */
export type StaticUtilityLookup = (utility: string) => string | null;

function unescapeCssIdentifier(value: string): string {
  return value
    .replace(/\\([0-9a-fA-F]{1,6})\s?/g, (_, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/\\(.)/g, "$1");
}

let staticUtilityIndex: Map<string, string> | null = null;
let staticClassNames: Set<string> | null = null;
let indexedSheetCount = -1;

/**
 * Indexes the page's own stylesheets once (rebuilt when stylesheets are added):
 * single-class rules give the declarations of static utilities, and every leading
 * class name tells which variant classes already exist statically.
 * Cross-origin sheets without CORS cannot be read and are skipped.
 */
function indexStaticStylesheets(): void {
  if (typeof document === "undefined") return;
  const sheets = document.styleSheets;
  if (staticUtilityIndex && staticClassNames && sheets.length === indexedSheetCount) return;
  staticUtilityIndex = new Map();
  staticClassNames = new Set();
  indexedSheetCount = sheets.length;
  const visit = (rules: CSSRuleList, topLevel: boolean): void => {
    for (const rule of Array.from(rules)) {
      const nested = (rule as CSSGroupingRule).cssRules;
      if (!(rule as CSSStyleRule).selectorText) {
        if (nested) visit(nested, false);
        continue;
      }
      const styleRule = rule as CSSStyleRule;
      for (const selector of styleRule.selectorText.split(",")) {
        const trimmed = selector.trim();
        const leading = trimmed.match(/^\.((?:\\[0-9a-fA-F]{1,6}\s?|\\.|[\w-])+)/);
        if (leading) staticClassNames?.add(unescapeCssIdentifier(leading[1]));
        const simple = trimmed.match(/^\.([a-zA-Z_-][\w-]*)$/);
        if (topLevel && simple) staticUtilityIndex?.set(simple[1], styleRule.style.cssText);
      }
    }
  };
  for (const sheet of Array.from(sheets)) {
    try {
      visit(sheet.cssRules, true);
    } catch {
      // Cross-origin stylesheet without CORS headers
    }
  }
}

function lookupStaticUtility(utility: string): string | null {
  indexStaticStylesheets();
  return staticUtilityIndex?.get(utility) ?? null;
}

function isStaticallyDefined(className: string): boolean {
  indexStaticStylesheets();
  return staticClassNames?.has(className) ?? false;
}

/** Returns true when a class token may need a runtime-generated rule. */
function isRuntimeClassToken(token: string): boolean {
  if (token.includes("[")) return token.endsWith("]");
  if (token.includes("/") && runtimeColorOpacityPattern.test(parseModifiersAndUtility(token).utility)) return true;
  return token.includes(":");
}

interface RuntimeRules {
  rules: string[];
  breakpoint: string | null;
}

function buildRuntimeRules(className: string, lookup: StaticUtilityLookup): RuntimeRules | null {
  const { modifiers, utility } = parseModifiersAndUtility(className);
  if (!utility) return null;
  const variants = parseVariants(modifiers);
  if (!variants) return null;

  let declarations = resolveColorOpacity(utility) ?? resolveArbitraryDeclarations(utility);
  // Variants of static utilities (`hover:bg-subtle`) reuse the static declarations.
  if (!declarations && modifiers.length > 0) declarations = lookup(utility);
  if (!declarations) return null;
  if (shouldUseImportant(utility)) declarations = withImportant(declarations);

  const escaped = escapeArbitraryClass(className);
  const states = variants.states.map((state) => runtimeStateSelectors[state]).join("");
  const selector = `${variants.groupHover ? ".group:hover " : ""}.${escaped}${states}`;
  let rule = `${selector}{${declarations}}`;
  if (variants.theme) {
    rule = `[data-theme="${variants.theme}"] ${selector},.${variants.theme} ${selector}{${declarations}}`;
  }
  const rules = [rule];

  // `.row` uses gutter variables instead of `gap`; mirror the static gap utilities.
  const gap = modifiers.length === 0 ? utility.match(/^(gap|row-gap|col-gap|gap-x|gap-y)-\[(.+)\]$/) : null;
  if (gap) {
    const value = gap[2].replace(/(?<!\\)_/g, " ").replace(/\\_/g, "_");
    const row = `.row.${escaped}`;
    if (gap[1] === "gap")
      rules.push(`${row}{--aksara-gutter-x:${value};--aksara-gutter-y:${value};column-gap:0;row-gap:0}`);
    else if (gap[1] === "col-gap" || gap[1] === "gap-x") rules.push(`${row}{--aksara-gutter-x:${value};column-gap:0}`);
    else rules.push(`${row}{--aksara-gutter-y:${value};row-gap:0}`);
  }

  if (variants.breakpoint) {
    const media = `@media (min-width:${runtimeBreakpoints[variants.breakpoint]})`;
    return { rules: rules.map((r) => `${media}{${r}}`), breakpoint: variants.breakpoint };
  }
  return { rules, breakpoint: null };
}

/**
 * Builds the CSS rules for a runtime utility class: arbitrary bracket classes, color
 * opacity classes, and variants of static utilities, with theme/breakpoint/state
 * variants. Pure function; `lookup` resolves static utilities (defaults to the
 * page's stylesheets). Returns an empty array for classes the engine does not handle.
 */
export function resolveRuntimeRules(className: string, lookup: StaticUtilityLookup = lookupStaticUtility): string[] {
  return buildRuntimeRules(className, lookup)?.rules ?? [];
}

/** First rule of `resolveRuntimeRules`, or null. */
export function resolveRuntimeRule(
  className: string,
  lookup: StaticUtilityLookup = lookupStaticUtility
): string | null {
  return resolveRuntimeRules(className, lookup)[0] ?? null;
}

// Base rules are kept before media rules, and media rules in breakpoint order, so a
// runtime `md:w-[50%]` still wins over `w-[100%]` regardless of discovery order.
let runtimeBaseRuleCount = 0;
const runtimeMediaRuleCounts: Record<string, number> = {};

function insertRuntimeRule(sheet: CSSStyleSheet, rule: string, breakpoint: string | null): void {
  let index = runtimeBaseRuleCount;
  if (breakpoint) {
    const order = breakpointOrder.indexOf(breakpoint);
    for (const bp of breakpointOrder.slice(0, order + 1)) index += runtimeMediaRuleCounts[bp] ?? 0;
  }
  try {
    sheet.insertRule(rule, Math.min(index, sheet.cssRules.length));
    if (breakpoint) runtimeMediaRuleCounts[breakpoint] = (runtimeMediaRuleCounts[breakpoint] ?? 0) + 1;
    else runtimeBaseRuleCount += 1;
  } catch {
    // Ignore if the browser rejects the rule syntax
  }
}

function injectArbitraryClass(className: string): void {
  if (injectedArbitraryRules.has(className)) return;
  injectedArbitraryRules.add(className);
  if (!className.includes("[") && !className.includes("/") && isStaticallyDefined(className)) return;

  const built = buildRuntimeRules(className, lookupStaticUtility);
  if (!built) return;

  const sheet = getArbitrarySheet();
  if (!sheet) return;
  for (const rule of built.rules) insertRuntimeRule(sheet, rule, built.breakpoint);
}

function processElementClasses(el: Element): void {
  const classAttr = el.getAttribute("class");
  if (!classAttr || (!classAttr.includes("[") && !classAttr.includes("/") && !classAttr.includes(":"))) return;
  const tokens = classAttr.split(/\s+/);
  for (const token of tokens) {
    if (isRuntimeClassToken(token)) {
      injectArbitraryClass(token);
    }
  }
}

function scanArbitraryDom(root: ParentNode = document): void {
  if (typeof document === "undefined") return;
  if (root instanceof Element) {
    processElementClasses(root);
  }
  root.querySelectorAll('[class*="["],[class*="/"],[class*=":"]').forEach(processElementClasses);
}

let detachedCleanupScheduled = false;

/**
 * SPA re-renders remove component elements without calling destroy(). Instances whose
 * element is no longer in the document are destroyed (listeners and document
 * handlers released). Checked after the mutation batch, so moved nodes survive.
 */
function scheduleDetachedCleanup(): void {
  if (detachedCleanupScheduled) return;
  detachedCleanupScheduled = true;
  queueMicrotask(() => {
    detachedCleanupScheduled = false;
    for (const instance of Array.from(instances)) {
      if (!instance.element.isConnected) instance.destroy();
    }
  });
}

let mutationObserverStarted = false;
function setupArbitraryObserver(): void {
  if (mutationObserverStarted || typeof MutationObserver === "undefined" || typeof document === "undefined") return;
  mutationObserverStarted = true;

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "attributes" && m.target instanceof Element) {
        processElementClasses(m.target);
      } else if (m.type === "childList") {
        m.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            scanArbitraryDom(node);
          }
        });
        if (m.removedNodes.length > 0) scheduleDetachedCleanup();
      }
    }
  });

  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["class"]
  });
}

let iconCheckScheduled = false;

/**
 * Material Design Icons are a required peer dependency (components render `mdi`
 * icons). Once the page has loaded, report a missing icon stylesheet instead of
 * failing silently with blank icons.
 */
function scheduleIconStylesheetCheck(): void {
  if (iconCheckScheduled || typeof window === "undefined" || typeof document === "undefined") return;
  iconCheckScheduled = true;

  const check = (): void => {
    if (!document.body) return;
    const probe = document.createElement("i");
    probe.className = "mdi mdi-check";
    probe.setAttribute("aria-hidden", "true");
    probe.style.cssText = "position:absolute;visibility:hidden;pointer-events:none";
    document.body.appendChild(probe);
    const family = getComputedStyle(probe, "::before").fontFamily;
    probe.remove();
    if (!/Material Design Icons/i.test(family)) {
      console.error(
        '[Aksara UI] Material Design Icons are not loaded. Import "@abydahana/aksara-ui/css/icons" (or link the @mdi/font stylesheet); Aksara components render mdi icons.'
      );
    }
  };

  if (document.readyState === "complete") setTimeout(check, 0);
  else window.addEventListener("load", check, { once: true });
}

/**
 * Mounts a one-off dialog (confirm/alert) in its own wrapper inside a shared host.
 * Each dialog is destroyed and removed on its own, so opening a second dialog right
 * after the first one closes is never wiped by the first one's cleanup.
 */
function mountTransientDialog(markup: string): { element: HTMLElement; close: () => void } | null {
  let host = document.getElementById("aksara-dialog-host");
  if (!host) {
    host = document.createElement("div");
    host.id = "aksara-dialog-host";
    document.body.appendChild(host);
  }
  const wrapper = document.createElement("div");
  wrapper.innerHTML = markup.trim();
  host.appendChild(wrapper);
  const element = wrapper.querySelector<HTMLElement>(".modal");
  if (!element) {
    wrapper.remove();
    return null;
  }
  const instance = getInstance(element, Modal);
  instance.show();
  return {
    element,
    close: () => {
      instance.hide();
      setTimeout(() => {
        instance.destroy();
        wrapper.remove();
      }, 200);
    }
  };
}

let themeMediaListenerBound = false;
let currentTheme: "light" | "dark" | "system" = "system";

function getSystemTheme(): "light" | "dark" {
  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

function applyTheme(theme: "light" | "dark" | "system"): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const effectiveTheme = theme === "system" ? getSystemTheme() : theme;
  root.setAttribute("data-theme", effectiveTheme);
  if (effectiveTheme === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
  }
}

function setupClipboard(root: ParentNode = document): void {
  if (typeof document === "undefined") return;
  root.querySelectorAll<HTMLElement>("[data-clipboard]").forEach((trigger) => {
    if (trigger.dataset.aksaraClipboardBound) return;
    trigger.dataset.aksaraClipboardBound = "true";
    trigger.addEventListener("click", async (e) => {
      e.preventDefault();
      const targetSelector = trigger.getAttribute("data-clipboard");
      let textToCopy = "";
      if (targetSelector && targetSelector.startsWith("#")) {
        const targetEl = document.querySelector(targetSelector);
        if (targetEl) {
          textToCopy = (targetEl as HTMLInputElement).value ?? targetEl.textContent ?? "";
        }
      } else if (targetSelector) {
        textToCopy = targetSelector;
      } else {
        textToCopy = trigger.getAttribute("data-clipboard-text") || trigger.textContent || "";
      }

      if (navigator.clipboard && textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          const originalText = trigger.getAttribute("data-clipboard-original") || trigger.innerHTML;
          const successText = trigger.getAttribute("data-clipboard-success");
          if (successText) {
            if (!trigger.hasAttribute("data-clipboard-original")) {
              trigger.setAttribute("data-clipboard-original", originalText);
            }
            trigger.innerHTML = successText;
            setTimeout(() => {
              trigger.innerHTML = originalText;
            }, 2000);
          }
          trigger.classList.add("is-copied");
          setTimeout(() => trigger.classList.remove("is-copied"), 2000);
          emit(trigger, "clipboard:copy", { text: textToCopy });
        } catch {
          // ignore error
        }
      }
    });
  });
}

export const Aksara: AksaraNamespace = {
  Modal,
  Tooltip,
  Popover,
  Accordion,
  Dropdown,
  Tabs,
  Toast,
  Carousel,
  Offcanvas,
  modal: (target, options) => {
    const args = resolveArgs(target, options, ".modal");
    return createAll(args.target, Modal, args.options);
  },
  tooltip: (target, options) => {
    const args = resolveArgs(target, options, "[data-tooltip]");
    return createAll(args.target, Tooltip, args.options);
  },
  popover: (target, options) => {
    const args = resolveArgs(target, options, "[data-popover]");
    return createAll(args.target, Popover, args.options);
  },
  accordion: (target, options) => {
    const args = resolveArgs(target, options, ".accordion");
    return createAll(args.target, Accordion, args.options);
  },
  dropdown: (target, options) => {
    const args = resolveArgs(target, options, "[data-dropdown], .dropdown");
    return createAll(args.target, Dropdown, args.options);
  },
  tabs: (target, options) => {
    const args = resolveArgs(target, options, ".tabs");
    return createAll(args.target, Tabs, args.options);
  },
  toast: (target, options) => {
    const args = resolveArgs(target, options, ".toast");
    return createAll(args.target, Toast, args.options);
  },
  carousel: (target, options) => {
    const args = resolveArgs(target, options, ".carousel");
    return createAll(args.target, Carousel, args.options);
  },
  offcanvas: (target, options) => {
    const args = resolveArgs(target, options, ".offcanvas");
    return createAll(args.target, Offcanvas, args.options);
  },
  setTheme(theme: "light" | "dark" | "system") {
    currentTheme = theme;
    if (typeof localStorage !== "undefined") {
      try {
        localStorage.setItem("aksara-theme", theme);
      } catch {
        // ignore storage errors
      }
    }
    applyTheme(theme);
    if (typeof document !== "undefined") {
      emit(document.documentElement, "theme:change", { theme });
    }
    return theme;
  },
  getTheme() {
    return currentTheme;
  },
  initTheme() {
    if (typeof localStorage !== "undefined") {
      try {
        const saved = localStorage.getItem("aksara-theme") as "light" | "dark" | "system" | null;
        if (saved && (saved === "light" || saved === "dark" || saved === "system")) {
          currentTheme = saved;
        }
      } catch {
        // ignore storage errors
      }
    }
    applyTheme(currentTheme);
    if (!themeMediaListenerBound && typeof window !== "undefined" && window.matchMedia) {
      themeMediaListenerBound = true;
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        if (currentTheme === "system") {
          applyTheme("system");
        }
      });
    }
    return currentTheme;
  },
  confirm(options: ConfirmModalOptions): Promise<boolean> {
    if (typeof document === "undefined") return Promise.resolve(false);

    const tone = options.tone ?? "danger";
    const confirmLabel = options.confirmLabel ?? "Confirm";
    const cancelLabel = options.cancelLabel ?? "Cancel";
    const icon = options.icon ?? (tone === "danger" ? "mdi-alert-circle-outline" : "mdi-alert-outline");

    const dialog = mountTransientDialog(`
      <div class="modal fade modal-sm" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="aksara-confirm-title">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content overflow-hidden border-0 shadow-lg">
            <div class="modal-body text-center p-4">
              <i class="mdi ${escapeHtmlStr(icon)} text-${escapeHtmlStr(tone)} text-4xl d-block mb-2" aria-hidden="true"></i>
              <h5 id="aksara-confirm-title" class="text-xl fw-bold mb-2 text-body">${escapeHtmlStr(options.title)}</h5>
              <p class="text-subtle mb-0">${escapeHtmlStr(options.message)}</p>
            </div>
            <div class="modal-footer p-0 overflow-hidden m-0 w-100 gap-0 d-flex border-top">
              <button class="btn btn-ghost text-body rounded-0 py-3 m-0 text-center w-[50%]" type="button" data-aksara-confirm-cancel>
                ${escapeHtmlStr(cancelLabel)}
              </button>
              <button class="btn btn-ghost border-start text-${escapeHtmlStr(tone)} rounded-0 py-3 m-0 text-center w-[50%]" type="button" data-aksara-confirm-accept>
                <i class="mdi mdi-check me-1" aria-hidden="true"></i>
                ${escapeHtmlStr(confirmLabel)}
              </button>
            </div>
          </div>
        </div>
      </div>
    `);
    if (!dialog) return Promise.resolve(false);

    return new Promise((resolve) => {
      let settled = false;
      const finish = (value: boolean) => {
        if (settled) return;
        settled = true;
        dialog.close();
        resolve(value);
      };

      dialog.element.addEventListener("aksara:modal:hide", () => finish(false), { once: true });
      dialog.element
        .querySelector("[data-aksara-confirm-cancel]")
        ?.addEventListener("click", () => finish(false), { once: true });
      dialog.element
        .querySelector("[data-aksara-confirm-accept]")
        ?.addEventListener("click", () => finish(true), { once: true });
    });
  },

  alert(options: AlertModalOptions): Promise<void> {
    if (typeof document === "undefined") return Promise.resolve();

    const tone = options.tone ?? "primary";
    const buttonLabel = options.buttonLabel ?? "OK";
    const icon =
      options.icon ??
      (tone === "danger"
        ? "mdi-alert-circle-outline"
        : tone === "warning"
          ? "mdi-alert-outline"
          : "mdi-information-outline");

    const dialog = mountTransientDialog(`
      <div class="modal fade modal-sm" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="aksara-alert-title">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content overflow-hidden border-0 shadow-lg">
            <div class="modal-body text-center p-4">
              <i class="mdi ${escapeHtmlStr(icon)} text-${escapeHtmlStr(tone)} text-4xl d-block mb-2" aria-hidden="true"></i>
              <h5 id="aksara-alert-title" class="text-xl fw-bold mb-2 text-body">${escapeHtmlStr(options.title)}</h5>
              <p class="text-subtle mb-0">${escapeHtmlStr(options.message)}</p>
            </div>
            <div class="modal-footer p-0 overflow-hidden m-0 w-100 gap-0 d-flex border-top">
              <button class="btn btn-ghost text-body rounded-0 py-3 m-0 text-center w-100" type="button" data-aksara-alert-dismiss>
                ${escapeHtmlStr(buttonLabel)}
              </button>
            </div>
          </div>
        </div>
      </div>
    `);
    if (!dialog) return Promise.resolve();

    return new Promise((resolve) => {
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        dialog.close();
        resolve();
      };

      dialog.element.addEventListener("aksara:modal:hide", () => finish(), { once: true });
      dialog.element
        .querySelector("[data-aksara-alert-dismiss]")
        ?.addEventListener("click", () => finish(), { once: true });
    });
  },

  notify(message: string, options: ToastNotifyOptions = {}) {
    if (typeof document === "undefined") return;
    let container = document.getElementById("aksara-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "aksara-toast-container";
      container.className = "aksara-toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "aksara-toast-pill";
    const iconClass = options.icon ?? "mdi-information-outline";
    toast.innerHTML = `<i class="mdi ${escapeHtmlStr(iconClass)} text-primary" style="font-size: 1.15rem; line-height: 1;"></i><span>${escapeHtmlStr(message)}</span>`;
    container.appendChild(toast);

    const duration = options.duration ?? 2500;
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
      setTimeout(() => toast.remove(), 250);
    }, duration);
  },

  async clipboard(target: string | HTMLElement, text?: string): Promise<boolean> {
    if (typeof navigator === "undefined" || !navigator.clipboard) return false;
    let textToCopy = text ?? "";
    if (!textToCopy && typeof document !== "undefined") {
      const el = typeof target === "string" ? document.querySelector(target) : target;
      if (el) {
        textToCopy = (el as HTMLInputElement).value ?? el.textContent ?? "";
      }
    }
    if (!textToCopy) return false;
    try {
      await navigator.clipboard.writeText(textToCopy);
      return true;
    } catch {
      return false;
    }
  },
  init(root: ParentNode = document) {
    if (root === document) {
      this.initTheme();
    }
    setupClipboard(root);
    scanArbitraryDom(root);
    setupArbitraryObserver();
    scheduleIconStylesheetCheck();

    createAll(root.querySelectorAll<HTMLElement>("[data-tooltip]"), Tooltip);
    createAll(root.querySelectorAll<HTMLElement>("[data-popover]"), Popover);

    const dropdowns = new Set<HTMLElement>();
    root.querySelectorAll<HTMLElement>(".dropdown").forEach((el) => dropdowns.add(el));
    root.querySelectorAll<HTMLElement>("[data-dropdown]").forEach((el) => {
      if (!el.closest(".dropdown")) {
        dropdowns.add(el);
      }
    });
    createAll(Array.from(dropdowns), Dropdown);

    createAll(root.querySelectorAll<HTMLElement>(".accordion"), Accordion);
    createAll(root.querySelectorAll<HTMLElement>(".tabs, [data-tabs-root]"), Tabs);
    createAll(root.querySelectorAll<HTMLElement>(".toast"), Toast);
    createAll(root.querySelectorAll<HTMLElement>(".carousel"), Carousel);
    createAll(root.querySelectorAll<HTMLElement>(".modal"), Modal);
    createAll(root.querySelectorAll<HTMLElement>(".offcanvas"), Offcanvas);
    bindDataApi();
    bindDelegatedDataApi();
    root.querySelectorAll?.<HTMLTextAreaElement>('textarea[data-role="autogrow"]').forEach(autogrowTextarea);
    emit(document.documentElement, "init", { root });
    return this;
  },
  destroy() {
    Array.from(instances).forEach((instance) => instance.destroy());
    registry.clear();
    emit(document.documentElement, "destroy");
    return this;
  }
};

declare global {
  interface Window {
    Aksara?: AksaraNamespace;
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => Aksara.init());
}

export default Aksara;

// HTML string components (ListGroup, SettingsGroup, SidebarNav, ...) live in
// src/components and ship as `@abydahana/aksara-ui/components`.

function escapeHtmlStr(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

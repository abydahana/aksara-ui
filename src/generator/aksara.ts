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
    emit(this.element, `${ctor.componentName || "component"}:destroy`, { instance: this });
  }
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
      if (event.target === this.element) {
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
    if (this.scrollLock) document.documentElement.style.overflow = "hidden";
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
    if (this.scrollLock) document.documentElement.style.overflow = "";
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
    if (!this.isOpen) return;
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
  scrollHandler: (() => void) | null;
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
    this.updateOptions(options);

    if (
      this.trigger?.matches(".btn-sm, .input-sm, .form-control-sm, .form-select-sm") ||
      this.element.classList.contains("dropdown-sm")
    ) {
      this.menu?.classList.add("dropdown-menu-sm");
    }

    if (this.trigger) {
      this.trigger.setAttribute("aria-haspopup", "true");
      this.trigger.setAttribute("aria-expanded", "false");
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
      if (this.keyboard && (event as KeyboardEvent).key === "Escape") this.hide();
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

    this.menu.style.display = "block";
    this.menu.style.position = "absolute";
    this.menu.style.zIndex = "1000";

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

    let placement = this.placement;
    if (placement === "auto") {
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;
      placement = spaceBelow >= menuRect.height || spaceBelow >= spaceAbove ? "bottom" : "top";
    }

    this.menu.classList.remove("dropdown-top", "dropdown-bottom", "dropdown-start", "dropdown-end");
    this.menu.classList.add(`dropdown-${placement}`);

    const isRtl =
      document.documentElement.getAttribute("dir") === "rtl" || document.body?.getAttribute("dir") === "rtl";

    if (placement === "top") {
      top = triggerRect.top - menuRect.height - gap;
      left = isRtl ? triggerRect.right - menuRect.width : triggerRect.left;
    } else if (placement === "start") {
      top = triggerRect.top;
      left = isRtl ? triggerRect.right + gap : triggerRect.left - menuRect.width - gap;
    } else if (placement === "end") {
      top = triggerRect.top;
      left = isRtl ? triggerRect.left - menuRect.width - gap : triggerRect.right + gap;
    } else {
      top = triggerRect.bottom + gap;
      left = isRtl ? triggerRect.right - menuRect.width : triggerRect.left;
    }

    const viewportWidth = window.innerWidth;
    left = Math.max(8, Math.min(left, viewportWidth - menuRect.width - 8));

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

    this.scrollHandler = () => this.position();
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
    window.addEventListener("resize", this.scrollHandler);

    emit(this.element, "dropdown:show", { instance: this });
    return this;
  }

  hide(): this {
    if (!this.menu || !this.isOpen) return this;
    this.isOpen = false;

    if (this.scrollHandler) {
      window.removeEventListener("scroll", this.scrollHandler);
      window.removeEventListener("resize", this.scrollHandler);
      this.scrollHandler = null;
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
    if (this.html) {
      this.tip.innerHTML = this.content;
    } else {
      this.tip.textContent = this.content;
    }
    this.tip.setAttribute("role", ctor.role);

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
    if (initial) this.show(initial);
  }

  show(tab: HTMLElement): this {
    const selector = tab.getAttribute("data-tabs");
    const panel = selector ? document.querySelector<HTMLElement>(selector) : null;
    if (!panel) return this;
    this.element.querySelectorAll<HTMLElement>(this.tabSelector).forEach((item) => {
      const selected = item === tab;
      item.setAttribute("role", item.getAttribute("role") || "tab");
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
      const targetSelector = item.getAttribute("data-tabs");
      const target = targetSelector ? document.querySelector<HTMLElement>(targetSelector) : null;
      if (target) target.hidden = !selected;
    });
    if (this.panelSelector) {
      document.querySelectorAll<HTMLElement>(this.panelSelector).forEach((item) => {
        if (item !== panel) item.hidden = true;
      });
    }
    panel.setAttribute("role", panel.getAttribute("role") || "tabpanel");
    emit(this.element, "tabs:show", { tab, panel, instance: this });
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

  override show(): this {
    if (this.isOpen) return this;
    this.previousFocus = document.activeElement as HTMLElement | null;
    this.isOpen = true;
    this.element.classList.add("offcanvas-open");
    this.element.setAttribute("aria-hidden", "false");
    if (this.scrollLock) document.documentElement.style.overflow = "hidden";
    if (this.focus) this.focusFirst();
    emit(this.element, "offcanvas:show", { instance: this });
    return this;
  }

  override hide(): this {
    if (!this.isOpen) return this;
    this.isOpen = false;
    this.element.classList.remove("offcanvas-open");
    this.element.setAttribute("aria-hidden", "true");
    if (this.scrollLock) document.documentElement.style.overflow = "";
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
let arbitraryRuleIndex = 0;

function getArbitrarySheet(): CSSStyleSheet | null {
  if (typeof document === "undefined") return null;
  if (!arbitrarySheet) {
    if ("adoptedStyleSheets" in document && typeof CSSStyleSheet !== "undefined") {
      arbitrarySheet = new CSSStyleSheet();
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, arbitrarySheet];
    }
  }
  return arbitrarySheet;
}

function escapeArbitraryClass(className: string): string {
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

const runtimeArbitraryPropertyMap: Record<string, (v: string) => string> = {
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
  inset: (v) => `inset:${v}`,
  "inset-x": (v) => `inset-inline:${v}`,
  "inset-y": (v) => `inset-block:${v}`,
  "translate-x": (v) => `transform:translateX(${v})`,
  "translate-y": (v) => `transform:translateY(${v})`,
  rotate: (v) => `transform:rotate(${v})`,
  scale: (v) => `transform:scale(${v})`,
  rounded: (v) => `border-radius:${v}`,
  border: (v) => `border-width:${v}`,
  opacity: (v) => `opacity:${v}`,
  z: (v) => `z-index:${v}`,
  leading: (v) => `line-height:${v}`,
  tracking: (v) => `letter-spacing:${v}`,
  text: (v) => (/^(#[0-9a-fA-F]+|rgb|hsl)/.test(v) ? `color:${v}` : `font-size:${v}`),
  bg: (v) => `background-color:${v}`,
  overscroll: (v) => `overscroll-behavior:${v}`,
  "overscroll-x": (v) => `overscroll-behavior-x:${v}`,
  "overscroll-y": (v) => `overscroll-behavior-y:${v}`
};

const runtimeBreakpoints: Record<string, string> = {
  sm: "36rem",
  md: "48rem",
  lg: "62rem",
  xl: "75rem",
  "2xl": "87.5rem",
  "3xl": "100rem"
};

const runtimeStateSelectors: Record<string, string> = {
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

function injectArbitraryClass(className: string): void {
  if (injectedArbitraryRules.has(className)) return;
  injectedArbitraryRules.add(className);

  const parts = className.split(":");
  const utility = parts.pop();
  if (!utility) return;

  const match = utility.match(/^(-)?([a-zA-Z0-9_-]+)-\[(.+)\]$/);
  if (!match) return;

  const isNegative = Boolean(match[1]);
  const prop = match[2];
  let val = match[3];

  const resolver = runtimeArbitraryPropertyMap[prop];
  if (!resolver) return;

  if (isNegative && !val.startsWith("-")) {
    val = `-${val}`;
  }

  const declarations = resolver(val);
  const escaped = escapeArbitraryClass(className);
  let selector = `.${escaped}`;

  let stateSelector = "";
  let themeVariant = "";
  let breakpointVariant = "";

  for (const v of parts) {
    if (v === "dark" || v === "light") themeVariant = v;
    else if (runtimeBreakpoints[v]) breakpointVariant = v;
    else if (runtimeStateSelectors[v]) stateSelector += runtimeStateSelectors[v];
  }

  selector += stateSelector;
  let rule = `${selector}{${declarations}}`;

  if (themeVariant) {
    rule =
      themeVariant === "dark"
        ? `[data-theme="dark"] ${selector},.dark ${selector}{${declarations}}`
        : `[data-theme="light"] ${selector},.light ${selector}{${declarations}}`;
  }

  if (breakpointVariant) {
    rule = `@media (min-width:${runtimeBreakpoints[breakpointVariant]}){${rule}}`;
  }

  const sheet = getArbitrarySheet();
  if (sheet) {
    try {
      sheet.insertRule(rule, arbitraryRuleIndex++);
    } catch {
      // Ignore if browser rejects rule syntax
    }
  }
}

function processElementClasses(el: Element): void {
  const classAttr = el.getAttribute("class");
  if (!classAttr || !classAttr.includes("-[")) return;
  const tokens = classAttr.split(/\s+/);
  for (const token of tokens) {
    if (token.includes("-[") && token.endsWith("]")) {
      injectArbitraryClass(token);
    }
  }
}

function scanArbitraryDom(root: ParentNode = document): void {
  if (typeof document === "undefined") return;
  if (root instanceof Element) {
    processElementClasses(root);
  }
  root.querySelectorAll('[class*="-["]').forEach(processElementClasses);
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
    const args = resolveArgs(target, options, "[data-modal], .modal");
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
        const saved = (localStorage.getItem("aksara-theme") || localStorage.getItem("aksara-docs-theme")) as
          "light" | "dark" | "system" | null;
        if (saved && (saved === "light" || saved === "dark" || saved === "system")) {
          currentTheme = saved;
        }
      } catch {
        // ignore storage errors
      }
    }
    applyTheme(currentTheme);
    if (typeof window !== "undefined" && window.matchMedia) {
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
    let host = document.getElementById("aksara-dialog-host");
    if (!host) {
      host = document.createElement("div");
      host.id = "aksara-dialog-host";
      document.body.appendChild(host);
    }

    const tone = options.tone ?? "danger";
    const confirmLabel = options.confirmLabel ?? "Confirm";
    const cancelLabel = options.cancelLabel ?? "Cancel";
    const icon = options.icon ?? (tone === "danger" ? "mdi-alert-circle-outline" : "mdi-alert-outline");

    host.innerHTML = `
      <div class="modal fade modal-sm" id="aksaraConfirmModal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="aksara-confirm-title">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content overflow-hidden border-0 shadow-lg">
            <div class="modal-body text-center p-4">
              <i class="mdi ${escapeHtmlStr(icon)} text-${escapeHtmlStr(tone)} fs-1 d-block mb-2" aria-hidden="true"></i>
              <h5 id="aksara-confirm-title" class="fs-5 font-bold mb-2 text-body">${escapeHtmlStr(options.title)}</h5>
              <p class="text-muted mb-0">${escapeHtmlStr(options.message)}</p>
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
    `;

    const modalEl = host.querySelector<HTMLElement>("#aksaraConfirmModal");
    if (!modalEl) return Promise.resolve(false);

    const modalInstance = Aksara.modal(modalEl);
    modalInstance.show();

    return new Promise((resolve) => {
      let settled = false;
      const finish = (value: boolean) => {
        if (settled) return;
        settled = true;
        modalInstance.hide();
        setTimeout(() => {
          if (host) host.innerHTML = "";
        }, 200);
        resolve(value);
      };

      modalEl.addEventListener("modal:hide", () => finish(false), { once: true });
      host
        ?.querySelector("[data-aksara-confirm-cancel]")
        ?.addEventListener("click", () => finish(false), { once: true });
      host
        ?.querySelector("[data-aksara-confirm-accept]")
        ?.addEventListener("click", () => finish(true), { once: true });
    });
  },

  alert(options: AlertModalOptions): Promise<void> {
    if (typeof document === "undefined") return Promise.resolve();
    let host = document.getElementById("aksara-dialog-host");
    if (!host) {
      host = document.createElement("div");
      host.id = "aksara-dialog-host";
      document.body.appendChild(host);
    }

    const tone = options.tone ?? "primary";
    const buttonLabel = options.buttonLabel ?? "OK";
    const icon =
      options.icon ??
      (tone === "danger"
        ? "mdi-alert-circle-outline"
        : tone === "warning"
          ? "mdi-alert-outline"
          : "mdi-information-outline");

    host.innerHTML = `
      <div class="modal fade modal-sm" id="aksaraAlertModal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="aksara-alert-title">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content overflow-hidden border-0 shadow-lg">
            <div class="modal-body text-center p-4">
              <i class="mdi ${escapeHtmlStr(icon)} text-${escapeHtmlStr(tone)} fs-1 d-block mb-2" aria-hidden="true"></i>
              <h5 id="aksara-alert-title" class="fs-5 font-bold mb-2 text-body">${escapeHtmlStr(options.title)}</h5>
              <p class="text-muted mb-0">${escapeHtmlStr(options.message)}</p>
            </div>
            <div class="modal-footer p-0 overflow-hidden m-0 w-100 gap-0 d-flex border-top">
              <button class="btn btn-ghost text-body rounded-0 py-3 m-0 text-center w-100" type="button" data-aksara-alert-dismiss>
                ${escapeHtmlStr(buttonLabel)}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const modalEl = host.querySelector<HTMLElement>("#aksaraAlertModal");
    if (!modalEl) return Promise.resolve();

    const modalInstance = Aksara.modal(modalEl);
    modalInstance.show();

    return new Promise((resolve) => {
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        modalInstance.hide();
        setTimeout(() => {
          if (host) host.innerHTML = "";
        }, 200);
        resolve();
      };

      modalEl.addEventListener("modal:hide", () => finish(), { once: true });
      host?.querySelector("[data-aksara-alert-dismiss]")?.addEventListener("click", () => finish(), { once: true });
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
    createAll(root.querySelectorAll<HTMLElement>(".tabs"), Tabs);
    createAll(root.querySelectorAll<HTMLElement>(".toast"), Toast);
    createAll(root.querySelectorAll<HTMLElement>(".carousel"), Carousel);
    createAll(root.querySelectorAll<HTMLElement>(".modal"), Modal);
    createAll(root.querySelectorAll<HTMLElement>(".offcanvas"), Offcanvas);
    bindDataApi();
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

// ── HTML Component Generators ─────────────────────────────────────────────────
// Inline pure-function HTML string generators.
// These accept typed props and return HTML strings ready for server-side rendering.

// ── Shared utilities ──────────────────────────────────────────────────────────

function classNames(...classes: (string | undefined | null | false | 0)[]): string {
  return classes.filter(Boolean).join(" ").trim();
}

function toAttributes(attributes?: Record<string, unknown>): string {
  if (!attributes) return "";
  const parts: string[] = [];
  for (const [key, value] of Object.entries(attributes)) {
    if (value === true) {
      parts.push(key);
    } else if (value !== false && value !== null && value !== undefined) {
      parts.push(`${key}="${escapeHtmlStr(value)}"`);
    }
  }
  return parts.length > 0 ? ` ${parts.join(" ")}` : "";
}

function escapeHtmlStr(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ── SidebarNav ────────────────────────────────────────────────────────────────

// ── SidebarNavItem ────────────────────────────────────────────────────────────

export interface SidebarNavItemProps {
  /** Unique ID (used for tab panel targeting) */
  id?: string;
  /** Label text */
  label: string;
  /** Icon HTML string */
  icon?: string;
  /** Badge text or count */
  badge?: string;
  /** Active state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Link mode: render as <a href="..."> */
  href?: string;
  /** Tab mode: render as <button data-tabs="#panelId"> */
  panelTarget?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

// ── SidebarNavProps ───────────────────────────────────────────────────────────

export interface SidebarNavProps {
  items: SidebarNavItemProps[];
  /** Brand section title at the top */
  title?: string;
  /** Brand section subtitle */
  subtitle?: string;
  /** Brand icon HTML */
  brandIcon?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * Sidebar navigation that supports two modes:
 *
 * - **Tab mode** (`panelTarget` prop): renders `<button data-tabs="#panelId">` —
 *   integrates with Aksara's tab JS to show/hide content panels.
 * - **Link mode** (`href` prop): renders `<a href="...">` — plain navigation links.
 *
 * @example Tab mode
 * SidebarNav({
 *   title: "Settings",
 *   items: [
 *     { label: "Privacy", icon: '<span class="mdi mdi-lock-outline">', panelTarget: "#panel-privacy", active: true },
 *     { label: "Notifications", icon: '<span class="mdi mdi-bell-outline">', panelTarget: "#panel-notif" },
 *   ]
 * })
 *
 * @example Link mode
 * SidebarNav({
 *   items: [
 *     { label: "Dashboard", icon: '<span class="mdi mdi-home-outline">', href: "/dashboard", active: true },
 *     { label: "Settings", icon: '<span class="mdi mdi-cog-outline">', href: "/settings" },
 *   ]
 * })
 */
export function SidebarNav(props: SidebarNavProps): string {
  const { items = [], title = "", subtitle = "", brandIcon = "", className = "", attributes } = props;

  const baseAttrs = toAttributes(attributes);

  // Brand section
  const brandHtml = title
    ? `<div class="sidebar-nav-brand">${brandIcon ? `<span class="sidebar-nav-icon">${brandIcon}</span>` : ""}<div><span class="sidebar-nav-brand-title">${escapeHtmlStr(title)}</span>${subtitle ? `<span class="sidebar-nav-brand-subtitle">${escapeHtmlStr(subtitle)}</span>` : ""}</div></div>`
    : "";

  // Items
  const itemsHtml = items
    .map((item) => {
      const isLink = Boolean(item.href);
      const isTab = Boolean(item.panelTarget) && !isLink;
      const Tag = isLink ? "a" : "button";

      const itemClasses = classNames(
        "sidebar-nav-item",
        item.active && "active",
        item.disabled && "disabled",
        item.className
      );

      const itemAttrs = toAttributes({
        href: isLink ? item.href : undefined,
        type: !isLink ? "button" : undefined,
        "data-tabs": isTab ? item.panelTarget : undefined,
        role: isTab ? "tab" : undefined,
        "aria-selected": isTab ? (item.active ? "true" : "false") : undefined,
        tabindex: isTab ? (item.active ? "0" : "-1") : undefined,
        id: isTab && item.id ? `sidebar-tab-${item.id}` : item.id,
        "aria-controls": isTab && item.id ? item.id : undefined,
        disabled: !isLink && item.disabled ? true : undefined,
        "aria-disabled": item.disabled ? "true" : undefined,
        "aria-current": isLink && item.active ? "page" : undefined,
        ...item.attributes
      });

      const iconHtml = item.icon ? `<span class="sidebar-nav-icon" aria-hidden="true">${item.icon}</span>` : "";

      const badgeHtml = item.badge ? `<span class="sidebar-nav-badge">${escapeHtmlStr(item.badge)}</span>` : "";

      return `<${Tag} class="${itemClasses}"${itemAttrs}>${iconHtml}<span class="sidebar-nav-label">${escapeHtmlStr(item.label)}</span>${badgeHtml}</${Tag}>`;
    })
    .join("");

  return `<nav class="${classNames("sidebar-nav", className)}"${baseAttrs}>${brandHtml}${itemsHtml}</nav>`.trim();
}

export const sidebarNav = SidebarNav;

// ── SidebarNavHeader ──────────────────────────────────────────────────────────

export interface SidebarNavHeaderProps {
  label: string;
  className?: string;
}

/** A group header label inside a SidebarNav */
export function SidebarNavHeader(props: SidebarNavHeaderProps): string {
  const { label, className = "" } = props;
  return `<span class="${classNames("sidebar-nav-header", className)}">${escapeHtmlStr(label)}</span>`;
}

export const sidebarNavHeader = SidebarNavHeader;

// ── SidebarLayout ─────────────────────────────────────────────────────────────

export interface SidebarLayoutProps {
  sidebar: string;
  content: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * Two-column layout wrapper: sidebar pane on the left, content area on the right.
 *
 * @example
 * SidebarLayout({
 *   sidebar: SidebarNav({ ... }),
 *   content: '<div class="p-5">Panel content here</div>'
 * })
 */
export function SidebarLayout(props: SidebarLayoutProps): string {
  const { sidebar, content, className = "", attributes } = props;
  const baseAttrs = toAttributes(attributes);
  return `<div class="${classNames("sidebar-layout", className)}"${baseAttrs}><div class="sidebar-pane">${sidebar}</div><div class="sidebar-content">${content}</div></div>`.trim();
}

export const sidebarLayout = SidebarLayout;

// ── ListGroup ─────────────────────────────────────────────────────────────────

export interface ListGroupProps {
  children?: string;
  flush?: boolean;
  numbered?: boolean;
  horizontal?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ListGroup(props: ListGroupProps = {}): string {
  const { children = "", flush = false, numbered = false, horizontal = false, className = "", attributes } = props;

  const horizontalClass =
    horizontal === true
      ? "list-group-horizontal"
      : typeof horizontal === "string"
        ? `list-group-horizontal-${horizontal}`
        : null;

  const classes = classNames(
    "list-group",
    flush && "list-group-flush",
    numbered && "list-group-numbered",
    horizontalClass,
    className
  );

  const Tag = numbered ? "ol" : "div";
  const baseAttrs = toAttributes(attributes);

  return `<${Tag} class="${classes}"${baseAttrs}>${children}</${Tag}>`.trim();
}

export const listGroup = ListGroup;

export interface ListGroupItemProps {
  content?: string;
  active?: boolean;
  disabled?: boolean;
  action?: boolean;
  href?: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ListGroupItem(props: ListGroupItemProps = {}): string {
  const {
    content = "",
    active = false,
    disabled = false,
    action = false,
    href,
    variant,
    className = "",
    attributes
  } = props;

  const isLink = Boolean(href);
  const Tag = isLink ? "a" : action ? "button" : "div";

  const classes = classNames(
    "list-group-item",
    (action || isLink) && "list-group-item-action",
    active && "active",
    disabled && "disabled",
    variant && `list-group-item-${variant}`,
    className
  );

  const baseAttrs = toAttributes({
    href,
    type: Tag === "button" ? "button" : undefined,
    disabled: Tag === "button" && disabled ? true : undefined,
    "aria-current": active ? "true" : undefined,
    "aria-disabled": disabled ? "true" : undefined,
    ...attributes
  });

  return `<${Tag} class="${classes}"${baseAttrs}>${content}</${Tag}>`.trim();
}

export const listGroupItem = ListGroupItem;

// ── Settings ──────────────────────────────────────────────────────────────────

// ── SettingsGroup ─────────────────────────────────────────────────────────────

export interface SettingsGroupProps {
  children?: string;
  /** Optional uppercase heading rendered above the group */
  title?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * Container for a group of settings-style rows.
 * Renders as `.list-group` with an optional uppercase section heading above.
 */
export function SettingsGroup(props: SettingsGroupProps = {}): string {
  const { children = "", title = "", className = "", attributes } = props;

  const baseAttrs = toAttributes(attributes);
  const groupHtml = `<div class="${classNames("list-group", className)}"${baseAttrs}>${children}</div>`;

  if (!title) return groupHtml.trim();

  return `<div><p class="text-xs font-800 uppercase tracking-wider text-subtle mb-2 px-1">${escapeHtmlStr(title)}</p><div class="${classNames("list-group", className)}">${children}</div></div>`.trim();
}

export const settingsGroup = SettingsGroup;

// ── SettingsItem ──────────────────────────────────────────────────────────────

export interface SettingsItemProps {
  /** Main label text */
  label: string;
  /** Optional supporting description rendered below the label */
  description?: string;
  /** Icon HTML string, e.g. `<span class="mdi mdi-lock-outline">` */
  icon?: string;
  /** Value text shown on the right */
  value?: string;
  /** Arbitrary trailing HTML on the right, e.g. a switch or select */
  trailing?: string;
  /** Renders the item as `<a href>` */
  href?: string;
  /** Renders the item as `<button>` (when no href) */
  action?: boolean;
  /** Shows a `›` chevron on the trailing edge */
  showChevron?: boolean;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * A settings-style row using `.list-group-item` with an inner flex layout.
 * Composable as a link, button, or static element.
 *
 * @example Link row
 * SettingsItem({ label: "Private profile", icon: '<span class="mdi mdi-lock-outline">', value: "Public", showChevron: true, href: "#privacy" })
 *
 * @example Toggle row
 * SettingsItem({ label: "Floods & Inundations", icon: '<span class="mdi mdi-water-alert">', trailing: '<input type="checkbox" role="switch" class="form-check-input" checked />' })
 *
 * @example Description row
 * SettingsItem({ label: "Verified reports only", description: "Only display verified observations.", trailing: '<input type="checkbox" role="switch" class="form-check-input" />' })
 */
export function SettingsItem(props: SettingsItemProps): string {
  const {
    label,
    description = "",
    icon = "",
    value = "",
    trailing = "",
    href,
    action = false,
    showChevron = false,
    active = false,
    disabled = false,
    className = "",
    attributes
  } = props;

  const isLink = Boolean(href);
  const Tag = isLink ? "a" : action ? "button" : "div";

  const classes = classNames(
    "list-group-item",
    (action || isLink) && "list-group-item-action",
    active && "active",
    disabled && "disabled",
    className
  );

  const baseAttrs = toAttributes({
    href,
    type: Tag === "button" ? "button" : undefined,
    disabled: Tag === "button" && disabled ? true : undefined,
    "aria-current": active ? "true" : undefined,
    "aria-disabled": disabled ? "true" : undefined,
    ...attributes
  });

  const iconHtml = icon
    ? `<span class="flex items-center justify-center w-7 h-7 shrink-0 text-lg" aria-hidden="true">${icon}</span>`
    : "";

  const labelBlock = description
    ? `<span class="flex-1 min-w-0"><span class="font-600 block">${escapeHtmlStr(label)}</span><span class="text-subtle text-sm block mt-1">${escapeHtmlStr(description)}</span></span>`
    : `<span class="flex-1 font-600">${escapeHtmlStr(label)}</span>`;

  const valueHtml = value ? `<span class="text-subtle text-sm">${escapeHtmlStr(value)}</span>` : "";

  const chevronHtml = showChevron
    ? `<span class="text-subtle opacity-50 text-sm ms-1" aria-hidden="true">&#8250;</span>`
    : "";

  return `<${Tag} class="${classes}"${baseAttrs}><div class="flex items-center gap-3">${iconHtml}${labelBlock}${valueHtml}${trailing}${chevronHtml}</div></${Tag}>`.trim();
}

export const settingsItem = SettingsItem;

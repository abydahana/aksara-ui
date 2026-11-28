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
  /** Swipe with touch, pen or mouse drag. */
  swipe?: boolean;
  /** Allow dragging with a mouse (touch and pen always swipe when `swipe` is on). */
  drag?: boolean;
  /** "slide" (default) or "fade"; `.carousel-fade` also selects fade. */
  effect?: "slide" | "fade";
  /** Slides visible at once (slide effect). Responsive: `data-carousel-per-view-md="2"`. */
  perView?: number;
  /** Gap between slides when `perView` > 1 (any CSS length). */
  gap?: string;
  /** Slides moved per next/prev. Defaults to 1. */
  step?: number;
  /** Resize the viewport to the active slide's height. */
  autoHeight?: boolean;
  /** Transition length in milliseconds. */
  speed?: number;
}

export interface SelectOptions extends ComponentOptions {
  /** Type to filter options. Defaults to true. */
  search?: boolean;
  /** Let users add values that are not in the list. */
  create?: boolean;
  /** Show a button that clears the selection. */
  clearable?: boolean;
  /** Remove buttons on selected items of a multiple select. Defaults to true. */
  removeButton?: boolean;
  /** Render a checkbox next to each option (multiple selects). */
  checkboxes?: boolean;
  /** Maximum number of selected items (multiple). */
  maxItems?: number;
  /** Maximum number of options rendered in the dropdown. */
  maxOptions?: number;
  placeholder?: string;
  /** Where the dropdown is mounted: "body" (default) or "wrapper". */
  dropdownParent?: string;
  /** Raw Tom Select settings, merged last. */
  settings?: Record<string, unknown>;
}

/** The subset of the Tom Select API Aksara relies on. */
export interface TomSelectInstance {
  destroy(): void;
  getValue(): string | string[];
  setValue(value: string | string[], silent?: boolean): void;
  clear(silent?: boolean): void;
  addOption(data: Record<string, unknown>): void;
  sync(): void;
  enable(): void;
  disable(): void;
  open(): void;
  close(): void;
  focus(): void;
  [key: string]: unknown;
}

export type TomSelectConstructor = new (element: HTMLElement, settings: Record<string, unknown>) => TomSelectInstance;

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

const nudgeTimers = new WeakMap<HTMLElement, ReturnType<typeof setTimeout>>();

/** Restartable shake: re-adding the class mid-animation starts it over instead of being ignored. */
function nudgeElement(element: HTMLElement, className: string, duration = 420): void {
  const pending = nudgeTimers.get(element);
  if (pending) clearTimeout(pending);
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  nudgeTimers.set(
    element,
    setTimeout(() => {
      element.classList.remove(className);
      nudgeTimers.delete(element);
    }, duration)
  );
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
          this.nudge();
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

  /** "Buzz" feedback when a static backdrop or a blocked Escape refuses to close. */
  nudge(): void {
    nudgeElement(this.element, `${(this.constructor as typeof Modal).componentName}-static`);
  }

  /**
   * Initial focus: an `[autofocus]` element, else the first control that is not a close
   * button, else the dialog itself (so opening never lands on, and rings, the × button).
   */
  focusFirst(): void {
    if (!this.element.hasAttribute("tabindex")) this.element.setAttribute("tabindex", "-1");
    const focusable = Array.from(this.element.querySelectorAll<HTMLElement>(focusableSelector));
    const dismiss =
      "[data-modal-close],[data-offcanvas-close],[data-sheet-close],[data-dismiss],.btn-close,.modal-close";
    const first =
      this.element.querySelector<HTMLElement>("[autofocus]") ||
      focusable.find((item) => !item.matches(dismiss)) ||
      this.element;
    first.focus({ preventScroll: true });
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.isOpen || !isTopOverlay(this)) return;
    if (event.key === "Escape") {
      if (this.keyboard) {
        event.preventDefault();
        this.hide();
      } else if (this.backdrop === "static") {
        this.nudge();
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

/**
 * Applies a DropdownSelect choice: hidden input value (+ `input`/`change` events), trigger
 * label and icon, the option's active state, and `aksara:dropdown-select:change`.
 */
function applyDropdownSelect(root: HTMLElement, item: HTMLElement, menu: HTMLElement | null): void {
  if ((item as HTMLButtonElement).disabled || item.classList.contains("disabled")) return;
  const value = item.getAttribute("data-dropdown-option") ?? "";
  const label =
    item.querySelector<HTMLElement>(".dropdown-select-option-label")?.textContent?.trim() ??
    item.textContent?.trim() ??
    "";
  const input = root.querySelector<HTMLInputElement>("input[type='hidden']");
  const previous = input?.value ?? root.getAttribute("data-value") ?? "";
  (menu ?? root).querySelectorAll<HTMLElement>("[data-dropdown-option]").forEach((option) => {
    const on = option === item;
    option.classList.toggle("active", on);
    option.setAttribute("aria-checked", String(on));
    if (on) option.setAttribute("aria-current", "true");
    else option.removeAttribute("aria-current");
  });
  const trigger = root.querySelector<HTMLElement>("[data-dropdown]");
  const labelEl = trigger?.querySelector<HTMLElement>(".select-current-label");
  if (labelEl) labelEl.textContent = label;
  if (trigger) {
    const icon = item.getAttribute("data-icon");
    let iconEl = trigger.querySelector<HTMLElement>(".select-current-icon");
    if (icon) {
      if (!iconEl) {
        iconEl = document.createElement("span");
        iconEl.setAttribute("aria-hidden", "true");
        labelEl?.before(iconEl);
      }
      iconEl.className = ["mdi", icon, item.getAttribute("data-icon-class") ?? "", "select-current-icon"]
        .filter(Boolean)
        .join(" ");
    } else {
      iconEl?.remove();
    }
  }
  root.setAttribute("data-value", value);
  if (input && value !== previous) {
    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }
  if (value !== previous) emit(root, "dropdown-select:change", { value, label, previous, item });
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
        // DropdownSelect: write the picked option back to the hidden input and the trigger.
        if (item?.hasAttribute("data-dropdown-option") && this.element.hasAttribute("data-dropdown-select")) {
          applyDropdownSelect(this.element, item, this.menu);
        }
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
  /** Listeners of the current `trigger` option; rebound when the option changes. */
  triggerCleanups: Array<() => void> = [];
  boundTrigger: string | null = null;
  /** Listeners that only exist while the tip is shown (outside click, scroll, resize). */
  openCleanups: Array<() => void> = [];

  constructor(element: HTMLElement, options: FloatingTextOptions = {}) {
    super(element, options);
    this.tip = null;
    this.showTimeout = null;
    this.hideTimeout = null;
    this.updateOptions(options);
    this.on(document, "keydown", (event: Event) => {
      if (this.tip && this.keyboard && (event as KeyboardEvent).key === "Escape") this.hide();
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
      // Rebuild the open tip so a new title/content/html option shows immediately.
      this.hide();
      this.show();
    }
    if (this.boundTrigger !== this.trigger) this.bindTriggers();
    return this;
  }

  get triggers(): string[] {
    return String(this.trigger).split(/\s+/).filter(Boolean);
  }

  bindTriggers(): void {
    this.triggerCleanups.splice(0).forEach((cleanup) => cleanup());
    this.boundTrigger = this.trigger;
    const listen = (type: string, handler: EventListener) => {
      this.element.addEventListener(type, handler);
      this.triggerCleanups.push(() => this.element.removeEventListener(type, handler));
    };
    const triggers = this.triggers;
    if (triggers.includes("hover")) {
      listen("mouseenter", () => this.scheduleShow());
      listen("mouseleave", () => this.scheduleHide());
    }
    if (triggers.includes("focus")) {
      listen("focus", () => this.scheduleShow());
      listen("blur", () => this.scheduleHide());
    }
    if (triggers.includes("click")) {
      listen("click", (event: Event) => {
        event.preventDefault();
        this.toggle();
      });
    }
  }

  /** Hover popovers stay open while the pointer travels from the trigger into the tip. */
  get effectiveHideDelay(): number {
    const interactive = (this.constructor as typeof FloatingText).componentName === "popover";
    return interactive && this.triggers.includes("hover") ? Math.max(this.hideDelay, 120) : this.hideDelay;
  }

  scheduleShow(): void {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    if (this.showTimeout) clearTimeout(this.showTimeout);
    this.showTimeout = setTimeout(() => this.show(), this.showDelay);
  }

  scheduleHide(): void {
    if (this.showTimeout) clearTimeout(this.showTimeout);
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(() => this.hide(), this.effectiveHideDelay);
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
    floatingTips.set(this.tip, this);
    this.bindOpenListeners();

    this.position();
    emit(this.element, `${ctor.componentName}:show`, { instance: this });
    return this;
  }

  bindOpenListeners(): void {
    const tip = this.tip;
    if (!tip) return;
    const listen = (target: EventTarget, type: string, handler: EventListener, opts?: AddEventListenerOptions) => {
      target.addEventListener(type, handler, opts);
      this.openCleanups.push(() => target.removeEventListener(type, handler, opts));
    };
    const triggers = this.triggers;
    if (triggers.includes("hover")) {
      listen(tip, "mouseenter", () => {
        if (this.hideTimeout) clearTimeout(this.hideTimeout);
      });
      listen(tip, "mouseleave", () => this.scheduleHide());
    }
    if (triggers.includes("click")) {
      // Click-triggered tips close on a press outside both the trigger and the tip.
      listen(document, "pointerdown", (event: Event) => {
        const target = event.target instanceof Node ? event.target : null;
        if (target && !this.element.contains(target) && !tip.contains(target)) this.hide();
      });
    }
    // `[data-dismiss]` / `[data-popover-close]` inside the tip close it (handled here, not by the
    // global dismiss handler, so the instance state stays in sync).
    listen(tip, "click", (event: Event) => {
      const close = (event.target as Element | null)?.closest?.(
        "[data-popover-close],[data-tooltip-close],[data-dismiss]"
      );
      if (close && tip.contains(close) && !close.getAttribute("data-dismiss")) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.element.focus?.({ preventScroll: true });
      }
    });
    const reposition = () => this.position();
    listen(window, "resize", reposition);
    listen(window, "scroll", reposition, { passive: true, capture: true });
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
    this.openCleanups.splice(0).forEach((cleanup) => cleanup());
    floatingTips.delete(this.tip);
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

    // Flip to the opposite side when the preferred one has no room but the other does.
    const room: Record<string, number> = {
      top: rect.top,
      bottom: window.innerHeight - rect.bottom,
      left: rect.left,
      right: window.innerWidth - rect.right
    };
    const opposite: Record<string, string> = { top: "bottom", bottom: "top", left: "right", right: "left" };
    const needed = physicalPlacement === "top" || physicalPlacement === "bottom" ? tipRect.height : tipRect.width;
    const other = opposite[physicalPlacement];
    if (other && room[physicalPlacement] < needed + gap && room[other] > room[physicalPlacement]) {
      physicalPlacement = other;
      const logical: Record<string, string> = isRtl ? { left: "end", right: "start" } : { left: "start", right: "end" };
      placement = logical[other] ?? other;
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

    // Keep the tip inside the viewport horizontally (its arrow stays centred on the tip).
    const maxLeft = window.innerWidth - tipRect.width - 4;
    const clampedLeft = Math.max(4, Math.min(left, maxLeft));
    this.tip.style.top = `${Math.max(4, top + window.scrollY)}px`;
    this.tip.style.left = `${clampedLeft + window.scrollX}px`;
  }

  destroy(): void {
    if (this.showTimeout) clearTimeout(this.showTimeout);
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.hide();
    this.triggerCleanups.splice(0).forEach((cleanup) => cleanup());
    super.destroy();
  }
}

/** Open tip element → its instance, so dismiss buttons and `Aksara.hide` can find the owner. */
const floatingTips = new WeakMap<HTMLElement, FloatingText>();

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

/** A tab is skipped by clicks, arrow keys, swipes and initial activation when it is disabled. */
function isTabDisabled(tab: Element): boolean {
  return (
    (tab as HTMLButtonElement).disabled === true ||
    tab.getAttribute("aria-disabled") === "true" ||
    tab.classList.contains("disabled")
  );
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
      const vertical = this.orientation === "vertical";
      const keys = vertical ? ["ArrowUp", "ArrowDown", "Home", "End"] : ["ArrowLeft", "ArrowRight", "Home", "End"];
      if (!keys.includes(keyEvent.key)) return;
      const all = Array.from(element.querySelectorAll<HTMLElement>(this.tabSelector));
      const index = all.indexOf(document.activeElement as HTMLElement);
      if (index < 0) return;
      event.preventDefault();
      // Disabled tabs are skipped; RTL flips the horizontal arrows.
      const rtl = !vertical && getComputedStyle(element).direction === "rtl";
      const forwardKey = vertical ? "ArrowDown" : rtl ? "ArrowLeft" : "ArrowRight";
      let next: HTMLElement | undefined;
      if (keyEvent.key === "Home") next = all.find((tab) => !isTabDisabled(tab));
      else if (keyEvent.key === "End") next = [...all].reverse().find((tab) => !isTabDisabled(tab));
      else {
        const step = keyEvent.key === forwardKey ? 1 : -1;
        for (let i = 1; i < all.length; i++) {
          let j = index + step * i;
          if (j < 0 || j >= all.length) {
            if (!this.loop) break;
            j = (j + all.length) % all.length;
          }
          if (!isTabDisabled(all[j])) {
            next = all[j];
            break;
          }
        }
      }
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
    if (!initial || isTabDisabled(initial)) {
      initial =
        tabs.find((tab) => tab.getAttribute("aria-selected") === "true" && !isTabDisabled(tab)) ||
        tabs.find((tab) => tab.classList.contains("active") && !isTabDisabled(tab)) ||
        tabs.find((tab) => !isTabDisabled(tab)) ||
        null;
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

      const target =
        deltaX < -50 && safeIdx < maxIdx ? tabs[safeIdx + 1] : deltaX > 50 && safeIdx > 0 ? tabs[safeIdx - 1] : null;
      if (target && !isTabDisabled(target)) {
        this.show(target);
      } else {
        track.style.transform = `translate3d(-${safeIdx * 100}%, 0, 0)`;
      }
    };

    this.on(track, "touchend", onTouchEnd, { passive: true });
    this.on(track, "touchcancel", onTouchEnd, { passive: true });
  }

  show(tab: HTMLElement, animate = true): this {
    if (isTabDisabled(tab)) return this;
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
      if (isTabDisabled(item)) item.setAttribute("aria-disabled", "true");
      const targetSelector = item.getAttribute("data-tabs");
      const target = targetSelector ? document.querySelector<HTMLElement>(targetSelector) : null;
      if (target) {
        if (target.id && !item.hasAttribute("aria-controls")) item.setAttribute("aria-controls", target.id);
        if (item.id && !target.hasAttribute("aria-labelledby")) target.setAttribute("aria-labelledby", item.id);
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

const CAROUSEL_INTERACTIVE = "a,button,input,select,textarea,label,[contenteditable='true'],[data-carousel-no-swipe]";

/**
 * Carousel with a sliding track (or cross-fade), swipe and mouse drag, responsive
 * slides-per-view, autoplay that pauses on hover, focus, interaction and hidden tabs,
 * keyboard control, auto-generated indicators, counters and a progress bar.
 *
 * Items are moved into `.carousel-viewport > .carousel-track` on init when the markup does
 * not provide them, so the legacy markup (items as direct children) keeps working.
 */
export class Carousel extends Component {
  static componentName = "carousel";

  timeout: ReturnType<typeof setTimeout> | null = null;
  items: HTMLElement[] = [];
  index = 0;
  interval!: number;
  autoplay!: boolean;
  pauseOnHover!: boolean;
  keyboard!: boolean;
  loop!: boolean;
  swipe!: boolean;
  drag!: boolean;
  effect!: "slide" | "fade";
  perView = 1;
  step!: number;
  autoHeight!: boolean;
  speed!: number;
  viewport!: HTMLElement;
  track!: HTMLElement;
  paused = false;
  hovered = false;
  focused = false;
  dragDistance = 0;
  private mediaQueries: MediaQueryList[] = [];

  constructor(element: HTMLElement, options: CarouselOptions = {}) {
    super(element, options);
    this.readOptions();
    this.buildStructure();
    this.index = this.resolveInitialIndex();
    this.bindEvents();
    this.applyLayout();
    this.show(this.index, { instant: true });
    if (this.autoplay) this.play();
  }

  private readOptions(): void {
    const o = this.options;
    const el = this.element;
    this.interval = getNumberOption(o, el, "carousel", "interval", 5000);
    this.autoplay = getBooleanOption(o, el, "carousel", "autoplay", false);
    this.pauseOnHover = getBooleanOption(o, el, "carousel", "pauseOnHover", true);
    this.keyboard = getBooleanOption(o, el, "carousel", "keyboard", true);
    this.loop = getBooleanOption(o, el, "carousel", "loop", true);
    this.swipe = getBooleanOption(o, el, "carousel", "swipe", true);
    this.drag = getBooleanOption(o, el, "carousel", "drag", true);
    const effect = getOption<string>(
      o,
      el,
      "carousel",
      "effect",
      el.classList.contains("carousel-fade") ? "fade" : "slide"
    );
    this.effect = effect === "fade" ? "fade" : "slide";
    this.step = Math.max(1, getNumberOption(o, el, "carousel", "step", 1));
    this.autoHeight = getBooleanOption(o, el, "carousel", "autoHeight", el.classList.contains("carousel-auto-height"));
    this.speed = getNumberOption(o, el, "carousel", "speed", this.effect === "fade" ? 600 : 500);
    const gap = getOption<string>(o, el, "carousel", "gap", "");
    if (gap) el.style.setProperty("--aksara-carousel-gap", /^\d+(\.\d+)?$/.test(gap) ? `${gap}px` : gap);
    el.style.setProperty("--aksara-carousel-speed", `${this.speed}ms`);
    el.style.setProperty("--aksara-carousel-interval", `${this.interval}ms`);
    el.classList.toggle("carousel-fade", this.effect === "fade");
    el.classList.toggle("carousel-draggable", this.swipe && this.drag && this.effect === "slide");
  }

  /** Slides per view for the current viewport width (`data-carousel-per-view-{bp}` wins upward). */
  private resolvePerView(): number {
    if (this.effect === "fade") return 1;
    let value = getNumberOption(this.options, this.element, "carousel", "perView", 1);
    for (const [bp, minWidth] of Object.entries(runtimeBreakpoints)) {
      const raw = this.element.getAttribute(`data-carousel-per-view-${bp}`);
      if (raw !== null && typeof window !== "undefined" && window.matchMedia(`(min-width:${minWidth})`).matches) {
        const n = Number(raw);
        if (!Number.isNaN(n)) value = n;
      }
    }
    return Math.max(1, Math.floor(value));
  }

  private buildStructure(): void {
    const el = this.element;
    let track = el.querySelector<HTMLElement>(":scope .carousel-track");
    let viewport = el.querySelector<HTMLElement>(":scope .carousel-viewport");
    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-carousel-item], .carousel-item")).filter(
      (item) => item.closest(".carousel") === el
    );
    if (!track) {
      track = document.createElement("div");
      track.className = "carousel-track";
      if (items[0]?.parentElement) items[0].parentElement.insertBefore(track, items[0]);
      else el.prepend(track);
      items.forEach((item) => track!.append(item));
    }
    if (!viewport) {
      viewport = document.createElement("div");
      viewport.className = "carousel-viewport";
      track.parentElement!.insertBefore(viewport, track);
      viewport.append(track);
    }
    this.viewport = viewport;
    this.track = track;
    this.items = Array.from(track.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
    el.setAttribute("role", el.getAttribute("role") || "region");
    el.setAttribute("aria-roledescription", "carousel");
    if (!el.hasAttribute("tabindex")) el.tabIndex = 0;
    this.items.forEach((item, i) => {
      item.classList.add("carousel-item");
      item.removeAttribute("hidden");
      item.setAttribute("role", "group");
      item.setAttribute("aria-roledescription", "slide");
      if (!item.hasAttribute("aria-label")) item.setAttribute("aria-label", `${i + 1} / ${this.items.length}`);
    });
    // Empty `.carousel-indicators` are filled with one button per page.
    el.querySelectorAll<HTMLElement>(".carousel-indicators").forEach((list) => {
      if (list.children.length || list.closest(".carousel") !== el) return;
      list.dataset.carouselGenerated = "true";
    });
  }

  private renderIndicators(): void {
    const pages = this.pageCount();
    this.element.querySelectorAll<HTMLElement>(".carousel-indicators[data-carousel-generated]").forEach((list) => {
      if (list.children.length === pages) return;
      list.replaceChildren(
        ...Array.from({ length: pages }, (_, i) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "carousel-indicator";
          button.setAttribute(
            "data-carousel-to",
            String(i * this.step > this.maxIndex() ? this.maxIndex() : i * this.step)
          );
          button.setAttribute("aria-label", `Go to slide ${i + 1}`);
          return button;
        })
      );
    });
  }

  private pageCount(): number {
    return Math.ceil((this.maxIndex() + 1) / this.step);
  }

  maxIndex(): number {
    return Math.max(0, this.items.length - this.perView);
  }

  private isRtl(): boolean {
    return getComputedStyle(this.element).direction === "rtl";
  }

  private bindEvents(): void {
    const el = this.element;
    this.on(
      el,
      "click",
      (event: Event) => {
        if (this.dragDistance > 6) {
          event.preventDefault();
          event.stopPropagation();
          this.dragDistance = 0;
          return;
        }
        const target = event.target as Element;
        const indicator = target.closest<HTMLElement>("[data-carousel-to]");
        if (indicator && indicator.closest(".carousel") === el) {
          this.show(Number(indicator.getAttribute("data-carousel-to")));
          this.restart();
          return;
        }
        const action = target.closest<HTMLElement>("[data-carousel]");
        if (!action || action.closest(".carousel") !== el) return;
        const value = action.getAttribute("data-carousel");
        if (value === "next") this.next();
        else if (value === "prev") this.prev();
        else if (value === "play") this.play();
        else if (value === "pause") this.pause();
        else if (value === "toggle") {
          if (this.paused) this.play();
          else this.pause();
        } else if (value) this.show(Number(value));
        if (value !== "pause" && value !== "toggle") this.restart();
      },
      true
    );
    this.on(el, "keydown", (event: Event) => {
      const key = (event as KeyboardEvent).key;
      if (!this.keyboard || (event.target as Element).closest("input,textarea,select,[contenteditable='true']")) return;
      const rtl = this.isRtl();
      if (key === "ArrowRight" || key === "ArrowLeft") {
        if ((key === "ArrowRight") !== rtl) this.next();
        else this.prev();
      } else if (key === "Home") this.show(0);
      else if (key === "End") this.show(this.maxIndex());
      else return;
      event.preventDefault();
      this.restart();
    });
    this.on(el, "mouseenter", () => {
      this.hovered = true;
      this.syncPlayback();
    });
    this.on(el, "mouseleave", () => {
      this.hovered = false;
      this.syncPlayback();
    });
    this.on(el, "focusin", () => {
      this.focused = true;
      this.syncPlayback();
    });
    this.on(el, "focusout", (event: Event) => {
      if (!el.contains((event as FocusEvent).relatedTarget as Node | null)) {
        this.focused = false;
        this.syncPlayback();
      }
    });
    if (typeof document !== "undefined") this.on(document, "visibilitychange", () => this.syncPlayback());
    if (typeof window !== "undefined") {
      this.on(window, "resize", () => this.applyLayout());
      for (const minWidth of Object.values(runtimeBreakpoints)) {
        const query = window.matchMedia(`(min-width:${minWidth})`);
        const handler = (): void => this.applyLayout();
        query.addEventListener?.("change", handler);
        this.cleanups.push(() => query.removeEventListener?.("change", handler));
        this.mediaQueries.push(query);
      }
    }
    if (this.swipe) this.bindSwipe();
  }

  private bindSwipe(): void {
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let pointerId: number | null = null;
    let horizontal: boolean | null = null;
    let delta = 0;
    const viewport = this.viewport;

    const onDown = (event: PointerEvent): void => {
      if (event.button !== 0 || pointerId !== null) return;
      if (event.pointerType === "mouse" && !this.drag) return;
      if ((event.target as Element).closest(CAROUSEL_INTERACTIVE) && event.pointerType === "mouse") return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      startTime = performance.now();
      horizontal = null;
      delta = 0;
      this.dragDistance = 0;
    };
    const onMove = (event: PointerEvent): void => {
      if (event.pointerId !== pointerId) return;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (horizontal === null) {
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        horizontal = Math.abs(dx) > Math.abs(dy);
        if (!horizontal) {
          pointerId = null;
          return;
        }
        viewport.setPointerCapture?.(event.pointerId);
        this.element.classList.add("is-dragging");
        this.hovered = true;
        this.syncPlayback();
      }
      event.preventDefault();
      delta = dx;
      this.dragDistance = Math.abs(dx);
      if (this.effect === "slide") {
        const atEdge =
          !this.loop &&
          ((this.index === 0 && this.towardsPrev(dx)) || (this.index >= this.maxIndex() && !this.towardsPrev(dx)));
        this.translate(atEdge ? dx / 3 : dx);
      }
    };
    const onUp = (event: PointerEvent): void => {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      this.element.classList.remove("is-dragging");
      if (event.pointerType !== "mouse") this.hovered = false;
      if (!horizontal) return;
      const elapsed = Math.max(1, performance.now() - startTime);
      const velocity = Math.abs(delta) / elapsed;
      const threshold = Math.min(80, viewport.clientWidth * 0.15);
      if (Math.abs(delta) > threshold || velocity > 0.45) {
        if (this.towardsPrev(delta)) this.prev();
        else this.next();
      } else {
        this.show(this.index);
      }
      this.syncPlayback();
      this.restart();
    };
    this.on(viewport, "pointerdown", onDown as EventListener);
    this.on(viewport, "pointermove", onMove as EventListener, { passive: false });
    this.on(viewport, "pointerup", onUp as EventListener);
    this.on(viewport, "pointercancel", onUp as EventListener);
    this.on(viewport, "dragstart", (event: Event) => event.preventDefault());
  }

  /** A drag in `dx` direction reveals the previous slide (flips in RTL). */
  private towardsPrev(dx: number): boolean {
    return this.isRtl() ? dx < 0 : dx > 0;
  }

  private translate(offsetPx = 0): void {
    if (this.effect === "fade") return;
    const slide = this.items[0];
    const gap = Number.parseFloat(getComputedStyle(this.track).columnGap || "0") || 0;
    const size = (slide?.getBoundingClientRect().width ?? 0) + gap;
    const sign = this.isRtl() ? 1 : -1;
    this.track.style.transform = `translate3d(${sign * this.index * size + offsetPx}px,0,0)`;
  }

  private applyLayout(): void {
    const perView = this.resolvePerView();
    const changed = perView !== this.perView;
    this.perView = perView;
    this.element.style.setProperty("--aksara-carousel-per-view", String(perView));
    if (changed && this.index > this.maxIndex()) this.index = this.maxIndex();
    this.renderIndicators();
    this.track.style.transition = "none";
    this.translate();
    void this.track.offsetWidth;
    this.track.style.transition = "";
    this.updateHeight();
  }

  private updateHeight(): void {
    if (!this.autoHeight) {
      this.viewport.style.height = "";
      return;
    }
    const visible = this.items.slice(this.index, this.index + this.perView);
    const height = Math.max(...visible.map((item) => item.offsetHeight), 0);
    if (height) this.viewport.style.height = `${height}px`;
  }

  updateOptions(options: CarouselOptions = {}): this {
    super.updateOptions(options);
    if (!this.track) return this;
    this.readOptions();
    this.applyLayout();
    const activeIndex = getNumberOption(this.options, this.element, "carousel", "activeIndex", -1);
    if (activeIndex >= 0) this.show(activeIndex);
    if (this.autoplay) this.play();
    else this.pause();
    return this;
  }

  /** Re-reads slides after items were added or removed. */
  update(): this {
    this.items = Array.from(this.track.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
    this.items.forEach((item) => item.classList.add("carousel-item"));
    this.element
      .querySelectorAll<HTMLElement>(".carousel-indicators[data-carousel-generated]")
      .forEach((list) => list.replaceChildren());
    this.applyLayout();
    return this.show(Math.min(this.index, this.maxIndex()), { instant: true });
  }

  resolveInitialIndex(): number {
    const configured = getNumberOption(this.options, this.element, "carousel", "activeIndex", -1);
    if (configured >= 0) return configured;
    const marked = this.items.findIndex((item) => item.classList.contains("active"));
    return Math.max(0, marked);
  }

  show(index: number, { instant = false }: { instant?: boolean } = {}): this {
    if (!this.items.length) return this;
    const max = this.maxIndex();
    let next = index;
    if (next < 0) next = this.loop ? max : 0;
    else if (next > max) next = this.loop ? (this.index >= max ? 0 : max) : max;
    const from = this.index;
    this.index = next;
    if (instant) this.track.style.transition = "none";
    this.translate();
    if (instant) {
      void this.track.offsetWidth;
      this.track.style.transition = "";
    }
    this.items.forEach((item, i) => {
      const visible = i >= this.index && i < this.index + this.perView;
      item.classList.toggle("active", i === this.index);
      item.toggleAttribute("inert", !visible);
      item.setAttribute("aria-hidden", visible ? "false" : "true");
    });
    this.element.querySelectorAll<HTMLElement>("[data-carousel-to]").forEach((indicator) => {
      if (
        indicator.closest(".carousel") !== this.element &&
        !indicator.closest(`[data-carousel-for="#${this.element.id}"]`)
      )
        return;
      const target = Number(indicator.getAttribute("data-carousel-to"));
      const isActive =
        target === this.index ||
        (this.step > 1 && Math.floor(this.index / this.step) === Math.floor(target / this.step));
      indicator.classList.toggle("active", isActive);
      if (isActive) indicator.setAttribute("aria-current", "true");
      else indicator.removeAttribute("aria-current");
    });
    this.syncExternal();
    this.element.querySelectorAll<HTMLElement>("[data-carousel-current]").forEach((node) => {
      node.textContent = String(this.index + 1);
    });
    this.element.querySelectorAll<HTMLElement>("[data-carousel-total]").forEach((node) => {
      node.textContent = String(this.items.length);
    });
    this.element
      .querySelectorAll<HTMLButtonElement>('[data-carousel="prev"],[data-carousel="next"]')
      .forEach((control) => {
        if (this.loop) return control.removeAttribute("disabled");
        const atEnd = control.getAttribute("data-carousel") === "prev" ? this.index === 0 : this.index >= max;
        control.toggleAttribute("disabled", atEnd);
      });
    this.updateHeight();
    this.restartProgress();
    if (from !== this.index || instant) {
      emit(this.element, "carousel:show", { index: this.index, from, instance: this });
    }
    return this;
  }

  /** Thumbnails or indicators outside the carousel: `data-carousel-for="#id"`. */
  private syncExternal(): void {
    if (!this.element.id || typeof document === "undefined") return;
    document
      .querySelectorAll<HTMLElement>(`[data-carousel-for="#${this.element.id}"] [data-carousel-to]`)
      .forEach((indicator) => {
        const isActive = Number(indicator.getAttribute("data-carousel-to")) === this.index;
        indicator.classList.toggle("active", isActive);
        if (isActive) {
          indicator.setAttribute("aria-current", "true");
          // Scroll only the strip, never the page.
          const strip = indicator.parentElement;
          if (strip && strip.scrollWidth > strip.clientWidth) {
            strip.scrollTo({
              left: indicator.offsetLeft - strip.offsetLeft - (strip.clientWidth - indicator.offsetWidth) / 2,
              behavior: "smooth"
            });
          }
        } else indicator.removeAttribute("aria-current");
      });
  }

  next(): this {
    if (!this.loop && this.index >= this.maxIndex()) return this;
    if (this.index >= this.maxIndex()) return this.show(0);
    return this.show(Math.min(this.index + this.step, this.maxIndex()));
  }

  prev(): this {
    if (!this.loop && this.index <= 0) return this;
    if (this.index <= 0) return this.show(this.maxIndex());
    return this.show(Math.max(this.index - this.step, 0));
  }

  private restartProgress(): void {
    this.element.querySelectorAll<HTMLElement>(".carousel-progress-bar").forEach((bar) => {
      bar.style.animation = "none";
      void bar.offsetWidth;
      bar.style.animation = "";
    });
  }

  private schedule(): void {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = null;
    if (!this.autoplay || this.paused || this.interval <= 0) return;
    this.timeout = setTimeout(() => {
      this.next();
      this.schedule();
    }, this.interval);
  }

  /** Pauses while hovered (if `pauseOnHover`), focused, dragged or in a hidden tab. */
  private syncPlayback(): void {
    const hidden = typeof document !== "undefined" && document.visibilityState === "hidden";
    const hold = (this.pauseOnHover && this.hovered) || this.focused || hidden;
    this.element.classList.toggle("is-paused", !this.autoplay || this.paused || hold);
    if (!this.autoplay || this.paused) return;
    if (hold) {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = null;
    } else if (!this.timeout) {
      this.restartProgress();
      this.schedule();
    }
  }

  private restart(): void {
    if (!this.autoplay || this.paused) return;
    this.restartProgress();
    if (this.timeout) this.schedule();
  }

  play(): this {
    this.autoplay = true;
    this.paused = false;
    this.element.classList.add("is-playing");
    this.schedule();
    this.syncPlayback();
    emit(this.element, "carousel:play", { instance: this });
    return this;
  }

  pause(): this {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = null;
    this.paused = true;
    this.element.classList.remove("is-playing");
    this.element.classList.add("is-paused");
    emit(this.element, "carousel:pause", { instance: this });
    return this;
  }

  destroy(): void {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = null;
    super.destroy();
  }
}

let tomSelectConstructor: TomSelectConstructor | null = null;

/** Registers Tom Select for bundler users: `Aksara.useTomSelect(TomSelect)`. */
export function useTomSelect(constructor: TomSelectConstructor): void {
  tomSelectConstructor = constructor;
}

function resolveTomSelect(): TomSelectConstructor | null {
  if (tomSelectConstructor) return tomSelectConstructor;
  const global =
    typeof window !== "undefined" ? (window as unknown as { TomSelect?: TomSelectConstructor }).TomSelect : undefined;
  return global ?? null;
}

/** Selects that `Aksara.init()` enhances. Opt out with `data-select="native"` or `.form-select-native`. */
export const ENHANCED_SELECT_SELECTOR =
  'select.form-select:not([data-select="native"]):not(.form-select-native),select[data-select]:not([data-select="native"])';

/**
 * Enhances a `<select>` with Tom Select: searchable single and multiple selects, tagging,
 * clear button and checkbox options, skinned by Aksara's CSS. Without Tom Select on the
 * page (or registered through `Aksara.useTomSelect`) the native, styled select is kept.
 */
export class Select extends Component {
  static componentName = "select";

  tomSelect: TomSelectInstance | null = null;

  constructor(element: HTMLElement, options: SelectOptions = {}) {
    super(element, options);
    this.mount();
  }

  private mount(): void {
    const Ctor = resolveTomSelect();
    const select = this.element as HTMLSelectElement;
    if (!Ctor || select.classList.contains("tomselected")) return;
    const o = this.options;
    const multiple = select.multiple;
    const plugins: Record<string, unknown> = {};
    if (multiple && getBooleanOption(o, select, "select", "removeButton", true)) {
      plugins.remove_button = { title: "Remove" };
    }
    if (getBooleanOption(o, select, "select", "clearable", false)) {
      plugins.clear_button = {
        title: "Clear",
        html: (data: { title: string }) =>
          `<button type="button" class="clear-button" title="${escapeHtmlStr(data.title)}" aria-label="${escapeHtmlStr(data.title)}">&times;</button>`
      };
    }
    if (multiple && getBooleanOption(o, select, "select", "checkboxes", false)) plugins.checkbox_options = {};

    const firstOption = select.options[0];
    const fallbackPlaceholder = firstOption && firstOption.value === "" ? firstOption.text : undefined;
    const placeholder = getOption<string | undefined>(
      o,
      select,
      "select",
      "placeholder",
      select.getAttribute("placeholder") ?? fallbackPlaceholder
    );
    const parent = getOption<string>(o, select, "select", "dropdownParent", "body");
    const maxItems = getNumberOption(o, select, "select", "maxItems", 0);

    const settings: Record<string, unknown> = {
      plugins,
      create: getBooleanOption(o, select, "select", "create", false),
      maxItems: multiple ? maxItems || null : 1,
      maxOptions: getNumberOption(o, select, "select", "maxOptions", 200),
      dropdownParent: parent === "wrapper" ? null : parent,
      copyClassesToDropdown: false,
      // Hide the placeholder as soon as something is selected (single and multiple).
      hidePlaceholder: true,
      closeAfterSelect: !multiple,
      render: {
        no_results: () => '<div class="no-results">No results found</div>',
        option_create: (data: { input: string }, escape: (value: string) => string) =>
          `<div class="create">Add <strong>${escape(data.input)}</strong>&hellip;</div>`
      },
      onDropdownOpen: () => emit(select, "select:open", { instance: this }),
      onDropdownClose: () => emit(select, "select:close", { instance: this }),
      onChange: (value: unknown) => emit(select, "select:change", { value, instance: this })
    };
    if (placeholder) settings.placeholder = placeholder;
    if (!getBooleanOption(o, select, "select", "search", true)) settings.controlInput = null;
    Object.assign(settings, (o.settings as Record<string, unknown> | undefined) ?? {});

    this.tomSelect = new Ctor(select, settings);
    emit(select, "select:init", { instance: this, tomSelect: this.tomSelect });
  }

  getValue(): string | string[] {
    if (this.tomSelect) return this.tomSelect.getValue();
    const select = this.element as HTMLSelectElement;
    return select.multiple ? Array.from(select.selectedOptions).map((option) => option.value) : select.value;
  }

  setValue(value: string | string[], silent = false): this {
    if (this.tomSelect) this.tomSelect.setValue(value, silent);
    else {
      const values = new Set(Array.isArray(value) ? value : [value]);
      Array.from((this.element as HTMLSelectElement).options).forEach((option) => {
        option.selected = values.has(option.value);
      });
      if (!silent) this.element.dispatchEvent(new Event("change", { bubbles: true }));
    }
    return this;
  }

  /** Re-reads `<option>` elements after the markup changed. */
  sync(): this {
    this.tomSelect?.sync();
    return this;
  }

  destroy(): void {
    this.tomSelect?.destroy();
    this.tomSelect = null;
    super.destroy();
  }
}

export interface SheetOptions extends ComponentOptions {
  /** Backdrop tap dismisses the top sheet (`true`), shakes (`"static"`), or does nothing (`false`). */
  backdrop?: boolean | "static";
  /** Escape goes back one sheet (and closes the last one). */
  keyboard?: boolean;
  /** Drag a sheet down to dismiss it. */
  swipe?: boolean;
  scrollLock?: boolean;
}

/**
 * Bottom sheet with stacked sub-sheets (the GitHub / iOS pattern): `data-sheet-push="#panel"`
 * slides a sub-sheet over the current one, which shrinks and dims behind it; back, swipe down
 * or Escape pops it. Panels are the `.sheet-panel` children of a `.sheet` root.
 */
export class BottomSheet extends Component {
  static componentName = "sheet";

  isOpen = false;
  stack: HTMLElement[] = [];
  previousFocus: HTMLElement | null = null;
  backdrop!: boolean | "static";
  keyboard!: boolean;
  swipe!: boolean;
  scrollLock!: boolean;
  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(element: HTMLElement, options: SheetOptions = {}) {
    super(element, options);
    this.updateOptions(options);
    element.setAttribute("aria-hidden", "true");
    this.panels().forEach((panel) => {
      panel.setAttribute("role", panel.getAttribute("role") || "dialog");
      panel.setAttribute("aria-modal", "true");
      if (!panel.hasAttribute("tabindex")) panel.tabIndex = -1;
      panel.inert = true;
    });
    this.on(element, "click", (event: Event) => this.onClick(event));
    this.on(document, "keydown", (event: Event) => this.onKeydown(event as KeyboardEvent));
    if (this.swipe) this.bindSwipe();
  }

  updateOptions(options: SheetOptions = {}): this {
    super.updateOptions(options);
    const backdrop = getOption<unknown>(this.options, this.element, "sheet", "backdrop", true);
    this.backdrop = backdrop === "static" ? "static" : backdrop !== "false" && backdrop !== false;
    this.keyboard = getBooleanOption(this.options, this.element, "sheet", "keyboard", true);
    this.swipe = getBooleanOption(this.options, this.element, "sheet", "swipe", true);
    this.scrollLock = getBooleanOption(this.options, this.element, "sheet", "scrollLock", true);
    return this;
  }

  panels(): HTMLElement[] {
    return Array.from(this.element.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement && child.classList.contains("sheet-panel")
    );
  }

  private resolvePanel(selector: string | null): HTMLElement | null {
    if (!selector) return null;
    try {
      const panel = this.element.querySelector<HTMLElement>(selector);
      return panel?.classList.contains("sheet-panel") ? panel : null;
    } catch {
      return null;
    }
  }

  get top(): HTMLElement | undefined {
    return this.stack[this.stack.length - 1];
  }

  private onClick(event: Event): void {
    const target = event.target as Element;
    // The backdrop (and the dimmed sheets behind, which let clicks through) dismiss only the
    // top sheet, like a swipe or Escape; the last one closes the whole sheet.
    if (target === this.element) {
      if (this.backdrop === true) this.back();
      else if (this.backdrop === "static") nudgeElement(this.element, "sheet-static");
      return;
    }
    const push = target.closest<HTMLElement>("[data-sheet-push]");
    if (push) {
      event.preventDefault();
      const panel = this.resolvePanel(push.getAttribute("data-sheet-push"));
      if (panel) this.push(panel);
      return;
    }
    if (target.closest("[data-sheet-back]")) {
      event.preventDefault();
      this.back();
      return;
    }
    if (target.closest("[data-sheet-close]")) {
      event.preventDefault();
      this.hide();
      return;
    }
    // Choosing a link navigates, so the sheet gets out of the way (opt out with data-sheet-keep).
    const link = target.closest<HTMLAnchorElement>("a[href]");
    if (link && !link.hasAttribute("data-sheet-keep")) this.hide();
  }

  private render(): void {
    const depthOf = (panel: HTMLElement): number => {
      const index = this.stack.indexOf(panel);
      return index < 0 ? -1 : this.stack.length - 1 - index;
    };
    this.panels().forEach((panel) => {
      const depth = depthOf(panel);
      panel.classList.toggle("is-open", depth >= 0);
      panel.classList.toggle("is-behind", depth > 0);
      panel.style.setProperty("--aksara-sheet-depth", String(Math.max(depth, 0)));
      panel.inert = depth !== 0;
      panel.setAttribute("aria-hidden", String(depth !== 0));
    });
    this.element.classList.toggle("sheet-stacked", this.stack.length > 1);
  }

  /** Opens the sheet on its first panel (or on `panel`). */
  show(panel?: HTMLElement | string): this {
    const root = typeof panel === "string" ? this.resolvePanel(panel) : (panel ?? this.panels()[0]);
    if (!root) return this;
    if (this.closeTimer) clearTimeout(this.closeTimer);
    this.closeTimer = null;
    if (!this.isOpen) {
      this.previousFocus = document.activeElement as HTMLElement | null;
      this.isOpen = true;
      this.element.classList.add("sheet-open");
      this.element.setAttribute("aria-hidden", "false");
      pushOverlay(this, this.scrollLock);
      void this.element.offsetWidth; // start the slide-in from the closed position
    }
    this.element.classList.add("sheet-visible");
    this.stack = [root];
    this.render();
    this.focusTop();
    emit(this.element, "sheet:show", { instance: this, panel: root });
    return this;
  }

  /** Slides a sub-sheet over the current one. */
  push(panel: HTMLElement | string): this {
    const next = typeof panel === "string" ? this.resolvePanel(panel) : panel;
    if (!next) return this;
    if (!this.isOpen) return this.show(next);
    const existing = this.stack.indexOf(next);
    if (existing >= 0) this.stack = this.stack.slice(0, existing);
    this.stack.push(next);
    this.render();
    this.focusTop();
    emit(this.element, "sheet:push", { instance: this, panel: next, depth: this.stack.length });
    return this;
  }

  /** Pops the top sub-sheet; closes the sheet when only one is left. */
  back(): this {
    if (this.stack.length <= 1) return this.hide();
    const popped = this.stack.pop();
    this.render();
    this.focusTop();
    emit(this.element, "sheet:back", { instance: this, panel: popped, depth: this.stack.length });
    return this;
  }

  hide(): this {
    if (!this.isOpen) return this;
    this.isOpen = false;
    this.stack = [];
    this.render();
    this.element.classList.remove("sheet-visible");
    this.element.setAttribute("aria-hidden", "true");
    popOverlay(this, this.scrollLock);
    this.closeTimer = setTimeout(() => {
      this.element.classList.remove("sheet-open");
      this.closeTimer = null;
    }, 340);
    if (this.previousFocus && typeof this.previousFocus.focus === "function") {
      this.previousFocus.focus({ preventScroll: true });
    }
    emit(this.element, "sheet:hide", { instance: this });
    return this;
  }

  toggle(): this {
    return this.isOpen ? this.hide() : this.show();
  }

  private focusTop(): void {
    const panel = this.top;
    if (!panel) return;
    const first = panel.querySelector<HTMLElement>(focusableSelector);
    (first ?? panel).focus({ preventScroll: true });
  }

  private onKeydown(event: KeyboardEvent): void {
    if (!this.isOpen || !isTopOverlay(this)) return;
    if (event.key === "Escape" && this.keyboard) {
      event.preventDefault();
      this.back();
      return;
    }
    const panel = this.top;
    if (event.key !== "Tab" || !panel) return;
    const focusable = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector));
    if (!focusable.length) {
      event.preventDefault();
      panel.focus();
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

  /** Drag the top sheet down from its handle or header (or anywhere when its body is scrolled to the top). */
  private bindSwipe(): void {
    let pointerId: number | null = null;
    let startY = 0;
    let startTime = 0;
    let delta = 0;
    let panel: HTMLElement | null = null;

    const onDown = (event: PointerEvent): void => {
      const top = this.top;
      const target = event.target as Element;
      if (!this.isOpen || !top || !top.contains(target) || event.button !== 0) return;
      if (target.closest("input,textarea,select,[contenteditable='true'],.sheet-grid,[data-sheet-no-swipe]")) return;
      const fromGrip = Boolean(target.closest(".sheet-handle,.sheet-header"));
      const body = top.querySelector<HTMLElement>(".sheet-body");
      if (!fromGrip && (event.pointerType === "mouse" || (body && body.scrollTop > 0))) return;
      pointerId = event.pointerId;
      panel = top;
      startY = event.clientY;
      startTime = performance.now();
      delta = 0;
    };
    const onMove = (event: PointerEvent): void => {
      if (event.pointerId !== pointerId || !panel) return;
      delta = Math.max(0, event.clientY - startY);
      if (delta < 4) return;
      panel.classList.add("is-dragging");
      panel.style.transform = `translateY(${delta}px)`;
    };
    const onUp = (event: PointerEvent): void => {
      if (event.pointerId !== pointerId || !panel) return;
      const current = panel;
      pointerId = null;
      panel = null;
      current.classList.remove("is-dragging");
      current.style.transform = "";
      const velocity = delta / Math.max(1, performance.now() - startTime);
      if (delta > current.offsetHeight * 0.25 || (delta > 24 && velocity > 0.5)) this.back();
    };
    this.on(this.element, "pointerdown", onDown as EventListener);
    this.on(this.element, "pointermove", onMove as EventListener);
    this.on(this.element, "pointerup", onUp as EventListener);
    this.on(this.element, "pointercancel", onUp as EventListener);
  }

  destroy(): void {
    if (this.isOpen) {
      popOverlay(this, this.scrollLock);
      this.element.classList.remove("sheet-open", "sheet-visible");
    }
    if (this.closeTimer) clearTimeout(this.closeTimer);
    super.destroy();
  }
}

export class Offcanvas extends Modal {
  static override componentName = "offcanvas";

  /** Dimmed layer behind the panel (`backdrop: false` leaves the page usable instead). */
  backdropElement: HTMLElement | null = null;
  backdropTimer: ReturnType<typeof setTimeout> | null = null;

  override isBackdropClick(): boolean {
    return false;
  }

  showBackdrop(): void {
    if (this.backdropTimer) clearTimeout(this.backdropTimer);
    let layer = this.backdropElement;
    if (!layer) {
      layer = document.createElement("div");
      layer.className = "offcanvas-backdrop";
      layer.addEventListener("click", () => {
        if (!this.isOpen) return;
        if (this.backdrop === "static") this.nudge();
        else this.hide();
      });
      this.backdropElement = layer;
    }
    // Sits right below its panel, so stacked overlays keep their order.
    this.element.parentElement?.insertBefore(layer, this.element);
    void layer.offsetWidth;
    layer.classList.add("is-visible");
  }

  hideBackdrop(): void {
    const layer = this.backdropElement;
    if (!layer) return;
    layer.classList.remove("is-visible");
    this.backdropTimer = setTimeout(() => layer.remove(), 300);
  }

  override show(): this {
    if (this.isOpen) return this;
    this.previousFocus = document.activeElement as HTMLElement | null;
    this.isOpen = true;
    if (this.backdrop) this.showBackdrop();
    this.element.classList.add("offcanvas-open");
    this.element.setAttribute("aria-hidden", "false");
    pushOverlay(this, this.scrollLock);
    if (this.focus) this.focusFirst();
    emit(this.element, "offcanvas:show", { instance: this });
    return this;
  }

  override destroy(): void {
    if (this.backdropTimer) clearTimeout(this.backdropTimer);
    this.backdropElement?.remove();
    super.destroy();
  }

  override hide(): this {
    if (!this.isOpen) return this;
    this.isOpen = false;
    this.hideBackdrop();
    this.element.classList.remove("offcanvas-open");
    this.element.setAttribute("aria-hidden", "true");
    popOverlay(this, this.scrollLock);
    if (this.previousFocus && typeof this.previousFocus.focus === "function") this.previousFocus.focus();
    emit(this.element, "offcanvas:hide", { instance: this });
    return this;
  }
}

/** Options a data-API trigger applied last, per instance, so the next trigger can drop them. */
const triggerOptionValues = new WeakMap<Component, Record<string, unknown>>();

/**
 * Applies a trigger's `data-*` options for this opening only: options a previous trigger set
 * (and nothing else changed since) are removed first, so they fall back to the element's own
 * attributes or the defaults instead of sticking to the instance.
 */
function applyTriggerOptions<T extends Component>(instance: T, options: Record<string, string>): T {
  const previous = triggerOptionValues.get(instance) ?? {};
  for (const [key, value] of Object.entries(previous)) {
    if (!(key in options) && instance.options[key] === value) delete instance.options[key];
  }
  triggerOptionValues.set(instance, { ...options });
  instance.updateOptions(options);
  return instance;
}

export interface MediaItem {
  src: string;
  alt?: string;
  caption?: string;
}

export interface MediaOptions extends ComponentOptions {
  items?: MediaItem[];
  index?: number;
  loop?: boolean;
  keyboard?: boolean;
  /** Largest zoom factor (default 4). */
  maxZoom?: number;
}

/**
 * Full-screen media viewer (`.media-modal`): prev/next, swipe, arrow keys, Escape,
 * zoom (buttons, +/-/0 keys, double click, ctrl/⌘ + wheel) and drag-to-pan while zoomed.
 * Items come from the `items` option or the `data-media-items` JSON the component renders.
 */
export class MediaViewer extends Component {
  static componentName = "media";

  items: MediaItem[] = [];
  index = 0;
  zoom = 1;
  panX = 0;
  panY = 0;
  /** Horizontal offset of the slide track while dragging / settling, in px. */
  drag = 0;
  isOpen = false;
  previousFocus: HTMLElement | null = null;
  loop!: boolean;
  keyboard!: boolean;
  maxZoom!: number;
  track: HTMLElement | null = null;
  settleTimer: ReturnType<typeof setTimeout> | null = null;
  settleDone: (() => void) | null = null;
  moved = false;

  constructor(element: HTMLElement, options: MediaOptions = {}) {
    super(element, options);
    this.isOpen = element.classList.contains("media-modal-open");
    this.buildTrack();
    this.updateOptions(options);
    if (this.isOpen) pushOverlay(this, true);

    this.on(element, "click", (event: Event) => {
      const target = event.target as Element;
      if (target.closest("[data-media-close]")) return void this.hide();
      if (target.closest("[data-media-prev]")) return void this.prev();
      if (target.closest("[data-media-next]")) return void this.next();
      if (target.closest("[data-media-zoom-in]")) return void this.setZoom(this.zoom * 1.5);
      if (target.closest("[data-media-zoom-out]")) return void this.setZoom(this.zoom / 1.5);
      if (target.closest("[data-media-zoom-reset]")) return void this.setZoom(1);
      // A click on the empty stage around the image closes, like a backdrop.
      if (target.matches(".media-modal-stage,.media-modal-track,.media-modal-figure") && !this.moved) this.hide();
    });
    this.on(element, "dblclick", (event: Event) => {
      if ((event.target as Element).closest('[data-media-slot="current"] [data-media-image]')) {
        this.setZoom(this.zoom > 1 ? 1 : 2.5);
      }
    });
    this.on(
      element,
      "wheel",
      (event: Event) => {
        const wheel = event as WheelEvent;
        if (!this.isOpen || !(wheel.ctrlKey || wheel.metaKey)) return;
        wheel.preventDefault();
        this.setZoom(this.zoom * (wheel.deltaY < 0 ? 1.15 : 1 / 1.15));
      },
      { passive: false }
    );
    this.on(document, "keydown", (event: Event) => this.onKeydown(event as KeyboardEvent));
    this.bindPointer();
  }

  /**
   * Wraps the figure in a `.media-modal-track` with a previous and a next slot, so dragging
   * shows the neighbouring item and changing items slides instead of swapping in place.
   */
  buildTrack(): void {
    const figure = this.element.querySelector<HTMLElement>(".media-modal-figure");
    if (!figure || figure.closest(".media-modal-track")) {
      this.track = figure?.closest<HTMLElement>(".media-modal-track") ?? null;
      return;
    }
    const track = document.createElement("div");
    track.className = "media-modal-track";
    figure.before(track);
    figure.setAttribute("data-media-slot", "current");
    const clone = (slot: string) => {
      const copy = figure.cloneNode(true) as HTMLElement;
      copy.setAttribute("data-media-slot", slot);
      copy.setAttribute("aria-hidden", "true");
      copy.setAttribute("inert", "");
      copy.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
      return copy;
    };
    track.append(clone("prev"), figure, clone("next"));
    this.track = track;
  }

  updateOptions(options: MediaOptions = {}): this {
    super.updateOptions(options);
    this.loop = getBooleanOption(this.options, this.element, "media", "loop", false);
    this.keyboard = getBooleanOption(this.options, this.element, "media", "keyboard", true);
    this.maxZoom = getNumberOption(this.options, this.element, "media", "maxZoom", 4);
    if (Array.isArray(this.options.items)) {
      this.items = this.options.items as MediaItem[];
    } else {
      try {
        const parsed = JSON.parse(this.element.getAttribute("data-media-items") || "[]");
        this.items = Array.isArray(parsed) ? parsed : [];
      } catch {
        this.items = [];
      }
    }
    const index = Number(this.options.index ?? this.element.getAttribute("data-media-index") ?? 0);
    this.index = clamp(Number.isNaN(index) ? 0 : index, 0, Math.max(0, this.items.length - 1));
    if (this.items.length) this.render();
    return this;
  }

  /** Replaces the items (e.g. from a gallery) and optionally jumps to `index`. */
  setItems(items: MediaItem[], index = 0): this {
    this.items = items;
    this.element.setAttribute("data-media-items", JSON.stringify(items));
    return this.go(index);
  }

  show(index?: number): this {
    if (index !== undefined) this.go(index);
    if (this.isOpen) return this;
    this.previousFocus = document.activeElement as HTMLElement | null;
    this.isOpen = true;
    this.element.classList.add("media-modal-open");
    this.element.setAttribute("aria-hidden", "false");
    pushOverlay(this, true);
    this.element.focus({ preventScroll: true });
    emit(this.element, "media:show", { index: this.index, item: this.items[this.index], instance: this });
    return this;
  }

  hide(): this {
    if (!this.isOpen) return this;
    this.finishSettle();
    this.isOpen = false;
    this.setZoom(1);
    this.element.classList.remove("media-modal-open");
    this.element.setAttribute("aria-hidden", "true");
    popOverlay(this, true);
    this.previousFocus?.focus?.({ preventScroll: true });
    emit(this.element, "media:hide", { instance: this });
    return this;
  }

  toggle(): this {
    return this.isOpen ? this.hide() : this.show();
  }

  /** Index of the item `step` away from the current one, or -1 when there is none. */
  neighbour(step: number): number {
    const total = this.items.length;
    const target = this.index + step;
    if (this.loop && total > 1) return ((target % total) + total) % total;
    return target >= 0 && target < total ? target : -1;
  }

  /** Jumps straight to `index` (no slide). Used by Home/End, `show(index)` and `setItems`. */
  go(index: number): this {
    const total = this.items.length;
    if (!total) return this;
    this.finishSettle();
    const next = this.loop ? ((index % total) + total) % total : clamp(index, 0, total - 1);
    const changed = next !== this.index;
    this.index = next;
    this.setZoom(1);
    this.setDrag(0);
    this.render();
    if (changed) emit(this.element, "media:change", { index: next, item: this.items[next], instance: this });
    return this;
  }

  next(): this {
    return this.slide(1);
  }

  prev(): this {
    return this.slide(-1);
  }

  /** Slides the track to the neighbour in `step` direction, then makes it current. */
  slide(step: 1 | -1): this {
    this.finishSettle();
    const target = this.neighbour(step);
    if (target < 0) {
      this.settle(0);
      return this;
    }
    this.setZoom(1);
    const width = this.track?.clientWidth || this.element.clientWidth || 1;
    // LTR: next sits to the right, so the track moves left (negative); RTL mirrors it.
    const offset = (this.isRtl() ? 1 : -1) * step * width;
    this.settle(offset, () => {
      this.index = target;
      this.setDrag(0);
      this.render();
      emit(this.element, "media:change", { index: target, item: this.items[target], instance: this });
    });
    return this;
  }

  isRtl(): boolean {
    return getComputedStyle(this.element).direction === "rtl";
  }

  setDrag(px: number): void {
    this.drag = px;
    this.element.style.setProperty("--aksara-media-drag", `${px}px`);
  }

  /** Animates the track to `px`, then runs `done` with transitions off. */
  settle(px: number, done?: () => void): void {
    const track = this.track;
    const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!track || reduced || Math.abs(px - this.drag) < 1) {
      this.setDrag(px);
      done?.();
      return;
    }
    this.element.classList.add("is-settling");
    this.setDrag(px);
    this.settleDone = () => {
      this.element.classList.remove("is-settling");
      this.settleDone = null;
      done?.();
    };
    const onEnd = (event: TransitionEvent) => {
      if (event.target === track && event.propertyName === "transform") this.finishSettle();
    };
    track.addEventListener("transitionend", onEnd as EventListener, { once: true });
    this.settleTimer = setTimeout(() => this.finishSettle(), 420);
  }

  /** Completes a running slide immediately (a new gesture or command takes over). */
  finishSettle(): void {
    if (this.settleTimer) clearTimeout(this.settleTimer);
    this.settleTimer = null;
    const done = this.settleDone;
    if (done) done();
  }

  setZoom(value: number): this {
    this.zoom = clamp(Math.round(value * 100) / 100, 1, this.maxZoom);
    if (this.zoom === 1) {
      this.panX = 0;
      this.panY = 0;
    }
    this.element.classList.toggle("is-zoomed", this.zoom > 1);
    this.applyTransform();
    return this;
  }

  applyTransform(): void {
    this.element.style.setProperty("--aksara-media-zoom", String(this.zoom));
    this.element.style.setProperty("--aksara-media-x", `${this.panX}px`);
    this.element.style.setProperty("--aksara-media-y", `${this.panY}px`);
  }

  fillSlot(slot: string, item: MediaItem | undefined): void {
    const figure = this.element.querySelector<HTMLElement>(`[data-media-slot="${slot}"]`);
    if (!figure) return;
    figure.classList.toggle("is-empty", !item);
    const image = figure.querySelector<HTMLImageElement>("[data-media-image]");
    if (image) {
      if (item && image.getAttribute("src") !== item.src) image.src = item.src;
      image.alt = item?.alt ?? "";
      image.hidden = !item;
    }
    const caption = figure.querySelector<HTMLElement>("[data-media-caption]");
    if (caption) {
      caption.textContent = item?.caption ?? "";
      caption.hidden = !item?.caption;
    }
  }

  render(): void {
    const item = this.items[this.index];
    if (!item) return;
    const el = this.element;
    if (this.track) {
      this.fillSlot("current", item);
      const prev = this.neighbour(-1);
      const next = this.neighbour(1);
      this.fillSlot("prev", prev >= 0 ? this.items[prev] : undefined);
      this.fillSlot("next", next >= 0 ? this.items[next] : undefined);
    } else {
      const image = el.querySelector<HTMLImageElement>("[data-media-image]");
      if (image && image.getAttribute("src") !== item.src) image.src = item.src;
      if (image) image.alt = item.alt ?? "";
    }
    const total = this.items.length;
    el.querySelectorAll<HTMLElement>("[data-media-current]").forEach(
      (node) => (node.textContent = String(this.index + 1))
    );
    el.querySelectorAll<HTMLElement>("[data-media-total]").forEach((node) => (node.textContent = String(total)));
    el.querySelectorAll<HTMLButtonElement>("[data-media-prev]").forEach((button) => {
      button.disabled = !this.loop && this.index === 0;
      button.hidden = total < 2;
    });
    el.querySelectorAll<HTMLButtonElement>("[data-media-next]").forEach((button) => {
      button.disabled = !this.loop && this.index === total - 1;
      button.hidden = total < 2;
    });
    el.querySelectorAll<HTMLElement>(".media-modal-counter").forEach((node) => (node.hidden = total < 2));
    el.setAttribute("data-media-index", String(this.index));
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.isOpen || !this.keyboard || !isTopOverlay(this)) return;
    const rtl = this.isRtl();
    const actions: Record<string, () => void> = {
      Escape: () => this.hide(),
      ArrowLeft: () => (rtl ? this.next() : this.prev()),
      ArrowRight: () => (rtl ? this.prev() : this.next()),
      Home: () => this.go(0),
      End: () => this.go(this.items.length - 1),
      "+": () => this.setZoom(this.zoom * 1.5),
      "=": () => this.setZoom(this.zoom * 1.5),
      "-": () => this.setZoom(this.zoom / 1.5),
      "0": () => this.setZoom(1)
    };
    const action = actions[event.key];
    if (!action || (event.target as Element)?.closest?.("input,textarea,select,[contenteditable='true']")) return;
    event.preventDefault();
    action();
  }

  /**
   * At 1×: the track follows the pointer (rubber-band at the ends) and on release slides to
   * the neighbour when dragged past 20% of the width or flicked; otherwise it springs back.
   * Zoomed: dragging pans the image.
   */
  bindPointer(): void {
    const stage = this.element.querySelector<HTMLElement>("[data-media-stage]") || this.element;
    let startX = 0;
    let startY = 0;
    let originX = 0;
    let originY = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0;
    let active = false;
    let horizontal: boolean | null = null;
    this.on(stage, "pointerdown", (event: Event) => {
      const pointer = event as PointerEvent;
      if (pointer.button !== 0 || (pointer.target as Element).closest("button,a,.media-modal-sidebar")) return;
      this.finishSettle();
      active = true;
      horizontal = null;
      this.moved = false;
      startX = lastX = pointer.clientX;
      startY = pointer.clientY;
      lastT = pointer.timeStamp;
      velocity = 0;
      originX = this.panX;
      originY = this.panY;
    });
    this.on(window, "pointermove", (event: Event) => {
      if (!active) return;
      const pointer = event as PointerEvent;
      const dx = pointer.clientX - startX;
      const dy = pointer.clientY - startY;
      if (!this.moved && Math.hypot(dx, dy) < 6) return;
      this.moved = true;
      const dt = Math.max(1, pointer.timeStamp - lastT);
      velocity = (pointer.clientX - lastX) / dt;
      lastX = pointer.clientX;
      lastT = pointer.timeStamp;
      if (this.zoom > 1) {
        this.element.classList.add("is-panning");
        this.panX = originX + dx;
        this.panY = originY + dy;
        this.applyTransform();
        return;
      }
      if (horizontal === null) horizontal = Math.abs(dx) >= Math.abs(dy);
      if (!horizontal || this.items.length < 2) return;
      this.element.classList.add("is-swiping");
      // Pulling towards a side with no item stretches with resistance.
      const towardsNext = dx < 0 !== this.isRtl();
      const blocked = this.neighbour(towardsNext ? 1 : -1) < 0;
      this.setDrag(blocked ? dx * 0.3 : dx);
    });
    const end = () => {
      if (!active) return;
      active = false;
      this.element.classList.remove("is-panning", "is-swiping");
      if (this.zoom === 1 && horizontal && this.items.length > 1) {
        const width = this.track?.clientWidth || this.element.clientWidth || 1;
        const dx = this.drag;
        const towardsNext = dx < 0 !== this.isRtl();
        const flick = Math.abs(velocity) > 0.45 && Math.sign(velocity) === Math.sign(dx);
        if (Math.abs(dx) > width * 0.2 || flick) {
          if (towardsNext) this.next();
          else this.prev();
        } else {
          this.settle(0);
        }
      }
      // Let the click that ends a drag through without closing the viewer.
      setTimeout(() => (this.moved = false), 0);
    };
    this.on(window, "pointerup", end);
    this.on(window, "pointercancel", end);
  }

  destroy(): void {
    this.finishSettle();
    if (this.isOpen) popOverlay(this, true);
    super.destroy();
  }
}

/** Items of a `[data-media-gallery]` container: `[data-media-item]` children, else its images. */
function galleryItems(gallery: Element): { nodes: HTMLElement[]; items: MediaItem[] } {
  let nodes = Array.from(gallery.querySelectorAll<HTMLElement>("[data-media-item]"));
  if (!nodes.length) nodes = Array.from(gallery.querySelectorAll<HTMLElement>("img"));
  const items = nodes.map((node) => {
    const img = node instanceof HTMLImageElement ? node : node.querySelector("img");
    return {
      src:
        node.getAttribute("data-media-src") ||
        node.getAttribute("href") ||
        img?.getAttribute("data-media-src") ||
        img?.currentSrc ||
        img?.getAttribute("src") ||
        "",
      alt: node.getAttribute("data-media-alt") || img?.getAttribute("alt") || "",
      caption: node.getAttribute("data-media-caption") || img?.getAttribute("data-media-caption") || ""
    };
  });
  return { nodes, items };
}

/** Marks the picked option of a `.picker-modal`, emits `aksara:picker:select` and closes it. */
function selectPickerOption(option: HTMLElement): void {
  const modal = option.closest<HTMLElement>(".picker-modal");
  if (!modal || option.matches(":disabled,[aria-disabled='true']")) return;
  modal.querySelectorAll<HTMLElement>("[data-picker-value]").forEach((item) => {
    const selected = item === option;
    item.classList.toggle("is-selected", selected);
    item.setAttribute("aria-selected", String(selected));
  });
  const value = option.getAttribute("data-picker-value") ?? "";
  const label = option.querySelector(".picker-option-label")?.textContent?.trim() ?? option.textContent?.trim() ?? "";
  modal.setAttribute("data-picker-selected", value);
  emit(modal, "picker:select", { value, label, option });
  if (modal.getAttribute("data-picker-close") !== "false") getInstance(modal, Modal).hide();
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
  } else if (floatingTips.has(target)) {
    floatingTips.get(target)!.hide();
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

// ── Copy, toggle, segmented, stepper, OTP, steps ─────────────────────────────

/** Writes text to the clipboard; falls back to a hidden textarea where the async API is missing (http, file://). */
async function writeClipboard(text: string): Promise<boolean> {
  if (!text || typeof document === "undefined") return false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the legacy path */
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
  document.body.append(area);
  area.select();
  let ok: boolean;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  area.remove();
  return ok;
}

function textOf(el: Element | null): string {
  if (!el) return "";
  if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement)
    return el.value;
  return el.textContent?.trim() ?? "";
}

const copyTimers = new WeakMap<HTMLElement, ReturnType<typeof setTimeout>>();

/**
 * `[data-clipboard]` triggers: `data-clipboard="#selector"` copies that element's value/text,
 * `data-clipboard-text` copies a literal, otherwise the trigger's own text. The trigger gets
 * `.is-copied` for `data-clipboard-reset` ms (2000); `data-clipboard-success` swaps its HTML.
 */
async function copyFromTrigger(trigger: HTMLElement): Promise<void> {
  const target = trigger.getAttribute("data-clipboard");
  let text = trigger.getAttribute("data-clipboard-text") ?? "";
  if (!text && target) {
    // `#id`, `.class` or `[attr]` is a selector; anything else is copied literally.
    let el: Element | null = null;
    if (/^[#.[]/.test(target)) {
      try {
        el = document.querySelector(target);
      } catch {
        el = null;
      }
    }
    text = el ? textOf(el) : target;
  }
  // No source at all: the trigger's visible label (not the hidden "Copied" state).
  if (!text) text = (trigger.querySelector(".copy-btn-idle") ?? trigger).textContent?.trim() ?? "";
  const ok = await writeClipboard(text);
  if (!ok) {
    emit(trigger, "clipboard:error", { text });
    return;
  }
  const reset = Number(trigger.getAttribute("data-clipboard-reset") ?? 2000);
  const success = trigger.getAttribute("data-clipboard-success");
  if (success) {
    if (!trigger.hasAttribute("data-clipboard-original"))
      trigger.setAttribute("data-clipboard-original", trigger.innerHTML);
    trigger.innerHTML = success;
  }
  trigger.classList.add("is-copied");
  const status = trigger.querySelector<HTMLElement>(".copy-btn-done");
  if (status) status.setAttribute("role", "status");
  const pending = copyTimers.get(trigger);
  if (pending) clearTimeout(pending);
  copyTimers.set(
    trigger,
    setTimeout(() => {
      trigger.classList.remove("is-copied");
      const original = trigger.getAttribute("data-clipboard-original");
      if (original !== null) trigger.innerHTML = original;
      copyTimers.delete(trigger);
    }, reset)
  );
  emit(trigger, "clipboard:copy", { text });
}

/** `data-toggle="button"`: flips `aria-pressed` (and `.active`). */
function toggleButton(button: HTMLElement): void {
  const pressed = button.getAttribute("aria-pressed") !== "true";
  button.setAttribute("aria-pressed", String(pressed));
  button.classList.toggle("active", pressed);
  emit(button, "toggle", { pressed });
}

/** Button-based `.segmented[data-segmented]`: one pressed item at a time. */
function selectSegment(item: HTMLElement): void {
  const group = item.closest<HTMLElement>(".segmented");
  if (!group || item.matches(":disabled,[aria-disabled='true']")) return;
  const items = Array.from(group.querySelectorAll<HTMLElement>(".segmented-item"));
  items.forEach((other) => {
    const on = other === item;
    other.setAttribute("aria-pressed", String(on));
    other.classList.toggle("active", on);
  });
  const value = item.getAttribute("data-value") ?? item.textContent?.trim() ?? "";
  group.setAttribute("data-value", value);
  emit(group, "segmented:change", { value, item, index: items.indexOf(item) });
}

function stepperInput(group: Element): HTMLInputElement | null {
  return group.querySelector<HTMLInputElement>("input");
}

/** Disables − / + at the input's min / max. */
function syncStepper(group: Element): void {
  const input = stepperInput(group);
  if (!input) return;
  const value = Number(input.value);
  const min = input.min === "" ? -Infinity : Number(input.min);
  const max = input.max === "" ? Infinity : Number(input.max);
  group
    .querySelectorAll<HTMLButtonElement>("[data-stepper-down]")
    .forEach((b) => (b.disabled = input.disabled || value <= min));
  group
    .querySelectorAll<HTMLButtonElement>("[data-stepper-up]")
    .forEach((b) => (b.disabled = input.disabled || value >= max));
}

function stepNumber(group: Element, direction: 1 | -1): boolean {
  const input = stepperInput(group);
  if (!input || input.disabled || input.readOnly) return false;
  const step = Number(input.step) || 1;
  const min = input.min === "" ? -Infinity : Number(input.min);
  const max = input.max === "" ? Infinity : Number(input.max);
  const decimals = (String(step).split(".")[1] ?? "").length;
  // An empty field starts from min (or 0) instead of stepping.
  const current = Number(input.value);
  const next =
    input.value === "" || Number.isNaN(current)
      ? clamp(Number.isFinite(min) ? min : 0, min, max)
      : clamp(Number((current + direction * step).toFixed(decimals)), min, max);
  if (input.value !== "" && next === current) return false;
  input.value = String(next);
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
  syncStepper(group);
  return true;
}

let stepperRepeat: ReturnType<typeof setTimeout> | null = null;

function stopStepperRepeat(): void {
  if (stepperRepeat) clearTimeout(stepperRepeat);
  stepperRepeat = null;
}

/** Press and hold − / + to keep stepping (after 400ms, then every 70ms). */
function startStepperRepeat(button: HTMLElement): void {
  const group = button.closest("[data-stepper]");
  if (!group) return;
  const direction = button.hasAttribute("data-stepper-up") ? 1 : -1;
  stopStepperRepeat();
  button.addEventListener("pointerleave", stopStepperRepeat, { once: true });
  const tick = (delay: number) => {
    stepperRepeat = setTimeout(() => {
      if (!stepNumber(group, direction)) return stopStepperRepeat();
      button.setAttribute("data-stepper-repeated", "");
      tick(70);
    }, delay);
  };
  tick(400);
}

function otpInputs(group: Element): HTMLInputElement[] {
  return Array.from(group.querySelectorAll<HTMLInputElement>("input:not([type='hidden'])"));
}

/** Combined value into the hidden field / `data-value`; fires `otp:complete` when every box is filled. */
function syncOtp(group: HTMLElement, notify = true): void {
  const boxes = otpInputs(group);
  const value = boxes.map((box) => box.value).join("");
  group.setAttribute("data-value", value);
  const hidden = group.querySelector<HTMLInputElement>("input[type='hidden']");
  if (hidden) hidden.value = value;
  // Initial sync keeps a server-rendered `.is-invalid`; editing clears it.
  if (!notify) return;
  group.classList.remove("is-invalid");
  emit(group, "otp:change", { value });
  if (boxes.length && boxes.every((box) => box.value !== "")) emit(group, "otp:complete", { value });
}

function otpPattern(group: Element): RegExp {
  const source = group.getAttribute("data-otp-pattern") || "[0-9]";
  try {
    return new RegExp(`^${source}$`);
  } catch {
    return /^[0-9]$/;
  }
}

function fillOtp(group: HTMLElement, from: HTMLInputElement, text: string): void {
  const boxes = otpInputs(group);
  const pattern = otpPattern(group);
  const chars = Array.from(text).filter((char) => pattern.test(char));
  let index = boxes.indexOf(from);
  for (const char of chars) {
    if (index >= boxes.length) break;
    boxes[index].value = char;
    index += 1;
  }
  boxes[Math.min(index, boxes.length - 1)]?.focus();
  syncOtp(group);
}

function bindOtp(): void {
  document.addEventListener("input", (event) => {
    const box = event.target;
    if (!(box instanceof HTMLInputElement)) return;
    const group = box.closest<HTMLElement>("[data-otp]");
    if (!group) return;
    const value = box.value;
    if (value.length > 1) {
      // Autofill / IME delivered several characters into one box.
      box.value = "";
      fillOtp(group, box, value);
      return;
    }
    if (value && !otpPattern(group).test(value)) {
      box.value = "";
      return;
    }
    if (value) {
      const boxes = otpInputs(group);
      boxes[boxes.indexOf(box) + 1]?.focus();
      boxes[boxes.indexOf(box) + 1]?.select();
    }
    syncOtp(group);
  });
  document.addEventListener("keydown", (event) => {
    const box = event.target;
    if (!(box instanceof HTMLInputElement)) return;
    const group = box.closest<HTMLElement>("[data-otp]");
    if (!group) return;
    const boxes = otpInputs(group);
    const index = boxes.indexOf(box);
    const rtl = getComputedStyle(group).direction === "rtl";
    const prev = boxes[index - 1];
    const next = boxes[index + 1];
    if (event.key === "Backspace" && !box.value && prev) {
      event.preventDefault();
      prev.value = "";
      prev.focus();
      syncOtp(group);
    } else if (event.key === (rtl ? "ArrowRight" : "ArrowLeft") && prev) {
      event.preventDefault();
      prev.focus();
      prev.select();
    } else if (event.key === (rtl ? "ArrowLeft" : "ArrowRight") && next) {
      event.preventDefault();
      next.focus();
      next.select();
    }
  });
  document.addEventListener("paste", (event) => {
    const box = event.target;
    if (!(box instanceof HTMLInputElement)) return;
    const group = box.closest<HTMLElement>("[data-otp]");
    const text = event.clipboardData?.getData("text") ?? "";
    if (!group || !text) return;
    event.preventDefault();
    fillOtp(group, box, text.trim());
  });
  document.addEventListener("focusin", (event) => {
    const box = event.target;
    if (box instanceof HTMLInputElement && box.closest("[data-otp]")) box.select();
  });
}

/**
 * Moves a `.steps` list to `index`: earlier steps get `.is-complete`, that one `.is-active`
 * and `aria-current="step"`. Panels matched by `data-steps-panels` follow along.
 */
function goToStep(steps: HTMLElement, index: number): number {
  const items = Array.from(steps.querySelectorAll<HTMLElement>(":scope > .step"));
  if (!items.length) return -1;
  const target = clamp(Math.round(index), 0, items.length - 1);
  const previous = items.findIndex((item) => item.classList.contains("is-active"));
  items.forEach((item, i) => {
    item.classList.toggle("is-complete", i < target);
    item.classList.toggle("is-active", i === target);
    if (i === target) item.setAttribute("aria-current", "step");
    else item.removeAttribute("aria-current");
  });
  const panels = steps.getAttribute("data-steps-panels");
  if (panels) {
    document.querySelectorAll<HTMLElement>(panels).forEach((panel, i) => (panel.hidden = i !== target));
  }
  const id = steps.id ? `#${CSS.escape(steps.id)}` : null;
  if (id) {
    document
      .querySelectorAll<HTMLButtonElement>(`[data-steps-prev="${id}"]`)
      .forEach((b) => (b.disabled = target === 0));
    document
      .querySelectorAll<HTMLElement>(`[data-steps-next="${id}"]`)
      .forEach((b) => b.toggleAttribute("data-steps-last", target === items.length - 1));
  }
  if (previous !== target) emit(steps, "steps:change", { index: target, previous, total: items.length });
  return target;
}

function currentStep(steps: HTMLElement): number {
  const items = Array.from(steps.querySelectorAll<HTMLElement>(":scope > .step"));
  const active = items.findIndex((item) => item.classList.contains("is-active"));
  return active >= 0 ? active : items.filter((item) => item.classList.contains("is-complete")).length;
}

// ── Delegated data API ─────────────────────────────────────────────────────────
// One document-level listener per event type: works for content rendered after
// init() and never accumulates per-element listeners across SPA re-renders.
let delegatedDataApiBound = false;

const collapseTimers = new WeakMap<HTMLElement, ReturnType<typeof setTimeout>>();

function isCollapseOpen(panel: HTMLElement): boolean {
  return panel.classList.contains("collapse-show") || panel.classList.contains("show");
}

/**
 * Opens or closes a `.collapse` panel with a height (or, for `.collapse-horizontal`, width)
 * transition. Reversing mid-animation continues from the current size. Panels inside
 * `data-collapse-parent="#group"` close their open siblings (accordion behaviour).
 */
function setCollapse(panel: HTMLElement, open: boolean, trigger: HTMLElement | null): void {
  if (open) {
    const parent = panel.getAttribute("data-collapse-parent");
    if (parent) {
      document.querySelectorAll<HTMLElement>(`[data-collapse-parent="${CSS.escape(parent)}"]`).forEach((other) => {
        if (other !== panel && isCollapseOpen(other)) setCollapse(other, false, null);
      });
    }
  }

  const pending = collapseTimers.get(panel);
  const animating = pending !== undefined;
  if (pending) clearTimeout(pending);
  collapseTimers.delete(panel);
  if (!animating && isCollapseOpen(panel) === open) {
    syncCollapseTriggers(panel, open, trigger);
    return;
  }

  const horizontal = panel.classList.contains("collapse-horizontal");
  const size = horizontal ? "width" : "height";
  const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const duration = Number(panel.getAttribute("data-collapse-duration") ?? 300);
  const current = isCollapseOpen(panel) ? panel.getBoundingClientRect()[size] : 0;
  const finish = () => {
    panel.classList.remove("collapsing");
    panel.style.removeProperty(size);
    if (!open) {
      panel.classList.remove("collapse-show", "show");
    }
    collapseTimers.delete(panel);
    emit(panel, open ? "collapse:shown" : "collapse:hidden", { trigger });
  };

  panel.classList.add("collapse-show", "show");
  if (reduced || duration <= 0 || typeof panel.animate !== "function") {
    finish();
  } else {
    const target = open ? (horizontal ? panel.scrollWidth : panel.scrollHeight) : 0;
    panel.style.setProperty(size, `${current}px`);
    panel.classList.add("collapsing");
    void panel.offsetWidth;
    panel.style.setProperty("--aksara-collapse-duration", `${duration}ms`);
    panel.style.setProperty(size, `${target}px`);
    collapseTimers.set(panel, setTimeout(finish, duration));
  }
  syncCollapseTriggers(panel, open, trigger);
  emit(panel, open ? "collapse:show" : "collapse:hide", { trigger });
}

function syncCollapseTriggers(panel: HTMLElement, open: boolean, trigger: HTMLElement | null): void {
  const id = panel.id ? `#${panel.id}` : null;
  document.querySelectorAll<HTMLElement>("[data-collapse],[data-collapse-target]").forEach((item) => {
    const selector = item.getAttribute("data-collapse-target") || item.getAttribute("data-collapse");
    if (item === trigger || (id && selector === id)) {
      item.setAttribute("aria-expanded", String(open));
      item.classList.toggle("collapsed", !open);
    }
  });
}

/** Programmatic handle for a `.collapse` panel: `Aksara.collapse("#more").toggle()`. */
export class Collapse extends Component {
  static componentName = "collapse";

  get isOpen(): boolean {
    return isCollapseOpen(this.element);
  }

  show(): this {
    setCollapse(this.element, true, null);
    return this;
  }

  hide(): this {
    setCollapse(this.element, false, null);
    return this;
  }

  toggle(): this {
    setCollapse(this.element, !this.isOpen, null);
    return this;
  }
}

/** `--aksara-range-progress` drives the filled part of a `.form-range` track. */
function syncRange(input: HTMLInputElement): void {
  const min = Number(input.min || 0);
  const max = Number(input.max || 100);
  const percent = max > min ? ((Number(input.value) - min) / (max - min)) * 100 : 0;
  input.style.setProperty("--aksara-range-progress", `${clamp(percent, 0, 100)}%`);
  const output = input.getAttribute("data-range-output");
  if (output) {
    const suffix = input.getAttribute("data-range-suffix") ?? "";
    document.querySelectorAll<HTMLElement>(output).forEach((node) => {
      node.textContent = `${input.value}${suffix}`;
    });
  }
}

/** `data-counter="#target"` writes "12 / 160" (with `maxlength`) into the target. */
function syncCounter(field: HTMLInputElement | HTMLTextAreaElement): void {
  const selector = field.getAttribute("data-counter");
  if (!selector) return;
  const max = field.maxLength > 0 ? field.maxLength : 0;
  const length = field.value.length;
  document.querySelectorAll<HTMLElement>(selector).forEach((node) => {
    node.textContent = max ? `${length} / ${max}` : String(length);
    node.classList.toggle("is-limit", max > 0 && length >= max * 0.9);
  });
}

function syncDropzone(input: HTMLInputElement): void {
  const zone = input.closest<HTMLElement>(".form-dropzone");
  if (!zone) return;
  const names = Array.from(input.files ?? []).map((file) => file.name);
  zone.classList.toggle("has-files", names.length > 0);
  zone.querySelectorAll<HTMLElement>(".form-dropzone-files").forEach((node) => {
    node.textContent = names.length > 2 ? `${names.length} files selected` : names.join(", ");
  });
}

type ValidatableField = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function isValidatable(element: Element): element is ValidatableField {
  if (element instanceof HTMLInputElement) {
    return !["submit", "button", "reset", "hidden", "image"].includes(element.type) && element.willValidate;
  }
  return (element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) && element.willValidate;
}

/** Where a field's message goes: after its wrapper (icon field, group, floating label, check label). */
function feedbackAnchor(field: ValidatableField): Element {
  const tom = (field as unknown as { tomselect?: { wrapper?: HTMLElement } }).tomselect?.wrapper;
  const wrapper = field.closest(
    ".form-icon,.input-group,.form-floating,.form-check,.form-radio,.form-switch,.form-check-card"
  );
  return wrapper ?? tom ?? field;
}

/**
 * Applies `is-invalid` (and `is-valid` with `data-validate="all"`) from the browser's
 * constraint validation and writes the message into an auto-created `.form-error`.
 * `data-error="..."` on the field overrides the browser message.
 */
function validateField(field: ValidatableField, showValid: boolean): boolean {
  const valid = field.checkValidity();
  const targets: Element[] = [field];
  const tom = (field as unknown as { tomselect?: { wrapper?: HTMLElement } }).tomselect?.wrapper;
  if (tom) targets.push(tom);
  targets.forEach((target) => {
    target.classList.toggle("is-invalid", !valid);
    target.classList.toggle("is-valid", valid && showValid);
  });
  field.setAttribute("aria-invalid", String(!valid));
  // Radios share one message per group: only the last radio of the group owns it.
  if (field instanceof HTMLInputElement && field.type === "radio" && field.form && field.name) {
    const group = Array.from(
      field.form.querySelectorAll<HTMLInputElement>(`input[type="radio"][name="${CSS.escape(field.name)}"]`)
    );
    if (group[group.length - 1] !== field) return valid;
  }
  const anchor = feedbackAnchor(field);
  let message = anchor.nextElementSibling;
  if (!(message instanceof HTMLElement && message.hasAttribute("data-validate-message"))) {
    if (valid) return valid;
    message = document.createElement("span");
    message.className = "form-error";
    message.setAttribute("data-validate-message", "");
    if (field.id) message.id = `${field.id}-error`;
    anchor.after(message);
  }
  const node = message as HTMLElement;
  node.hidden = valid;
  node.textContent = valid ? "" : field.getAttribute("data-error") || field.validationMessage;
  if (node.id && !valid) field.setAttribute("aria-describedby", node.id);
  return valid;
}

function validateForm(form: HTMLFormElement): boolean {
  const showValid = form.getAttribute("data-validate") === "all";
  const fields = Array.from(form.elements).filter(isValidatable);
  const results = fields.map((field) => validateField(field, showValid));
  form.classList.add("was-validated");
  const firstInvalid = fields[results.indexOf(false)];
  const valid = !firstInvalid;
  emit(form, valid ? "form:valid" : "form:invalid", {
    form,
    fields: valid ? [] : fields.filter((_, i) => !results[i])
  });
  if (firstInvalid) {
    const tom = (firstInvalid as unknown as { tomselect?: { focus(): void } }).tomselect;
    if (tom) tom.focus();
    else firstInvalid.focus();
  }
  return valid;
}

// ── Selectable tables: `<table data-table-select>` ──────────────────────────────
const TABLE_SELECTABLE = "table[data-table-select]";
const lastTableToggle = new WeakMap<HTMLTableElement, number>();

function tableRowBoxes(table: HTMLTableElement): HTMLInputElement[] {
  const explicit = Array.from(table.querySelectorAll<HTMLInputElement>("tbody input[data-table-select-row]"));
  return explicit.length
    ? explicit
    : Array.from(table.querySelectorAll<HTMLInputElement>("tbody input[type='checkbox']"));
}

function tableAllBoxes(table: HTMLTableElement): HTMLInputElement[] {
  const explicit = Array.from(table.querySelectorAll<HTMLInputElement>("input[data-table-select-all]"));
  return explicit.length
    ? explicit
    : Array.from(table.querySelectorAll<HTMLInputElement>("thead input[type='checkbox']"));
}

/** Rows whose checkbox is checked. */
function selectedTableRows(table: HTMLTableElement): HTMLTableRowElement[] {
  return tableRowBoxes(table)
    .filter((box) => box.checked)
    .map((box) => box.closest("tr"))
    .filter((row): row is HTMLTableRowElement => Boolean(row));
}

/**
 * Mirrors the row checkboxes onto the table: `table-active` + `aria-selected` on rows, the
 * select-all box (checked / indeterminate), `[data-table-count="#id"]` and `[data-table-bulk="#id"]`.
 */
function syncTableSelection(table: HTMLTableElement, notify = false): void {
  const boxes = tableRowBoxes(table);
  const checked = boxes.filter((box) => box.checked);
  boxes.forEach((box) => {
    const row = box.closest("tr");
    row?.classList.toggle("table-active", box.checked);
    row?.setAttribute("aria-selected", String(box.checked));
  });
  tableAllBoxes(table).forEach((all) => {
    all.checked = boxes.length > 0 && checked.length === boxes.length;
    all.indeterminate = checked.length > 0 && checked.length < boxes.length;
  });
  if (table.id) {
    document.querySelectorAll<HTMLElement>(`[data-table-count="#${CSS.escape(table.id)}"]`).forEach((node) => {
      node.textContent = String(checked.length);
    });
    document.querySelectorAll<HTMLElement>(`[data-table-bulk="#${CSS.escape(table.id)}"]`).forEach((node) => {
      node.hidden = checked.length === 0;
    });
  }
  if (notify) {
    emit(table, "table:select", { rows: selectedTableRows(table), count: checked.length, total: boxes.length });
  }
}

function initFormHelpers(root: ParentNode = document): void {
  root.querySelectorAll?.<HTMLElement>("[data-stepper]").forEach(syncStepper);
  root.querySelectorAll?.<HTMLElement>("[data-otp]").forEach((group) => syncOtp(group, false));
  root.querySelectorAll?.<HTMLElement>(".steps[data-steps]").forEach((steps) => goToStep(steps, currentStep(steps)));
  root.querySelectorAll?.<HTMLTableElement>(TABLE_SELECTABLE).forEach((table) => syncTableSelection(table));
  root.querySelectorAll?.<HTMLInputElement>("input.form-range,input[data-range-output]").forEach(syncRange);
  root.querySelectorAll?.<HTMLInputElement | HTMLTextAreaElement>("[data-counter]").forEach(syncCounter);
  // `indeterminate` has no HTML attribute; `data-indeterminate` sets it on load.
  root.querySelectorAll?.<HTMLInputElement>('input[type="checkbox"][data-indeterminate]').forEach((box) => {
    box.indeterminate = box.getAttribute("data-indeterminate") !== "false";
  });
}

/** `.form-control` textareas grow with their content unless `data-autogrow="false"`. */
const AUTOGROW_TEXTAREA = 'textarea.form-control:not([data-autogrow="false"]),textarea[data-role="autogrow"]';
/** Height the user dragged a textarea to: autogrow never shrinks it below that. */
const manualTextareaHeight = new WeakMap<HTMLTextAreaElement, number>();

function autogrowTextarea(textarea: HTMLTextAreaElement): void {
  if (!textarea.isConnected || textarea.offsetParent === null) return;
  // scrollHeight excludes the borders; add them back so no scrollbar flashes (border-box).
  const borders = textarea.offsetHeight - textarea.clientHeight;
  textarea.style.height = "auto";
  const content = textarea.scrollHeight + borders;
  const height = Math.max(content, manualTextareaHeight.get(textarea) ?? 0);
  textarea.style.height = `${height}px`;
  textarea.dataset.autogrowHeight = String(height);
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
        setCollapse(panel, !isCollapseOpen(panel), collapseTrigger);
      }
      return;
    }

    const mediaTrigger = target.closest<HTMLElement>("[data-media-open]");
    if (mediaTrigger) {
      const viewer = document.querySelector<HTMLElement>(mediaTrigger.getAttribute("data-media-open") || "");
      if (viewer) {
        event.preventDefault();
        const instance = getInstance(viewer, MediaViewer);
        const src = mediaTrigger.getAttribute("data-media-src");
        // A trigger inside a `[data-media-items]` source (e.g. a MediaGrid) browses that list.
        const source = mediaTrigger.closest<HTMLElement>("[data-media-items]");
        if (source && source !== viewer) {
          try {
            instance.setItems(JSON.parse(source.getAttribute("data-media-items") || "[]"));
          } catch {
            /* keep the viewer's own items */
          }
        } else if (src) {
          instance.setItems([
            {
              src,
              alt: mediaTrigger.getAttribute("data-media-alt") ?? "",
              caption: mediaTrigger.getAttribute("data-media-caption") ?? ""
            }
          ]);
        }
        instance.show(Number(mediaTrigger.getAttribute("data-media-index") ?? instance.index));
      }
      return;
    }

    const gallery = target.closest<HTMLElement>("[data-media-gallery]");
    if (gallery) {
      const { nodes, items } = galleryItems(gallery);
      const node = nodes.find((item) => item === target || item.contains(target));
      const viewer = document.querySelector<HTMLElement>(gallery.getAttribute("data-media-gallery") || "");
      if (node && viewer) {
        event.preventDefault();
        getInstance(viewer, MediaViewer).setItems(items, nodes.indexOf(node)).show();
        return;
      }
    }

    const copyTrigger = target.closest<HTMLElement>("[data-clipboard]");
    if (copyTrigger) {
      event.preventDefault();
      void copyFromTrigger(copyTrigger);
      return;
    }

    const toggle = target.closest<HTMLElement>('[data-toggle="button"]');
    if (toggle && !toggle.matches(":disabled")) {
      toggleButton(toggle);
      return;
    }

    const segment = target.closest<HTMLElement>(".segmented[data-segmented] > .segmented-item");
    if (segment) {
      selectSegment(segment);
      return;
    }

    const stepperButton = target.closest<HTMLElement>(
      "[data-stepper] [data-stepper-up],[data-stepper] [data-stepper-down]"
    );
    if (stepperButton) {
      event.preventDefault();
      // A press-and-hold already stepped; its trailing click must not add one more.
      if (stepperButton.hasAttribute("data-stepper-repeated")) {
        stepperButton.removeAttribute("data-stepper-repeated");
        return;
      }
      const group = stepperButton.closest("[data-stepper]");
      if (group) stepNumber(group, stepperButton.hasAttribute("data-stepper-up") ? 1 : -1);
      return;
    }

    const stepsNav = target.closest<HTMLElement>("[data-steps-next],[data-steps-prev],[data-steps-go]");
    if (stepsNav) {
      const selector =
        stepsNav.getAttribute("data-steps-next") ||
        stepsNav.getAttribute("data-steps-prev") ||
        stepsNav.getAttribute("data-steps-go");
      const steps = selector ? document.querySelector<HTMLElement>(selector) : null;
      if (steps) {
        event.preventDefault();
        const now = currentStep(steps);
        const total = steps.querySelectorAll(":scope > .step").length;
        const isNext = stepsNav.hasAttribute("data-steps-next");
        // "Next" on the last step finishes the flow instead of moving.
        if (isNext && now >= total - 1) {
          emit(steps, "steps:finish", { index: now, total });
          return;
        }
        const index = clamp(
          stepsNav.hasAttribute("data-steps-go")
            ? Number(stepsNav.getAttribute("data-steps-index") ?? 0)
            : now + (isNext ? 1 : -1),
          0,
          total - 1
        );
        // Cancelable: a listener can call preventDefault() (e.g. failed validation) to stay put.
        const go = new CustomEvent("aksara:steps:before", {
          bubbles: true,
          cancelable: true,
          detail: { from: now, to: index }
        });
        if (steps.dispatchEvent(go)) goToStep(steps, index);
      }
      return;
    }

    const pickerOption = target.closest<HTMLElement>(".picker-modal [data-picker-value]");
    if (pickerOption) {
      event.preventDefault();
      selectPickerOption(pickerOption);
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

    // Thumbnails/indicators outside a carousel: `<div data-carousel-for="#id">[data-carousel-to]</div>`.
    const externalSlide = target.closest<HTMLElement>("[data-carousel-for] [data-carousel-to]");
    if (externalSlide && !externalSlide.closest(".carousel")) {
      const host = externalSlide.closest<HTMLElement>("[data-carousel-for]");
      const carouselElement = host
        ? document.querySelector<HTMLElement>(host.getAttribute("data-carousel-for") || "")
        : null;
      const instance = carouselElement
        ? (registry.get("carousel")?.get(carouselElement) as Carousel | undefined)
        : undefined;
      if (instance) {
        event.preventDefault();
        instance.show(Number(externalSlide.getAttribute("data-carousel-to")));
      }
      return;
    }

    // `data-sheet="#id"` opens a bottom sheet (optionally on a sub-panel: data-sheet-panel="#p").
    const sheetTrigger = target.closest<HTMLElement>("[data-sheet]");
    if (sheetTrigger && !sheetTrigger.closest(".sheet")) {
      const sheetElement = document.querySelector<HTMLElement>(sheetTrigger.getAttribute("data-sheet") || "");
      if (sheetElement?.classList.contains("sheet")) {
        event.preventDefault();
        const sheet = getInstance(sheetElement, BottomSheet);
        const panel = sheetTrigger.getAttribute("data-sheet-panel");
        if (sheet.isOpen && !panel) sheet.hide();
        else sheet.show(panel || undefined);
        sheetTrigger.setAttribute("aria-expanded", String(sheet.isOpen));
      }
      return;
    }

    // Selectable tables: shift-click selects a range; `data-table-select="row"` makes the row the target.
    const selectTable = target.closest<HTMLTableElement>(TABLE_SELECTABLE);
    if (selectTable && target.closest("tbody")) {
      const boxes = tableRowBoxes(selectTable);
      let box = target instanceof HTMLInputElement && boxes.includes(target) ? target : null;
      const interactive = target.closest(
        "a,button,input,select,textarea,label,[data-dropdown],[contenteditable='true']"
      );
      if (!box && !interactive && selectTable.getAttribute("data-table-select") === "row") {
        box = boxes.find((candidate) => candidate.closest("tr") === target.closest("tr")) ?? null;
        if (box && !box.disabled) box.checked = !box.checked;
        else box = null;
      }
      if (box) {
        const index = boxes.indexOf(box);
        const last = lastTableToggle.get(selectTable);
        if ((event as MouseEvent).shiftKey && last !== undefined && last !== index) {
          const [from, to] = index > last ? [last, index] : [index, last];
          boxes.slice(from, to + 1).forEach((item) => {
            if (!item.disabled) item.checked = box!.checked;
          });
        }
        lastTableToggle.set(selectTable, index);
        syncTableSelection(selectTable, true);
      }
    }

    // UserPill menu: the trigger toggles its `[data-user-menu]`; any other click closes open ones.
    const userTrigger = target.closest<HTMLElement>("[data-user-menu-trigger]");
    document.querySelectorAll<HTMLElement>("[data-user-menu]:not(.d-none)").forEach((menu) => {
      if (!menu.parentElement?.contains(userTrigger) && !menu.contains(target)) {
        menu.classList.add("d-none");
        menu.parentElement?.querySelector("[data-user-menu-trigger]")?.setAttribute("aria-expanded", "false");
      }
    });
    if (userTrigger) {
      const menu = userTrigger.parentElement?.querySelector<HTMLElement>("[data-user-menu]");
      if (menu) {
        const open = menu.classList.toggle("d-none") === false;
        userTrigger.setAttribute("aria-expanded", String(open));
        return;
      }
    }

    const passwordToggle = target.closest<HTMLElement>("[data-password-toggle]");
    if (passwordToggle) {
      event.preventDefault();
      const selector = passwordToggle.getAttribute("data-password-toggle");
      const field =
        (selector ? document.querySelector<HTMLInputElement>(selector) : null) ??
        passwordToggle.closest(".form-icon,.input-group")?.querySelector<HTMLInputElement>("input") ??
        null;
      if (!field) return;
      const reveal = field.type === "password";
      field.type = reveal ? "text" : "password";
      passwordToggle.setAttribute("aria-pressed", String(reveal));
      passwordToggle.setAttribute("aria-label", reveal ? "Hide password" : "Show password");
      const icon =
        passwordToggle.querySelector(".mdi") ?? (passwordToggle.classList.contains("mdi") ? passwordToggle : null);
      if (icon) {
        icon.classList.toggle("mdi-eye-outline", !reveal);
        icon.classList.toggle("mdi-eye-off-outline", reveal);
      }
      return;
    }

    const clearTrigger = target.closest<HTMLElement>("[data-clear]");
    if (clearTrigger) {
      const selector = clearTrigger.getAttribute("data-clear");
      const field =
        (selector ? document.querySelector<HTMLInputElement>(selector) : null) ??
        clearTrigger.closest(".form-icon,.input-group")?.querySelector<HTMLInputElement>("input,textarea") ??
        null;
      if (!field) return;
      event.preventDefault();
      field.value = "";
      field.dispatchEvent(new Event("input", { bubbles: true }));
      field.focus();
      return;
    }

    const spyLink = target.closest<HTMLAnchorElement>("[data-scrollspy-link]");
    if (spyLink) {
      const container = scrollspyContainer(spyLink);
      const section = scrollspySection(spyLink, container);
      if (section) {
        event.preventDefault();
        const top = scrollspySectionTop(section, container) - (container ? 0 : scrollspyOffset(spyLink, null) - 16);
        (container ?? window).scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        setScrollspyActive(scrollspyLinksFor(container), spyLink);
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    // Enter / Space activate non-button media triggers (MediaGrid cells with role="button").
    const key = event.target instanceof HTMLElement ? event.target : null;
    if ((event.key === "Enter" || event.key === " ") && key?.matches("[data-media-open]:not(button):not(a)")) {
      event.preventDefault();
      key.click();
      return;
    }
    if (event.key !== "Escape") return;
    document.querySelectorAll<HTMLElement>("[data-user-menu]:not(.d-none)").forEach((menu) => {
      menu.classList.add("d-none");
      menu.parentElement?.querySelector<HTMLElement>("[data-user-menu-trigger]")?.focus();
    });
  });

  document.addEventListener("pointerdown", (event) => {
    const button =
      event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-stepper] [data-stepper-up],[data-stepper] [data-stepper-down]")
        : null;
    if (button && (event as PointerEvent).button === 0) startStepperRepeat(button);
  });
  document.addEventListener("pointerup", stopStepperRepeat);
  document.addEventListener("pointerup", (event) => {
    const field = event.target;
    if (!(field instanceof HTMLTextAreaElement) || !field.matches(AUTOGROW_TEXTAREA)) return;
    const height = field.offsetHeight;
    // Changed by the resize handle (not by autogrow): keep it as the new minimum.
    if (field.dataset.autogrowHeight && Math.abs(height - Number(field.dataset.autogrowHeight)) > 1) {
      manualTextareaHeight.set(field, height);
      field.dataset.autogrowHeight = String(height);
    }
  });
  document.addEventListener("pointercancel", stopStepperRepeat);
  window.addEventListener("blur", stopStepperRepeat);
  bindOtp();

  document.addEventListener("input", (event) => {
    const field = event.target;
    if (field instanceof HTMLInputElement && field.closest("[data-stepper]"))
      syncStepper(field.closest("[data-stepper]")!);
    if (field instanceof HTMLTextAreaElement && field.matches(AUTOGROW_TEXTAREA)) autogrowTextarea(field);
    if (field instanceof HTMLInputElement && field.type === "range") syncRange(field);
    if (
      (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) &&
      field.hasAttribute("data-counter")
    ) {
      syncCounter(field);
    }
  });

  document.addEventListener("change", (event) => {
    const field = event.target;
    if (field instanceof HTMLInputElement && field.type === "file") syncDropzone(field);
    // Typed values outside min/max snap back when the field is committed.
    const stepper = field instanceof HTMLInputElement ? field.closest("[data-stepper]") : null;
    if (stepper && field instanceof HTMLInputElement && field.value !== "") {
      const value = Number(field.value);
      const min = field.min === "" ? -Infinity : Number(field.min);
      const max = field.max === "" ? Infinity : Number(field.max);
      if (!Number.isNaN(value) && (value < min || value > max)) field.value = String(clamp(value, min, max));
      syncStepper(stepper);
    }
    const table = field instanceof HTMLInputElement ? field.closest<HTMLTableElement>(TABLE_SELECTABLE) : null;
    if (table && field instanceof HTMLInputElement && tableAllBoxes(table).includes(field)) {
      tableRowBoxes(table).forEach((box) => {
        if (!box.disabled) box.checked = field.checked;
      });
      lastTableToggle.delete(table);
      syncTableSelection(table, true);
    }
  });

  // `<form data-validate novalidate>`: validate on submit, then live on every edit.
  document.addEventListener(
    "submit",
    (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !form.hasAttribute("data-validate")) return;
      if (!validateForm(form)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true
  );
  for (const type of ["input", "change"]) {
    document.addEventListener(type, (event) => {
      const field = event.target instanceof Element ? event.target : null;
      const form = field?.closest<HTMLFormElement>("form[data-validate].was-validated");
      if (!field || !form || !isValidatable(field)) return;
      if (field instanceof HTMLInputElement && field.type === "radio" && field.name) {
        form
          .querySelectorAll<HTMLInputElement>(`input[type="radio"][name="${CSS.escape(field.name)}"]`)
          .forEach((radio) => validateField(radio, form.getAttribute("data-validate") === "all"));
        return;
      }
      validateField(field, form.getAttribute("data-validate") === "all");
    });
  }
  document.addEventListener("reset", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.hasAttribute("data-validate")) return;
    form.classList.remove("was-validated");
    form.querySelectorAll(".is-invalid,.is-valid").forEach((node) => node.classList.remove("is-invalid", "is-valid"));
    form.querySelectorAll<HTMLElement>("[data-validate-message]").forEach((node) => node.remove());
  });

  // Dropzones highlight while a file is dragged over them.
  for (const type of ["dragenter", "dragover", "dragleave", "drop"]) {
    document.addEventListener(type, (event) => {
      const zone = event.target instanceof Element ? event.target.closest<HTMLElement>(".form-dropzone") : null;
      if (!zone) return;
      const leaving = type === "dragleave" && !zone.contains((event as DragEvent).relatedTarget as Node | null);
      zone.classList.toggle(
        "is-dragover",
        type === "dragenter" || type === "dragover" || (!leaving && type === "dragleave")
      );
      if (type === "drop") zone.classList.remove("is-dragover");
    });
  }

  // Scrollspy: one listener for every container (and the page), throttled to a frame.
  let spyScheduled = false;
  const pending = new Set<HTMLElement | null>();
  document.addEventListener(
    "scroll",
    (event) => {
      const target = event.target;
      pending.add(target instanceof HTMLElement ? target : null);
      if (spyScheduled) return;
      // Flag first: some environments run the frame callback synchronously.
      spyScheduled = true;
      requestAnimationFrame(() => {
        spyScheduled = false;
        const containers = Array.from(pending);
        pending.clear();
        containers.forEach((container) => updateScrollspy(container));
      });
    },
    true
  );
  window.addEventListener("resize", () => initScrollspy());
}

/** The scroll container of a link: `data-scrollspy-container`, or the page when omitted. */
function scrollspyContainer(link: Element): HTMLElement | null {
  const selector = link.getAttribute("data-scrollspy-container");
  if (!selector || selector === "window" || selector === "body" || selector === "html") return null;
  return document.querySelector<HTMLElement>(selector);
}

function scrollspySection(link: Element, container: HTMLElement | null): HTMLElement | null {
  const href = link.getAttribute("href") || "";
  if (!href.startsWith("#") || href.length < 2) return null;
  try {
    return (container ?? document).querySelector<HTMLElement>(href);
  } catch {
    return null;
  }
}

/** Activation line below the top edge: `data-scrollspy-offset` on the link or its nav. */
function scrollspyOffset(link: Element | undefined, container: HTMLElement | null): number {
  const raw = link?.closest("[data-scrollspy-offset]")?.getAttribute("data-scrollspy-offset");
  if (raw != null && !Number.isNaN(Number(raw))) return Number(raw);
  return container ? Math.min(80, container.clientHeight * 0.25) : 96;
}

/** A section's top in the container's scroll coordinates (independent of offsetParent). */
function scrollspySectionTop(section: HTMLElement, container: HTMLElement | null): number {
  const top = section.getBoundingClientRect().top;
  return container ? top - container.getBoundingClientRect().top + container.scrollTop : top + window.scrollY;
}

function scrollspyLinksFor(container: HTMLElement | null): HTMLAnchorElement[] {
  return Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-scrollspy-link]")).filter(
    (link) => scrollspyContainer(link) === container
  );
}

function setScrollspyActive(links: HTMLAnchorElement[], active: HTMLAnchorElement | null): void {
  links.forEach((link) => {
    const isActive = link === active;
    const changed = link.classList.contains("active") !== isActive;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
    if (changed && isActive)
      emit(link, "scrollspy:change", { link, section: scrollspySection(link, scrollspyContainer(link)) });
  });
}

/** Highlights the last section whose top passed the activation line; the last one at the bottom. */
function updateScrollspy(container: HTMLElement | null): void {
  const links = scrollspyLinksFor(container);
  if (!links.length) return;
  const scrollTop = container ? container.scrollTop : window.scrollY;
  const viewport = container ? container.clientHeight : window.innerHeight;
  const scrollHeight = container ? container.scrollHeight : document.documentElement.scrollHeight;
  const offset = scrollspyOffset(links[0], container);
  const tracked = links.filter((link) => scrollspySection(link, container));
  if (!tracked.length) return;
  let active: HTMLAnchorElement = tracked[0];
  if (scrollHeight - viewport > 1 && scrollTop >= scrollHeight - viewport - 2) {
    active = tracked[tracked.length - 1];
  } else {
    for (const link of tracked) {
      const section = scrollspySection(link, container)!;
      if (scrollspySectionTop(section, container) - offset <= scrollTop) active = link;
    }
  }
  setScrollspyActive(links, active);
}

/** Syncs every scrollspy (containers and the page) with the current scroll position. */
function initScrollspy(root: ParentNode = document): void {
  const containers = new Set<HTMLElement | null>();
  root.querySelectorAll?.("[data-scrollspy-link]").forEach((link) => containers.add(scrollspyContainer(link)));
  containers.forEach((container) => updateScrollspy(container));
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
          applyTriggerOptions(getInstance(target, Modal), options).show();
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
          applyTriggerOptions(getInstance(target, Offcanvas), options).show();
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
          applyTriggerOptions(getInstance(target, Toast), options).show();
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
  Select: typeof Select;
  BottomSheet: typeof BottomSheet;
  Collapse: typeof Collapse;
  collapse(target?: TargetElements, options?: ComponentOptions): Collapse;
  MediaViewer: typeof MediaViewer;
  /** Full-screen media viewer for a `.media-modal` (see `MediaPreviewModal`). */
  media(target?: TargetElements, options?: MediaOptions): MediaViewer;
  /** Builds an option picker, resolves with the picked value (or null when cancelled). */
  pick(options: PickOptions): Promise<string | null>;
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
  select(
    target?: TargetElements | (SelectOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: SelectOptions
  ): Select;
  sheet(
    target?: TargetElements | (SheetOptions & { target?: TargetElements; selector?: TargetElements }),
    options?: SheetOptions
  ): BottomSheet;
  /** Registers Tom Select when it is imported rather than loaded as a global script. */
  useTomSelect(constructor: TomSelectConstructor): AksaraNamespace;
  /** Selected rows of a `data-table-select` table. Pass `rows` to set the selection. */
  tableSelection(
    table: HTMLTableElement | string,
    rows?: Array<HTMLTableRowElement | number> | "all" | "none"
  ): HTMLTableRowElement[];
  /** Runs `data-validate` style validation on a form; returns true when every field is valid. */
  validate(form: HTMLFormElement | string): boolean;
  setTheme(theme: "light" | "dark" | "system"): "light" | "dark" | "system";
  getTheme(): "light" | "dark" | "system";
  initTheme(): "light" | "dark" | "system";
  confirm(options: ConfirmModalOptions): Promise<boolean>;
  alert(options: AlertModalOptions): Promise<void>;
  notify(message: string, options?: ToastNotifyOptions): void;
  clipboard(target: string | HTMLElement, text?: string): Promise<boolean>;
  /** Current step of a `.steps` list, or moves it to `index` (earlier steps complete). */
  steps(target: string | HTMLElement, index?: number): number;
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
  const bracketMatch = utility.match(/^\[([a-zA-Z0-9_-]+):(.+)\]$/);
  if (bracketMatch) {
    prop = bracketMatch[1];
    if (!prop.startsWith("-")) {
      prop = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    val = bracketMatch[2];
  } else {
    // No `-` prefix for negatives (`-mt-[4px]`): write the value instead, `mt-[-4px]`.
    // A leading hyphen is only accepted as a vendor prefix (`-webkit-line-clamp-[3]`).
    const match = utility.match(/^(-(?:webkit|moz|ms|o)-)?([a-zA-Z0-9_-]+)-\[(.+)\]$/i);
    if (!match || (utility.startsWith("-") && !match[1])) return null;
    prop = match[1] ? `${match[1]}${match[2]}` : match[2].replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    val = match[3];
  }

  // Convert unescaped underscores to spaces (e.g. shadow-[0_4px_6px_rgba(...)])
  val = val
    .replace(/(?<!\\)_/g, " ")
    .replace(/\\_/g, "_")
    .trim();

  // A value must stay a single declaration value: `w-[1px;position:fixed]` or
  // `bg-[red;}body{...]` would otherwise inject extra declarations or rules.
  if (!val || /[;{}]/.test(val) || /[;{}]/.test(prop)) return null;

  // `[property:value]` is a raw CSS declaration: the property is never remapped
  // (`[border:1px_solid_red]` must stay `border`, not the `border-*` width utility).
  if (bracketMatch) return `${prop}:${val}`;
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

// ── Directional cascade order ──
// A utility that targets fewer sides must win over a broader one at equal specificity
// (`p-2 pb-0`, `m-3 mt-0`, `border border-top`, `rounded rounded-top-0`, `gap-3 gap-x-1`,
// `overflow-hidden overflow-x-auto`), whatever order the classes are written or generated in.
// `cascadeRank` orders such rules: shorthands of a family first, then axis/two-side rules,
// then single side/corner rules. Border width/style/color utilities form a later group than
// the border shorthands (`border-top` sets a color, so `border-top border-primary` stays primary).

const BOX_SIDES: Record<string, string> = {
  "": "TBSE",
  "-inline": "SE",
  "-block": "TB",
  "-inline-start": "S",
  "-inline-end": "E",
  "-block-start": "T",
  "-block-end": "B",
  "-top": "T",
  "-bottom": "B",
  "-left": "S",
  "-right": "E"
};
const RADIUS_CORNERS: Record<string, string> = {
  "": "abcd",
  "-start-start": "a",
  "-start-end": "b",
  "-end-start": "c",
  "-end-end": "d",
  "-top-left": "a",
  "-top-right": "b",
  "-bottom-left": "c",
  "-bottom-right": "d"
};
const SIDE_SUFFIX = "(|-inline|-block|-inline-start|-inline-end|-block-start|-block-end|-top|-bottom|-left|-right)";
const BOX_PROPERTY = new RegExp(`^(margin|padding|scroll-margin|scroll-padding|inset)${SIDE_SUFFIX}$`);
const BORDER_PROPERTY = new RegExp(`^border${SIDE_SUFFIX}(-width|-style|-color)?$`);
const RADIUS_PROPERTY =
  /^border(|-start-start|-start-end|-end-start|-end-end|-top-left|-top-right|-bottom-left|-bottom-right)-radius$/;
const AXIS_PROPERTIES: Record<string, [string, string]> = {
  overflow: ["overflow", "xy"],
  "overflow-x": ["overflow", "x"],
  "overflow-y": ["overflow", "y"],
  gap: ["gap", "rc"],
  "row-gap": ["gap", "r"],
  "column-gap": ["gap", "c"],
  "--aksara-gutter-x": ["gutter", "x"],
  "--aksara-gutter-y": ["gutter", "y"],
  top: ["inset", "T"],
  bottom: ["inset", "B"],
  left: ["inset", "S"],
  right: ["inset", "E"]
};

/** Family (with group) and the sides/corners/axes a CSS property covers, or null */
function directionalProperty(property: string): { key: string; group: number; units: string; total: number } | null {
  const axis = AXIS_PROPERTIES[property];
  if (axis) return { key: axis[0], group: 0, units: axis[1], total: axis[0] === "inset" ? 4 : 2 };
  let match = property.match(BOX_PROPERTY);
  if (match) return { key: match[1], group: 0, units: BOX_SIDES[match[2]], total: 4 };
  match = property.match(RADIUS_PROPERTY);
  if (match) return { key: "radius", group: 0, units: RADIUS_CORNERS[match[1]], total: 4 };
  match = property.match(BORDER_PROPERTY);
  if (match) return { key: "border", group: match[2] ? 1 : 0, units: BOX_SIDES[match[1]], total: 4 };
  return null;
}

/**
 * Cascade rank of a utility's declarations: higher ranks must come later. Rules that set
 * no directional property return -1 (their order relative to directional rules is irrelevant).
 */
export function cascadeRank(declarations: string): number {
  const covered = new Map<string, { group: number; total: number; units: Set<string> }>();
  for (const part of declarations.split(";")) {
    const property = part.split(":")[0]?.trim().toLowerCase();
    if (!property) continue;
    const info = directionalProperty(property);
    if (!info) continue;
    const id = `${info.key}:${info.group}`;
    const entry = covered.get(id) ?? { group: info.group, total: info.total, units: new Set<string>() };
    for (const unit of info.units) entry.units.add(unit);
    covered.set(id, entry);
  }
  let rank = -1;
  for (const entry of covered.values()) {
    rank = Math.max(rank, entry.group * 10 + (entry.total - entry.units.size));
  }
  return rank;
}

/** Rank of a complete rule (`.a{...}`, `@media (...){.a{...}}`) from its innermost block */
export function ruleCascadeRank(rule: string): number {
  const declarations = rule.match(/\{([^{}]*)\}\}*\s*$/)?.[1];
  return declarations === undefined ? -1 : cascadeRank(declarations);
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
// runtime `md:w-[50%]` still wins over `w-[100%]` regardless of discovery order. Inside
// each segment rules are kept in `cascadeRank` order, so `p-[1rem] pb-[2px]` (and
// `pb-[2px] p-[1rem]`) both end with the bottom padding at 2px.
const runtimeSegmentRanks: Record<string, number[]> = { base: [] };

function insertRuntimeRule(sheet: CSSStyleSheet, rule: string, breakpoint: string | null): void {
  const segments = ["base", ...breakpointOrder];
  const segment = breakpoint ?? "base";
  const ranks = (runtimeSegmentRanks[segment] ??= []);
  const rank = ruleCascadeRank(rule);

  let index = 0;
  for (const name of segments) {
    if (name === segment) break;
    index += runtimeSegmentRanks[name]?.length ?? 0;
  }
  // After every rule of the segment with the same or a lower rank
  let offset = 0;
  while (offset < ranks.length && ranks[offset] <= rank) offset += 1;

  try {
    sheet.insertRule(rule, Math.min(index + offset, sheet.cssRules.length));
    ranks.splice(offset, 0, rank);
  } catch {
    // Ignore if the browser rejects the rule syntax
  }
}

/**
 * The runtime sheet comes after the static stylesheet, so a runtime shorthand
 * (`p-[10px]`) would beat a static directional class on the same element (`pb-0`). For
 * `!important` utilities (spacing, radius) the static class is copied into the runtime
 * sheet at its rank; being `!important` already, the copy changes nothing else.
 */
function injectStaticDirectionalCopy(token: string): void {
  const key = `static-copy:${token}`;
  if (injectedArbitraryRules.has(key)) return;
  if (token.includes(":") || token.includes("[") || !shouldUseImportant(token)) return;
  const declarations = lookupStaticUtility(token);
  if (!declarations || cascadeRank(declarations) < 0) return;
  injectedArbitraryRules.add(key);
  const sheet = getArbitrarySheet();
  if (sheet) insertRuntimeRule(sheet, `.${escapeArbitraryClass(token)}{${declarations}}`, null);
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
  let hasRuntimeToken = false;
  for (const token of tokens) {
    if (isRuntimeClassToken(token)) {
      hasRuntimeToken = true;
      injectArbitraryClass(token);
    }
  }
  if (hasRuntimeToken) {
    for (const token of tokens) {
      if (token && !isRuntimeClassToken(token)) injectStaticDirectionalCopy(token);
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
export interface PickOption {
  value: string;
  label: string;
  /** MDI icon name (`mdi-fire` or `fire`). */
  icon?: string;
  description?: string;
  badge?: string;
  /** Badge color (soft), default `secondary`. */
  badgeVariant?: string;
  /** Extra classes for the icon circle (e.g. `text-danger`). */
  iconClass?: string;
  disabled?: boolean;
}

export interface PickOptions {
  title: string;
  subtitle?: string;
  icon?: string;
  options: PickOption[];
  value?: string;
  cancelLabel?: string;
}

const PICK_BADGE_VARIANTS = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "danger",
  "warning",
  "info",
  "dark",
  "light"
];

function mdiName(icon: string): string {
  const name = icon.replace(/^mdi\s+/, "").trim();
  return name.startsWith("mdi-") ? name : `mdi-${name}`;
}

/** Transient `.picker-modal` (same markup as the `OptionPickerModal` component). */
function pickOption(options: PickOptions): Promise<string | null> {
  if (typeof document === "undefined") return Promise.resolve(null);
  const items = options.options
    .map((item) => {
      const selected =
        options.value !== undefined && String(options.value).toLowerCase() === String(item.value).toLowerCase();
      // Same palette list as the OptionPickerModal component; anything else falls back to secondary.
      const badgeVariant = PICK_BADGE_VARIANTS.includes(item.badgeVariant ?? "") ? item.badgeVariant : "secondary";
      return `<button type="button" role="option" class="picker-option${selected ? " is-selected" : ""}" aria-selected="${selected}" data-picker-value="${escapeHtmlStr(item.value)}"${item.disabled ? " disabled" : ""}>
          <span class="picker-option-icon${item.iconClass ? ` ${escapeHtmlStr(item.iconClass)}` : ""}" aria-hidden="true"><span class="mdi ${escapeHtmlStr(mdiName(item.icon || "mdi-circle-medium"))}"></span></span>
          <span class="picker-option-text"><span class="picker-option-label">${escapeHtmlStr(item.label)}</span>${item.description ? `<span class="picker-option-desc">${escapeHtmlStr(item.description)}</span>` : ""}</span>
          ${item.badge ? `<span class="badge badge-soft-${escapeHtmlStr(badgeVariant ?? "secondary")} rounded-pill">${escapeHtmlStr(item.badge)}</span>` : ""}
          <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
        </button>`;
    })
    .join("");
  const dialog = mountTransientDialog(`
    <div class="modal picker-modal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="aksara-pick-title" data-modal-draggable="false">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <div class="picker-heading">
              <span class="picker-option-icon" aria-hidden="true"><span class="mdi ${escapeHtmlStr(mdiName(options.icon || "mdi-format-list-bulleted"))}"></span></span>
              <div class="picker-heading-text">
                <h5 id="aksara-pick-title" class="modal-title m-0">${escapeHtmlStr(options.title)}</h5>
                ${options.subtitle ? `<div class="picker-subtitle">${escapeHtmlStr(options.subtitle)}</div>` : ""}
              </div>
            </div>
            <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
          </div>
          <div class="modal-body"><div class="picker-list" role="listbox" aria-labelledby="aksara-pick-title">${items}</div></div>
          <div class="modal-footer"><button class="btn btn-plain btn-sm" type="button" data-modal-close>${escapeHtmlStr(options.cancelLabel ?? "Cancel")}</button></div>
        </div>
      </div>
    </div>
  `);
  if (!dialog) return Promise.resolve(null);
  return new Promise((resolve) => {
    let settled = false;
    const finish = (value: string | null) => {
      if (settled) return;
      settled = true;
      dialog.close();
      resolve(value);
    };
    dialog.element.addEventListener("aksara:picker:select", (event) =>
      finish(String((event as CustomEvent).detail.value))
    );
    dialog.element.addEventListener("aksara:modal:hide", () => finish(null), { once: true });
  });
}

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
  Select,
  BottomSheet,
  Collapse,
  MediaViewer,
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
  select: (target, options) => {
    const args = resolveArgs(target, options, ENHANCED_SELECT_SELECTOR);
    return createAll(args.target, Select, args.options);
  },
  sheet: (target, options) => {
    const args = resolveArgs(target, options, ".sheet");
    return createAll(args.target, BottomSheet, args.options);
  },
  useTomSelect(constructor: TomSelectConstructor) {
    useTomSelect(constructor);
    return this;
  },
  tableSelection(table: HTMLTableElement | string, rows?: Array<HTMLTableRowElement | number> | "all" | "none") {
    const element = typeof table === "string" ? document.querySelector<HTMLTableElement>(table) : table;
    if (!element) return [];
    if (rows !== undefined) {
      const boxes = tableRowBoxes(element);
      boxes.forEach((box, index) => {
        if (box.disabled) return;
        const row = box.closest("tr");
        box.checked =
          rows === "all" ? true : rows === "none" ? false : rows.some((item) => item === index || item === row);
      });
      syncTableSelection(element, true);
    }
    return selectedTableRows(element);
  },
  validate(form: HTMLFormElement | string) {
    const element = typeof form === "string" ? document.querySelector<HTMLFormElement>(form) : form;
    return element ? validateForm(element) : false;
  },
  offcanvas: (target, options) => {
    const args = resolveArgs(target, options, ".offcanvas");
    return createAll(args.target, Offcanvas, args.options);
  },
  collapse: (target, options) => {
    const args = resolveArgs(target, options, ".collapse");
    return createAll(args.target, Collapse, args.options);
  },
  media: (target, options) => {
    const args = resolveArgs(target, options, ".media-modal");
    return createAll(args.target, MediaViewer, args.options);
  },
  pick(options: PickOptions): Promise<string | null> {
    return pickOption(options);
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
      <div class="modal modal-alert" tabindex="-1" role="alertdialog" aria-modal="true" aria-labelledby="aksara-confirm-title" aria-describedby="aksara-confirm-message" data-modal-draggable="false">
        <div class="modal-dialog">
          <div class="modal-alert-body">
            <span class="modal-alert-icon text-${escapeHtmlStr(tone)}" aria-hidden="true"><i class="mdi ${escapeHtmlStr(icon)}"></i></span>
            <h5 id="aksara-confirm-title" class="modal-alert-title">${escapeHtmlStr(options.title)}</h5>
            <p id="aksara-confirm-message" class="modal-alert-message">${escapeHtmlStr(options.message)}</p>
          </div>
          <div class="modal-alert-actions">
            <button class="modal-alert-action" type="button" data-aksara-confirm-cancel>${escapeHtmlStr(cancelLabel)}</button>
            <button class="modal-alert-action modal-alert-action-${escapeHtmlStr(tone)}" type="button" data-aksara-confirm-accept>${escapeHtmlStr(confirmLabel)}</button>
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
      <div class="modal modal-alert" tabindex="-1" role="alertdialog" aria-modal="true" aria-labelledby="aksara-alert-title" aria-describedby="aksara-alert-message" data-modal-draggable="false">
        <div class="modal-dialog">
          <div class="modal-alert-body">
            <span class="modal-alert-icon text-${escapeHtmlStr(tone)}" aria-hidden="true"><i class="mdi ${escapeHtmlStr(icon)}"></i></span>
            <h5 id="aksara-alert-title" class="modal-alert-title">${escapeHtmlStr(options.title)}</h5>
            <p id="aksara-alert-message" class="modal-alert-message">${escapeHtmlStr(options.message)}</p>
          </div>
          <div class="modal-alert-actions">
            <button class="modal-alert-action modal-alert-action-${escapeHtmlStr(tone)}" type="button" data-aksara-alert-dismiss>${escapeHtmlStr(buttonLabel)}</button>
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
    toast.innerHTML = `<i class="mdi ${escapeHtmlStr(iconClass)} text-${escapeHtmlStr(options.variant ?? "primary")}" style="font-size: 1.15rem; line-height: 1;"></i><span>${escapeHtmlStr(message)}</span>`;
    container.appendChild(toast);

    const duration = options.duration ?? 2500;
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
      setTimeout(() => toast.remove(), 250);
    }, duration);
  },

  async clipboard(target: string | HTMLElement, text?: string): Promise<boolean> {
    if (typeof document === "undefined") return false;
    let textToCopy = text ?? "";
    if (!textToCopy) {
      const el = typeof target === "string" ? document.querySelector(target) : target;
      textToCopy = textOf(el);
    }
    return writeClipboard(textToCopy);
  },
  steps(target: string | HTMLElement, index?: number): number {
    const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
    if (!el) return -1;
    return index === undefined ? currentStep(el) : goToStep(el, index);
  },
  init(root: ParentNode = document) {
    if (root === document) {
      this.initTheme();
    }
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
    createAll(root.querySelectorAll<HTMLElement>(".media-modal"), MediaViewer);
    createAll(root.querySelectorAll<HTMLElement>(".offcanvas"), Offcanvas);
    createAll(root.querySelectorAll<HTMLElement>(ENHANCED_SELECT_SELECTOR), Select);
    createAll(root.querySelectorAll<HTMLElement>(".sheet"), BottomSheet);
    bindDataApi();
    bindDelegatedDataApi();
    root.querySelectorAll?.<HTMLTextAreaElement>(AUTOGROW_TEXTAREA).forEach(autogrowTextarea);
    initFormHelpers(root);
    initScrollspy(root);
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

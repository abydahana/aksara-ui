import { classNames, pickTag, toAttributes } from "../utils";

type Gap = 0 | 1 | 2 | 3 | 4 | 5;
type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export interface StackProps {
  children?: string;
  /** `vertical` (`vstack`, default) or `horizontal` (`hstack`). */
  direction?: "vertical" | "horizontal";
  /** Vertical below this breakpoint, horizontal from it up (`vstack md:hstack`). */
  horizontalFrom?: Breakpoint;
  /** Space between items (`gap-{n}`). The stack default is 1rem (= `gap-3`). */
  gap?: Gap;
  /** Cross-axis alignment (`items-*`). hstack centers by default; vstack stretches. */
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  /** Main-axis distribution (`justify-*`). */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /** Let items wrap onto the next line (`flex-wrap`). */
  wrap?: boolean;
  /** Element to render. Default `div`. */
  as?: "div" | "section" | "header" | "footer" | "nav" | "ul" | "ol" | "form" | "span";
  className?: string;
  attributes?: Record<string, unknown>;
}

/** Flex stack: items in a column (`vstack`) or a row (`hstack`) with a consistent gap. */
export function Stack(props: StackProps = {}): string {
  const {
    children = "",
    direction = "vertical",
    horizontalFrom,
    gap,
    align,
    justify,
    wrap = false,
    className = "",
    attributes
  } = props;
  const Tag = pickTag(
    props.as,
    ["div", "section", "header", "footer", "nav", "ul", "ol", "form", "span"] as const,
    "div"
  );
  const classes = classNames(
    direction === "horizontal" ? "hstack" : "vstack",
    horizontalFrom && direction !== "horizontal" && `${horizontalFrom}:hstack`,
    gap !== undefined && `gap-${gap}`,
    align && `items-${align}`,
    justify && `justify-${justify}`,
    wrap && "flex-wrap",
    className
  );
  return `<${Tag} class="${classes}"${toAttributes(attributes)}>${children}</${Tag}>`;
}

/** `Stack({ direction: "horizontal", ... })`. */
export function HStack(props: Omit<StackProps, "direction" | "horizontalFrom"> = {}): string {
  return Stack({ ...props, direction: "horizontal" });
}

/** `Stack({ direction: "vertical", ... })`. */
export function VStack(props: Omit<StackProps, "direction"> = {}): string {
  return Stack({ ...props, direction: "vertical" });
}

/** Vertical rule between items of an `hstack`. */
export function Vr(props: { className?: string } = {}): string {
  return `<div class="${classNames("vr", props.className)}" role="separator" aria-orientation="vertical"></div>`;
}

export const stack = Stack;
export const hStack = HStack;
export const vStack = VStack;
export const vr = Vr;

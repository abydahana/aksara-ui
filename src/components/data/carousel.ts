import { classNames, toAttributes } from "../utils";

export interface CarouselSlide {
  content: string;
  active?: boolean;
}

export interface CarouselProps {
  id?: string;
  slides: CarouselSlide[];
  fade?: boolean;
  indicators?: boolean;
  /**
   * Render an empty `.carousel-indicators.carousel-indicators-static` row below the slides.
   * The runtime fills it with one dot per page, so it stays right with `perView`.
   */
  staticIndicators?: boolean;
  controls?: boolean;
  /** Custom controls (any `[data-carousel="prev|next"]` markup), rendered instead of the default arrows. */
  controlsHtml?: string;
  /** Add a `.carousel-counter` ("2 / 5") that the runtime keeps up to date. */
  counter?: boolean;
  /** Add a `.carousel-progress` bar that fills while autoplay runs. */
  progress?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Carousel(props: CarouselProps): string {
  const {
    id,
    slides = [],
    fade = false,
    indicators = true,
    staticIndicators = false,
    controls = true,
    controlsHtml: customControls,
    counter = false,
    progress = false,
    className = "",
    attributes
  } = props;

  const classes = classNames("carousel", fade && "carousel-fade", className);
  const baseAttrs = toAttributes({
    id,
    ...attributes
  });

  const hasActive = slides.some((s) => s.active);
  const activeIdx = hasActive ? slides.findIndex((s) => s.active) : 0;

  const indicatorsHtml =
    indicators && !staticIndicators && slides.length > 1
      ? `
        <div class="carousel-indicators">
          ${slides
            .map(
              (_, i) =>
                `<button type="button" class="carousel-indicator${i === activeIdx ? " active" : ""}" data-carousel-to="${i}" aria-label="Slide ${i + 1}"></button>`
            )
            .join("")}
        </div>
      `.trim()
      : "";

  const slidesHtml = slides
    .map((slide, i) => {
      const isVisible = i === activeIdx;
      const hiddenAttr = isVisible ? "" : " hidden";
      return `<div class="carousel-item" data-carousel-item${hiddenAttr}>${slide.content}</div>`;
    })
    .join("\n");

  const defaultControls =
    controls && slides.length > 1
      ? `
        <button class="carousel-control carousel-prev" type="button" data-carousel="prev" aria-label="Previous slide">
          <span class="mdi mdi-chevron-left mdi-24px"></span>
        </button>
        <button class="carousel-control carousel-next" type="button" data-carousel="next" aria-label="Next slide">
          <span class="mdi mdi-chevron-right mdi-24px"></span>
        </button>
      `.trim()
      : "";

  const extrasHtml = [
    counter
      ? '<span class="carousel-counter"><span data-carousel-current></span> / <span data-carousel-total></span></span>'
      : "",
    progress ? '<div class="carousel-progress"><div class="carousel-progress-bar"></div></div>' : "",
    staticIndicators ? '<div class="carousel-indicators carousel-indicators-static"></div>' : ""
  ]
    .filter(Boolean)
    .join("\n");

  return `
    <div class="${classes}"${baseAttrs}>
      ${indicatorsHtml}
      <div class="carousel-viewport">
        <div class="carousel-track">
          ${slidesHtml}
        </div>
      </div>
      ${customControls ?? defaultControls}
      ${extrasHtml}
    </div>
  `.trim();
}

export const carousel = Carousel;

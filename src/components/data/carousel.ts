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
  controls?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Carousel(props: CarouselProps): string {
  const { id, slides = [], fade = false, indicators = true, controls = true, className = "", attributes } = props;

  const classes = classNames("carousel", fade && "carousel-fade", className);
  const baseAttrs = toAttributes({
    id,
    ...attributes
  });

  const hasActive = slides.some((s) => s.active);
  const activeIdx = hasActive ? slides.findIndex((s) => s.active) : 0;

  const indicatorsHtml =
    indicators && slides.length > 1
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

  const controlsHtml =
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

  return `
    <div class="${classes}"${baseAttrs}>
      ${indicatorsHtml}
      <div class="carousel-inner">
        ${slidesHtml}
      </div>
      ${controlsHtml}
    </div>
  `.trim();
}

export const carousel = Carousel;

import { classNames, escapeHtml, toAttributes } from "../utils";

export interface TimelineProps {
  children?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Timeline(props: TimelineProps = {}): string {
  const { children = "", className = "", attributes } = props;
  const classes = classNames("timeline", className);
  const baseAttrs = toAttributes(attributes);
  return `<ul class="${classes}"${baseAttrs}>${children}</ul>`.trim();
}

export const timeline = Timeline;

export interface TimelineItemProps {
  children?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function TimelineItem(props: TimelineItemProps = {}): string {
  const { children = "", className = "", attributes } = props;
  const classes = classNames("timeline-item", className);
  const baseAttrs = toAttributes(attributes);
  return `<li class="${classes}"${baseAttrs}>${children}</li>`.trim();
}

export const timelineItem = TimelineItem;

export interface TimelinePointProps {
  children?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function TimelinePoint(props: TimelinePointProps = {}): string {
  const { children = "", className = "", attributes } = props;
  const classes = classNames("timeline-point", className);
  const baseAttrs = toAttributes(attributes);
  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const timelinePoint = TimelinePoint;

export interface TimelineContentProps {
  title?: string;
  time?: string;
  children?: string;
  className?: string;
  /** Extra classes for `.timeline-title` (e.g. `text-subtle`). */
  titleClassName?: string;
  /** Extra classes for `.timeline-time` (e.g. `m-0`). */
  timeClassName?: string;
}

export function TimelineContent(props: TimelineContentProps = {}): string {
  const { title, time, children = "", className = "", titleClassName = "", timeClassName = "" } = props;
  const titleHtml = title
    ? `<h4 class="${classNames("timeline-title", titleClassName)}">${escapeHtml(title)}</h4>`
    : "";
  const timeHtml = time ? `<span class="${classNames("timeline-time", timeClassName)}">${escapeHtml(time)}</span>` : "";
  return `<div class="${classNames("timeline-content", className)}">${titleHtml}${timeHtml}${children}</div>`.trim();
}

export const timelineContent = TimelineContent;

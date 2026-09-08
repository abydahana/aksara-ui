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
}

export function TimelineContent(props: TimelineContentProps = {}): string {
  const { title, time, children = "", className = "" } = props;
  const titleHtml = title ? `<h4 class="timeline-title">${escapeHtml(title)}</h4>` : "";
  const timeHtml = time ? `<span class="timeline-time">${escapeHtml(time)}</span>` : "";
  return `<div class="${classNames("timeline-content", className)}">${titleHtml}${timeHtml}${children}</div>`.trim();
}

export const timelineContent = TimelineContent;

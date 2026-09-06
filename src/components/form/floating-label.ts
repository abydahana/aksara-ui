import { classNames, escapeHtml, toAttributes } from "../utils";

export interface FloatingLabelProps {
  controlHtml: string;
  label: string;
  htmlFor?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function FloatingLabel(props: FloatingLabelProps): string {
  const { controlHtml, label, htmlFor, className = "", attributes } = props;

  const classes = classNames("form-floating", className);
  const baseAttrs = toAttributes(attributes);
  const forAttr = htmlFor ? ` for="${escapeHtml(htmlFor)}"` : "";

  return `
    <div class="${classes}"${baseAttrs}>
      ${controlHtml}
      <label${forAttr}>${escapeHtml(label)}</label>
    </div>
  `.trim();
}

export const floatingLabel = FloatingLabel;

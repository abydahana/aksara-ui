import { classNames, escapeHtml, toAttributes } from "../utils";

export interface FormLabelProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function FormLabel(props: FormLabelProps): string {
  const { label, htmlFor, required = false, className = "", attributes } = props;

  const baseAttrs = toAttributes({
    for: htmlFor,
    ...attributes
  });

  const reqIndicator = required ? '<span class="text-danger ms-1" aria-hidden="true">*</span>' : "";

  return `<label class="${classNames("form-label", className)}"${baseAttrs}>${escapeHtml(label)}${reqIndicator}</label>`.trim();
}

export const formLabel = FormLabel;

export interface FormTextProps {
  text: string;
  id?: string;
  className?: string;
}

export function FormText(props: FormTextProps): string {
  const { text, id, className = "" } = props;
  const idAttr = id ? ` id="${escapeHtml(id)}"` : "";

  return `<div class="${classNames("form-text", className)}"${idAttr}>${escapeHtml(text)}</div>`.trim();
}

export const formText = FormText;

export interface FormFeedbackProps {
  message: string;
  type?: "invalid" | "valid";
  tooltip?: boolean;
  className?: string;
}

export function FormFeedback(props: FormFeedbackProps): string {
  const { message, type = "invalid", tooltip = false, className = "" } = props;

  const feedbackClass = tooltip ? `${type}-tooltip` : `${type}-feedback`;

  return `<div class="${classNames(feedbackClass, className)}">${escapeHtml(message)}</div>`.trim();
}

export const formFeedback = FormFeedback;

export interface FormGroupProps {
  children?: string;
  className?: string;
}

export function FormGroup(props: FormGroupProps = {}): string {
  const { children = "", className = "" } = props;
  return `<div class="${classNames("form-group", className)}">${children}</div>`.trim();
}

export const formGroup = FormGroup;

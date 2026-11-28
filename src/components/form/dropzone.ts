import { classNames, escapeHtml, toAttributes } from "../utils";

export interface DropzoneProps {
  name?: string;
  id?: string;
  title?: string;
  hint?: string;
  icon?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** A dashed drop area around a file input; selected file names appear in `.form-dropzone-files`. */
export function Dropzone(props: DropzoneProps = {}): string {
  const {
    name,
    id,
    title = "Drop files here or click to browse",
    hint,
    icon = "cloud-upload-outline",
    accept,
    multiple = false,
    disabled = false,
    className = "",
    attributes
  } = props;
  const inputAttrs = toAttributes({ type: "file", name, id, accept, multiple, disabled, ...attributes });
  const hintHtml = hint ? `<span>${escapeHtml(hint)}</span>` : "";
  return `<label class="${classNames("form-dropzone", className)}"><input${inputAttrs} /><span class="mdi mdi-${escapeHtml(icon)}" aria-hidden="true"></span><span class="form-dropzone-title">${escapeHtml(title)}</span>${hintHtml}<span class="form-dropzone-files"></span></label>`;
}

export const dropzone = Dropzone;

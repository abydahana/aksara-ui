import { classNames, toAttributes } from "../utils";

export type AlertVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light";

export interface AlertProps {
  content: string;
  variant?: AlertVariant;
  dismissible?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Alert(props: AlertProps): string {
  const { content, variant = "primary", dismissible = false, className = "", attributes } = props;

  const classes = classNames("alert", `alert-${variant}`, dismissible && "alert-dismissible", className);

  const baseAttrs = toAttributes({
    role: "alert",
    ...attributes
  });

  const closeButton = dismissible
    ? '<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>'
    : "";

  return `
    <div class="${classes}"${baseAttrs}>
      ${content}
      ${closeButton}
    </div>
  `.trim();
}

export const alert = Alert;

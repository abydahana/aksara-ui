import { classNames, escapeHtml, toAttributes } from "../utils";
import { Button } from "../buttons/button";

export interface GuestGateProps {
  title?: string;
  description?: string;
  buttonText?: string;
  /** Full login URL. Overrides `loginPath` + `redirectTo`. */
  loginUrl?: string;
  /** Redirect target appended to `loginPath` as `?{redirectParam}=…`. */
  redirectTo?: string;
  /** Base login path when `loginUrl` is not given. Default `/login`. */
  loginPath?: string;
  /** Query parameter carrying `redirectTo`. Default `redirect`. */
  redirectParam?: string;
  /** Optional second action (e.g. "Create account"). */
  secondaryText?: string;
  secondaryUrl?: string;
  className?: string;
  /** `card` (default, with a blurred teaser above), `inline` (no frame) or `slide` (full-height panel). */
  variant?: "card" | "inline" | "slide";
  /** Icon HTML; defaults to an MDI lock icon. */
  icon?: string;
  showTeaserSkeleton?: boolean;
  /** Extra attributes for both action links (e.g. `{ "data-link": "" }` for a SPA router). */
  linkAttributes?: Record<string, unknown>;
  attributes?: Record<string, unknown>;
}

const TEASER = `<div class="guest-gate-teaser" aria-hidden="true">
    <div class="hstack gap-3"><span class="skeleton skeleton-circle w-[40px] h-[40px]"></span><span class="vstack gap-2 flex-1"><span class="skeleton skeleton-text w-[40%] m-0"></span><span class="skeleton skeleton-text w-[25%] m-0"></span></span></div>
    <span class="skeleton skeleton-text w-[90%] m-0"></span>
    <span class="skeleton skeleton-text w-[70%] m-0"></span>
  </div>`;

/**
 * Prompts signed-out visitors to log in, optionally under a faded teaser of the hidden content.
 */
export function GuestGate(props: GuestGateProps = {}): string {
  const {
    title = "Log in to see more",
    description = "Join the community to stay updated, interact, and connect.",
    buttonText = "Log in",
    loginUrl,
    redirectTo,
    loginPath = "/login",
    redirectParam = "redirect",
    secondaryText,
    secondaryUrl = "/register",
    className = "",
    variant = "card",
    icon,
    showTeaserSkeleton = true,
    linkAttributes,
    attributes
  } = props;

  const separator = loginPath.includes("?") ? "&" : "?";
  const resolvedLoginUrl =
    loginUrl ||
    (redirectTo && redirectParam
      ? `${loginPath}${separator}${encodeURIComponent(redirectParam)}=${encodeURIComponent(redirectTo)}`
      : loginPath);
  const defaultIcon = variant === "slide" ? "mdi-play-box-lock-outline" : "mdi-account-lock-outline";
  const iconHtml = icon ?? `<span class="mdi ${defaultIcon}"></span>`;

  const content = `
    <div class="guest-gate-icon" aria-hidden="true">${iconHtml}</div>
    <h4 class="guest-gate-title">${escapeHtml(title)}</h4>
    <p class="guest-gate-text">${escapeHtml(description)}</p>
    <div class="guest-gate-actions">
      ${Button({
        href: resolvedLoginUrl,
        variant: "primary",
        pill: true,
        attributes: linkAttributes,
        children: `<span class="mdi mdi-login"></span><span>${escapeHtml(buttonText)}</span>`
      })}
      ${
        secondaryText
          ? Button({
              href: secondaryUrl,
              plain: true,
              pill: true,
              attributes: linkAttributes,
              children: escapeHtml(secondaryText)
            })
          : ""
      }
    </div>`;

  const rootAttrs = toAttributes(attributes);

  if (variant === "slide") {
    return `<div class="${classNames("guest-gate guest-gate-slide", className)}"${rootAttrs}>${content}</div>`;
  }
  if (variant === "inline") {
    return `<div class="${classNames("guest-gate guest-gate-inline", className)}"${rootAttrs}>${content}</div>`;
  }
  return `<div class="${classNames("guest-gate", className)}"${rootAttrs}>
    ${showTeaserSkeleton ? TEASER : ""}
    <div class="guest-gate-card">${content}</div>
  </div>`;
}

export const guestGate = GuestGate;

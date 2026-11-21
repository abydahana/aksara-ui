import { classNames, escapeHtml, toAttributes } from "../utils";
import { Button } from "../buttons/button";
import { Card } from "../data/card";

export interface GuestGateProps {
  title?: string;
  description?: string;
  buttonText?: string;
  loginUrl?: string;
  redirectTo?: string;
  className?: string;
  variant?: "card" | "inline" | "slide";
  icon?: string;
  showTeaserSkeleton?: boolean;
  /** Extra attributes for the login link (e.g. `{ "data-link": "" }` for a SPA router). */
  linkAttributes?: Record<string, unknown>;
  attributes?: Record<string, unknown>;
}

/**
 * Universal guest gate component that prompts unauthenticated users
 * to log in with clear CTA and optional teaser skeleton preview.
 */
export function GuestGate(props: GuestGateProps = {}): string {
  const {
    title = "Log in to see more",
    description = "Join the community to stay updated, interact, and connect.",
    buttonText = "Log in",
    loginUrl,
    redirectTo,
    className = "",
    variant = "card",
    icon,
    showTeaserSkeleton = true,
    linkAttributes,
    attributes
  } = props;

  const resolvedLoginUrl = loginUrl || (redirectTo ? `/login?redirect=${encodeURIComponent(redirectTo)}` : "/login");
  const baseAttrs = toAttributes(attributes);

  if (variant === "slide") {
    const slideIcon = icon || '<i class="mdi mdi-play-box-lock-outline text-3xl"></i>';
    return `
      <div class="${classNames("guest-gate-slide d-flex flex-column align-items-center justify-content-center h-100 p-4 text-center min-h-[70vh]", className)}"${baseAttrs}>
        <div class="guest-gate-icon mb-3 rounded-circle bg-primary/10 text-primary d-flex align-items-center justify-content-center shadow-sm mx-auto w-[4rem] h-[4rem]">
          ${slideIcon}
        </div>
        <h3 class="fw-bold text-2xl mb-2 text-body">${escapeHtml(title)}</h3>
        <p class="text-subtle text-sm mx-auto mb-4 max-w-[360px]">${escapeHtml(description)}</p>
        ${Button({
          href: resolvedLoginUrl,
          variant: "primary",
          pill: true,
          size: "lg",
          className: "px-4 py-2 fw-semibold shadow-md mx-auto d-inline-flex align-items-center",
          attributes: linkAttributes,
          children: `<i class="mdi mdi-login me-2"></i><span>${escapeHtml(buttonText)}</span>`
        })}
      </div>
    `.trim();
  }

  const teaserHtml = showTeaserSkeleton
    ? `
      <!-- Teaser Skeleton Blur Header -->
      <div class="guest-gate-preview-blur position-relative overflow-hidden mb-3 pt-2 max-h-[70px] opacity-[.35] pointer-events-none [mask-image:linear-gradient(to_top,transparent,black_80%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_80%)]">
        <div class="d-flex align-items-center gap-3 px-3 mb-2">
          <div class="rounded-circle bg-subtle shrink-0 w-[40px] h-[40px]"></div>
          <div class="flex-1">
            <div class="bg-subtle rounded-pill mb-1 h-[0.75rem] w-[140px]"></div>
            <div class="bg-subtle rounded-pill h-[0.5rem] w-[90px]"></div>
          </div>
        </div>
        <div class="w-[75%] bg-subtle rounded-pill mx-3 mb-1 h-[0.5rem]"></div>
        <div class="w-[50%] bg-subtle rounded-pill mx-3 h-[0.5rem]"></div>
      </div>
    `.trim()
    : "";

  const cardIcon = icon || '<i class="mdi mdi-account-lock-outline text-2xl"></i>';

  const cardContent = `
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="rounded-circle bg-primary/10 text-primary d-flex align-items-center justify-content-center mb-3 shadow-sm w-[3.25rem] h-[3.25rem]">
        ${cardIcon}
      </div>
      <h4 class="fw-bold text-xl mb-2 text-body">${escapeHtml(title)}</h4>
      <p class="text-subtle text-sm mb-3 leading-relaxed max-w-[420px]">${escapeHtml(description)}</p>
      ${Button({
        href: resolvedLoginUrl,
        variant: "primary",
        pill: true,
        size: "lg",
        className:
          "w-100 py-2 fw-semibold d-inline-flex align-items-center justify-content-center shadow-sm max-w-[320px]",
        attributes: linkAttributes,
        children: `<span>${escapeHtml(buttonText)}</span>`
      })}
    </div>
  `.trim();

  if (variant === "inline") {
    return `
      <div class="${classNames("guest-gate-wrapper my-4 position-relative text-center", className)}"${baseAttrs}>
        ${cardContent}
      </div>
    `.trim();
  }

  return `
    <div class="${classNames("guest-gate-wrapper my-4 position-relative text-center", className)}"${baseAttrs}>
      ${teaserHtml}
      ${Card({
        className: "border border-subtle shadow-sm rounded-xl p-4 bg-body mx-auto text-center max-w-[540px]",
        children: cardContent
      })}
    </div>
  `.trim();
}

export const guestGate = GuestGate;

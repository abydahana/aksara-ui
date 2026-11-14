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
    attributes
  } = props;

  const resolvedLoginUrl = loginUrl || (redirectTo ? `/login?redirect=${encodeURIComponent(redirectTo)}` : "/login");
  const baseAttrs = toAttributes(attributes);

  if (variant === "slide") {
    const slideIcon = icon || '<i class="mdi mdi-play-box-lock-outline text-3xl"></i>';
    return `
      <div class="${classNames("clips-guest-gate-slide d-flex flex-column align-items-center justify-content-center h-100 p-4 text-center min-h-[70vh]", className)}"${baseAttrs}>
        <div class="clips-guest-gate-icon mb-3 rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center shadow-sm mx-auto w-16 h-16">
          ${slideIcon}
        </div>
        <h3 class="fw-bold fs-4 mb-2 text-body">${escapeHtml(title)}</h3>
        <p class="text-muted text-sm mx-auto mb-4 max-w-[360px]">${escapeHtml(description)}</p>
        ${Button({
          href: resolvedLoginUrl,
          variant: "primary",
          pill: true,
          size: "lg",
          className: "px-4 py-2 font-semibold shadow-md mx-auto d-inline-flex align-items-center",
          attributes: { "data-link": "" },
          children: `<i class="mdi mdi-login me-2"></i><span>${escapeHtml(buttonText)}</span>`
        })}
      </div>
    `.trim();
  }

  const teaserHtml = showTeaserSkeleton
    ? `
      <!-- Teaser Skeleton Blur Header -->
      <div class="guest-gate-preview-blur position-relative overflow-hidden mb-3 pt-2 max-h-[70px] opacity-35 pointer-events-none [mask-image:linear-gradient(to_top,transparent,black_80%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_80%)]">
        <div class="d-flex align-items-center gap-3 px-3 mb-2">
          <div class="rounded-circle bg-subtle shrink-0 w-10 h-10"></div>
          <div class="flex-1">
            <div class="bg-subtle rounded-pill mb-1 h-3 w-[140px]"></div>
            <div class="bg-subtle rounded-pill h-2.5 w-[90px]"></div>
          </div>
        </div>
        <div class="w-75 bg-subtle rounded-pill mx-3 mb-1 h-2.5"></div>
        <div class="w-50 bg-subtle rounded-pill mx-3 h-2.5"></div>
      </div>
    `.trim()
    : "";

  const cardIcon = icon || '<i class="mdi mdi-account-lock-outline text-2xl"></i>';

  const cardContent = `
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center mb-3 shadow-xs w-13 h-13">
        ${cardIcon}
      </div>
      <h4 class="font-bold fs-5 mb-2 text-body">${escapeHtml(title)}</h4>
      <p class="text-muted text-sm mb-3 leading-relaxed max-w-[420px]">${escapeHtml(description)}</p>
      ${Button({
        href: resolvedLoginUrl,
        variant: "primary",
        pill: true,
        size: "lg",
        className:
          "w-100 py-2 font-semibold d-inline-flex align-items-center justify-content-center shadow-sm max-w-[320px]",
        attributes: { "data-link": "" },
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

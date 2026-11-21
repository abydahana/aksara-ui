import { classNames, escapeHtml } from "../utils";
import { Modal } from "./modal";
import { Button } from "../buttons/button";

export interface AuthPromptModalProps {
  id?: string;
  title?: string;
  description?: string;
  /** Full login URL. Overrides `loginPath` + `redirect`. */
  loginUrl?: string;
  /** Full register URL. Overrides `registerPath` + `redirect`. */
  registerUrl?: string;
  /** Base login path used when `loginUrl` is not given. Default `/login`. */
  loginPath?: string;
  /** Base register path used when `registerUrl` is not given. Default `/register`. */
  registerPath?: string;
  /** Query parameter carrying the redirect target. Default `redirect`; pass `""` to omit it. */
  redirectParam?: string;
  loginText?: string;
  registerText?: string;
  /**
   * Redirect target appended to the default URLs. When omitted, the current
   * `window.location.pathname` is used in the browser (nothing during SSR).
   */
  redirect?: string;
  /** Extra attributes for both auth links (e.g. `{ "data-link": "" }` for a SPA router). */
  linkAttributes?: Record<string, unknown>;
  logoHtml?: string;
  className?: string;
  closeLabel?: string;
  zIndex?: number;
  attributes?: Record<string, unknown>;
}

/**
 * Responsive authentication prompt modal dialog prompting users to log in or register.
 */
export function AuthPromptModal(props: AuthPromptModalProps = {}): string {
  const {
    id = "authPromptModal",
    title = "Don't miss what's happening",
    description = "People on this platform are the first to know.",
    loginUrl,
    registerUrl,
    loginPath = "/login",
    registerPath = "/register",
    redirectParam = "redirect",
    loginText = "Log in",
    registerText = "Sign up",
    redirect,
    logoHtml,
    className = "",
    closeLabel = "Close",
    zIndex = 10010,
    linkAttributes,
    attributes
  } = props;

  const currentPath =
    redirect ?? (typeof window !== "undefined" && window.location ? window.location.pathname : undefined);
  const withRedirect = (path: string): string => {
    if (!redirectParam || !currentPath) return path;
    const separator = path.includes("?") ? "&" : "?";
    return `${path}${separator}${encodeURIComponent(redirectParam)}=${encodeURIComponent(currentPath)}`;
  };
  const finalLoginUrl = loginUrl || withRedirect(loginPath);
  const finalRegisterUrl = registerUrl || withRedirect(registerPath);
  const safeZIndex = Number.isFinite(Number(zIndex)) ? Math.trunc(Number(zIndex)) : 10010;

  const logoMarkup = logoHtml
    ? `<div class="auth-modal-logo mb-3 text-body d-flex align-items-center justify-content-center w-[3.25rem] h-[3.25rem]">${logoHtml}</div>`
    : '<div class="auth-modal-logo mb-3 text-primary d-flex align-items-center justify-content-center w-[3.25rem] h-[3.25rem] rounded-circle bg-primary/10"><i class="mdi mdi-account-circle-outline text-3xl"></i></div>';

  return Modal({
    id,
    size: "sm",
    centered: true,
    scrollable: false,
    className: classNames("auth-modal", className),
    attributes: {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": `${id}-title`,
      style: `z-index: ${safeZIndex};`,
      ...attributes
    },
    children: `
      <div class="modal-body p-4 sm:p-[3rem] position-relative d-flex flex-column align-items-center text-center">
        <div class="position-absolute top-0 end-0 p-3">
          ${Button({
            type: "button",
            ghost: true,
            size: "sm",
            pill: true,
            className:
              "d-inline-flex align-items-center justify-content-center p-0 border-0 text-subtle hover:text-body w-[2rem] h-[2rem]",
            attributes: {
              "data-modal-close": "",
              "aria-label": closeLabel
            },
            children: '<i class="mdi mdi-close text-lg"></i>'
          })}
        </div>

        ${logoMarkup}

        <h3 id="${escapeHtml(id)}-title" class="fw-bold text-xl leading-tight mb-2 text-body">
          ${escapeHtml(title)}
        </h3>

        <p class="text-subtle text-sm mb-4 max-w-[300px]">
          ${escapeHtml(description)}
        </p>

        <div class="w-100 d-flex flex-column gap-2">
          ${Button({
            href: finalLoginUrl,
            variant: "primary",
            pill: true,
            className: "w-100 py-2 fw-bold shadow-sm no-underline d-flex align-items-center justify-content-center",
            attributes: linkAttributes,
            children: escapeHtml(loginText)
          })}

          ${Button({
            href: finalRegisterUrl,
            variant: "secondary",
            outline: true,
            pill: true,
            className: "w-100 py-2 fw-bold no-underline d-flex align-items-center justify-content-center",
            attributes: linkAttributes,
            children: escapeHtml(registerText)
          })}
        </div>
      </div>
    `.trim()
  });
}

export const authPromptModal = AuthPromptModal;
export const AuthModal = AuthPromptModal;
export const authModal = AuthPromptModal;

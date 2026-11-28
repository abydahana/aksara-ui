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
    zIndex,
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
  const safeZIndex = zIndex !== undefined && Number.isFinite(Number(zIndex)) ? Math.trunc(Number(zIndex)) : undefined;

  const logoMarkup = `<div class="auth-modal-logo" aria-hidden="true">${logoHtml ?? '<span class="mdi mdi-account-circle-outline"></span>'}</div>`;

  return Modal({
    id,
    centered: true,
    className: classNames("auth-modal", className),
    attributes: {
      "aria-labelledby": `${id}-title`,
      "data-modal-draggable": "false",
      // Only when asked for: the modal layer (1050) is already above page content.
      style: safeZIndex !== undefined ? `z-index: ${safeZIndex};` : undefined,
      ...attributes
    },
    children: `
      <div class="auth-modal-body">
        <button class="modal-close btn-close" type="button" data-modal-close aria-label="${escapeHtml(closeLabel)}"></button>
        ${logoMarkup}
        <h3 id="${escapeHtml(id)}-title" class="auth-modal-title">${escapeHtml(title)}</h3>
        <p class="auth-modal-text">${escapeHtml(description)}</p>
        <div class="auth-modal-actions">
          ${Button({
            href: finalLoginUrl,
            variant: "primary",
            pill: true,
            className: "w-100",
            attributes: linkAttributes,
            children: escapeHtml(loginText)
          })}
          ${Button({
            href: finalRegisterUrl,
            plain: true,
            pill: true,
            className: "w-100",
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

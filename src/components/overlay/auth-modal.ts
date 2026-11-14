import { classNames, escapeHtml } from "../utils";
import { Modal } from "./modal";
import { Button } from "../buttons/button";

export interface AuthPromptModalProps {
  id?: string;
  title?: string;
  description?: string;
  loginUrl?: string;
  registerUrl?: string;
  loginText?: string;
  registerText?: string;
  redirect?: string;
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
    loginText = "Log in",
    registerText = "Sign up",
    redirect,
    logoHtml,
    className = "",
    closeLabel = "Close",
    zIndex = 10010,
    attributes
  } = props;

  const currentPath = redirect || (typeof window !== "undefined" ? window.location.pathname : "/");
  const finalLoginUrl = loginUrl || `/login?redirect=${encodeURIComponent(currentPath)}`;
  const finalRegisterUrl = registerUrl || `/register?redirect=${encodeURIComponent(currentPath)}`;

  const logoMarkup = logoHtml
    ? `<div class="auth-prompt-logo mb-3 text-ink d-flex align-items-center justify-content-center w-13 h-13">${logoHtml}</div>`
    : '<div class="auth-prompt-logo mb-3 text-primary d-flex align-items-center justify-content-center w-13 h-13 rounded-circle bg-primary-subtle"><i class="mdi mdi-account-circle-outline text-3xl"></i></div>';

  return Modal({
    id,
    size: "sm",
    centered: true,
    scrollable: false,
    className: classNames("auth-prompt-modal-dialog", className),
    attributes: {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": `${id}-title`,
      style: `z-index: ${zIndex};`,
      ...attributes
    },
    children: `
      <div class="modal-body p-4 p-sm-5 position-relative d-flex flex-column align-items-center text-center">
        <div class="position-absolute top-0 end-0 p-3">
          ${Button({
            type: "button",
            ghost: true,
            size: "sm",
            pill: true,
            className:
              "d-inline-flex align-items-center justify-content-center p-0 border-0 text-muted hover:text-ink w-8 h-8",
            attributes: {
              "data-modal-close": "",
              "aria-label": escapeHtml(closeLabel)
            },
            children: '<i class="mdi mdi-close text-lg"></i>'
          })}
        </div>

        ${logoMarkup}

        <h3 id="${escapeHtml(id)}-title" class="font-bold text-xl leading-tight mb-2 text-ink">
          ${escapeHtml(title)}
        </h3>

        <p class="text-muted text-sm mb-4 max-w-[300px]">
          ${escapeHtml(description)}
        </p>

        <div class="w-100 d-flex flex-column gap-2">
          ${Button({
            href: finalLoginUrl,
            variant: "primary",
            pill: true,
            className:
              "w-100 py-2 font-bold shadow-sm text-decoration-none d-flex align-items-center justify-content-center",
            attributes: { "data-link": "" },
            children: escapeHtml(loginText)
          })}

          ${Button({
            href: finalRegisterUrl,
            variant: "secondary",
            outline: true,
            pill: true,
            className: "w-100 py-2 font-bold text-decoration-none d-flex align-items-center justify-content-center",
            attributes: { "data-link": "" },
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

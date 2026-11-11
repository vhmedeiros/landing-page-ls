"use client";

import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { whatsappLink } from "@/config/site";
import { trackWhatsAppClick } from "@/lib/track";

type Props = {
  /** Identifica de onde veio o clique nos relatórios (hero, servico-x, rodape...). */
  source: string;
  message?: string;
  className?: string;
  children: ReactNode;
  showIcon?: boolean;
  ariaLabel?: string;
};

export function WhatsAppLink({ source, message, className, children, showIcon = true, ariaLabel }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackWhatsAppClick(source)}
    >
      {showIcon && <MessageCircle aria-hidden size={20} strokeWidth={2.25} />}
      {children}
    </a>
  );
}

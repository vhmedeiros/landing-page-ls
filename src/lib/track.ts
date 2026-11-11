// Disparo de eventos de conversão. Funciona com qualquer combinação de:
// Google Tag Manager, GA4, Google Ads e Meta Pixel (configurados via env).

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    fbq?: Fbq;
  }
}

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ADS_WA_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_WA_LABEL;

/** Chamar quando o visitante clica em qualquer botão de WhatsApp. */
export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return;

  // GTM: crie um acionador de "Evento personalizado" = whatsapp_click
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "whatsapp_click", whatsapp_source: source });

  // GA4 direto
  window.gtag?.("event", "whatsapp_click", { whatsapp_source: source });

  // Google Ads: conversão "Contato pelo WhatsApp"
  if (ADS_ID && ADS_WA_LABEL) {
    window.gtag?.("event", "conversion", { send_to: `${ADS_ID}/${ADS_WA_LABEL}` });
  }

  // Meta (Facebook/Instagram Ads)
  window.fbq?.("track", "Contact", { content_name: source });
}

import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";
import { site } from "@/config/site";
import { Analytics } from "@/components/Analytics";
import { ALLOW_INDEXING } from "@/lib/flags";
import { RevealHead } from "@/components/Reveal";

// Versão de teste ou domínio provisório: deixe ALLOW_INDEXING=false (noindex).
// Título, descrição e imagens de compartilhamento NUNCA levam pendências.

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  keywords: site.seo.keywords,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: ALLOW_INDEXING ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: site.seo.locale,
    url: "/",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description },
  formatDetection: { telephone: false },
  verification: {
    // Cole aqui o código do Google Search Console (método "tag HTML"), se usar esse método.
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2E63",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <RevealHead />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

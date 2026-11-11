import type { NextConfig } from "next";

const allowIndexing = process.env.ALLOW_INDEXING === "true";
const showPending = process.env.SHOW_PENDING !== "false";

// Trava de segurança: a versão de teste (com selos de pendência) nunca pode
// ser liberada para o Google.
if (allowIndexing && showPending) {
  throw new Error(
    "\n\n[landing] ALLOW_INDEXING=true com SHOW_PENDING=true não é permitido.\n" +
      "A versão de teste (com pendências visíveis) não pode ser indexada pelo Google.\n" +
      "Resolva as pendências e use SHOW_PENDING=false, ou volte ALLOW_INDEXING=false.\n",
  );
}

if (!process.env.SITE_URL && process.env.NODE_ENV === "production") {
  console.warn("[landing] SITE_URL não definida: usando http://localhost:3000 nos links canônicos, sitemap e JSON-LD.");
}

const nextConfig: NextConfig = {
  // Gera um servidor Node mínimo em .next/standalone — imagem Docker pequena.
  output: "standalone",
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Além do <meta robots>: bloqueia indexação de TUDO (inclusive imagens e
          // arquivos) enquanto ALLOW_INDEXING não for "true".
          ...(allowIndexing ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
        ],
      },
    ];
  },
};

export default nextConfig;

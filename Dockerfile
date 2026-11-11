# syntax=docker/dockerfile:1
# Imagem multi-arquitetura: funciona na Oracle A1 (ARM64) e em x86.

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Estas variáveis entram NO BUILD (a página é gerada como HTML estático).
# Mudou alguma? Rode de novo: docker compose up -d --build
ARG SITE_URL
ARG ALLOW_INDEXING=false
# true = versão de teste (selos amarelos de pendência + faixa no topo)
ARG SHOW_PENDING=true
ARG GOOGLE_SITE_VERIFICATION
ARG NEXT_PUBLIC_GTM_ID
ARG NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_GOOGLE_ADS_ID
ARG NEXT_PUBLIC_GOOGLE_ADS_WA_LABEL
ARG NEXT_PUBLIC_META_PIXEL_ID
ENV SITE_URL=$SITE_URL \
    ALLOW_INDEXING=$ALLOW_INDEXING \
    SHOW_PENDING=$SHOW_PENDING \
    GOOGLE_SITE_VERIFICATION=$GOOGLE_SITE_VERIFICATION \
    NEXT_PUBLIC_GTM_ID=$NEXT_PUBLIC_GTM_ID \
    NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID \
    NEXT_PUBLIC_GOOGLE_ADS_ID=$NEXT_PUBLIC_GOOGLE_ADS_ID \
    NEXT_PUBLIC_GOOGLE_ADS_WA_LABEL=$NEXT_PUBLIC_GOOGLE_ADS_WA_LABEL \
    NEXT_PUBLIC_META_PIXEL_ID=$NEXT_PUBLIC_META_PIXEL_ID

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS run
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public

USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/robots.txt >/dev/null || exit 1
CMD ["node", "server.js"]

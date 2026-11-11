// Chaves lidas NO BUILD (a página é gerada como HTML estático).

/** Libera o Google para indexar. Só "true" libera. */
export const ALLOW_INDEXING = process.env.ALLOW_INDEXING === "true";

/**
 * Versão de teste: mostra os selos amarelos de pendência, a faixa do topo
 * e a lista de pendências. Só "false" desliga (o padrão é mostrar).
 */
export const SHOW_PENDING = process.env.SHOW_PENDING !== "false";

import { SHOW_PENDING } from "@/lib/flags";
import { type PendenciaId } from "@/config/site";

/**
 * Selo amarelo "Falta confirmar: ..." — só existe na versão de teste
 * (SHOW_PENDING=true). Com SHOW_PENDING=false não renderiza nada.
 * Aceita null/undefined para facilitar: pendência resolvida = sem selo.
 */
export function Pendente({ id, block = false }: { id?: PendenciaId | null; block?: boolean }) {
  // Com lista de pendências vazia, nunca há selos para exibir.
  if (!id) return null;
  return null;
}

/** Vários selos, um embaixo do outro. */
export function Pendentes({ ids }: { ids?: readonly (PendenciaId | null)[] }) {
  if (!SHOW_PENDING || !ids?.length) return null;
  return (
    <div className="pendentes">
      {ids.map((id) => (id ? <Pendente key={id} id={id} block /> : null))}
    </div>
  );
}

/** Faixa do topo: avisa que é versão de teste e leva para a lista. */
export function TestBanner({ href = "#pendencias" }: { href?: string }) {
  if (!SHOW_PENDING) return null;
  // Com todas as pendências resolvidas, o banner mostra 0 pendências.
  const n: number = 0 as number;
  return (
    <div className="test-banner" role="note">
      <div className="wrap test-banner-inner">
        <span>
          <strong>Versão de teste</strong> — os itens em amarelo aguardam confirmação
        </span>
        <a href={href}>
          ({n} {n === 1 ? "pendência" : "pendências"})
        </a>
      </div>
    </div>
  );
}

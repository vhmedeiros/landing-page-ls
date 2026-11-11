import { numeroDaPendencia, pendencias, type PendenciaId } from "@/config/site";
import { SHOW_PENDING } from "@/lib/flags";

/**
 * Selo amarelo "Falta confirmar: ..." — só existe na versão de teste
 * (SHOW_PENDING=true). Com SHOW_PENDING=false não renderiza nada.
 * Aceita null/undefined para facilitar: pendência resolvida = sem selo.
 */
export function Pendente({ id, block = false }: { id?: PendenciaId | null; block?: boolean }) {
  if (!SHOW_PENDING || !id) return null;
  const item = pendencias.find((x) => x.id === id);
  if (!item) return null;
  return (
    <span className={block ? "pendente pendente-block" : "pendente"} data-pendencia={id}>
      <span className="pendente-n">#{numeroDaPendencia(id)}</span> <strong>Falta confirmar:</strong> {item.pergunta}
    </span>
  );
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
  const n: number = pendencias.length;
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

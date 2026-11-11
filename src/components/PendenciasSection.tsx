import { pendencias, pendenciasAgrupadas } from "@/config/site";
import { SHOW_PENDING } from "@/lib/flags";

/** Lista de todas as pendências, agrupadas por seção. Só na versão de teste. */
export function PendenciasSection() {
  if (!SHOW_PENDING || (pendencias.length as number) === 0) return null;
  const grupos = pendenciasAgrupadas();
  return (
    <section className="section pendencias" id="pendencias" aria-labelledby="pendencias-titulo">
      <div className="wrap wrap-narrow">
        <h2 id="pendencias-titulo" className="section-title">
          Pendências para confirmar ({pendencias.length})
        </h2>
        <p className="pendencias-intro">
          Esta lista só aparece na versão de teste. Cada item tem um selo amarelo no lugar da página onde ele entra.
        </p>
        {grupos.map((g) => (
          <div key={g.id} className="pendencias-grupo">
            <h3>
              <a href={`#${g.ancora}`}>{g.titulo}</a>
            </h3>
            <ol start={g.itens[0].n}>
              {g.itens.map((x) => (
                <li key={x.id} value={x.n}>
                  {x.pergunta}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}

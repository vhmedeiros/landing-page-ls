// Gera PENDENCIAS.md a partir da lista `pendencias` de src/config/site.ts.
// A página de teste e este arquivo usam a MESMA lista, então nunca divergem.
// Roda sozinho antes de todo build (npm "prebuild") ou com: npm run pendencias
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { pendencias, pendenciasAgrupadas, site } from "../src/config/site.ts";

const destino = fileURLToPath(new URL("../PENDENCIAS.md", import.meta.url));
const grupos = pendenciasAgrupadas();

const linhas = [
  `# Pendências — ${site.name}`,
  "",
  "<!-- Arquivo gerado automaticamente a partir de src/config/site.ts. Não edite à mão: rode `npm run pendencias`. -->",
  "",
  pendencias.length === 0
    ? "Nenhuma pendência. 🎉"
    : `${pendencias.length} ${pendencias.length === 1 ? "item" : "itens"} para o cliente confirmar. Os números são os mesmos dos selos amarelos da versão de teste.`,
  "",
];

if (pendencias.length) {
  linhas.push("## Para mandar no WhatsApp", "", "```", `Oi! Para terminar o site da ${site.name}, preciso confirmar algumas coisas:`, "");
  for (const g of grupos) {
    linhas.push(`*${g.titulo}*`);
    for (const x of g.itens) linhas.push(`${x.n}. ${x.pergunta}`);
    linhas.push("");
  }
  linhas.push("Pode responder pelo número da pergunta. Obrigado!", "```", "");

  linhas.push("## Por seção da página", "");
  for (const g of grupos) {
    linhas.push(`### ${g.titulo}`, "");
    for (const x of g.itens) linhas.push(`${x.n}. ${x.pergunta} <sub>\`${x.id}\`</sub>`);
    linhas.push("");
  }
}

writeFileSync(destino, linhas.join("\n"));
console.log(`PENDENCIAS.md: ${pendencias.length} pendência(s).`);

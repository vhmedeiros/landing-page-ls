import type { Metadata } from "next";
import { site, whatsappLink } from "@/config/site";
import { TestBanner } from "@/components/Pendente";

export const metadata: Metadata = {
  title: `Política de privacidade | ${site.name}`,
  alternates: { canonical: "/politica-de-privacidade" },
};

// Modelo básico. Revise com quem cuida da parte jurídica da empresa,
// principalmente se for usar Google Ads e Meta Ads (ambos exigem esta página).
export default function Privacidade() {
  return (
    <>
    <TestBanner href="/#pendencias" />
    <main className="wrap prose">
      <p>
        <a href="/">← Voltar ao início</a>
      </p>
      <h1>Política de privacidade</h1>
      <p>
        Esta página explica como {site.legalName} (CNPJ {site.cnpj}) trata os dados de quem visita este site, conforme a
        Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
      </p>

      <h2>Quais dados coletamos</h2>
      <p>
        Este site não tem formulários. Quando você clica para falar no WhatsApp, a conversa acontece no aplicativo do
        WhatsApp e só recebemos o que você decidir nos enviar, como nome, telefone e fotos de documentos necessários para o
        serviço.
      </p>
      <p>
        Podemos usar ferramentas de medição (como Google Analytics, Google Ads e Meta Pixel) que registram de forma agregada
        páginas visitadas, cliques nos botões e informações técnicas do navegador, por meio de cookies.
      </p>

      <h2>Para que usamos</h2>
      <p>Para responder ao seu pedido, prestar o serviço contratado, medir o resultado dos nossos anúncios e melhorar o site.</p>

      <h2>Compartilhamento</h2>
      <p>
        Não vendemos dados. Documentos enviados para a prestação do serviço podem ser apresentados ao Detran-DF e órgãos
        de trânsito quando a lei exigir.
      </p>

      <h2>Seus direitos</h2>
      <p>
        Você pode pedir acesso, correção ou exclusão dos seus dados pelo WhatsApp{" "}
        <a href={whatsappLink("Olá! Quero falar sobre os meus dados pessoais (LGPD).")} target="_blank" rel="noopener">
          {site.phoneDisplay}
        </a>
        {site.email && (
          <>
            {" "}
            ou pelo e-mail <a href={`mailto:${site.email}`}>{site.email}</a>
          </>
        )}
        .
      </p>
    </main>
    </>
  );
}

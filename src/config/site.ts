/**
 * ============================================================
 *  CONFIGURAÇÃO DO SITE — edite SÓ este arquivo para trocar
 *  textos, contatos, serviços e dados de SEO.
 *
 *  REGRA: nada de inventar fatos. Se uma informação ainda não foi
 *  confirmada pelo cliente, o texto fica neutro (e verdadeiro) e o
 *  campo é marcado com  p("id-da-pendencia")  + comentário // PENDENTE.
 *
 *  Como resolver uma pendência:
 *   1. preencha o dado real no campo correspondente;
 *   2. apague a entrada da lista `pendencias` (logo abaixo);
 *   3. o TypeScript vai acusar onde o id ainda é usado: apague
 *      `pendente: p("...")` do item, ou troque p("...") por null;
 *   4. rode o build de novo (npm run build ou docker compose up -d --build).
 *  O arquivo PENDENCIAS.md é regenerado sozinho a cada build
 *  (ou com `npm run pendencias`).
 * ============================================================
 */

// ---------- Pendências (fonte única: página de teste + PENDENCIAS.md) ----------

/** Seções da página, na ordem em que aparecem. Usadas para agrupar as pendências. */
export const secoes = [
  { id: "hero", titulo: "Topo da página", ancora: "inicio" },
  { id: "diferenciais", titulo: "Diferenciais", ancora: "diferenciais" },
  { id: "servicos", titulo: "Serviços", ancora: "servicos" },
  { id: "como-funciona", titulo: "Como funciona", ancora: "como-funciona" },
  { id: "depoimentos", titulo: "Depoimentos", ancora: "depoimentos" },
  { id: "faq", titulo: "Perguntas frequentes", ancora: "perguntas" },
  { id: "onde-estamos", titulo: "Onde estamos, horário e contato", ancora: "onde-estamos" },
  { id: "empresa", titulo: "Dados da empresa (rodapé)", ancora: "rodape" },
] as const;

export type SecaoId = (typeof secoes)[number]["id"];

/**
 * Tudo que falta o cliente confirmar. Perguntas curtas, em linguagem simples:
 * elas vão do jeito que estão para o WhatsApp do cliente (PENDENCIAS.md).
 */
export const pendencias = [
  // Topo
  { id: "foto-hero", secao: "hero", pergunta: "A foto do carro é ilustrativa. Vocês têm fotos reais (fachada, equipe, placa sendo instalada) para colocar no lugar?" },

  // Diferenciais
  { id: "prazo-10min", secao: "diferenciais", pergunta: "O emplacamento em até 10 minutos conta a partir de quando? (chegada do cliente, documentos aprovados, placa pronta?)" },
  { id: "prazo-24h", secao: "diferenciais", pergunta: "As 24 horas para regularizar os débitos contam a partir de quê? (pagamento, envio dos documentos?)" },
  { id: "estampadora", secao: "diferenciais", pergunta: "Vocês mesmos estampam as placas ou trabalham com uma estampadora credenciada parceira? Se for parceira, qual?" },
  { id: "outros-diferenciais", secao: "diferenciais", pergunta: "Tem mais algum diferencial para mostrar? Ex.: anos de mercado, garantia, credenciamento." },

  // Serviços
  { id: "emplacamento-tipos", secao: "servicos", pergunta: "Quais tipos de emplacamento vocês fazem e para quais veículos: carro, moto, caminhão, reboque?" },
  { id: "troca-mercosul", secao: "servicos", pergunta: "Vocês fazem a troca da placa antiga pela placa Mercosul?" },
  { id: "segunda-via", secao: "servicos", pergunta: "Vocês fazem segunda via de placa (danificada, perdida ou roubada)?" },
  { id: "vistoria", secao: "servicos", pergunta: "Na vistoria veicular, vocês fazem a vistoria ou agendam e acompanham o cliente?" },
  { id: "cautelar", secao: "servicos", pergunta: "Na vistoria cautelar, vocês emitem o laudo ou intermediam com outra empresa?" },
  { id: "parcelamento", secao: "servicos", pergunta: "Quais débitos vocês parcelam: IPVA, multas, licenciamento?" },
  { id: "precos", secao: "servicos", pergunta: "Querem mostrar preço no site (\"a partir de R$ ...\") ou só passar pelo WhatsApp?" },

  // Como funciona
  { id: "fluxo-atendimento", secao: "como-funciona", pergunta: "O atendimento funciona assim: WhatsApp → orientação e valor → resolvido? E onde a placa é instalada?" },

  // Depoimentos
  { id: "depoimentos", secao: "depoimentos", pergunta: "Podem mandar depoimentos reais de clientes, com autorização para publicar (nome e texto)?" },

  // FAQ
  { id: "faq-mercosul", secao: "faq", pergunta: "A resposta sobre quando a placa Mercosul é obrigatória está correta?" },
  { id: "faq-parcelamento", secao: "faq", pergunta: "Condições do parcelamento de débitos: em quantas vezes e em qual forma de pagamento?" },
  { id: "documentos", secao: "faq", pergunta: "Quais documentos o cliente precisa levar para cada serviço?" },
  { id: "pagamento", secao: "faq", pergunta: "Quais formas de pagamento vocês aceitam (Pix, cartão, dinheiro, parcelado)?" },
  { id: "faq-mais", secao: "faq", pergunta: "Quais perguntas os clientes mais fazem para vocês?" },

  // Onde estamos
  { id: "endereco", secao: "onde-estamos", pergunta: "Qual o endereço completo (quadra, lote, loja ou ponto de referência) e o link do Google Maps?" },
  { id: "modo-atendimento", secao: "onde-estamos", pergunta: "O cliente vai até a loja, a equipe vai até o cliente, ou os dois?" },
  { id: "whatsapp", secao: "onde-estamos", pergunta: "O (61) 98114-6143 é o WhatsApp que vai atender os clientes do site?" },

  // Empresa
  { id: "nome-comercial", secao: "empresa", pergunta: "O nome que aparece para o cliente e no Google é \"LS Assessoria Veicular\"?" },
  { id: "razao-social", secao: "empresa", pergunta: "Qual a razão social completa (Safety Placing Ltda? ME?)" },
  { id: "email", secao: "empresa", pergunta: "Qual o e-mail da empresa? (se não tiver, tudo bem)" },
  { id: "instagram", secao: "empresa", pergunta: "Qual o Instagram da empresa?" },
] as const satisfies readonly { id: string; secao: SecaoId; pergunta: string }[];

export type PendenciaId = (typeof pendencias)[number]["id"];
export type Pendencia = (typeof pendencias)[number];

/** Marca um campo como pendente. O id precisa existir na lista acima (o TypeScript confere). */
export function p(id: PendenciaId): PendenciaId {
  return id;
}

/** Pendências agrupadas por seção, na ordem da página, já numeradas (1, 2, 3...). */
export function pendenciasAgrupadas() {
  let n = 0;
  return secoes
    .map((s) => ({
      ...s,
      itens: pendencias.filter((x) => x.secao === s.id).map((x) => ({ ...x, n: ++n })),
    }))
    .filter((g) => g.itens.length > 0);
}

/** Número da pendência (o mesmo da lista no fim da página e do PENDENCIAS.md). */
export function numeroDaPendencia(id: PendenciaId): number {
  for (const g of pendenciasAgrupadas()) {
    const item = g.itens.find((x) => x.id === id);
    if (item) return item.n;
  }
  return 0;
}

// ---------- Tipos dos blocos de conteúdo ----------

type Pendente = PendenciaId | null;
type Highlight = { icon: string; title: string; text: string; pendente?: PendenciaId };
type Service = { icon: string; title: string; text: string; message: string; pendente?: PendenciaId };
type Step = { title: string; text: string };
/** `a` vazio = pergunta só aparece na versão de teste (com o selo de pendência). */
type Faq = { q: string; a: string; pendente?: PendenciaId };

const siteUrl = (process.env.SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

export const site = {
  // ---------- Identidade ----------
  name: "LS Assessoria Veicular", // PENDENTE: nome-comercial
  legalName: "Safety Placing", // PENDENTE: razao-social (Ltda? ME?)
  cnpj: "40.472.175/0001-16",
  tagline: "Precisou de placa? A gente facilita!", // aparece no rodapé

  // Logo do topo (fundo transparente) e logo quadrada oficial (JSON-LD).
  logo: "/brand/logo-horizontal.png",
  logoSize: { width: 857, height: 176 },
  logoSquare: "/brand/logo-quadrado.jpg",

  // URL final do site, sem barra no fim. Vem SEMPRE da variável SITE_URL
  // (no código não existe domínio fixo).
  url: siteUrl,

  // ---------- SEO (nunca coloque pendências aqui) ----------
  seo: {
    // Título da aba e do resultado no Google (ideal: até ~60 caracteres).
    title: "Placa Mercosul e Emplacamento em Brasília | LS Assessoria Veicular",
    // Texto que aparece embaixo do título no Google (ideal: 140–160 caracteres).
    description:
      "Emplacamento em até 10 minutos, placa Mercosul para carro e moto, vistoria e parcelamento de débitos em todo o DF. Atendimento rápido pelo WhatsApp.",
    keywords: [
      "placa Mercosul Brasília",
      "placa Mercosul DF",
      "emplacamento DF",
      "emplacamento Brasília",
      "placa veicular Brasília",
      "placa de carro",
      "placa de moto",
      "segunda via de placa",
      "troca de placa antiga por Mercosul",
      "vistoria veicular DF",
    ],
    locale: "pt_BR",
  },

  // ---------- WhatsApp ----------
  whatsapp: {
    // Só números: 55 + DDD + número.
    number: "5561981146143", // PENDENTE: whatsapp
    // Mensagem que já vem escrita quando o cliente abre a conversa.
    defaultMessage: "Olá! Vim pelo site e preciso de ajuda com a placa ou a documentação do meu veículo.",
  },

  // ---------- Contato e local (precisa bater com o Perfil da Empresa no Google) ----------
  phoneDisplay: "(61) 98114-6143", // PENDENTE: whatsapp
  phoneE164: "+5561981146143",
  email: "", // PENDENTE: email (vazio = some do rodapé e do JSON-LD)
  address: {
    street: "Parque Ferroviário de Brasília", // PENDENTE: endereco (quadra/lote/loja ou referência)
    city: "Brasília",
    state: "DF",
    postalCode: "70631-970",
    country: "BR",
  },
  // Coordenadas da loja: null até o cliente mandar o link do Maps. Não chute.
  geo: null as { lat: number; lng: number } | null,
  // Link "Como chegar" — provisório (busca pelo nome do local). PENDENTE: endereco
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parque+Ferrovi%C3%A1rio+de+Bras%C3%ADlia",
  // Atendimento em todo o DF (confirmado). PENDENTE: modo-atendimento (loja, a domicílio ou os dois?)
  areaServed: [
    "Plano Piloto",
    "Asa Sul",
    "Asa Norte",
    "Sudoeste",
    "Cruzeiro",
    "Guará",
    "Águas Claras",
    "Taguatinga",
    "Ceilândia",
    "Samambaia",
    "Vicente Pires",
    "Núcleo Bandeirante",
    "Riacho Fundo",
    "Recanto das Emas",
    "Gama",
    "Santa Maria",
    "Sobradinho",
    "Planaltina",
    "Jardim Botânico",
    "Lago Sul",
    "Lago Norte",
  ],

  // Horário confirmado pelo cliente: segunda a sábado, 8h às 18h.
  // Dias em inglês (padrão do schema.org), horas em 24h.
  hours: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:00" }],
  hoursDisplay: ["Seg a sáb, 8h às 18h"],

  social: {
    instagram: "", // PENDENTE: instagram
    googleBusiness: "", // link do Perfil da Empresa no Google (será criado depois)
  },

  // ---------- Selos de pendência que não pertencem a um item específico ----------
  // Resolvida a pendência, troque p("...") por null (ou apague da lista).
  pendentes: {
    name: p("nome-comercial") as Pendente, // PENDENTE
    legalName: p("razao-social") as Pendente, // PENDENTE
    whatsapp: p("whatsapp") as Pendente, // PENDENTE
    email: p("email") as Pendente, // PENDENTE
    instagram: p("instagram") as Pendente, // PENDENTE
    address: p("endereco") as Pendente, // PENDENTE
    serviceArea: p("modo-atendimento") as Pendente, // PENDENTE
    heroImage: p("foto-hero") as Pendente, // PENDENTE
    testimonials: p("depoimentos") as Pendente, // PENDENTE
    highlights: [p("estampadora"), p("outros-diferenciais")] as PendenciaId[], // PENDENTE
    services: [p("precos")] as PendenciaId[], // PENDENTE
    steps: [p("fluxo-atendimento")] as PendenciaId[], // PENDENTE
    faq: [p("faq-mais")] as PendenciaId[], // PENDENTE
  },

  // ---------- Conteúdo da página ----------
  hero: {
    badge: "Atendimento em todo o Distrito Federal",
    title: "Placa Mercosul e emplacamento em Brasília em até 10 minutos",
    subtitle:
      "Carro, moto ou caminhão: cuidamos da placa, da vistoria e dos débitos do seu veículo em todo o DF. Chame no WhatsApp e diga o que precisa.",
    cta: "Falar no WhatsApp",
    image: "/brand/hero-carro.jpg",
    imageAlt: "Carro com placa padrão Mercosul instalada",
    // Ponto da foto que fica sempre visível no recorte (a placa).
    imagePosition: "47% 62%",
  },

  // Diferenciais. Nunca dizer que a empresa fabrica ou estampa placas (PENDENTE: estampadora).
  highlights: [
    { icon: "clock", title: "Emplacamento em até 10 minutos", text: "Com a documentação em ordem, a placa é instalada rapidinho.", pendente: p("prazo-10min") }, // PENDENTE
    { icon: "check", title: "Débitos regularizados em 24h", text: "Regularizamos os débitos do veículo em até 24 horas.", pendente: p("prazo-24h") }, // PENDENTE
    { icon: "map", title: "Todo o Distrito Federal", text: "Atendemos do Plano Piloto às regiões administrativas." },
    { icon: "mensagem", title: "Orientação pelo WhatsApp", text: "Tire a dúvida antes de sair de casa e venha sabendo o que levar." },
  ] as Highlight[],

  // Cada serviço tem a própria mensagem de WhatsApp — assim dá para saber
  // de qual serviço veio cada conversa.
  servicesTitle: "Placa e documentação do seu veículo no DF",
  servicesLead: "Placa de carro, placa de moto e a papelada que vem junto: escolha o serviço e fale direto com a gente.",
  services: [
    { icon: "car", title: "Emplacamento", text: "Primeiro emplacamento e transferência de veículo.", message: "Olá! Preciso fazer o emplacamento do meu veículo.", pendente: p("emplacamento-tipos") }, // PENDENTE
    { icon: "plate", title: "Troca para placa Mercosul", text: "Troque a placa antiga pelo padrão Mercosul quando for obrigatório ou quando você quiser.", message: "Olá! Quero trocar a placa antiga do meu veículo pela placa Mercosul.", pendente: p("troca-mercosul") }, // PENDENTE
    { icon: "refresh", title: "Segunda via de placa", text: "Placa danificada, perdida ou roubada? Fazemos a reposição.", message: "Olá! Preciso de segunda via de placa.", pendente: p("segunda-via") }, // PENDENTE
    { icon: "shield", title: "Vistoria veicular", text: "A vistoria exigida pelo Detran-DF para transferência e outros serviços.", message: "Olá! Preciso de vistoria veicular para o meu veículo.", pendente: p("vistoria") }, // PENDENTE
    { icon: "lupa", title: "Vistoria cautelar", text: "Laudo que confere estrutura, originalidade e histórico antes de comprar um usado.", message: "Olá! Quero fazer uma vistoria cautelar antes de comprar um veículo usado.", pendente: p("cautelar") }, // PENDENTE
    { icon: "file", title: "Parcelamento de débitos", text: "Débitos do veículo parcelados, com regularização em até 24h.", message: "Olá! Quero parcelar os débitos do meu veículo.", pendente: p("parcelamento") }, // PENDENTE
  ] as Service[],

  // Passo a passo (é uma sequência real, por isso numerado). PENDENTE: fluxo-atendimento
  steps: [
    { title: "Chame no WhatsApp", text: "Conte o que você precisa: placa, vistoria ou débitos." },
    { title: "A gente orienta e passa o valor", text: "Você fica sabendo quais documentos levar e quanto vai custar antes de sair de casa." },
    { title: "Resolvido", text: "Emplacamento em até 10 minutos e débitos regularizados em até 24h." },
  ] as Step[],

  // Depoimentos: SOMENTE avaliações reais, com autorização do cliente.
  // Lista vazia = a seção some (na versão de teste aparece só o selo). PENDENTE: depoimentos
  testimonials: [] as { name: string; text: string }[],

  // Perguntas frequentes. Só as SEM pendência vão para o JSON-LD (FAQPage).
  faqTitle: "Dúvidas sobre placa Mercosul e emplacamento no DF",
  faq: [
    {
      q: "Quanto tempo demora o emplacamento?",
      a: "Com a documentação em ordem, o emplacamento leva até 10 minutos.",
    },
    {
      q: "A placa Mercosul é obrigatória?",
      a: "Para placa de carro ou de moto, a placa Mercosul é obrigatória no primeiro emplacamento, na mudança de município ou de estado, na mudança de categoria e quando a placa precisa ser substituída por estar danificada, perdida ou roubada. Nos outros casos, trocar a placa antiga pela Mercosul é opcional.",
      pendente: p("faq-mercosul"), // PENDENTE
    },
    {
      q: "Qual a diferença entre vistoria veicular e vistoria cautelar?",
      a: "A vistoria veicular é exigida pelo Detran-DF em serviços como a transferência. A vistoria cautelar é opcional: avalia estrutura, originalidade e histórico do veículo antes de você comprar um usado.",
    },
    {
      q: "Dá para parcelar os débitos do veículo?",
      a: "Sim. Os débitos são regularizados em até 24h, e as condições do parcelamento a gente passa pelo WhatsApp.",
      pendente: p("faq-parcelamento"), // PENDENTE
    },
    {
      q: "Quais documentos preciso levar?",
      a: "Depende do serviço. Mande uma mensagem dizendo o que você precisa e a gente passa a lista certinha.",
      pendente: p("documentos"), // PENDENTE
    },
    {
      q: "Quais as formas de pagamento?",
      a: "", // PENDENTE: pagamento — fora da versão de teste esta pergunta não aparece
      pendente: p("pagamento"),
    },
    {
      q: "Vocês atendem em qual região?",
      a: "Atendemos todo o Distrito Federal, de segunda a sábado, das 8h às 18h.",
    },
  ] as Faq[],

  finalCta: {
    title: "Facilidade para o seu veículo! A LS resolve.",
    text: "Atendimento rápido, regularização, transferência e assessoria completa no DF.",
  },
};

export type Site = typeof site;

/** Monta o link wa.me com a mensagem já preenchida. */
export function whatsappLink(message: string = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

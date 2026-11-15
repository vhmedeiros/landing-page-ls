/**
 * ============================================================
 *  CONFIGURAÇÃO DO SITE — edite SÓ este arquivo para trocar
 *  textos, contatos, serviços e dados de SEO.
 * ============================================================
 */

// ---------- Pendências ----------

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

/** Nenhuma pendência restante — todas as informações foram confirmadas pelo cliente. */
export const pendencias = [] as const satisfies readonly { id: string; secao: SecaoId; pergunta: string }[];

export type PendenciaId = (typeof pendencias)[number]["id"];
export type Pendencia = (typeof pendencias)[number];

/** Marca um campo como pendente. Com a lista vazia o TypeScript não deixa chamar esta função. */
export function p(id: PendenciaId): PendenciaId {
  return id;
}

/** Pendências agrupadas por seção, na ordem da página, já numeradas. */
export function pendenciasAgrupadas() {
  return [] as { id: string; titulo: string; ancora: string; itens: { id: string; secao: SecaoId; pergunta: string; n: number }[] }[];
}

/** Número da pendência. Com lista vazia sempre retorna 0. */
export function numeroDaPendencia(_id: PendenciaId): number {
  return 0;
}

// ---------- Tipos dos blocos de conteúdo ----------

type Highlight = { icon: string; title: string; text: string };
type Service = { icon: string; title: string; text: string; message: string };
type Step = { title: string; text: string };
/** `a` vazio = pergunta não aparece na versão de produção. */
type Faq = { q: string; a: string };

const siteUrl = (process.env.SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

export const site = {
  // ---------- Identidade ----------
  name: "LS Assessoria Veicular",
  /**
   * Razão social do MEI. CNPJ 40.472.175/0001-16.
   * Quando houver abertura de empresa, atualizar para a razão social completa.
   */
  legalName: "Lincoln Sergio Alves Araujo Flor",
  cnpj: "40.472.175/0001-16",
  tagline: "Precisou de placa? A gente facilita!",

  // Logo do topo (fundo transparente) e logo quadrada oficial (JSON-LD).
  logo: "/brand/logo-horizontal.png",
  logoSize: { width: 857, height: 176 },
  logoSquare: "/brand/logo-quadrado.jpg",

  // URL final do site, sem barra no fim. Vem SEMPRE da variável SITE_URL.
  url: siteUrl,

  // ---------- SEO ----------
  seo: {
    title: "Placa Mercosul e Emplacamento em Brasília | LS Assessoria Veicular",
    description:
      "Emplacamento em até 10 minutos da chegada, placa Mercosul para carro e moto, vistoria e parcelamento de débitos em todo o DF. Atendimento rápido pelo WhatsApp.",
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
    // Confirmado pelo cliente: (61) 98114-6143.
    number: "5561981146143",
    defaultMessage: "Olá! Vim pelo site e preciso de ajuda com a placa ou a documentação do meu veículo.",
  },

  // ---------- Contato e local ----------
  phoneDisplay: "(61) 98114-6143",
  phoneE164: "+5561981146143",
  // E-mail ainda não criado — campo vazio = some do rodapé e do JSON-LD.
  // Atualizar quando o cliente criar o e-mail.
  email: "",
  address: {
    street: "SIA — Parque Ferroviário de Brasília",
    city: "Brasília",
    state: "DF",
    postalCode: "70631-970",
    country: "BR",
  },
  // Coordenadas extraídas do iframe do Google Maps fornecido pelo cliente.
  geo: { lat: -15.787071, lng: -47.962208 } as { lat: number; lng: number } | null,
  mapsUrl: "https://maps.app.goo.gl/uQvPke4RCo9mCujv8",

  // Atendimento presencial na loja E a domicílio — confirmado pelo cliente.
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
  hours: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:00" }],
  hoursDisplay: ["Seg a sáb, 8h às 18h"],

  social: {
    // Instagram e Perfil Google ainda não criados. Atualizar quando disponíveis.
    instagram: "",
    googleBusiness: "",
  },

  // ---------- Selos de pendência — todos resolvidos ----------
  pendentes: {
    name: null,
    legalName: null,
    whatsapp: null,
    email: null,
    instagram: null,
    address: null,
    serviceArea: null,
    heroImage: null,
    testimonials: null,
    highlights: [] as PendenciaId[],
    services: [] as PendenciaId[],
    steps: [] as PendenciaId[],
    faq: [] as PendenciaId[],
  },

  // ---------- Conteúdo da página ----------
  hero: {
    badge: "Atendimento em todo o Distrito Federal",
    title: "Placa Mercosul e emplacamento em Brasília em até 10 minutos",
    subtitle:
      "Cuidamos da placa, da vistoria e dos débitos de qualquer veículo em todo o DF. Chame no WhatsApp e diga o que precisa.",
    cta: "Falar no WhatsApp",
    image: "/brand/hero-carro.jpg",
    imageAlt: "Carro com placa padrão Mercosul instalada",
    imagePosition: "47% 62%",
  },

  highlights: [
    {
      icon: "clock",
      title: "Emplacamento em até 10 minutos",
      // Confirmado: 10 minutos contam da chegada do cliente, com documentação em ordem.
      text: "Da sua chegada até a placa instalada: em até 10 minutos, com a documentação em ordem.",
    },
    {
      icon: "check",
      title: "Débitos regularizados em 24h",
      // Confirmado: prazo conta a partir do pagamento.
      text: "Regularizamos os débitos do veículo em até 24 horas após o pagamento.",
    },
    {
      icon: "map",
      title: "Todo o Distrito Federal",
      // Atendimento na loja e a domicílio — confirmado pelo cliente.
      text: "Atendemos na loja ou onde você estiver, do Plano Piloto às regiões administrativas.",
    },
    {
      icon: "mensagem",
      title: "Orientação pelo WhatsApp",
      text: "Tire a dúvida antes de sair de casa e venha sabendo o que levar.",
    },
  ] as Highlight[],

  servicesTitle: "Placa e documentação do seu veículo no DF",
  servicesLead: "Placa de carro, placa de moto e a papelada que vem junto: escolha o serviço e fale direto com a gente.",
  services: [
    {
      icon: "car",
      title: "Emplacamento",
      // Confirmado: atende carro, moto, caminhão e reboque.
      text: "Primeiro emplacamento e transferência para carro, moto, caminhão e reboque.",
      message: "Olá! Preciso fazer o emplacamento do meu veículo.",
    },
    {
      icon: "plate",
      title: "Troca para placa Mercosul",
      // Confirmado: fazem a troca da placa antiga pela Mercosul.
      text: "Troque a placa cinza antiga pelo padrão Mercosul quando for obrigatório ou quando você quiser.",
      message: "Olá! Quero trocar a placa antiga do meu veículo pela placa Mercosul.",
    },
    {
      icon: "refresh",
      title: "Segunda via de placa",
      // Confirmado: fazem reposição de placa danificada, perdida ou roubada.
      text: "Placa danificada, perdida ou roubada? Cuidamos da reposição completa.",
      message: "Olá! Preciso de segunda via de placa.",
    },
    {
      icon: "shield",
      title: "Vistoria veicular",
      // Confirmado: agendamos e acompanhamos o cliente na vistoria do Detran-DF.
      text: "Agendamos a vistoria exigida pelo Detran-DF e acompanhamos você durante todo o processo.",
      message: "Olá! Preciso de vistoria veicular para o meu veículo.",
    },
    {
      icon: "lupa",
      title: "Vistoria cautelar",
      // Confirmado: acompanham o cliente na vistoria cautelar.
      text: "Avaliamos estrutura, originalidade e histórico do veículo antes da compra. Acompanhamos você na vistoria.",
      message: "Olá! Quero fazer uma vistoria cautelar antes de comprar um veículo usado.",
    },
    {
      icon: "file",
      title: "Parcelamento de débitos",
      // Confirmado: IPVA, multas e licenciamento, em até 12x no cartão de crédito.
      text: "IPVA, multas e licenciamento parcelados em até 12× no cartão. Regularização em até 24h após o pagamento.",
      message: "Olá! Quero parcelar os débitos do meu veículo.",
    },
  ] as Service[],

  // Fluxo de atendimento confirmado pelo cliente (4 etapas).
  steps: [
    {
      title: "Chame no WhatsApp",
      text: "Conte o que você precisa — placa, vistoria ou débitos. A gente tira suas dúvidas e passa o valor.",
    },
    {
      title: "A gente orienta e confirma",
      text: "Você fica sabendo quais documentos levar e quanto vai custar antes de sair de casa.",
    },
    {
      title: "Confecção das placas",
      text: "Com a documentação aprovada, as placas são produzidas por estampadora credenciada.",
    },
    {
      title: "Instalação e entrega",
      text: "As placas são instaladas no veículo. Do início ao fim: em até 10 minutos da sua chegada.",
    },
  ] as Step[],

  // Depoimentos: SOMENTE avaliações reais, com autorização do cliente.
  // Lista vazia = seção some na versão de produção. Adicionar quando disponível.
  testimonials: [] as { name: string; text: string }[],

  faqTitle: "Dúvidas sobre placa Mercosul e emplacamento no DF",
  faq: [
    {
      q: "Quanto tempo demora o emplacamento?",
      // Confirmado: 10 minutos da chegada do cliente, com documentação em ordem.
      a: "Com a documentação em ordem, o emplacamento leva até 10 minutos da chegada do cliente.",
    },
    {
      q: "A placa Mercosul é obrigatória?",
      // Texto confirmado pelo cliente (item 15).
      a: "A placa Mercosul é obrigatória no primeiro emplacamento, na mudança de município ou estado, na mudança de categoria, ao solicitar uma segunda placa traseira (como para suporte de bicicleta) e quando a placa atual precisa ser substituída por dano, perda, furto, roubo ou rompimento do lacre. Na compra e venda dentro do mesmo município, se a placa cinza e o lacre estiverem intactos, a troca é opcional.",
    },
    {
      q: "Qual a diferença entre vistoria veicular e vistoria cautelar?",
      a: "A vistoria veicular é exigida pelo Detran-DF em serviços como transferência — agendamos e acompanhamos você. A vistoria cautelar é opcional: avalia estrutura, originalidade e histórico do veículo antes de você comprar um usado.",
    },
    {
      q: "Dá para parcelar os débitos do veículo?",
      // Confirmado: IPVA, multas e licenciamento em até 12x no cartão.
      a: "Sim. Parcelamos IPVA, multas e licenciamento em até 12× no cartão de crédito. Os débitos são regularizados em até 24 horas após o pagamento.",
    },
    {
      q: "Quais documentos preciso levar?",
      // Confirmado: documentos pessoais + documentos do veículo + autorização de estampagem (se houver).
      a: "Traga seus documentos pessoais e os documentos do veículo. Para serviços de placa, leve também a autorização de estampagem, se já tiver. Mande uma mensagem dizendo o que você precisa e a gente confirma a lista completa.",
    },
    {
      q: "Quais as formas de pagamento?",
      // Confirmado: Pix, dinheiro, cartão de débito e crédito (até 12x).
      a: "Aceitamos Pix, dinheiro, cartão de débito e cartão de crédito em até 12 parcelas.",
    },
    {
      q: "Vocês atendem em qual região?",
      a: "Atendemos todo o Distrito Federal, de segunda a sábado, das 8h às 18h. O atendimento pode ser na nossa loja ou no local que você preferir.",
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

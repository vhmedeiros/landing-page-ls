import Image from "next/image";
import { ArrowRight, BadgeCheck, Clock, MapPin, MessageCircle, Navigation, Phone, Plus } from "lucide-react";
import { site, whatsappLink } from "@/config/site";
import { SHOW_PENDING } from "@/lib/flags";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { TilePattern } from "@/components/TilePattern";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Pendente, Pendentes, TestBanner } from "@/components/Pendente";
import { PendenciasSection } from "@/components/PendenciasSection";
import { RevealScript, delay } from "@/components/Reveal";

/** "A, B, C e D" */
function listaNatural(itens: string[]) {
  if (itens.length <= 1) return itens.join("");
  return `${itens.slice(0, -1).join(", ")} e ${itens[itens.length - 1]}`;
}

/** Rótulo pequeno + título da seção. */
function SectionHead({ id, eyebrow, title, lead }: { id: string; eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="section-head" data-reveal="up">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();
  const pend = site.pendentes;
  // Perguntas sem resposta só aparecem na versão de teste (com o selo).
  const faq = site.faq.filter((f) => f.a);
  const showTestimonials = site.testimonials.length > 0 || (SHOW_PENDING && !!pend.testimonials);
  const instagram = site.social.instagram;

  return (
    <>
      <JsonLd />

      <header className="topbar">
        <TestBanner />
        <div className="wrap topbar-inner">
          <a href="#inicio" className="logo" aria-label={`${site.name} — início`}>
            <Image
              src={site.logo}
              alt={site.name}
              width={site.logoSize.width}
              height={site.logoSize.height}
              sizes="(max-width: 640px) 176px, 215px"
              className="logo-img"
              priority
            />
          </a>
          <nav className="topbar-nav" aria-label="Contato">
            <a href={`tel:${site.phoneE164}`} className="topbar-phone">
              <Phone aria-hidden size={16} />
              {site.phoneDisplay}
            </a>
            <WhatsAppLink source="topo" className="btn btn-wa btn-sm topbar-wa" ariaLabel="Falar no WhatsApp">
              <span className="topbar-wa-label">WhatsApp</span>
            </WhatsAppLink>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        {/* ---------------- HERO ---------------- */}
        <section className="hero" id="inicio">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="hero-badge">
                <BadgeCheck aria-hidden size={18} />
                {site.hero.badge}
              </p>
              <h1>{site.hero.title}</h1>
              <p className="hero-sub">{site.hero.subtitle}</p>
              <div id="hero-cta" className="hero-actions">
                <WhatsAppLink source="hero" className="btn btn-wa btn-lg">
                  {site.hero.cta}
                </WhatsAppLink>
              </div>
              <ul className="hero-facts">
                <li>
                  <Clock aria-hidden size={16} />
                  {site.hoursDisplay[0]}
                </li>
                <li>
                  <Phone aria-hidden size={16} />
                  <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
                </li>
              </ul>
            </div>

            <div className="hero-media">
              <div className="hero-art">
                <Image
                  src={site.hero.image}
                  alt={site.hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 600px) calc(100vw - 32px), (max-width: 960px) 560px, 480px"
                  style={{ objectFit: "cover", objectPosition: site.hero.imagePosition }}
                />
                <figure className="chat" aria-label="Prévia da mensagem que abre no WhatsApp">
                  <figcaption>Ao tocar no botão, a conversa abre assim:</figcaption>
                  <div className="chat-head">
                    <span className="chat-avatar" aria-hidden>
                      {site.name.charAt(0)}
                    </span>
                    <span>
                      <strong>{site.name}</strong>
                      <small>WhatsApp</small>
                    </span>
                  </div>
                  <div className="chat-body">
                    <p className="bubble">{site.whatsapp.defaultMessage}</p>
                  </div>
                </figure>
              </div>
              <Pendente id={pend.heroImage} block />
            </div>
          </div>
        </section>

        {/* ---------------- DIFERENCIAIS ---------------- */}
        <section className="highlights" id="diferenciais" aria-label="Por que escolher a LS">
          <div className="wrap">
            <div className="highlights-grid">
              {site.highlights.map((h, i) => (
                <div key={h.title} className="highlight" data-reveal="up" style={delay(i * 90)}>
                  <span className="highlight-icon">
                    <Icon name={h.icon} size={24} />
                  </span>
                  <h2>{h.title}</h2>
                  <p>{h.text}</p>
                  <Pendente id={null} block />
                </div>
              ))}
            </div>
            <Pendentes ids={pend.highlights} />
          </div>
        </section>

        {/* ---------------- SERVIÇOS ---------------- */}
        <section className="section" id="servicos" aria-labelledby="servicos-titulo">
          <div className="wrap">
            <SectionHead id="servicos-titulo" eyebrow="Serviços" title={site.servicesTitle} lead={site.servicesLead} />
            <ul className="services">
              {site.services.map((s, i) => (
                <li key={s.title} className="service" data-reveal="up" style={delay((i % 3) * 90)}>
                  <span className="service-icon">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Pendente id={null} block />
                  <WhatsAppLink
                    source={`servico:${s.title}`}
                    message={s.message}
                    className="service-link"
                    showIcon={false}
                    ariaLabel={`Pedir orçamento de ${s.title} no WhatsApp`}
                  >
                    Pedir orçamento
                    <ArrowRight aria-hidden size={18} />
                  </WhatsAppLink>
                </li>
              ))}
            </ul>
            <Pendentes ids={pend.services} />
          </div>
        </section>

        {/* ---------------- COMO FUNCIONA ---------------- */}
        <section className="section section-tint" id="como-funciona" aria-labelledby="passos-titulo">
          <div className="wrap">
            <SectionHead id="passos-titulo" eyebrow="Passo a passo" title="Como funciona" />
            <ol className="steps">
              {site.steps.map((s, i) => (
                <li key={s.title} className="step" data-reveal="up" style={delay(i * 140)}>
                  <span className="step-n" aria-hidden>
                    {i + 1}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <Pendentes ids={pend.steps} />
          </div>
        </section>

        {/* ---------------- DEPOIMENTOS (só aparece se houver; no teste mostra o selo) ---------------- */}
        {showTestimonials && (
          <section className="section" id="depoimentos" aria-labelledby="depo-titulo">
            <div className="wrap">
              <SectionHead id="depo-titulo" eyebrow="Depoimentos" title="Quem já resolveu com a gente" />
              {site.testimonials.length > 0 && (
                <div className="testimonials">
                  {site.testimonials.map((t, i) => (
                    <blockquote key={t.name} className="testimonial" data-reveal="up" style={delay(i * 90)}>
                      <p>{t.text}</p>
                      <cite>{t.name}</cite>
                    </blockquote>
                  ))}
                </div>
              )}
              <Pendente id={pend.testimonials} block />
            </div>
          </section>
        )}

        {/* ---------------- FAQ ---------------- */}
        <section className="section" id="perguntas" aria-labelledby="faq-titulo">
          <div className="wrap wrap-narrow">
            <SectionHead id="faq-titulo" eyebrow="Perguntas frequentes" title={site.faqTitle} />
            <div className="faq">
              {faq.map((f, i) => (
                <details key={f.q} open={false} data-reveal="up" style={delay(i * 60)}>
                  <summary>
                    {f.q}
                    <span className="faq-toggle" aria-hidden>
                      <Plus size={18} strokeWidth={2.25} />
                    </span>
                  </summary>
                  <div className="faq-answer">
                    {f.a && <p>{f.a}</p>}
                    <Pendente id={null} block />
                  </div>
                </details>
              ))}
            </div>
            <Pendentes ids={pend.faq} />
          </div>
        </section>

        {/* ---------------- ONDE ESTAMOS ---------------- */}
        <section className="section section-tint" id="onde-estamos" aria-labelledby="local-titulo">
          <div className="wrap">
            <SectionHead id="local-titulo" eyebrow="Atendimento" title="Onde estamos" />
            <div className="location">
              <div className="card location-card" data-reveal="left">
                <span className="card-icon">
                  <MapPin aria-hidden size={22} />
                </span>
                <h3 className="location-sub">Endereço</h3>
                <address>
                  {site.address.street}
                  <br />
                  {site.address.city} – {site.address.state}, {site.address.postalCode}
                </address>
                <Pendente id={pend.address} block />
                <a href={site.mapsUrl} target="_blank" rel="noopener" className="btn btn-ghost">
                  <Navigation aria-hidden size={18} />
                  Abrir no Google Maps
                </a>
              </div>
              <div className="card location-info" data-reveal="right" style={delay(120)}>
                <div className="info-row">
                  <span className="card-icon">
                    <Clock aria-hidden size={22} />
                  </span>
                  <div>
                    <h3 className="location-sub">Horário</h3>
                    <ul className="plain">
                      {site.hoursDisplay.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="info-row">
                  <span className="card-icon">
                    <BadgeCheck aria-hidden size={22} />
                  </span>
                  <div>
                    <h3 className="location-sub">Atendemos</h3>
                    <p>Atendemos {listaNatural([...site.areaServed, "todo o DF"])}.</p>
                    <Pendente id={pend.serviceArea} block />
                  </div>
                </div>
                <div className="info-row">
                  <span className="card-icon card-icon-wa">
                    <MessageCircle aria-hidden size={22} />
                  </span>
                  <div>
                    <h3 className="location-sub">Contato</h3>
                    <p>
                      <a href={whatsappLink()} target="_blank" rel="noopener">
                        WhatsApp {site.phoneDisplay}
                      </a>
                    </p>
                    <Pendente id={pend.whatsapp} block />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- CTA FINAL ---------------- */}
        <section className="final-wrap" aria-labelledby="final-titulo">
          <div className="wrap">
            <div className="final" data-reveal="zoom">
              <div className="final-tiles" aria-hidden>
                <TilePattern cols={4} rows={4} />
              </div>
              <div className="final-inner">
                <h2 id="final-titulo">{site.finalCta.title}</h2>
                <p>{site.finalCta.text}</p>
                <WhatsAppLink source="cta-final" className="btn btn-wa btn-lg">
                  {site.hero.cta}
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- PENDÊNCIAS (só na versão de teste) ---------------- */}
        <PendenciasSection />
      </main>

      <footer className="footer" id="rodape">
        <div className="wrap footer-inner">
          <div>
            <p className="footer-name">{site.name}</p>
            <p>{site.tagline}</p>
            <Pendente id={pend.name} block />
          </div>
          <div className="footer-right">
            <p>
              {site.legalName} · CNPJ {site.cnpj}
            </p>
            <Pendente id={pend.legalName} block />
            {(site.email || instagram) && (
              <p>
                {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
                {site.email && instagram && " · "}
                {instagram && (
                  <a href={instagram} target="_blank" rel="noopener">
                    Instagram
                  </a>
                )}
              </p>
            )}
            <Pendente id={pend.email} block />
            <Pendente id={pend.instagram} block />
            <p>
              <a href="/politica-de-privacidade">Política de privacidade</a> · © {year}
            </p>
          </div>
        </div>
      </footer>

      {/* Botão fixo no celular */}
      <FloatingWhatsApp watchId="hero-cta" />

      {/* Animações de entrada (precisa ficar no fim, depois dos elementos) */}
      <RevealScript />
    </>
  );
}

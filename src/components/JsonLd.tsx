import { site } from "@/config/site";

/**
 * Dados estruturados (schema.org) — ajudam o Google a entender que isto é
 * um negócio local, com endereço, horário e área de atendimento.
 *
 * Regra: pendências NUNCA entram aqui. Campo vazio ou incompleto é omitido,
 * e só vão para o FAQPage as perguntas sem pendência.
 */
export function JsonLd() {
  const sameAs = [site.social.instagram, site.social.googleBusiness].filter(Boolean);
  const logo = `${site.url}${site.logoSquare}`;

  const business = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${site.url}/#empresa`,
    name: site.name,
    // Razão social só entra quando estiver completa (sem pendência).
    ...(site.legalName && !site.pendentes.legalName ? { legalName: site.legalName } : {}),
    description: site.seo.description,
    slogan: site.tagline,
    url: site.url,
    telephone: site.phoneE164,
    ...(site.email ? { email: site.email } : {}),
    logo,
    image: logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    ...(site.geo ? { geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng } } : {}),
    areaServed: [
      { "@type": "State", name: "Distrito Federal" },
      ...site.areaServed.map((name) => ({ "@type": "Place", name: `${name}, DF` })),
    ],
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text },
      })),
    },
    ...(sameAs.length ? { sameAs } : {}),
  };

  const faqItems = site.faq.filter((f) => f.a);
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      {faqItems.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
    </>
  );
}

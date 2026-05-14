import { landingData } from "@/data/landing";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function StructuredData() {
  const siteUrl = "https://project.sturmproject.ru";
  const pageUrl = `${siteUrl}/`;

  const faqSchema = {
    "@id": `${pageUrl}#faq`,
    "@type": "FAQPage",
    mainEntity: landingData.seoBlocks.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const organizationSchema = {
    "@id": `${siteUrl}/#organization`,
    "@type": "Organization",
    name: landingData.brand.name,
    url: siteUrl,
    logo: `${siteUrl}/brand/sturm-logo.svg`,
    email: landingData.contacts.email,
    telephone: landingData.contacts.commonPhone,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: landingData.contacts.office.phone,
        contactType: "project sales",
        areaServed: "RU",
        availableLanguage: ["ru"],
      },
      {
        "@type": "ContactPoint",
        telephone: landingData.contacts.showroom.phone,
        contactType: "customer service",
        areaServed: "RU",
        availableLanguage: ["ru"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Санкт-Петербург",
      streetAddress: "ул. Наличная, д. 14",
      addressCountry: "RU",
    },
  };

  const serviceSchema = {
    "@id": `${pageUrl}#service`,
    "@type": "Service",
    name: "Комплектация коммерческих объектов сантехникой, плиткой и керамогранитом",
    serviceType: "Проектная комплектация объектов",
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: landingData.brand.name,
      url: siteUrl,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Санкт-Петербург",
      },
      {
        "@type": "Country",
        name: "Россия",
      },
    ],
    description:
      "Проектная поставка сантехники, мебели для ванной, инженерных решений, плитки, керамогранита и напольных покрытий для коммерческих, общественных и жилых объектов.",
  };

  const webPageSchema = {
    "@id": `${pageUrl}#webpage`,
    "@type": "WebPage",
    url: pageUrl,
    name: landingData.hero.title,
    description: landingData.hero.description,
    inLanguage: "ru-RU",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: landingData.brand.name,
      url: siteUrl,
    },
    about: {
      "@id": `${pageUrl}#service`,
    },
    mainEntity: {
      "@id": `${pageUrl}#service`,
    },
  };

  const breadcrumbSchema = {
    "@id": `${pageUrl}#breadcrumb`,
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "STURM",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Комплектация коммерческих объектов",
        item: pageUrl,
      },
    ],
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      serviceSchema,
      webPageSchema,
      breadcrumbSchema,
      faqSchema,
    ],
  };

  return <JsonLd data={data} />;
}

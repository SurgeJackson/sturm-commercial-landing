import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "../public/fonts/montserrat/montserrat-regular.woff",
  variable: "--font-montserrat",
  display: "swap",
});

const trajan = localFont({
  src: "../public/fonts/trajan.woff",
  variable: "--font-trajan",
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "STURM",
  metadataBase: new URL("https://project.sturmproject.ru"),
  title: "Комплектация коммерческих объектов сантехникой и керамогранитом | STURM",
  description:
    "STURM комплектует коммерческие, общественные и жилые объекты сантехникой, плиткой, керамогранитом, мебелью для ванной и инженерными решениями. Расчет по проекту и спецификации.",
  keywords: [
    "комплектация коммерческих объектов сантехникой",
    "проектная поставка сантехники",
    "сантехника для гостиниц",
    "сантехника для ресторанов",
    "сантехника для бизнес-центров",
    "керамогранит для коммерческих объектов",
    "плитка для общественных санузлов",
    "комплектация санузлов под ключ",
    "комплектация объектов Санкт-Петербург",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Комплектация коммерческих объектов сантехникой и керамогранитом | STURM",
    description:
      "Проектные поставки сантехники, плитки и керамогранита для гостиниц, ресторанов, бизнес-центров, фитнес-клубов, медицинских и жилых объектов.",
    url: "https://project.sturmproject.ru/",
    siteName: "STURM Project",
    images: [
      {
        url: "/images/hero-bathroom.jpg",
        width: 1200,
        height: 630,
        alt: "Комплектация коммерческих объектов сантехникой и керамогранитом STURM",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Комплектация коммерческих объектов сантехникой и керамогранитом | STURM",
    description:
      "Проектные поставки сантехники, плитки, керамогранита и интерьерных решений для коммерческих, общественных и жилых объектов.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/brand/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${trajan.variable}`}>{children}</body>
    </html>
  );
}

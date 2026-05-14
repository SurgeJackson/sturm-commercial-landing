import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://project.sturmproject.ru/sitemap.xml",
    host: "https://project.sturmproject.ru",
  };
}

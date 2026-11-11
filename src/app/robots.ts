import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { ALLOW_INDEXING } from "@/lib/flags";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOW_INDEXING ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

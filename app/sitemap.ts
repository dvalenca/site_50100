import type { MetadataRoute } from "next";
import { proposals } from "@/content/proposals";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/propostas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...proposals.map((proposal) => ({
      url: `${base}/propostas/${proposal.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/trajetoria`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/participe`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/doe`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}

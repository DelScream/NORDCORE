import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { equipment } from "@/data/equipment";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/o-kompanii", "/oborudovanie", "/kontakty", "/proekty"];

  const dynamic = [
    ...projects.map((item) => `/proekty/${item.slug}`),
    ...equipment.map((item) => `/oborudovanie/${item.slug}`),
  ];

  return [...staticPages, ...dynamic].map((path) => ({
    url: `${SITE_URL}${path === "" ? "/" : `${path}/`}`,
    lastModified: new Date("2026-08-25"),
  }));
}

import type { Metadata } from "next";
import { SITE_URL, site } from "@/data/site";

export const defaultTitle =
  "НОРДКОР — промышленная инженерия и оборудование";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description?: string;
  path: string;
}): Metadata {
  const desc = description ?? site.description;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: site.name,
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}

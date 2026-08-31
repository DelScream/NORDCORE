import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Oswald } from "next/font/google";
import { HashScroll } from "@/components/AnchorLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PortfolioPopup } from "@/components/PortfolioPopup";
import { SITE_URL, site } from "@/data/site";
import { withBasePath } from "@/lib/asset";
import { defaultTitle } from "@/lib/seo";
import "./globals.css";

const display = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s — НОРДКОР",
  },
  description: site.description,
  icons: { icon: withBasePath("/favicon.svg") },
  openGraph: {
    title: defaultTitle,
    description: site.description,
    locale: "ru_RU",
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          К содержанию
        </a>
        <HashScroll />
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <PortfolioPopup />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              alternateName: site.nameLatin,
              description: site.description,
              url: SITE_URL,
              email: site.email,
              telephone: site.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Москва",
                streetAddress: site.address,
                addressCountry: "RU",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

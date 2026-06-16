import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Handmade Clothing`,
    template: `%s | ${site.shortName}`,
  },
  description:
    `${site.tagline} Discover the ${site.shortName} lookbook and the story behind every stitch.`,
  openGraph: {
    title: `${site.name} — Handmade Clothing`,
    description:
      `${site.tagline} Discover the ${site.shortName} lookbook and the story behind every stitch.`,
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Handmade Clothing`,
    description:
      `${site.tagline} Discover the ${site.shortName} lookbook and the story behind every stitch.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

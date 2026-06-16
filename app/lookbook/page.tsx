import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LookbookGrid } from "@/components/LookbookGrid";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    `Browse the ${site.name} collection — handmade garments crafted in small batches with natural fabrics.`,
};

export default function LookbookPage() {
  return (
    <>
      <Hero
        title="The Lookbook"
        subtitle="A curated selection of pieces from the studio — each one made in small batches with natural fabrics and time-honored techniques."
        imageSrc={images.lookbook.hero}
        imageAlt={images.lookbook.heroAlt}
        compact
      />
      <LookbookGrid />
    </>
  );
}

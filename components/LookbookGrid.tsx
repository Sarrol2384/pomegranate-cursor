"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { GarmentCard } from "@/components/GarmentCard";
import { LightboxModal } from "@/components/LightboxModal";
import { SectionHeading } from "@/components/SectionHeading";
import { garments, type Garment } from "@/lib/products";

export function LookbookGrid() {
  const [selected, setSelected] = useState<Garment | null>(null);

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              eyebrow="Collection"
              title="Pieces from the studio"
              description="Tap any piece to learn more about the fabric, the season, and the story behind it."
            />
          </FadeIn>

          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {garments.map((garment, index) => (
              <FadeIn key={garment.id} delay={(index % 3) * 0.08}>
                <GarmentCard garment={garment} onSelect={setSelected} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <LightboxModal garment={selected} onClose={() => setSelected(null)} />
    </>
  );
}

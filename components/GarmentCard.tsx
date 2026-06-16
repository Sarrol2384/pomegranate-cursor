"use client";

import Image from "next/image";
import { formatPrice, type Garment } from "@/lib/products";

type GarmentCardProps = {
  garment: Garment;
  onSelect: (garment: Garment) => void;
};

export function GarmentCard({ garment, onSelect }: GarmentCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(garment)}
      className="group w-full cursor-pointer touch-manipulation text-left"
      aria-label={`View details for ${garment.name}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-border">
        <Image
          src={garment.image}
          alt={garment.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-2xl text-foreground transition-colors group-hover:text-accent">
          {garment.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{garment.note}</p>
        <p className="mt-2 text-base font-medium text-foreground">
          {formatPrice(garment.price)}
        </p>
      </div>
    </button>
  );
}

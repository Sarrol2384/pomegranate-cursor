"use client";

import Image from "next/image";
import { useEffect } from "react";
import { formatPrice, type Garment } from "@/lib/products";

type LightboxModalProps = {
  garment: Garment | null;
  onClose: () => void;
};

export function LightboxModal({ garment, onClose }: LightboxModalProps) {
  useEffect(() => {
    if (!garment) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [garment, onClose]);

  if (!garment) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />

      <div className="relative z-10 grid max-h-[90vh] w-full max-w-4xl overflow-hidden bg-surface shadow-2xl md:grid-cols-2">
        <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[28rem]">
          <Image
            src={garment.image}
            alt={garment.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary">
            {garment.note}
          </p>
          <h2
            id="lightbox-title"
            className="mt-3 font-serif text-4xl text-foreground"
          >
            {garment.name}
          </h2>
          <p className="mt-4 text-2xl font-medium text-accent">
            {formatPrice(garment.price)}
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            {garment.description}
          </p>
          <p className="mt-8 text-sm text-muted">
            Interested in this piece?{" "}
            <a href="/contact" className="text-accent underline-offset-2 hover:underline">
              Send an inquiry
            </a>
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-8 self-start text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:text-accent"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

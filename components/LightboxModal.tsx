"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { formatPrice, type Garment } from "@/lib/products";

type LightboxModalProps = {
  garment: Garment | null;
  onClose: () => void;
};

export function LightboxModal({ garment, onClose }: LightboxModalProps) {
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (!garment) return;

    scrollPositionRef.current = window.scrollY;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = "100%";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPositionRef.current);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [garment, onClose]);

  if (!garment) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center md:items-center md:p-8"
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

      <div className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto overscroll-contain bg-surface shadow-2xl md:grid md:max-h-[90vh] md:grid-cols-2 md:overflow-hidden">
        <div className="relative aspect-[4/5] max-h-[50vh] w-full shrink-0 md:aspect-auto md:max-h-none md:min-h-[28rem]">
          <Image
            src={garment.image}
            alt={garment.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col p-6 md:overflow-y-auto md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary">
            {garment.note}
          </p>
          <h2
            id="lightbox-title"
            className="mt-3 font-serif text-3xl text-foreground md:text-4xl"
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
            className="mt-8 mb-2 self-start text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:text-accent md:mb-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

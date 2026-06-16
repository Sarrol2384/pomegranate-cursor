import Image from "next/image";
import Link from "next/link";
import { MadeInBadge } from "@/components/MadeInBadge";

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  compact?: boolean;
  showMadeIn?: boolean;
};

export function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  compact = false,
  showMadeIn = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-end overflow-hidden ${
        compact ? "min-h-[40vh]" : "min-h-[85vh]"
      }`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/10" />

      <div className="relative z-10 w-full">
        <div className="container-main pb-16 pt-32 md:pb-24 md:pt-40">
          {showMadeIn && <MadeInBadge variant="light" className="mb-6" />}
          <h1 className="max-w-3xl text-5xl text-surface md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-lg text-surface/90 md:text-xl">
              {subtitle}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-10 inline-block border border-surface/60 bg-surface/10 px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-surface backdrop-blur-sm transition-colors hover:bg-surface hover:text-foreground"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

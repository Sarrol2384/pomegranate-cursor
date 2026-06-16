import Image from "next/image";
import Link from "next/link";
import { MadeInBadge } from "@/components/MadeInBadge";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section>
      <div className="w-full bg-white">
        <Image
          src={images.home.hero}
          alt={images.home.heroAlt}
          width={2400}
          height={1350}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="bg-foreground text-surface">
        <div className="container-main py-12 md:py-16">
          <MadeInBadge variant="light" className="mb-6" />
          <h1 className="max-w-3xl font-serif text-4xl md:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-surface/85 md:text-xl">
            {site.tagline}
          </p>
          <Link
            href="/lookbook"
            className="mt-8 inline-block bg-accent px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-surface transition-colors hover:bg-accent-hover"
          >
            View the Lookbook
          </Link>
        </div>
      </div>
    </section>
  );
}

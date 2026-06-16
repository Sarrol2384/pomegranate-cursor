import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { formatPrice, getFeaturedGarments } from "@/lib/products";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export default function Home() {
  const featured = getFeaturedGarments();

  return (
    <>
      <Hero
        title={site.name}
        subtitle={site.tagline}
        ctaLabel="View the Lookbook"
        ctaHref="/lookbook"
        imageSrc={images.home.hero}
        imageAlt={images.home.heroAlt}
      />

      <section className="py-20 md:py-28">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              eyebrow="Featured"
              title="From the collection"
              description="Each piece is designed, cut, and sewn by hand in our studio — limited runs, thoughtful details, fabrics chosen for how they feel against the skin."
            />
          </FadeIn>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((garment, index) => (
              <FadeIn key={garment.id} delay={index * 0.1}>
                <Link href="/lookbook" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-border">
                    <Image
                      src={garment.image}
                      alt={garment.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-2xl text-foreground transition-colors group-hover:text-accent">
                    {garment.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{garment.note}</p>
                  <p className="mt-2 font-medium text-foreground">
                    {formatPrice(garment.price)}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <Link
              href="/lookbook"
              className="inline-block border border-foreground px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-surface"
            >
              See full lookbook
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-main">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.home.maker}
                  alt={images.home.makerAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <SectionHeading
                eyebrow="Meet the maker"
                title="Every stitch tells a story"
                description={`${site.shortName} began in a spare room with a secondhand sewing machine and a drawer full of fabric scraps. Today, every garment still passes through the same careful hands — sketched, measured, and finished with the patience that only small-batch making allows.`}
              />
              <Link
                href="/about"
                className="mt-8 inline-block text-sm font-medium uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent-hover"
              >
                Read our story →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-foreground py-20 text-surface md:py-28">
        <div className="container-main text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl">
              Have a piece in mind?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-surface/80">
              Whether you&apos;re curious about a lookbook piece or dreaming up
              something custom, we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block bg-accent px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-surface transition-colors hover:bg-accent-hover"
            >
              Get in touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

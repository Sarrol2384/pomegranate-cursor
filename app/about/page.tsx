import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    `The story behind ${site.name} — handmade clothing crafted with care in our Strand studio.`,
};

const processSteps = [
  {
    title: "Sketch",
    description:
      "Every piece begins as a pencil drawing — proportions refined, details considered, always with the wearer in mind.",
    image: images.about.process.sketch,
    alt: images.about.process.sketchAlt,
  },
  {
    title: "Fabric",
    description:
      "We source natural fibers from trusted mills — linen, cotton, wool, and silk — chosen for texture, drape, and longevity.",
    image: images.about.process.fabric,
    alt: images.about.process.fabricAlt,
  },
  {
    title: "Stitch",
    description:
      "Cut, pinned, and sewn by hand in our studio. Each seam is pressed, each hem finished, each piece inspected before it leaves.",
    image: images.about.process.stitch,
    alt: images.about.process.stitchAlt,
  },
];

const values = [
  {
    title: "Small batches",
    description:
      "We make limited runs of each design. When a fabric is gone, that piece may not return — and we think that's a good thing.",
  },
  {
    title: "Quality materials",
    description:
      "Natural fibers that breathe, soften with wear, and age gracefully. No shortcuts, no synthetics unless they serve a purpose.",
  },
  {
    title: "Made in South Africa",
    description:
      "Every garment is designed and sewn in our Strand studio on the Western Cape coast — a local brand, made locally, for women who value craft over mass production.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="A studio, a sewing machine, and a belief that clothing should be made with intention."
        imageSrc={images.about.hero}
        imageAlt={images.about.heroAlt}
        compact
      />

      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={images.about.maker}
                  alt={images.about.makerAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <SectionHeading eyebrow="The maker" title="Hello, I'm Elena" />
              <div className="mt-8 space-y-6 text-muted">
                <p>
                  I started {site.shortName} because I couldn&apos;t find clothes
                  that felt like me — pieces that were beautiful without being
                  fussy, well-made without being precious, and honest about
                  where they came from.
                </p>
                <p>
                  My studio is a sunlit room at the back of an old brick
                  building. There&apos;s a cutting table scarred from years of
                  use, shelves lined with fabric bolts in every shade of earth,
                  and a radio that almost always plays something slow and warm.
                </p>
                <p>
                  I design for women who move through the world with quiet
                  confidence — who want to feel the quality of what they wear,
                  who appreciate the irregularity that comes from something made
                  by hand.
                </p>
                <p>
                  Sustainability isn&apos;t a marketing word here. It&apos;s the
                  natural outcome of making less, making better, and making
                  things people will keep for years.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              eyebrow="Process"
              title="How it's made"
              description="From the first line on paper to the final press, every step happens in-house."
              align="center"
            />
          </FadeIn>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-6 font-serif text-3xl text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted">{step.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              eyebrow="Values"
              title="What we stand for"
              align="center"
            />
          </FadeIn>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="border-t border-accent pt-6">
                  <h3 className="font-serif text-2xl text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-muted">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

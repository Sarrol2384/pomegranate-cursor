import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { MapEmbed } from "@/components/MapEmbed";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Get in touch with ${site.name} — inquiries about lookbook pieces, custom orders, and studio visits.`,
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="Questions about a piece, interested in a custom order, or want to visit the studio? We'd love to hear from you."
        imageSrc={images.contact.hero}
        imageAlt={images.contact.heroAlt}
        compact
      />

      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid gap-16 md:grid-cols-2">
            <FadeIn>
              <SectionHeading
                eyebrow="Contact"
                title="Send a message"
                description="We read every message personally and usually reply within two business days."
              />

              <div className="mt-10 space-y-6 text-muted">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-foreground transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
                    Studio
                  </p>
                  <p className="mt-1">
                    {site.address.venue}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.postalCode}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
                    WhatsApp
                  </p>
                  <p className="mt-1">{site.whatsapp.display}</p>
                  <WhatsAppButton className="mt-4" />
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
                    Hours
                  </p>
                  <p className="mt-1">
                    Studio visits by appointment only.
                    <br />
                    Tuesday – Saturday, 10am – 4pm
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-surface p-8 md:p-10">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20 md:py-28">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              eyebrow="Find us"
              title="Visit the studio"
              description={`We're located at ${site.address.full}. Tap the map to open directions in Google Maps.`}
            />
          </FadeIn>

          <FadeIn className="mt-12" delay={0.1}>
            <MapEmbed />
          </FadeIn>
        </div>
      </section>
    </>
  );
}

import { site } from "@/lib/site";

export function MapEmbed() {
  return (
    <div className="overflow-hidden border border-border bg-surface">
      <iframe
        title={`Map showing ${site.address.full}`}
        src={site.mapEmbedUrl}
        className="aspect-[16/10] w-full border-0 md:aspect-[21/9]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <p className="border-t border-border px-4 py-3 text-sm text-muted">
        <a
          href={site.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition-colors hover:text-accent-hover"
        >
          Open in Google Maps
        </a>
      </p>
    </div>
  );
}

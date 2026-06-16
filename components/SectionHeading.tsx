import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl text-foreground md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}

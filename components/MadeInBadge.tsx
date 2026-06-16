import { site } from "@/lib/site";

type MadeInBadgeProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function MadeInBadge({ variant = "dark", className = "" }: MadeInBadgeProps) {
  const styles =
    variant === "light"
      ? "border-surface/50 text-surface"
      : "border-border text-foreground";

  return (
    <p
      className={`inline-flex items-center gap-2.5 border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] ${styles} ${className}`}
    >
      <span className="flex gap-1" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#007A4D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFB612]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#DE3831]" />
      </span>
      {site.madeIn}
    </p>
  );
}

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label={`${site.name} home`}
    >
      <Image
        src="/promegranate-logo.png"
        alt={site.name}
        width={220}
        height={56}
        priority={priority}
        className="h-10 w-auto md:h-12"
      />
    </Link>
  );
}

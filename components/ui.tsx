import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  className = "",
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "gold" | "outline" | "ghost";
  className?: string;
} & Omit<ComponentProps<"a">, "ref" | "href">;

export function Button({
  children,
  href = "#",
  variant = "gold",
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-all duration-300";
  const variants: Record<string, string> = {
    gold: "bg-gold text-warm-white hover:bg-[#9c784d]",
    outline:
      "border border-charcoal/25 text-charcoal hover:border-gold hover:text-gold",
    ghost:
      "border border-warm-white/30 text-warm-white hover:border-gold hover:text-gold",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

/**
 * Scroll-reveal wrapper. Pure CSS — fades content up when it enters view via
 * the animation-timeline view() feature with a graceful fallback.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`animate-rise ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <span className={`block h-px w-full bg-charcoal/10 ${className}`} />;
}

export function Stat({
  value,
  label,
  variant = "dark",
}: {
  value: string;
  label: string;
  variant?: "dark" | "light";
}) {
  const valueColor = variant === "light" ? "text-warm-white" : "text-charcoal";
  const labelColor = variant === "light" ? "text-warm-white/60" : "text-muted";
  return (
    <div>
      <p className={`display text-4xl md:text-5xl ${valueColor}`}>{value}</p>
      <p
        className={`mt-2 text-[0.68rem] uppercase tracking-[0.22em] ${labelColor}`}
      >
        {label}
      </p>
    </div>
  );
}

import Link from "next/link";

/**
 * Arch mark — matches the DARAK brand identity:
 * outer house silhouette (two diagonal roof lines meeting at apex) + inner arch door.
 */
export function ArchMark({
  className = "",
  title = "DARAK",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 56 52"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      {/* Roof / house outline — two lines meeting at a peak */}
      <path
        d="M4 22 L28 2 L52 22"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Vertical sides going down */}
      <path
        d="M8 19 L8 50 M48 19 L48 50"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Inner arch door */}
      <path
        d="M20 50 L20 36 C20 29.37 23.58 25 28 25 C32.42 25 36 29.37 36 36 L36 50"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  className = "",
  showMark = true,
  size = "default",
}: {
  variant?: "dark" | "light";
  className?: string;
  showMark?: boolean;
  size?: "default" | "sm";
}) {
  const textColor = variant === "light" ? "text-warm-white" : "text-charcoal";
  const goldColor = variant === "light" ? "text-gold-soft" : "text-gold";

  return (
    <Link
      href="/"
      aria-label="DARAK — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      {showMark && (
        <ArchMark
          className={`${size === "sm" ? "h-7 w-6" : "h-9 w-8"} ${goldColor} transition-transform duration-500 group-hover:-translate-y-0.5`}
        />
      )}
      <span className="flex flex-col leading-none">
        {/* DARAK — DAR bold, AK lighter, slight tracking */}
        <span
          className={`font-sans ${size === "sm" ? "text-lg" : "text-xl"} tracking-[0.22em] ${textColor}`}
        >
          <span style={{ fontWeight: 700, letterSpacing: "0.22em" }}>DAR</span>
          <span style={{ fontWeight: 400, opacity: 0.85, letterSpacing: "0.22em" }}>AK</span>
        </span>
        {/* Tagline */}
        <span
          className={`mt-[3px] text-[0.48rem] uppercase tracking-[0.38em] ${goldColor}`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Private Food Systems
        </span>
      </span>
    </Link>
  );
}

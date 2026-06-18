import Image from "next/image";
import { ArchMark } from "./logo";

const TONES: Record<string, string> = {
  warm: "from-[#efe7da] via-[#e3d6c2] to-[#cdbfa6]",
  stone: "from-[#d9d0c2] via-[#cfc6b8] to-[#b9ad99]",
  olive: "from-[#8a987a] via-[#7d8c6b] to-[#5f6c50]",
  dark: "from-[#2a2825] via-[#201e1b] to-[#141312]",
  sand: "from-[#f1ebe0] via-[#e8dfd1] to-[#d8cbb4]",
};

/**
 * A composed visual — displays a real photo when `src` is provided, otherwise
 * falls back to the intentional gradient placeholder with arch motif.
 */
export function Visual({
  tone = "warm",
  caption,
  className = "",
  ratio = "aspect-[4/3]",
  mark = true,
  src,
  alt = "",
}: {
  tone?: keyof typeof TONES | string;
  caption?: string;
  className?: string;
  ratio?: string;
  mark?: boolean;
  src?: string;
  alt?: string;
}) {
  const dark = tone === "olive" || tone === "dark";

  return (
    <div
      className={`group relative overflow-hidden ${ratio} ${className} ${
        src ? "bg-stone-100" : `bg-gradient-to-br ${TONES[tone] ?? TONES.warm}`
      }`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <>
          {/* soft vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_70%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_30%_100%,rgba(0,0,0,0.22),transparent_60%)]" />
          {mark && (
            <ArchMark
              className={`absolute left-1/2 top-1/2 h-16 w-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-105 ${
                dark ? "text-warm-white/25" : "text-charcoal/15"
              }`}
            />
          )}
        </>
      )}

      {caption && (
        <span
          className={`absolute bottom-4 left-5 z-10 text-[0.62rem] uppercase tracking-[0.24em] ${
            src ? "text-white/80" : dark ? "text-warm-white/70" : "text-charcoal/55"
          }`}
        >
          {caption}
        </span>
      )}
    </div>
  );
}

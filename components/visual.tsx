import { ArchMark } from "./logo";

const TONES: Record<string, string> = {
  warm: "from-[#efe7da] via-[#e3d6c2] to-[#cdbfa6]",
  stone: "from-[#d9d0c2] via-[#cfc6b8] to-[#b9ad99]",
  olive: "from-[#8a987a] via-[#7d8c6b] to-[#5f6c50]",
  dark: "from-[#2a2825] via-[#201e1b] to-[#141312]",
  sand: "from-[#f1ebe0] via-[#e8dfd1] to-[#d8cbb4]",
};

/**
 * A composed visual placeholder standing in for the brand's natural-light food
 * photography. Renders an intentional gradient canvas with the arch motif and an
 * optional caption — never a broken image.
 */
export function Visual({
  tone = "warm",
  caption,
  className = "",
  ratio = "aspect-[4/3]",
  mark = true,
}: {
  tone?: keyof typeof TONES | string;
  caption?: string;
  className?: string;
  ratio?: string;
  mark?: boolean;
}) {
  const dark = tone === "olive" || tone === "dark";
  return (
    <div
      className={`group relative overflow-hidden bg-gradient-to-br ${
        TONES[tone] ?? TONES.warm
      } ${ratio} ${className}`}
    >
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

      {caption && (
        <span
          className={`absolute bottom-4 left-5 text-[0.62rem] uppercase tracking-[0.24em] ${
            dark ? "text-warm-white/70" : "text-charcoal/55"
          }`}
        >
          {caption}
        </span>
      )}
    </div>
  );
}

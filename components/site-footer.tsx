import Link from "next/link";
import { Logo } from "./logo";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "Our Approach", href: "/approach" },
      { label: "Services", href: "/services" },
      { label: "Our Food", href: "/food" },
      { label: "About Us", href: "/about" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Private Access", href: "/apply" },
      { label: "Contact", href: "/contact" },
      { label: "DARAK Upgrade", href: "/services#upgrade" },
      { label: "DARAK Placement", href: "/services#placement" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-warm-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-6 text-sm leading-relaxed text-warm-white/55">
              We build private food systems that deliver exceptional food,
              consistent performance and total peace of mind — wherever you live,
              work or perform.
            </p>
            <p className="mt-6 text-[0.7rem] uppercase tracking-[0.24em] text-gold">
              Private · Discreet · By referral only
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-warm-white/40">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline text-sm text-warm-white/75 hover:text-warm-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-warm-white/10 pt-8 text-[0.7rem] uppercase tracking-[0.2em] text-warm-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} DARAK — Private Food Systems</p>
          <p className="display text-base normal-case tracking-normal text-warm-white/60">
            French Excellence · Local Intelligence · Global Taste
          </p>
          <div className="flex gap-6">
            <span>United Arab Emirates</span>
            <Link href="/apply" className="text-gold hover:text-gold-soft">
              Apply
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

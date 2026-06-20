"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Icon } from "./icons";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Our Food", href: "#food" },
  { label: "Our Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(28,27,25,0.09)]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        <Logo variant="dark" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`py-1 text-[0.68rem] uppercase tracking-[0.18em] transition-colors ${
                transparent
                  ? "text-charcoal/60 hover:text-charcoal"
                  : "text-charcoal/55 hover:text-charcoal"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`hidden items-center gap-2 px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 lg:flex ${
              transparent
                ? "border border-charcoal/25 text-charcoal hover:border-gold hover:text-gold"
                : "bg-charcoal text-warm-white hover:bg-gold"
            }`}
          >
            Private Access
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-charcoal/70 hover:text-charcoal lg:hidden"
          >
            <Icon name={open ? "close" : "arrow"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-warm-white lg:hidden transition-[max-height] duration-500 ${
          open ? "max-h-[460px] border-t border-charcoal/8" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-charcoal/8 py-3.5 text-[0.72rem] uppercase tracking-[0.2em] text-charcoal/70"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-charcoal py-3.5 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-warm-white"
          >
            Private Access
          </a>
        </nav>
      </div>
    </header>
  );
}

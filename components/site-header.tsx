"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Icon } from "./icons";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Our Approach", href: "/approach" },
  { label: "Services", href: "/services" },
  { label: "Our Food", href: "/food" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* Only the home page gets the transparent treatment */
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(28,27,25,0.09)]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        {/* Logo — light on transparent, dark on solid */}
        <Logo variant={transparent ? "dark" : "dark"} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-[0.68rem] uppercase tracking-[0.18em] transition-colors ${
                  active
                    ? "text-charcoal"
                    : transparent
                    ? "text-charcoal/60 hover:text-charcoal"
                    : "text-charcoal/55 hover:text-charcoal"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/apply"
            className={`hidden items-center gap-2 px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 lg:flex ${
              transparent
                ? "border border-charcoal/25 text-charcoal hover:border-gold hover:text-gold"
                : "bg-charcoal text-warm-white hover:bg-gold"
            }`}
          >
            Private Access
          </Link>
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

      {/* Mobile drawer — always solid */}
      <div
        className={`overflow-hidden bg-warm-white lg:hidden transition-[max-height] duration-500 ${
          open ? "max-h-[460px] border-t border-charcoal/8" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-charcoal/8 py-3.5 text-[0.72rem] uppercase tracking-[0.2em] ${
                  active ? "text-gold" : "text-charcoal/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/apply"
            className="mt-4 bg-charcoal py-3.5 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-warm-white"
          >
            Private Access
          </Link>
        </nav>
      </div>
    </header>
  );
}

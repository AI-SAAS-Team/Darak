import Image from "next/image";
import Link from "next/link";
import { Button, Container, Eyebrow, Reveal, Section, Stat } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Visual } from "@/components/visual";
import {
  AUDIENCES,
  ENVIRONMENTS,
  HERO_PILLARS,
  METHOD,
  PROBLEMS,
  SERVICES,
  SOLUTION_POINTS,
  STATS,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — split layout, cream bg, food photo
          ══════════════════════════════════════════ */}
      {/* -mt-[72px] remonte la section DERRIÈRE le header sticky (hauteur réelle ~72px)  */}
      <section
        className="relative overflow-hidden -mt-[72px]"
        style={{ backgroundColor: "#ede8df", minHeight: "calc(88vh + 72px)" }}
      >
        {/* ── Food photo ─ right column ── */}
        <div className="absolute inset-y-0 right-0 w-[62%]">
          {/* gradient fade merging photo into cream bg on the left */}
          <div
            className="absolute inset-y-0 left-0 z-10 w-36 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #ede8df, transparent)",
            }}
          />
          <Image
            src="/hero.jpg"
            alt="Signature plated dish — private residence"
            fill
            className="object-cover object-center"
            priority
          />
          {/* subtle vignette bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(237,232,223,0.7), transparent)",
            }}
          />
        </div>

        {/* ── Text content ─ left column — pt-[65px] pour compenser le -mt ── */}
        <div className="relative z-20 flex w-full max-w-7xl mx-auto px-10 items-center" style={{ minHeight: "calc(88vh + 72px)" }}>
          <div className="w-[44%] flex flex-col justify-center pt-[72px] pb-16">

            <h1
              className="display leading-[0.96] text-charcoal"
              style={{ fontSize: "clamp(3rem, 4.5vw, 5rem)" }}
            >
              Elevating
              <br />
              the standard
              <br />
              of{" "}
              <span style={{ color: "#b08a5e" }}>your home.</span>
            </h1>

            <p className="mt-6 text-[0.92rem] leading-relaxed text-charcoal/65 max-w-[340px]">
              We build private food systems that deliver exceptional food,
              consistent performance and total peace of mind — at home.
            </p>

            {/* Pillars */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-5">
              {HERO_PILLARS.map((p) => (
                <div key={p.label} className="flex flex-col items-center gap-2 min-w-[72px]">
                  <Icon name={p.icon} className="h-6 w-6 text-charcoal/60" />
                  <span className="text-[0.58rem] uppercase tracking-[0.18em] text-charcoal/55 text-center leading-tight">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-start gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-3 px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-warm-white transition-colors"
                style={{ backgroundColor: "#b08a5e" }}
              >
                Apply For Private Access
                <span className="text-xs">→</span>
              </Link>
              <p className="text-[0.6rem] uppercase tracking-[0.24em] text-charcoal/45">
                Private. Discreet. By referral only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
          ══════════════════════════════════════════ */}
      <section className="border-y border-charcoal/10 bg-warm-white">
        <Container className="grid items-center gap-10 py-10 md:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="display text-4xl text-charcoal">{s.value}</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <figure className="border-l border-gold/40 pl-6">
            <blockquote className="display text-lg leading-snug text-charcoal italic">
              "The level of consistency and quality is what makes DARAK
              different."
            </blockquote>
            <figcaption className="mt-3 text-[0.62rem] uppercase tracking-[0.22em] text-muted">
              — Private client, Dubai
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          PROBLEM / SOLUTION
          ══════════════════════════════════════════ */}
      <Section>
        <Container className="grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="display mt-5 text-3xl leading-tight md:text-4xl">
              You have everything.
              <br />
              Except consistency in your food.
            </h2>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-muted max-w-md">
              Managing food at a high level is complex and time-consuming.
              Inconsistent quality, lack of structure and unreliable teams quietly
              drain your performance, your energy and your peace of mind.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Inconsistent meals and quality",
                "Unreliable staff and high turnover",
                "Lack of structure and systems",
                "Not aligned with your goals",
                "You waste time on food",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[0.9rem] text-charcoal/75">
                  <Icon name="close" className="h-4 w-4 shrink-0 text-charcoal/35" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Our Solution</Eyebrow>
            <h2 className="display mt-5 text-3xl leading-tight md:text-4xl">
              We install a private food system that works for you.
            </h2>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-muted max-w-md">
              We design, set up and manage a tailored food system that delivers
              the right food, at the right time — with zero stress and maximum
              consistency.
            </p>
            <ul className="mt-8 space-y-3">
              {SOLUTION_POINTS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[0.9rem] text-charcoal/80">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-olive" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* ══════════════════════════════════════════
          SERVICES
          ══════════════════════════════════════════ */}
      <section className="bg-ink text-warm-white">
        <Container className="py-20 md:py-28">
          <div className="text-center">
            <Eyebrow className="!text-gold-soft">Our Services</Eyebrow>
            <h2 className="display mt-5 text-4xl md:text-5xl">
              Two ways to elevate your food.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="group flex flex-col bg-white/[0.04] p-8 ring-1 ring-white/10 transition hover:ring-gold/40 md:p-10"
              >
                <Visual tone="dark" ratio="aspect-[16/9]" caption={svc.title} className="mb-8" />
                <div className="flex items-baseline gap-4">
                  <span className="display text-2xl text-gold-soft">{svc.number}</span>
                  <h3 className="display text-2xl md:text-3xl">{svc.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-warm-white/60">{svc.intro}</p>
                <ul className="mt-6 space-y-2.5">
                  {svc.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[0.86rem] text-warm-white/75">
                      <Icon name="check" className="h-4 w-4 text-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${svc.id}`}
                  className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-gold-soft transition hover:text-warm-white"
                >
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Environments */}
          <div className="mt-20 border-t border-white/10 pt-12 text-center">
            <Eyebrow className="!text-warm-white/40">Where We Operate</Eyebrow>
            <p className="display mt-4 text-2xl text-warm-white/90 md:text-3xl">
              Anywhere you live, train or perform.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-8">
              {ENVIRONMENTS.map((env) => (
                <div key={env.label} className="flex flex-col items-center gap-3">
                  <Icon name={env.icon} className="h-7 w-7 text-gold" />
                  <span className="text-[0.66rem] uppercase tracking-[0.16em] text-warm-white/55">
                    {env.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          WHO WE SERVE
          ══════════════════════════════════════════ */}
      <Section>
        <Container>
          <div className="max-w-xl">
            <Eyebrow>Who We Serve</Eyebrow>
            <h2 className="display mt-5 text-4xl leading-tight md:text-5xl">
              Built for people who expect more.
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden bg-charcoal/10 md:grid-cols-3">
            {AUDIENCES.map((a) => (
              <div
                key={a.title}
                className="bg-warm-white p-8 transition-colors hover:bg-sand/50 md:p-10"
              >
                <h3 className="display text-xl text-charcoal md:text-2xl">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ══════════════════════════════════════════
          PROBLEMS
          ══════════════════════════════════════════ */}
      <section className="bg-sand/40">
        <Container className="py-20 md:py-28">
          <div className="max-w-xl">
            <Eyebrow>The Problems We Solve</Eyebrow>
            <h2 className="display mt-5 text-3xl leading-tight md:text-4xl">
              You already know the symptoms.
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {PROBLEMS.map((p) => (
              <div key={p.quote} className="border-l-2 border-gold/40 pl-6">
                <p className="display text-xl italic text-charcoal/80">"{p.quote}"</p>
                <p className="mt-2 text-[0.88rem] font-medium text-olive">{p.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          METHOD
          ══════════════════════════════════════════ */}
      <Section>
        <Container>
          <div className="text-center">
            <Eyebrow>Our 5-Step System</Eyebrow>
            <h2 className="display mt-5 text-4xl md:text-5xl">
              From strategy to execution.
            </h2>
          </div>
          <ol className="mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
            {METHOD.map((m, i) => (
              <li key={m.step} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon name={m.icon} className="h-5 w-5" />
                </div>
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                  {m.step}
                </p>
                <h3 className="display mt-1 text-xl text-charcoal">{m.title}</h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-muted">{m.body}</p>
                {i < METHOD.length - 1 && (
                  <span className="absolute right-[-0.75rem] top-5 hidden h-px w-6 bg-charcoal/15 md:block" />
                )}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ══════════════════════════════════════════
          CLOSING CTA
          ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-ink text-warm-white">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_85%,rgba(176,138,94,0.18),transparent_55%)]" />
        <Container className="relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h2 className="display text-4xl leading-tight md:text-5xl">
              Your lifestyle is elite.
              <br />
              <span className="italic" style={{ color: "#c4a479" }}>
                Your food should be too.
              </span>
            </h2>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-warm-white/60 max-w-md">
              Let us build your private food system and handle the execution.
              You focus on everything else.
            </p>
            <div className="mt-9">
              <Link
                href="/apply"
                className="inline-flex items-center gap-3 px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-warm-white transition-colors"
                style={{ backgroundColor: "#b08a5e" }}
              >
                Apply For Private Access <span>→</span>
              </Link>
            </div>
            <p className="mt-5 text-[0.6rem] uppercase tracking-[0.22em] text-warm-white/35">
              Private · Discreet · By referral only
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { icon: "lock" as const, title: "Discreet & Confidential", body: "Your privacy is our priority." },
              { icon: "sparkle" as const, title: "Tailored To You", body: "Every detail is customized." },
              { icon: "shield" as const, title: "Consistent & Reliable", body: "Results you can count on." },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4 border-t border-white/10 pt-5">
                <Icon name={c.icon} className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-[0.8rem] font-medium uppercase tracking-[0.14em] text-warm-white/90">
                    {c.title}
                  </p>
                  <p className="mt-1 text-[0.86rem] text-warm-white/50">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

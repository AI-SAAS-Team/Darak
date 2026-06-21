import Image from "next/image";
import { Container, Eyebrow, Section } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Visual } from "@/components/visual";
import {
  FOUNDERS,
  HERO_PILLARS,
  METHOD,
  SERVICES,
  SOLUTION_POINTS,
  STATS,
  TECHNOLOGY,
} from "@/lib/content";

const SIGNATURE_DISHES = [
  {
    src: "/food-1.jpg",
    alt: "Slow-braised lamb shank with pomegranate",
    name: "Slow-braised Lamb",
    sub: "Pomegranate reduction · toasted pine nuts",
    tags: ["Michelin Technique", "Rich in Iron", "Performance Meal"],
  },
  {
    src: "/food-5.jpg",
    alt: "Seared sea bass with saffron sauce",
    name: "Seared Sea Bass",
    sub: "Saffron & citrus velouté · micro herbs",
    tags: ["High Protein", "Anti-Inflammatory", "Clean Ingredients"],
  },
  {
    src: "/food-7.jpg",
    alt: "Recovery bowl with salmon, edamame and avocado",
    name: "Recovery Bowl",
    sub: "Salmon · edamame · avocado · sesame",
    tags: ["Macro-Balanced", "Recovery", "Omega-3 Rich"],
  },
];

const QUALITY_PILLARS = [
  { label: "High Protein", sub: "To build & recover" },
  { label: "Balanced Macros", sub: "For energy & performance" },
  { label: "Clean Ingredients", sub: "No junk. Ever." },
  { label: "Michelin Technique", sub: "Every single plate" },
];

const GALLERY: { tone: string; caption: string; span?: string; ratio?: string; src?: string; alt?: string }[] = [
  { tone: "warm", caption: "Slow-braised lamb · pomegranate", ratio: "aspect-[4/3]", src: "/food-1.jpg", alt: "Slow-braised lamb shank with pomegranate on dark plate" },
  { tone: "stone", caption: "Heritage tomato · stone fruit", src: "/food-2.jpg", alt: "Heritage heirloom tomatoes with stone fruit on slate" },
  { tone: "olive", caption: "Garden greens · herb oil", src: "/food-3.jpg", alt: "Garden greens with herb oil in ceramic bowl" },
  { tone: "sand",  caption: "Stone-baked sourdough", src: "/food-4.jpg", alt: "Artisan sourdough loaf with butter on linen" },
  { tone: "dark",  caption: "Seared catch · saffron", src: "/food-5.jpg", alt: "Seared sea bass with saffron sauce on dark plate" },
  { tone: "warm",  caption: "Citrus & olive · cold-pressed", span: "sm:col-span-2", ratio: "aspect-[16/9]", src: "/food-6.jpg", alt: "Blood oranges, lemons and olives with cold-pressed olive oil on travertine" },
  { tone: "stone", caption: "Recovery bowl · macro-balanced", src: "/food-7.jpg", alt: "Macro-balanced recovery bowl with salmon, edamame and avocado" },
];

const VALUES = ["Excellence", "Precision", "Simplicity", "Consistency", "Adaptability", "Performance", "Taste first"];

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section
        className="relative overflow-hidden -mt-[72px] min-h-[calc(70vh+72px)] md:min-h-[calc(88vh+72px)]"
        style={{ backgroundColor: "#ede8df" }}
      >
        {/* Image — full background on mobile, right column on desktop */}
        <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-[40%] md:w-auto">
          {/* Left cream fade — desktop only */}
          <div
            className="absolute inset-y-0 left-0 z-10 w-0 md:w-40 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ede8df, transparent)" }}
          />
          {/* Mobile cream overlay for text legibility */}
          <div
            className="absolute inset-0 z-10 pointer-events-none md:hidden"
            style={{ background: "linear-gradient(to top, #ede8df 45%, rgba(237,232,223,0.55) 100%)" }}
          />
          <Image
            src="/hero.jpg"
            alt="Signature plated dish — private residence"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Bottom vignette */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(237,232,223,0.8), transparent)" }}
          />
        </div>

        {/* Text */}
        <div
          className="relative z-20 flex w-full max-w-7xl mx-auto px-6 md:px-10 items-end md:items-center min-h-[calc(70vh+72px)] md:min-h-[calc(88vh+72px)]"
        >
          <div className="w-full md:w-[46%] flex flex-col justify-end md:justify-center pt-[72px] pb-14 md:pb-16">
            <h1
              className="display leading-[0.94] text-charcoal"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            >
              Elevating
              <br />
              the standard
              <br />
              of{" "}
              <span style={{ color: "#b08a5e" }}>your home.</span>
            </h1>

            <p className="mt-5 text-[0.9rem] leading-relaxed text-charcoal/65 max-w-[320px] md:max-w-[340px]">
              We build private food systems that deliver exceptional food,
              consistent performance and total peace of mind — at home.
            </p>

            {/* Pillars — hidden on mobile to keep hero clean */}
            <div className="mt-8 hidden sm:flex flex-wrap gap-x-6 gap-y-4">
              {HERO_PILLARS.map((p) => (
                <div key={p.label} className="flex flex-col items-center gap-2 min-w-[64px]">
                  <Icon name={p.icon} className="h-5 w-5 text-charcoal/60" />
                  <span className="text-[0.55rem] uppercase tracking-[0.16em] text-charcoal/50 text-center leading-tight">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 flex flex-col items-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-warm-white transition-colors"
                style={{ backgroundColor: "#b08a5e" }}
              >
                Apply For Private Access
                <span>→</span>
              </a>
              <p className="text-[0.58rem] uppercase tracking-[0.22em] text-charcoal/40">
                Private. Discreet. By referral only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="border-y border-charcoal/10 bg-warm-white">
        <Container className="py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center md:gap-10">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-12">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="display text-4xl text-charcoal">{s.value}</p>
                  <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted">{s.label}</p>
                </div>
              ))}
            </div>
            <figure className="border-l border-gold/40 pl-6">
              <blockquote className="display text-base leading-snug text-charcoal italic md:text-lg">
                "The level of consistency and quality is what makes DARAK different."
              </blockquote>
              <figcaption className="mt-3 text-[0.6rem] uppercase tracking-[0.22em] text-muted">
                — Private client, Dubai
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* ══ PROBLEM / SOLUTION ══ */}
      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <Eyebrow>The Problem</Eyebrow>
              <h2 className="display mt-4 text-3xl leading-tight md:text-4xl">
                You have everything.
                <br />
                Except consistency in your food.
              </h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                Inconsistent quality, lack of structure and unreliable teams quietly drain your performance, your energy and your peace of mind.
              </p>
              <ul className="mt-6 space-y-3">
                {["Inconsistent meals and quality", "Unreliable staff and high turnover", "Lack of structure and systems", "Not aligned with your goals", "You waste time on food"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.88rem] text-charcoal/75">
                    <Icon name="close" className="h-4 w-4 shrink-0 text-charcoal/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 md:pt-0">
              <Eyebrow>Our Solution</Eyebrow>
              <h2 className="display mt-4 text-3xl leading-tight md:text-4xl">
                We install a private food system that works for you.
              </h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                We design, set up and manage a tailored food system that delivers the right food, at the right time — with zero stress and maximum consistency.
              </p>
              <ul className="mt-6 space-y-3">
                {SOLUTION_POINTS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.88rem] text-charcoal/80">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-olive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ══ SIGNATURE DISHES ══ */}
      <section className="bg-sand/30 py-16 md:py-28">
        <Container>
          {/* Header + pillars */}
          <div className="mb-10 md:mb-0 md:grid md:grid-cols-[1fr_2.6fr] md:gap-20 md:items-start">
            <div className="md:sticky md:top-28">
              <Eyebrow>What We Create</Eyebrow>
              <h2 className="display mt-4 text-3xl leading-tight md:text-5xl">
                Real food.
                <br />
                <span className="text-gold-soft italic">Real results.</span>
              </h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted max-w-xs">
                Every dish is crafted with precision, using clean ingredients and chef-level technique.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 md:block md:space-y-4">
                {QUALITY_PILLARS.map((p) => (
                  <li key={p.label} className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-charcoal">{p.label}</p>
                      <p className="text-[0.78rem] text-muted">{p.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Dish cards on mobile — inline, on desktop — right column */}
            </div>

            {/* Dish cards */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-0">
              {SIGNATURE_DISHES.map((dish) => (
                <article key={dish.name} className="group flex flex-col overflow-hidden bg-warm-white shadow-[0_2px_20px_rgba(28,27,25,0.06)]">
                  <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden">
                    <Image
                      src={dish.src}
                      alt={dish.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="flex flex-col flex-1 p-4 md:p-5">
                    <h3 className="display text-lg text-charcoal md:text-xl">{dish.name}</h3>
                    <p className="mt-1 text-[0.78rem] leading-relaxed text-muted">{dish.sub}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {dish.tags.map((tag) => (
                        <span key={tag} className="border border-charcoal/12 px-2 py-1 text-[0.56rem] uppercase tracking-[0.14em] text-charcoal/55">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" className="scroll-mt-20 py-16 md:py-28">
        <Container className="space-y-16 md:space-y-28">
          <div>
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="display mt-4 text-3xl leading-tight md:text-5xl md:max-w-xl">
              Two ways to elevate your food.
            </h2>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-muted max-w-md">
              Whether you have a team that needs structure or need someone exceptional from scratch — we install the system around you.
            </p>
          </div>

          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Visual
                src={["/service-upgrade.jpg", "/service-placement.jpg"][i] ?? undefined}
                alt={svc.title}
                tone={i % 2 === 0 ? "warm" : "stone"}
                ratio="aspect-[4/3]"
                caption={svc.title}
              />
              <div>
                <span className="display text-xl text-gold">{svc.number}</span>
                <h3 className="display mt-2 text-3xl leading-tight md:text-4xl">{svc.title}</h3>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">{svc.intro}</p>
                <ul className="mt-6 space-y-2.5">
                  {svc.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[0.88rem] text-charcoal/80">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-olive" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 border border-charcoal/25 px-6 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-charcoal transition-colors hover:border-gold hover:text-gold"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* ══ TECHNOLOGY ══ */}
      <section className="bg-ink text-warm-white">
        <Container className="py-16 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-20">
            <div>
              <Eyebrow className="!text-gold-soft">Technology</Eyebrow>
              <h2 className="display mt-4 text-2xl leading-tight md:text-4xl">
                Powered by proprietary AI. Built to amplify chefs — never replace them.
              </h2>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-warm-white/60">
                Our platform turns culinary craft into a repeatable operating system — so quality never depends on memory, mood or who happens to be in the kitchen.
              </p>
              <div className="mt-7 flex items-center gap-3 text-gold-soft">
                <Icon name="cpu" className="h-7 w-7" />
                <span className="text-[0.72rem] uppercase tracking-[0.2em]">The DARAK platform</span>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-px overflow-hidden bg-white/10 sm:grid-cols-2">
              {TECHNOLOGY.map((t) => (
                <li key={t} className="flex items-center gap-3 bg-ink px-4 py-3.5 text-[0.82rem] text-warm-white/80 md:px-5 md:py-4">
                  <Icon name="sparkle" className="h-4 w-4 shrink-0 text-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ══ FOOD GALLERY ══ */}
      <section id="food" className="scroll-mt-20 py-16 md:py-28">
        <Container>
          <div className="mb-10 md:mb-14">
            <Eyebrow>Our Food</Eyebrow>
            <h2 className="display mt-4 text-3xl leading-tight md:text-5xl">
              Extraordinary food.
              <br />
              <span className="text-gold-soft italic">Reproducible every day.</span>
            </h2>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-muted max-w-md">
              Natural light, visible textures, real sauces. No stock photos — only food a trained kitchen can deliver consistently.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {GALLERY.map((g, i) => (
              <Visual
                key={i}
                tone={g.tone}
                caption={g.caption}
                mark={false}
                ratio={g.ratio ?? "aspect-[4/3]"}
                className={`${g.span ?? ""} h-full`}
                src={g.src}
                alt={g.alt}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ══ APPROACH / METHOD ══ */}
      <section id="approach" className="scroll-mt-20 bg-sand/40">
        <Container className="py-16 md:py-28">
          <div className="max-w-xl">
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="display mt-4 text-3xl leading-tight md:text-5xl">
              From strategy to execution, in five steps.
            </h2>
          </div>

          <div className="mt-10 space-y-px overflow-hidden bg-charcoal/10 md:mt-14">
            {METHOD.map((m) => (
              <div key={m.step} className="bg-warm-white px-5 py-6 md:px-10 md:py-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="display text-3xl text-gold/50 md:text-5xl">{m.step}</span>
                  <Icon name={m.icon} className="h-6 w-6 text-gold" />
                  <h3 className="display text-xl text-charcoal md:text-2xl">{m.title}</h3>
                </div>
                <p className="text-[0.88rem] leading-relaxed text-muted md:pl-[calc(3rem+1.5rem+1rem)]">{m.body}</p>
              </div>
            ))}
          </div>

          {/* Nutrition */}
          <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:items-center md:gap-20">
            <Visual src="/nutrition.jpg" alt="Performance plating — salmon with greens" ratio="aspect-[4/3]" caption="Performance plating" />
            <div>
              <Eyebrow>Nutrition</Eyebrow>
              <h2 className="display mt-4 text-2xl leading-tight md:text-4xl">We turn science into food.</h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                DARAK works alongside your physicians, nutritionists, dieticians and performance coaches — translating their requirements into meals your kitchen can execute, and you&apos;ll actually want to eat.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Physicians", "Nutritionists", "Dieticians", "Performance Coaches"].map((role) => (
                  <li key={role} className="border border-charcoal/15 px-3 py-2 text-[0.68rem] uppercase tracking-[0.14em] text-charcoal/70">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ OUR CHEF ══ */}
      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-20">
            <Visual tone="dark" ratio="aspect-[4/3] md:aspect-[4/5]" caption="Our Chef · 25 years of mastery" />
            <div>
              <Eyebrow>Our Chef</Eyebrow>
              <h2 className="display mt-4 text-3xl leading-tight md:text-5xl">
                25 years of experience.{" "}
                <span className="text-gold-soft italic">Michelin-starred standards.</span>
              </h2>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-muted">
                Born in Morocco and trained in France, our chef has spent over 25 years mastering his craft in high-level kitchens, including Michelin-starred restaurants.
              </p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">
                After earning his CAP, he worked alongside renowned chefs such as Joël Robuchon, Christian Constant and Gordon Ramsay, building a strong foundation in precision, discipline and excellence.
              </p>
              <ul className="mt-7 space-y-2.5">
                {[
                  "French gastronomy & fine dining",
                  "Healthy & performance-focused cuisine",
                  "Italian & Oriental cuisine",
                  "Menu creation & team training",
                  "Premium culinary operations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.88rem] text-charcoal/80">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-olive" />
                    {item}
                  </li>
                ))}
              </ul>
              <blockquote className="mt-8 border-l-2 border-gold/40 pl-5 display text-lg italic text-charcoal/70">
                &ldquo;One goal: consistency at the highest level.&rdquo;
              </blockquote>
            </div>
          </div>
        </Container>
      </Section>

      {/* ══ ABOUT / FOUNDERS ══ */}
      <section id="about" className="scroll-mt-20">
        <Container className="py-16 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20 mb-12 md:mb-20">
            <div>
              <Eyebrow>About DARAK</Eyebrow>
              <h2 className="display mt-4 text-3xl leading-tight md:text-4xl">
                You invest in everything. Except the thing you do three times a day.
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[0.9rem] leading-relaxed text-muted">
                People invest fortunes into their home, their car, their watch, their health. Yet food — the one ritual repeated every single day — remains inconsistent. DARAK exists to fix exactly that.
              </p>
              <p className="mt-5 display text-xl leading-snug text-charcoal md:text-2xl">
                Because excellence should never depend on who&apos;s in the kitchen.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {VALUES.map((v) => (
              <span key={v} className="border border-charcoal/15 px-4 py-2 text-[0.72rem] uppercase tracking-[0.12em] text-charcoal/70 md:px-5 md:py-2.5 md:text-[0.78rem]">
                {v}
              </span>
            ))}
          </div>
        </Container>

        {/* Founders */}
        <div className="bg-ink text-warm-white">
          <Container className="py-16 md:py-28">
            <div>
              <Eyebrow className="!text-gold-soft">The Founders</Eyebrow>
              <h2 className="display mt-4 text-3xl leading-tight md:text-5xl">Two obsessions, one standard.</h2>
            </div>
            <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-10">
              {FOUNDERS.map((f) => (
                <article key={f.name} className="flex flex-col">
                  <Visual tone="dark" ratio="aspect-[4/3]" caption={f.name} />
                  <div className="mt-6">
                    <h3 className="display text-2xl md:text-3xl">{f.name}</h3>
                    <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-gold">{f.role}</p>
                    <p className="mt-4 text-[0.9rem] leading-relaxed text-warm-white/65">{f.bio}</p>
                    <ul className="mt-5 space-y-2">
                      {f.expertise.map((e) => (
                        <li key={e} className="flex items-center gap-3 text-[0.84rem] text-warm-white/75">
                          <Icon name="check" className="h-4 w-4 shrink-0 text-gold" />
                          {e}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 border-l border-gold/40 pl-4 display text-base italic text-warm-white/80 md:text-lg">
                      &ldquo;{f.obsession}&rdquo;
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="scroll-mt-20 bg-warm-white">
        <Container className="py-16 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="display mt-4 text-3xl leading-tight md:text-5xl">
                Let&apos;s talk,{" "}
                <span className="text-gold-soft italic">privately.</span>
              </h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                The fastest way to begin is to apply for private access. For anything else, reach us directly.
              </p>

              <dl className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
                {[
                  { label: "Enquiries", value: "private@darak.com", href: "mailto:private@darak.com" },
                  { label: "Based in", value: "United Arab Emirates" },
                  { label: "Operating", value: "UAE · GCC · International" },
                ].map((d) => (
                  <div key={d.label} className="flex items-center justify-between py-4">
                    <dt className="text-[0.64rem] uppercase tracking-[0.18em] text-muted">{d.label}</dt>
                    <dd className="text-[0.9rem] text-charcoal">
                      {d.href ? (
                        <a href={d.href} className="hover:text-gold transition-colors">{d.value}</a>
                      ) : d.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex gap-3">
                {["Instagram", "WhatsApp"].map((s) => (
                  <a key={s} href="#" className="border border-charcoal/15 px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.14em] text-charcoal/70 transition-colors hover:border-gold hover:text-gold">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-ink p-8 text-warm-white md:p-12">
              <Icon name="lock" className="h-7 w-7 text-gold md:h-8 md:w-8" />
              <h3 className="display mt-5 text-2xl leading-tight md:text-3xl">By application only.</h3>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-warm-white/60">
                We take on a limited number of engagements to protect quality and discretion. The application takes two minutes and is reviewed personally.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:private@darak.com"
                  className="inline-flex items-center gap-3 bg-gold px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-warm-white transition-colors hover:bg-gold-soft"
                >
                  Apply For Private Access <span>→</span>
                </a>
              </div>
              <div className="mt-7 space-y-3">
                {[
                  { icon: "lock" as const, text: "Discreet & confidential" },
                  { icon: "sparkle" as const, text: "Tailored to you" },
                  { icon: "shield" as const, text: "Consistent & reliable" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-3 text-[0.84rem] text-warm-white/60">
                    <Icon name={c.icon} className="h-4 w-4 shrink-0 text-gold" />
                    {c.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

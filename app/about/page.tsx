import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Visual } from "@/components/visual";
import { FOUNDERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "DARAK is a premium food transformation company in the UAE — a unique combination of French culinary excellence and operational mastery. Meet Omar and Karim.",
};

const VALUES = [
  "Excellence",
  "Precision",
  "Simplicity",
  "Consistency",
  "Adaptability",
  "Luxury without ostentation",
  "Performance",
  "Taste first",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            A combination of culinary excellence and{" "}
            <span className="text-gold-soft italic">operational mastery.</span>
          </>
        }
        intro="French training, international experience and a shared vision: bring chef-level food and systems to any environment."
      />

      {/* Why we exist */}
      <Section>
        <Container className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Eyebrow>Why We Exist</Eyebrow>
            <h2 className="display mt-5 text-3xl leading-tight md:text-4xl">
              You invest in everything. Except the thing you do three times a day.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[0.95rem] leading-relaxed text-muted">
              People invest fortunes into their home, their car, their watch, their
              health, their gym, their business. Yet food — the one ritual repeated
              every single day — remains inconsistent. DARAK exists to fix exactly
              that.
            </p>
            <p className="mt-6 display text-2xl leading-snug text-charcoal">
              Because excellence should never depend on who&apos;s in the kitchen.
            </p>
          </div>
        </Container>
      </Section>

      {/* Founders */}
      <section className="bg-ink text-warm-white">
        <Container className="py-20 md:py-28">
          <div className="max-w-xl">
            <Eyebrow className="!text-gold-soft">The Founders</Eyebrow>
            <h2 className="display mt-5 text-4xl leading-tight md:text-5xl">
              Two obsessions, one standard.
            </h2>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-10">
            {FOUNDERS.map((f) => (
              <article key={f.name} className="flex flex-col">
                <Visual tone="dark" ratio="aspect-[4/3]" caption={f.name} />
                <div className="mt-7">
                  <h3 className="display text-3xl">{f.name}</h3>
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-gold">
                    {f.role}
                  </p>
                  <p className="mt-5 text-[0.95rem] leading-relaxed text-warm-white/65">
                    {f.bio}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {f.expertise.map((e) => (
                      <li key={e} className="flex items-center gap-3 text-[0.86rem] text-warm-white/75">
                        <Icon name="check" className="h-4 w-4 shrink-0 text-gold" />
                        {e}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-l border-gold/40 pl-5 display text-lg italic text-warm-white/85">
                    “{f.obsession}”
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <Section>
        <Container>
          <div className="max-w-xl">
            <Eyebrow>Brand Values</Eyebrow>
            <h2 className="display mt-5 text-4xl leading-tight md:text-5xl">
              What we hold to.
            </h2>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {VALUES.map((v) => (
              <span
                key={v}
                className="border border-charcoal/15 px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.14em] text-charcoal/75"
              >
                {v}
              </span>
            ))}
          </div>
          <div className="mt-14">
            <Button href="/apply">Apply For Private Access</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Visual } from "@/components/visual";
import { DIFFERENTIATORS, METHOD } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Most healthy food is boring. Most gourmet food is impossible to reproduce. DARAK builds food systems that make extraordinary food reproducible every day.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Approach"
        title={
          <>
            We don&apos;t cook.
            <br />
            <span className="text-gold-soft italic">We build kitchens that perform.</span>
          </>
        }
        intro="We bring Michelin-level know-how into real life — through structured systems anyone can execute consistently."
      />

      {/* Philosophy */}
      <Section>
        <Container className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Eyebrow>Our Philosophy</Eyebrow>
            <div className="mt-6 space-y-5 text-2xl leading-snug display text-charcoal/80">
              <p>Most healthy food is boring.</p>
              <p>Most gourmet food is impossible to reproduce.</p>
              <p>Most private chefs disappear.</p>
              <p>Most staff repeat the same recipes forever.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="display text-3xl leading-tight text-charcoal md:text-4xl">
              DARAK solves this. We make extraordinary food that can actually be
              reproduced — every single day.
            </p>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-muted">
              We don&apos;t sell catering. We don&apos;t sell meal plans. We
              don&apos;t sell consulting. We install complete food systems
              wherever our clients live, work or perform — and we make them
              sustainable long after we leave the kitchen.
            </p>
          </div>
        </Container>
      </Section>

      {/* Method detailed */}
      <section className="bg-sand/40">
        <Container className="py-20 md:py-28">
          <div className="max-w-xl">
            <Eyebrow>Our Method</Eyebrow>
            <h2 className="display mt-5 text-4xl leading-tight md:text-5xl">
              From strategy to execution, in five steps.
            </h2>
          </div>
          <div className="mt-14 space-y-px overflow-hidden bg-charcoal/10">
            {METHOD.map((m) => (
              <div
                key={m.step}
                className="grid items-center gap-6 bg-warm-white px-6 py-8 md:grid-cols-[auto_1fr_2fr] md:gap-10 md:px-10"
              >
                <span className="display text-5xl text-gold/60">{m.step}</span>
                <div className="flex items-center gap-4">
                  <Icon name={m.icon} className="h-7 w-7 text-gold" />
                  <h3 className="display text-2xl text-charcoal">{m.title}</h3>
                </div>
                <p className="text-[0.95rem] leading-relaxed text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <Section>
        <Container className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-20">
          <Visual tone="olive" ratio="aspect-[4/5]" caption="On-site execution · day 12" />
          <div>
            <Eyebrow>What Makes Us Different</Eyebrow>
            <h2 className="display mt-5 text-3xl leading-tight md:text-4xl">
              French discipline. Local intelligence.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
              Five-plus years operating in the UAE taught us to read every
              environment — the tastes, the expectations, the real capabilities of
              a kitchen team — and to build for all of it.
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {DIFFERENTIATORS.map((d) => (
                <li key={d} className="flex items-center gap-3 text-[0.9rem] text-charcoal/80">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-olive" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/apply" variant="outline">
                Apply For Private Access
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

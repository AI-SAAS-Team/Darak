import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Visual } from "@/components/visual";
import { SERVICES, TECHNOLOGY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Two ways to elevate your food: DARAK Upgrade transforms your existing staff, DARAK Placement recruits and installs exceptional chefs. Amplified by proprietary AI.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={
          <>
            Two ways to elevate your food.
          </>
        }
        intro="Whether you have a team that needs structure or need someone exceptional from scratch — we install the system around you."
      />

      {/* Offers */}
      <Section>
        <Container className="space-y-20 md:space-y-28">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`grid scroll-mt-28 items-center gap-12 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Visual
                tone={i % 2 === 0 ? "warm" : "stone"}
                ratio="aspect-[4/3]"
                caption={svc.title}
              />
              <div>
                <span className="display text-2xl text-gold">{svc.number}</span>
                <h2 className="display mt-2 text-4xl leading-tight md:text-5xl">
                  {svc.title}
                </h2>
                <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
                  {svc.intro}
                </p>
                <ul className="mt-8 space-y-3">
                  {svc.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[0.95rem] text-charcoal/80">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-olive" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button href="/apply" variant="outline">
                    Enquire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </Section>

      {/* Technology */}
      <section className="bg-ink text-warm-white">
        <Container className="grid gap-12 py-20 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-20 md:py-28">
          <div>
            <Eyebrow className="!text-gold-soft">Technology</Eyebrow>
            <h2 className="display mt-5 text-3xl leading-tight md:text-4xl">
              Powered by proprietary AI. Built to amplify chefs — never replace
              them.
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-warm-white/60">
              Our platform turns culinary craft into a repeatable operating system
              — so quality never depends on memory, mood or who happens to be in
              the kitchen.
            </p>
            <div className="mt-8 flex items-center gap-4 text-gold-soft">
              <Icon name="cpu" className="h-8 w-8" />
              <span className="text-sm uppercase tracking-[0.2em]">
                The DARAK platform
              </span>
            </div>
          </div>
          <ul className="grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2">
            {TECHNOLOGY.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 bg-ink px-5 py-4 text-[0.86rem] text-warm-white/80"
              >
                <Icon name="sparkle" className="h-4 w-4 shrink-0 text-gold" />
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Nutrition */}
      <Section>
        <Container className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <Visual tone="sand" ratio="aspect-[4/3]" caption="Performance plating" />
          <div>
            <Eyebrow>Nutrition</Eyebrow>
            <h2 className="display mt-5 text-3xl leading-tight md:text-4xl">
              We turn science into food.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
              DARAK does not replace doctors. We work alongside your physicians,
              nutritionists, dieticians and performance coaches — translating their
              requirements into meals your kitchen can execute, and you&apos;ll
              actually want to eat.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {["Physicians", "Nutritionists", "Dieticians", "Performance Coaches"].map(
                (role) => (
                  <li
                    key={role}
                    className="border border-charcoal/15 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-charcoal/70"
                  >
                    {role}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}

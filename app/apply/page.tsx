import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container, Section } from "@/components/ui";
import { Icon } from "@/components/icons";
import { ApplicationForm } from "@/components/application-form";

export const metadata: Metadata = {
  title: "Private Access",
  description:
    "Limited engagements. Private. Confidential. By application only. Apply for private access to a DARAK food system.",
};

const ASSURANCES = [
  { icon: "lock" as const, title: "Discreet & confidential", body: "Every enquiry is handled personally and in strict confidence." },
  { icon: "sparkle" as const, title: "Tailored to you", body: "We design around your lifestyle, environment and goals." },
  { icon: "shield" as const, title: "Limited engagements", body: "We take on a small number of clients to protect quality." },
];

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private Access"
        title={
          <>
            Apply for private access.
          </>
        }
        intro="Food should never be your weakest system. Tell us about your situation and our team will be in touch — discreetly."
      />

      <Section>
        <Container className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <aside className="space-y-8">
            {ASSURANCES.map((a) => (
              <div key={a.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon name={a.icon} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-charcoal">
                    {a.title}
                  </p>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">{a.body}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-charcoal/10 pt-8">
              <p className="display text-2xl leading-snug text-charcoal/80">
                “DARAK is not about food. DARAK is about control — over taste,
                health and consistency.”
              </p>
            </div>
          </aside>

          <div>
            <ApplicationForm />
          </div>
        </Container>
      </Section>
    </>
  );
}

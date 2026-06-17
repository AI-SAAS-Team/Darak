import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Private, discreet, by referral only. Reach DARAK to discuss installing a private food system in your environment.",
};

const DETAILS = [
  { label: "Enquiries", value: "private@darak.com", href: "mailto:private@darak.com" },
  { label: "Press", value: "press@darak.com", href: "mailto:press@darak.com" },
  { label: "Based in", value: "United Arab Emirates", href: undefined },
  { label: "Operating", value: "UAE · GCC · International on request", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk, <span className="text-gold-soft italic">privately.</span>
          </>
        }
        intro="The fastest way to begin is to apply for private access. For anything else, reach us directly below."
      />

      <Section>
        <Container className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Eyebrow>Direct</Eyebrow>
            <dl className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {DETAILS.map((d) => (
                <div key={d.label} className="flex items-center justify-between py-5">
                  <dt className="text-[0.66rem] uppercase tracking-[0.2em] text-muted">
                    {d.label}
                  </dt>
                  <dd className="text-[0.95rem] text-charcoal">
                    {d.href ? (
                      <Link href={d.href} className="link-underline hover:text-gold">
                        {d.value}
                      </Link>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex gap-3">
              {["Instagram", "WhatsApp"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="border border-charcoal/15 px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.16em] text-charcoal/70 transition-colors hover:border-gold hover:text-gold"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-ink p-10 text-warm-white md:p-12">
            <Icon name="lock" className="h-8 w-8 text-gold" />
            <h2 className="display mt-6 text-3xl leading-tight">
              By application only.
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-warm-white/60">
              We take on a limited number of engagements to protect quality and
              discretion. The application takes two minutes and is reviewed
              personally.
            </p>
            <div className="mt-9">
              <Button href="/apply">Apply For Private Access</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

import { Container, Eyebrow } from "./ui";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-warm-white">
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_80%_0%,rgba(176,138,94,0.18),transparent_55%)]" />
      <Container className="relative py-20 md:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display mt-5 max-w-3xl text-4xl leading-[1.02] md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-white/60">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}

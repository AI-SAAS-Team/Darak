import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Visual } from "@/components/visual";

export const metadata: Metadata = {
  title: "Our Food",
  description:
    "Natural light. Visible textures. Real execution. A look at the food DARAK systems produce — extraordinary, and reproducible every day.",
};

const GALLERY: { tone: string; caption: string; span?: string; ratio?: string; src?: string; alt?: string }[] = [
  { tone: "warm", caption: "Slow-braised lamb · pomegranate", span: "md:col-span-2 md:row-span-2", ratio: "aspect-square md:aspect-auto md:h-full", src: "/food-1.jpg", alt: "Slow-braised lamb shank with pomegranate on dark plate" },
  { tone: "stone", caption: "Heritage tomato · stone fruit",   src: "/food-2.jpg", alt: "Heritage heirloom tomatoes with stone fruit on slate" },
  { tone: "olive", caption: "Garden greens · herb oil",        src: "/food-3.jpg", alt: "Garden greens with herb oil in ceramic bowl" },
  { tone: "sand",  caption: "Stone-baked sourdough",           src: "/food-4.jpg", alt: "Artisan sourdough loaf with butter on linen" },
  { tone: "dark",  caption: "Seared catch · saffron",          src: "/food-5.jpg", alt: "Seared sea bass with saffron sauce on dark plate" },
  { tone: "warm",  caption: "Citrus & olive · cold-pressed",  span: "md:col-span-2", ratio: "aspect-[16/9]", src: "/food-6.jpg", alt: "Blood oranges, lemons and olives with cold-pressed olive oil on travertine" },
  { tone: "stone", caption: "Recovery bowl · macro-balanced", src: "/food-7.jpg", alt: "Macro-balanced recovery bowl with salmon, edamame and avocado" },
];

export default function FoodPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Food"
        title={
          <>
            Extraordinary food.
            <br />
            <span className="text-gold-soft italic">Reproducible every day.</span>
          </>
        }
        intro="Natural light, visible textures, real sauces, real steam. No stock photos, no fake smiles — only food a trained kitchen can deliver consistently."
      />

      <Section>
        <Container>
          <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
      </Section>

      {/* Texture statement */}
      <section className="bg-sand/40">
        <Container className="py-20 text-center md:py-28">
          <Eyebrow>Photography & Plating</Eyebrow>
          <p className="display mx-auto mt-6 max-w-3xl text-3xl leading-snug text-charcoal md:text-4xl">
            Minimal kitchens. Stone countertops. Beautiful plates. Visible
            textures, sauces, steam and hands — quiet confidence on every plate.
          </p>
          <div className="mt-10">
            <Button href="/apply">Apply For Private Access</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

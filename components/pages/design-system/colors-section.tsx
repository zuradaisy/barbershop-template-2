import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { designSystem } from "@/content/design-system";
import { cn } from "@/lib/utils";

export function ColorsSection() {
  const renderTokens = (
    group: (typeof designSystem.colors.tokens)[number]["group"],
  ) => (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {designSystem.colors.tokens
        .filter((token) => token.group === group)
        .map((token) => (
          <li key={token.name} className="rounded-sm border border-border p-4">
            <div
              className={cn(
                "h-12 rounded-sm border border-border",
                token.className,
              )}
            />
            <p className="mt-3 font-mono text-sm font-semibold">{token.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{token.usage}</p>
          </li>
        ))}
    </ul>
  );

  return (
    <Section>
      <Container>
        <SectionHeading
          title={designSystem.colors.title}
          description={designSystem.colors.description}
        />
        <div className="mt-8 space-y-6">
          <section aria-labelledby="colors-core-heading">
            <h3
              id="colors-core-heading"
              className="mb-3 text-sm font-bold uppercase"
            >
              Palet utama · 6 warna
            </h3>
            {renderTokens("Palet inti")}
          </section>
          <details className="rounded-sm border border-border p-4">
            <summary className="cursor-pointer text-sm font-bold uppercase">
              Token fungsional
            </summary>
            <p className="mt-2 mb-4 text-sm text-muted-foreground">
              Token untuk aksi utama, fokus, error, WhatsApp, dan keterbacaan
              teks di atas foto.
            </p>
            {renderTokens("Token fungsional")}
          </details>
        </div>
      </Container>
    </Section>
  );
}

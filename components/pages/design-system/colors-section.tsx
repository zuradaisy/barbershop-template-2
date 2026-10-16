import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { designSystem } from "@/content/design-system";
import { cn } from "@/lib/utils";

export function ColorsSection() {
  const groups = ["Warna inti", "Warna fungsional"] as const;

  return (
    <Section>
      <Container>
        <SectionHeading
          title={designSystem.colors.title}
          description={designSystem.colors.description}
        />
        <div className="mt-8 space-y-8">
          {groups.map((group) => (
            <section
              key={group}
              aria-labelledby={
                group === "Warna inti"
                  ? "colors-core-heading"
                  : "colors-functional-heading"
              }
            >
              <h3
                id={
                  group === "Warna inti"
                    ? "colors-core-heading"
                    : "colors-functional-heading"
                }
                className="mb-3 text-sm font-bold uppercase"
              >
                {group}
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {designSystem.colors.tokens
                  .filter((token) => token.group === group)
                  .map((token) => (
                    <li
                      key={token.name}
                      className="rounded-sm border border-border p-4"
                    >
                      <div
                        className={cn(
                          "h-12 rounded-sm border border-border",
                          token.className,
                        )}
                      />
                      <p className="mt-3 font-mono text-sm font-medium">
                        {token.name}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {token.usage}
                      </p>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}

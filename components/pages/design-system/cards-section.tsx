import Link from "next/link";
import { LuClock } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContentCard } from "@/components/ui/content-card";
import { buttonStyles } from "@/components/ui/button";
import { designSystem } from "@/content/design-system";
import { services, serviceUi } from "@/content/services";
import { serviceHref } from "@/lib/links";

export function CardsSection() {
  const { cards } = designSystem;
  const exampleService = services[0];

  return (
    <Section>
      <Container>
        <SectionHeading title={cards.title} description={cards.description} />
        <Card className="mt-8 max-w-sm">
          <Badge>{cards.example.badge}</Badge>
          <h3 className="mt-4 text-lg font-semibold">{cards.example.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {cards.example.description}
          </p>
          <div className="mt-6">
            <Link
              href={cards.example.action.href}
              className={buttonStyles({ variant: "outline", size: "sm" })}
            >
              {cards.example.action.label}
            </Link>
          </div>
        </Card>

        <div className="mt-12 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">{cards.contentCard.title}</h3>
            <p className="mt-2 text-muted-foreground">
              {cards.contentCard.description}
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {cards.components.map((component) => (
              <li
                key={component.name}
                className="rounded-xl border border-border p-4"
              >
                <h4 className="font-bold">{component.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {component.usage}
                </p>
              </li>
            ))}
          </ul>

          <div className="divide-y divide-border border-y border-border">
            <ContentCard
              variant="row"
              title={exampleService.name}
              href={serviceHref(exampleService.slug)}
              description={exampleService.shortDescription}
              meta={exampleService.duration}
              price={exampleService.price}
              eyebrow={cards.contentCard.rowLabel}
            />
          </div>

          <div className="grid max-w-sm grid-cols-1 gap-6">
            <ContentCard
              variant="service"
              title={exampleService.name}
              href={serviceHref(exampleService.slug)}
              eyebrow={cards.contentCard.cardLabel}
              meta={exampleService.duration}
              description={exampleService.shortDescription}
              price={exampleService.price}
              image={{ src: exampleService.image, alt: exampleService.name }}
              metaIcon={<LuClock aria-hidden="true" className="size-3.5" />}
              actions={[
                {
                  label: serviceUi.detailAction,
                  href: serviceHref(exampleService.slug),
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

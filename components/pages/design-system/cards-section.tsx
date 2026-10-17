import Link from "next/link";
import { LuClock } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContentCard } from "@/components/ui/content-card";
import { ServiceRow } from "@/components/ui/service-row";
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
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Card dasar adalah wadah/panel, bukan layout konten tertentu. FAQ, jam
          operasional footer, dan ringkasan harga adalah pemakaian Card dengan
          susunan isi masing-masing, bukan variasi Card.
        </p>

        <div className="mt-12 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">{cards.contentCard.title}</h3>
            <p className="mt-2 text-muted-foreground">
              {cards.contentCard.description}
            </p>
          </div>

          <div className="grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            <ContentCard
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
            <ContentCard
              title={exampleService.name}
              meta={exampleService.duration}
              description={exampleService.shortDescription}
              price={exampleService.price}
              metaIcon={<LuClock aria-hidden="true" className="size-3.5" />}
              actions={[
                {
                  label: serviceUi.detailAction,
                  href: serviceHref(exampleService.slug),
                },
              ]}
            />
          </div>

          <div className="pt-4">
            <h3 className="text-xl font-semibold">{cards.list.title}</h3>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              {cards.list.description}
            </p>
          </div>
          <ul className="space-y-1">
            <ServiceRow
              number="01"
              title={exampleService.name}
              href={serviceHref(exampleService.slug)}
              description={exampleService.shortDescription}
              duration={exampleService.duration}
              price={exampleService.price}
            />
          </ul>

          <aside className="space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            <h3 className="font-semibold text-foreground">
              {cards.notesTitle}
            </h3>
            {cards.notesGroups.map((group) => (
              <section key={group} aria-label={group}>
                <h4 className="font-semibold text-foreground">{group}</h4>
                <ul className="list-inside list-disc">
                  {cards.components
                    .filter((component) => component.group === group)
                    .map((component) => (
                      <li key={component.name}>
                        <span className="font-semibold text-foreground">
                          {component.name}
                        </span>
                        {" — "}
                        {component.usage}
                      </li>
                    ))}
                </ul>
              </section>
            ))}
          </aside>
        </div>
      </Container>
    </Section>
  );
}

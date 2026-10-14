import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { ContentCard } from "@/components/ui/content-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";
import { serviceUi, services } from "@/content/services";
import { serviceHref } from "@/lib/links";

export function ServicesPreview() {
  const { servicesPreview } = home;
  const previewServices = services.slice(0, 4);

  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          kicker={servicesPreview.kicker}
          title={servicesPreview.title}
          description={servicesPreview.description}
        />
        <div className="mt-5 divide-y divide-border border-y border-border">
          {previewServices.map((service, index) => (
            <ContentCard
              key={service.id}
              variant="row"
              number={String(index + 1).padStart(2, "0")}
              title={service.name}
              href={serviceHref(service.slug)}
              description={service.shortDescription}
              meta={service.duration}
              price={service.price}
              eyebrow={service.isPopular ? serviceUi.favoriteLabel : undefined}
            />
          ))}
        </div>
        <Link
          href={servicesPreview.viewAllHref}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase hover:text-accent"
        >
          {servicesPreview.viewAllLabel}
          <LuArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </Container>
    </Section>
  );
}

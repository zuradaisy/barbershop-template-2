import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { ServiceRow } from "@/components/ui/service-row";
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
        />
        <ul className="mt-5 space-y-1">
          {previewServices.map((service, index) => (
            <ServiceRow
              key={service.id}
              number={String(index + 1).padStart(2, "0")}
              title={service.name}
              href={serviceHref(service.slug)}
              description={service.shortDescription}
              duration={service.duration}
              price={service.price}
              label={service.isPopular ? serviceUi.favoriteLabel : undefined}
            />
          ))}
        </ul>
        <Link
          href={servicesPreview.viewAllHref}
          className={buttonStyles({
            variant: "ghost",
            size: "md",
            className:
              "mt-5 h-auto gap-2 px-0 py-0 text-base font-normal text-muted-foreground hover:text-accent",
          })}
        >
          {servicesPreview.viewAllLabel}
          <LuArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </Container>
    </Section>
  );
}

"use client";

import { useState } from "react";

import { LuClock } from "react-icons/lu";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { ContentCard } from "@/components/ui/content-card";
import { serviceCategories, serviceUi, services } from "@/content/services";
import { bookingHref, serviceHref } from "@/lib/links";

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <Section className="py-12 sm:py-16">
      <Container>
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border/80 pb-6">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={buttonStyles({
              variant: activeCategory === "all" ? "primary" : "outline",
              size: "sm",
              className: "rounded-sm text-sm font-semibold uppercase",
            })}
          >
            {serviceUi.allServicesLabel} ({services.length})
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              aria-pressed={activeCategory === cat.key}
              className={buttonStyles({
                variant: activeCategory === cat.key ? "primary" : "outline",
                size: "sm",
                className: "rounded-sm text-sm font-semibold uppercase",
              })}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Reusable Services Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filteredServices.map((service) => (
            <ContentCard
              key={service.id}
              title={service.name}
              href={serviceHref(service.slug)}
              eyebrow={service.categoryLabel}
              meta={service.duration}
              description={service.shortDescription}
              price={service.price}
              image={{ src: service.image, alt: service.name }}
              imageBadge={
                service.isPopular ? serviceUi.favoriteLabel : undefined
              }
              metaIcon={
                <LuClock aria-hidden="true" className="size-3.5 text-accent" />
              }
              actions={[
                {
                  label: serviceUi.formAction,
                  href: bookingHref(service.slug),
                  variant: "primary",
                },
              ]}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { home } from "@/content/home";
import { site } from "@/content/site";

export function HomeHero() {
  const { hero } = home;

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-hero-scrim text-hero-foreground">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover photo-mono"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-hero-scrim/90 via-hero-scrim/65 to-hero-scrim/50"
      />

      <Container className="relative w-full pt-20 pb-8 sm:pb-12 lg:pb-14">
        <p className="mb-4 text-xs font-bold tracking-widest uppercase sm:text-sm">
          {hero.kicker}
        </p>

        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          <h1 className="max-w-5xl font-display text-4xl leading-[0.98] font-bold tracking-tight whitespace-pre-line uppercase sm:text-6xl lg:col-span-8 lg:text-7xl">
            {hero.title}
          </h1>
          <p className="max-w-md text-base leading-relaxed text-hero-foreground/80 lg:col-span-3 lg:col-start-10 lg:pb-2">
            {hero.description}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-hero-foreground/25 pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          {site.contact.hours.display ? (
            <p className="text-sm text-hero-foreground/80 sm:text-base">
              {site.contact.hours.display}
            </p>
          ) : (
            <span />
          )}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={hero.bookingHref}
              className={buttonStyles({
                variant: "inverse",
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
              <span>{hero.bookingLabel}</span>
            </Link>
            <Link
              href={hero.servicesHref}
              className={buttonStyles({
                variant: "outline",
                size: "lg",
                className:
                  "w-full border-hero-foreground/30 bg-transparent text-hero-foreground hover:bg-hero-foreground/10 sm:w-auto",
              })}
            >
              {hero.servicesLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

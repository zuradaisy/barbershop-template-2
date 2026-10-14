import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import {
  LuArrowLeft,
  LuCalendar,
  LuCheck,
  LuClock,
  LuShieldCheck,
} from "react-icons/lu";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { serviceUi, type Service } from "@/content/services";
import { site } from "@/content/site";
import { bookingHref, whatsappLink } from "@/lib/links";

export function ServiceDetailView({ service }: { service: Service }) {
  const bookingMessage = serviceUi.whatsappMessage(service);

  return (
    <Section className="py-10 sm:py-16">
      <Container>
        <nav
          aria-label={site.labels.breadcrumb}
          className="mb-8 flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase"
        >
          <Link
            href={site.routes.services}
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <LuArrowLeft aria-hidden="true" className="size-3.5" />
            {serviceUi.back}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">{service.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-8 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase">
                <span className="bg-muted px-2.5 py-1">
                  {service.categoryLabel}
                </span>
                {service.isPopular ? (
                  <span className="bg-primary px-2.5 py-1 text-primary-foreground">
                    {serviceUi.favoriteLabel}
                  </span>
                ) : null}
              </div>
              <h1 className="mt-3 font-display text-4xl leading-[1.05] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                {service.name}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border pb-6">
                <span className="text-2xl font-extrabold">{service.price}</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <LuClock aria-hidden="true" className="size-4 text-accent" />
                  {service.duration}
                </span>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={service.image}
                alt={service.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold uppercase">
                {serviceUi.aboutTitle}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.fullDescription}
              </p>
            </div>
            {service.steps?.length ? (
              <section className="space-y-4">
                <h2 className="text-xl font-bold uppercase">
                  {serviceUi.stepsTitle}
                </h2>
                <ol className="space-y-3">
                  {service.steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 border-b border-border py-3 text-sm"
                    >
                      <span className="font-bold text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
            {service.benefits?.length ? (
              <section className="space-y-4">
                <h2 className="text-xl font-bold uppercase">
                  {serviceUi.benefitsTitle}
                </h2>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <LuCheck
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-accent"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-4 sm:sticky sm:top-24">
              <Card className="space-y-6 p-5 sm:p-6">
                <div>
                  <span className="text-xs font-bold text-accent uppercase">
                    {serviceUi.reservationEyebrow}
                  </span>
                  <h2 className="mt-1 text-xl font-bold uppercase">
                    {serviceUi.reservationTitle}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {serviceUi.reservationDescription}
                  </p>
                </div>
                <dl className="space-y-3 border-y border-border py-4 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">
                      {serviceUi.serviceLabel}
                    </dt>
                    <dd className="text-right font-semibold">{service.name}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">
                      {serviceUi.durationLabel}
                    </dt>
                    <dd>{service.duration}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold">{serviceUi.priceLabel}</dt>
                    <dd className="font-bold">{service.price}</dd>
                  </div>
                </dl>
                <div className="flex flex-col gap-3">
                  <Link
                    href={bookingHref(service.slug)}
                    className={buttonStyles({
                      variant: "primary",
                      size: "md",
                      className: "w-full justify-center",
                    })}
                  >
                    <LuCalendar aria-hidden="true" className="size-4" />
                    {serviceUi.formAction}
                  </Link>
                  <a
                    href={whatsappLink(bookingMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({
                      variant: "outline",
                      size: "md",
                      className: "w-full justify-center",
                    })}
                  >
                    <FaWhatsapp aria-hidden="true" className="size-5" />
                    {serviceUi.whatsappAction}
                  </a>
                </div>
              </Card>
              <p className="flex items-start gap-2 px-1 text-xs leading-relaxed text-muted-foreground">
                <LuShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0"
                />
                {serviceUi.confirmationNote}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

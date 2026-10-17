"use client";

import type { FormEvent } from "react";
import { useId, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Section } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";
import { bookingContent } from "@/content/booking";
import { services } from "@/content/services";
import { whatsappLink } from "@/lib/links";

export function QuickBookingForm() {
  const copy = home.bookingForm;
  const nameId = useId();
  const phoneId = useId();
  const serviceId = useId();
  const dateId = useId();
  const timeId = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const selectedService =
    services.find((service) => service.id === selectedServiceId) ?? services[0];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formattedDate = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(`${date}T00:00:00`));
    const message = [
      copy.messageIntro,
      `• ${copy.nameLabel}: ${name.trim()}`,
      `• ${copy.phoneLabel}: ${phone.trim()}`,
      `• ${copy.serviceLabel}: ${selectedService.name} (${selectedService.price})`,
      `• ${copy.dateLabel}: ${formattedDate}`,
      `• ${copy.timeLabel}: ${time} ${copy.timeZoneLabel}`,
      "",
      copy.messageOutro,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <Section
      id="booking-form"
      aria-label={copy.accessibleSectionLabel}
      className="bg-background"
    >
      <Container>
        <Card className="bg-muted/60 p-5 sm:p-6 lg:grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-10 lg:p-8">
          <div className="mb-6 lg:mb-0">
            <SectionHeading kicker={copy.kicker} title={copy.title} />
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
              {copy.description}
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2"
          >
            <Field id={nameId} label={copy.nameLabel}>
              <Input
                id={nameId}
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Field>
            <Field id={phoneId} label={copy.phoneLabel}>
              <Input
                id={phoneId}
                type="tel"
                autoComplete="tel"
                pattern="[0-9+() -]{8,20}"
                title={copy.phoneValidation}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </Field>
            <Field
              id={serviceId}
              label={copy.serviceLabel}
              className="sm:col-span-2"
            >
              <Select
                id={serviceId}
                value={selectedServiceId}
                onChange={(event) => setSelectedServiceId(event.target.value)}
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} · {service.price}
                  </option>
                ))}
              </Select>
            </Field>
            <Field id={dateId} label={copy.dateLabel}>
              <Input
                id={dateId}
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </Field>
            <Field id={timeId} label={copy.timeLabel}>
              <Select
                id={timeId}
                value={time}
                onChange={(event) => setTime(event.target.value)}
                required
              >
                <option value="">{copy.timePlaceholder}</option>
                {bookingContent.timeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Field>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full justify-center">
                <FaWhatsapp aria-hidden="true" className="size-4" />
                {copy.submitLabel}
              </Button>
            </div>
            {submitted ? (
              <p
                role="status"
                className="text-sm text-muted-foreground sm:col-span-2"
              >
                {copy.successMessage}
              </p>
            ) : null}
          </form>
        </Card>
      </Container>
    </Section>
  );
}

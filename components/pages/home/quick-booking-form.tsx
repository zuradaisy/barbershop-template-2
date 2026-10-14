"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { home } from "@/content/home";
import { services } from "@/content/services";
import { whatsappLink } from "@/lib/links";
import type { FormEvent } from "react";
import { useId, useState } from "react";

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selectedService = services.find(
      (service) => service.id === selectedServiceId,
    );
    if (!selectedService) return;
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
      `• ${copy.timeLabel}: ${time} WIB`,
      "",
      copy.pendingNote,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <Card className="p-5 sm:p-6">
      <div>
        <span className="text-xs font-bold tracking-widest text-accent uppercase">
          {copy.kicker}
        </span>
        <h3 className="mt-1 text-xl leading-tight font-bold tracking-tight uppercase sm:text-2xl">
          {copy.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {copy.description}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
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
            title="Masukkan nomor telepon dengan 8 sampai 20 karakter yang valid."
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </Field>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field id={serviceId} label={copy.serviceLabel}>
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
        </div>
        <Field id={timeId} label={copy.timeLabel}>
          <Input
            id={timeId}
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
          />
        </Field>
        <Button type="submit" size="md" className="w-full justify-center">
          <FaWhatsapp aria-hidden="true" className="size-4" />
          {copy.submitLabel}
        </Button>
        {submitted ? (
          <p role="status" className="text-sm text-muted-foreground">
            {copy.successMessage}
          </p>
        ) : null}
        <p className="text-xs leading-relaxed text-muted-foreground">
          {copy.pendingNote}
        </p>
      </form>
    </Card>
  );
}

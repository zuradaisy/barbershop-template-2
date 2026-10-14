"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuInfo, LuScissors } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { bookingContent } from "@/content/booking";
import { services } from "@/content/services";
import { whatsappLink } from "@/lib/links";

export function BookingForm({
  initialServiceSlug,
}: {
  initialServiceSlug?: string;
}) {
  const initialService =
    services.find((service) => service.slug === initialServiceSlug) ??
    services[0];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceId, setServiceId] = useState(initialService.id);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const nameId = useId();
  const phoneId = useId();
  const serviceIdInput = useId();
  const dateId = useId();
  const timeId = useId();
  const notesId = useId();
  const selectedService =
    services.find((service) => service.id === serviceId) ?? services[0];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formattedDate = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(`${date}T00:00:00`));
    const message = [
      bookingContent.whatsappMessageIntro,
      `• Nama: ${name.trim()}`,
      `• Nomor WhatsApp: ${phone.trim()}`,
      `• Layanan: ${selectedService.name} (${selectedService.price})`,
      `• Tanggal pilihan: ${formattedDate}`,
      `• Jam pilihan: ${time} WIB`,
      notes.trim() ? `• Catatan: ${notes.trim()}` : "",
      "",
      bookingContent.whatsappMessageOutro,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)] lg:gap-14">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase">
                {bookingContent.formEyebrow}
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight uppercase sm:text-3xl">
                {bookingContent.formTitle}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {bookingContent.formDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field id={nameId} label="Nama Lengkap">
                <Input
                  id={nameId}
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  minLength={2}
                  required
                />
              </Field>
              <Field
                id={phoneId}
                label="Nomor WhatsApp"
                hint="Masukkan nomor yang dapat menerima balasan."
              >
                <Input
                  id={phoneId}
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  pattern="[0-9+() -]{8,20}"
                  title="Gunakan 8–20 karakter berupa angka, spasi, +, tanda kurung, atau tanda hubung."
                  required
                />
              </Field>
            </div>
            <Field id={serviceIdInput} label="Layanan">
              <Select
                id={serviceIdInput}
                value={serviceId}
                onChange={(event) => setServiceId(event.target.value)}
                required
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} · {service.price} · {service.duration}
                  </option>
                ))}
              </Select>
            </Field>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field id={dateId} label="Tanggal pilihan">
                <Input
                  id={dateId}
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                />
              </Field>
              <Field id={timeId} label="Jam pilihan">
                <Input
                  id={timeId}
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  required
                />
              </Field>
            </div>
            <Field id={notesId} label="Catatan (opsional)">
              <Textarea
                id={notesId}
                rows={4}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
              />
            </Field>
            <div>
              <Button
                type="submit"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                <FaWhatsapp aria-hidden="true" className="size-5" />
                Booking via WhatsApp
              </Button>
              {submitted ? (
                <p role="status" className="mt-3 text-sm text-muted-foreground">
                  WhatsApp terbuka. Permintaan ini belum menjadi booking
                  terkonfirmasi sampai barbershop membalas.
                </p>
              ) : null}
            </div>
          </form>

          <aside className="space-y-5 lg:pt-1">
            <Card className="p-5 sm:p-6">
              <div className="flex items-center gap-2 border-b border-border pb-4">
                <LuScissors aria-hidden="true" className="size-4" />
                <h2 className="font-bold uppercase">Ringkasan pilihan</h2>
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Layanan</dt>
                  <dd className="text-right font-semibold">
                    {selectedService.name}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Durasi</dt>
                  <dd>{selectedService.duration}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-border pt-3">
                  <dt className="font-semibold">Harga</dt>
                  <dd className="font-bold">{selectedService.price}</dd>
                </div>
              </dl>
            </Card>
            <Card className="p-5 sm:p-6">
              <div className="flex items-center gap-2 font-semibold">
                <LuInfo aria-hidden="true" className="size-4" />
                {bookingContent.policyTitle}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {bookingContent.policyDescription}
              </p>
            </Card>
          </aside>
        </div>
      </Container>
    </div>
  );
}

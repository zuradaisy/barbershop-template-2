import type { Metadata } from "next";
import { BookingForm } from "@/components/pages/booking/booking-form";
import { PageHeader } from "@/components/layouts/page-header";
import { bookingContent } from "@/content/booking";

export const metadata: Metadata = {
  title: "Booking Jadwal Online",
  description:
    "Ajukan preferensi layanan dan jadwal grooming Crosscut Barber melalui WhatsApp.",
};

type Props = {
  searchParams: Promise<{ service?: string | string[] }>;
};

export default async function BookingPage({ searchParams }: Props) {
  const { header } = bookingContent;
  const params = await searchParams;
  const serviceSlug = Array.isArray(params.service)
    ? params.service[0]
    : params.service;

  return (
    <>
      <PageHeader
        kicker={header.eyebrow}
        title={header.title}
        description={header.description}
        breadcrumbs={[{ label: "Booking" }]}
      />
      <BookingForm initialServiceSlug={serviceSlug} />
    </>
  );
}

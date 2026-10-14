import { site } from "@/content/site";

export function whatsappLink(message?: string): string {
  const configuredNumber = site.contact.whatsappNumber.replace(/[^0-9]/g, "");
  const phone = configuredNumber || "";
  const base = phone ? `https://wa.me/${phone}` : "https://wa.me/";
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function googleMapsLink(): string {
  return site.contact.googleMapsUrl;
}

export function googleMapsEmbedLink(): string {
  const address = encodeURIComponent(site.contact.address.full);
  return `https://maps.google.com/maps?q=${address}&output=embed`;
}

export function phoneLink(): string {
  return `tel:${site.contact.phone}`;
}

export function serviceHref(slug: string): string {
  return `${site.routes.services}/${slug}`;
}

export function bookingHref(serviceSlug?: string): string {
  return serviceSlug
    ? `${site.routes.booking}?service=${encodeURIComponent(serviceSlug)}`
    : site.routes.booking;
}

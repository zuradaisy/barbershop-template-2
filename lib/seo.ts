import { site } from "@/content/site";
import { faqItems } from "@/content/faq";
import { services } from "@/content/services";

export function generateBarbershopJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    image: `${site.url}/images/og-image.jpg`,
    url: site.url,
    priceRange: `${services[0].price} - ${services.reduce((highest, service) => (service.priceNumber > highest.priceNumber ? service : highest)).price}`,
  };
}

export function generateFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

import type { Metadata } from "next";
import { CtaBanner } from "@/components/pages/home/cta-banner";
import { FaqAndContact } from "@/components/pages/home/faq-and-contact";
import { GalleryPreview } from "@/components/pages/home/gallery-preview";
import { HomeHero } from "@/components/pages/home/hero";
import { QuickBookingForm } from "@/components/pages/home/quick-booking-form";
import { ServicesPreview } from "@/components/pages/home/services-preview";
import { TeamPreview } from "@/components/pages/home/team-preview";
import { Testimonials } from "@/components/pages/home/testimonials";
import { WhyUs } from "@/components/pages/home/why-us";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Crosscut — ${site.tagline}`,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyUs />
      <ServicesPreview />
      <QuickBookingForm />
      <GalleryPreview />
      <TeamPreview />
      <Testimonials />
      <CtaBanner />
      <FaqAndContact />
    </>
  );
}

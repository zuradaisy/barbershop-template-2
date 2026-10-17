import type { Metadata } from "next";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { PageHeader } from "@/components/layouts/page-header";

export const metadata: Metadata = {
  title: "Galeri & Hasil Potong",
  description:
    "Galeri transformasi before & after gaya rambut dan grooming Crosscut Barber Jakarta Selatan.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        kicker="Portfolio & Dokumentasi"
        title="Galeri & Hasil Kerja"
        description="Jelajahi hasil potongan dan grooming Crosscut Barber berdasarkan kategori layanan."
        breadcrumbs={[{ label: "Galeri" }]}
      />
      <Section className="py-12 sm:py-16">
        <Container>
          <GalleryGrid showFilters showTitles />
        </Container>
      </Section>
    </>
  );
}

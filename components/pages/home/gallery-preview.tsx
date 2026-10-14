import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";

export function GalleryPreview() {
  const { galleryPreview } = home;

  return (
    <Section className="bg-background">
      <Container>
        {/* Reusable Section Heading */}
        <SectionHeading
          kicker={galleryPreview.kicker}
          title={galleryPreview.title}
          actionLink={{
            label: galleryPreview.viewAllLabel,
            href: galleryPreview.viewAllHref,
          }}
        />

        <div className="mt-8 lg:mt-12">
          <GalleryGrid limit={3} showTitles={false} />
        </div>
      </Container>
    </Section>
  );
}

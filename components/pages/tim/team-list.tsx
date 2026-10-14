import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { ContentCard } from "@/components/ui/content-card";
import { teamMembers, teamUi } from "@/content/team";
import { bookingHref } from "@/lib/links";

export function TeamList() {
  return (
    <Section className="py-12 sm:py-16">
      <Container>
        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {teamUi.demoNotice}
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {teamMembers.map((barber) => (
            <ContentCard
              key={barber.id}
              variant="profile"
              aspect="portrait"
              title={barber.name}
              href={bookingHref()}
              eyebrow={barber.role}
              description={barber.bio}
              image={{ src: barber.photo, alt: `Foto demo ${barber.name}` }}
              imageBadge="Profil demo"
              tags={barber.specialization}
              meta={barber.experience}
              actions={[{ label: teamUi.bookingLabel, href: bookingHref() }]}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

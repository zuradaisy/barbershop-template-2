import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { ContentCard } from "@/components/ui/content-card";
import { teamMembers } from "@/content/team";

export function TeamList() {
  return (
    <Section className="py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {teamMembers.map((barber) => (
            <ContentCard
              key={barber.id}
              variant="profile"
              aspect="portrait"
              title={barber.name}
              eyebrow={barber.role}
              description={barber.bio}
              image={{
                src: barber.photo,
                alt: `Foto ${barber.name}, ${barber.role}`,
              }}
              tags={barber.specialization}
              meta={barber.experience}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

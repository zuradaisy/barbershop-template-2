import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";
import { teamMembers, teamUi } from "@/content/team";

export function TeamPreview() {
  const { teamPreview } = home;
  const previewTeam = teamMembers.slice(0, 3);

  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeading
          kicker={teamPreview.kicker}
          title={teamPreview.title}
          actionLink={{
            label: teamPreview.viewAllLabel,
            href: teamPreview.viewAllHref,
          }}
        />
        <p className="mt-3 text-xs text-muted-foreground">
          {teamUi.demoNotice}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:mt-10 lg:gap-8">
          {previewTeam.map((barber) => (
            <figure key={barber.id} className="text-center">
              <Link
                href="/tim"
                className="inline-block rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span className="relative block size-28 overflow-hidden rounded-full bg-background sm:size-36">
                  <Image
                    src={barber.photo}
                    alt={`Foto demo ${barber.name}`}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </span>
              </Link>
              <figcaption className="mt-3">
                <h3 className="text-sm font-bold uppercase">{barber.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {barber.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

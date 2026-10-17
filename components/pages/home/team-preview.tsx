import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { teamMembers } from "@/content/team";

export function TeamPreview() {
  const { teamPreview } = home;
  const previewTeam = teamMembers.slice(0, 3);

  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          kicker={teamPreview.kicker}
          title={teamPreview.title}
          actionLink={{
            label: teamPreview.viewAllLabel,
            href: teamPreview.viewAllHref,
          }}
        />
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:mt-16 lg:gap-x-16 lg:gap-y-16">
          {previewTeam.map((barber) => (
            <figure key={barber.id} className="text-center">
              <Link
                href={site.routes.team}
                className="inline-block rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span className="relative block size-40 overflow-hidden rounded-full bg-muted sm:size-48 lg:size-52">
                  <Image
                    src={barber.photo}
                    alt={`Foto ${barber.name}, ${barber.role}`}
                    fill
                    sizes="(max-width: 640px) 160px, 208px"
                    className="object-cover"
                  />
                </span>
              </Link>
              <figcaption className="mt-5">
                <h3 className="text-base font-bold uppercase">{barber.name}</h3>
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

import { LuClock, LuExternalLink, LuMapPin, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";
import { site } from "@/content/site";
import {
  googleMapsEmbedLink,
  googleMapsLink,
  phoneLink,
  whatsappLink,
} from "@/lib/links";
import { generateBarbershopJsonLd, generateFaqJsonLd } from "@/lib/seo";
import { FaqAccordion } from "./faq-accordion";

export function FaqAndContact() {
  const { faqAndContact } = home;
  const barbershopJsonLd = generateBarbershopJsonLd();
  const faqJsonLd = generateFaqJsonLd();
  const { contact } = site;
  const hasContact = Boolean(
    contact.address.full || contact.phoneDisplay || contact.hours.display,
  );

  return (
    <Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(barbershopJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHeading
              kicker={faqAndContact.faqKicker}
              title={faqAndContact.faqTitle}
              className="mb-8"
            />
            <FaqAccordion />
          </div>
          <div>
            <SectionHeading
              kicker={faqAndContact.contactKicker}
              title={faqAndContact.contactTitle}
              className="mb-8"
            />
            {hasContact ? (
              <div className="space-y-6 py-1">
                {contact.address.full ? (
                  <div className="flex items-start gap-3">
                    <LuMapPin
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-accent"
                    />
                    <div className="text-base">
                      <p className="font-bold">{faqAndContact.addressLabel}</p>
                      <p className="text-muted-foreground">
                        {contact.address.full}
                      </p>
                    </div>
                  </div>
                ) : null}
                {contact.hours.display ? (
                  <div className="flex items-start gap-3">
                    <LuClock
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-accent"
                    />
                    <div className="text-base">
                      <p className="font-bold">{faqAndContact.hoursLabel}</p>
                      <p className="text-muted-foreground">
                        {contact.hours.display}
                      </p>
                    </div>
                  </div>
                ) : null}
                {contact.phoneDisplay ? (
                  <div className="flex items-start gap-3">
                    <LuPhone
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-accent"
                    />
                    <div className="text-base">
                      <p className="font-bold">{faqAndContact.phoneLabel}</p>
                      <a
                        href={phoneLink()}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {contact.phoneDisplay}
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="space-y-5 py-1">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {faqAndContact.contactUnavailable}
                </p>
                <a
                  href={whatsappLink(site.whatsappMessages.navbarBooking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    variant: "outline",
                    size: "md",
                    className: "w-full justify-center",
                  })}
                >
                  <FaWhatsapp aria-hidden="true" className="size-4" />
                  {faqAndContact.whatsappAction}
                </a>
              </div>
            )}
            {contact.address.full && contact.googleMapsUrl ? (
              <>
                <div className="mt-4 aspect-video overflow-hidden bg-muted">
                  <iframe
                    title={`Peta lokasi ${site.name} di ${contact.address.full}`}
                    src={googleMapsEmbedLink()}
                    className="size-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={googleMapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    variant: "outline",
                    size: "md",
                    className: "mt-4 w-full justify-center font-bold",
                  })}
                >
                  <LuExternalLink aria-hidden="true" className="size-4" />
                  {faqAndContact.mapsAction}
                </a>
              </>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}

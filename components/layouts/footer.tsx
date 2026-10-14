import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { LuClock, LuMail, LuMapPin, LuPhone, LuScissors } from "react-icons/lu";
import { site } from "@/content/site";
import { googleMapsLink, phoneLink, whatsappLink } from "@/lib/links";

export function Footer() {
  const { contact } = site;
  const hasContact = Boolean(
    contact.address.full ||
    contact.phoneDisplay ||
    contact.email ||
    contact.hours.display,
  );

  return (
    <footer className="border-t border-inverse-foreground/15 bg-inverse py-12 text-inverse-foreground transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 2xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href={site.routes.home} className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center bg-inverse-foreground text-inverse">
                <LuScissors className="size-5" />
              </span>
              <span className="font-bold tracking-wider uppercase">
                {site.name}
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-inverse-foreground/70">
              {site.description}
            </p>
            <a
              href={whatsappLink(site.whatsappMessages.footerBooking)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-inverse-foreground"
            >
              <FaWhatsapp className="size-4" />
              Booking via WhatsApp
            </a>
          </div>

          <nav aria-label={site.labels.footerNavigation} className="space-y-3">
            <h2 className="text-sm font-bold tracking-wider uppercase">
              {site.footer.navigationTitle}
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm text-inverse-foreground/70">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-inverse-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-wider uppercase">
              {site.footer.contactTitle}
            </h2>
            <p className="text-xs leading-relaxed text-inverse-foreground/60">
              {contact.demoNotice}
            </p>
            {hasContact ? (
              <ul className="flex flex-col gap-3 text-sm text-inverse-foreground/70">
                {contact.address.full ? (
                  <li className="flex items-start gap-2.5">
                    <LuMapPin className="mt-0.5 size-4 shrink-0" />
                    {contact.googleMapsUrl ? (
                      <a
                        href={googleMapsLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-inverse-foreground"
                      >
                        {contact.address.full}
                      </a>
                    ) : (
                      contact.address.full
                    )}
                  </li>
                ) : null}
                {contact.phoneDisplay ? (
                  <li className="flex items-center gap-2.5">
                    <LuPhone className="size-4 shrink-0" />
                    <a href={phoneLink()}>{contact.phoneDisplay}</a>
                  </li>
                ) : null}
                {contact.email ? (
                  <li className="flex items-center gap-2.5">
                    <LuMail className="size-4 shrink-0" />
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                ) : null}
                {contact.hours.display ? (
                  <li className="flex items-start gap-2.5">
                    <LuClock className="mt-0.5 size-4 shrink-0" />
                    <span>{contact.hours.display}</span>
                  </li>
                ) : null}
              </ul>
            ) : (
              <p className="text-sm leading-relaxed text-inverse-foreground/70">
                Informasi alamat, kontak, dan jam operasional perlu dilengkapi
                sebelum situs dipublikasikan.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-inverse-foreground/20 pt-6 text-sm text-inverse-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.footer.copyright}
          </p>
          <p>{site.footer.signature}</p>
        </div>
      </div>
    </footer>
  );
}

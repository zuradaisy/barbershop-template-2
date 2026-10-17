import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { LuClock, LuScissors } from "react-icons/lu";
import { Card } from "@/components/ui/card";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/links";

export function Footer() {
  const { contact } = site;

  return (
    <footer className="border-t border-inverse-foreground/15 bg-inverse py-16 text-inverse-foreground lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 2xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:justify-between lg:gap-16">
          <div className="space-y-4">
            <Link href={site.routes.home} className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-sm bg-inverse-foreground text-inverse">
                <LuScissors aria-hidden="true" className="size-5" />
              </span>
              <span className="font-bold tracking-wider uppercase">
                {site.name}
              </span>
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-inverse-foreground/70">
              {site.description}
            </p>
            <div
              className="flex gap-2"
              role="group"
              aria-label={site.labels.socialNavigation}
            >
              {site.socials.instagram.url ? (
                <a
                  href={site.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={site.labels.instagram}
                  className="flex size-9 items-center justify-center rounded-sm border border-inverse-foreground/15 text-inverse-foreground transition-colors hover:bg-inverse-foreground/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <FaInstagram aria-hidden="true" className="size-4" />
                </a>
              ) : null}
              {site.socials.tiktok.url ? (
                <a
                  href={site.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={site.labels.tiktok}
                  className="flex size-9 items-center justify-center rounded-sm border border-inverse-foreground/15 text-inverse-foreground transition-colors hover:bg-inverse-foreground/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <FaTiktok aria-hidden="true" className="size-4" />
                </a>
              ) : null}
              {site.socials.youtube.url ? (
                <a
                  href={site.socials.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={site.labels.youtube}
                  className="flex size-9 items-center justify-center rounded-sm border border-inverse-foreground/15 text-inverse-foreground transition-colors hover:bg-inverse-foreground/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <FaYoutube aria-hidden="true" className="size-4" />
                </a>
              ) : null}
              <a
                href={whatsappLink(site.whatsappMessages.footerBooking)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={site.labels.whatsapp}
                className="flex size-9 items-center justify-center rounded-sm border border-inverse-foreground/15 text-inverse-foreground transition-colors hover:bg-inverse-foreground/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <FaWhatsapp aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label={site.labels.footerNavigation} className="space-y-3">
            <h2 className="text-base font-bold tracking-wider uppercase">
              {site.footer.navigationTitle}
            </h2>
            <ul className="flex flex-col gap-2.5 text-base text-inverse-foreground/70">
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
            <h2 className="text-base font-bold tracking-wider uppercase">
              {site.footer.hoursTitle}
            </h2>
            <Card className="space-y-3 border-inverse-foreground/15 bg-inverse-foreground/5 p-4">
              <div className="flex items-center gap-2.5">
                <LuClock aria-hidden="true" className="size-4 shrink-0" />
                <p className="text-base font-semibold">
                  {site.footer.openEveryDay}
                </p>
              </div>
              <p className="text-base text-inverse-foreground/70">
                {site.footer.weekdayHours} {contact.hours.weekday}
              </p>
              <div className="border-t border-inverse-foreground/15 pt-3">
                <p className="text-base leading-relaxed text-inverse-foreground/70">
                  {site.footer.walkInNote}
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-inverse-foreground/20 pt-6 text-xs text-inverse-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.footer.copyright}
          </p>
          <p>{site.footer.signature}</p>
        </div>
      </div>
    </footer>
  );
}

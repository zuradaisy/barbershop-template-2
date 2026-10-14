"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuMenu, LuScissors, LuX } from "react-icons/lu";
import { buttonStyles } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 2xl:max-w-7xl">
        {/* Brand Logo */}
        <Link
          href={site.routes.home}
          onClick={closeMenu}
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <span className="flex size-9 items-center justify-center rounded-md bg-foreground text-background">
            <LuScissors className="size-5" />
          </span>
          <div className="flex flex-col">
            <span className="font-sans text-base font-bold tracking-wider text-foreground uppercase">
              {site.name}
            </span>
            <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
              {site.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Max 5 items per rule) */}
        <nav
          aria-label={site.labels.mainNavigation}
          className="hidden items-center gap-1 md:flex"
        >
          {site.navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeToggle labels={site.theme} />
          <a
            href={whatsappLink(site.whatsappMessages.navbarBooking)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({
              variant: "primary",
              size: "sm",
            })}
          >
            <FaWhatsapp className="size-4" />
            <span>{site.labels.navbarBookingShort}</span>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle labels={site.theme} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? site.labels.closeMenu : site.labels.openMenu
            }
            className="flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted"
          >
            {mobileMenuOpen ? (
              <LuX className="size-5" />
            ) : (
              <LuMenu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-4 pt-2 pb-6 md:hidden">
          <nav
            aria-label={site.labels.mobileNavigation}
            className="flex flex-col gap-1"
          >
            {site.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                    isActive
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                  )}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 flex flex-col gap-3 border-t border-border/80 pt-4">
            <div className="text-sm text-muted-foreground">
              {site.contact.hours.display ? (
                <p className="font-medium text-foreground">
                  {site.contact.hours.display}
                </p>
              ) : null}
              {site.contact.address.full ? (
                <p>{site.contact.address.full}</p>
              ) : null}
            </div>
            <a
              href={whatsappLink(site.whatsappMessages.navbarBooking)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={buttonStyles({
                variant: "primary",
                size: "md",
                className: "w-full justify-center",
              })}
            >
              <FaWhatsapp className="size-4.5" />
              <span>{site.labels.navbarBooking}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}



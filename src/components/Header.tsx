"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/#portfolio", label: t("portfolio") },
    { href: "/#why-us", label: t("whyUs") },
    { href: "/contact", label: t("contact") },
  ];

  const otherLocale = locale === "ar" ? "en" : "ar";

  const switchLocale = () => {
    router.replace(pathname, { locale: otherLocale });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-neutral-light shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <Image
            src="/assets/ms-square-logo.png"
            alt="MS Square Engineering"
            width={180}
            height={180}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-dark transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={switchLocale}
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-light px-3 py-2 text-sm font-semibold text-neutral-dark transition-colors hover:border-primary hover:text-primary"
          >
            <Globe size={16} />
            {otherLocale === "ar" ? "العربية" : "English"}
          </button>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600"
          >
            {t("cta")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-dark lg:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-neutral-light bg-white px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-neutral-dark hover:bg-neutral-light hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              switchLocale();
            }}
            className="mt-2 flex items-center gap-1.5 rounded-md border border-neutral-light px-3 py-2.5 text-sm font-semibold text-neutral-dark"
          >
            <Globe size={16} />
            {otherLocale === "ar" ? "العربية" : "English"}
          </button>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-md bg-accent px-5 py-2.5 text-center text-sm font-bold text-white"
          >
            {t("cta")}
          </Link>
        </nav>
      )}
    </header>
  );
}

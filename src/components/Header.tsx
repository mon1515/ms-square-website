"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#portfolio", label: "مشاريعنا" },
  { href: "#why-us", label: "ما يميزنا" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-neutral-light shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center" onClick={() => setMenuOpen(false)}>
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
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-dark transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600 lg:inline-block"
        >
          اطلب عرض سعر
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-dark lg:hidden"
          aria-label="فتح القائمة"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-neutral-light bg-white px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-neutral-dark hover:bg-neutral-light hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-md bg-accent px-5 py-2.5 text-center text-sm font-bold text-white"
          >
            اطلب عرض سعر
          </a>
        </nav>
      )}
    </header>
  );
}

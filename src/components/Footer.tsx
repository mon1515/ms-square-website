import { useTranslations } from "next-intl";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer id="contact" className="bg-neutral-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 inline-block rounded-lg bg-white p-2">
              <Image
                src="/assets/ms-square-logo.png"
                alt="MS Square Engineering"
                width={140}
                height={140}
                className="h-12 w-auto"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-accent">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">{nav("about")}</a></li>
              <li><a href="#services" className="hover:text-white">{nav("services")}</a></li>
              <li><a href="#portfolio" className="hover:text-white">{nav("portfolio")}</a></li>
              <li><a href="#why-us" className="hover:text-white">{nav("whyUs")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-accent">
              {t("contactTitle")}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href="tel:+249912353291" className="hover:text-white" dir="ltr">
                  +249 912 353 291
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <a
                  href="mailto:info@ms_square.net"
                  className="hover:text-white"
                  dir="ltr"
                >
                  info@ms_square.net
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{t("addressOffice1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{t("addressOffice2")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} MS Square Engineering. {t("rights")}
        </div>
      </div>
    </footer>
  );
}

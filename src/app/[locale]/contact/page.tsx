import { getTranslations, setRequestLocale } from "next-intl/server";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteWizard from "@/components/QuoteWizard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quote" });
  return { title: t("heading") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "quote" });
  const c = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-sm font-bold uppercase tracking-wider text-accent">
                {t("eyebrow")}
              </h1>
              <p className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
                {t("heading")}
              </p>
              <p className="mt-4 leading-relaxed text-neutral-dark/70">
                {t("intro")}
              </p>
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-5">
              <div className="rounded-2xl border border-neutral-light bg-neutral-light/40 p-6 sm:p-8 lg:col-span-3">
                <QuoteWizard />
              </div>

              <div className="space-y-6 lg:col-span-2">
                <div className="rounded-2xl border border-neutral-light p-6">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Phone size={18} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-neutral-dark/50">
                          {c("phoneLabel")}
                        </p>
                        <a href="tel:+249912353291" className="font-semibold text-neutral-dark" dir="ltr">
                          +249 912 353 291
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail size={18} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-neutral-dark/50">
                          {c("emailLabel")}
                        </p>
                        <a href="mailto:info@mssquare-eng.com" className="font-semibold text-neutral-dark" dir="ltr">
                          info@mssquare-eng.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-neutral-light p-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral-dark/50">
                    {c("officesLabel")}
                  </p>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                      <span>{c("addressOffice1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                      <span>{c("addressOffice2")}</span>
                    </li>
                  </ul>
                </div>

                <div className="overflow-hidden rounded-2xl border border-neutral-light">
                  <iframe
                    title="MS Square — Khartoum"
                    src="https://www.google.com/maps?q=Al-Sheikh+Hospital,+Obeid+Khatim+Street,+Khartoum,+Sudan&z=16&output=embed"
                    className="h-56 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

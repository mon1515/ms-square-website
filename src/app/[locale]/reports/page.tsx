import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Link } from "@/i18n/navigation";
import { reports } from "@/data/reports";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reportsIndex" });
  return { title: t("heading"), description: t("intro") };
}

export default async function ReportsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "reportsIndex" });

  const cards = await Promise.all(
    reports.map(async (report) => {
      const rt = await getTranslations({ locale, namespace: report.namespace });
      return {
        slug: report.slug,
        icon: report.icon,
        eyebrow: rt("eyebrow"),
        heading: rt("heading"),
        excerpt: rt("metaDescription"),
      };
    })
  );

  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 className="text-sm font-bold uppercase tracking-wider text-accent">
              {t("eyebrow")}
            </h1>
            <p className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              {t("heading")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-dark/70">
              {t("intro")}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.slug} delay={i * 0.05}>
                  <Link
                    href={`/reports/${card.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-neutral-light p-6 transition-colors hover:border-primary/30 hover:bg-neutral-light/40 sm:p-8"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      {card.eyebrow}
                    </span>
                    <h2 className="mt-2 text-lg font-bold text-primary">
                      {card.heading}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-dark/70">
                      {card.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      {t("readMore")}
                      <ArrowRight
                        size={16}
                        className="transition-transform rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

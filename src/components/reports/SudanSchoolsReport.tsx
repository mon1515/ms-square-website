import { useTranslations } from "next-intl";
import { Download, FileText, TrendingUp, Users2, CircleDollarSign } from "lucide-react";
import Reveal from "@/components/Reveal";
import CostBandChart from "@/components/reports/CostBandChart";

type Stat = { label: string; value: string };
type Band = { label: string; min: number; max: number; minLabel: string; maxLabel: string };

const statIcons = [CircleDollarSign, CircleDollarSign, CircleDollarSign, TrendingUp, Users2];

export default function SudanSchoolsReport() {
  const t = useTranslations("sudanSchoolsReport");
  const stats = t.raw("stats") as Stat[];
  const figureBands = t.raw("figureBands") as Band[];
  const keyTakeaways = t.raw("keyTakeaways") as string[];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
            {t("eyebrow")}
          </h2>
          <p className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {t("heading")}
          </p>
          <p className="mt-2 text-base font-medium text-neutral-dark/60">
            {t("subheading")}
          </p>
          <span className="mt-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            {t("audienceLabel")}: {t("audienceText")}
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-3xl space-y-4">
          <p className="text-sm leading-relaxed text-neutral-dark/80">{t("excerpt1")}</p>
          <p className="text-sm leading-relaxed text-neutral-dark/80">{t("excerpt2")}</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, i) => {
              const Icon = statIcons[i] ?? CircleDollarSign;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-neutral-light p-4 text-start"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <p className="text-lg font-bold text-primary" dir="ltr">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-neutral-dark/60">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <h3 className="mb-1 text-xl font-bold text-primary">{t("figureTitle")}</h3>
          <p className="mb-5 text-xs text-neutral-dark/50">{t("figureNote")}</p>
          <CostBandChart bands={figureBands} />
        </Reveal>

        <Reveal delay={0.25} className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-primary">{t("keyTakeawaysTitle")}</h3>
          <ul className="space-y-3">
            {keyTakeaways.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-neutral-dark/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.3}
          className="mt-10 flex flex-col gap-5 rounded-2xl bg-primary p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold">{t("ctaTitle")}</h3>
              <p className="mt-1 max-w-md text-sm text-white/80">{t("ctaText")}</p>
            </div>
          </div>
          <a
            href={t("pdfUrl")}
            download
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600"
          >
            <Download size={18} />
            {t("ctaButton")}
          </a>
        </Reveal>
        <p className="mt-3 text-center text-xs text-neutral-dark/40">{t("ctaNote")}</p>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-neutral-dark/40">
          {t("sourceNote")}
        </p>
      </div>
    </section>
  );
}

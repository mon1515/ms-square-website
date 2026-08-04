import { useTranslations } from "next-intl";
import {
  ClipboardCheck,
  Zap,
  Droplets,
  Wrench,
  PaintBucket,
  LayoutGrid,
  Stethoscope,
  Sun,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const itemIcons = [Zap, Droplets, Wrench, PaintBucket, LayoutGrid];
const addonIcons = [Stethoscope, Sun];

type Item = { title: string; price: string; text: string };

export default function AssessmentReport() {
  const t = useTranslations("assessmentReport");
  const items = t.raw("items") as Item[];
  const addons = t.raw("addons") as Item[];
  const facilities = t.raw("facilities") as string[];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
            {t("eyebrow")}
          </h2>
          <p className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {t("heading")}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-dark/70">
            {t("intro")}
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 rounded-2xl border border-neutral-light bg-neutral-light/50 p-6 sm:p-8"
        >
          <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white">
            {t("projectType")}
          </span>
          <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-dark/50">
            {t("facilityLabel")}
          </p>
          <div className="flex flex-wrap gap-2">
            {facilities.map((f) => (
              <span
                key={f}
                className="rounded-md bg-white px-3 py-1.5 text-sm text-neutral-dark ring-1 ring-black/5"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-6">
          <div className="flex flex-col gap-4 rounded-2xl bg-primary p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                <ClipboardCheck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold">{t("step1Title")}</h3>
                <p className="mt-1 max-w-xl text-sm text-white/80">{t("step1Text")}</p>
              </div>
            </div>
            <div className="shrink-0 text-start sm:text-end">
              <p className="text-2xl font-bold text-accent" dir="ltr">
                ${t("step1Price")}
              </p>
              <p className="text-xs text-white/60">{t("step1PriceNote")}</p>
              <p className="mt-1 text-xs font-semibold text-white/80">
                {t("step1Duration")}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <h3 className="mb-6 text-xl font-bold text-primary">{t("breakdownTitle")}</h3>
          <div className="space-y-4">
            {items.map((item, i) => {
              const Icon = itemIcons[i] ?? LayoutGrid;
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-xl border border-neutral-light p-5 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-dark">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-dark/70">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  <p
                    className="shrink-0 whitespace-nowrap font-bold text-primary sm:text-end"
                    dir="ltr"
                  >
                    ${item.price}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-10">
          <h3 className="mb-6 text-xl font-bold text-primary">{t("addonsTitle")}</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {addons.map((item, i) => {
              const Icon = addonIcons[i] ?? Sun;
              return (
                <div key={item.title} className="rounded-xl bg-neutral-light/60 p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-bold text-neutral-dark">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-dark/70">
                    {item.text}
                  </p>
                  <p className="mt-2 font-bold text-accent" dir="ltr">
                    ${item.price}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 rounded-2xl bg-neutral-dark p-6 text-center text-white sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {t("totalLabel")}
          </p>
          <p className="mt-2 text-3xl font-bold">{t("totalValue")}</p>
          <p className="mx-auto mt-3 max-w-lg text-xs text-white/60">{t("totalNote")}</p>
        </Reveal>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-neutral-dark/40">
          {t("sourceNote")}
        </p>
      </div>
    </section>
  );
}

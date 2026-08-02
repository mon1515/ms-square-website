import { useTranslations } from "next-intl";
import { Home, Wrench, Building2, Building } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const icons = [Home, Wrench, Building2, Building];
const values = [65000, 45000, 450000, 280000];

type Item = { title: string };

export default function CostEstimates() {
  const t = useTranslations("costEstimates");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-neutral-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
            {t("eyebrow")}
          </h2>
          <p className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {t("heading")}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title }, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={title} delay={index * 0.1}>
                <div className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <p className="mb-2 text-sm font-semibold leading-snug text-neutral-dark">
                    {title}
                  </p>
                  <p className="text-2xl font-bold text-accent" dir="ltr">
                    <CountUp value={values[index]} prefix="$" />+
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-neutral-dark/50">
          {t("note")}
        </p>
      </div>
    </section>
  );
}

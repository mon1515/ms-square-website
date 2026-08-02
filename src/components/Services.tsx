import { useTranslations } from "next-intl";
import {
  Lightbulb,
  Building,
  KeyRound,
  PaintRoller,
  Hammer,
  Construction,
  Landmark,
  Truck,
  ClipboardList,
  Settings2,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const icons = [
  Lightbulb,
  Building,
  KeyRound,
  PaintRoller,
  Hammer,
  Construction,
  Landmark,
  Truck,
  ClipboardList,
  Settings2,
];

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as string[];

  return (
    <section id="services" className="bg-neutral-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
            {t("eyebrow")}
          </h2>
          <p className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {t("heading")}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((title, index) => {
            const Icon = icons[index] ?? Settings2;
            return (
              <Reveal key={title} delay={(index % 6) * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={22} />
                  </div>
                  <p className="pt-1.5 font-semibold leading-snug text-neutral-dark">
                    {title}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

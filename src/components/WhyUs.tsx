import { useTranslations } from "next-intl";
import {
  HardHat,
  Ruler,
  Clock,
  Layers,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const icons = [HardHat, Ruler, Clock, Layers, ShieldCheck, Handshake];

type Reason = { title: string; text: string };

export default function WhyUs() {
  const t = useTranslations("whyUs");
  const items = t.raw("items") as Reason[];

  return (
    <section id="why-us" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
            {t("eyebrow")}
          </h2>
          <p className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {t("heading")}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, text }, index) => {
            const Icon = icons[index] ?? HardHat;
            return (
              <Reveal key={title} delay={(index % 6) * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:bg-white/10">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                  <p className="leading-relaxed text-white/75">{text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

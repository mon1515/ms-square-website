import { useTranslations } from "next-intl";
import { Target, Eye, Building2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function About() {
  const t = useTranslations("about");

  const cards = [
    { icon: Building2, title: t("aboutTitle"), text: t("aboutText") },
    { icon: Target, title: t("missionTitle"), text: t("missionText") },
    { icon: Eye, title: t("visionTitle"), text: t("visionText") },
  ];

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
            {t("eyebrow")}
          </h2>
          <p className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {t("heading")}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.12}>
              <div className="h-full rounded-2xl border border-neutral-light bg-neutral-light/60 p-8 transition-shadow hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
                <p className="leading-relaxed text-neutral-dark/80">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from "next-intl";
import Image from "next/image";
import Reveal from "@/components/Reveal";

type Project = { titleEn: string; title: string; text: string };

const images = [
  "/assets/projects/sofia-water-factory.jpg",
  "/assets/projects/sally-soap-factory.jpg",
  "/assets/projects/albarjoub-company.jpg",
];

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const items = t.raw("items") as Project[];

  return (
    <section id="portfolio" className="bg-white py-20 sm:py-28">
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
          {items.map((project, index) => (
            <Reveal key={project.titleEn} delay={index * 0.12}>
              <div className="group overflow-hidden rounded-2xl border border-neutral-light shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={images[index]}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {project.titleEn}
                  </p>
                  <h3 className="mt-1 mb-3 text-lg font-bold text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-dark/80">
                    {project.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-primary">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('/assets/projects/project-photo-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary-dark/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <span className="mb-4 inline-block rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent">
          {t("badge")}
        </span>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {t("text")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-accent px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-orange-600"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#portfolio"
            className="rounded-md border border-white/30 bg-white/5 px-8 py-3.5 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}

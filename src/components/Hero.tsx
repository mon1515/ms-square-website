"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import CraneSilhouette from "@/components/CraneSilhouette";

export default function Hero() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const craneLeftY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const craneRightY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-primary">
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/55 to-primary-dark/45" />

      <motion.div
        style={{ y: craneLeftY }}
        className="pointer-events-none absolute -left-4 bottom-0 hidden h-64 w-40 text-white/10 sm:block md:h-80 md:w-48"
      >
        <CraneSilhouette className="h-full w-full" />
      </motion.div>
      <motion.div
        style={{ y: craneRightY }}
        className="pointer-events-none absolute -right-6 top-0 hidden h-56 w-36 -scale-x-100 text-white/10 sm:block md:h-72 md:w-44"
      >
        <CraneSilhouette className="h-full w-full" />
      </motion.div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <Image
            src="/assets/ms-square-logo.png"
            alt="MS Square Engineering"
            width={400}
            height={400}
            className="h-32 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] sm:h-40"
            priority
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-4 inline-block rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent"
        >
          {t("badge")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {t("text")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="rounded-md bg-accent px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-orange-600"
          >
            {t("ctaPrimary")}
          </Link>
          <Link
            href="/#portfolio"
            className="rounded-md border border-white/30 bg-white/5 px-8 py-3.5 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
          >
            {t("ctaSecondary")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

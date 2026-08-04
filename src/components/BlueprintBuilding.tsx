"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";

const UPPER_WINDOW_X = [110, 175, 240];
const GROUND_WINDOW_X = [110, 240]; // middle slot reserved for the door

const FLOORS = [
  { yTop: 335, yBottom: 400, windowY: 352, windowX: GROUND_WINDOW_X }, // ground floor
  { yTop: 270, yBottom: 335, windowY: 287, windowX: UPPER_WINDOW_X },
  { yTop: 205, yBottom: 270, windowY: 222, windowX: UPPER_WINDOW_X },
  { yTop: 140, yBottom: 205, windowY: 157, windowX: UPPER_WINDOW_X },
];

export default function BlueprintBuilding() {
  const t = useTranslations("blueprint");

  return (
    <section className="bg-neutral-dark py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-wider text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {t("heading")}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-sm">
          <svg viewBox="0 0 400 440" className="h-auto w-full">
            {/* Ground line */}
            <line x1="40" y1="400" x2="360" y2="400" stroke="#94A3B8" strokeWidth="2" />

            {/* Blueprint (wireframe) layer — fades out once in view */}
            <motion.g
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.9 }}
              stroke="#5B8DEF"
              strokeWidth="1.5"
              fill="none"
            >
              <rect x="90" y="140" width="220" height="260" />
              <rect x="82" y="122" width="236" height="18" />
              {FLOORS.map((f) => (
                <line key={f.yTop} x1="90" y1={f.yTop} x2="310" y2={f.yTop} />
              ))}
              {FLOORS.map((f) =>
                f.windowX.map((wx) => (
                  <rect key={`${f.yTop}-${wx}`} x={wx} y={f.windowY - 12} width="30" height="34" />
                ))
              )}
              <rect x="180" y="345" width="40" height="55" />
            </motion.g>

            {/* Built (constructed) layer */}
            <rect x="90" y="140" width="220" height="260" fill="#E5E9F0" stroke="#C9D2E0" />
            <rect x="82" y="122" width="236" height="18" fill="#FF5D02" />

            {FLOORS.map((f, i) => (
              <motion.g
                key={f.yTop}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 1 + i * 0.25 }}
              >
                <rect
                  x="90"
                  y={f.yTop}
                  width="220"
                  height={f.yBottom - f.yTop}
                  fill="#F4F6FA"
                  stroke="#0B1FA3"
                  strokeWidth="1"
                />
                {f.windowX.map((wx) => (
                  <rect
                    key={wx}
                    x={wx}
                    y={f.windowY - 12}
                    width="30"
                    height="34"
                    fill="#93C5FD"
                    stroke="#0B1FA3"
                    strokeWidth="1"
                  />
                ))}
              </motion.g>
            ))}

            <motion.rect
              x="180"
              y="345"
              width="40"
              height="55"
              fill="#0B1FA3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 2 }}
            />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}

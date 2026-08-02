"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

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
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.5, 0.3, 0]);
  const captionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [1, 1, 1, 0]);

  // One useTransform pair per floor, unrolled (hooks can't be called in a loop/.map).
  const floor0Opacity = useTransform(scrollYProgress, [0.28, 0.44], [0, 1]);
  const floor0Y = useTransform(scrollYProgress, [0.28, 0.44], [30, 0]);
  const floor1Opacity = useTransform(scrollYProgress, [0.43, 0.59], [0, 1]);
  const floor1Y = useTransform(scrollYProgress, [0.43, 0.59], [30, 0]);
  const floor2Opacity = useTransform(scrollYProgress, [0.58, 0.74], [0, 1]);
  const floor2Y = useTransform(scrollYProgress, [0.58, 0.74], [30, 0]);
  const floor3Opacity = useTransform(scrollYProgress, [0.73, 0.89], [0, 1]);
  const floor3Y = useTransform(scrollYProgress, [0.73, 0.89], [30, 0]);
  const doorOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  const floorMotion = [
    { opacity: floor0Opacity, y: floor0Y },
    { opacity: floor1Opacity, y: floor1Y },
    { opacity: floor2Opacity, y: floor2Y },
    { opacity: floor3Opacity, y: floor3Y },
  ];

  return (
    <section ref={sectionRef} className="relative h-[260vh] bg-neutral-dark">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4">
        <motion.div style={{ opacity: captionOpacity }} className="mb-6 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {t("heading")}
          </h2>
        </motion.div>

        <div className="relative w-full max-w-md">
          <svg viewBox="0 0 400 440" className="h-auto w-full">
            <defs>
              <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4A6CF7" strokeWidth="0.5" />
              </pattern>
            </defs>

            <motion.rect
              x="0"
              y="0"
              width="400"
              height="440"
              fill="url(#blueprintGrid)"
              style={{ opacity: gridOpacity }}
            />

            {/* Ground line */}
            <line x1="40" y1="400" x2="360" y2="400" stroke="#94A3B8" strokeWidth="2" />

            {/* Blueprint (wireframe) layer */}
            <motion.g style={{ opacity: blueprintOpacity }} stroke="#5B8DEF" strokeWidth="1.5" fill="none">
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
              <line x1="60" y1="400" x2="60" y2="415" />
              <line x1="340" y1="400" x2="340" y2="415" />
              <line x1="60" y1="410" x2="340" y2="410" />
              <text x="185" y="428" fill="#94A3B8" fontSize="12" stroke="none">
                12m
              </text>
            </motion.g>

            {/* Built (constructed) layer */}
            <rect x="90" y="140" width="220" height="260" fill="#E5E9F0" stroke="#C9D2E0" />
            <rect x="82" y="122" width="236" height="18" fill="#FF5D02" />

            {FLOORS.map((f, i) => (
              <motion.g key={f.yTop} style={floorMotion[i]}>
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
              style={{ opacity: doorOpacity }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "ms_square_intro_shown";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    if (alreadyShown) return;

    setVisible(true);
    sessionStorage.setItem(STORAGE_KEY, "1");

    const timer = setTimeout(() => setVisible(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-primary"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,93,2,0.25), transparent 60%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <Image
              src="/assets/ms-square-logo.png"
              alt="MS Square Engineering"
              width={400}
              height={400}
              className="h-28 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] sm:h-36"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute bottom-16 h-0.5 w-40 origin-center bg-accent sm:w-56"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

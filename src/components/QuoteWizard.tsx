"use client";

import { useState, type ChangeEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, ChevronLeft, ChevronRight, Upload } from "lucide-react";

type FormState = {
  projectType: string;
  location: string;
  area: string;
  hasPlan: boolean | null;
  files: File[];
  budget: string;
  name: string;
  email: string;
  phone: string;
};

const initialState: FormState = {
  projectType: "",
  location: "",
  area: "",
  hasPlan: null,
  files: [],
  budget: "",
  name: "",
  email: "",
  phone: "",
};

const TOTAL_STEPS = 7;

export default function QuoteWizard() {
  const t = useTranslations("quote");
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");

  const projectTypeOptions = t.raw("projectType.options") as string[];

  const canProceed = (): boolean => {
    switch (step) {
      case 0:
        return form.projectType !== "";
      case 1:
        return form.location.trim() !== "";
      case 2:
        return form.area.trim() !== "";
      case 3:
        return form.hasPlan !== null;
      default:
        return true;
    }
  };

  const goNext = () => {
    if (!canProceed()) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, files: Array.from(event.target.files ?? []) }));
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setError(t("formError"));
      return;
    }
    setError("");

    const hasPlanLabel =
      form.hasPlan === true
        ? t("hasPlan.yes")
        : form.hasPlan === false
          ? t("hasPlan.no")
          : "";

    const lines = [
      `${t("contactStep.name")}: ${form.name}`,
      `${t("contactStep.email")}: ${form.email}`,
      form.phone.trim() ? `${t("contactStep.phone")}: ${form.phone}` : null,
      "",
      `${t("projectType.title")}: ${form.projectType}`,
      `${t("location.title")}: ${form.location}`,
      `${t("area.title")}: ${form.area}`,
      `${t("hasPlan.title")}: ${hasPlanLabel}`,
      form.budget.trim() ? `${t("budget.title")}: ${form.budget}` : null,
      form.files.length
        ? `${t("files.title")}: ${form.files.map((f) => f.name).join(", ")}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:info@mssquare-eng.com?subject=${encodeURIComponent(
      t("mailSubject")
    )}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 24 : -24 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -24 : 24 }),
  };

  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold text-neutral-dark/50">
          {t("stepLabel", { current: step + 1, total: TOTAL_STEPS })}
        </p>
        <div className="flex gap-1.5">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= step ? "bg-accent" : "bg-neutral-light"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative min-h-[220px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {step === 0 && (
              <div>
                <h3 className="mb-4 text-lg font-bold text-primary">
                  {t("projectType.title")}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {projectTypeOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, projectType: option }))}
                      className={`rounded-lg border px-4 py-3 text-sm font-semibold transition-colors ${
                        form.projectType === option
                          ? "border-primary bg-primary text-white"
                          : "border-neutral-light bg-white text-neutral-dark hover:border-primary"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="mb-4 text-lg font-bold text-primary">
                  {t("location.title")}
                </h3>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                  placeholder={t("location.placeholder")}
                  className="w-full rounded-md border border-neutral-light bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="mb-4 text-lg font-bold text-primary">
                  {t("area.title")}
                </h3>
                <input
                  type="text"
                  value={form.area}
                  onChange={(e) => setForm((f) => ({ ...f, area: e.target.value }))}
                  placeholder={t("area.placeholder")}
                  className="w-full rounded-md border border-neutral-light bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="mb-4 text-lg font-bold text-primary">
                  {t("hasPlan.title")}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: true, label: t("hasPlan.yes") },
                    { value: false, label: t("hasPlan.no") },
                  ].map((option) => (
                    <button
                      key={String(option.value)}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, hasPlan: option.value }))}
                      className={`rounded-lg border px-4 py-3 text-sm font-semibold transition-colors ${
                        form.hasPlan === option.value
                          ? "border-primary bg-primary text-white"
                          : "border-neutral-light bg-white text-neutral-dark hover:border-primary"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="mb-1 text-lg font-bold text-primary">
                  {t("files.title")}
                </h3>
                <p className="mb-4 text-sm text-neutral-dark/60">{t("files.hint")}</p>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-neutral-light bg-white px-4 py-8 text-sm font-semibold text-neutral-dark transition-colors hover:border-primary">
                  <Upload size={18} />
                  {form.files.length > 0
                    ? t("files.selected", { count: form.files.length })
                    : t("files.button")}
                  <input type="file" multiple className="hidden" onChange={handleFiles} />
                </label>
                <p className="mt-3 text-xs text-neutral-dark/50">{t("files.note")}</p>
              </div>
            )}

            {step === 5 && (
              <div>
                <h3 className="mb-4 text-lg font-bold text-primary">
                  {t("budget.title")}
                </h3>
                <input
                  type="text"
                  value={form.budget}
                  onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                  placeholder={t("budget.placeholder")}
                  className="w-full rounded-md border border-neutral-light bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
            )}

            {step === 6 && (
              <div>
                <h3 className="mb-4 text-lg font-bold text-primary">
                  {t("contactStep.title")}
                </h3>
                <div className="mb-6 space-y-3">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder={t("contactStep.name")}
                    className="w-full rounded-md border border-neutral-light bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                  <input
                    type="email"
                    dir="ltr"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder={t("contactStep.email")}
                    className="w-full rounded-md border border-neutral-light bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                  <input
                    type="tel"
                    dir="ltr"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder={t("contactStep.phone")}
                    className="w-full rounded-md border border-neutral-light bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div className="rounded-lg bg-neutral-light/60 p-4 text-sm">
                  <p className="mb-2 font-bold text-primary">{t("review.title")}</p>
                  <ul className="space-y-1 text-neutral-dark/80">
                    <li>
                      <span className="font-semibold">{t("review.projectType")}:</span>{" "}
                      {form.projectType}
                    </li>
                    <li>
                      <span className="font-semibold">{t("review.location")}:</span>{" "}
                      {form.location}
                    </li>
                    <li>
                      <span className="font-semibold">{t("review.area")}:</span> {form.area}
                    </li>
                    <li>
                      <span className="font-semibold">{t("review.hasPlan")}:</span>{" "}
                      {form.hasPlan ? t("hasPlan.yes") : t("hasPlan.no")}
                    </li>
                    {form.budget && (
                      <li>
                        <span className="font-semibold">{t("review.budget")}:</span>{" "}
                        {form.budget}
                      </li>
                    )}
                    {form.files.length > 0 && (
                      <li>
                        <span className="font-semibold">{t("review.files")}:</span>{" "}
                        {form.files.map((f) => f.name).join(", ")}
                      </li>
                    )}
                  </ul>
                </div>

                {error && (
                  <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0}
          className="inline-flex items-center gap-1 rounded-md border border-neutral-light px-5 py-2.5 text-sm font-semibold text-neutral-dark transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={16} className="rtl:rotate-180" />
          {t("back")}
        </button>

        {step < TOTAL_STEPS - 1 ? (
          <button
            type="button"
            onClick={goNext}
            disabled={!canProceed()}
            className="inline-flex items-center gap-1 rounded-md bg-accent px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t("next")}
            <ChevronRight size={16} className="rtl:rotate-180" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600"
          >
            <Check size={16} />
            {t("submit")}
          </button>
        )}
      </div>
    </div>
  );
}

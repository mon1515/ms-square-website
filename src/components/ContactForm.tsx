"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(t("formError"));
      return;
    }

    setError("");

    const body = [
      `${t("formName")}: ${name}`,
      `${t("formEmail")}: ${email}`,
      phone.trim() ? `${t("formPhone")}: ${phone}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:info@ms_square.net?subject=${encodeURIComponent(
      t("mailSubject")
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-neutral-dark">
          {t("formName")}
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-neutral-light bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-neutral-dark">
          {t("formEmail")}
        </label>
        <input
          id="email"
          type="email"
          dir="ltr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-neutral-light bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-neutral-dark">
          {t("formPhone")}
        </label>
        <input
          id="phone"
          type="tel"
          dir="ltr"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-md border border-neutral-light bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-neutral-dark">
          {t("formMessage")}
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-md border border-neutral-light bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      {error && <p className="text-sm font-semibold text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-md bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600 sm:w-auto"
      >
        {t("formSubmit")}
      </button>

      <p className="text-xs text-neutral-dark/60">{t("formNote")}</p>
    </form>
  );
}

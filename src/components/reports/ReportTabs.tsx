"use client";

import { Link } from "@/i18n/navigation";

export type ReportTabItem = {
  slug: string;
  label: string;
};

export default function ReportTabs({
  tabs,
  active,
}: {
  tabs: ReportTabItem[];
  active: string;
}) {
  return (
    <div className="sticky top-[65px] z-40 border-b border-neutral-light bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-6 overflow-x-auto" aria-label="Reports">
          {tabs.map((tab) => {
            const isActive = tab.slug === active;
            return (
              <Link
                key={tab.slug}
                href={`/reports/${tab.slug}`}
                className={`shrink-0 whitespace-nowrap border-b-2 py-4 text-sm font-bold transition-colors ${
                  isActive
                    ? "border-accent text-primary"
                    : "border-transparent text-neutral-dark/50 hover:text-primary"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

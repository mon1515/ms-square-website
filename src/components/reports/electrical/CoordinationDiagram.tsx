import { Gauge, Cable, Wrench, ShieldCheck, ArrowRight, CircleCheck } from "lucide-react";

export default function CoordinationDiagram({
  labels,
  result,
}: {
  labels: string[];
  result: string;
}) {
  const icons = [Gauge, Cable, Wrench, ShieldCheck];

  return (
    <div className="rounded-2xl border border-neutral-light bg-neutral-light/40 p-5 sm:p-8">
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-0">
        {labels.map((label, i) => {
          const Icon = icons[i] ?? Gauge;
          return (
            <div key={label} className="flex flex-1 items-center gap-2 sm:flex-col sm:gap-0 sm:text-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mx-auto">
                <Icon size={20} />
              </div>
              <span className="text-xs font-semibold leading-snug text-neutral-dark sm:mt-2">
                {label}
              </span>
              {i < labels.length - 1 && (
                <ArrowRight
                  size={16}
                  className="mx-2 hidden shrink-0 text-neutral-dark/25 sm:mx-auto sm:mt-3 sm:block rtl:rotate-180"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-center">
        <CircleCheck size={18} className="shrink-0 text-accent" />
        <span className="text-sm font-bold text-white">{result}</span>
      </div>
    </div>
  );
}

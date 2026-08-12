import { CircleX, CircleCheck } from "lucide-react";

type Option = { title: string; badge: string; points: string[] };

export default function OptionCompareCards({
  optionA,
  optionB,
}: {
  optionA: Option;
  optionB: Option;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-neutral-light p-5 sm:p-6">
        <span className="inline-block rounded-full bg-neutral-light px-3 py-1 text-xs font-bold text-neutral-dark/60">
          {optionA.badge}
        </span>
        <h4 className="mt-3 font-bold text-neutral-dark">{optionA.title}</h4>
        <ul className="mt-3 space-y-2">
          {optionA.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-neutral-dark/70">
              <CircleX size={16} className="mt-0.5 shrink-0 text-neutral-dark/30" />
              <span className="leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-5 sm:p-6">
        <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
          {optionB.badge}
        </span>
        <h4 className="mt-3 font-bold text-primary">{optionB.title}</h4>
        <ul className="mt-3 space-y-2">
          {optionB.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-neutral-dark/80">
              <CircleCheck size={16} className="mt-0.5 shrink-0 text-accent" />
              <span className="leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

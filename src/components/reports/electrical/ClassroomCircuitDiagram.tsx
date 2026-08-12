import { Boxes, Lightbulb, Plug, Wind } from "lucide-react";

type Circuit = { title: string; note: string };

export default function ClassroomCircuitDiagram({
  boardLabel,
  circuits,
}: {
  boardLabel: string;
  circuits: Circuit[];
}) {
  const icons = [Lightbulb, Plug, Wind];

  return (
    <div className="rounded-2xl border border-neutral-light bg-neutral-light/40 p-5 sm:p-8">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-white">
          <Boxes size={18} />
          <span className="text-sm font-bold">{boardLabel}</span>
        </div>
        <div className="h-6 w-px bg-neutral-light" />
        <div className="h-px w-full max-w-2xl bg-neutral-light" />
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
          {circuits.map((c, i) => {
            const Icon = icons[i] ?? Plug;
            return (
              <div key={c.title} className="flex flex-col items-center text-center">
                <div className="h-6 w-px bg-neutral-light" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={20} />
                </div>
                <span className="mt-2 text-sm font-bold text-neutral-dark">{c.title}</span>
                <span className="mt-1 text-xs leading-relaxed text-neutral-dark/60">{c.note}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

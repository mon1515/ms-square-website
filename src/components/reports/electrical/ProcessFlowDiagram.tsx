import { Search, ClipboardList, PenTool, Calculator, Hammer, CheckCircle2, Handshake } from "lucide-react";

const stepIcons = [Search, ClipboardList, PenTool, Calculator, Hammer, CheckCircle2, Handshake];

export default function ProcessFlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-light bg-neutral-light/40 p-5 sm:p-8">
      <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-0">
        {steps.map((step, i) => {
          const Icon = stepIcons[i] ?? CheckCircle2;
          return (
            <div key={step} className="relative flex flex-col items-center text-center">
              {i > 0 && (
                <span className="absolute end-full top-6 hidden h-px w-full bg-neutral-light lg:block" aria-hidden />
              )}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <Icon size={20} />
              </div>
              <span className="mt-2 text-[11px] font-bold text-neutral-dark/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-0.5 text-xs font-semibold leading-snug text-neutral-dark">
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

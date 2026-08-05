type Band = {
  label: string;
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
};

const SCALE_MAX = 900_000;
const GRIDLINES = [0, 300_000, 600_000, 900_000];

function formatAxisValue(value: number) {
  if (value === 0) return "$0";
  return `$${value / 1000}K`;
}

export default function CostBandChart({ bands }: { bands: Band[] }) {
  return (
    <div className="rounded-2xl border border-neutral-light bg-neutral-light/40 p-5 sm:p-8">
      <div className="space-y-5" dir="ltr">
        {bands.map((band) => {
          const left = (band.min / SCALE_MAX) * 100;
          const width = ((band.max - band.min) / SCALE_MAX) * 100;
          return (
            <div key={band.label}>
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-neutral-dark">
                  {band.label}
                </span>
                <span className="shrink-0 whitespace-nowrap text-sm font-bold text-primary">
                  {band.minLabel} – {band.maxLabel}
                </span>
              </div>
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-neutral-light">
                <div
                  className="absolute inset-y-0 rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ left: `${left}%`, width: `${Math.max(width, 1.5)}%` }}
                />
              </div>
            </div>
          );
        })}

        <div className="flex justify-between border-t border-neutral-light/80 pt-2 text-[11px] font-medium text-neutral-dark/40">
          {GRIDLINES.map((g) => (
            <span key={g}>{formatAxisValue(g)}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

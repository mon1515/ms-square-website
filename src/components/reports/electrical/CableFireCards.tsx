import { Flame, ShieldCheck, Wind } from "lucide-react";

type Card = { title: string; text: string };

export default function CableFireCards({ cards }: { cards: Card[] }) {
  const icons = [Flame, ShieldCheck, Wind];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map((card, i) => {
        const Icon = icons[i] ?? Flame;
        return (
          <div key={card.title} className="rounded-xl border border-neutral-light p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon size={20} />
            </div>
            <h4 className="font-bold text-neutral-dark">{card.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-neutral-dark/70">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
}

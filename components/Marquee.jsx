const clients = [
  "STARTUPS",
  "STUDENTS",
  "FREELANCERS",
  "LOCAL BUSINESSES",
  "FOUNDERS",
  "CREATORS",
  "BRANDS IN BUILDING",
  "STARTUPS",
  "STUDENTS",
  "FREELANCERS",
  "LOCAL BUSINESSES",
  "FOUNDERS",
  "CREATORS",
  "BRANDS IN BUILDING",
];
export default function Marquee() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 mb-6 flex items-baseline justify-between">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Helping ideas become products</p>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground hidden md:block">2026-</p>
      </div>
      <div className="relative">
        <div className="flex gap-14 whitespace-nowrap" style={{ animation: "marquee 20s linear infinite" }}>
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="text-2xl md:text-3xl font-display uppercase text-foreground/70 hover:text-foreground transition">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

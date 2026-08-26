const DEFAULT = [
  "Verticalità di settore",
  "AI operativa",
  "Approvazione umana",
  "Sviluppo iterativo",
  "Precisione tecnica",
  "Un solo team",
  "Affidabilità",
  "Innovazione",
];

export const Marquee = ({ items = DEFAULT }) => {
  const list = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-secondary/40 py-6">
      <div className="marquee-track">
        {list.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-heading text-2xl md:text-3xl font-medium tracking-tight text-muted">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
};

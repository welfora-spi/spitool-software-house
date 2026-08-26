import { TrendingUp, Package, ScanLine, Truck, ChefHat, Trash2, Users2, CalendarClock, LayoutDashboard, MessageSquareText } from "lucide-react";
import { ProductShell } from "@/components/site/ProductShell";
import { Reveal } from "@/components/site/Reveal";
import { getProduct, IMAGES } from "@/data/products";

const product = getProduct("ristoai");

const features = [
  { icon: TrendingUp, title: "Vendite, costi e marginalità", body: "Tutto sotto controllo, in tempo reale." },
  { icon: Package, title: "Magazzino e inventario", body: "Giacenze sempre aggiornate e sotto controllo." },
  { icon: ScanLine, title: "Lettura automatica fatture", body: "Caricamento e lettura automatica dei documenti." },
  { icon: Truck, title: "Fornitori e prezzi d'acquisto", body: "Monitora fornitori e variazioni di prezzo." },
  { icon: ChefHat, title: "Ricette e food cost", body: "Costo effettivo di ogni piatto, sempre chiaro." },
  { icon: Trash2, title: "Monitoraggio sprechi", body: "Individua gli sprechi e riduci le perdite." },
  { icon: Users2, title: "Turni, presenze e personale", body: "Gestione del personale senza fogli di calcolo." },
  { icon: CalendarClock, title: "Scadenze e pagamenti", body: "Nessuna scadenza dimenticata." },
  { icon: LayoutDashboard, title: "Dashboard economica", body: "La salute dell'attività in un colpo d'occhio." },
  { icon: MessageSquareText, title: "Assistente AI", body: "Rispondi a domande ed esegui operazioni a voce." },
];

export default function RistoAI() {
  return (
    <ProductShell
      product={product}
      seoDescription="RistoAI: il gestionale intelligente per bar, ristoranti e pasticcerie. Controlla vendite, costi e marginalità in tempo reale, con un assistente AI in linguaggio naturale."
      intro="Il gestionale intelligente per chi lavora nella ristorazione: tiene sotto controllo vendite, costi e marginalità in tempo reale e risponde alle tue domande sull'attività in linguaggio naturale."
      previewImage={IMAGES.ristoai}
      previewCaption="Mockup illustrativo della dashboard RistoAI · anteprima del prodotto"
      features={features}
    >
      {/* DASHBOARD PREVIEW */}
      <section className="border-y border-border bg-secondary/30 py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Anteprima prodotto</p>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              La tua attività, in un'unica dashboard.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Un'anteprima illustrativa di come RistoAI mostra KPI, andamento delle vendite e ordini.
              Le schermate reali arriveranno con il rilascio del prodotto.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative overflow-hidden rounded-2xl border border-border accent-glow">
            <span className="absolute left-4 top-4 z-10 rounded-full bg-background/80 px-3 py-1 text-xs text-muted backdrop-blur">
              Mockup illustrativo
            </span>
            <img
              src={IMAGES.ristoai}
              alt="Mockup dashboard RistoAI con grafici, KPI e tabella ordini"
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </ProductShell>
  );
}

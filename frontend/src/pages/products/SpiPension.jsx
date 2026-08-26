import { Link } from "react-router-dom";
import { Calculator, TrendingUp, GitCompare, FileText, Users, Sparkles, LineChart, CreditCard, Check } from "lucide-react";
import { ProductShell } from "@/components/site/ProductShell";
import { Reveal } from "@/components/site/Reveal";
import { getProduct, IMAGES } from "@/data/products";

const product = getProduct("spi-pension");

const features = [
  { icon: Calculator, title: "Simulazione pensionistica", body: "Proiezioni chiare su importo e decorrenza della pensione." },
  { icon: LineChart, title: "Analisi della posizione previdenziale", body: "Fotografia completa della situazione contributiva del cliente." },
  { icon: TrendingUp, title: "Calcolo del divario pensionistico", body: "Individua il gap tra ultimo reddito e pensione attesa." },
  { icon: GitCompare, title: "Confronto tra scenari", body: "Metti a confronto scelte diverse e mostra l'impatto." },
  { icon: FileText, title: "Report personalizzati in PDF", body: "Documenti professionali pronti da consegnare al cliente." },
  { icon: Users, title: "Gestione clienti e pratiche", body: "Anagrafiche, pratiche e storico in un unico posto." },
  { icon: Sparkles, title: "Strumenti AI di supporto", body: "L'AI assiste il consulente nell'analisi e nella spiegazione." },
  { icon: CreditCard, title: "Abbonamenti e accesso professionale", body: "Piani pensati per intermediari e consulenti." },
];

export default function SpiPension() {
  return (
    <ProductShell
      product={product}
      seoDescription="SPI Pension: simulazione e analisi previdenziale, calcolo del gap, confronto scenari e report PDF per consulenti previdenziali, intermediari e clienti."
      intro="La piattaforma di analisi e consulenza previdenziale che unisce simulazioni precise, gestione delle pratiche e strumenti AI di supporto al consulente."
      previewImage={IMAGES.spiPension}
      previewCaption="Anteprima dell'interfaccia SPI Pension"
      features={features}
      secondaryCta={
        <a
          href={product.external}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="cta-simulatore"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
        >
          Prova il simulatore gratuito
        </a>
      }
    >
      {/* PRICING */}
      <section className="border-y border-border bg-secondary/30 py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Prezzi</p>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              Un accesso professionale, due formule.
            </h2>
          </Reveal>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            <PriceCard
              label="Mensile"
              price="29,90€"
              per="al mese"
              testid="price-monthly"
            />
            <PriceCard
              label="Annuale"
              price="238,80€"
              per="all'anno"
              highlight
              note="Il piano annuale conviene rispetto al mensile."
              testid="price-yearly"
            />
          </div>
        </div>
      </section>
    </ProductShell>
  );
}

const PriceCard = ({ label, price, per, highlight, note, testid }) => (
  <div
    data-testid={testid}
    className={`relative flex flex-col rounded-2xl border p-8 ${
      highlight ? "border-primary/40 bg-primary/[0.04] accent-glow" : "border-border bg-card"
    }`}
  >
    {highlight && (
      <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
        Consigliato
      </span>
    )}
    <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
    <div className="mt-5 flex items-end gap-2">
      <span className="font-heading text-4xl font-semibold tracking-tight">{price}</span>
      <span className="pb-1 text-sm text-muted">{per}</span>
    </div>
    <ul className="mt-6 space-y-3 text-sm text-muted">
      {["Tutte le funzioni di analisi", "Report PDF illimitati", "Gestione clienti e pratiche", "Strumenti AI di supporto"].map((f) => (
        <li key={f} className="flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" /> {f}
        </li>
      ))}
    </ul>
    {note && <p className="mt-6 text-xs text-muted">{note}</p>}
    <a
      href={product.external}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${
        highlight
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "border border-border hover:border-primary/50 hover:text-primary"
      }`}
    >
      Accedi a SPI Pension
    </a>
  </div>
);

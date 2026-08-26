import { ClipboardList, Bot, PenLine, Target, ShieldCheck, CalendarClock, BarChart3, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";
import { ProductShell } from "@/components/site/ProductShell";
import { Reveal } from "@/components/site/Reveal";
import { getProduct, IMAGES } from "@/data/products";

const product = getProduct("actelya");

const features = [
  { icon: ClipboardList, title: "Costruzione del piano operativo", body: "Dagli obiettivi al piano d'azione concreto, passo per passo." },
  { icon: Bot, title: "Coordinamento di operatori AI", body: "Più operatori AI specializzati che lavorano in parallelo." },
  { icon: PenLine, title: "Contenuti, email e campagne", body: "Creazione di testi e materiali pronti da revisionare." },
  { icon: Target, title: "Individuazione e qualifica prospect", body: "Trova e qualifica i contatti più promettenti." },
  { icon: ShieldCheck, title: "Gestione approvazioni e controlli", body: "Ogni azione chiave passa dall'approvazione umana." },
  { icon: CalendarClock, title: "Attività e appuntamenti", body: "Organizza il calendario commerciale e i follow-up." },
  { icon: BarChart3, title: "Analisi di risultati e KPI", body: "Monitora performance e ritorni in tempo reale." },
  { icon: FileCheck2, title: "Consensi, opposizioni e conformità", body: "Controllo di consensi e conformità sui contatti." },
];

export default function Actelya() {
  return (
    <ProductShell
      product={product}
      seoDescription="ACTELYA: la piattaforma AI operativa per marketing, vendita e gestione commerciale. Assegni un obiettivo e operatori AI costruiscono il piano, creano contenuti e qualificano i contatti."
      intro="Assegni un obiettivo — trovare nuovi clienti, preparare una campagna, ottenere appuntamenti — e ACTELYA costruisce il piano operativo e coordina più operatori AI specializzati per realizzarlo."
      previewImage={IMAGES.actelya}
      previewCaption="Rappresentazione degli operatori AI coordinati da ACTELYA"
      features={features}
    >
      {/* TRUST HIGHLIGHT */}
      <section className="container-x pb-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/[0.05] px-8 py-14 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
            <ShieldCheck className="h-12 w-12 shrink-0 text-primary" strokeWidth={1.3} />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Elemento di fiducia</p>
              <p className="mt-4 max-w-3xl font-heading text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                L'AI propone, l'operatore umano{" "}
                <span className="text-primary">approva sempre</span> prima di ogni azione
                importante.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WORKFLOW */}
      <section className="container-x pb-20 md:pb-28">
        <Reveal className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Come funziona</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            Dall'obiettivo ai risultati, in un flusso continuo.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            { n: "01", t: "Assegni un obiettivo", d: "Nuovi clienti, campagna, appuntamenti." },
            { n: "02", t: "ACTELYA pianifica", d: "Costruisce il piano operativo." },
            { n: "03", t: "Gli operatori agiscono", d: "Contenuti, prospect, attività." },
            { n: "04", t: "Tu approvi e misuri", d: "Controllo umano e KPI in chiaro." },
          ].map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-mono text-sm text-primary">{s.n}</span>
              <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </ProductShell>
  );
}

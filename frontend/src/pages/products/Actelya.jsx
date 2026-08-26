import { ClipboardList, Bot, PenLine, Target, ShieldCheck, CalendarClock, BarChart3, FileCheck2, Sparkles, UserCheck, PlayCircle, ArrowRight, Lock } from "lucide-react";
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
      {/* HUMAN APPROVAL — dedicated highlighted box */}
      <section className="container-x pb-8">
        <Reveal
          data-testid="approval-highlight"
          className="relative overflow-hidden rounded-3xl border-2 border-primary/40 bg-primary/[0.06] px-6 py-12 md:px-14 md:py-16"
        >
          <div className="pointer-events-none absolute -left-20 -bottom-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
              <UserCheck className="h-8 w-8" strokeWidth={1.6} />
            </span>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
                <Lock className="h-3.5 w-3.5" /> Controllo umano garantito
              </div>
              <p className="mt-4 max-w-3xl font-heading text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Ogni azione chiave passa <span className="text-primary">sempre dall'approvazione umana</span> prima di essere eseguita.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                ACTELYA prepara e propone, ma non esegue nulla di importante finché non sei tu ad
                approvare. Nessun invio, nessuna campagna, nessun contatto senza il tuo via libera.
              </p>
            </div>
          </div>

          {/* Approval flow */}
          <div className="relative mt-10 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            <FlowStep icon={Sparkles} step="01" title="L'AI propone" desc="Piano, contenuti e azioni pronti da valutare." />
            <FlowArrow />
            <FlowStep
              icon={UserCheck}
              step="02"
              title="Tu approvi"
              desc="Confermi, modifichi o rifiuti ogni azione chiave."
              highlight
            />
            <FlowArrow />
            <FlowStep icon={PlayCircle} step="03" title="ACTELYA esegue" desc="Solo dopo la tua approvazione l'azione parte." />
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

const FlowStep = ({ icon: Icon, step, title, desc, highlight }) => (
  <div
    className={`flex flex-col rounded-2xl border p-5 ${
      highlight
        ? "border-primary/50 bg-background/60 accent-glow"
        : "border-border bg-background/40"
    }`}
  >
    <div className="flex items-center justify-between">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <span className="font-mono text-xs text-muted">{step}</span>
    </div>
    <h4 className="mt-4 font-heading text-base font-semibold tracking-tight">{title}</h4>
    <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
  </div>
);

const FlowArrow = () => (
  <div className="flex items-center justify-center py-1 text-primary md:py-0">
    <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" />
  </div>
);

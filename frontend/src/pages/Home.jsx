import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Users, Building2, ShieldCheck, Layers, Gauge, GitBranch } from "lucide-react";

import { Seo } from "@/components/site/Seo";
import { MaskedReveal } from "@/components/site/MaskedReveal";
import { Marquee } from "@/components/site/Marquee";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/Magnetic";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS, IMAGES, APP_URL } from "@/data/products";

const METHOD = [
  {
    icon: Layers,
    title: "Verticalità di settore",
    body: "Ogni prodotto nasce per un mestiere preciso: previdenza, ristorazione, gestione d'impresa. Niente strumenti generici.",
  },
  {
    icon: ShieldCheck,
    title: "AI operativa, approvazione umana",
    body: "L'intelligenza artificiale propone ed esegue, ma un operatore umano approva sempre le azioni chiave.",
  },
  {
    icon: Gauge,
    title: "Sviluppo rapido e iterativo",
    body: "Rilasciamo presto, ascoltiamo chi usa davvero lo strumento e miglioriamo a ogni ciclo.",
  },
  {
    icon: GitBranch,
    title: "Un solo team dietro ogni prodotto",
    body: "Competenza di settore e sviluppo software guidato dall'AI, sotto un unico brand.",
  },
];

const professionisti = PRODUCTS.filter((p) => p.world === "professionisti");
const pmi = PRODUCTS.filter((p) => p.world === "pmi");

export default function Home() {
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0]);

  return (
    <>
      <Seo
        title="SPI Tool — Piattaforme SaaS con AI operativa"
        description="Software house italiana specializzata in piattaforme SaaS verticali con intelligenza artificiale operativa per professionisti e imprese. AI sempre supervisionata da un operatore umano."
      />

      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <motion.div
          style={reduce ? {} : { y: bgY, scale: bgScale, opacity: bgOpacity }}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <img
            src={IMAGES.heroAbstract}
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-40 dark:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 -z-10 dotgrid opacity-40" />

        <div className="container-x">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Software house · AI operativa
          </motion.div>

          <h1 className="max-w-5xl font-heading text-4xl font-medium leading-[1.05] tracking-tighter sm:text-5xl lg:text-7xl">
            <MaskedReveal
              lines={[
                "Piattaforme SaaS con",
                <span key="l2">
                  intelligenza artificiale <span className="text-primary">operativa</span>
                </span>,
                "per professionisti e imprese.",
              ]}
            />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted"
          >
            SPI Tool è la software house che sviluppa soluzioni verticali di settore. La nostra AI
            lavora davvero al tuo posto — ma resta sempre supervisionata da un operatore umano.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link
                to="/prodotti"
                data-testid="hero-cta-prodotti"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Esplora i prodotti
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-app"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              Accedi a SPI Pension
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* CATALOGO PRODOTTI */}
      <section className="container-x py-24 md:py-32">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Catalogo prodotti</p>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Quattro prodotti indipendenti, un unico metodo.
            </h2>
          </div>
          <Link
            to="/prodotti"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            Vedi tabella comparativa
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </StaggerGroup>
      </section>

      {/* DUE MONDI, UN METODO */}
      <section className="border-y border-border bg-secondary/30 py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Due mondi, un metodo</p>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Strumenti costruiti attorno a chi li usa.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <WorldPanel
              icon={Users}
              label="Professionisti e consulenti"
              desc="Chi offre consulenza e vive di relazione con il cliente."
              products={professionisti}
              accent="#0055FF"
            />
            <WorldPanel
              icon={Building2}
              label="PMI e attività"
              desc="Chi gestisce un'attività e vuole tenere tutto sotto controllo."
              products={pmi}
              accent="#10B981"
            />
          </div>
        </div>
      </section>

      {/* COME LAVORIAMO */}
      <section className="container-x py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Come lavoriamo</p>
          <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Il metodo dietro ogni prodotto SPI Tool.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 divide-y divide-border border-t border-border md:grid-cols-2 md:divide-y-0">
          {METHOD.map((m, i) => (
            <StaggerItem
              key={m.title}
              className="group relative flex gap-6 border-border py-8 md:px-8 md:[&:nth-child(-n+2)]:border-b md:[&:nth-child(odd)]:border-r md:[&:first-child]:pl-0 md:[&:nth-child(3)]:pl-0"
            >
              <span className="font-mono text-sm text-primary">0{i + 1}</span>
              <div>
                <div className="flex items-center gap-3">
                  <m.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                  <h3 className="font-heading text-xl font-semibold tracking-tight">{m.title}</h3>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{m.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* TRUST BOX */}
      <section className="container-x pb-24 md:pb-32">
        <Reveal className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.04] px-8 py-16 md:px-16 md:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <ShieldCheck className="relative h-10 w-10 text-primary" strokeWidth={1.4} />
          <p className="relative mt-8 max-w-4xl font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            L'AI propone, l'operatore umano{" "}
            <span className="text-primary">approva sempre</span> prima di ogni azione importante.
          </p>
          <p className="relative mt-6 max-w-xl text-muted">
            Nessuna azione critica viene eseguita senza controllo. È così che uniamo la velocità
            dell'intelligenza artificiale alla responsabilità di chi lavora davvero.
          </p>
        </Reveal>
      </section>

      {/* CHI SIAMO BREVE */}
      <section className="border-t border-border bg-secondary/30 py-24 md:py-32">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Chi siamo</p>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              Un team tecnico snello, competenza di settore reale.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Uniamo esperienza in previdenza, welfare e gestione d'impresa allo sviluppo software
              guidato dall'intelligenza artificiale, per costruire strumenti verticali che i
              professionisti usano davvero.
            </p>
            <Link
              to="/chi-siamo"
              data-testid="home-chisiamo-link"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Scopri chi c'è dietro SPI Tool
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {[
              { k: "4", v: "prodotti verticali" },
              { k: "1", v: "team dedicato" },
              { k: "AI", v: "operativa e supervisionata" },
              { k: "Robbiate", v: "sede, provincia di Lecco" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-heading text-3xl font-semibold tracking-tight text-primary">
                  {s.k}
                </p>
                <p className="mt-2 text-sm text-muted">{s.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

const WorldPanel = ({ icon: Icon, label, desc, products, accent }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10"
  >
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
      style={{ background: accent }}
    />
    <div className="flex items-center gap-3">
      <span
        className="flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ background: `${accent}18`, color: accent }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </span>
      <h3 className="font-heading text-2xl font-semibold tracking-tight">{label}</h3>
    </div>
    <p className="mt-4 text-sm leading-relaxed text-muted">{desc}</p>
    <div className="mt-8 space-y-3">
      {products.map((p) => (
        <Link
          key={p.slug}
          to={`/prodotti/${p.slug}`}
          data-testid={`world-product-${p.slug}`}
          className="flex items-center justify-between rounded-xl border border-border px-5 py-4 transition-colors hover:border-primary/40 hover:bg-secondary/50"
        >
          <div>
            <p className="font-medium">{p.name}</p>
            <p className="text-xs text-muted">{p.fn}</p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  </motion.div>
);

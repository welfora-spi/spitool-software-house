import { motion } from "framer-motion";
import { Linkedin, Mail, Plus } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/data/products";

export default function ChiSiamo() {
  return (
    <>
      <Seo
        title="Chi siamo — SPI Tool"
        description="SPI Tool è un team tecnico snello che unisce competenza di settore e sviluppo software guidato dall'AI. Founder & CEO: Raffaele Patarino. Sede a Robbiate (LC)."
      />

      {/* INTRO */}
      <section className="container-x pt-36 pb-16 md:pt-44 md:pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Chi siamo</p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-medium leading-[1.08] tracking-tighter sm:text-5xl lg:text-6xl">
            Competenza di settore e software guidato dall'intelligenza artificiale.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            SPI Tool nasce da New Welfare S.r.l., società con sede a Robbiate (LC). Siamo un team
            tecnico snello che unisce competenza di settore — previdenza, welfare, gestione d'impresa
            — e sviluppo software guidato dall'intelligenza artificiale, per costruire strumenti
            verticali che i professionisti usano davvero.
          </p>
        </Reveal>
      </section>

      {/* VALUES */}
      <section className="border-y border-border bg-secondary/30 py-20 md:py-28">
        <div className="container-x grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { t: "Verticali, non generici", d: "Costruiamo strumenti per un mestiere preciso, non piattaforme che vanno bene per tutto." },
            { t: "AI con la persona al centro", d: "L'automazione accelera il lavoro, ma la decisione finale resta sempre umana." },
            { t: "Vicini a chi li usa", d: "Ascoltiamo i professionisti e iteriamo velocemente sui prodotti." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08} className="rounded-2xl border border-border bg-card p-8">
              <span className="font-mono text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="container-x py-24 md:py-32">
        <Reveal className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Il team</p>
          <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            Le persone dietro SPI Tool.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="group overflow-hidden rounded-2xl border border-border bg-card"
            data-testid="founder-card"
          >
            <div className="relative overflow-hidden">
              <img
                src={IMAGES.founder}
                alt="Raffaele Patarino, Founder & CEO di SPI Tool"
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Founder & CEO</p>
              <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight">
                Raffaele Patarino
              </h3>
              <div className="mt-4 flex gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted">
                  <Linkedin className="h-4 w-4" />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted">
                  <Mail className="h-4 w-4" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Open placeholder slots */}
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border p-8 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted">
                <Plus className="h-5 w-5" />
              </span>
              <p className="mt-5 font-heading text-lg font-medium tracking-tight">
                Il team cresce
              </p>
              <p className="mt-2 max-w-xs text-sm text-muted">
                Stiamo ampliando la squadra tecnica e di settore.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

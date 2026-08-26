import { ShoppingCart, Boxes, FileText, ReceiptText, Wallet, Contact, TrendingUp, Landmark, CalendarDays, Archive, SlidersHorizontal, LayoutDashboard, CornerDownLeft } from "lucide-react";
import { motion } from "framer-motion";
import { ProductShell } from "@/components/site/ProductShell";
import { Reveal } from "@/components/site/Reveal";
import { getProduct, IMAGES } from "@/data/products";

const product = getProduct("gestionale-pmi");

const features = [
  { icon: ShoppingCart, title: "Acquisti e fatture fornitori" },
  { icon: Boxes, title: "Magazzino e inventario" },
  { icon: FileText, title: "Preventivi e ordini" },
  { icon: ReceiptText, title: "DDT e fatture di vendita" },
  { icon: Wallet, title: "Incassi e prima nota" },
  { icon: Contact, title: "Anagrafica clienti e fornitori" },
  { icon: TrendingUp, title: "Costi, ricavi e scadenze" },
  { icon: Landmark, title: "Cassa e banche" },
  { icon: CalendarDays, title: "Turni, presenze, ferie e permessi" },
  { icon: Archive, title: "Archivio documentale" },
  { icon: SlidersHorizontal, title: "Controllo di gestione" },
  { icon: LayoutDashboard, title: "Dashboard aziendale" },
];

export default function GestionalePMI() {
  return (
    <ProductShell
      product={product}
      seoDescription="Gestionale AI per PMI: scrivi una richiesta in linguaggio naturale e il sistema esegue davvero l'operazione, dagli acquisti alla prima nota. Amministrazione e operatività per piccole e medie imprese."
      intro="Il gestionale che parla la tua lingua: scrivi una richiesta in linguaggio naturale e il sistema esegue davvero l'operazione, dagli acquisti alla prima nota."
      previewImage={IMAGES.gestionale}
      previewCaption="Interfaccia AI in linguaggio naturale · anteprima del prodotto"
      features={features}
    >
      {/* NATURAL LANGUAGE HIGHLIGHT */}
      <section className="border-y border-border bg-secondary/30 py-20 md:py-28">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Elemento distintivo</p>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              Scrivi cosa ti serve. Il gestionale lo fa.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted">
              Niente menu infiniti da imparare. Descrivi l'operazione in linguaggio naturale e il
              sistema la esegue davvero — sempre entro le operazioni autorizzate.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
                <span className="ml-2 text-xs text-muted">Gestionale AI · comando</span>
              </div>
              <div className="space-y-4 p-6">
                <div className="rounded-xl border border-border bg-secondary/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-muted">Tu scrivi</p>
                  <p className="mt-2 font-mono text-sm leading-relaxed">
                    “Prepara la fattura per il cliente Rossi da inviare entro venerdì”
                  </p>
                </div>
                <div className="flex justify-center text-muted">
                  <CornerDownLeft className="h-5 w-5" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-xl border border-primary/30 bg-primary/[0.06] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-primary">Azione eseguita</p>
                  <p className="mt-2 text-sm leading-relaxed">
                    Fattura per <span className="font-medium">cliente Rossi</span> creata e messa in
                    coda d'invio con scadenza <span className="font-medium">venerdì</span>.
                    In attesa della tua conferma finale.
                  </p>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </ProductShell>
  );
}

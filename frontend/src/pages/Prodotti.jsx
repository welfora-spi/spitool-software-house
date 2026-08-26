import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Seo } from "@/components/site/Seo";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { StatusBadge } from "@/components/site/StatusBadge";
import { ProductCTA } from "@/components/site/ProductCard";
import { PRODUCTS, IMAGES } from "@/data/products";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PREVIEWS = {
  "spi-pension": IMAGES.spiPension,
  actelya: IMAGES.actelya,
  ristoai: IMAGES.ristoai,
  "gestionale-pmi": IMAGES.gestionale,
};

export default function Prodotti() {
  return (
    <>
      <Seo
        title="Prodotti — SPI Tool"
        description="I prodotti SaaS di SPI Tool: SPI Pension, ACTELYA, RistoAI e Gestionale AI per PMI. Confronta destinatari, funzione principale e stato di sviluppo."
      />

      {/* HERO */}
      <section className="container-x pt-36 pb-16 md:pt-44 md:pb-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Prodotti</p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-medium leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
            Un catalogo di piattaforme verticali, ognuna con il suo pubblico.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Prodotti indipendenti tra loro, uniti dallo stesso approccio: AI operativa e
            supervisione umana su ogni azione che conta.
          </p>
        </Reveal>
      </section>

      {/* TABELLA COMPARATIVA */}
      <section className="container-x pb-24">
        <Reveal className="overflow-hidden rounded-2xl border border-border">
          <Table data-testid="products-comparison-table">
            <TableHeader>
              <TableRow className="bg-secondary/50 hover:bg-secondary/50">
                <TableHead className="py-5 pl-6 text-xs uppercase tracking-[0.15em] text-muted">
                  Prodotto
                </TableHead>
                <TableHead className="text-xs uppercase tracking-[0.15em] text-muted">
                  Destinatari
                </TableHead>
                <TableHead className="text-xs uppercase tracking-[0.15em] text-muted">
                  Funzione principale
                </TableHead>
                <TableHead className="text-xs uppercase tracking-[0.15em] text-muted">
                  Stato
                </TableHead>
                <TableHead className="pr-6" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {PRODUCTS.map((p) => (
                <TableRow key={p.slug} className="border-border" data-testid={`table-row-${p.slug}`}>
                  <TableCell className="py-5 pl-6 font-heading text-base font-semibold tracking-tight">
                    <Link to={`/prodotti/${p.slug}`} className="hover:text-primary">
                      {p.name}
                    </Link>
                  </TableCell>
                  <TableCell className="max-w-[220px] text-sm text-muted">
                    {p.audience}
                  </TableCell>
                  <TableCell className="max-w-[240px] text-sm text-muted">{p.fn}</TableCell>
                  <TableCell>
                    <StatusBadge status={p.status} />
                  </TableCell>
                  <TableCell className="pr-6 text-right">
                    <Link
                      to={`/prodotti/${p.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      Apri <ArrowRight className="h-4 w-4" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Reveal>
      </section>

      {/* SEZIONI PRODOTTO */}
      <section className="border-t border-border">
        {PRODUCTS.map((p, i) => (
          <div
            key={p.slug}
            className={`border-b border-border ${i % 2 === 1 ? "bg-secondary/30" : ""}`}
          >
            <div className="container-x grid grid-cols-1 items-center gap-10 py-20 md:py-28 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-muted">0{i + 1}</span>
                  <StatusBadge status={p.status} />
                </div>
                <h2 className="mt-5 font-heading text-3xl font-medium tracking-tight sm:text-4xl">
                  {p.name}
                </h2>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">{p.tagline}</p>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">{p.oneLine}</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <ProductCTA product={p} />
                  <Link
                    to={`/prodotti/${p.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                  >
                    Dettagli prodotto
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl border border-border ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={PREVIEWS[p.slug]}
                  alt={`Anteprima ${p.name}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

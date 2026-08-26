import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { Seo } from "@/components/site/Seo";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { StatusBadge } from "@/components/site/StatusBadge";
import { ProductCTA } from "@/components/site/ProductCard";

// Shared shell for product detail pages
export const ProductShell = ({
  product,
  seoDescription,
  intro,
  previewImage,
  previewCaption,
  features,
  secondaryCta,
  children,
}) => {
  return (
    <>
      <Seo title={`${product.name} — SPI Tool`} description={seoDescription} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 dotgrid opacity-40" />
        <div className="container-x">
          <Link
            to="/prodotti"
            data-testid="back-to-products"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Tutti i prodotti
          </Link>

          <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <StatusBadge status={product.status} />
              <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">Destinatari</p>
              <p className="mt-2 max-w-lg text-sm text-foreground/90">{product.audience}</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <ProductCTA product={product} />
                {secondaryCta}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl border border-border accent-glow">
                <img
                  src={previewImage}
                  alt={`Anteprima ${product.name}`}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              {previewCaption && (
                <p className="mt-3 text-center text-xs text-muted">{previewCaption}</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-x py-20 md:py-28">
        <Reveal className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Funzionalità</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            Cosa puoi fare con {product.name}.
          </h2>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title} className="bg-card">
              <div className="group h-full p-7 transition-colors hover:bg-secondary/40">
                <f.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight">
                  {f.title}
                </h3>
                {f.body && <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {children}

      {/* CLOSING CTA */}
      <section className="container-x pb-24 md:pb-32">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-secondary/40 px-8 py-14 text-center md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {product.status === "disponibile"
              ? `Inizia subito con ${product.name}.`
              : `Vuoi essere tra i primi a usare ${product.name}?`}
          </h2>
          <div className="mt-8 flex justify-center">
            <ProductCTA product={product} />
          </div>
        </Reveal>
      </section>
    </>
  );
};

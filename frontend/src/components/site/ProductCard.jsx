import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { StatusBadge } from "@/components/site/StatusBadge";

// CTA logic: available product -> external app; others -> contact form preselect
export const ProductCTA = ({ product, className = "", variant = "solid" }) => {
  const isAvailable = product.status === "disponibile";
  const label = isAvailable ? `Accedi a ${product.name}` : "Richiedi accesso anticipato";
  const base =
    "group inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-border hover:border-primary/50 hover:text-primary";

  if (isAvailable) {
    return (
      <a
        href={product.external}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`cta-${product.slug}`}
        className={`${base} ${styles} ${className}`}
      >
        {label}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    );
  }
  return (
    <Link
      to={`/contatti?prodotto=${encodeURIComponent(product.name)}`}
      data-testid={`cta-${product.slug}`}
      className={`${base} ${styles} ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
};

export const ProductCard = ({ product, index = 0, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40 ${className}`}
      data-testid={`product-card-${product.slug}`}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: product.accent }}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-xs text-muted">0{index + 1}</span>
          <StatusBadge status={product.status} />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-semibold tracking-tight">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{product.oneLine}</p>
      </div>
      <div className="relative mt-8 flex items-center justify-between">
        <Link
          to={`/prodotti/${product.slug}`}
          data-testid={`product-card-link-${product.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
        >
          Scopri di più
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <span
          className="h-9 w-9 rounded-full border border-border"
          style={{ background: `${product.accent}14` }}
        />
      </div>
    </motion.div>
  );
};

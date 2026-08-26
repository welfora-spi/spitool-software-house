import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { PRODUCTS, APP_URL } from "@/data/products";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-secondary/30" data-testid="footer">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading text-lg font-bold">
                S
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight">SPI Tool</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Software house specializzata in piattaforme SaaS con intelligenza artificiale
              operativa per professionisti e imprese.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted">Prodotti</h4>
            <ul className="mt-5 space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/prodotti/${p.slug}`}
                    data-testid={`footer-product-${p.slug}`}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted">Azienda</h4>
            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/chi-siamo" className="text-sm text-foreground/80 hover:text-primary">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-sm text-foreground/80 hover:text-primary">
                  Contatti
                </Link>
              </li>
              <li>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-primary"
                >
                  Accedi all'app <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted">Contatti</h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@spitool.it" className="hover:text-primary">
                  info@spitool.it
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Robbiate (LC), Italia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {year} SPI Tool — New Welfare S.r.l. · P.IVA IT00000000000 · Robbiate (LC) · v1.0.1</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link to="/cookie" className="hover:text-primary">
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

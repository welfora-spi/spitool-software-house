import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { PRODUCTS, APP_URL } from "@/data/products";

const NAV = [
  { to: "/prodotti", label: "Prodotti" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/contatti", label: "Contatti" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,border,padding] duration-300 ${
          scrolled ? "glass border-b border-border py-3" : "border-b border-transparent py-5"
        }`}
      >
        <nav className="container-x flex items-center justify-between">
          <Link
            to="/"
            data-testid="nav-logo"
            className="group flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading text-lg font-bold">
              S
            </span>
            <span className="font-heading text-lg font-semibold tracking-tight">
              SPI Tool
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:flex" />
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-app-cta"
              className="group hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              Accedi
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              data-testid="nav-mobile-toggle"
              aria-label="Menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background pt-24 md:hidden"
            data-testid="mobile-menu"
          >
            <div className="container-x flex flex-col gap-2">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-4 font-heading text-3xl font-medium tracking-tight"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/prodotti/${p.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted"
                  >
                    {p.name}
                  </Link>
                ))}
                <div className="mt-4 flex items-center gap-3">
                  <ThemeToggle />
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                  >
                    Accedi all'app <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

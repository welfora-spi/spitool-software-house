import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Seo } from "@/components/site/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Pagina non trovata — SPI Tool" description="La pagina che cerchi non esiste." />
      <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="mt-4 font-heading text-4xl font-medium tracking-tighter sm:text-6xl">
          Pagina non trovata.
        </h1>
        <p className="mt-5 max-w-md text-muted">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link
          to="/"
          data-testid="notfound-home-link"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Torna alla home
        </Link>
      </section>
    </>
  );
}

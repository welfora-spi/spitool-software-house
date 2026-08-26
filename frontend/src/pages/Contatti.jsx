import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/Magnetic";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PRODUCT_OPTIONS = ["SPI Pension", "ACTELYA", "RistoAI", "Gestionale AI per PMI", "Altro"];

const schema = z.object({
  nome: z.string().min(2, "Inserisci il tuo nome"),
  email: z.string().email("Inserisci un'email valida"),
  azienda: z.string().optional(),
  prodotto: z.string().min(1, "Seleziona un prodotto"),
  messaggio: z.string().min(10, "Scrivi almeno qualche parola (min. 10 caratteri)"),
});

export default function Contatti() {
  const [params] = useSearchParams();
  const preselect = params.get("prodotto");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      azienda: "",
      prodotto: PRODUCT_OPTIONS.includes(preselect) ? preselect : "",
      messaggio: "",
    },
  });

  useEffect(() => {
    if (preselect && PRODUCT_OPTIONS.includes(preselect)) {
      setValue("prodotto", preselect);
    }
  }, [preselect, setValue]);

  const prodotto = watch("prodotto");

  const onSubmit = async (data) => {
    // Client-side only: no backend submission in this phase.
    await new Promise((r) => setTimeout(r, 700));
    console.log("Richiesta demo (client-side):", data);
    toast.success("Richiesta inviata", {
      description: "Grazie! Ti ricontatteremo al più presto.",
      icon: <CheckCircle2 className="h-4 w-4" />,
    });
    reset({ nome: "", email: "", azienda: "", prodotto: "", messaggio: "" });
  };

  return (
    <>
      <Seo
        title="Contatti — SPI Tool"
        description="Richiedi una demo dei prodotti SPI Tool: SPI Pension, ACTELYA, RistoAI, Gestionale AI per PMI. Scrivici a info@spitool.it. Sede a Robbiate (LC)."
      />

      <section className="container-x pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Contatti</p>
            <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
              Parliamo del tuo prodotto.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Richiedi una demo o l'accesso anticipato. Compila il modulo e ti ricontatteremo con i
              prossimi passi.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:info@spitool.it"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                data-testid="contact-email"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Email</p>
                  <p className="mt-1 font-medium">info@spitool.it</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Sede</p>
                  <p className="mt-1 font-medium">Robbiate (LC), Italia</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              data-testid="contact-form"
              className="rounded-3xl border border-border bg-card p-7 md:p-9"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Nome" error={errors.nome?.message}>
                  <Input
                    data-testid="input-nome"
                    placeholder="Il tuo nome"
                    {...register("nome")}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <Input
                    data-testid="input-email"
                    type="email"
                    placeholder="nome@azienda.it"
                    {...register("email")}
                  />
                </Field>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Azienda (facoltativo)" error={errors.azienda?.message}>
                  <Input
                    data-testid="input-azienda"
                    placeholder="Nome azienda"
                    {...register("azienda")}
                  />
                </Field>
                <Field label="Prodotto di interesse" error={errors.prodotto?.message}>
                  <Select value={prodotto} onValueChange={(v) => setValue("prodotto", v, { shouldValidate: true })}>
                    <SelectTrigger data-testid="select-prodotto">
                      <SelectValue placeholder="Seleziona un prodotto" />
                    </SelectTrigger>
                    <SelectContent>
                      {PRODUCT_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt} data-testid={`option-${opt}`}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Messaggio" error={errors.messaggio?.message}>
                  <Textarea
                    data-testid="input-messaggio"
                    rows={5}
                    placeholder="Raccontaci di cosa hai bisogno…"
                    {...register("messaggio")}
                  />
                </Field>
              </div>

              <div className="mt-7">
                <Magnetic>
                  <button
                    type="submit"
                    data-testid="submit-contact"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                  >
                    {isSubmitting ? "Invio in corso…" : "Invia richiesta"}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Magnetic>
                <p className="mt-4 text-xs text-muted">
                  Inviando accetti di essere ricontattato in merito alla tua richiesta.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const Field = ({ label, error, children }) => (
  <div>
    <Label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted">{label}</Label>
    {children}
    {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
  </div>
);

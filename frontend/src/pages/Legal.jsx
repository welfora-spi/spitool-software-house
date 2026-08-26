import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    desc: "Informativa sul trattamento dei dati personali di SPI Tool.",
    intro:
      "La presente informativa descrive come SPI Tool (New Welfare S.r.l.) tratta i dati personali raccolti tramite questo sito. Questa è una versione preliminare, da completare con i riferimenti definitivi.",
    blocks: [
      { h: "Titolare del trattamento", p: "New Welfare S.r.l., con sede a Robbiate (LC). Email: info@spitool.it." },
      { h: "Dati raccolti", p: "I dati inviati tramite il modulo di contatto (nome, email, azienda, prodotto di interesse, messaggio) sono utilizzati esclusivamente per rispondere alle richieste." },
      { h: "Finalità", p: "Gestione delle richieste commerciali e di demo. I dati non vengono ceduti a terzi non autorizzati." },
      { h: "Diritti dell'interessato", p: "Puoi richiedere accesso, rettifica o cancellazione dei tuoi dati scrivendo a info@spitool.it." },
    ],
  },
  cookie: {
    title: "Cookie Policy",
    desc: "Informativa sull'uso dei cookie del sito SPI Tool.",
    intro:
      "Questo sito utilizza un numero minimo di cookie tecnici necessari al funzionamento. Questa è una versione preliminare, da completare con i riferimenti definitivi.",
    blocks: [
      { h: "Cookie tecnici", p: "Utilizzati per il corretto funzionamento del sito, ad esempio per memorizzare la preferenza del tema chiaro/scuro." },
      { h: "Cookie di terze parti", p: "Attualmente non vengono utilizzati cookie di profilazione di terze parti." },
      { h: "Gestione delle preferenze", p: "Puoi gestire i cookie dalle impostazioni del tuo browser." },
    ],
  },
};

export default function Legal({ kind }) {
  const c = CONTENT[kind] || CONTENT.privacy;
  return (
    <>
      <Seo title={`${c.title} — SPI Tool`} description={c.desc} />
      <section className="container-x pt-36 pb-24 md:pt-44 md:pb-32">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Legale</p>
          <h1 className="mt-5 font-heading text-4xl font-medium tracking-tighter sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-6 leading-relaxed text-muted">{c.intro}</p>
          <div className="mt-12 space-y-8">
            {c.blocks.map((b) => (
              <div key={b.h}>
                <h2 className="font-heading text-xl font-semibold tracking-tight">{b.h}</h2>
                <p className="mt-3 leading-relaxed text-muted">{b.p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

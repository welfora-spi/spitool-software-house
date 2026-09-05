// Shared product & site data for SPI Tool

export const IMAGES = {
  heroAbstract:
    "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjB0ZWNobm9sb2d5JTIwbmV0d29yayUyMG1lc2glMjBkYXJrfGVufDB8fHx8MTc4NzczMzY3MHww&ixlib=rb-4.1.0&q=85",
  founder:
    "https://images.unsplash.com/photo-1764546899196-b53061b1b609?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwzfHxjb25maWRlbnQlMjBwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwc3R1ZGlvJTIwZGFya3xlbnwwfHx8fDE3ODc3MzM2NzB8MA&ixlib=rb-4.1.0&q=85",
  spiPension:
    "https://static.prod-images.emergentagent.com/jobs/38d9863e-acdf-4654-a427-8a4a108720a7/images/0cc2aba6d730ed64678c23b090a61466b42fc8528fc04d18079a464dc1afd19f.jpeg",
  actelya:
    "https://static.prod-images.emergentagent.com/jobs/38d9863e-acdf-4654-a427-8a4a108720a7/images/d8c2046ebe4705ed68677c317faf5fc1e8b5fc5ae75b37c9c1906a5ecf7da0e8.jpeg",
  ristoai:
    "https://static.prod-images.emergentagent.com/jobs/38d9863e-acdf-4654-a427-8a4a108720a7/images/4ae8496f87b1aad1d29cd06f011f7e590e4c6d3941f6feaec55f501b08c9a01a.jpeg",
  gestionale:
    "https://static.prod-images.emergentagent.com/jobs/38d9863e-acdf-4654-a427-8a4a108720a7/images/fdcbcecd7ff96bac5e48cbcadda79e67eefa0641e5d2ee3159c2c86c50db0daf.jpeg",
};

export const APP_URL = "https://pension.spitool.it";

// status: "disponibile" | "beta" | "sviluppo"
export const PRODUCTS = [
  {
    slug: "spi-pension",
    name: "SPI Pension",
    tagline: "Analisi e consulenza previdenziale, potenziate dall'AI.",
    oneLine: "Simulazioni, gap previdenziale e report PDF per consulenti e clienti.",
    audience: "Consulenti previdenziali, intermediari, clienti",
    audienceShort: "Consulenti previdenziali, intermediari, clienti",
    fn: "Analisi e consulenza previdenziale",
    status: "disponibile",
    world: "professionisti",
    accent: "#0055FF",
    external: APP_URL,
  },
  {
    slug: "actelya",
    name: "ACTELYA",
    tagline: "La piattaforma AI operativa per marketing, vendita e gestione commerciale.",
    oneLine: "Operatori AI che costruiscono il piano, creano campagne e qualificano contatti.",
    audience: "Consulenti, agenzie, PMI",
    audienceShort: "Consulenti, agenzie, PMI",
    fn: "Marketing e vendita gestiti da operatori AI",
    status: "sviluppo",
    world: "professionisti",
    accent: "#7C3AED",
  },
  {
    slug: "ristoai",
    name: "RistoAI",
    tagline: "Il gestionale intelligente per la ristorazione.",
    oneLine: "Vendite, costi e marginalità in tempo reale, con assistente in linguaggio naturale.",
    audience: "Bar, ristoranti, pasticcerie",
    audienceShort: "Bar, ristoranti, pasticcerie",
    fn: "Gestione completa dell'attività",
    status: "sviluppo",
    world: "pmi",
    accent: "#10B981",
  },
  {
    slug: "gestionale-pmi",
    name: "Gestionale AI per PMI",
    tagline: "Il gestionale che parla la tua lingua ed esegue davvero le operazioni.",
    oneLine: "Scrivi una richiesta in linguaggio naturale, il sistema esegue l'operazione.",
    audience: "Piccole e medie imprese",
    audienceShort: "Piccole e medie imprese",
    fn: "Amministrazione e operatività aziendale",
    status: "sviluppo",
    world: "pmi",
    accent: "#F59E0B",
  },
];

export const STATUS_LABEL = {
  disponibile: "Disponibile",
  beta: "In prova · Beta",
  sviluppo: "In sviluppo",
};

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);

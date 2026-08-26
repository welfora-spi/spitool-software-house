import { useParams, Navigate } from "react-router-dom";
import SpiPension from "@/pages/products/SpiPension";
import Actelya from "@/pages/products/Actelya";
import RistoAI from "@/pages/products/RistoAI";
import GestionalePMI from "@/pages/products/GestionalePMI";

const MAP = {
  "spi-pension": SpiPension,
  actelya: Actelya,
  ristoai: RistoAI,
  "gestionale-pmi": GestionalePMI,
};

export default function ProductRouter() {
  const { slug } = useParams();
  const Page = MAP[slug];
  if (!Page) return <Navigate to="/prodotti" replace />;
  return <Page />;
}

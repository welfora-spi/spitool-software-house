import "@/App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "@/context/theme";
import { ReactLenis } from "lenis/react";
import { Toaster } from "@/components/ui/sonner";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";

import Home from "@/pages/Home";
import Prodotti from "@/pages/Prodotti";
import ProductRouter from "@/pages/ProductRouter";
import ChiSiamo from "@/pages/ChiSiamo";
import Contatti from "@/pages/Contatti";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/NotFound";

const Layout = () => (
  <div className="App flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/prodotti" element={<Prodotti />} />
              <Route path="/prodotti/:slug" element={<ProductRouter />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="/privacy" element={<Legal kind="privacy" />} />
              <Route path="/cookie" element={<Legal kind="cookie" />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Toaster position="bottom-right" richColors />
        </BrowserRouter>
      </ReactLenis>
    </ThemeProvider>
  );
}

export default App;

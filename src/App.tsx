import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import HSE from "./pages/HSE";
import Services from "./pages/Services";
import Slickline from "./pages/services/Slickline";
import BHPSurvey from "./pages/services/BHPSurvey";
import Wellhead from "./pages/services/Wellhead";
import Marine from "./pages/services/Marine";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/hse" element={<HSE />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/slickline" element={<Slickline />} />
          <Route path="/services/bhp-survey" element={<BHPSurvey />} />
          <Route path="/services/wellhead" element={<Wellhead />} />
          <Route path="/services/marine" element={<Marine />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

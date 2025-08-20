import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";
import SEOCaseStudy1 from "./pages/SEOCaseStudy1";
import SEOCaseStudy2 from "./pages/SEOCaseStudy2";
import SEOCaseStudy3 from "./pages/SEOCaseStudy3";
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/seo-case-study-1" element={<SEOCaseStudy1 />} />
          <Route path="/seo-case-study-2" element={<SEOCaseStudy2 />} />
          <Route path="/seo-case-study-3" element={<SEOCaseStudy3 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

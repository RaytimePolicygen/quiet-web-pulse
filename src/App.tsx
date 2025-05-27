import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Rethink from "./pages/homecomponents/Rethink";
import Autonomous from "./pages/homecomponents/Atuutonomous";
import Yourpod from "./pages/homecomponents/Yourpod";
import TheTimeIsRight from "./pages/homecomponents/TheTimeIsRight";
import ContactUs from "./pages/homecomponents/ContactUs";
import Firsttoknow from "./pages/homecomponents/Firsttoknow";
import Partner from "./pages/homecomponents/Partner";
import OurTeamHeader from "./pages/homecomponents/Ourteamheader";
import Privacypolicy from "./pages/homecomponents/Privacypolicy";
import Terms from "./pages/homecomponents/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/about" element={<Layout><OurTeamHeader/></Layout>} />
            <Route path="/experience" element={<Layout><Autonomous /></Layout>} />
            <Route path="/ourmission" element={<Layout><Rethink /></Layout>} />
            <Route path="/yourpod" element={<Layout><Yourpod /></Layout>} />
            <Route path="/contact" element={<Layout><ContactUs /></Layout>} />
            <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
            <Route path="/updates" element={<Layout><ContactUs/></Layout>} />
            <Route path="/partner" element={<Layout><Partner/></Layout>}/>
            <Route path="/privacy" element={<Layout><Privacypolicy/></Layout>}/>
            <Route path="/terms" element={<Layout><Terms/></Layout>}/>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
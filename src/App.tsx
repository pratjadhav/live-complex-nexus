import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Profile } from "./pages/Profile";
import { Dashboard } from "./pages/Dashboard";
import { Forums } from "./pages/Forums";
import { GST } from "./pages/GST";
import { Helpdesk } from "./pages/Helpdesk";
import { Gatekeeper } from "./pages/Gatekeeper";
import { Meetings } from "./pages/Meetings";
import { Directory } from "./pages/Directory";
import { Repository } from "./pages/Repository";
import { Accounting } from "./pages/Accounting";
import { Income } from "./pages/Income";
import { Expenditure } from "./pages/Expenditure";
import { Workflow } from "./pages/Workflow";
import { Utilities } from "./pages/Utilities";
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
          <Route path="/dashboard" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/gst" element={<GST />} />
          <Route path="/helpdesk" element={<Helpdesk />} />
          <Route path="/gatekeeper" element={<Gatekeeper />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/repository" element={<Repository />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenditure" element={<Expenditure />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/utilities" element={<Utilities />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

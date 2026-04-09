import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FoundationalEssay from "./pages/FoundationalEssay";
import ThreeLayerModel from "./pages/ThreeLayerModel";
import GovernanceByDesign from "./pages/GovernanceByDesign";
import Dictionary from "./pages/Dictionary";
import Essays from "./pages/Essays";
import EssayEntropy from "./pages/EssayEntropy";
import EssayJudgment from "./pages/EssayJudgment";
import EssayGovernance from "./pages/EssayGovernance";
import EssayTuesday from "./pages/EssayTuesday";
import About from "./pages/About";
import Speaking from "./pages/Speaking";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/essay" component={FoundationalEssay} />
        <Route path="/model" component={ThreeLayerModel} />
        <Route path="/governance" component={GovernanceByDesign} />
        <Route path="/dictionary" component={Dictionary} />
        <Route path="/essays" component={Essays} />
        <Route path="/essays/entropy" component={EssayEntropy} />
        <Route path="/essays/judgment" component={EssayJudgment} />
        <Route path="/essays/governance" component={EssayGovernance} />
        <Route path="/essays/tuesday" component={EssayTuesday} />
        <Route path="/about" component={About} />
        <Route path="/speaking" component={Speaking} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

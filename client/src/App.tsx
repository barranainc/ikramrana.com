import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// Core pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Speaking from "./pages/Speaking";

// Hub pages
import SolutionsHub from "./pages/SolutionsHub";
import CaseStudies from "./pages/CaseStudies";
import FrameworkHub from "./pages/FrameworkHub";
import InsightsHub from "./pages/InsightsHub";

// Solution sub-pages
import SolutionAutomation from "./pages/SolutionAutomation";
import SolutionGrowth from "./pages/SolutionGrowth";
import SolutionGovernance from "./pages/SolutionGovernance";
import SolutionSprint from "./pages/SolutionSprint";

// Framework content pages — keep their own URLs and layouts
import FoundationalEssay from "./pages/FoundationalEssay";
import ThreeLayerModel from "./pages/ThreeLayerModel";
import GovernanceByDesign from "./pages/GovernanceByDesign";
import Dictionary from "./pages/Dictionary";

// Essays — keep their own URLs and layouts
import Essays from "./pages/Essays";
import EssayEntropy from "./pages/EssayEntropy";
import EssayJudgment from "./pages/EssayJudgment";
import EssayGovernance from "./pages/EssayGovernance";
import EssayTuesday from "./pages/EssayTuesday";

function Router() {
  return (
    <Layout>
      <Switch>
        {/* Core pages */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/speaking" component={Speaking} />

        {/* Hub pages */}
        <Route path="/solutions" component={SolutionsHub} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/framework" component={FrameworkHub} />
        <Route path="/insights" component={InsightsHub} />

        {/* Solution sub-pages */}
        <Route path="/solutions/automation-efficiency" component={SolutionAutomation} />
        <Route path="/solutions/ai-for-growth" component={SolutionGrowth} />
        <Route path="/solutions/governance-decision-architecture" component={SolutionGovernance} />
        <Route path="/solutions/ai-sprint" component={SolutionSprint} />

        {/* Framework content pages — keep their own URLs and layouts */}
        <Route path="/foundational-essay" component={FoundationalEssay} />
        <Route path="/the-model" component={ThreeLayerModel} />
        <Route path="/governance" component={GovernanceByDesign} />
        <Route path="/dictionary" component={Dictionary} />

        {/* Essays — keep their own URLs and layouts */}
        <Route path="/essays" component={Essays} />
        <Route path="/essays/entropy" component={EssayEntropy} />
        <Route path="/essays/judgment" component={EssayJudgment} />
        <Route path="/essays/governance" component={EssayGovernance} />
        <Route path="/essays/tuesday" component={EssayTuesday} />

        {/* Insight section — separate from /essays/ */}
        <Route path="/insight" component={InsightsHub} />

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

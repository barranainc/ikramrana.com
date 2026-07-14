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
import Insight from "./pages/Insight";
import EssayApproval from "./pages/EssayApproval";
import EssayEightyPercent from "./pages/EssayEightyPercent";
import EssayException from "./pages/EssayException";
import EssayMeeting from "./pages/EssayMeeting";
import EssayProcessDebt from "./pages/EssayProcessDebt";
import EssayJudgmentBackup from "./pages/EssayJudgmentBackup";
import EssayClarity from "./pages/EssayClarity";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import KnowledgeHubIndex from "./pages/KnowledgeHubIndex";
import KnowledgeHubPage from "./pages/KnowledgeHubPage";
import IndustryIndex from "./pages/IndustryIndex";
import IndustryPage from "./pages/IndustryPage";
import LocationIndex from "./pages/LocationIndex";
import LocationPage from "./pages/LocationPage";
import DictionaryIndex from "./pages/DictionaryIndex";
import DictionaryEntry from "./pages/DictionaryEntry";
import CaseStudyIndex from "./pages/CaseStudyIndex";
import CaseStudyPage from "./pages/CaseStudyPage";
import PillarPage from "./pages/PillarPage";
import ResourceHubPage from "./pages/ResourceHubPage";

// New GEO/AEO authority pages
import AiAutomationForBusiness from "./pages/AiAutomationForBusiness";
import AiWorkflowSystems from "./pages/AiWorkflowSystems";
import AiAdoptionFaq from "./pages/AiAdoptionFaq";
import AiAutomationFaq from "./pages/AiAutomationFaq";
import AiForSmallBusinessFaq from "./pages/AiForSmallBusinessFaq";
import AiAutomationExamples from "./pages/AiAutomationExamples";
import AiAdoptionChecklist from "./pages/AiAdoptionChecklist";

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
        <Route path="/essays/approval" component={EssayApproval} />
        <Route path="/essays/eighty-percent" component={EssayEightyPercent} />
        <Route path="/essays/exception" component={EssayException} />
        <Route path="/essays/meeting" component={EssayMeeting} />
        <Route path="/essays/process-debt" component={EssayProcessDebt} />
        <Route path="/essays/judgment-backup" component={EssayJudgmentBackup} />
        <Route path="/essays/clarity" component={EssayClarity} />

        {/* Insight section — separate from /essays/ */}
        <Route path="/insight" component={Insight} />

        {/* Blog — 30 SEO articles */}
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/:slug" component={BlogPost} />
        {/* AI Knowledge Hub — 7 authoritative reference pages */}
        <Route path="/ai-knowledge-hub" component={KnowledgeHubIndex} />
        <Route path="/ai-knowledge-hub/:slug" component={KnowledgeHubPage} />

        {/* Industries — 8 industry authority pages */}
        <Route path="/industries" component={IndustryIndex} />
        <Route path="/industries/:slug" component={IndustryPage} />

        {/* Locations — 5 geographic authority pages */}
        <Route path="/locations" component={LocationIndex} />
        <Route path="/locations/:slug" component={LocationPage} />

        {/* AI Dictionary — 15 term entries */}
        <Route path="/ai-dictionary" component={DictionaryIndex} />
        <Route path="/ai-dictionary/:slug" component={DictionaryEntry} />

        {/* Case Studies — 8 industry case studies */}
        <Route path="/case-studies" component={CaseStudyIndex} />
        <Route path="/case-studies/:slug" component={CaseStudyPage} />

        {/* Pillar Page — cornerstone AI Adoption Framework */}
        <Route path="/ai-adoption-framework-for-small-businesses" component={PillarPage} />

        {/* Resource Hub — practical companion to Pillar Page */}
        <Route path="/ai-resources-for-businesses" component={ResourceHubPage} />

        {/* New GEO/AEO authority pages */}
        <Route path="/ai-automation-for-business" component={AiAutomationForBusiness} />
        <Route path="/ai-workflow-systems" component={AiWorkflowSystems} />
        <Route path="/ai-adoption-faq" component={AiAdoptionFaq} />
        <Route path="/ai-automation-faq" component={AiAutomationFaq} />
        <Route path="/ai-for-small-business-faq" component={AiForSmallBusinessFaq} />
        <Route path="/ai-automation-examples" component={AiAutomationExamples} />
        <Route path="/ai-adoption-checklist" component={AiAdoptionChecklist} />

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

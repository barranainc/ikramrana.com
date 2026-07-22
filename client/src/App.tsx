import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// Route-level code splitting keeps the initial bundle focused on the page that
// was requested. Static release HTML still supplies crawlable fallback content.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Speaking = lazy(() => import("./pages/Speaking"));
const SolutionsHub = lazy(() => import("./pages/SolutionsHub"));
const FrameworkHub = lazy(() => import("./pages/FrameworkHub"));
const InsightsHub = lazy(() => import("./pages/InsightsHub"));
const SolutionAutomation = lazy(() => import("./pages/SolutionAutomation"));
const SolutionGrowth = lazy(() => import("./pages/SolutionGrowth"));
const SolutionGovernance = lazy(() => import("./pages/SolutionGovernance"));
const SolutionSprint = lazy(() => import("./pages/SolutionSprint"));
const FoundationalEssay = lazy(() => import("./pages/FoundationalEssay"));
const ThreeLayerModel = lazy(() => import("./pages/ThreeLayerModel"));
const GovernanceByDesign = lazy(() => import("./pages/GovernanceByDesign"));
const Dictionary = lazy(() => import("./pages/Dictionary"));
const Essays = lazy(() => import("./pages/Essays"));
const EssayEntropy = lazy(() => import("./pages/EssayEntropy"));
const EssayJudgment = lazy(() => import("./pages/EssayJudgment"));
const EssayGovernance = lazy(() => import("./pages/EssayGovernance"));
const EssayTuesday = lazy(() => import("./pages/EssayTuesday"));
const Insight = lazy(() => import("./pages/Insight"));
const EssayApproval = lazy(() => import("./pages/EssayApproval"));
const EssayEightyPercent = lazy(() => import("./pages/EssayEightyPercent"));
const EssayException = lazy(() => import("./pages/EssayException"));
const EssayMeeting = lazy(() => import("./pages/EssayMeeting"));
const EssayProcessDebt = lazy(() => import("./pages/EssayProcessDebt"));
const EssayJudgmentBackup = lazy(() => import("./pages/EssayJudgmentBackup"));
const EssayClarity = lazy(() => import("./pages/EssayClarity"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const KnowledgeHubIndex = lazy(() => import("./pages/KnowledgeHubIndex"));
const KnowledgeHubPage = lazy(() => import("./pages/KnowledgeHubPage"));
const IndustryIndex = lazy(() => import("./pages/IndustryIndex"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const LocationIndex = lazy(() => import("./pages/LocationIndex"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const DictionaryIndex = lazy(() => import("./pages/DictionaryIndex"));
const DictionaryEntry = lazy(() => import("./pages/DictionaryEntry"));
const CaseStudyIndex = lazy(() => import("./pages/CaseStudyIndex"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const PillarPage = lazy(() => import("./pages/PillarPage"));
const ResourceHubPage = lazy(() => import("./pages/ResourceHubPage"));
const AiAutomationForBusiness = lazy(() => import("./pages/AiAutomationForBusiness"));
const AiWorkflowSystems = lazy(() => import("./pages/AiWorkflowSystems"));
const AiAdoptionFaq = lazy(() => import("./pages/AiAdoptionFaq"));
const AiAutomationFaq = lazy(() => import("./pages/AiAutomationFaq"));
const AiForSmallBusinessFaq = lazy(() => import("./pages/AiForSmallBusinessFaq"));
const AiAutomationExamples = lazy(() => import("./pages/AiAutomationExamples"));
const AiAdoptionChecklist = lazy(() => import("./pages/AiAdoptionChecklist"));

function RouteFallback() {
  return (
    <div className="container py-24" role="status" aria-live="polite">
      <p className="text-sm text-slate-text">Loading page…</p>
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        {/* Core pages */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
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

        {/* Framework content pages: keep their own URLs and layouts */}
        <Route path="/foundational-essay" component={FoundationalEssay} />
        <Route path="/the-model" component={ThreeLayerModel} />
        <Route path="/governance" component={GovernanceByDesign} />
        <Route path="/dictionary" component={Dictionary} />

        {/* Essays: keep their own URLs and layouts */}
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

        {/* Insight section: separate from /essays/ */}
        <Route path="/insight" component={Insight} />

        {/* Blog: 30 SEO articles */}
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/:slug" component={BlogPost} />
        {/* AI Knowledge Hub: 7 authoritative reference pages */}
        <Route path="/ai-knowledge-hub" component={KnowledgeHubIndex} />
        <Route path="/ai-knowledge-hub/:slug" component={KnowledgeHubPage} />

        {/* Industries: 8 industry authority pages */}
        <Route path="/industries" component={IndustryIndex} />
        <Route path="/industries/:slug" component={IndustryPage} />

        {/* Locations: 5 geographic authority pages */}
        <Route path="/locations" component={LocationIndex} />
        <Route path="/locations/:slug" component={LocationPage} />

        {/* AI Dictionary: 15 term entries */}
        <Route path="/ai-dictionary" component={DictionaryIndex} />
        <Route path="/ai-dictionary/:slug" component={DictionaryEntry} />

        {/* Illustrative use cases: 8 hypothetical industry scenarios */}
        <Route path="/case-studies" component={CaseStudyIndex} />
        <Route path="/case-studies/:slug" component={CaseStudyPage} />

        {/* Pillar Page: cornerstone AI Adoption Framework */}
        <Route path="/ai-adoption-framework-for-small-businesses" component={PillarPage} />

        {/* Resource Hub: practical companion to Pillar Page */}
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
          <Suspense fallback={<RouteFallback />}>
            <Router />
          </Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

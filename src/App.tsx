import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";
import OfflineScreen from "./components/OfflineScreen.tsx";
import useLicenseControl from "./hooks/useLicenseControl";
import { usePerformanceMonitoring } from "./hooks/usePerformance";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfUsePage = lazy(() => import("./pages/TermsOfUsePage"));
const EthicsAIPage = lazy(() => import("./pages/EthicsAIPage"));
const SeismicSurveyingPage = lazy(() => import("./pages/SeismicSurveyingPage"));
const LidarDroneTechnologyPage = lazy(() => import("./pages/LidarDroneTechnologyPage"));
const AiDataAnalyticsPage = lazy(() => import("./pages/AiDataAnalyticsPage"));
const DigitalTerrainMappingPage = lazy(() => import("./pages/DigitalTerrainMappingPage"));
const EnergyExplorationPage = lazy(() => import("./pages/EnergyExplorationPage"));
const EnvironmentalImpactAssessmentPage = lazy(() => import("./pages/EnvironmentalImpactAssessmentPage"));
const RemoteSensingSolutionsPage = lazy(() => import("./pages/RemoteSensingSolutionsPage"));
const GeophysicalIntelligencePage = lazy(() => import("./pages/GeophysicalIntelligencePage"));

// Blog pages
const BlogIndexPage = lazy(() => import("./pages/blog/BlogIndexPage"));
const PeakOilDemandPage = lazy(() => import("./pages/blog/PeakOilDemandPage"));
const IoTInOilGasPage = lazy(() => import("./pages/blog/IoTInOilGasPage"));
const IndustryOutlook2026Page = lazy(() => import("./pages/blog/IndustryOutlook2026Page"));
const FutureCanadianOilGasPage = lazy(() => import("./pages/blog/FutureCanadianOilGasPage"));
const SpatialComputingPage = lazy(() => import("./pages/blog/SpatialComputingPage"));
const WhatIsSeismicDataAnalysisPage = lazy(() => import("./pages/blog/WhatIsSeismicDataAnalysisPage"));
const HowAITransformingSeismicPage = lazy(() => import("./pages/blog/HowAITransformingSeismicPage"));
const HiddenCostTraditionalSeismicPage = lazy(() => import("./pages/blog/HiddenCostTraditionalSeismicPage"));
const DeepLearningFaultDetectionPage = lazy(() => import("./pages/blog/DeepLearningFaultDetectionPage"));
const LidarBeamVsTraditionalSeismicPage = lazy(() => import("./pages/blog/LidarBeamVsTraditionalSeismicPage"));
const AiCanadianOilSandsPage = lazy(() => import("./pages/blog/AiCanadianOilSandsPage"));
const HowSeismicAiDelivers10xFasterPage = lazy(() => import("./pages/blog/HowSeismicAiDelivers10xFasterPage"));
const SeismicIntelligenceSaudiArabiaPage = lazy(() => import("./pages/blog/SeismicIntelligenceSaudiArabiaPage"));
const BenefitsAiGeophysicalAnalyticsPage = lazy(() => import("./pages/blog/BenefitsAiGeophysicalAnalyticsPage"));
const CloudBasedSeismicInterpretationPage = lazy(() => import("./pages/blog/CloudBasedSeismicInterpretationPage"));
const SeismicAiSmallGeophysicsTeamsPage = lazy(() => import("./pages/blog/SeismicAiSmallGeophysicsTeamsPage"));
// Loading component for lazy-loaded routes
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-2 border-[#00E5FF] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 font-inter">Loading...</p>
    </div>
  </div>
);
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const tryScroll = (retries = 10) => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80; // approximate navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
          });
        } else if (retries > 0) {
          setTimeout(() => tryScroll(retries - 1), 300);
        }
      };
      setTimeout(() => tryScroll(), 100);
    }
  }, [location]);

  return null;
}

// AppContent component
function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = [
    "/privacy-policy",
    "/terms-of-use",
    "/ethics-ai-transparency",
  ];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ScrollToHash />
      {!shouldHideNavbar && <Navbar />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/ethics-ai-transparency" element={<EthicsAIPage />} />
          <Route path="/services/seismic-surveying" element={<SeismicSurveyingPage />} />
          <Route path="/services/lidar-drone-technology" element={<LidarDroneTechnologyPage />} />
          <Route path="/services/ai-data-analytics" element={<AiDataAnalyticsPage />} />
          <Route path="/services/digital-terrain-mapping" element={<DigitalTerrainMappingPage />} />
          <Route path="/services/energy-exploration" element={<EnergyExplorationPage />} />
          <Route path="/services/environmental-impact-assessment" element={<EnvironmentalImpactAssessmentPage />} />
          <Route path="/services/remote-sensing-solutions" element={<RemoteSensingSolutionsPage />} />
          <Route path="/services/geophysical-intelligence" element={<GeophysicalIntelligencePage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/peak-oil-demand" element={<PeakOilDemandPage />} />
          <Route path="/blog/iot-in-oil-and-gas" element={<IoTInOilGasPage />} />
          <Route path="/blog/industry-outlook-2026" element={<IndustryOutlook2026Page />} />
          <Route path="/blog/future-canadian-oil-and-gas" element={<FutureCanadianOilGasPage />} />
          <Route path="/blog/spatial-computing-digital-twins" element={<SpatialComputingPage />} />
          <Route path="/blog/what-is-seismic-data-analysis" element={<WhatIsSeismicDataAnalysisPage />} />
          <Route path="/blog/how-ai-is-transforming-seismic-interpretation" element={<HowAITransformingSeismicPage />} />
          <Route path="/blog/hidden-cost-of-traditional-seismic-exploration" element={<HiddenCostTraditionalSeismicPage />} />
          <Route path="/blog/deep-learning-for-seismic-fault-detection" element={<DeepLearningFaultDetectionPage />} />
          <Route path="/blog/lidar-beam-scanning-vs-traditional-seismic-surveys" element={<LidarBeamVsTraditionalSeismicPage />} />
          <Route path="/blog/ai-in-canadian-oil-sands-exploration" element={<AiCanadianOilSandsPage />} />
          <Route path="/blog/how-seismicai-delivers-10x-faster-interpretation" element={<HowSeismicAiDelivers10xFasterPage />} />
          <Route path="/blog/seismic-intelligence-for-saudi-arabias-oil-and-gas-sector" element={<SeismicIntelligenceSaudiArabiaPage />} />
          <Route path="/blog/benefits-of-ai-powered-geophysical-analytics" element={<BenefitsAiGeophysicalAnalyticsPage />} />
          <Route path="/blog/cloud-based-seismic-interpretation" element={<CloudBasedSeismicInterpretationPage />} />
          <Route path="/blog/seismicai-for-small-geophysics-teams" element={<SeismicAiSmallGeophysicsTeamsPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

function App() {
  const { isVisible, message } = useLicenseControl();
  const [isLoading, setIsLoading] = useState(true);

  // Monitor performance in development
  usePerformanceMonitoring(true);

  // Check if user has already seen the loading screen in this session
  useEffect(() => {
    const hasSeenLoading = sessionStorage.getItem("seismic-loading-seen");
    const isLegalPage =
      window.location.pathname === "/privacy-policy" ||
      window.location.pathname === "/terms-of-use" ||
      window.location.pathname === "/ethics-ai-transparency";

    // Skip loading screen for legal pages or if already seen
    if (hasSeenLoading || isLegalPage) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("seismic-loading-seen", "true");
    setIsLoading(false);
  };

  // Show offline screen if site is not visible or not licensed
  if (!isVisible) {
    return <OfflineScreen message={message} />;
  }

  // Show loading screen while loading (but skip for legal pages)
  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

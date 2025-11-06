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

// Loading component for lazy-loaded routes
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-2 border-[#00E5FF] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 font-inter">Loading...</p>
    </div>
  </div>
);

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
      {!shouldHideNavbar && <Navbar />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/ethics-ai-transparency" element={<EthicsAIPage />} />
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

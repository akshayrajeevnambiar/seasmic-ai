import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import HomePage from "./pages/HomePage.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import TermsOfUsePage from "./pages/TermsOfUsePage.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";
import OfflineScreen from "./components/OfflineScreen.tsx";
import useLicenseControl from "./hooks/useLicenseControl";

function App() {
  const { isVisible, message } = useLicenseControl();
  const [isLoading, setIsLoading] = useState(true);

  // Check if user has already seen the loading screen in this session
  useEffect(() => {
    const hasSeenLoading = sessionStorage.getItem('seismic-loading-seen');
    if (hasSeenLoading) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('seismic-loading-seen', 'true');
    setIsLoading(false);
  };

  // Show offline screen if site is not visible or not licensed
  if (!isVisible) {
    return <OfflineScreen message={message} />;
  }

  // Show loading screen while loading
  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

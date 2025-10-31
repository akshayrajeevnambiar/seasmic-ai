import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Problem from "./components/Problem.tsx";
import Solution from "./components/Solution.tsx";
import Features from "./components/Features.tsx";
import Technology from "./components/Technology.tsx";
import Timeline from "./components/Timeline.tsx";
import ROI from "./components/ROI.tsx";
import Team from "./components/Team.tsx";
import Recognitions from "./components/Recognitions.tsx";
import Contact from "./components/Contact.tsx";
import EthicsAI from "./components/EthicsAI.tsx";
import PrivacyPolicy from "./components/PrivacyPolicy.tsx";
import TermsOfUse from "./components/TermsOfUse.tsx";
import Footer from "./components/Footer.tsx";
import OfflineScreen from "./components/OfflineScreen.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";
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

  // Render full website if properly licensed
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Technology />
      <Timeline />
      <ROI />
      <Team />
      <Recognitions />
      <EthicsAI />
      <Contact />
      <PrivacyPolicy />
      <TermsOfUse />
      <Footer />
    </div>
  );
}

export default App;

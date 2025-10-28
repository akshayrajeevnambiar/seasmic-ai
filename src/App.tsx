import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Problem from "./components/Problem.tsx";
import Solution from "./components/Solution.tsx";
import Features from "./components/Features.tsx";
import Technology from "./components/Technology.tsx";
import Timeline from "./components/Timeline.tsx";
import ROI from "./components/ROI.tsx";
import Team from "./components/Team.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import OfflineScreen from "./components/OfflineScreen.tsx";
import useLicenseControl from "./hooks/useLicenseControl";

function App() {
  const { isVisible, message } = useLicenseControl();

  // Show offline screen if site is not visible or not licensed
  if (!isVisible) {
    return <OfflineScreen message={message} />;
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

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

function App() {
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

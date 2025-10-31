import React, { Suspense, lazy } from "react";

// Always load Hero immediately for above-the-fold content
import Hero from "../components/Hero.tsx";

// Lazy load other sections for better performance
const Problem = lazy(() => import("../components/Problem.tsx"));
const Solution = lazy(() => import("../components/Solution.tsx"));
const Features = lazy(() => import("../components/Features.tsx"));
const Technology = lazy(() => import("../components/Technology.tsx"));
const Timeline = lazy(() => import("../components/Timeline.tsx"));
const ROI = lazy(() => import("../components/ROI.tsx"));
const Team = lazy(() => import("../components/Team.tsx"));
const Recognitions = lazy(() => import("../components/Recognitions.tsx"));
const Contact = lazy(() => import("../components/Contact.tsx"));
const EthicsAI = lazy(() => import("../components/EthicsAI.tsx"));

// Lightweight loading component for sections
const SectionLoader = () => (
  <div className="py-16 flex justify-center">
    <div className="w-6 h-6 border-2 border-[#00E5FF] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Problem />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Solution />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Features />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Technology />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Timeline />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ROI />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Team />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Recognitions />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <EthicsAI />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </>
  );
};

export default HomePage;

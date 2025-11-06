import React, { Suspense, lazy } from "react";
// import { Helmet } from "react-helmet";

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

// Lightweight loading component for sections
const SectionLoader = () => (
  <div
    className="py-16 flex justify-center"
    role="status"
    aria-label="Loading section content"
  >
    <div
      className="w-6 h-6 border-2 border-[#00E5FF] border-t-transparent rounded-full animate-spin"
      aria-hidden="true"
    ></div>
    <span className="sr-only">Loading...</span>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <>
      {/* 
      <Helmet>
        <title>Seismic AI - Revolutionary AI-Powered LiDAR Drone Technology for Energy Exploration</title>
        <meta name="description" content="Transform energy exploration with Seismic AI's revolutionary LiDAR drone platform. AI-powered seismic analysis, real-time geological mapping, and sustainable mining solutions. Trusted by leading institutions worldwide." />
        <meta name="keywords" content="AI seismic analysis, LiDAR drone technology, energy exploration, oil and gas exploration, sustainable mining, geological surveying, real-time seismic data, machine learning geophysics, drone surveying, energy technology" />
        
        <meta property="og:title" content="Seismic AI - Revolutionary AI-Powered LiDAR Drone Technology" />
        <meta property="og:description" content="Transform energy exploration with our AI-powered LiDAR drone platform. Real-time seismic analysis, geological mapping, and sustainable solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seismic-ai.vercel.app/" />
        <meta property="og:image" content="https://seismic-ai.vercel.app/og-homepage.jpg" />
        <meta property="og:image:alt" content="Seismic AI drone technology in action - aerial view of energy exploration" />
        
        <meta name="twitter:title" content="Seismic AI - Revolutionary LiDAR Drone Technology" />
        <meta name="twitter:description" content="AI-powered drone platform transforming energy exploration with real-time seismic intelligence." />
        <meta name="twitter:image" content="https://seismic-ai.vercel.app/twitter-homepage.jpg" />
        
        <link rel="canonical" href="https://seismic-ai.vercel.app/" />
      </Helmet>
      */}

      <main role="main" itemScope itemType="https://schema.org/WebPage">
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
          <Contact />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;

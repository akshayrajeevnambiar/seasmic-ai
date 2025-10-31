import React from "react";
import Hero from "../components/Hero.tsx";
import Problem from "../components/Problem.tsx";
import Solution from "../components/Solution.tsx";
import Features from "../components/Features.tsx";
import Technology from "../components/Technology.tsx";
import Timeline from "../components/Timeline.tsx";
import ROI from "../components/ROI.tsx";
import Team from "../components/Team.tsx";
import Recognitions from "../components/Recognitions.tsx";
import Contact from "../components/Contact.tsx";
import EthicsAI from "../components/EthicsAI.tsx";

const HomePage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;

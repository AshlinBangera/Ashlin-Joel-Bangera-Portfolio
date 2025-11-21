import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import TheEdge from './components/TheEdge';
import Projects from './components/Projects';
import TechSpecs from './components/TechSpecs';
import ExperienceSection from './components/Experience';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import { SKILLS_TICKER } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-terminal-bg min-h-screen text-terminal-text font-sans selection:bg-terminal-success selection:text-black scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Ticker skills={SKILLS_TICKER} />
        <TheEdge />
        <Projects />
        <TechSpecs />
        <ExperienceSection />
        <CallToAction />
        <Contact />
      </main>
      <AIChat />
    </div>
  );
};

export default App;
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Vision } from './components/sections/Vision';
import { Roadmap } from './components/sections/Roadmap';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-inter selection:bg-arcadium-orange selection:text-white overflow-x-hidden">
       {/* Global Gamified Texture Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#2a1205_0%,_transparent_60%)]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <Vision />
          <Roadmap />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020001]">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-arcadium-orange/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      {/* 3D Grid Floor */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] opacity-30 pointer-events-none" 
           style={{ 
             background: 'linear-gradient(transparent 0%, #020001 100%), linear-gradient(0deg, rgba(253, 137, 1, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(253, 137, 1, 0.1) 1px, transparent 1px)',
             backgroundSize: '100% 100%, 50px 50px, 50px 50px',
             transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)'
           }} 
      />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Visual Content (Left on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-2 lg:order-1 relative h-[400px] lg:h-[600px] w-full flex items-center justify-center"
        >
          {/* Tech Viz */}
          <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
            <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                 <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FD8901" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#020001" stopOpacity="0" />
                </linearGradient>
                <filter id="glow-hero">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Rotating Rings */}
              <g className="animate-[spin_10s_linear_infinite] origin-center">
                <circle cx="200" cy="200" r="150" stroke="#FD8901" strokeWidth="1" strokeDasharray="10 20" strokeOpacity="0.2" fill="none" />
                <circle cx="200" cy="200" r="120" stroke="#FD8901" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" fill="none" />
              </g>

               {/* Center Hexagon */}
              <motion.path
                d="M200 100 L286 150 L286 250 L200 300 L114 250 L114 150 Z"
                fill="url(#grad1)"
                stroke="#FD8901"
                strokeWidth="2"
                filter="url(#glow-hero)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />
              
              {/* Pulsing Core */}
              <circle cx="200" cy="200" r="10" fill="#FD8901">
                <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
            
            {/* Holographic HUD Card */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-40 bg-[#0a0a0a]/80 backdrop-blur-md border border-arcadium-orange/30 rounded-lg p-5 flex flex-col justify-between shadow-[0_0_30px_rgba(253,137,1,0.2)]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: "-50%", opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
               {/* Decorative corners */}
               <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-arcadium-orange" />
               <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-arcadium-orange" />
               <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-arcadium-orange" />
               <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-arcadium-orange" />

               <div className="flex justify-between items-center mb-2">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   <div className="text-xs text-arcadium-orange font-rajdhani tracking-widest font-bold">SYSTEM ACTIVE</div>
                 </div>
                 <div className="text-[10px] text-gray-500 font-mono">V 1.0.4</div>
               </div>
               
               <div className="space-y-3 font-mono text-xs">
                 <div className="flex justify-between text-gray-400">
                   <span>DATA STREAM</span>
                   <span className="text-arcadium-orange">OPTIMIZED</span>
                 </div>
                 <div className="h-1 w-full bg-white/10 overflow-hidden">
                    <motion.div className="h-full bg-arcadium-orange" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 3 }} />
                 </div>
                 <div className="flex justify-between text-gray-400">
                   <span>AI MODELS</span>
                   <span className="text-blue-400">ONLINE</span>
                 </div>
               </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content (Right) */}
        <div className="order-1 lg:order-2 flex flex-col justify-center text-left relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-arcadium-orange animate-pulse" />
              <span className="text-xs font-rajdhani font-bold tracking-widest text-arcadium-orange uppercase">Subnet Live on Bittensor</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-rajdhani font-bold text-white leading-[0.9] mb-6">
              The First <span className="text-transparent bg-clip-text bg-gradient-to-r from-arcadium-orange to-yellow-500">AI Gaming</span> Subnet
            </h1>
            <h2 className="text-2xl lg:text-3xl font-inter font-medium text-gray-300 mb-8">
              Professional-level analytics for every gamer.
            </h2>
            <p className="text-lg text-gray-400 font-inter leading-relaxed max-w-xl mb-10">
              Decentralized intelligence meets competitive gaming. Built on Bittensor's infrastructure, Arcadium brings institutional-grade analytics to every player, team, and tournament.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToHowItWorks}
                className="px-8 py-4 bg-arcadium-orange hover:bg-arcadium-orange-light text-white font-rajdhani font-bold text-lg roundedclip transition-all shadow-[0_0_20px_rgba(253,137,1,0.3)] hover:shadow-[0_0_30px_rgba(253,137,1,0.5)] uppercase tracking-widest relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Explore Subnet</span>
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-arcadium-orange/50 hover:bg-white/5 text-white font-rajdhani font-bold text-lg roundedclip transition-all uppercase tracking-widest">
                Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
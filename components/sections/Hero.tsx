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
          className="order-2 lg:order-1 relative h-[500px] lg:h-[600px] w-full flex items-center justify-center"
        >
          {/* Tech Viz Container */}
          <div className="relative w-full h-full max-w-[600px] max-h-[600px] flex items-center justify-center">

            {/* Logo Group Animation */}
            <motion.div
              className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[480px] md:h-[480px] flex items-center justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glow Effect behind logo */}
              <div className="absolute inset-0 bg-arcadium-orange/10 blur-[60px] rounded-full scale-110" />

              {/* Logo Image - Shifted UP to make space, Z-Index Lower so Card is on top */}
              <img
                src="Transparent-Logo.png"
                alt="Arcadium Logo"
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_40px_rgba(253,137,1,0.25)] -translate-y-12 md:-translate-y-16"
              />

              {/* Holographic HUD Card - Z-Index Higher (On Top) */}
              <motion.div
                className="absolute z-20
                             /* Mobile: Centered below the visual logo area */
                             top-[62%] right-15 -translate-x-1/2 w-64 h-32

                             /* Desktop: Bottom right corner, slightly overlapping logo space */
                             lg:top-auto lg:bottom-[15%] lg:right-[-10%] lg:left-auto lg:translate-x-0 lg:w-72 lg:h-40
                             
                             bg-[#0a0a0a]/20 backdrop-blur-sm border border-arcadium-orange/30 rounded-lg p-2 md:p-3 flex flex-col justify-between shadow-[0_0_30px_rgba(253,137,1,0.2)]"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                 {/* Tech corners */}
                   <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-arcadium-orange" />
                   <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-arcadium-orange" />
                   <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-arcadium-orange" />
                   <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-arcadium-orange" />

                   {/* Header: System Status */}
                   <div className="flex justify-between items-center mb-2 shrink-0">
                     <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
                       <div className="text-[10px] md:text-xs text-arcadium-orange font-rajdhani tracking-widest font-bold">SYSTEM ACTIVE</div>
                     </div>
                     <div className="text-[9px] md:text-[10px] text-gray-500 font-mono">V 1.0.4</div>
                   </div>
                   
                   {/* Body: Player Profile - Flex container */}
                   <div className="flex gap-3 flex-1 min-h-0">
                      {/* Left Column: Avatar - Full height, wider */}
                      <div className="relative w-20 md:w-24 h-full rounded overflow-hidden shrink-0 group">
                        <img 
                          src="/Card_Player_Only_No_BG.png" 
                          alt="Player Profile" 
                          className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-arcadium-orange/20 to-transparent mix-blend-overlay" /> */}
                      </div>

                      {/* Right Column: Stats & Info */}
                      <div className="flex-1 flex flex-col justify-between pt-2">
                         
                         {/* Top: Skill Progress (Moved Up) */}
                         <div className="w-full">
                            <div className="flex justify-between items-end mb-1">
                               <span className="text-[8px] md:text-[9px] text-gray-400 font-mono uppercase">Skill Progress</span>
                               <span className="text-[9px] md:text-[10px] text-arcadium-orange font-bold font-mono">85%</span>
                            </div>
                            <div className="h-1 md:h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                               <motion.div 
                                 className="h-full bg-gradient-to-r from-arcadium-orange to-yellow-500 shadow-[0_0_10px_rgba(253,137,1,0.5)]" 
                                 initial={{ width: "0%" }} 
                                 animate={{ width: "85%" }} 
                                 transition={{ duration: 1.5, delay: 1 }} 
                               />
                            </div>
                         </div>

                         {/* Bottom Section: Tournament & Team */}
                         <div className="flex flex-col justify-end">
                            <div className="flex flex-col mb-1">
                                <span className="text-[8px] md:text-[9px] text-gray-400 font-mono leading-none mb-0.5">NEXT TOURNAMENT</span>
                                <div className="text-white font-rajdhani font-bold text-sm md:text-lg leading-none">
                                   43 <span className="text-[10px] text-arcadium-orange font-normal tracking-wide">DAYS LEFT</span>
                                </div>
                            </div>
                            
                            <div className="text-[9px] md:text-[10px] text-gray-400 font-rajdhani font-semibold text-right">
                               BESCHER TEAM <span className="text-white font-bold ml-1">PLAYER</span>
                            </div>
                         </div>
                      </div>
                   </div>
              </motion.div>
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

            <h1 className="text-6xl lg:text-8xl font-rajdhani font-bold text-white leading-none mb-2 tracking-wide">
              ARCADIUM
            </h1>

            <h2 className="text-3xl lg:text-5xl font-rajdhani font-bold text-gray-200 leading-[0.9] mb-6">
              The First <span className="text-transparent bg-clip-text bg-gradient-to-r from-arcadium-orange to-yellow-500">AI Gaming</span> Subnet
            </h2>
            <h3 className="text-xl lg:text-2xl font-inter font-medium text-gray-400 mb-8">
              Professional-level analytics for every gamer.
            </h3>
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
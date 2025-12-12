import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS_DATA } from '../../constants';
import { SectionTitle } from '../ui/SectionTitle';

const images = {
  // Analytics: Abstract data/HUD visualization
  analytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  // Platform: Gaming setup / Esports arena essence
  platform: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
  // Ecosystem: Connected network/Team abstract
  ecosystem: "https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Ch=546%2Cq=95%2Cw=970/wp-content/uploads/image-686.png",
  // Decentralized: Blockchain/Node abstract
  decentralized: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800"
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-arcadium-darker relative">
      <div className="container mx-auto px-6">
        <SectionTitle title="How It Works" subtitle="Bringing AI Gaming Intelligence to Bittensor" />

        <div className="space-y-24">
          {HOW_IT_WORKS_DATA.map((block, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className={`flex-1 ${index % 2 === 1 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                <h3 className="text-3xl font-rajdhani font-bold text-white mb-6 uppercase">{block.title}</h3>
                <p className="text-lg text-arcadium-text-muted font-inter leading-relaxed">
                  {block.content}
                </p>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full flex justify-center">
                {/* 
                    Card Container: 
                    Changed from solid dark bg-[#0a0a0a] to a lighter glass-like gradient 
                    to avoid the "too darkish" feel. 
                */}
                <div className="relative w-full max-w-md aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 p-2 flex items-center justify-center group shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden backdrop-blur-sm">
                   
                   {/* Hover Glow Border Effect */}
                   <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-arcadium-orange/40 transition-colors duration-500 z-30 pointer-events-none" />

                   {/* Image Container */}
                   <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#1a1a1a]">
                      
                      {/* Color Grade Overlay - Changed from mix-blend-color (darkening) to mix-blend-overlay (vibrant tinting) */}
                      <div className="absolute inset-0 bg-arcadium-orange/30 mix-blend-overlay z-20 pointer-events-none transition-opacity duration-500" />
                      
                      {/* Softer Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020001]/80 via-transparent to-transparent z-20 pointer-events-none" />

                      {/* Tech Grid Texture Overlay - Subtle */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(253,137,1,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(253,137,1,0.05)_1px,transparent_1px)] bg-[size:30px_30px] z-20 pointer-events-none opacity-50" />
                      
                      {/* The Image Itself - Brighter and less grayscale */}
                      <img 
                        src={images[block.imageType]} 
                        alt={block.title} 
                        className="w-full h-full object-cover opacity-80 grayscale-[0.2] group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                      />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
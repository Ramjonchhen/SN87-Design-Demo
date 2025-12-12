import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS_DATA } from '../../constants';
import { SectionTitle } from '../ui/SectionTitle';
import { Activity, Globe, Cpu, Share2 } from 'lucide-react';

const icons = {
  analytics: <Activity className="w-16 h-16 text-arcadium-orange" />,
  platform: <Globe className="w-16 h-16 text-arcadium-orange" />,
  ecosystem: <Share2 className="w-16 h-16 text-arcadium-orange" />,
  decentralized: <Cpu className="w-16 h-16 text-arcadium-orange" />
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
                <div className="relative w-full max-w-md aspect-video bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center group hover:border-arcadium-orange/50 transition-colors duration-500">
                   <div className="absolute inset-0 bg-gradient-to-br from-arcadium-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                   <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                     {icons[block.imageType]}
                   </div>
                   {/* Decorative elements */}
                   <div className="absolute top-4 right-4 w-2 h-2 bg-arcadium-orange rounded-full animate-ping" />
                   <div className="absolute bottom-4 left-4 w-12 h-1 bg-white/10 rounded-full" />
                   <div className="absolute bottom-7 left-4 w-8 h-1 bg-white/10 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
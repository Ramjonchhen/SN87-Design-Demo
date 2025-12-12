import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { ROADMAP_DATA } from '../../constants';
import { CheckCircle2, CircleDashed, Lock, ChevronDown } from 'lucide-react';

const StatusIcon = ({ status }: { status: string }) => {
  if (status === 'completed') return <CheckCircle2 className="w-6 h-6 text-arcadium-orange drop-shadow-[0_0_8px_rgba(253,137,1,0.8)]" />;
  if (status === 'in-progress') return <CircleDashed className="w-6 h-6 text-arcadium-orange animate-spin-slow" />;
  return <Lock className="w-5 h-5 text-gray-600" />;
};

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      {/* Bottom Fade to Footer Color - Seamless Transition */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#140702] via-[#140702]/80 to-transparent z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Product Roadmap" subtitle="The path to decentralized gaming intelligence" />

        <div className="relative max-w-5xl mx-auto pb-10">
          {/* Vertical Timeline Line - Tech Style */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-arcadium-orange/0 via-arcadium-orange/30 to-arcadium-orange/0 transform md:-translate-x-1/2" />

          {ROADMAP_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-center mb-8 md:mb-10 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-[#0a0a0a] z-10 flex items-center justify-center transition-all duration-500
                ${item.status === 'completed' ? 'bg-arcadium-orange shadow-[0_0_20px_rgba(253,137,1,0.5)]' : 
                  item.status === 'in-progress' ? 'bg-[#0a0a0a] border-arcadium-orange shadow-[0_0_20px_rgba(253,137,1,0.8)] scale-110' : 
                  'bg-gray-900 border-gray-700'}
              `}>
                {item.status === 'completed' && <div className="w-3 h-3 bg-white rounded-full" />}
                {item.status === 'in-progress' && (
                  <div className="w-4 h-4 bg-arcadium-orange rounded-full animate-pulse shadow-[0_0_10px_rgba(253,137,1,1)]" />
                )}
                {item.status === 'upcoming' && <div className="w-3 h-3 bg-gray-600 rounded-full" />}
              </div>

              {/* Connecting Line Horizontal */}
              <div className={`hidden md:block absolute top-1/2 w-12 h-px bg-arcadium-orange/30
                ${index % 2 === 0 ? 'right-1/2 mr-5' : 'left-1/2 ml-5'}
              `} />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-60px)] ${item.isMajor ? 'md:scale-105 z-10' : ''}`}>
                <Card highlight={item.isMajor} className={`p-6 md:p-8 backdrop-blur-xl ${item.isMajor ? 'border-arcadium-orange' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm md:text-base font-bold px-4 py-1.5 rounded border uppercase tracking-wider font-rajdhani
                       ${item.status === 'completed' || item.status === 'in-progress' ? 'bg-arcadium-orange/10 border-arcadium-orange/30 text-arcadium-orange' : 'bg-white/5 border-white/10 text-gray-500'}
                    `}>
                      {item.version}
                    </span>
                    <StatusIcon status={item.status} />
                  </div>
                  
                  <h3 className={`text-xl font-rajdhani font-bold text-white mb-2 ${item.isMajor ? 'text-2xl text-arcadium-orange text-shadow-glow' : ''}`}>
                    {item.title}
                  </h3>
                  
                  {item.isMajor && (
                    <div className="mb-4 text-xs font-bold text-arcadium-orange flex items-center gap-2 uppercase tracking-widest">
                       <span className="flex h-2 w-2 rounded-full bg-arcadium-orange animate-ping" /> Major Milestone
                    </div>
                  )}

                  <ul className="space-y-2">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300 font-inter group/item">
                        <span className={`mr-3 mt-1.5 w-1.5 h-1.5 rounded-sm rotate-45 flex-shrink-0 transition-colors ${item.status === 'completed' ? 'bg-arcadium-orange' : 'bg-gray-600 group-hover/item:bg-arcadium-orange'}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
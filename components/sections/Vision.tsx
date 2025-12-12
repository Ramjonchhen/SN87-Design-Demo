import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { VISION_DATA } from '../../constants';
import { Gamepad2, Layers, Network } from 'lucide-react';

const icons = [
  <Gamepad2 className="w-10 h-10 text-arcadium-orange" />,
  <Layers className="w-10 h-10 text-arcadium-orange" />,
  <Network className="w-10 h-10 text-arcadium-orange" />
];

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 relative overflow-hidden">
       {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-arcadium-orange/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <SectionTitle title="Our Vision" subtitle="Building the World's Leading Gaming Academy" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-inter font-medium text-white leading-tight"
          >
            Arcadium will evolve into a comprehensive gaming ecosystem where analysis, competition, scouting, training, and community converge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           {/* Connector Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-arcadium-orange/30 to-transparent z-0 dashed" />

          {VISION_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 h-full"
            >
              <Card className="h-full p-8 flex flex-col items-center text-center group transition-colors duration-300">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-arcadium-orange blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-20 h-20 rounded-2xl bg-[#0F0F10] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-arcadium-orange/50 transition-all duration-300">
                    {icons[index]}
                  </div>
                </div>
                
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-6 tracking-wide group-hover:text-arcadium-orange transition-colors">{item.title}</h3>
                
                <div className="text-gray-300 font-inter text-base leading-relaxed space-y-4 w-full">
                  {item.points ? (
                    <ul className="text-left space-y-3">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-arcadium-orange mt-2 shrink-0 shadow-[0_0_5px_rgba(253,137,1,0.8)]" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}} />
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300/90">{item.content}</p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
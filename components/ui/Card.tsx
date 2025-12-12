import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', highlight = false }) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-xl border backdrop-blur-md
        transition-all duration-300 group
        ${highlight 
          ? 'bg-arcadium-orange/5 border-arcadium-orange/50 shadow-[0_0_30px_rgba(253,137,1,0.15)]' 
          : 'bg-[#0a0a0a]/60 border-white/10 hover:border-arcadium-orange/40 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(253,137,1,0.1)]'
        }
        ${className}
      `}
    >
      {/* Decorative Tech Corners */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-xl transition-colors duration-300 ${highlight ? 'border-arcadium-orange' : 'border-white/5 group-hover:border-arcadium-orange/50'}`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-xl transition-colors duration-300 ${highlight ? 'border-arcadium-orange' : 'border-white/5 group-hover:border-arcadium-orange/50'}`} />
      
      {children}
    </div>
  );
};
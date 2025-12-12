import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logo_face" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FD8901" />
        <stop offset="1" stopColor="#FFAB40" />
      </linearGradient>
      <linearGradient id="logo_side" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#C46000" />
        <stop offset="1" stopColor="#8F4000" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    <g filter="url(#glow)">
      {/* 3D Depth / Side Face (Darker) */}
      <path 
        d="M50 10 L85 90 H68 L50 45 L50 10 Z" 
        fill="url(#logo_side)" 
      />
      
      {/* Front Face (Lighter) */}
      <path 
        d="M50 10 L15 90 H35 L50 52 L68 90 H85 L50 10 Z" 
        fill="url(#logo_face)" 
      />
      
      {/* Crossbar Element */}
      <path 
        d="M38 68 H62 L65 76 H35 L38 68 Z" 
        fill="#FD8901" 
      />
    </g>
  </svg>
);
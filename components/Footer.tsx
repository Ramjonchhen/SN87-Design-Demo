import React from 'react';
import { Logo } from './Logo';
import { Twitter, Github, Send, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#140702] relative pt-24 pb-12 overflow-hidden">
      {/* Decorative Top Glow & Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-arcadium-orange/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-arcadium-orange/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-rajdhani font-bold text-white">ARCADIUM</span>
            </div>
            <p className="text-arcadium-text-muted font-inter text-sm leading-relaxed">
              Decentralized AI for Competitive Gaming. Empowering players with institutional-grade analytics on the Bittensor network.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-rajdhani font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 font-inter text-arcadium-text-muted">
              <li><a href="#how-it-works" className="hover:text-arcadium-orange transition-colors">How It Works</a></li>
              <li><a href="#vision" className="hover:text-arcadium-orange transition-colors">Our Vision</a></li>
              <li><a href="#roadmap" className="hover:text-arcadium-orange transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-arcadium-orange transition-colors">Whitepaper</a></li>
            </ul>
          </div>

          {/* Community & Dev */}
          <div>
            <h4 className="text-white font-rajdhani font-bold text-lg mb-6">Community</h4>
            <ul className="space-y-3 font-inter text-arcadium-text-muted">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-arcadium-orange transition-colors">
                  <Twitter className="w-4 h-4" /> Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-arcadium-orange transition-colors">
                  <Send className="w-4 h-4" /> Telegram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-arcadium-orange transition-colors">
                  <span className="w-4 h-4 flex items-center justify-center font-bold text-xs bg-white/10 rounded">D</span> Discord
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-arcadium-orange transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-rajdhani font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-arcadium-text-muted mb-4">Stay updated on subnet developments</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-arcadium-orange transition-colors"
              />
              <button className="bg-arcadium-orange hover:bg-arcadium-orange-light text-white font-rajdhani font-bold uppercase py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(253,137,1,0.2)] hover:shadow-[0_0_20px_rgba(253,137,1,0.4)]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-inter">
          <div className="flex items-center gap-2">
            <span>Built on</span>
            <span className="text-white font-semibold">Bittensor</span>
          </div>
          <div className="flex gap-6">
            <span>© 2024 Arcadium</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
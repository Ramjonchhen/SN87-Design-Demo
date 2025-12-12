import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Active when section is in the middle of viewport
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe Hero and all Nav Item sections
    const sections = ['hero', ...NAV_ITEMS.map(item => item.href.substring(1))];
    
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-arcadium-dark/90 backdrop-blur-md py-4 border-white/5' : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center">
        {/* Left Side: Logo */}
        <div className="flex-1 flex justify-start">
          <a href="#" className="flex items-center space-x-3 group" onClick={(e) => scrollToSection(e, '#hero')}>
            {/* <Logo className="w-10 h-10 group-hover:drop-shadow-[0_0_8px_rgba(253,137,1,0.5)] transition-all" /> */}
            <span className="text-2xl font-rajdhani font-bold text-white tracking-wider">ARCADIUM</span>
          </a>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`transition-colors font-inter text-sm uppercase tracking-wide font-medium relative group py-1 ${
                  isActive ? 'text-arcadium-orange' : 'text-arcadium-text-muted hover:text-arcadium-orange'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-arcadium-orange"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Side: CTA & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button className="hidden md:block bg-arcadium-orange hover:bg-arcadium-orange-light text-white px-6 py-2 rounded-full font-rajdhani font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(253,137,1,0.3)]">
            Launch App
          </button>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-arcadium-darker border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-lg font-rajdhani font-bold transition-colors ${
                      isActive ? 'text-arcadium-orange' : 'text-white hover:text-arcadium-orange'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
               <button className="w-full bg-arcadium-orange text-white px-6 py-3 rounded-lg font-bold font-rajdhani uppercase tracking-wider">
                Launch App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
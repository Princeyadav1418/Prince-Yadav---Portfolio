import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [deepScrolled, setDeepScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle transparent/solid background
      setScrolled(currentScrollY > 50);
      setDeepScrolled(currentScrollY > 300);

      // Handle hide/show top nav on scroll (only if not at the very top)
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsHidden(true); // Scrolling down & menu closed
        } else {
          setIsHidden(false); // Scrolling up
        }
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      layout
      initial={{ y: 0 }}
      animate={{ y: isHidden ? '-100%' : '0%' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-500 w-full",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className={cn(
            "flex items-center justify-between px-6 py-4 mx-auto transition-all duration-500 rounded-full",
            deepScrolled ? "bg-black/80 backdrop-blur-3xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.6)]" :
            scrolled ? "bg-black/50 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)]" : "bg-transparent border-transparent"
          )}
        >
          <a href="#" className="font-display font-bold text-2xl text-white tracking-tighter drop-shadow-md">
            PRINCE<span className="text-gray-500 font-medium">.DEV</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-widest drop-shadow-sm relative group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a href="#contact" className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95">
              Let's Talk
            </a>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            layout
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-4 right-4 mt-2 p-6 bg-black/95 border border-white/20 backdrop-blur-3xl rounded-3xl md:hidden flex flex-col gap-6 text-center shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-display font-bold text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

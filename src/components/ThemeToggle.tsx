import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDarMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('light-mode') === false;
    setIsDarkMode(isDark);
    
    // Check localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-mode');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarMode) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarMode ? 0 : 180, scale: isDarMode ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {isDarMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.div>
    </button>
  );
}

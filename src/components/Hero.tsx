import { motion, useSpring, useTransform, useMotionValue } from 'motion/react';
import { ArrowRight, Download, Terminal, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { useEffect } from 'react';

const resumeUrl = new URL('../../Prince Yadav Resume.pdf', import.meta.url).href;

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [2, -2]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-2, 2]), { stiffness: 100, damping: 30 });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center w-full pt-24 pb-12 z-10 perspective-1000 overflow-hidden">
      
      {/* Immersive Background Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -60, 0],
          y: [0, 80, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" 
      />

      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="flex flex-col items-center text-center space-y-10 w-full max-w-7xl mx-auto px-4 relative z-10"
      >
        <motion.div
          style={{ transform: "translateZ(80px)" }}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl mb-2 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide">Available for selective opportunities</span>
        </motion.div>

        <motion.h1 
          className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-white max-w-5xl leading-[1.1] drop-shadow-2xl"
          style={{ transform: "translateZ(120px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I'm <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-white to-gray-400 drop-shadow-[0_0_30px_rgba(129,140,248,0.3)]">Prince Yadav.</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed drop-shadow-md"
          style={{ transform: "translateZ(60px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          An AI Product Builder & Frontend Developer. I architect scalable backend integrations and harness AI to craft cinematic frontends, visual assets, and complete digital experiences.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-5 mt-4"
          style={{ transform: "translateZ(100px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#projects" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95">
            <Terminal className="w-4 h-4" />
            Explore Projects
          </a>
          <a href={resumeUrl} download="Prince-Yadav-Resume.pdf" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-black/40 text-white border border-white/10 rounded-full font-semibold tracking-wide hover:bg-white/10 hover:border-white/30 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95">
            Get Resume
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-6 mt-8 pt-8"
          style={{ transform: "translateZ(50px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="https://github.com/Princeyadav1418" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:scale-110 active:scale-95">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/princeyadav1418" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:scale-110 active:scale-95">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:princeyadav.181103@gmail.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:scale-110 active:scale-95">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/prince.yadav.18/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:scale-110 active:scale-95">
            <Instagram className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll to explore</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
          animate={{ height: ["0%", "100%", "0%"], opacity: [0, 1, 0], translateY: [0, 10, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Grid Pattern overlay for tech aesthetic */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] -z-10 pointer-events-none" />
    </section>
  );
}

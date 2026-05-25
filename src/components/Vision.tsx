import { motion } from 'motion/react';
import { ArrowRight, Zap, Target } from 'lucide-react';

export default function Vision() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-32 z-10 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="bg-black/60 border border-white/[0.15] rounded-[3rem] p-10 sm:p-16 lg:p-24 backdrop-blur-3xl relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)] hover:border-white/5 transition-all duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 text-indigo-400 font-semibold tracking-widest text-xs uppercase mb-8 drop-shadow-sm">
            <Zap className="w-4 h-4" />
            Creative Journey & Vision
            <Target className="w-4 h-4" />
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 tracking-tight leading-[1.1] drop-shadow-lg">
            Engineering the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-gray-400">impossible standard.</span>
          </h2>
          
          <p className="text-gray-300 text-xl sm:text-2xl font-light leading-relaxed mb-12 max-w-3xl mx-auto drop-shadow-md">
            I am driven by an obsession to build digital products that transcend function. 
            My ambition is rooted in the startup ecosystem—where rapid execution, scalable architecture, and breathtaking cinematic interfaces converge. 
          </p>

          <p className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            I don't just want to write code; I want to author transformative user experiences, found genre-defining platforms, and relentlessly pursue the bleeding edge of AI-assisted development and UI design.
          </p>

          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Let's build together
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Cpu, Terminal, Palette, Server, LayoutTemplate, Database } from 'lucide-react';
import { cn } from '../lib/utils';

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto py-24 sm:py-32 z-10 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <div className="inline-flex items-center gap-3 text-indigo-400 font-semibold tracking-widest text-xs uppercase mb-6 drop-shadow-sm">
            <span className="w-8 h-px bg-indigo-500/50"></span>
            The Architecture of Thought
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold mb-8 text-white leading-tight drop-shadow-lg">
            Engineering logic. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Designing experience.</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light drop-shadow-md mb-6">
            I am Prince Yadav, an AI-driven Developer and Creative Technologist. I architect secure application infrastructures—seamlessly integrating authentication, cloud databases, and APIs—and collaborate with AI models like Google AI Studio and Codex to accelerate development.
          </p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light drop-shadow-md">
            My philosophy is simple: an exceptional product requires a solid, reliable infrastructure and undeniable aesthetic appeal. I operate at this intersection, orchestrating modern Backend-as-a-Service (BaaS) platforms, while utilizing my design expertise and AI workflows to craft the cinematic, immersive user interfaces that define my digital products.
          </p>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6">
          {[
            { id: 'system-architecture', icon: Terminal, title: "System Architecture", desc: "Connecting secure APIs, authentication workflows, and modern cloud databases." },
            { id: 'ui-ux', icon: Palette, title: "UI/UX", desc: "Cinematic, motion-driven interactive interfaces built with HTML, CSS, and modern frameworks." },
            { id: 'ai-integration', icon: Cpu, title: "AI Integration", desc: "Intelligent workflows, rapid UI generation, and LLM implementations." },
            { id: 'cloud-ops', icon: Server, title: "Cloud Ops", desc: "Deployed, secure, and production-ready environments with structured environment variables." }
          ].map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              className="bg-black/50 border border-white/[0.15] p-6 rounded-3xl backdrop-blur-3xl hover:border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)] transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30">
                <item.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-white font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

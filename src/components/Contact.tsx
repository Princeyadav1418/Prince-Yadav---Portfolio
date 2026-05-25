import { motion, useSpring, useTransform, useMotionValue } from 'motion/react';
import { Send, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { MouseEvent, useRef } from 'react';

export default function Contact() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [0, 600], [3, -3]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mouseX, [0, 600], [-3, 3]), { stiffness: 150, damping: 15 });

  function handleMouseMove(e: MouseEvent) {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(300);
    mouseY.set(300);
  }

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto py-24 sm:py-32 z-10 mb-20 px-4 sm:px-6 perspective-1000">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-3 text-indigo-400 font-semibold tracking-widest text-xs uppercase mb-6 drop-shadow-sm">
            <span className="w-8 h-px bg-indigo-500/50"></span>
            Reach Out
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1] drop-shadow-lg">
            Let's architect <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">the future.</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mb-12 max-w-lg leading-relaxed font-light">
            I'm actively exploring new opportunities. Whether it's a permanent role, an ambitious freelance contract, or a technical discussion—my inbox is open.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://github.com/princeyadav" className="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white backdrop-blur-md shadow-lg shadow-black/20">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/princeyadav" className="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110 transition-all duration-300 text-white backdrop-blur-md shadow-lg shadow-black/20">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:princeyadav.18112003@gmail.com" className="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-500 hover:scale-110 transition-all duration-300 text-white backdrop-blur-md shadow-lg shadow-black/20">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" className="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:border-transparent hover:scale-110 transition-all duration-300 text-white backdrop-blur-md shadow-lg shadow-black/20">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black/50 border border-white/[0.15] backdrop-blur-3xl rounded-[2rem] p-6 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)] hover:border-white/5 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          <form style={{ transform: "translateZ(50px)" }} className="flex flex-col gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/5 transition-all duration-300 font-light placeholder:text-gray-600 shadow-inner"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/5 transition-all duration-300 font-light placeholder:text-gray-600 shadow-inner"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Message</label>
              <textarea 
                rows={5}
                className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/5 transition-all duration-300 resize-none font-light placeholder:text-gray-600 shadow-inner"
                placeholder="Tell me about your vision..."
              />
            </div>

            <button className="group mt-2 flex items-center justify-center gap-3 bg-white text-black font-bold rounded-2xl px-8 py-5 hover:bg-gray-100 transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Initiate Contact
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Terminal, Database, Palette, Code2 } from 'lucide-react';

const categories: Category[] = [
  {
    id: 'vibe-coding-ai',
    title: "Vibe Coding & AI",
    icon: Terminal,
    skills: ["Antigravity", "Codex", "Google AI Studio", "Cursor", "Prompt Engineering", "AI Graphic & Video Generation"],
    color: "from-indigo-500/20 to-purple-500/10",
    border: "border-indigo-500/30",
    iconColor: "text-indigo-400"
  },
  {
    id: 'frontend-design',
    title: "Frontend & Design Engineering",
    icon: Code2,
    skills: ["HTML5 & CSS3", "Next.js", "React", "Tailwind CSS", "UI/UX Design", "Typography"],
    color: "from-blue-500/20 to-cyan-400/10",
    border: "border-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    id: 'backend-apis',
    title: "Backend Services & APIs",
    icon: Database,
    skills: ["Authentication", "API Integration", "Firebase", "Supabase", "PostgreSQL", "Environment Configuration"],
    color: "from-emerald-500/20 to-teal-400/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    id: 'creative-visuals',
    title: "Creative Visuals",
    icon: Palette,
    skills: ["Figma", "Canva", "DaVinci Resolve", "Cinematic Editing"],
    color: "from-fuchsia-500/20 to-pink-400/10",
    border: "border-fuchsia-500/30",
    iconColor: "text-fuchsia-400"
  }
];

interface Category {
  id: string;
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  skills: string[];
  color: string;
  border: string;
  iconColor: string;
}

export default function Skills() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-32 z-10 px-4 sm:px-6">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
           className="inline-block text-indigo-400 font-semibold tracking-widest text-xs uppercase mb-6"
        >
          <span className="w-8 h-px bg-indigo-500/50 inline-block align-middle mr-3"></span>
          Core Arsenal
          <span className="w-8 h-px bg-indigo-500/50 inline-block align-middle ml-3"></span>
        </motion.div>
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
           className="font-display text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
        >
          Technologies & Tools
        </motion.h2>
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
           className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed"
        >
          Mastering the modern technology stack to engineer robust, scalable, and visually unparalleled digital applications.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative bg-black/40 border border-white/[0.15] p-6 sm:p-8 rounded-[2rem] backdrop-blur-3xl hover:border-white/5 transition-all duration-300 group overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)] hover:-translate-y-1"
            )}
          >
            {/* Ambient Background */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br -z-10",
              cat.color
            )} />

            <div className="flex items-center gap-5 mb-8">
              <div className={cn(
                "w-14 h-14 rounded-2xl bg-white/5 border flex items-center justify-center backdrop-blur-md group-hover:bg-white/10 transition-colors",
                cat.border
              )}>
                <cat.icon className={cn("w-7 h-7", cat.iconColor)} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">{cat.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-black/50 border border-white/10 rounded-full text-gray-200 text-sm font-medium backdrop-blur-xl shadow-lg hover:border-white/30 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

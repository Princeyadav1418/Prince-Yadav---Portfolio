import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Briefcase, Trophy, Sparkles, Building2 } from 'lucide-react';
import { MouseEvent, useRef } from 'react';
import { cn } from '../lib/utils';

const experiences: ExperienceItem[] = [
  {
    id: 'innovate-tech',
    role: "InnovateTech Media Internship",
    type: "Professional Experience",
    period: "Past",
    icon: Building2,
    description: "Gained hands-on professional experience contributing to dynamic environments, collaborating with cross-functional teams to deliver impactful digital media solutions and technical implementations."
  },
  {
    id: 'nss-leadership',
    role: "National Service Scheme Leadership",
    type: "Leadership & Strategy",
    period: "Ongoing",
    icon: Trophy,
    description: "Spearheaded numerous initiatives emphasizing team coordination, project execution, and community impact. Managed massive logistics and volunteer networks, proving capability beyond just code."
  },
  {
    id: 'smart-india-hackathon',
    role: "Smart India Hackathon",
    type: "Competitive Engineering",
    period: "Milestone",
    icon: Briefcase,
    description: "Participated in rigorous, fast-paced development environments. Architected and deployed solutions under extreme time constraints, validating my ability to build rapidly and scalably."
  },
  {
    id: 'creative-leadership',
    role: "Creative Leadership & Branding",
    type: "Creative Vision",
    period: "Ongoing",
    icon: Sparkles,
    description: "Directed content strategy, technical branding, and digital storytelling initiatives. Built comprehensive narratives that bridge complex technical engineering appealing to broad audiences."
  }
];

type IconType = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

interface ExperienceItem {
  id: string;
  role: string;
  type: string;
  period: string;
  icon: IconType;
  description: string;
}

function ExperienceCard({ exp, index }: { exp: ExperienceItem, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const xTitle = useSpring(useTransform(mouseX, [0, 800], [-3, 3]), { stiffness: 150, damping: 15 });
  const yTitle = useSpring(useTransform(mouseY, [0, 500], [3, -3]), { stiffness: 150, damping: 15 });

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    if (!cardRef.current) return;
    let { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(400); 
    mouseY.set(250);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: yTitle,
        rotateY: xTitle,
        transformStyle: "preserve-3d"
      }}
      className="bg-black/50 border border-white/[0.15] rounded-[2rem] p-6 sm:p-8 hover:bg-black/70 hover:border-white/5 transition-all duration-500 backdrop-blur-3xl relative overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)]"
    >
      {/* 3D Lighting Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.05),
              transparent 80%
            )
          `,
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700" />
      
      <motion.div style={{ transform: "translateZ(40px)" }} className="flex flex-col mb-6 relative z-10 p-2">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:border-white/20">
            <exp.icon className="w-6 h-6 text-indigo-400 drop-shadow-md" />
          </div>
          <motion.span style={{ transform: "translateZ(20px)" }} className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold text-xs uppercase tracking-widest backdrop-blur-md">
            {exp.type}
          </motion.span>
        </div>
        <motion.h3 style={{ transform: "translateZ(60px)" }} className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight drop-shadow-sm leading-tight mb-2">
          {exp.role}
        </motion.h3>
      </motion.div>
      <motion.p style={{ transform: "translateZ(30px)" }} className="text-gray-400 text-lg font-light leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors p-2">
        {exp.description}
      </motion.p>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-32 z-10 px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-indigo-400 font-semibold tracking-widest text-xs uppercase mb-6 drop-shadow-sm"
          >
            <span className="w-8 h-px bg-indigo-500/50"></span>
            Professional Track Record
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight leading-[1.1]"
          >
            Experience & Leadership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-400 text-xl font-light leading-relaxed"
          >
            A history of stepping into challenging environments, directing teams, and executing highly visible projects with absolute precision.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 perspective-1000">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
      </div>
    </section>
  );
}

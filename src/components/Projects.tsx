import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { MouseEvent, useRef } from 'react';

const projects: ProjectItem[] = [
  {
    id: 'ecommerce-admin-os',
    title: "Ecommerce Admin Operating System",
    type: "Enterprise Administration Platform",
    description: "Built a production-grade ecommerce administration platform with secure authentication, dashboard analytics, role-based management, modern user interface systems, cloud deployment, and scalable backend architecture.",
    tech: ["Next.js", "TypeScript", "Vibe Coded UI", "Antigravity", "Supabase", "Prisma", "PostgreSQL", "Tailwind CSS"],
    link: "https://storesync-shops.vercel.app/",
    github: "https://github.com/Princeyadav1418/E-Commerce-Admin",
    color: "from-blue-600/20 via-indigo-600/10 to-purple-600/20",
    accent: "text-blue-400",
    border: "group-hover:border-white/5"
  },
  {
    id: 'qr-ticketing',
    title: "Tix-Flux",
    type: "Scalable Event Infrastructure",
    description: "Developed a realtime QR-based ticket booking and validation system with automated QR generation, scalable booking workflows, and chatbot-integrated ticket management infrastructure.",
    tech: ["Next.js", "Firebase", "QR Systems", "Realtime Database", "Vercel"],
    link: "https://ai.studio/apps/03ffd249-55d2-4903-acc9-cc67308bd484?fullscreenApplet=true",
    github: "https://github.com/Princeyadav1418/QR-Based-Ticketing-System",
    color: "from-emerald-600/20 via-teal-600/10 to-cyan-600/20",
    accent: "text-emerald-400",
    border: "group-hover:border-white/5"
  },
  {
    id: 'usonly-fullstack',
    title: "USONLY Full Stack Platform",
    type: "Cloud Deployed Application",
    description: "Engineered a scalable full-stack platform integrating realtime database operations, deployment infrastructure, cloud workflows, and responsive frontend architecture.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Google Cloud Platform", "Vercel"],
    link: "https://usonly.vercel.app/",
    github: "https://github.com/Princeyadav1418/UsOnly-MainApp",
    color: "from-amber-600/20 via-orange-600/10 to-red-600/20",
    accent: "text-amber-400",
    border: "group-hover:border-white/5"
  },
  {
    id: 'engineering-paradox',
    title: "Engineering Paradox",
    type: "Cinematic Visual Narrative",
    description: "Conceptualized a cinematic engineering storytelling series exploring student life, ambition, struggles, and growth through immersive visual narratives and branding.",
    tech: ["Creative Direction", "Storyboarding", "Cinematic Editing", "Branding"],
    link: "#",
    github: "#",
    color: "from-zinc-600/20 via-gray-600/10 to-slate-600/20",
    accent: "text-gray-300",
    border: "group-hover:border-white/5"
  }
];

interface ProjectItem {
  id: string;
  title: string;
  type: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  color: string;
  accent: string;
  border: string;
}

function ProjectCard({ project, index }: { project: ProjectItem, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  // 3D Tilt properties
  const xTitle = useSpring(useTransform(mouseX, [0, 800], [-3, 3]), { stiffness: 150, damping: 15 });
  const yTitle = useSpring(useTransform(mouseY, [0, 500], [3, -3]), { stiffness: 150, damping: 15 });
  
  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    if (!cardRef.current) return;
    let { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(400); // Reset to center
    mouseY.set(250);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
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
      className={cn(
        "group relative flex flex-col p-6 sm:p-8 rounded-[2rem] border border-white/[0.15] bg-black/40 backdrop-blur-3xl overflow-hidden transition-all duration-700 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)] hover:-translate-y-2",
        "hover:z-50",
        project.border
      )}
    >
      {/* 3D Lighting Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
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
      
      {/* Ambient Depth Gradient */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br -z-10",
        project.color
      )} />

      <motion.div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="relative z-10 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div className={cn("text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md", project.accent)}>
            {project.type}
          </div>
          <motion.div style={{ transform: "translateZ(30px)" }} className="relative z-30 flex items-center gap-3 pointer-events-auto">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="relative z-30 pointer-events-auto inline-flex w-12 h-12 rounded-full bg-black/50 border border-white/10 items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white backdrop-blur-md cursor-pointer">
              <Github className="w-5 h-5" />
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-30 pointer-events-auto inline-flex w-12 h-12 rounded-full bg-white text-black items-center justify-center hover:bg-gray-200 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer">
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.h3 style={{ transform: "translateZ(80px)" }} className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-sm leading-[1.1]">
          {project.title}
        </motion.h3>
        
        <motion.p style={{ transform: "translateZ(40px)" }} className="text-gray-400 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-3xl">
          {project.description}
        </motion.p>

        <motion.div style={{ transform: "translateZ(60px)" }} className="mt-auto">
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t: string) => (
              <span key={t} className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto py-32 z-10 px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-indigo-400 font-semibold tracking-widest text-xs uppercase mb-6 drop-shadow-sm"
          >
            <span className="w-8 h-px bg-indigo-500/50"></span>
            Case Studies
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg tracking-tight leading-[1.1]"
          >
            Featured Productions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-400 text-xl font-light leading-relaxed"
          >
            A curated selection of robust platforms and cinematic digital products. Backend infrastructure is securely architected using modern BaaS platforms for absolute scale, while frontends, visuals, and UI logic are rapidly developed alongside AI models for unmatched aesthetic supremacy.
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

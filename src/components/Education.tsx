import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const educationList: EducationItem[] = [
  {
    id: 'dtu-btech',
    institution: "Delhi Technological University",
    degree: "Bachelor of Technology",
    branch: "Electronics and Communication Engineering",
    score: "6.99 CGPA",
    logo: "DTU"
  },
  {
    id: 'cbse-xii',
    institution: "Central Board of Secondary Education",
    degree: "Class XII (Senior Secondary)",
    branch: "Science Stream",
    score: "84.6%",
    logo: "XII"
  },
  {
    id: 'cbse-x',
    institution: "Central Board of Secondary Education",
    degree: "Class X (Secondary)",
    branch: "General Academics",
    score: "91.0%",
    logo: "X"
  }
];

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  branch: string;
  score: string;
  logo: string;
}

export default function Education() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-32 z-10 px-4 sm:px-6">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
           className="inline-flex items-center justify-center gap-3 text-center text-indigo-400 font-semibold tracking-widest text-xs uppercase mb-6 drop-shadow-sm"
        >
          <GraduationCap className="w-4 h-4" />
          Academic Rigor
        </motion.div>
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
           className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg tracking-tight leading-tight"
        >
          Education Journey
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {educationList.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`bg-black/40 border border-white/[0.15] rounded-[2rem] p-6 sm:p-8 backdrop-blur-3xl transition-all duration-300 relative overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)] hover:border-white/5 ${i === 0 ? "lg:col-span-2 lg:flex lg:items-center lg:justify-between lg:p-10 hover:border-white/5" : ""}`}
          >
            {i === 0 && <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />}
            
            <div className={`relative z-10 ${i === 0 ? "lg:w-2/3" : ""}`}>
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 text-xl font-display font-bold text-gray-300">
                {edu.logo}
              </div>
              
              <h3 className={`font-display font-bold text-white tracking-tight leading-tight mb-2 ${i === 0 ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"}`}>
                {edu.institution}
              </h3>
              
              <div className="flex flex-col gap-1 mb-6">
                <span className="text-white/90 text-base font-medium">{edu.degree}</span>
                <span className="text-gray-400 text-sm font-light">{edu.branch}</span>
              </div>
            </div>
            
            <div className={`relative z-10 ${i === 0 ? "lg:w-1/3 lg:text-right" : ""}`}>
              <div className={`inline-flex flex-col ${i === 0 ? "lg:items-end" : ""}`}>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Score Secured</span>
                <span className={`font-display font-bold text-transparent bg-clip-text bg-gradient-to-r ${i === 0 ? "from-indigo-400 to-purple-400 text-4xl sm:text-5xl" : "from-emerald-400 to-teal-400 text-3xl sm:text-4xl"}`}>
                  {edu.score}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

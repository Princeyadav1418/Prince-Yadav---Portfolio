import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Vision from './components/Vision';
import Contact from './components/Contact';
import SmoothScroll from './components/SmoothScroll';
import Scene from './components/Scene';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen selection:bg-indigo-500/30 overflow-hidden">
        {/* Fullscreen 3D interactive background */}
        <Scene />
        
        {/* Navigation Layer */}
        <Navbar />
        
        {/* Main Content Layout */}
        <main className="flex flex-col items-center w-full">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Vision />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="w-full text-center py-8 border-t border-white/5 relative z-10 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Prince Yadav. All rights reserved.</p>
        </footer>
      </div>
    </SmoothScroll>
  );
}

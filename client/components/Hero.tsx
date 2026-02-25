import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-6">
      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full border-t border-b border-white/20 py-12 mb-12"
        >
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter uppercase">
            PARAM SHELKE
          </h1>
          <div className="flex justify-between items-center mt-4 px-2 text-[2vw] md:text-sm font-light tracking-[0.5em] uppercase text-white/60">
            <span>Full Stack Developer</span>
            <span className="hidden md:inline">|</span>
            <span>Java & Spring Boot Specialist</span>
            <span className="hidden md:inline">|</span>
            <span>Atxep Zyreva</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-8 items-start justify-between w-full max-w-5xl mt-8"
        >
          <div className="text-left max-w-md">
            <h2 className="text-xl font-bold uppercase mb-4 tracking-widest text-white/40">Introduction</h2>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              Building scalable backend systems and high-performance applications. 
              Focused on clean architecture, system design, and performance optimization.
            </p>
          </div>

          <div className="flex flex-col items-end gap-6 w-full md:w-auto mt-8 md:mt-0">
            <div className="flex gap-4">
              <a
                href="#contact"
                className="border border-white/40 px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Hire Me
              </a>
              <a
                href="#resume"
                className="bg-white text-black px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-all text-center"
              >
                Resume
              </a>
            </div>
            
            <div className="flex gap-6 text-xl text-white/40">
              <a href="https://github.com/param-atxep" className="hover:text-white transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/param-shelke-856722381" className="hover:text-white transition-colors"><FaLinkedin /></a>
              <a href="https://www.instagram.com/parmya._?igsh=aXI5bXc2MzR3c2M0" className="hover:text-white transition-colors"><FaInstagram /></a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines like the portfolio grid */}
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
      <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
      <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
    </section>
  );
}

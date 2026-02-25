import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const stats = [
  { value: "02+", label: "Years Experience" },
  { value: "12+", label: "Completed Projects" },
  { value: "05+", label: "Core Technologies" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12 border-b-8 border-black pb-8">
              ABOUT <br /> PARAM SHELKE
            </h2>
            <div className="space-y-6 text-lg leading-relaxed font-medium">
              <p>
                Passionate Backend and Full Stack Developer specializing in scalable Java & Spring Boot applications. 
                Experienced in building REST APIs, microservices, database-driven systems, and AI-powered solutions.
              </p>
              <p>
                Co-Founder at Atxep Zyreva. Focused on clean architecture, system design, and performance optimization.
                I thrive on solving complex backend challenges and architecting distributed systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="aspect-video bg-black flex items-center justify-center p-12">
  <h3 className="text-white text-3xl font-black uppercase tracking-widest text-center border border-white/20 p-8 w-full">
    <div>Full-Stack Engineer</div>
    <div className="mt-2">Backend Specialist</div>
  </h3>
</div>
            
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-4xl font-black leading-none">{stat.value}</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-black/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

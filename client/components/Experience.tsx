import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Career" 
          subtitle="Professional Journey"
        />

        <div className="border-t border-white/20">
          <div className="grid md:grid-cols-4 gap-8 py-12 group hover:bg-white hover:text-black transition-all duration-500 px-8 border-b border-white/20">
             <div className="text-sm font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100">
               Oct 2025 - Present
             </div>
             <div className="md:col-span-2">
               <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Co-Founder</h3>
               <p className="text-sm uppercase tracking-widest font-bold opacity-60">Atxep Zyreva</p>
             </div>
             <div className="text-sm opacity-60 group-hover:opacity-100 leading-relaxed">
               Leading the technical vision and backend strategy for Atxep Zyreva. 
               Focused on building scalable infrastructure and AI integrations.
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

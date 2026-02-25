import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white text-black border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Academic"
          subtitle="Educational Foundation"
        />

        <div className="border-y border-black/20 py-12 px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Information Technology</h3>
              <p className="text-lg font-bold uppercase tracking-widest text-black/40 mb-6">Modern College of Engineering, Pune</p>
              <p className="leading-relaxed opacity-80">
                Pursuing a degree in Information Technology at Progressive Education Society's
                Modern College of Engineering. Focusing on computer science fundamentals,
                data structures, algorithms, and software engineering principles.
              </p>
            </div>
            <div className="text-xl font-black uppercase tracking-widest border-l-4 border-black pl-8">
              2024 - 2028
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

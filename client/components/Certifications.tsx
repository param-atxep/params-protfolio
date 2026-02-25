import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const certs = [
  { title: "JPMorgan Simulation", issuer: "JPMorgan Chase", year: "2024" },
  { title: "Walmart Engineering", issuer: "Walmart", year: "2024" },
  { title: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
  { title: "Google Gen AI Studio", issuer: "Google Cloud", year: "2024" },
  { title: "Hack Node India 2025", issuer: "Hack Node India", year: "2025" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Recognition" 
          subtitle="Achievements & Certifications"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {certs.map((cert, idx) => (
            <div key={idx} className="aspect-square bg-black p-8 flex flex-col justify-between hover:bg-white hover:text-black transition-all group">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">{cert.year}</div>
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-tighter leading-none">{cert.title}</h3>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-60 group-hover:opacity-100">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

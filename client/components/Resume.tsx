import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FaFileDownload, FaEye, FaFilePdf } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-white text-black border-t border-black/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <SectionHeader 
          title="CV" 
          subtitle="Curriculum Vitae"
          centered
        />

        <div className="max-w-4xl w-full border border-black p-12 md:p-24 space-y-12 bg-white hover:bg-black hover:text-white transition-all duration-700 group">
          <div className="text-8xl flex justify-center opacity-10 group-hover:opacity-100 transition-opacity">
            <FaFilePdf />
          </div>

          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12 border-b-8 border-current pb-8">
            PROFESSIONAL RESUME
          </h3>

          <p className="text-lg md:text-2xl font-bold uppercase tracking-widest leading-relaxed">
            Download the full record of engineering expertise and technical background.
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center pt-12">
            <a
              href="/Param_Shelke_Resume.pdf"
              download
              className="bg-black text-white group-hover:bg-white group-hover:text-black border border-black px-12 py-6 text-sm font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4"
            >
              Download PDF <FaFileDownload />
            </a>

            <a
              href="/Param_Shelke_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-12 py-6 text-sm font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all flex items-center justify-center gap-4 group-hover:border-white"
            >
              View Resume <FaEye />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
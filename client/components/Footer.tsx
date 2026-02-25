import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-black mb-2 tracking-tighter uppercase">PARAM SHELKE</h2>
          <p className="text-white/40 max-w-sm text-xs font-bold uppercase tracking-widest">
            Backend Architect / Java Specialist / Co-Founder
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-8">
            <a href="https://github.com/param-atxep" className="text-xl hover:text-white transition-colors opacity-40 hover:opacity-100"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/param-shelke-856722381" className="text-xl hover:text-white transition-colors opacity-40 hover:opacity-100"><FaLinkedin /></a>
            <a href="https://www.instagram.com/parmya._?igsh=aXI5bXc2MzR3c2M0" className="text-xl hover:text-white transition-colors opacity-40 hover:opacity-100"><FaInstagram /></a>
            <a href="mailto:contact@param.dev" className="text-xl hover:text-white transition-colors opacity-40 hover:opacity-100"><FaEnvelope /></a>
          </div>
          <p className="text-white/20 text-[8px] font-bold uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} Param Shelke. Minimalist Engineered Portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
}

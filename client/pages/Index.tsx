import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="dark relative min-h-screen bg-black selection:bg-white selection:text-black overflow-x-hidden antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Simple Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-12 right-12 w-16 h-16 flex items-center justify-center border-4 border-white text-white font-black hover:bg-white hover:text-black transition-all z-40 hidden md:flex"
        aria-label="Back to top"
      >
        UP
      </button>
    </div>
  );
}

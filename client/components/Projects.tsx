import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Course Selling Application",
    desc: "A full-featured platform for selling courses online.",
    problem: "Educators lacked a unified, role-based platform to manage and monetize content securely.",
    solution: "Developed a Spring Boot backend with JWT auth and MySQL for robust data management and secure transactions.",
    image: "/images/course_selling_application.png",
    tech: ["Java", "Spring Boot", "MySQL", "JWT"],
    github: "#",
    live: "#"
  },
  {
    title: "AI Parking System",
    desc: "Intelligent parking management system using AI.",
    problem: "Real-time parking availability monitoring was inaccurate and manual.",
    solution: "Integrated Python-based AI models with a Spring Boot backend for automated slot detection and real-time dashboard updates.",
    image: "/images/parking.jpg",
    tech: ["AI", "Python", "Backend Integration"],
    github: "#",
    live: "#"
  },
  {
    title: "Menstrual Mentor AI",
    desc: "AI-based health assistant for women's health.",
    problem: "Limited personalized health tracking and symptom prediction for specialized health needs.",
    solution: "Created an AI-driven prediction dashboard using health history to provide personalized health insights and alerts.",
    image: "/images/menstural.png",
    tech: ["AI", "Python", "React", "Spring Boot"],
    github: "#",
    live: "#"
  },
  {
    title: "MovieXR",
    desc: "Movie recommendation and review platform.",
    problem: "Users were overwhelmed by content choices and lacked high-quality personalized recommendations.",
    solution: "Built a recommendation engine that analyzes user preferences and ratings via a seamless Spring Boot API integration.",
    image: "/images/moviexr.png",
    tech: ["React", "API Integration", "Spring Boot"],
    github: "#",
    live: "#"
  },
  {
    title: "Jarvis with Video",
    desc: "Voice-controlled assistant with video features.",
    problem: "Standard voice assistants lacked visual feedback and real-time video processing capabilities.",
    solution: "Enhanced voice assistant capabilities by integrating OpenCV for real-time video processing and response.",
    image: "/images/jarvis.png",
    tech: ["Python", "OpenCV", "Backend"],
    github: "#",
    live: "#"
  },
  {
    title: "Green Lies Detector",
    desc: "AI system for detecting corporate greenwashing.",
    problem: "Corporate sustainability claims were difficult to verify, leading to potential greenwashing.",
    solution: "Implemented an NLP-based analysis system that scores corporate reports against verified sustainability benchmarks.",
    image: "/images/greenlie.png",
    tech: ["AI", "NLP", "Python", "React"],
    github: "#",
    live: "#"
  },
  {
    title: "Transaction Microservice",
    desc: "Kafka-based transaction processing system.",
    problem: "High-latency transaction processing in banking simulations during peak loads.",
    solution: "Architected a Kafka-driven microservices system for asynchronous, high-throughput transaction processing.",
    image: "/images/tranction.png",
    tech: ["Spring Boot", "Kafka", "MySQL"],
    github: "#",
    live: "#"
  },
  {
    title: "E-Commerce Microservices",
    desc: "Distributed e-commerce system with microservices architecture.",
    problem: "Monolithic e-commerce platforms faced scaling issues and single points of failure.",
    solution: "Decoupled Order, Payment, and Inventory services using Spring Boot and Docker for elastic scalability.",
    image: "/images/ecom.png",
    tech: ["Spring Boot", "Docker", "Redis"],
    github: "#",
    live: "#"
  },
  {
    title: "Real-Time Chat App",
    desc: "Live messaging application with database persistence.",
    problem: "Difficulty maintaining high-performance real-time communication with message history persistence.",
    solution: "Utilized WebSockets for real-time data flow with a Spring Boot backend and optimized MySQL persistence.",
    image: "/images/chat.png",
    tech: ["Spring Boot", "WebSocket", "MySQL"],
    github: "#",
    live: "#"
  },
  {
    title: "AI Resume Screening",
    desc: "Intelligent system for screening resumes.",
    problem: "HR departments were overwhelmed by high volumes of resumes, leading to inefficient hiring processes.",
    solution: "Built an AI system that automatically extracts skills and scores resumes based on job descriptions.",
    image: "/images/resume.png",
    tech: ["AI", "Python", "Spring Boot", "React"],
    github: "#",
    live: "#"
  },
  {
    title: "Banking System Backend",
    desc: "Robust backend for a core banking system.",
    problem: "Legacy banking backends lacked the modularity needed for modern digital banking features.",
    solution: "Developed a clean-architecture backend with Spring Boot, ensuring high security and transaction integrity.",
    image: "/images/bbbb.avif",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "#",
    live: "#"
  },
  {
    title: "Job Portal Backend",
    desc: "Scalable backend for a modern job portal.",
    problem: "High volumes of job applications and job postings required a scalable, secure management system.",
    solution: "Implemented a RESTful backend with role-based moderation and automated notification flows.",
    image: "/images/newjob.jpg",
    tech: ["Spring Boot", "MySQL", "JWT"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Case Studies" 
          subtitle="A portfolio of engineered solutions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-white/10 group-hover:border-white transition-all duration-500" />
              </div>
              
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Project {String(idx + 1).padStart(2, '0')}</p>
                <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-white/60 uppercase tracking-widest">
                  {project.tech.slice(0, 2).join(" / ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-[95vw] bg-black text-white border border-white/10 p-0 overflow-hidden">
          {selectedProject && (
            <div className="flex flex-col md:flex-row min-h-[500px]">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-between">
                <DialogHeader>
                  <DialogTitle className="text-4xl font-black uppercase tracking-tight mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-white/60 uppercase tracking-widest text-xs font-bold mb-8">
                    {selectedProject.tech.join(" / ")}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">The Problem</h4>
                    <p className="text-sm leading-relaxed text-white/80">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">The Solution</h4>
                    <p className="text-sm leading-relaxed text-white/80">{selectedProject.solution}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-white/20 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    View Repo
                  </a>
                  <a 
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white text-black py-4 text-xs font-black uppercase tracking-widest hover:bg-white/90 transition-all"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

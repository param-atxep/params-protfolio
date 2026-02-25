import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FaJava, FaDatabase, FaReact, FaCode, FaGithub, FaTools, FaLaptopCode, FaCogs } from "react-icons/fa";
import { SiSpringboot, SiFlutter, SiJavascript, SiMysql, SiApachekafka, SiPostman, SiApachemaven, SiSupabase, SiIntellijidea } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const skills = [
  { name: "Java", icon: <FaJava />, category: "Backend" },
  { name: "Spring Boot", icon: <SiSpringboot />, category: "Backend" },
  { name: "MySQL", icon: <SiMysql />, category: "Database" },
  { name: "Kafka", icon: <SiApachekafka />, category: "Infrastructure" },
  { name: "Flutter", icon: <SiFlutter />, category: "Mobile" },
  { name: "React.js", icon: <FaReact />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "Language" },
  { name: "Git", icon: <FaGithub />, category: "Tools" },
  { name: "Postman", icon: <SiPostman />, category: "Tools" },
  { name: "Maven", icon: <SiApachemaven />, category: "Tools" },
  { name: "Supabase", icon: <SiSupabase />, category: "Database" },
  { name: "IntelliJ", icon: <SiIntellijidea />, category: "IDE" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Expertise" 
          subtitle="Core technical capabilities & tools"
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-white/10 border border-white/10">
          <TooltipProvider>
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="aspect-square flex items-center justify-center bg-black hover:bg-white hover:text-black transition-all group cursor-help">
                      <div className="text-3xl md:text-5xl opacity-40 group-hover:opacity-100 transition-opacity">
                        {skill.icon}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-none border-none px-4 py-2 mb-2">
                    <p>{skill.name}</p>
                    <p className="text-[8px] opacity-60 mt-1">{skill.category}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}

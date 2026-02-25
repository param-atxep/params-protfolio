import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`mb-16 border-l-4 border-white pl-8 ${centered ? "text-center md:text-left" : "text-left"}`}
    >
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/40 text-sm md:text-base uppercase tracking-widest font-medium">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, transition: { duration: 0.2 } } : {}}
      className={cn(
        "bg-transparent border border-white/10 p-8 relative overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

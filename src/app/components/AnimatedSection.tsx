import { ReactNode } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
};

export function AnimatedSection({ children, className = "", threshold = 0.2 }: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

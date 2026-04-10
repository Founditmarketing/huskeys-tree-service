import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function Section({ children, className, id, delay = 0 }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn("py-20 md:py-32 overflow-hidden", className)}
    >
      {children}
    </motion.section>
  );
}

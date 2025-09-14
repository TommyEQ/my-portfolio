"use client";

import { motion, Variants, Transition } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedPageTransitionProps {
  children: ReactNode;
}

// Properly typed transition
const transition: Transition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1],
};

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20, transition },
  animate: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: -20, transition },
};

export default function AnimatedPageTransition({
  children,
}: AnimatedPageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

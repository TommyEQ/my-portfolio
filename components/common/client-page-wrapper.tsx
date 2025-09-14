"use client";

import { motion, Variants, Transition } from "framer-motion";
import { ReactNode } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

// Define a typed transition
const transition: Transition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1], // ✅ typed as Easing array
};

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20, transition: transition as Transition },
  animate: { opacity: 1, y: 0, transition: transition as Transition },
  exit: { opacity: 0, y: 20, transition: transition as Transition },
};

export const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
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
};

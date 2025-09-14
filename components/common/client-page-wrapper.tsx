"use client";

import { motion, Variants, Transition, Easing } from "framer-motion";
import { ReactNode } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

// Define easing as Easing type
const ease: Easing = "easeInOut";

// Define a properly typed transition
const transition: Transition = {
  duration: 0.5,
  ease,
};

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20, transition },
  animate: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: 20, transition },
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

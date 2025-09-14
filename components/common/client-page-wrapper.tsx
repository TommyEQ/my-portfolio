"use client";

import { motion, Variants, Transition } from "framer-motion";
import { ReactNode } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

const transition: Transition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
};

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20, transition },
  animate: { opacity: 1, y: 0, transition },
};

export const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

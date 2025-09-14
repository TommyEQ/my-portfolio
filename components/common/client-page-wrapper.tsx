import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedPageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1], // <-- fixed here!
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1], // <-- fixed here!
    },
  },
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

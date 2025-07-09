import { type ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 30,
  once = true,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: 0.1,
    margin: "0px 0px -100px 0px",
  });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Courbe personnalisée plus fluide
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

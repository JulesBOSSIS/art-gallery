import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
}

const Typewriter = ({ text, delay = 0, className = "" }: TypewriterProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
        duration: 0.5,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: "inline-block",
            marginRight: "0.5rem",
            overflow: "hidden",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Typewriter;

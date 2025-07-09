import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  size = "medium",
  children,
  className = "",
  onClick,
  disabled,
  type,
}: ButtonProps) => {
  const classes =
    `button button--${variant} button--${size} ${className}`.trim();

  const glowVariants = {
    primary: {
      boxShadow: [
        "0 0 0px rgba(44, 62, 80, 0)",
        "0 0 20px rgba(44, 62, 80, 0.4)",
        "0 0 0px rgba(44, 62, 80, 0)",
      ],
    },
    secondary: {
      boxShadow: [
        "0 0 0px rgba(231, 76, 60, 0)",
        "0 0 20px rgba(231, 76, 60, 0.4)",
        "0 0 0px rgba(231, 76, 60, 0)",
      ],
    },
    outline: {
      boxShadow: [
        "0 0 0px rgba(44, 62, 80, 0)",
        "0 0 15px rgba(44, 62, 80, 0.3)",
        "0 0 0px rgba(44, 62, 80, 0)",
      ],
    },
  };

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      animate={glowVariants[variant]}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default Button;

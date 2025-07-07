import { IButtonProps } from "@/interfaces/ui";
import { motion } from "framer-motion";

export const Button = ({
  children,
  className,
  type,
  onClick,
  disabled,
}: IButtonProps) => {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} cursor-pointer`}
      whileHover={{
        scale: type === "button" ? 1.2 : 1,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

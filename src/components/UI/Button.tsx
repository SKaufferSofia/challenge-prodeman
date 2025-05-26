import { IButtonProps } from "@/interfaces/ui";

export const Button = ({
  children,
  className,
  type,
  onClick,
  disabled,
}: IButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} cursor-pointer`}
    >
      {children}
    </button>
  );
};

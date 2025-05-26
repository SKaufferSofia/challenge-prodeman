export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
}

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

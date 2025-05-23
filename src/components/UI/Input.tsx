interface IInputProps {
  ref?: React.RefObject<HTMLInputElement | null>;
  type: string;
  name: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  ref,
  type,
  name,
  placeholder,
  className,
  value,
  onChange,
}: IInputProps) => {
  return (
    <input
      ref={ref}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`bg-secondaryWhite dark:bg-secondaryBlack px-3 py-2 rounded-md placeholder:text-textPrimary/80 dark:placeholder:text-textPrimary-dark ${className}`}
    />
  );
};

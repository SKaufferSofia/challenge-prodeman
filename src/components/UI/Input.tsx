import { IInputProps } from "@/interfaces/ui";

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
      className={`appearance-none border border-background bg-secondaryWhite font-medium dark:bg-secondaryBlack px-3 py-2 rounded-md placeholder:text-textPrimary/80 dark:placeholder:text-textPrimary-dark  ${className} `}
    />
  );
};

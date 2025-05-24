export interface IOption {
  value: string;
  label: string;
}

interface ISelectProps {
  arrayOptions: IOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export const Select = ({
  arrayOptions,
  value,
  onChange,
  className,
}: ISelectProps) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`bg-secondaryWhite dark:bg-secondaryBlack px-3 py-2 rounded-md placeholder:text-textPrimary/80 dark:placeholder:text-textPrimary-dark ${className}`}
    >
      {arrayOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

import { Button } from "./Button";

interface ITooltipProps {
  children: React.ReactNode;
  text: string;
  className?: string;
}

export const Tooltip = ({ children, text, className }: ITooltipProps) => {
  return (
    <div className="relative group inline-block">
      <Button className={className}>{children}</Button>

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
        {text}
      </div>
    </div>
  );
};

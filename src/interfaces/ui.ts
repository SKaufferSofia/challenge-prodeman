export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ICardsProps {
  id: number;
  title: string;
  description: string;
  img: string;
  favorites: boolean;
  category: string;
  toggleFavorite: () => void;
}

export interface IInputProps {
  ref?: React.RefObject<HTMLInputElement | null>;
  type: string;
  name: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  arrayOptions: IOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

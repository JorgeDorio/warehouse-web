import { MouseEventHandler } from "react";

interface IButtonProp {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({ label, onClick, disabled }: IButtonProp) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded text-white font-bold ${
        disabled ? "bg-gray-400" : "bg-blue-800 hover:bg-blue-950"
      }`}
    >
      {label}
    </button>
  );
};

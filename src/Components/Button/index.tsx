import { MouseEventHandler, useEffect, useState } from "react";

interface IButtonProp {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: "default" | "secondary";
}

export const Button = ({
  label,
  onClick,
  disabled,
  style = "default",
}: IButtonProp) => {
  const [btnStyle, setBtnStyle] = useState("bg-blue-800 hover:bg-blue-950");

  useEffect(() => {
    if (style == "default") setBtnStyle("bg-blue-800 hover:bg-blue-950 text-white");
    if (style == "secondary") setBtnStyle("bg-blue-200 hover:bg-blue-950 text-blue-900 hover:text-white");
  });

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded font-bold ${
        disabled ? "bg-gray-400 text-white" : btnStyle
      }`}
    >
      {label}
    </button>
  );
};

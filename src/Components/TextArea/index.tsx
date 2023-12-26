import { ChangeEvent, useState } from "react";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
}

export const TextArea = ({ label, value, onChange, name }: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mt-2">
      <textarea
        id={name}
        value={value}
        onChange={(e) => onChange(e)}
        className="border outline-none border-blue-200 p-2 rounded-md focus:border-blue-800 w-full"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        name={name}
      />
      <label
        htmlFor={name}
        className={`absolute cursor-text -top-3 left-2 bg-white px-2 transition-all duration-150 ${
          isFocused || value.length
            ? "transform translate-y-1 text-xs scale-60 text-blue-800"
            : "transform translate-y-5 scale-100 text-blue-200"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

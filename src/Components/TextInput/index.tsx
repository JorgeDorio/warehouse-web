import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: HTMLInputTypeAttribute;
  min?: number;
  maxLength?: number;
  maskPattern?: RegExp;
  maskPosition?: string;
}

export const TextInput = ({
  label,
  value,
  onChange,
  name,
  min,
  maxLength,
  type = "text",
  maskPattern,
  maskPosition = "",
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const maskedValue = maskPattern
      ? applyMask(event.target.value, maskPattern, maskPosition)
      : event.target.value;
    event.target.value = maskedValue;

    onChange(event);
  };

  const applyMask = (
    value: string,
    maskPattern: RegExp,
    maskPosition: string
  ) => {
    return value.replace(/\D/g, "").replace(maskPattern, maskPosition);
  };

  return (
    <div className="relative mt-2">
      <input
        type={type}
        id={name}
        value={value}
        onChange={handleChange} // Use handleChange to apply the mask
        className="border outline-none border-blue-200 p-2 rounded-md focus:border-blue-800"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        name={name}
        min={min}
        maxLength={maxLength}
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

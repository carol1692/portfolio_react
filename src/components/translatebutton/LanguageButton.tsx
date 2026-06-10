import { useState } from "react";
interface SlideButtonProps {
  value: boolean;
  onChange: () => void;
}

export default function LanguageButton({ value, onChange }: SlideButtonProps) {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={onChange}
      className={`
        relative w-14 h-7 rounded-full transition-colors
        ${value ? "bg-blue-600" : "bg-gray-300"}
      `}
    >
      <span
        className={`
          absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform
          ${value ? "translate-x-7" : ""}
        `}
      />
    </button>
  );
}

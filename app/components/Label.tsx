import React from "react";

interface LabelProps {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

const Label = ({ text, className = "", children }: LabelProps) => (
  <span
    className={`absolute gap-2 top-2 right-2 flex items-center px-3 py-1 text-[15px] font-bold text-white bg-red-500 rounded ${className}`}
  >
    {text}
    {children}
  </span>
);

export default Label;

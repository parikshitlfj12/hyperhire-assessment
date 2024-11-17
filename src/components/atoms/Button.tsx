import React from "react";
import { ButtonProps } from "./atomInterface";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`py-2 px-4 rounded-full font-medium ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

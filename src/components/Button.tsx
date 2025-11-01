
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  icon,
  className = "",
}) => {
  const baseStyles =
    "flex items-center justify-center gap-3 rounded-full px-6 h-13 font-medium transition-all duration-300 ease-in-out cursor-pointer";

  const variants = {
    primary: "bg-[#383838] hover:bg-white",
    secondary:
      "bg-white text-[#383838] hover:bg-[#383838] hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} ${
        variant === "primary" ? "text-white hover:text-[#383838]" : ""
      }`}
    >
      {children}
      {icon && icon}
    </button>
  );
};

export default Button;

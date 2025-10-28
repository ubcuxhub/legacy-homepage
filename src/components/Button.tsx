
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
    "flex items-center justify-center gap-3 rounded-full px-6 h-13 font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 active:scale-95 cursor-pointer";

  const variants = {
    primary: "bg-[#383838] border-none",
    secondary:
      "bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.3)] backdrop-blur-[0.5px]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={variant === "primary" ? { color: "#FFFFFF" } : undefined}
    >
      {children}
      {icon && icon}
    </button>
  );
};

export default Button;
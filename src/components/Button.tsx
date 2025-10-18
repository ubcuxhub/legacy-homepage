
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
    "flex items-center justify-center gap-3 rounded-[67.066px] px-2.5 py-2 font-dm-sans font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 active:scale-95 cursor-pointer";

    const variants = {
        primary: "w-[252px] h-[54px] bg-[#383838] border-none",
        secondary:
          "w-[252px] h-[54px] bg-[rgba(255,255,255,0.1)] text-[#383838] border border-[rgba(255,255,255,0.3)] backdrop-blur-[0.5px]",
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
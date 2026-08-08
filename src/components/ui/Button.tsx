import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5
        py-3
        rounded-xl
        font-semibold
        transition
        duration-200
        ${
          variant === "primary"
            ? `
              bg-amber-400
              text-black
              hover:bg-amber-500
            `
            :
            `
              bg-gray-100
              dark:bg-gray-800
              hover:bg-gray-200
              dark:hover:bg-gray-700
            `
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;
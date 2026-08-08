import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-white
        dark:bg-gray-900
        rounded-2xl
        shadow-sm
        border
        border-gray-200
        dark:border-gray-800
        p-6
        transition
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
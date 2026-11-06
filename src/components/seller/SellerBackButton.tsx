import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type SellerBackButtonProps = {
  label?: string;
};

const SellerBackButton: React.FC<SellerBackButtonProps> = ({
  label = "Back",
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Go back to previous page"
      className="
        mb-6
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-gray-200
        bg-white
        px-4
        py-2.5
        text-sm
        font-semibold
        text-gray-700
        shadow-sm
        transition
        duration-200
        hover:bg-gray-50
        hover:text-gray-950
        hover:shadow-md
        focus:outline-none
        focus:ring-2
        focus:ring-amber-400
        focus:ring-offset-2
        dark:border-gray-700
        dark:bg-gray-900
        dark:text-gray-300
        dark:hover:bg-gray-800
        dark:hover:text-white
      "
    >
      <ArrowLeftIcon className="h-5 w-5" />

      <span>{label}</span>
    </button>
  );
};

export default SellerBackButton;

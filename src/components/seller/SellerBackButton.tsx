
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
        mb-6 inline-flex items-center gap-2
        rounded-xl border border-slate-200
        bg-white px-4 py-2.5
        text-sm font-semibold text-slate-700
        shadow-sm transition duration-200
        hover:border-sky-200 hover:bg-sky-50
        hover:text-sky-700 hover:shadow-md
        focus:outline-none focus:ring-2
        focus:ring-sky-400 focus:ring-offset-2
        dark:border-slate-700 dark:bg-slate-900
        dark:text-slate-300 dark:hover:bg-slate-800
        dark:hover:text-sky-300
        dark:focus:ring-offset-slate-950
      "
    >
      <ArrowLeftIcon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
};

export default SellerBackButton;

import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
}) => {
  return (
    <div
      className="
        bg-white
        dark:bg-gray-900
        rounded-2xl
        border
        border-gray-200
        dark:border-gray-800
        p-5
        shadow-sm
        hover:shadow-lg
        transition
      "
    >

      <div className="flex justify-between items-start">

        <div>

          <p
            className="
              text-sm
              text-gray-500
            "
          >
            {title}
          </p>


          <h3
            className="
              text-3xl
              font-bold
              mt-2
            "
          >
            {value}
          </h3>


          {change && (
            <p
              className="
                text-sm
                text-green-500
                mt-2
              "
            >
              {change}
            </p>
          )}

        </div>


        <div
          className="
            bg-amber-100
            text-amber-600
            p-3
            rounded-xl
          "
        >
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatCard;
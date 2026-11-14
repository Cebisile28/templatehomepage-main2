import React from "react";

type ProgressBarProps = {
  step: number;
};

const steps = ["Details", "Pricing", "Media", "Review"];

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const completed = stepNumber < step;
          const active = stepNumber === step;

          return (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition ${
                    completed
                      ? "bg-sky-500 text-white"
                      : active
                        ? "bg-sky-500 text-white ring-4 ring-sky-100 dark:ring-sky-900/50"
                        : "bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-300"
                  }`}
                >
                  {completed ? "✓" : stepNumber}
                </div>

                <span
                  className={`mt-2 text-sm font-semibold ${
                    active || completed
                      ? "text-sky-600 dark:text-sky-400"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {label}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`mx-3 h-1 flex-1 rounded ${
                    stepNumber < step
                      ? "bg-sky-500"
                      : "bg-slate-200 dark:bg-slate-700"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
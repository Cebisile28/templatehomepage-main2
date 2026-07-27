import React from "react";

type ProgressBarProps = {
  step: number;
};

const steps = [
  "Details",
  "Pricing",
  "Media",
  "Review",
];


const ProgressBar: React.FC<ProgressBarProps> = ({
  step,
}) => {

  return (

    <div className="w-full">

      <div className="flex items-center justify-between">


        {steps.map((label, index) => {

          const stepNumber = index + 1;

          const completed =
            stepNumber < step;

          const active =
            stepNumber === step;



          return (

            <React.Fragment key={label}>


              {/* STEP CIRCLE */}

              <div className="flex flex-col items-center">


                <div
                  className={`
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-bold
                    transition

                    ${
                      completed
                        ? 
                        "bg-green-500 text-white"
                        :
                      active
                        ?
                        "bg-amber-400 text-black"
                        :
                        "bg-gray-200 dark:bg-gray-700 text-gray-500"
                    }

                  `}
                >

                  {
                    completed
                      ? "✓"
                      : stepNumber
                  }


                </div>


                <span
                  className={`
                    mt-2
                    text-sm
                    font-semibold

                    ${
                      active
                        ?
                        "text-amber-500"
                        :
                        "text-gray-500"
                    }

                  `}
                >

                  {label}

                </span>


              </div>





              {/* LINE BETWEEN STEPS */}

              {index !== steps.length - 1 && (

                <div
                  className={`
                    flex-1
                    h-1
                    mx-3
                    rounded

                    ${
                      stepNumber < step
                        ?
                        "bg-green-500"
                        :
                        "bg-gray-200 dark:bg-gray-700"
                    }

                  `}
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
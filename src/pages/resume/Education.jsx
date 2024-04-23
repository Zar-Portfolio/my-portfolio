import React from "react";
import UC from "../../assets/uc.png";

const Education = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-2 dark:text-white/80">Education</h1>

      <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
        <div className="w-[15%] flex flex-col items-center justify-center bg-white rounded-md p-2">
          <div className="w-full">
            <img src={UC} alt="uc-logo" className="h-full rounded-md" />
          </div>
        </div>

        <div className="w-[85%]">
          <p className="text-white/80 text-[10px] sm:text-[12px] lg:text-sm 2xl:text-lg font-medium">
            University of Cebu - LM
          </p>
          <p className="text-white/80 text-[8px] sm:text-[12px] lg:text-base font-light">
            Cebu, Philippines
          </p>
          <p className="text-white/80 text-[8px] sm:text-[10px] md:text-sm font-light">
            BS - Information Technology (BSIT)
          </p>
          <p className="text-white/80 text-[8px] sm:text-[10px] md:text-sm font-light">
            March 2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;

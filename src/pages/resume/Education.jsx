import React from "react";
import UC from "../../assets/uc.png";

const Education = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-2 dark:text-white/80">Education</h1>

      <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
        <div className="flex flex-col items-center justify-center bg-white rounded-md p-2">
          <img src={UC} alt="uc-logo" className="w-20 rounded-md" />
          <p className="text-[4px] lg:text-[6px] font-bold tracking-tighter text-[#375197]">
            LAPU-LAPU AND MANDAUE
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-[12px] lg:text-sm font-medium">
            University of Cebu Lapu-Lapu and Mandaue
          </p>
          <p className="text-xs sm:text-[12px] lg:text-sm font-medium">
            Cebu, Philippines
          </p>
          <p className="text-xs sm:text-[10px] md:text-xs">
            Bachelor of Science in Information Technology (BSIT)
          </p>
          <p className="text-xs sm:text-[10px] md:text-xs">March 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Education;

import React, { useState } from "react";
import RAKTHERM from "../../assets/raktherm.png";
import CLOCKWORK from "../../assets/clockwork.jpg";
import ACCENTURE from "../../assets/acn.jpg";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Experience = () => {
  const [readMore, setReadMore] = useState({
    raktherm: false,
    clockwork: false,
    acn: false,
  });

  const { raktherm, clockwork, acn } = readMore;
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold mb-2 dark:text-white/80">Experience</h1>

      <div className="flex flex-col gap-2">
        {/* RAKTHERM */}
        <div className="flex flex-row gap-2 bg-gray-50/20 p-2 rounded-md">
          <div className="w-[15%] flex flex-col items-center">
            <div className="bg-white rounded-md p-2 h-[50px] w-full xl:h-[75px] flex items-center justify-center">
              <img
                src={RAKTHERM}
                alt="raktherm-logo"
                className="lg:h-full rounded-md"
              />
            </div>
          </div>

          <div className="w-[85%]">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-[11px] lg:text-sm xl:text-lg font-medium text-white/80">
                Web Developer
              </p>
            </div>
            <p className="text-[10px] sm:text-[11px] lg:text-xs xl:text-sm text-white/80 font-light">
              RAKtherm Ultimate Piping Solution
            </p>
            <div
              className={`${
                raktherm ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300 text-[10px] xl:text-sm text-white/80 font-light`}
            >
              <p>Ras al Khaimah, UAE</p>
              <p>October 2022 - Present (Full-time)</p>

              <div className="pt-4 text-[10px] xl:text-sm text-white/80 font-light">
                <p className="font-medium">Responsibilities:</p>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Create new web applications for company.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Managing company web applications
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Create repository for company web applications.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Update web application from old technology stack to new
                    stack.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Manage company website database.
                  </div>
                </div>
              </div>
            </div>
            <p
              className="text-[10px] text-blue-300 flex flex-row items-center cursor-pointer xl:text-base"
              onClick={() =>
                setReadMore({
                  ...readMore,
                  raktherm: !raktherm,
                  clockwork: false,
                  acn: false,
                })
              }
            >
              {raktherm ? (
                <>
                  Read less
                  <MdKeyboardArrowUp className="mt-1" />
                </>
              ) : (
                <>
                  Read more
                  <MdKeyboardArrowDown className="mt-1" />
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

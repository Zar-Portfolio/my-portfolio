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
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div className="w-[85%]">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-[11px] lg:text-sm xl:text-lg font-medium text-white/80">
                Web Developer / Marketing Assistant
              </p>
            </div>
            <p className="text-xs sm:text-[11px] lg:text-xs xl:text-base text-white/80 font-light">
              RAKtherm Ultimate Piping Solution
            </p>
            <div
              className={`${
                raktherm ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs sm:text-[10px] lg:text-xs xl:text-base text-white/80 font-light">
                Ras al Khaimah, United Arab Emirates
              </p>
              <p className="text-xs sm:text-[10px] lg:text-xs xl:text-base text-white/80 font-light">
                October 2022 - Present (Full-time)
              </p>

              <div className="pt-4">
                <p className="text-sm font-medium text-white/80 xl:text-base">
                  Responsibilities:
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm xl:text-base text-white/80 font-light">
                  ▪ Boosted website performance and stability through planned
                  maintenance and target troubleshooting.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm xl:text-base text-white/80 font-light">
                  ▪ Managing company web applications
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm xl:text-base text-white/80 font-light">
                  ▪ Create repository for company web applications.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm xl:text-base text-white/80 font-light">
                  ▪ Update web application from old technology stack to new
                  stack.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm xl:text-base text-white/80 font-light">
                  ▪ Manage company website database.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm xl:text-base text-white/80 font-light">
                  ▪ Create web design for product promotion.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm xl:text-base text-white/80 font-light">
                  ▪ Create product newsletter.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm xl:text-base text-white/80 font-light">
                  ▪ Create product catalogue, booklet & brochure.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-300 flex flex-row items-center cursor-pointer xl:text-base"
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

        {/* CLOCKWORK */}
        <div className="flex flex-row gap-2 bg-gray-50/20 p-2 rounded-md">
          <div className="w-[15%] flex flex-col items-center">
            <div className="bg-white rounded-md p-2 h-[50px] w-full xl:h-[75px] flex items-center justify-center">
              <img
                src={CLOCKWORK}
                alt="clockwork-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div className="w-[85%]">
            <p className="text-sm font-medium xl:text-base text-white/80">
              Full Stack Developer
            </p>
            <p className="text-xs xl:text-base text-white/80 font-light">
              Clockwork Logistics Systems
            </p>
            <div
              className={`${
                clockwork ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs xl:text-base text-white/80 font-light">
                California, United States of America
              </p>
              <p className="text-xs xl:text-base text-white/80 font-light">
                July 2022 - October 2022 (Part-time)
              </p>

              <div className="pt-4">
                <p className="text-sm font-medium xl:text-base text-white/80">
                  Responsibilities:
                </p>
                <p className="text-xs xl:text-base text-white/80 font-light">
                  ▪ Create new UI.
                </p>
                <p className="text-xs xl:text-base text-white/80 font-light">
                  ▪ Refactor existing codes.
                </p>
                <p className="text-xs xl:text-base text-white/80 font-light">
                  ▪ Fixing bugs.
                </p>
                <p className="text-xs xl:text-base text-white/80 font-light">
                  ▪ Create / Update Functionalities.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-300 xl:text-base flex flex-row items-center cursor-pointer"
              onClick={() =>
                setReadMore({
                  ...readMore,
                  clockwork: !clockwork,
                  raktherm: false,
                  acn: false,
                })
              }
            >
              {clockwork ? (
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

        {/* ACCENTURE */}
        <div className="flex flex-row gap-2 bg-gray-50/20 p-2 rounded-md">
          <div className="w-[15%] flex flex-col items-center">
            <div className="bg-white rounded-md p-2 h-[50px] w-full xl:h-[75px] flex items-center justify-center">
              <img
                src={ACCENTURE}
                alt="accenture-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div className="w-[85%]">
            <p className="text-sm font-medium xl:text-base text-white/80">
              Software Engineer
            </p>
            <p className="text-xs xl:text-base text-white/80 font-light">
              Accenture
            </p>
            <div
              className={`${
                acn ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs xl:text-base text-white/80 font-light">
                Cebu, Philippines
              </p>
              <p className="text-xs xl:text-base text-white/80 font-light">
                October 2022 - Present (Full-time)
              </p>

              <div className="pt-4">
                <p className="text-sm font-medium xl:text-base text-white/80">
                  Responsibilities:
                </p>
                <p className="text-xs xl:text-base text-white/80 font-light">
                  ▪ Create new UI.
                </p>
                <p className="text-xs xl:text-base text-white/80 font-light">
                  ▪ Refactor existing codes.
                </p>
                <p className="text-xs xl:text-base text-white/80 font-light">
                  ▪ Fixing bugs.
                </p>
                <p className="text-xs xl:text-base text-white/80 font-light">
                  ▪ Create / Update Functionalities.
                </p>
                <p className="text-xs xl:text-base text-white/80 font-light">
                  ▪ Do some Unit Testing.
                </p>
                <p className="text-xs xl:text-base text-white/80 font-light">
                  ▪ Collaborated with team members to create applications'
                  system analyses based on client requirements.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-300 xl:text-base flex flex-row items-center cursor-pointer"
              onClick={() =>
                setReadMore({
                  ...readMore,
                  acn: !acn,
                  raktherm: false,
                  clockwork: false,
                })
              }
            >
              {acn ? (
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

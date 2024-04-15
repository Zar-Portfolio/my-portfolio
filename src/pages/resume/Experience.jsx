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
        <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-md p-2 w-14 h-[50px] flex items-center justify-center">
              <img src={RAKTHERM} alt="uc-logo" className=" rounded-md" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-[11px] lg:text-sm font-medium">
                Web Developer / Marketing Assistant
              </p>
              {/* <p className="text-sm font-medium">
                    HTML, CSS, JAVASCRIPT, REACTJS, NODEJS, EXPRESSJS, MONGODB,
                    PHOTOSHOP, ILLUSTRATOR
                  </p> */}
            </div>
            <p className="text-xs sm:text-[11px] lg:text-xs">
              RAKtherm Ultimate Piping Solution
            </p>
            <div
              className={`${
                raktherm ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs sm:text-[10px] lg:text-xs">
                Ras al Khaimah, United Arab Emirates
              </p>
              <p className="text-xs sm:text-[10px] lg:text-xs">
                October 2022 - Present (Full-time)
              </p>

              <div className="pt-4">
                <p className="text-sm font-medium">Responsibilities:</p>
                <p className="text-xs sm:text-[10px] lg:text-sm">
                  ▪ Boosted website performance and stability through planned
                  maintenance and target troubleshooting.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm">
                  ▪ Managing company web applications
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm">
                  ▪ Create repository for company web applications.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm">
                  ▪ Update web application from old technology stack to new
                  stack.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm">
                  ▪ Manage company website database.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm">
                  ▪ Create web design for product promotion.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm">
                  ▪ Create product newsletter.
                </p>
                <p className="text-xs sm:text-[10px] lg:text-sm">
                  ▪ Create product catalogue, booklet & brochure.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-600 flex flex-row items-center cursor-pointer "
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
        <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-md p-2 w-14 h-[50px] flex items-center justify-center">
              <img
                src={CLOCKWORK}
                alt="uc-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Full Stack Developer</p>
            <p className="text-xs">Clockwork Logistics Systems</p>
            <div
              className={`${
                clockwork ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs">California, United States of America</p>
              <p className="text-xs">July 2022 - October 2022 (Part-time)</p>

              <div className="pt-4">
                <p className="text-sm font-medium">Responsibilities:</p>
                <p className="text-xs">▪ Create new UI.</p>
                <p className="text-xs">▪ Refactor existing codes.</p>
                <p className="text-xs">▪ Fixing bugs.</p>
                <p className="text-xs">▪ Create / Update Functionalities.</p>
              </div>
            </div>
            <p
              className="text-xs text-blue-600 flex flex-row items-center cursor-pointer"
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
        <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-md p-2 w-14 h-[50px] flex items-center justify-center">
              <img
                src={ACCENTURE}
                alt="uc-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Software Engineer</p>
            <p className="text-xs">Accenture</p>
            <div
              className={`${
                acn ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs">Cebu, Philippines</p>
              <p className="text-xs">October 2022 - Present (Full-time)</p>

              <div className="pt-4">
                <p className="text-sm font-medium">Responsibilities:</p>
                <p className="text-xs">▪ Create new UI.</p>
                <p className="text-xs">▪ Refactor existing codes.</p>
                <p className="text-xs">▪ Fixing bugs.</p>
                <p className="text-xs">▪ Create / Update Functionalities.</p>
                <p className="text-xs">▪ Do some Unit Testing.</p>
                <p className="text-xs">
                  ▪ Collaborated with team members to create applications'
                  system analyses based on client requirements.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-600 flex flex-row items-center cursor-pointer"
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

        {/* ACCENTURE */}
        <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-md p-2 w-14 h-[50px] flex items-center justify-center">
              <img
                src={ACCENTURE}
                alt="uc-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Software Engineer</p>
            <p className="text-xs">Accenture</p>
            <div
              className={`${
                acn ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs">Cebu, Philippines</p>
              <p className="text-xs">October 2022 - Present (Full-time)</p>

              <div className="pt-4">
                <p className="text-sm font-medium">Responsibilities:</p>
                <p className="text-xs">▪ Create new UI.</p>
                <p className="text-xs">▪ Refactor existing codes.</p>
                <p className="text-xs">▪ Fixing bugs.</p>
                <p className="text-xs">▪ Create / Update Functionalities.</p>
                <p className="text-xs">▪ Do some Unit Testing.</p>
                <p className="text-xs">
                  ▪ Collaborated with team members to create applications'
                  system analyses based on client requirements.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-600 flex flex-row items-center cursor-pointer"
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

        {/* ACCENTURE */}
        <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-md p-2 w-14 h-[50px] flex items-center justify-center">
              <img
                src={ACCENTURE}
                alt="uc-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Software Engineer</p>
            <p className="text-xs">Accenture</p>
            <div
              className={`${
                acn ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs">Cebu, Philippines</p>
              <p className="text-xs">October 2022 - Present (Full-time)</p>

              <div className="pt-4">
                <p className="text-sm font-medium">Responsibilities:</p>
                <p className="text-xs">▪ Create new UI.</p>
                <p className="text-xs">▪ Refactor existing codes.</p>
                <p className="text-xs">▪ Fixing bugs.</p>
                <p className="text-xs">▪ Create / Update Functionalities.</p>
                <p className="text-xs">▪ Do some Unit Testing.</p>
                <p className="text-xs">
                  ▪ Collaborated with team members to create applications'
                  system analyses based on client requirements.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-600 flex flex-row items-center cursor-pointer"
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

        {/* ACCENTURE */}
        <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-md p-2 w-14 h-[50px] flex items-center justify-center">
              <img
                src={ACCENTURE}
                alt="uc-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Software Engineer</p>
            <p className="text-xs">Accenture</p>
            <div
              className={`${
                acn ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs">Cebu, Philippines</p>
              <p className="text-xs">October 2022 - Present (Full-time)</p>

              <div className="pt-4">
                <p className="text-sm font-medium">Responsibilities:</p>
                <p className="text-xs">▪ Create new UI.</p>
                <p className="text-xs">▪ Refactor existing codes.</p>
                <p className="text-xs">▪ Fixing bugs.</p>
                <p className="text-xs">▪ Create / Update Functionalities.</p>
                <p className="text-xs">▪ Do some Unit Testing.</p>
                <p className="text-xs">
                  ▪ Collaborated with team members to create applications'
                  system analyses based on client requirements.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-600 flex flex-row items-center cursor-pointer"
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

        {/* ACCENTURE */}
        <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-md p-2 w-14 h-[50px] flex items-center justify-center">
              <img
                src={ACCENTURE}
                alt="uc-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Software Engineer</p>
            <p className="text-xs">Accenture</p>
            <div
              className={`${
                acn ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs">Cebu, Philippines</p>
              <p className="text-xs">October 2022 - Present (Full-time)</p>

              <div className="pt-4">
                <p className="text-sm font-medium">Responsibilities:</p>
                <p className="text-xs">▪ Create new UI.</p>
                <p className="text-xs">▪ Refactor existing codes.</p>
                <p className="text-xs">▪ Fixing bugs.</p>
                <p className="text-xs">▪ Create / Update Functionalities.</p>
                <p className="text-xs">▪ Do some Unit Testing.</p>
                <p className="text-xs">
                  ▪ Collaborated with team members to create applications'
                  system analyses based on client requirements.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-600 flex flex-row items-center cursor-pointer"
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

        {/* ACCENTURE */}
        <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-md p-2 w-14 h-[50px] flex items-center justify-center">
              <img
                src={ACCENTURE}
                alt="uc-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Software Engineer</p>
            <p className="text-xs">Accenture</p>
            <div
              className={`${
                acn ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs">Cebu, Philippines</p>
              <p className="text-xs">October 2022 - Present (Full-time)</p>

              <div className="pt-4">
                <p className="text-sm font-medium">Responsibilities:</p>
                <p className="text-xs">▪ Create new UI.</p>
                <p className="text-xs">▪ Refactor existing codes.</p>
                <p className="text-xs">▪ Fixing bugs.</p>
                <p className="text-xs">▪ Create / Update Functionalities.</p>
                <p className="text-xs">▪ Do some Unit Testing.</p>
                <p className="text-xs">
                  ▪ Collaborated with team members to create applications'
                  system analyses based on client requirements.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-600 flex flex-row items-center cursor-pointer"
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

        {/* ACCENTURE */}
        <div className="flex flex-row gap-2 bg-gray-50/30 p-2 rounded-md">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-md p-2 w-14 h-[50px] flex items-center justify-center">
              <img
                src={ACCENTURE}
                alt="uc-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Software Engineer</p>
            <p className="text-xs">Accenture</p>
            <div
              className={`${
                acn ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300`}
            >
              <p className="text-xs">Cebu, Philippines</p>
              <p className="text-xs">October 2022 - Present (Full-time)</p>

              <div className="pt-4">
                <p className="text-sm font-medium">Responsibilities:</p>
                <p className="text-xs">▪ Create new UI.</p>
                <p className="text-xs">▪ Refactor existing codes.</p>
                <p className="text-xs">▪ Fixing bugs.</p>
                <p className="text-xs">▪ Create / Update Functionalities.</p>
                <p className="text-xs">▪ Do some Unit Testing.</p>
                <p className="text-xs">
                  ▪ Collaborated with team members to create applications'
                  system analyses based on client requirements.
                </p>
              </div>
            </div>
            <p
              className="text-xs text-blue-600 flex flex-row items-center cursor-pointer"
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

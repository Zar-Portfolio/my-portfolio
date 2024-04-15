import React, { useEffect, useState } from "react";
import { APPDEV, BACKEND, FRONTEND, UXDESIGNER } from "../assets/icons";
import { TypeAnimation } from "react-type-animation";
import { ABOUT } from "../assets/menu-icon";
import ProgressLine from "./ProgressLine";
import ScrollToContent from "../components/ScrollToContent";
import GetScreenSize from "../components/GetScreenSize";
import AboutMe from "./about/AboutMe";

const About = ({ scrollNow, setScrollNow }) => {
  const [scroll, setScroll] = useState(false);
  const screenSize = GetScreenSize();

  useEffect(() => {
    window.addEventListener("scroll", isScroll);
    return () => {
      window.removeEventListener("scroll", isScroll);
    };
  });

  const isScroll = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 150 ? setScroll(true) : setScroll(false), setScrollNow(false);
  };

  screenSize.width <= 600 ? "" : scrollNow ? ScrollToContent() : "";

  return (
    <div className="p-6">
      <div className="flex justify-between gap-5">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            <TypeAnimation
              sequence={["About."]}
              speed={0.5}
              className="dark:text-white/80 "
            />
          </h1>
          <div className="border-2 w-64 border-[#1e5799] shadow-md rounded-lg mt-3"></div>
        </div>

        <div>
          <img src={ABOUT} className="w-16" alt="" />
        </div>
      </div>

      <div className="animate__animated animate__fadeInUp mt-2">
        <AboutMe />
        <div className="mt-4">
          <h1 className="text-xl font-bold mb-2 dark:text-white/80">
            What I Do!
          </h1>

          <div className="w-full flex flex-col lg:flex-row gap-2 ">
            <div className="flex flex-1 gap-2 bg-orange-100/70 p-4 rounded-md h-full">
              <div className="w-[20%]">
                <img src={FRONTEND} alt="" className="w-[500px]" />
              </div>
              <div className="flex w-[80%] flex-col">
                <p className="font-semibold">Frontend Development</p>
                <p className="text-sm md:text-xs xl:text-sm ">
                  Creating the layout, designs and functionality of websites
                  that users interact with directly.
                  {/* I use languages like HTML, CSS, and JavaScript to build and
                style the user interface, ensuring it is visually appealing,
                responsive, and easy to use. */}
                </p>
              </div>
            </div>

            <div className="flex flex-1 gap-2 bg-gray-50/30 p-4 rounded-md h-full">
              <div className="w-[20%]">
                <img src={BACKEND} alt="" className="w-[500px]" />
              </div>
              <div className="flex w-[80%] flex-col">
                <p className="font-semibold dark:text-white/80">
                  Backend Development
                </p>
                <p className="text-sm md:text-xs xl:text-sm dark:text-white/80">
                  Focus on the server-side logic and database management of web
                  applications.
                  {/* I work with languages like Node.js, or PHP to
                build the logic and functionality that powers the application,
                handling tasks such as user authentication, data processing, and
                server communication. */}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-2 mt-2">
            <div className="flex flex-1 gap-2 bg-gray-50/30 p-4 rounded-md h-full">
              <div className="w-[20%]">
                <img src={UXDESIGNER} alt="" className="w-[500px]" />
              </div>
              <div className="flex w-[80%] flex-col">
                <p className="font-semibold dark:text-white/80">UX Design</p>
                <p className="text-sm md:text-xs xl:text-sm dark:text-white/80">
                  Creating meaningful and enjoyable experience for users
                  interacting with digital products or services.
                  {/* This involves
                understanding user needs, behaviors, and motivations through
                research and analysis. You design intuitive interfaces,
                wireframes, and prototypes to optimize the usability and
                accessibility of products. */}
                </p>
              </div>
            </div>

            <div className="flex flex-1 gap-2 bg-orange-100/70 p-4 rounded-md h-full">
              <div className="w-[20%]">
                <img src={APPDEV} alt="" className="w-[500px]" />
              </div>
              <div className="flex w-[80%] flex-col">
                <p className="font-semibold">App Development</p>
                <p className="text-sm md:text-xs xl:text-sm">
                  I design, build, and deploy software app for various platforms
                  such as mobile, desktops, or web browsers.
                  {/* This process typically involves several stages, including
                conceptualization, design, development, testing (Unit testing),
                and deployment. */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col bg-gray-50/30 rounded-md">
          <div className="flex px-2 py-1 gap-2 border-b border-b-gray-50/40">
            <img src={FRONTEND} alt="" className="w-14" />
            <div className="flex w-full flex-col justify-center pr-2">
              <p className="font-semibold">Frontend Development</p>
              <ProgressLine
                visualParts={[
                  {
                    percentage: scroll ? "85%" : "0%",
                    color: "#2563eb",
                  },
                ]}
              />
            </div>
          </div>

          <div className="flex px-2 py-1 gap-2 border-b border-b-gray-50/40">
            <img src={UXDESIGNER} alt="" className="w-14" />
            <div className="flex w-full flex-col justify-center pr-2">
              <p className="font-semibold">UX Designer</p>
              <ProgressLine
                visualParts={[
                  {
                    percentage: scroll ? "70%" : "0%",
                    color: "#2563eb",
                  },
                ]}
              />
            </div>
          </div>

          <div className="flex px-2 py-1 gap-2 border-b border-b-gray-50/40">
            <img src={BACKEND} alt="" className="w-14" />
            <div className="flex w-full flex-col justify-center pr-2">
              <p className="font-semibold">Backend Development</p>
              <ProgressLine
                visualParts={[
                  {
                    percentage: scroll ? "85%" : "0%",
                    color: "#2563eb",
                  },
                ]}
              />
            </div>
          </div>

          <div className="flex px-2 py-1 gap-2">
            <img src={APPDEV} alt="" className="w-14" />
            <div className="flex w-full flex-col justify-center pr-2">
              <p className="font-semibold">App Development</p>
              <ProgressLine
                visualParts={[
                  {
                    percentage: scroll ? "65%" : "0%",
                    color: "#2563eb",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

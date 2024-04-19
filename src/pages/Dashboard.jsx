import React, { useState } from "react";

// Components
import Profile from "../components/profile/index.jsx";
import Footer from "../components/Footer.jsx";
import Menu from "../components/Menu.jsx";
import FloatingMobileMenu from "../components/FloatingMobileMenu.jsx";

// Pages
import About from "./about/index.jsx";
import Resume from "./resume/index.jsx";
import Works from "./Works.jsx";
import Blogs from "./About.jsx";
import Contact from "./About.jsx";

// Icons
import { IoPersonOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { SlBriefcase } from "react-icons/sl";
import { TbBrandBlogger } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";

import { motion } from "framer-motion";
import { slideInFromRight } from "../../utils/motion.js";

const Dashboard = ({ darkMode }) => {
  const [activePage, setActivePage] = useState("about");
  const [grow, setGrow] = useState(true);
  const [scrollNow, setScrollNow] = useState(false);

  const pageProps = { activePage, setActivePage, scrollNow, setScrollNow };

  const renderPage = (page) => {
    switch (page) {
      case "about":
        return <About {...pageProps} />;
      case "resume":
        return <Resume {...pageProps} />;
      case "works":
        return <Works {...pageProps} />;
      case "blogs":
        return <Blogs {...pageProps} />;
      case "contact":
        return <Contact {...pageProps} />;
    }
  };
  return (
    <div className="relative py-[120px] md:py-[52px] xl:py-32 z-10">
      <div className="flex items-center justify-end mb-4">
        <div className="hidden md:flex xl:hidden flex-row items-center gap-2">
          <div
            className={`py-2 menu ${
              grow ? "md:w-[330px] lg:w-[450px]" : "w-0"
            } overflow-hidden rounded-md bg-white/50 ease-linear z-10`}
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <div
                className={`flex flex-col items-center justify-center py-2 px-4 md:w-14 lg:w-20 ${
                  activePage === "about"
                    ? "bg-[#1e5799] text-white"
                    : "bg-gray-50/20"
                }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
                onClick={() => setActivePage("about")}
              >
                <IoPersonOutline
                  //className="md:text-sm text-2xl"
                  color={`${darkMode === "dark" ? "#cecece" : ""}`}
                  className="md:text-sm lg:text-2xl"
                />
                <p className="font-medium text-sm dark:text-white/80">About</p>
              </div>

              <div
                className={`flex flex-col items-center justify-center py-2 px-4 md:w-14 lg:w-20 ${
                  activePage === "resume"
                    ? "bg-[#1e5799] text-white"
                    : "bg-gray-50/20"
                }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
                onClick={() => setActivePage("resume")}
              >
                <FiFileText
                  className="md:text-sm lg:text-2xl"
                  color={`${darkMode === "dark" ? "#cecece" : ""}`}
                />
                <p className="font-medium text-sm dark:text-white/80">Resume</p>
              </div>

              <div
                className={`flex flex-col items-center justify-center py-2 px-4 md:w-14 lg:w-20 ${
                  activePage === "works"
                    ? "bg-[#1e5799] text-white"
                    : "bg-gray-50/20"
                }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
                onClick={() => setActivePage("works")}
              >
                <SlBriefcase
                  className="md:text-sm lg:text-2xl"
                  color={`${darkMode === "dark" ? "#cecece" : ""}`}
                />
                <p className="font-medium text-sm dark:text-white/80">Works</p>
              </div>

              <div
                className={`flex flex-col items-center justify-center py-2 px-4 md:w-14 lg:w-20 ${
                  activePage === "blogs"
                    ? "bg-[#1e5799] text-white"
                    : "bg-gray-50/20"
                }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
                onClick={() => setActivePage("blogs")}
              >
                <TbBrandBlogger
                  className="md:text-sm lg:text-2xl"
                  color={`${darkMode === "dark" ? "#cecece" : ""}`}
                />
                <p className="font-medium text-sm dark:text-white/80">Blogs</p>
              </div>

              <div
                className={`flex flex-col items-center justify-center py-2 px-4 md:w-14 lg:w-20 ${
                  activePage === "contact"
                    ? "bg-[#1e5799] text-white"
                    : "bg-gray-50/20"
                }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
                onClick={() => setActivePage("contact")}
              >
                <TiContacts
                  className="md:text-sm lg:text-2xl"
                  color={`${darkMode === "dark" ? "#cecece" : ""}`}
                />
                <p className="font-medium text-sm dark:text-white/80">
                  Contact
                </p>
              </div>
            </div>
          </div>
          <button
            className="p-2 bg-white/50 rounded-md h-full z-10"
            onClick={() => setGrow(!grow)}
          >
            <AiOutlineMenu size={30} color="#1e5799" />
          </button>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col md:flex-row justify-between gap-5"
      >
        <motion.div
          variants={slideInFromRight(1.5)}
          className={`${
            darkMode === "light"
              ? "glass-container-light"
              : "glass-container-dark"
          } w-full lg:[80%] h-full rounded-md`}
        >
          <Profile />
        </motion.div>
        <motion.div
          variants={slideInFromRight(1.7)}
          className={`${
            darkMode === "light"
              ? "glass-container-light"
              : "glass-container-dark"
          } w-full h-full rounded-md`}
        >
          {renderPage(activePage)}
          <Footer />
        </motion.div>
        <motion.div
          variants={slideInFromRight(1.9)}
          className={`${
            darkMode === "light"
              ? "glass-container-light"
              : "glass-container-dark"
          } hidden xl:block w-1/6 h-full rounded-md`}
        >
          <Menu {...pageProps} darkMode={darkMode} />
        </motion.div>
      </motion.div>

      <FloatingMobileMenu {...pageProps} darkMode={darkMode} />
    </div>
  );
};

export default Dashboard;

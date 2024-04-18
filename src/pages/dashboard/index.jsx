import React, { useState } from "react";
import { motion } from "framer-motion";

// Pages
import About from "../about/index";
import Resume from "../resume/index";

// Components
import Menu from "../../components/Menu";
import Transition from "../../components/Transition";
import Footer from "../../components/Footer";
import Profile from "../../components/profile/index";
import BlackHole from "../../components/BlackHole";
import FloatingMobileMenu from "../../components/FloatingMobileMenu";

// Assets
import LOGO from "../../assets/logo2.png";
import { slideInFromRight } from "../../../utils/motion";

const index = () => {
  const [activePage, setActivePage] = useState("about");
  const [grow, setGrow] = useState(false);
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
    <>
      <Transition />
      <BlackHole />
      <div className="relative h-full pb-28 pt-[300px] z-[30] px-10 lg:px-20 overflow-x-hidden">
        <div className="absolute top-20 right-0 left-0 mx-auto lg:right-auto lg:left-auto">
          <div className="flex flex-row items-center gap-2">
            <img src={LOGO} alt="" className="w-16 lg:w-24 z-30" />
            <div>
              <p
                className="relative name-logo z-10 uppercase text-2xl lg:text-4xl font-bold 
                  bg-gradient-to-r from-purple-500 via-[#33bfdf] to-blue-500 
                  text-transparent bg-clip-text animate-gradient [text-shadow:_2px_3px_0_rgb(0_0_0_/20%)]"
              >
                Zardron Pesquera
              </p>
              <p className="relative z-10 text-[12px] lg:text-sm font-bold tracking-[.34em] pb-1 lg:p-0 lg:tracking-[.59em] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase">
                I turn coffee into code.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-end mb-4">
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
      </div> */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-30 w-full flex flex-col md:flex-row justify-between gap-6"
        >
          <motion.div
            variants={slideInFromRight(1.5)}
            className="glass-container-light w-full lg:w-[30%] h-full rounded-md"
          >
            <Profile />
          </motion.div>
          <motion.div
            variants={slideInFromRight(1.7)}
            className="glass-container-light w-full h-full rounded-md overflow-hidden"
          >
            {renderPage(activePage)}
            <Footer />
          </motion.div>
          <motion.div
            variants={slideInFromRight(1.9)}
            className="glass-container-light hidden xl:block w-[10%] h-full rounded-md"
          >
            <Menu {...pageProps} />
          </motion.div>
        </motion.div>

        <FloatingMobileMenu {...pageProps} />
      </div>
    </>
  );
};

export default index;

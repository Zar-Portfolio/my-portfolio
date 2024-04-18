import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { SlBriefcase } from "react-icons/sl";
import { TbBrandBlogger } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";

const FloatingMobileMenu = ({ activePage, setActivePage, setScrollNow }) => {
  return (
    <div className="w-full block md:hidden fixed bottom-0 right-1/2 translate-x-1/2 z-50 bg-white/80 border-t-2 border-t-white/90 dark:bg-black/80 dark:border-t-black/90 shadow-md p-2">
      <div className="flex flex-row items-center justify-center gap-2 pb-2 border-b-2 border-b-white/20">
        <div
          className={`flex flex-col items-center justify-center py-2 px-4 w-16 border-2  ${
            activePage === "about"
              ? "bg-[#1e5799] border-[#0076ff] text-white"
              : "bg-gray-50/90 dark:bg-black/90  dark:border-[#0076ff] border-black/30"
          }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:border-[#0076ff] hover:text-white`}
          onClick={() => {
            setActivePage("about");
            setScrollNow(true);
          }}
        >
          <IoPersonOutline
            //className="md:text-sm text-2xl"

            className="md:text-sm lg:text-2xl text-white/80"
          />
          <p className="font-medium text-[10px] text-white/80">About</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-2 px-4 w-16 border-2  ${
            activePage === "resume"
              ? "bg-[#1e5799] border-[#0076ff] text-white"
              : "bg-gray-50/90 dark:bg-black/90  dark:border-[#0076ff] border-black/30"
          }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:border-[#0076ff] hover:text-white`}
          onClick={() => {
            setActivePage("resume");
            setScrollNow(true);
          }}
        >
          <FiFileText className="md:text-sm lg:text-2xl text-white/80" />
          <p className="font-medium text-[10px] text-white/80">Resume</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-2 px-4 w-16 border-2  ${
            activePage === "works"
              ? "bg-[#1e5799] border-[#0076ff] text-white"
              : "bg-gray-50/90 dark:bg-black/90  dark:border-[#0076ff] border-black/30"
          }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:border-[#0076ff] hover:text-white`}
          onClick={() => {
            setActivePage("works");
            setScrollNow(true);
          }}
        >
          <SlBriefcase className="md:text-sm lg:text-2xl text-white/80" />
          <p className="font-medium text-[10px] text-white/80">Works</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-2 px-4 w-16 border-2  ${
            activePage === "blogs"
              ? "bg-[#1e5799] border-[#0076ff] text-white"
              : "bg-gray-50/90 dark:bg-black/90  dark:border-[#0076ff] border-black/30"
          }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:border-[#0076ff] hover:text-white`}
          onClick={() => {
            setActivePage("blogs");
            setScrollNow(true);
          }}
        >
          <TbBrandBlogger className="md:text-sm lg:text-2xl text-white/80" />
          <p className="font-medium text-[10px] text-white/80">Blogs</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-2 px-4 w-16 border-2  ${
            activePage === "contact"
              ? "bg-[#1e5799] border-[#0076ff] text-white"
              : "bg-gray-50/90 dark:bg-black/90  dark:border-[#0076ff] border-black/30"
          }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:border-[#0076ff] hover:text-white`}
          onClick={() => {
            setActivePage("contact");
            setScrollNow(true);
          }}
        >
          <TiContacts className="md:text-sm lg:text-2xl text-white/80" />
          <p className="font-medium text-[10px] text-white/80">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingMobileMenu;

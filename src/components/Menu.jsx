import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { SlBriefcase } from "react-icons/sl";
import { TbBrandBlogger } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";

const Menu = ({ activePage, setActivePage, darkMode }) => {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          className={`flex flex-col items-center justify-center py-2 px-4 w-20 ${
            activePage === "about" ? "bg-[#1e5799] text-white" : "bg-gray-50/20"
          }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
          onClick={() => setActivePage("about")}
        >
          <IoPersonOutline
            size={24}
            color={`${darkMode === "dark" ? "#cecece" : ""}`}
          />
          <p className="font-medium text-sm dark:text-white/80">About</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-2 px-4 w-20 ${
            activePage === "resume"
              ? "bg-[#1e5799] text-white"
              : "bg-gray-50/20"
          }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
          onClick={() => setActivePage("resume")}
        >
          <FiFileText
            size={24}
            color={`${darkMode === "dark" ? "#cecece" : ""}`}
          />
          <p className="font-medium text-sm dark:text-white/80">Resume</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-2 px-4 w-20 ${
            activePage === "works" ? "bg-[#1e5799] text-white" : "bg-gray-50/20"
          }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
          onClick={() => setActivePage("works")}
        >
          <SlBriefcase
            size={24}
            color={`${darkMode === "dark" ? "#cecece" : ""}`}
          />
          <p className="font-medium text-sm dark:text-white/80">Works</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-2 px-4 w-20 ${
            activePage === "blogs" ? "bg-[#1e5799] text-white" : "bg-gray-50/20"
          }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
          onClick={() => setActivePage("blogs")}
        >
          <TbBrandBlogger
            size={24}
            color={`${darkMode === "dark" ? "#cecece" : ""}`}
          />
          <p className="font-medium text-sm dark:text-white/80">Blogs</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-2 px-4 w-20 ${
            activePage === "contact"
              ? "bg-[#1e5799] text-white"
              : "bg-gray-50/20"
          }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
          onClick={() => setActivePage("contact")}
        >
          <TiContacts
            size={24}
            color={`${darkMode === "dark" ? "#cecece" : ""}`}
          />
          <p className="font-medium text-sm dark:text-white/80">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

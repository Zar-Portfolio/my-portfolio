import React from "react";
// import { IoPersonOutline } from "react-icons/io5";
// import { FiFileText } from "react-icons/fi";
// import { SlBriefcase } from "react-icons/sl";
// import { TbBrandBlogger } from "react-icons/tb";
// import { TiContacts } from "react-icons/ti";

import {
  ABOUT,
  BLOGS,
  CONTACT,
  RESUME,
  WORKS,
} from "../assets/menu-icon/index";

const menu = [
  {
    title: "about",
    icon: ABOUT,
  },
  {
    title: "resume",
    icon: RESUME,
  },
  {
    title: "works",
    icon: WORKS,
  },
  {
    title: "blogs",
    icon: BLOGS,
  },
  {
    title: "contact",
    icon: CONTACT,
  },
];

const Menu = ({ activePage, setActivePage }) => {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center justify-center gap-2">
        {menu.map((data) => (
          <div
            key={data.title}
            className={`flex flex-col items-center justify-center py-2 px-4 w-24 ${
              activePage === data.title
                ? "bg-[#1e5799] text-white"
                : "bg-gray-50/20"
            }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
            onClick={() => setActivePage(data.title)}
          >
            <img src={data.icon} alt="about-icon" className="w-12 h-12" />
            <p className="font-medium text-sm text-white/80 capitalize">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

import React from "react";
import { CONTACT } from "../../assets/menu-icon";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between gap-5">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            <TypeAnimation sequence={["Contact.", 1000]} speed={20} />
          </h1>
          <div className="border-2 w-64 border-[#1e5799] shadow-md rounded-lg"></div>
        </div>

        <div>
          <img src={CONTACT} className="w-20" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

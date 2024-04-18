import React from "react";
import {
  FACEBOOK,
  GITHUB,
  INSTAGRAM,
  LINKEDIN,
} from "../../assets/social-icons";

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center mt-3 mb-6 ">
      <div className="flex items-center justify-center gap-2 px-4">
        <img
          src={FACEBOOK}
          className="w-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
        />
        <img
          src={INSTAGRAM}
          className="w-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
        />
        <img
          src={LINKEDIN}
          className="w-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
        />
        <img
          src={GITHUB}
          className="w-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
        />
      </div>
    </div>
  );
};

export default SocialMedia;

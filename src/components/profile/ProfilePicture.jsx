import React from "react";
import PROFILE_PIC from "../../assets/profile_pic.png";

const ProfilePicture = () => {
  return (
    <div className="absolute -top-20 right-1/2 translate-x-1/2">
      <div className=" dark:bg-black/80 w-40 overflow-hidden border-4 border-white/80 dark:border-[#ffffff4d] rounded-md">
        <img
          src={PROFILE_PIC}
          alt=""
          className="hover:scale-110 transition-all ease-in-out duration-300"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;

import React from "react";

const Button = ({ color, type, clickHandler, disabled, name, icon }) => {
  return (
    <button
      className={`flex items-center justify-center p-2 border-2 rounded-md shadow-md transition-all ease-linear duration-200  ${color}`}
      type={type}
      onClick={clickHandler}
      disabled={disabled}
    >
      {icon}
      {name}
    </button>
  );
};

export default Button;

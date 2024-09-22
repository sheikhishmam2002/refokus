import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get started" }) => {
  return (
    <div className="w-40 px-4 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between cursor-pointer hover:bg-violet-500 hover:text-white">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;

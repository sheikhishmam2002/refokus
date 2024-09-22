import React from "react";
import { IoMdArrowForward } from "react-icons/io";

function Card({ width, start, para, first, second }) {
  return (
    <div
      className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between hover:bg-violet-600`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          {first === true ? <h3>Up Next: Culture</h3> : <h3>Get in Touch</h3>}
          <IoMdArrowForward />
        </div>
        {second === true ? (
          <h1 className="text-3xl font-medium mt-5">Who we are</h1>
        ) : (
          <h1 className="text-3xl font-medium mt-5">
            Let's get to it, together.
          </h1>
        )}
      </div>
      <div className="down w-full">
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para === true && (
          <p className="text-sm text-zinc-600 font-medium ">
            Explores what drives our team
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;

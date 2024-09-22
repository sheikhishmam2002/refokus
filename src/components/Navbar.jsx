import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <div className="logo flex items-center gap-2 cursor-pointer">
          <img
            className="h-8 w-auto"
            src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp"
            alt="refokus-logo"
          />
          <h1 className="font-bold text-xl text-[#9B4FFB] ">Refokus</h1>
        </div>
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, idx) =>
            elem.length === 0 ? (
              <span key={idx} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={idx}
                className="text-sm flex items-center gap-1 text-zinc-400 hover:text-white"
                href="#"
              >
                {idx === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 rounded bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;

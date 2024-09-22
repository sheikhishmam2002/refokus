import React from "react";
import { motion } from "framer-motion";

function Marquee({ imagesURL, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesURL.map((url, idx) => {
          return (
            <img
              key={idx}
              src={url}
              className="object-contain h-12 w-32 py-2 px-2 flex-shrink-0 bg-white rounded-lg"
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesURL.map((url, idx) => {
          return (
            <img
              key={idx}
              src={url}
              className="object-contain h-12 w-32 py-2 px-2 flex-shrink-0 bg-white rounded-lg"
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default Marquee;

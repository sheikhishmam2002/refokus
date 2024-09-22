import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://cdn.dribbble.com/userupload/11900823/file/still-f360f881ecf4cbb5e13285eb031dd9d6.png?resize=400x300&vertical=center",
      top: "29%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.dribbble.com/userupload/13541292/file/still-24dc32bf0d6fa3550ef87bbd966c94b7.png?resize=400x0",
      top: "40%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets.awwwards.com/awards/submissions/2023/01/63c91d237468e623901138.png",
      top: "65%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets.awwwards.com/awards/avatar/1146610/648986bd883c4089355682.png",
      top: "85%",
      left: "45%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 3:
        imagesShow([0, 1]);
        break;
      case 5:
        imagesShow([0, 1, 2]);
        break;
      case 7:
        imagesShow([0, 1, 2, 3]);
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none ">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;

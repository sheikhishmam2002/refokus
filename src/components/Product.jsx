import React from "react";
import Button from "./Button";

const Product = ({ val, mover, count }) => {
  return (
    <div className="w-full py-20 h-[23rem] text-white">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl font-semibold ">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10 font-medium">{val.description}</p>
          <Button title={"View Case Study"} />
        </div>
      </div>
    </div>
  );
};

export default Product;

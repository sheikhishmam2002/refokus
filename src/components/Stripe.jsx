import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] px-10 py-0 border-t-[2px] border-b-[2px] border-r-[2px] border-zinc-700 flex justify-between items-center">
      <img src={val.url} className="w-28 h-16 object-contain" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;

import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  var data = [
    {
      url: "https://cdn.prod.website-files.com/642fc1d59462672effc034f8/64929696e0346cedcff8d719_Refundid.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/642fc1d59462672effc034f8/6492973ce40138d6dc4441e3_GDA.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/642fc1d59462672effc034f8/6492973ce40138d6dc444222_awwwards.svg",
      number: 11,
    },
    {
      url: "https://cdn.prod.website-files.com/642fc1d59462672effc034f8/64929696e0346cedcff8d719_Refundid.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/642fc1d59462672effc034f8/6492973ce40138d6dc4441e3_GDA.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/642fc1d59462672effc034f8/6492973ce40138d6dc444222_awwwards.svg",
      number: 11,
    },
  ];
  return (
    <div className="flex items-center mt-32">
      {data.map((elem, index) => {
        return <Stripe key={index} val={elem} />;
      })}
    </div>
  );
};

export default Stripes;

import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto bg-sky100 py-20 flex gap-2">
        <Card
          width={"basis-1/3"}
          start={false}
          para={true}
          first={true}
          second={true}
        />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          first={false}
          second={false}
        />
      </div>
    </div>
  );
}

export default Cards;

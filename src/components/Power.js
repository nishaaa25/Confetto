import React from "react";
import PowerCard1 from "./PowerCard1";
import PowerCard2 from "./PowerCard2";

const Power = () => {
  return (
    <div className="power">
      <div className="power-content container text-center p-7">
        <div className="power-text pt-28 pb-3">
            <h1 className="text-4xl font-[500] mb-3">Discover the Power of Confetti</h1>
            <p className="info-text w-[30%] mx-auto">Explore the depth of our app and unlock its full potential. Our app offers a range of features designed to help you manage your finances with ease.</p>
        </div>
        <div className="py-32 flex-center flex-col gap-28 ">
            <PowerCard1/>
            <PowerCard2/>
        </div>
      </div>
    </div>
  );
};

export default Power;

import React from "react";
import asset8 from "../assets/asset 8.svg";
import asset9 from "../assets/asset 9.svg";
import asset10 from "../assets/asset 10.svg";
import asset11 from "../assets/asset 11.svg";
import asset12 from "../assets/asset 12.svg";
import asset13 from "../assets/asset 13.svg";
import asset14 from "../assets/asset 14.svg";
import asset15 from "../assets/asset 15.svg";
import asset16 from "../assets/asset 16.svg";

const Reviews = () => {
  return (
    <div className="reviews mt-36 mb-10 text-center relative">
      <div>
        <p className="text-2xl font-[500] gradient w-[20%] mx-auto mb-3">+600 reviews</p>
        <p className="info-text w-[14%] mx-auto">Companies building custom tools with Confetti.</p>
      </div>
      <div className="flex-between gap-28 w-full mt-10 overflow-hidden">
        <img src={asset8} alt="asset8" />
        <img src={asset9} alt="asset9" />
        <img src={asset10} alt="asset10" />
        <img src={asset11} alt="asset11" />
        <img src={asset12} alt="asset12" />
        <img src={asset13} alt="asset13" />
        <img src={asset14} alt="asset14" />
        <img src={asset15} alt="asset15" />
        <img src={asset16} alt="asset16" />
      </div>
    </div>
  );
};

export default Reviews;

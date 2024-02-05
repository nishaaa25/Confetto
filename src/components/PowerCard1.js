import React from "react";
import asset7 from "../assets/asset7.jpg";
import asset20 from "../assets/asset 20.svg";
import asset21 from "../assets/asset 21.webp";

const PowerCard1 = () => {
  return (
    <div className="powercard w-full h-[679px] relative one flex-between gap-7">
      <div className="flex flex-col justify-start text-start items-start">
        <h2 className="text-3xl mb-5 w-[66%] font-[500]">
          A field app that saves €91284 a year
        </h2>
        <p className="para-text w-[80%] mb-8">
          Looking for a way to reduce costs associated with fieldwork? Look no
          further than our field app. Our app is designed to streamline
          fieldwork processes and eliminate the need for manual paperwork.
        </p>
        <p href="" className="text-base mb-12">
          Meet our customers
          <img
            src={asset20}
            alt="arrow"
            className="inline-block ml-1"
            width={12}
          />
        </p>
        <div className="grid grid-cols-2 w-full relative gap-7">
          <div className="card  p-5">
            <p className="text-2xl text-voilet font-[500]">€91.28K</p>
            <p className="text-sm text-grey-400 text-opacity-80 font-[300]">
              Saved in printing costs and productivity hours in the past.
            </p>
          </div>
          <div className="card  p-5">
            <p className="text-2xl text-voilet font-[500]">500+</p>
            <p className="text-grey-400 text-opacity-80 font-[300] text-sm">
              Team members using the Confetti app every month.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-full relative rounded-3xl overflow-hidden">
        <img
          src={asset7}
          alt="backgroundImg"
          className="w-full h-full object-cover z-0"
        />
        <img
          src={asset21}
          alt="transactionImg"
          className="w-[100%] h-[100%] absolute z-30  top-0 left-0  p-16 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default PowerCard1;

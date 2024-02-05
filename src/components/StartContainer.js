import React from "react";
import asset25 from "../assets/asset 25.svg";
import asset35 from "../assets/asset 35.jpeg";
import asset33 from "../assets/asset 33.jpeg";
import asset34 from "../assets/asset 34.jpeg";
import asset36 from "../assets/asset 36.jpeg";
import asset37 from "../assets/asset 37.png";
import asset38 from "../assets/asset 38.jpeg";
import asset39 from "../assets/asset 39.png";
import asset40 from "../assets/asset 40.png";
import asset41 from "../assets/asset 41.png";
import asset42 from "../assets/asset 42.png";
import asset43 from "../assets/asset 43.png";
import asset44 from "../assets/asset 44.png";
import asset45 from "../assets/asset 45.png";
import asset46 from "../assets/asset 46.png";
import asset47 from "../assets/asset 47.png";
import asset48 from "../assets/asset 48.png";
import asset49 from "../assets/asset 49.png";
import asset50 from "../assets/asset 50.png";
import asset51 from "../assets/asset 51.png";
import asset52 from "../assets/asset 52.png";
import asset53 from "../assets/asset 53.jpeg";
import Marquee from "react-fast-marquee";

const StartContainer = () => {
  return (
    <div id="start" className="start">
      <div className="start-content container text-center p-7">
        <div className="start-text pt-10 pb-3">
          <h1 className="text-4xl font-[500] mb-3 w-[60%] mx-auto">
            Start Your Financial Journey Today
          </h1>
          <p className="info-text w-[29%] mx-auto">
            Are you ready to take control of your finances and start your
            financial journey? Look no further than our platform.
          </p>
        </div>
        <div className="my-12">
          <div className="flex-between gap-[30px] relative w-full h-[684px] ">
            <div className="w-[418px] h-full relative">
              <div className="grid grid-cols-2 gap-[30px] w-full h-[194px] relative ">
                <div className="rounded-[20px] overflow-hidden hover">
                  <img
                    src={asset33}
                    alt="gradientW"
                    className="w-full object-cover "
                  />
                </div>
                <div className="bg-black-800 object-cover rounded-[20px] flex-center hover">
                  <img src={asset25} alt="calendarIcon" className="w-16" />
                </div>
              </div>
              <div className="pt-16 overflow-hidden w-full h-[460px] mt-[30px] bg-black-800 rounded-[20px] relative  hover">
                <Marquee speed={30}>
                  <img
                    src={asset34}
                    alt="transactionImg"
                    className="w-52 mx-4 rounded-[30px] inline-block"
                  />
                  <img
                    src={asset35}
                    alt="transactionImg"
                    className="w-52 mx-4 rounded-[30px] inline-block"
                  />
                  <img
                    src={asset36}
                    alt="transactionImg"
                    className="w-52 mx-4 rounded-[30px] inline-block"
                  />
                </Marquee>

                <p className="absolute bottom-10 left-10 font-[500] text-start">
                  Pixel perfect components
                </p>
              </div>
            </div>
            <div className="w-[836px] h-full bg-black-800 rounded-[20px] overflow-hidden relative hover">
              <div className="w-[460px] mx-auto relative my-10">
                <img
                  src={asset37}
                  alt="mobileElementImg"
                  className="w-full mx-auto relative z-20"
                />
                <img
                  src={asset38}
                  alt="mobileContentImg"
                  className="w-[49%] object-cover rounded-3xl absolute top-4 left-16 z-0"
                />
              </div>
              <p className="absolute bottom-10 left-10 font-[500] text-start">
                Unified cross platform experience
              </p>
            </div>
          </div>
          <div className="w-full h-[353px] grid grid-cols-2 gap-[30px] mt-[30px]">
            <div className="bg-black-800 relative rounded-[20px] py-10 hover">
              <div className="w-full mb-[30px]">
                <Marquee speed={15}>
                  <img src={asset39} alt="logo" className="w-16 mx-4" />
                  <img src={asset40} alt="logo" className="w-16 mx-4" />
                  <img src={asset41} alt="logo" className="w-16 mx-4" />
                  <img src={asset42} alt="logo" className="w-16 mx-4" />
                  <img src={asset43} alt="logo" className="w-16 mx-4" />
                  <img src={asset44} alt="logo" className="w-16 mx-4" />
                  <img src={asset45} alt="logo" className="w-16 mx-4" />
                </Marquee>
              </div>
              <div className="w-full">
                <Marquee direction="right" speed={15}>
                  <img src={asset46} alt="logo" className="w-16 mx-4" />
                  <img src={asset47} alt="logo" className="w-16 mx-4" />
                  <img src={asset48} alt="logo" className="w-16 mx-4" />
                  <img src={asset49} alt="logo" className="w-16 mx-4" />
                  <img src={asset50} alt="logo" className="w-16 mx-4" />
                  <img src={asset51} alt="logo" className="w-16 mx-4" />
                  <img src={asset52} alt="logo" className="w-16 mx-4" />
                </Marquee>
              </div>
              <p className="absolute bottom-20 left-10 font-[500] text-start">
                Great design right out of the box
              </p>
            </div>
            <div className="w-full relative rounded-[20px] overflow-hidden hover">
              <img src={asset53} alt="desktop" />
              <p className="absolute bottom-10 left-10 font-[500] text-start">
                Great design right out of the box
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartContainer;

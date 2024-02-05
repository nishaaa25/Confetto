import React, { useState } from "react";
import asset23 from "../assets/asset 23.svg";
import asset26 from "../assets/asset 26.svg";
import asset27 from "../assets/asset 27.svg";
import asset28 from "../assets/asset 28.svg";
import asset29 from "../assets/asset 29.webp";
import asset30 from "../assets/asset 30.webp";
import asset32 from "../assets/asset 32.webp";
import asset31 from "../assets/asset 31.webp";
import { motion } from "framer-motion";

const Experience = () => {
  const [imgUrl, setImgUrl] = useState(asset29);
  const [active, setActive] = useState(0);

  return (
    <div id="experience" className="experience">
      <div className="experience-content container text-center p-7">
        <div className="experience-text pt-28 pb-3">
          <h1 className="text-4xl font-[500] mb-3">Seamless Experience</h1>
          <p className="info-text w-[30%] mx-auto">
            Our top features are designed to provide you with a seamless
            experience and make your financial management as easy as possible.
          </p>
        </div>
        <div className="py-16">
          <div className="w-full flex-center gap-8 px-28">
            <div
              className={`card ${
                active === 0 ? "active-card" : ""
              }  px-6 py-[21px] flex justify-start items-center gap-4 text-start opacity-50 custom-transition`}
              onClick={() => {
                setImgUrl(asset29);
                setActive(0);
              }}
            >
              <img src={asset26} alt="asset26" width={24} className="svg" />
              <p className="text-sm text-grey-400">
                Connect and sync
                <br />
                <span className="text-grey">your business data</span>
              </p>
            </div>
            <div
              className={`card ${
                active === 1 ? "active-card" : ""
              }  px-6 py-[21px] flex justify-start items-center gap-4 text-start opacity-50 custom-transition`}
              onClick={() => {
                setImgUrl(asset30);
                setActive(1);
              }}
            >
              <img src={asset23} alt="asset23" width={24} className="svg" />
              <p className="text-sm text-grey-400">
                Customize and tune <br />
                <span className="text-grey">your app's interface</span>
              </p>
            </div>
            <div
              className={`card ${
                active === 2 ? "active-card" : ""
              }  px-6 py-[21px] flex justify-start items-center gap-4 text-start opacity-50 custom-transition`}
              onClick={() => {
                setImgUrl(asset31);
                setActive(2);
              }}
            >
              <img src={asset27} alt="asset27" width={24} className="svg" />
              <p className="text-sm text-grey-400">
                Power and automate <br />
                <span className="text-grey">your workflows</span>
              </p>
            </div>
            <div
              className={`card ${
                active === 3 ? "active-card" : ""
              }  px-6 py-[21px] flex justify-start items-center gap-4 text-start opacity-50 custom-transition`}
              onClick={() => {
                setImgUrl(asset32);
                setActive(3);
              }}
            >
              <img src={asset28} alt="asset28" width={24} className="svg" />
              <p className="text-sm text-grey-500">
                Share and recieve <br />
                <span className="text-grey">your money</span>
              </p>
            </div>
          </div>
          <div className="relative w-full py-9 ">
            <img
              src={imgUrl}
              alt="img"
              className="w-full h-full custom-transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

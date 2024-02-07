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
import { childrenVariants } from "../Animation";

const Experience = () => {
  const [imgUrl, setImgUrl] = useState(asset29);
  const [active, setActive] = useState(0);

  return (
    <div id="experience" className="experience w-full">
      <div className="experience-content w-full xl:w-[1340px] xl:mx-auto  text-center p-7">
        <div className="experience-text pt-8 xl:pt-28 pb-3">
          <motion.h1  variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} className="text-xl sm:text-2xl lg:text-4xl font-[500] mb-3">Seamless Experience</motion.h1>
          <motion.p  variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} className="info-text w-[80%] sm:w-[40%] lg:w-[360px] mx-auto">
            Our top features are designed to provide you with a seamless
            experience and make your financial management as easy as possible.
          </motion.p>
        </div>
        <motion.div  variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} className="py-16">
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 px-0 xl:px-28">
            <div
              className={`card ${
                active === 0 ? "active-card" : ""
              }  px-4 lg:px-6 py-[21px] flex justify-start items-center gap-4 text-start opacity-50 custom-transition`}
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
              }  px-4 lg:px-6 py-[21px] flex justify-start items-center gap-4 text-start opacity-50 custom-transition`}
              onClick={() => {
                setImgUrl(asset30);
                setActive(1);
              }}
            >
              <img src={asset23} alt="asset23" width={24} className="svg" />
              <p className="text-sm text-grey-400">
                Custoze and tune <br />
                <span className="text-grey">your app's interface</span>
              </p>
            </div>
            <div
              className={`card ${
                active === 2 ? "active-card" : ""
              }  px-4 lg:px-6 py-[21px] flex justify-start items-center gap-4 text-start opacity-50 custom-transition`}
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
              }  px-4 lg:px-6 py-[21px] flex justify-start items-center gap-4 text-start opacity-50 custom-transition`}
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
              className="w-full h-full custom-transition rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

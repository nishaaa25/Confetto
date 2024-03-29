import React from "react";
import asset7 from "../assets/asset7.jpg";
import asset20 from "../assets/asset 20.svg";
import asset21 from "../assets/asset 21.webp";
import { motion } from "framer-motion";
import {
  cardVariants,
  childrenVariants,
  containerVariants,
  imgVariants,
  imgVariants2,
} from "../Animation";

const PowerCard1 = () => {
  return (
    <div className="powercard w-full h-full xl:h-[679px] relative one flex-between flex-wrap lg:flex-nowrap gap-7">
      <div className="flex h-full flex-col justify-center text-start items-start">
        <motion.h2
          variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[28px] md:text-[38px] md:leading-[45.6px] lg:text-3xl mb-5 w-full sm:w-[46%] lg:w-[460px] font-[500]"
        >
          A field app that saves €91284 a year
        </motion.h2>
        <motion.p
          variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="para-text w-full sm:w-[60%] lg:w-[80%] mb-8"
        >
          Looking for a way to reduce costs associated with fieldwork? Look no
          further than our field app. Our app is designed to streamline
          fieldwork processes and eliminate the need for manual paperwork.
        </motion.p>
        <motion.p
          variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base mb-12"
        >
          Meet our customers
          <img
            src={asset20}
            alt="arrow"
            className="inline-block ml-1"
            width={12}
          />
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 w-full relative gap-7"
        >
          <motion.div variants={cardVariants} className="card  p-5">
            <p className="text-2xl text-voilet font-[500]">€91.28K</p>
            <p className="text-sm text-grey-400 text-opacity-80 font-[300]">
              Saved in printing costs and productivity hours in the past.
            </p>
          </motion.div>
          <motion.div variants={cardVariants} className="card  p-5">
            <p className="text-2xl text-voilet font-[500]">500+</p>
            <p className="text-grey-400 text-opacity-80 font-[300] text-sm">
              Team members using the Confetti app every month.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full xl:w-[90%] lg:h-full  relative p-16 rounded-3xl overflow-hidden">
        <motion.img
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={asset7}
          alt="backgroundImg"
          className="w-full h-full object-cover absolute top-0 left-0 z-0  blur-2xl"
        />
        <motion.img
          variants={imgVariants2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={asset21}
          alt="transactionImg"
          className="w-[100%] h-auto lg:h-full relative z-30 rounded-3xl "
        />
      </div>
    </div>
  );
};

export default PowerCard1;

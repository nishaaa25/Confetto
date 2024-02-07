import asset7 from "../assets/asset7.jpg";
import asset20 from "../assets/asset 20.svg";
import asset22 from "../assets/asset 22.webp";
import asset23 from "../assets/asset 23.svg";
import asset24 from "../assets/asset 24.svg";
import asset25 from "../assets/asset 25.svg";
import React from "react";
import { motion } from "framer-motion";
import {
  cardVariants,
  childrenVariants,
  containerVariants,
  imgVariants,
  imgVariants2,
} from "../Animation";

const PowerCard2 = () => {
  return (
    <div className="powercard w-full h-full lg:h-[679px] relative one flex-between flex-row-reverse flex-wrap lg:flex-nowrap gap-7">
      <div className="flex flex-col justify-start text-start items-start">
        <motion.h2
          variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:text-3xl text-[28px] mb-5 w-full lg:w-[66%] font-[500]"
        >
          Compliance. Simplified.
        </motion.h2>
        <motion.p
          variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="para-text w-full lg:w-[74%] mb-8"
        >
          With our app, you can digitize fieldwork processes, track your team's
          progress, and stay on top of tasks with ease. Say goodbye to
          inefficient operations and hello to significant cost savings with our
          field app.
        </motion.p>
        <motion.a
          variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="#start"
          className="text-base mb-12"
        >
          Get started with Confetti
          <img
            src={asset20}
            alt="arrow"
            className="inline-block ml-2"
            width={12}
          />
        </motion.a>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 w-full relative gap-7"
        >
          <motion.div
            variants={cardVariants}
            className="flex justify-between items-start gap-4"
          >
            <img src={asset23} alt="asset23" className="w-12 object-cover" />
            <p className="text-sm font-[500]">
              Automated Payroll Tax Registrations.
              <span className="grey text-grey-400 text-opacity-80">
                Set up with holdings and tax accounts in 5 mins.
              </span>
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex justify-between items-start gap-4"
          >
            <img src={asset24} alt="asset24" className="w-12 object-cover" />
            <p className="text-sm font-[500]">
              Ongoing Monitoring.
              <span className="grey text-grey-400 text-opacity-80 ">
                Let Warp help you stay on top of all payroll related compliance
                year-round.
              </span>
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="w-full flex justify-between items-start gap-4"
          >
            <img src={asset25} alt="asset25" className="w-12 object-cover" />
            <p className="text-sm font-[500]">
              Beautiful Dashboards.
              <span className="grey text-grey-400 text-opacity-80">
                Manage and organize your registrations in one glance instead of
                logging.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-[105%] h-[492px] lg:h-full relative rounded-3xl overflow-hidden">
        <motion.img
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={asset7}
          alt="backgroundImg"
          className="w-full h-full object-cover z-0 blur-3xl"
        />
        <motion.img
          variants={imgVariants2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={asset22}
          alt="transactionImg"
          className="w-[100%] h-[100%] absolute z-30  top-0 left-0  p-16 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default PowerCard2;

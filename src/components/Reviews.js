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
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { childrenVariants} from "../Animation";

const Reviews = () => {
  return (
    <motion.div 
      className="reviews mt-16 mb-10 text-center relative"
    >
      <div>
        <motion.p
          variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-[500] gradient w-[20%] mx-auto mb-3"
        >
          +600 reviews
        </motion.p>
        <motion.p
          variants={childrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="info-text w-[14%] mx-auto"
        >
          Companies building custom tools with Confetti.
        </motion.p>
      </div>
      <motion.div
        className="w-full mt-10"
        variants={childrenVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Marquee>
          <img src={asset8} alt="asset8" className="mx-10" />
          <img src={asset9} alt="asset9" className="mx-10" />
          <img src={asset10} alt="asset10" className="mx-10" />
          <img src={asset11} alt="asset11" className="mx-10" />
          <img src={asset12} alt="asset12" className="mx-10" />
          <img src={asset13} alt="asset13" className="mx-10" />
          <img src={asset14} alt="asset14" className="mx-10" />
          <img src={asset15} alt="asset15" className="mx-10" />
          <img src={asset16} alt="asset16" className="mx-10" />
        </Marquee>
      </motion.div>
    </motion.div>
  );
};

export default Reviews;

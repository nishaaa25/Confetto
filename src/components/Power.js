import React from "react";
import PowerCard1 from "./PowerCard1";
import PowerCard2 from "./PowerCard2";
import { motion } from "framer-motion";
import { childrenVariants } from "../Animation";


const Power = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} id="power" className="power w-full">
      <div className="power-content w-full xl:w-[1340px] xl:mx-auto  relative text-center p-7">
        <div className="power-text pt-28 pb-3">
            <motion.h1 variants={childrenVariants} className="text-xl sm:text-2xl lg:text-4xl font-[500] mb-3">Discover the Power of Confetti</motion.h1>
            <motion.p variants={childrenVariants} className="info-text w-[90%] sm:w-[60%] lg:w-[400px] mx-auto">Explore the depth of our app and unlock its full potential. Our app offers a range of features designed to help you manage your finances with ease.</motion.p>
        </div>
        <div className="py-20 lg:py-32 flex-center flex-col gap-28 ">
            <PowerCard1/>
            <PowerCard2/>
        </div>
      </div>
    </motion.div>
  );
};

export default Power;

import React from "react";
import { features } from "../Constant";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";
import {
  cardVariants,
  childrenVariants,
  containerVariants,
} from "../Animation";
const Features = () => {
  return (
    <div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="feature"
      className="features"
    >
      <div className="feature-content container text-center px-7 py-[48px] lg:py-[88px]">
        <div className="feature-text w-full pb-2  mb-[60px] ">
          <motion.h1
            variants={childrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl lg:text-4xl font-[500] mb-3 w-full lg:w-[50%] mx-auto"
          >
            Powerful Features just for you
          </motion.h1>
          <motion.p
            variants={childrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="info-text w-[90%] lg:w-[30%] mx-auto "
          >
            Our platform offers a range of powerful featured designed to elevate
            your banking experience.
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-0"
        >
          {features.map((feature) => {
            return (
              <motion.div key={feature.id} variants={cardVariants}>
                <FeatureCard features={feature} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;

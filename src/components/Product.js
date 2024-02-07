import React, { useRef } from "react";
import asset20 from "../assets/asset 20.svg";
import asset1 from "../assets/asset 1.png";
import asset2 from "../assets/asset 2.jpeg";
import asset3 from "../assets/asset 3.jpeg";
import asset4 from "../assets/asset 4.svg";
import asset5 from "../assets/asset 5.svg";
import asset6 from "../assets/asset 6.svg";
import asset7 from "../assets/asset7.jpg";
import Reviews from "./Reviews";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  productImgVariants,
  productImgVariants2,
  productVariants,
  textVariants,
  variants,
} from "../Animation";

const Product = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.5, 1.1]);
  const translate = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["0px", "-50px"]
  );
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["100px", "-180px"]
  );
  const translateY = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["-20px", "100px"]
  );
  const translateX2 = useTransform(scrollYProgress, [0, 0.4], ["0px", "130px"]);
  const translateY2 = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["-100px", "640px"]
  );
  return (
    <div id="product" className="product w-full px-[20px] py-[90px] lg:p-[70px]">
      <motion.div
        variants={productVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="productContent w-full relative"
      >
        <motion.img
          variants={productImgVariants}
          src={asset7}
          alt="backgroundImg"
          className=" mx-auto w-full h-[588px] sm:h-[604px] lg:h-[942px]  object-cover absolute z-0 rounded-b-[60px]"
        />
        <motion.div
          variants={textVariants}
          className="productText  mx-auto w-full sm:w-[460px] lg:w-[740px] flex-center flex-col top-0 text-center relative z-40"
        >
          <motion.div
            variants={variants}
            className="tagline text-xs py-[6px] px-4 bg-purple-dark flex-center gap-2 rounded-full mb-7 "
          >
            <p>Simplify Finicial Management -- Learn img</p>
            <img src={asset20} alt="arrow" width={10} />
          </motion.div>
          <motion.h1
            variants={variants}
            className="text-xl sm:text-2xl lg:text-4xl font-[500] mb-7 w-full"
          >
            Streamline Your Banking Experience
          </motion.h1>
          <motion.p variants={variants} className="info-text mb-10 w-full lg:w-[64%]">
            Experience hassle-free banking card management and transactions with
            our platform with our user-friendly interface.
          </motion.p>
          <motion.div variants={variants}>
            <a
              href="/"
              className="btn hover:bg-purple hover:text-white bg-white text-black "
            >
              Get started
            </a>
            <a href="/" className="btn hover:text-grey-600 ">
              Watch Video
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={productImgVariants2}
          className="productImg h-[570px] lg:h-[1019px] relative z-40 w-full mx-auto mt-16 "
        >
          <motion.div
            className="w-[280px] lg:w-[500px] z-40 mx-auto h-full relative "
            style={{ translateY: translate }}
          >
            <img
              src={asset1}
              alt="asset1"
              className="w-full h-full relative z-30"
            />
            <img
              src={asset2}
              alt="asset2"
              className="w-full h-full p-3 lg:p-5 absolute top-0 rounded-[50px] z-20"
            />
            <motion.img
              src={asset3}
              alt="asset3"
              className="absolute top-28 rounded-3xl z-40"
              style={{ scale }}
            />
          </motion.div>
          <motion.img
            src={asset4}
            alt="asset4"
            className="hidden lg:block absolute top-10 rounded-[36px] left-[236px] z-10"
            style={{ translateX: translateX, translateY: translateY }}
          />
          <motion.img
            src={asset5}
            alt="asset5"
            className="hidden lg:block absolute w-44 top-[326px] left-[326px] rounded-[20px] z-10"
            style={{ translateX: translateX, translateY: translateY, scale }}
          />
          <motion.img
            src={asset6}
            alt="asset6"
            className="hidden lg:block absolute -top-44 right-[180px] rounded-[30px] z-10"
            style={{ translateX: translateX2, translateY: translateY2 }}
          />
          <motion.img
            src={asset6}
            alt="asset6"
            className="hidden lg:block absolute -top-4 right-[48px] rounded-[30px] z-10"
            style={{ translateY: translateY2 }}
          />
        </motion.div>
      </motion.div>
      <Reviews />
    </div>
  );
};

export default Product;

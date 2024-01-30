import React from "react";
import asset20 from "../assets/asset 20.svg";
import asset1 from "../assets/asset 1.png";
import asset2 from "../assets/asset 2.jpeg";
import asset3 from "../assets/asset 3.jpeg";
import asset4 from "../assets/asset 4.svg";
import asset5 from "../assets/asset 5.svg";
import asset6 from "../assets/asset 6.svg";
import asset7 from "../assets/asset7.jpg";
import Reviews from "./Reviews";

const Product = () => {
  return (
    <div className="product w-full relative p-[70px]">
      <div className="productContent w-full relative">
        <img
          src={asset7}
          alt="backgroundImg"
          className=" mx-auto w-full h-[942px]  object-cover absolute z-0 rounded-b-[60px]"
        />
        <div className="productText flex-center flex-col top-0 text-center relative z-40">
          <div className="tagline text-xs py-[6px] px-4 bg-purple-dark flex-center gap-2 rounded-full mb-7 ">
            <p>Simplify Finicial Management -- Learn img</p>
            <img src={asset20} alt="arrow" width={10} />
          </div>
          <h1 className="text-4xl font-[500] mb-7 w-[40%] ">
            Streamline Your Banking Experience
          </h1>
          <p className="info-text mb-10 w-[29%]">
            Experience hassle-free banking card management and transactions with
            our platform with our user-friendly interface.
          </p>
          <div>
            <a
              href="/"
              className="btn hover:bg-purple hover:text-white bg-white text-black "
            >
              Get started
            </a>
            <a href="/" className="btn hover:text-grey-600 ">
              Watch Video
            </a>
          </div>
        </div>
        <div className="productImg h-[1019px] relative z-40 w-full mx-auto mt-16 ">
          <div className="w-[500px] mx-auto h-full relative overflow-hidden ">
            <img
              src={asset1}
              alt="asset1"
              className="w-full h-full relative z-30"
            />
            <img
              src={asset2}
              alt="asset2"
              className="w-full h-full p-5 absolute top-0 rounded-[50px] z-20"
            />
            <img
              src={asset3}
              alt="asset3"
              className="absolute top-28 scale-[0.8] rounded-3xl z-40"
            />
          </div>
          <img
            src={asset4}
            alt="asset4"
            className="absolute top-10 rounded-[36px] left-[198px] z-10"
          />
          <img
            src={asset5}
            alt="asset5"
            className="absolute w-36 top-[326px] left-[286px] rounded-[20px] z-10"
          />
          <img
            src={asset6}
            alt="asset6"
            className="absolute -top-12 right-[100px] rounded-[30px] z-10"
          />
          <img
            src={asset6}
            alt="asset6"
            className="absolute top-36 right-[48px] rounded-[30px] z-10"
          />
        </div>
      </div>
      <Reviews/>
    </div>
  );
};

export default Product;

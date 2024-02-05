import React from "react";
import asset57 from "../assets/asset57.jpeg";


const FeatureCard = ({ features }) => {
  return (
    <div className="relative group">
      <div className="featureImg custom-shadow relative w-full h-[200px] rounded-xl overflow-hidden">
        <div className="overlay w-full h-full"></div>
        <img src={features.imgUrl} alt="img" className="absolute w-full h-full object-cover right-0 bottom-0 z-20 "/>
        <img src={asset57} alt="asset57" className="object-cover transform scale-125 group-hover:rotate-180 transition duration-[5s] blur-[20px]"/>
      </div>
      <div className="mt-10 group-hover:scale-110 transition duration-700">
        <h3 className="text-xl font-Inter mb-3">{features.title}</h3>
        <p className="para-text">{features.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

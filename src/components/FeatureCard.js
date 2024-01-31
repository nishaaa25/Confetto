import React from "react";
import asset8 from "../assets/asset7.jpg";

const FeatureCard = ({ features }) => {
  return (
    <div>
      <div className="featureImg custom-shadow relative w-full h-[200px] rounded-xl overflow-hidden">
        <div className="overlay w-full h-full"></div>
        <img src={features.imgUrl} alt="img" className="absolute w-full h-full object-cover right-0 bottom-0 z-20"/>
        <img src={asset8} alt="asset8" className="relative w-full h-full object-cover z-0"/>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-Inter mb-3">{features.title}</h3>
        <p className="para-text">{features.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

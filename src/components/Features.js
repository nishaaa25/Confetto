import React from "react";
import { features } from "../Constant";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="features">
      <div className="feature-content container text-center px-7 py-[88px]">
        <div className="feature-text w-full pb-2 ">
          <h1 className="text-4xl font-[500] mb-3 w-[50%] mx-auto">
            Powerful Features just for you
          </h1>
          <p className="info-text w-[30%] mx-auto">
            Our platform offers a range of powerful featured designed to elevate
            your banking experience.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-[60px]">
          {features.map((feature) => {
            return (
              <div key={feature.id}>
                <FeatureCard features={feature} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;

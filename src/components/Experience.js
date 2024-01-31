import React from "react";
import asset23 from "../assets/asset 23.svg";
import asset26 from "../assets/asset 26.svg";
import asset27 from "../assets/asset 27.svg";
import asset28 from "../assets/asset 28.svg";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-content container text-center p-7">
        <div className="power-text pt-28 pb-3">
          <h1 className="text-4xl font-[500] mb-3">Seamless Experience</h1>
          <p className="info-text w-[30%] mx-auto">
            Our top features are designed to provide you with a seamless
            experience and make your financial management as easy as possible.
          </p>
        </div>
        <div className="my-16">
          <div className="w-full flex-center gap-8">
            <div className="card p-6 flex-between text-start">
              <img src={asset26} alt="asset26" width={22} className="svg" />
              <p>
                Connect and sync
                <br />
                <span>your business data</span>
              </p>
            </div>
            <div className="card p-6 flex-between text-start">
              <img src={asset23} alt="asset23" width={22} className="svg"/>
              <p>
                Customize and tune <br />
                <span>your app's interface</span>
              </p>
            </div>
            <div className="card p-6 flex-between text-start">
              <img src={asset27} alt="asset27"  width={22} className="svg"/>
              <p>
                Power and automate <br />
                <span>your workflows</span>
              </p>
            </div>
            <div className="card p-6 flex-between text-start">
              <img src={asset28} alt="asset28"  width={22} className="svg"/>
              <p>
                Share and recieve <br />
                <span>your money</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React, { useState, useEffect } from "react";
import asset0 from "../assets/asset 0.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState("product");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const productSection = document.getElementById("product");
      const featureSection = document.getElementById("feature");
      const powerSection = document.getElementById("power");
      const experienceSection = document.getElementById("experience");

      if (
        scrollY >= productSection.offsetTop &&
        scrollY < featureSection.offsetTop
      ) {
        setActiveLink("product");
      } else if (
        scrollY >= featureSection.offsetTop &&
        scrollY < powerSection.offsetTop
      ) {
        setActiveLink("feature");
      } else if (
        scrollY >= powerSection.offsetTop &&
        scrollY < experienceSection.offsetTop
      ) {
        setActiveLink("power");
      } else if (scrollY >= experienceSection.offsetTop) {
        setActiveLink("experience");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className="header w-full relative">
      <div className="navbar bg-black-500 w-[668px] mx-auto my-3 py-[5px] pl-[14px] pr-1 rounded-lg">
        <div className="flex-between ">
          <img src={asset0} alt="logo" className="logo" />
          <div className="w-full py-2 pl-12">
            <ul className="flex-between">
              <li>
                <a
                  href="#product"
                  className={`nav-link ${
                    activeLink === "product" ? "active" : ""
                  }`}
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#feature"
                  className={`nav-link ${
                    activeLink === "feature" ? "active" : ""
                  }`}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#power"
                  className={`nav-link ${
                    activeLink === "power" ? "active" : ""
                  }`}
                >
                  Power
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`nav-link ${
                    activeLink === "experience" ? "active" : ""
                  }`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="py-[10px] font-[500] px-6 bg-purple rounded-[5px] text-base"
                >
                  BUY FOR 24$
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

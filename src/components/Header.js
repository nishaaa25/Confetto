import React, { useState, useEffect } from "react";
import asset0 from "../assets/asset 0.svg";
import { motion } from "framer-motion";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Header = () => {
  const [activeLink, setActiveLink] = useState("product");
  const [active, setActive] = useState(false);

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
    <motion.div
      className="header w-full relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 2.7, duration: 0.6 }}
    >
      <div className="navbar bg-black-500 w-[260px] md:w-[668px] mx-auto py-1 pl-[14px] pr-1 rounded-lg">
        <div className="flex-between ">
          <img src={asset0} alt="logo" className="logo" />
          <div
            className={`${active ? "bg-purple rounded-md":""} md:hidden w-[40px] flex-center h-[40px] mr-1 cursor-pointer`}
            onClick={() => {
              setActive(!active);
            }}
          >
            <MenuRoundedIcon />
          </div>
          <div
            className={`${active ? "block ": "hidden"} absolute top-[54px] left-0 md:left-0 md:top-0 md:relative md:block w-full py-2 md:pl-12 custom-transition`}
          >
            <ul className="flex-between h-[290px] md:h-full flex-col md:flex-row w-full bg-[#0d0d0d] py-6 md:p-0 md:bg-transparent">
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
    </motion.div>
  );
};

export default Header;

import React from "react";
import asset0 from "../assets/asset 0.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  return (
    <div className="header w-full relative">
      <div className="navbar bg-black-500 w-[668px] mx-auto my-3 py-[5px] pl-[14px] pr-1 rounded-lg">
        <div className="flex-between ">
          <img src={asset0} alt="logo" className="logo" />
          <div className="w-full py-2 pl-12">
            <ul className="flex-between">
              <li>
                <a href="/" className={`nav-link active`}>
                  Product
                </a>
              </li>
              <li>
                <a href="#feature" className="nav-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#power" className="nav-link">
                  Power
                </a>
              </li>
              <li>
                <a href="#experience" className="nav-link">
                  Experience
                </a>
              </li>
              <li>
                <a href="/" className="py-[10px] font-[500] px-6 bg-purple rounded-[5px] text-base">BUY FOR 24$</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

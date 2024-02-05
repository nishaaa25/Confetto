import React from "react";
import asset54 from "../assets/asset 54.svg";
import asset55 from "../assets/asset 55.svg";
import asset56 from "../assets/asset 56.svg";
// import asset7 from "../assets/asset7.jpg";

const Footer = () => {
  return (
    <footer id="footer" className="relative w-full h-full overflow-hidden">
      <div className="footer-content bg-black relative z-10 mt-[1px] rounded-t-[100px]">
        <div className="footer-text container relative p-7 ">
          <div className="footer-top flex-between mb-20 mt-8">
            <div className="footer-left flex justify-between items-start flex-col gap-8">
              <p className="font-[500]">Join for free career tips!</p>
              <div className="font-Inter">
                <input
                  type="text"
                  placeholder="Email@example.com"
                  name="email"
                  id="email"
                  className="p-3 text-sm bg-black-700 border border-grey border-opacity-50 rounded-md mr-2 placeholder:text-grey "
                />
                <button className="bg-purple rounded-lg px-6 py-3 text-[14px] font-[500]">Sign up</button>
              </div>
              <div className="flex-between gap-8">
                <img src={asset54} alt="icon" className="cursor-pointer"/>
                <img src={asset55} alt="icon" className="cursor-pointer"/>
                <img src={asset56} alt="icon" className="cursor-pointer"/>
              </div>
            </div>
            <div className="footer-right flex-between w-[460px]">
              <ul>
                <li className="text-base font-[500] mb-5">Company</li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Product</a>
                </li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Features</a>
                </li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Power</a>
                </li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Experience</a>
                </li>
              </ul>
              <ul>
                <li className="text-base font-[500] mb-5">Social Media</li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">LinkedIn</a>
                </li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Instagram</a>
                </li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Facebook</a>
                </li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Twitter</a>
                </li>
              </ul>
              <ul>
                <li className="text-base font-[500] mb-5">Webflow stuff</li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Style Guide</a>
                </li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Licensing</a>
                </li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Instructions</a>
                </li>
                <li className="text-[17px] mb-2 text-grey-600">
                  <a href="/">Change Log</a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" border-t border-grey border-opacity-30 py-8 flex-between">
            <p className="text-[17px] ">CREATED BY NISHA</p>
            <p  className="text-[17px]">Copyright &copy; 2024</p>
          </div>
        </div>
      </div>
      <div className="custom-border"></div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "./img/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import avatar from "./img/avatar.png"

const Header = () => {
  return (
    <div className="fixed w-screen p-6 z-50 px-16">
      {/* for tablet and dexktop */}
      <div className="hidden md:flex  w-full h-full items-center justify-between ">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} className=" bg-cover w-8 " alt="this is logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>
        <div className=" flex justify-center items-center">
        <ul className="flex justify-center items-center  gap-8">
          <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer">
            Home
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer">
            Menu
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer">
            About Us
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer">
            Service
          </li>
        </ul>

        <div>
          <FiShoppingCart className="text-textColor text-2xl ml-8"/>
          <div className="h-5 w-5 -mt-10 ml-9  rounded-full items-center justify-center flex bg-red-500 absolute">
          <p className="text-white ">2</p>
          </div>
        </div>

        <img src={avatar} className="bg-cover ml-8 w-10 min-w-[40px] h-10 min-h[40px] drop-shadow-xl" alt="userProflile" />
        </div>
      </div>
      {/* for mobile */}
      <div className="flex md:hidden w-full h-full ">
        
      </div>
    </div>
  );
};

export default Header;

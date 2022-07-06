import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { AiFillFolderAdd } from "react-icons/ai";
import avatar from "./img/avatar.png";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "./Context/stateProvider";
import { actionType } from "./Context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

const logout=()=>{
  setIsMenu(false)
  localStorage.clear()

  dispatch({
    type:actionType.SET_USER,
    user:null
  })
}

  return (
    <div className="fixed w-screen  z-50 p-3 px-4 md:p-6 md:px-16">
      {/* for tablet and dexktop */}
      <div className="hidden md:flex  w-full h-full items-center justify-between ">
        <Link to="/" className="flex justify-center items-center gap-2">
          <img src={logo} className=" bg-cover w-8 " alt="this is logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className=" flex justify-center items-center">
          <motion.ul
           initial={{opacity:0,x:200}} 
           animate={{opacity:1,x:0}}
           exit={{opacity:0,x:200}}
           
           className="flex justify-center items-center  gap-8">
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
          </motion.ul>

          <div>
            <FiShoppingCart className="text-textColor text-2xl ml-8" />
            <div className="h-5 w-5 -mt-10 ml-9  rounded-full items-center justify-center flex bg-red-500 absolute">
              <p className="text-white ">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              className="bg-cover ml-8 w-10 min-w-[40px] h-10 min-h[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userProflile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="flex  absolute w-40 right-0 bg-gray-50 shadow-xl rounded-lg flex-col top-12 "
              >
                {user && user.email == "shubhambhandari12345hb@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">
                      New Item <AiFillFolderAdd className="inline-block" />
                    </p>
                  </Link>
                )}

                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100" onClick={logout}>
                  Log Out <FiLogOut className="inline-block" />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>



      {/* for mobile */}
      <div className="flex md:hidden items-center justify-between w-full h-full ">
      <Link to="/" className="flex justify-center items-center gap-2">
          <img src={logo} className=" bg-cover w-8 " alt="this is logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>


        <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              className="bg-cover ml-8 w-10 min-w-[40px] h-10 min-h[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userProflile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="flex  absolute w-40 right-0 bg-gray-50 shadow-xl rounded-lg flex-col top-12 "
              >
                {user && user.email == "shubhambhandari12345hb@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">
                      New Item <AiFillFolderAdd className="inline-block" />
                    </p>
                  </Link>
                )}

            <ul className="flex flex-col   ">
            <li className="text-base text-textColor hover:text-headingColor hover:bg-slate-100 px-4 py-2 duration-100 ease-in-out transition-all cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor hover:bg-slate-100 px-4 py-2 duration-100 ease-in-out transition-all cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor hover:bg-slate-100 px-4 py-2 duration-100 ease-in-out transition-all cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor hover:bg-slate-100 px-4 py-2 duration-100 ease-in-out transition-all cursor-pointer">
              Service
            </li>
          </ul>

                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer bg-gray-200 hover:bg-slate-300 transition-all ease-in-out duration-100  justify-center" onClick={logout}>
                  Log Out <FiLogOut  />
                </p>
              </motion.div>
            )}
          </div>
      </div>
    </div>
  );
};

export default Header;

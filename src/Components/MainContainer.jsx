import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import {useStateValue} from './Context/stateProvider'

const MainContainer = () => {
  const[{foodItems},dispatch]=useStateValue()
 const [scrollValue,setScrollValue]=useState(0)
useEffect(()=>{
  
},[scrollValue])

const onLeft=()=>{
  if(scrollValue<-1000){
    setScrollValue(-1000)
  }else if(scrollValue>=1000){
    setScrollValue(0)
  }
  else{setScrollValue((scrollValue-200))}
}



 const onRight=()=>{
  if(scrollValue>1000){
   setScrollValue(1000)
  }
  if(scrollValue<0){
   setScrollValue(0)}
else{setScrollValue((scrollValue+200))}
}

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center ">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="flex justify-between w-full items-center">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-500 transition-all ease-in-out duration-100">
            Our Fresh & Healthy Fruits
          </p>
          <div className="hidden md:flex gap-3 item-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={onLeft}
            >
              <MdChevronLeft className="text-lg text-white"  />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={onRight}
            >
              <MdChevronRight className="text-lg text-white"  />
            </motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue}  flag={true} data={foodItems?.filter(n=>n.category==="fruits")}/>
      </section>
    </div>
  );
};

export default MainContainer;

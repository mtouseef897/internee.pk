
import React from 'react'
import {motion} from 'framer-motion'
import { animations, images } from "../utilities";
import { GrGraphQl } from "react-icons/gr";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { FaHandshakeSimple } from "react-icons/fa6";

const WhyUsSection = () => {
  return (
    <div className="flex items-center justify-center  mt-[120px] mb-[120px]">
    <div className="screenlimit  flex item-center justify-center flex-col gap-[70px]">
      {/* Heading Section */}
      <div className="flex items-center justify-center gap-6 flex-col max-w-[960px] mx-auto" >
        <div className="w-16 h-16 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.15)] bg-white relative">
        <motion.img  {...animations.fadeUp(0)} 
            src={images.logosmall}
            alt=""
            className="absolute top-0 left-0 right-0 bottom-0 m-auto"
          />
        </div>
        <motion.h1  {...animations.fadeUp(0)}  className="head-2">Why internee.pk?</motion.h1>
      </div>
      {/* Graphics */}
      <div className='relative  flex items-center justify-center'>


        

       <div className='absolute top-[25%] left-[15%]  flex items-center justify-center w-[287px] h-[287px] z-10 '>
       <motion.div {...animations.scaleUp} className='absolute w-full h-full rounded-full khasgradient'></motion.div>
            <div className='uppercase text-[40px] font-medium text-black z-10 max-w-[183px] text-center leading-tight'><span className='font-bold'>Why</span> Choose us</div>
        </div>

        <div className='relative flex items-center justify-center w-[542px] h-[542px] '>
            <motion.div {...animations.scaleUp} className='absolute w-full h-full rounded-full bg-gradient-to-l from-darkGray to-lightGray opacity-45'></motion.div>
            <img src={images.whyuslogo} alt="" className='relative z-10 '/>
        </div>

        <div className="absolute right-0 top-0 z-10 w-full h-full flex flex-col items-center justify-center  gap-16">
              <motion.div {...animations.fadeInLeft(0)} className="flex items-start  justify-center gap-2 ml-[45%]">
                  <div className=" w-20 h-20 rounded-full bg-darkGreen shadow-2xl flex items-center justify-center"><AiFillSafetyCertificate className="text-white text-[54px]"/></div>
                  <div className='line'></div>
                  <h4 className="text-[18px] max-w-[273px] font-bold  rounded-full ">5500+ Students already registered</h4>
              </motion.div>
              <motion.div {...animations.fadeInLeft(1)} className="flex items-start  justify-center gap-2 ml-[60%]">
                  <div className=" w-20 h-20 rounded-full bg-darkGreen shadow-2xl flex items-center justify-center"><LuBrainCircuit className="text-white text-[54px]"/></div>
                  <div className='line'></div>
                  <h4 className="text-[18px] max-w-[273px] font-bold  rounded-full ">Hands on Experience via Virtual internship</h4>
              </motion.div>
              <motion.div {...animations.fadeInLeft(2)} className="flex items-start  justify-center gap-2 ml-[60%]">
                  <div className=" w-20 h-20 rounded-full bg-darkGreen shadow-2xl flex items-center justify-center"><MdLibraryBooks className="text-white text-[54px]"/></div>
                  <div className='line'></div>
                  <h4 className="text-[18px] max-w-[273px] font-bold  rounded-full ">Massive Courses with high-quality videos on LMS</h4>
              </motion.div>
              <motion.div {...animations.fadeInLeft(3)} className="flex items-start justify-center gap-2 ml-[45%] ">
                  <div className=" w-20 h-20 rounded-full bg-darkGreen shadow-2xl flex items-center justify-center"><FaHandshakeSimple className="text-white text-[54px]"/></div>
                  <div className='line'></div>
                  <h4 className="text-[18px] max-w-[273px] font-bold  rounded-full  ">Direct Collaboration with companies for direct hiring</h4>
              </motion.div>

        </div>

      </div>
  
    </div>
  </div>
  )
}

export default WhyUsSection
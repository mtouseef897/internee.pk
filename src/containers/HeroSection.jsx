import React from "react";
import { animations, images } from "../utilities";
import { CtaButton } from "../components";
import { motion } from "framer-motion";

import { GrGraphQl } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { TypingText } from "../components";
// import {scaleUp} from '../utilities/animations'

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center pt-28 pb-16 bg-lightGray">
      <div className="screenlimit flex items-center justify-center">
        {/* Content */}
        <div className="flex-1 flex flex-col gap-16">
          <div className="flex flex-col items-start justify-start gap-6">
            <motion.div {...animations.fadeInRight(0)}>
                <h1 className="head-1 whitespace-nowrap">Looking for dream internship?</h1>
                {/* <h1 className="head-1 text-darkGreen">Get a compitative job</h1> */}
                <TypingText/>
            </motion.div>
            <motion.p {...animations.fadeInRight(1)} className="para-1">
              Internee.pk kickstart student's tech careers with first
              internships, providing industry exposure, practical skills, and
              networking opportunities, paving the way for their success in the
              tech industry.
            </motion.p>
            <motion.div {...animations.fadeInRight(2)} className="flex items-center justify-start gap-6">
              <CtaButton link="https://portal.internee.pk/login.php" type="secondary" text={" internee's login"} />
              <CtaButton type="primary" text={" job portal"} /> 
            </motion.div>
          </div>
          <div className="flex items-center justify-start gap-6 ">
              <motion.div {...animations.fadeUp(0)} className="flex-1 max-w-[200px] flex px-5 py-3 rounded-lg khasshadow flex-col items-start justify-center bg-white/[0.34]">
                <h3 className="head-3">5500+</h3>
                <p className="para-2 whitespace-nowrap">Happy Students</p>
              </motion.div>
              <motion.div {...animations.fadeUp(1)} className="flex-1 max-w-[200px] flex px-5 py-3 rounded-lg khasshadow flex-col items-start justify-center bg-white/[0.34]">
                <h3 className="head-3">25+</h3>
                <p className="para-2">Instructors</p>
              </motion.div>
              <motion.div {...animations.fadeUp(2)} className="flex-1 max-w-[200px] flex px-5 py-3 rounded-lg khasshadow flex-col items-start justify-center bg-white/[0.34]">
                <h3 className="head-3">50+</h3>
                <p className="para-2 whitespace-nowrap">Training Courses</p>
              </motion.div>
          </div>
        </div>
        {/* Graphics */}
        <div className="relative flex-1 flex items-center justify-start ">
          <motion.img {...animations.fadeIn} src={images.logostudent} alt="" className="z-10" />
          <motion.div {...animations.scaleUp} className="absolute top-0 left-0  bg-gradient-to-t from-lightGreen to-Accent w-full h-full rounded-full blur-[100px] opacity-[40%]"></motion.div>
          <div className="absolute right-0 z-10   h-full flex flex-col items-center justify-center gap-20">
              <motion.div {...animations.fadeInLeft(0)} className="relative -ml-32">
                  <div className="absolute w-12 h-12 -top-[30%] -left-[20%] rounded-full bg-darkGreen flex items-center justify-center"><GrGraphQl className="text-white text-2xl"/></div>
                  <h4 className="head-4 bg-white p-4 rounded-full khasshadow">Graphic Designing</h4>
              </motion.div>
              <motion.div {...animations.fadeInLeft(1)} className="relative ml-10">
                  <div className="absolute w-12 h-12 -top-[30%] -left-[20%] rounded-full bg-darkGreen flex items-center justify-center"><FaCode className="text-white text-2xl"/></div>
                  <h4 className="head-4 bg-white p-4 rounded-full khasshadow">Web Development</h4>
              </motion.div>
              <motion.div {...animations.fadeInLeft(2)} className="relative -ml-28">
                  <div className="absolute w-12 h-12 -top-[30%] -left-[20%] rounded-full bg-darkGreen flex items-center justify-center"><GiProgression className="text-white text-2xl"/></div>
                  <h4 className="head-4 bg-white p-4 rounded-full khasshadow">Digital Marketing</h4>
              </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

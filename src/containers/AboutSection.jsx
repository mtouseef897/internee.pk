import React from "react";
import { animations, images } from "../utilities";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { ServiceCard } from "../components";
import {motion} from 'framer-motion'




const AboutSection = () => {
  const services=[
    {
      iconRef:FaBookOpenReader,
      title:"LMS PORTAL",
      desc:"Our LMS provides diverse tutorials and courses for personalized learning experiences."
    },
    {
      iconRef:MdLocalOffer,
      title:"JOB PORTAL",
      desc:"Our job portal connects seekers with top career opportunities using intuitive search tools."
    },
    {
      iconRef:PiCertificateFill,
      title:"INTERNSHIP PORTAL",
      desc:"Our portal streamlines internships with efficient task management, promoting collaboration and skill display."
    }
  ]
  return (
    <div className="flex items-center justify-center  mt-[120px]">
      <div className="screenlimit  flex item-center justify-center flex-col gap-[220px]">
        {/* Heading Section */}
        <div className="flex items-center justify-center gap-6 flex-col max-w-[960px] mx-auto" >
          <div className="w-16 h-16 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.15)] bg-white relative">
          <motion.img  {...animations.fadeUp(0)} 
              src={images.logosmall}
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 m-auto"
            />
          </div>
          <motion.h1  {...animations.fadeUp(0)}  className="head-2">Who is internee.pk?</motion.h1>
          <motion.p  {...animations.fadeUp(1)} className="para-1 text-center">
            The ultimate platform designed to turbocharge the IT sector in
            Pakistan! We recognize the immense potential of talented individuals
            in the country and aim to bridge the gap between them and the
            thriving IT industry. Internee.pk offers a comprehensive range of
            virtual internship opportunities exclusively in the IT field.
          </motion.p>
        </div>
        {/* Cards Section */}
        <div className=" relative  h-[309px]">
          <motion.div {...animations.scaleUp} className="absolute w-full h-full  top-0 left-0  bg-gradient-to-t from-lightGreen to-Accent  blur-[50px] opacity-[20%]"></motion.div>
          <div className="relative flex items-center justify-around  z-10">
              {
                  services.map(
                    (item,index)=>(
                      <motion.div  key={item+index}   {...animations.fadeUp(index)}  className="-mt-[8%]"><ServiceCard title={item.title} description={item.desc} Icon={item.iconRef}/></motion.div>
                    )
                  )
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

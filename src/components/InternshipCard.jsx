import React from "react";
import { PiCertificate } from "react-icons/pi";
import { images } from "../utilities";

const InternshipCard = ({ imageURL, title }) => {
  return (
    <div className="w-[314px] h-[333px] bg-white flex items-start justify-between flex-col rounded-[18px] shadow-lg  overflow-hidden p-2 border border-gray-300">


      <div className="w-[295px] h-[167px]  rounded-[11px] overflow-hidden">
        <img src={imageURL} alt="" className="w-full h-full object-cover " />
      </div>


      <div>
        <img src={images.logosmall2} alt="" />
      </div>


      <div>
        <h4 className="text-[18px] font-extrabold  text-black capitalize">{title}</h4>
        <div className="flex items-center justify-center gap-2 text-darkGreen">
          <PiCertificate className="text-3xl"/>
          <p>Make progress toward a career</p>
        </div>
      </div>


      <div className="w-[80%] mx-auto flex items-center justify-center rounded-full self-center bg-darkGreen  text-white font-medium text-[14px] py-[8px] bgGradienthover cursor-pointer">
        <a href="#">
          Apply Now
        </a>
      </div>



    </div>
  );
};

export default InternshipCard;

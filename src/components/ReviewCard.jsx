import React from "react";
import { IoIosStar } from "react-icons/io";

const ReviewCard = ({ comment, name, city, country }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-6 py-[32px] px-[28px] border border-gray-200 rounded-2xl bg-white max-w-[400px]">
      <div>
        {
            <>
            <span className="text-darkGreen text-[24px]"> &ldquo; </span>
            <p className="text-[14px] font-normal text-darkGray text-center inline">
           
            {comment}
           
    
           </p>
            <span className="text-darkGreen text-[24px] text-center"> &rdquo;</span>
            </>
        
        }
      </div>
      <div className="flex items-start flex-col justify-center">
        <div className="flex items-center justify-center gap-[2px] text-darkGreen text-xl">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="text-[20px] font-bold text-darkGreen">{name}</h3>
          <p className="text-[14px] font-normal text-black">
            {city + "," + country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

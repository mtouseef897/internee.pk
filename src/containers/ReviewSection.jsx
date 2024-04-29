import React from "react";
import { animations, images } from "../utilities";
import { motion } from "framer-motion";
import { ReviewCard } from "../components";

const ReviewSection = () => {
  const reviews = [
    {
      comment: "internee.pk is the best, most comprehensive 21st-century innovation for those student who's looking for internship and upgrade thier skillsets. Their projects are tough but market valued.",
      name: "Rabia Javed",
      city: "Islamabad",
      country: "Pakistan",
    },
    {
      comment: "internee.pk is the best, most comprehensive 21st-century innovation for those student who's looking for internship and upgrade thier skillsets. Their projects are tough but market valued.",
      name: "Rabia Javed",
      city: "Islamabad",
      country: "Pakistan",
    },
    {
      comment: "internee.pk is the best, most comprehensive 21st-century innovation for those student who's looking for internship and upgrade thier skillsets. Their projects are tough but market valued.",
      name: "Rabia Javed",
      city: "Islamabad",
      country: "Pakistan",
    },

   
  ];

  return (
    <div className="flex items-center justify-center bg-lightGray py-24">
      <div className="screenlimit  flex item-center justify-center flex-col gap-[96px]">
        {/* Heading Section */}
        <div className="flex items-center justify-center gap-6 flex-col max-w-[960px] mx-auto">
          <motion.h1
            {...animations.fadeUp(0)}
            className="head-2 max-w-[503px] text-center leading-tight"
          >
            What Students are saying about internee.pk
          </motion.h1>
        </div>
        {/* Cards Section */}

        <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-between gap-6">
          {
            reviews.map((item,index)=>( <ReviewCard key={item+index} name={item.name} comment={item.comment} country={item.country} city={item.city}/>))
          }
         
        </div>
        <div className="flex items-center justify-between gap-6">
          {
            reviews.map((item,index)=>( <ReviewCard key={item+index} name={item.name} comment={item.comment} country={item.country} city={item.city}/>))
          }
         
        </div>
        </div>


      </div>
    </div>
  );
};

export default ReviewSection;

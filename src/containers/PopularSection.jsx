import React from 'react'
import { animations, images } from '../utilities'
import {motion} from 'framer-motion'
import { CtaButton, InternshipCard } from '../components'

const PopularSection = () => {
  const internships=[
    {
      imgURL:`${images.internship1}`,
      title:" backend Development",
    },
    {
      imgURL:`${images.internship2}`,
      title:" Graphic Designing",
    },
    {
      imgURL:`${images.internship3}`,
      title:" digital marketing",
    },
    {
      imgURL:`${images.internship4}`,
      title:" mobile app development",
    },
  ]
  return (
    <div className='flex items-center justify-center  mt-[120px]  bg-lightGray py-12'>
      <div className="screenlimit  flex  justify-center flex-col gap-12 ">
            {/* heading section */}
          <div className='flex flex-col items-start justify-start gap-2'>
          <p className='text-[20px] font-normal text-darkGreen'>Specializations and Internship Certificates</p>
            <h3 className='text-[32px] font-extrabold  text-black'>Most Popular Internships</h3>
            <p className='para-1'>Explore our most popular Virtual Internship programs, get job-ready for an in-demand career.</p>
          </div>
            {/* Cards */}
          <div className='flex items-center justify-between gap-4 '>
          {
                      internships.map(
                        (item,index)=>(
                          <motion.div  key={item+index} {...animations.fadeUp(index)} ><InternshipCard  title={item.title} imageURL={item.imgURL}/></motion.div>
                        )
                      )
                  }
          </div>
            {/* CTA */}
            <div className="flex items-center justify-start gap-6">
          <CtaButton link={"https://internee.pk/web-design.html"} type="primary" text={" show more "} />
          <CtaButton link={"https://internee.pk/web-design.html"} type="secondary" text={" View all --->"} />
        </div>
      </div>
    </div>
  )
}

export default PopularSection
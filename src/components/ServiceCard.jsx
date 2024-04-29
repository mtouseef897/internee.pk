import React from 'react'

const ServiceCard = ({title,description,Icon}) => {
  return (
    <div className='w-[416px] h-[368px] bg-lightGray flex items-center justify-center flex-col rounded-[66px] shadow-lg gap-7'>
        <Icon className="w-12 h-12 text-darkGreen"/>
        <h3 className='head-3'>{title}</h3>
        <p className='para-2 text-center text-black max-w-[370px]'>{description}</p>
    </div>
  )
}

export default ServiceCard
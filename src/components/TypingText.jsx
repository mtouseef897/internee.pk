import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypingText = () => {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Get a compitative job',2000, // wait 1s before replacing "Mice" with "Hamsters"
      'On your desire domain', 2000,
      'Gives hands on experiences', 2000,
    ]}
    wrapper="h1"
    speed={60}
    className="head-1 text-darkGreen"
    repeat={Infinity}
  />
  )
}

export default TypingText
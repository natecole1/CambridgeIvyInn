import React from 'react'
import HeroText from './HeroText'
import CheckAvailability from './CheckAvailability'
import InnDetails from './InnDetails'

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center mt-20 gap-20 2xl:gap-40'>
       <HeroText />
       <CheckAvailability />
       <InnDetails />
    </div>
  )
}

export default Hero
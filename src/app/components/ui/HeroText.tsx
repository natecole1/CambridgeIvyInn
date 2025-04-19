import React from 'react'

const HeroText = () => {
  return (
    <div className=' flex flex-col gap-32 sm:gap-40'>
      <div className="flex flex-col ">
        <h1 className="text-white text-xl xl:text-3xl">Welcome to</h1>
        <h1 className="text-3xl xl:text-6xl font-extrabold text-yellow-500">
          Cambridge Ivy Inn
        </h1>
        <p className="text-white text-lg">
          Premier long term lodging
        </p>
      </div>
      
    </div>
  );
}

export default HeroText
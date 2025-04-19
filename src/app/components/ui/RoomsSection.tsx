import Image from 'next/image';
import React from 'react';

import { imageLinks } from '@/app/constants';

const RoomsSection = () => {
  return (
    <div className="w-full p-10 xl:p-24">
      <div className="w-full sm:w-[50%] ">
        <h1 className="p-6 text-2xl lg:text-5xl">THE ROOMS</h1>
      </div>
      <div className="w-full flex justify-center sm:justify-end items-center sm:pr-10 my-10">
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-center">
          {imageLinks.map((item) => {
            return (
              <div key={item.imgUrl} className="w-[200px] 2xl:w-[350px] h-auto relative cursor-pointer">
                <div className='absolute inset-0 hover:bg-black/[0.4] rounded-xl'/>
                <Image
                  src={item.imgUrl}
                  alt="images"
                  width={200}
                  height={200}
                  className="w-full h-full rounded-xl "
                />
              </div>
            );
          })}
        </div>
      </div>
        <div className="border-white w-[50%] sm:w-[25%] h-11 m-auto border-2 flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:border-none rounded-full ">
          View More
        </div>
    </div>
  );
}

export default RoomsSection
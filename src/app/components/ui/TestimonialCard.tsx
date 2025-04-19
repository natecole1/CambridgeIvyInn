import React from 'react'
import Image from 'next/image';
import StarRating from './StarRating';
import { TestimonialCardProps } from '@/app/type';


const TestimonialCard = ({name, rating, testimonial, imgUrl}: TestimonialCardProps) => {
  return (
    <div className="w-60 h-[380px] sm:w-[340px] lg:w-96 flex flex-col justify-between items-center p-5 gap-6 bg-[#171717] shadow-black shadow-xl rounded-2xl">
      <div className='flex flex-col items-center justify-center gap-4'>
        <p className= 'text-white line-clamp-5 sm:line-clamp-none'>
          {testimonial}
        </p>
        <StarRating 
          ratings={rating} 
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-22 h-22 flex items-center justify-center rounded-full ">
          <Image 
          src={imgUrl || ""}
          alt="headshot"
          height={80}
          width={80}
          className="rounded-full "
          />
        </div>
        <div>
          <h1 className='text-white'>{name}</h1>
        </div>

      </div>
    </div>
  );
}

export default TestimonialCard
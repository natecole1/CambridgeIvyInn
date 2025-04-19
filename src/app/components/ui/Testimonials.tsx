'use client'
import React from 'react'
import TestimonialCard from './TestimonialCard';
import Slider from "react-slick";

import { testimonials } from '@/app/constants';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#171717",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
           ...style, 
           display: "flex", 
           alignItems: "center", 
           justifyContent: "center",
           background: "#171717", 
           borderRadius: "100%" 
          }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    mobileFirst: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    cssEase: "linear",
    className: "slides",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className=" w-full flex flex-col">
      <div className="p-10 text-2xl lg:text-5xl font-bold">TESTIMONIALS</div>
      <div className="w-[95%] 2xl:w-[80%] m-auto my-20 ">
        <Slider {...settings} className='pb-10'>
          {testimonials.map(({ name, starRating, testimonial, imgUrl }) => {
            return (
              <TestimonialCard
                key={name}
                name={name}
                rating={starRating}
                testimonial={testimonial}
                imgUrl={imgUrl}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials
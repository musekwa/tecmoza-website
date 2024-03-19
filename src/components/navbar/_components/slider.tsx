"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-infinite-logo-slider";

const SliderOne = () => {
  return (
    <div className="my-4">
      <Slider width="250px" duration={60}>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-211.svg"
            alt="logo"
            width={100}
            height={100}
            className=" md:w-20 h-20 text-gray-500"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-211.svg"
            alt="logo"
            width={100}
            height={100}
            className=" md:w-20 h-20 text-gray-500"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-223.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-16 h-16"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-222.svg"
            alt="logo"
            width={100}
            height={100}
            className=" md:w-20 h-20 text-gray-500"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-224.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-16 h-16"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-225.svg"
            alt="logo"
            width={100}
            height={100}
            className=" md:w-20 h-20 text-gray-500"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-226.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-16 h-16"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-243.svg"
            alt="logo"
            width={100}
            height={100}
            className=" md:w-20 h-20 text-gray-500"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-245.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-16 h-16"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-258.svg"
            alt="logo"
            width={100}
            height={100}
            className=" md:w-20 h-20 text-gray-500"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-262.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-16 h-16"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-264.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-16 h-16"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-265.svg"
            alt="logo"
            width={100}
            height={100}
            className=" md:w-20 h-20 text-gray-500"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/logos/logoipsum-270.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-16 h-16"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default SliderOne;
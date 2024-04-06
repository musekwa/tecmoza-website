"use client"
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export const marqueeImages = [
  {
    src: "/images/slidingImages/infoSysLogo.png",
    alt: "infoSys",
  },
  {
    src: "/images/slidingImages/iamLogo.png",
    alt: "iam",
  },
  {
    src: "/images/slidingImages/abbLogo.png",
    alt: "abb",
  },
];

type Props = {};

const OurClientSection = (props: Props) => {
  return (
    <div className="my-12 px-6 lg:px-24 ">
      <h2 className="text-xl font-semibold text-gray-500">
        Já trabalhamos aqui...
      </h2>
      <Marquee autoFill speed={25}>
        {marqueeImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={120}
            height={50}
            className="mx-4 z-0 w-auto h-auto"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default OurClientSection;

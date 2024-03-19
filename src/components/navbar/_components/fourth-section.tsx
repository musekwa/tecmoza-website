"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const slickItems = [
  {
    title: "React Native",
    image: "/images/reactNativeLogo.png",
  },
  {
    title: "Android",
    image: "/images/androidLogo.png",
  },
  {
    title: "iOS",
    image: "/images/iosLogo.png",
  },
  {
    title: "Flutter",
    image: "/images/flutterLogo.png",
  },
  {
    title: "ReactJS",
    image: "/images/reactNativeLogo.png",
  },
  {
    title: "NextJS",
    image: "/images/nextJsLogo.png",
  },
  {
    title: "TypeScript",
    image: "/images/typescriptLogo.png",
  },
  {
    title: "NodeJs",
    image: "/images/nodeJsLogo.png",
  },
  {
    title: "TypeScript",
    image: "/images/mongoDbLogo.png",
  },
  {
    title: "TypeScript",
    image: "/images/postgreSqlLogo.jpg",
  },
  {
    title: "TypeScript",
    image: "/images/convexLogo.png",
  },
];

type Props = {};

const FourthSection = (props: Props) => {
  let sliderRef = useRef(null);
  return (
    <section className=" ">
      <div className="flex flex-col">
        <h1 className="text-xl lg:text-3xl font-bold">
          Tecnologia e Ferramentas Utilizadas
        </h1>
        <div className="w-[75px] h-1 bg-yellow-500 my-4" />
        <p className="text-sm lg:text-[16px] lg:tracking-wide ">
          A nossa escolha de tecnologia e ferramentas a usar é determinada pelo
          modelo de negócio e necessidades da sua empresa.
        </p>
      </div>
      <div className="slider-container gap-3  ">
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {slickItems.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
                <Image
                  width={55}
                  height={55}
                  src={item.image}
                  alt={item.title}
                  className="w-auto h-auto"
                />

                <p className="text-xs italic text-gray-400">{item.title}</p>
              </div>
            </div>
          ))}
          {/* <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/iosLogo.png"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">
                <p>iOS</p>
              </caption>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/androidLogo.png"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">

                Android
              </caption>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/flutterLogo.png"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">
                Flutter
              </caption>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/reactNativeLogo.png"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">
                React Native
              </caption>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/nextJsLogo.png"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">NextJS</caption>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/reactNativeLogo.png"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">React</caption>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/typescriptLogo.png"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">
                TypeScript
              </caption>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/nodeJsLogo.png"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">NodeJs</caption>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/mongoDbLogo.png"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">
                MongoDB
              </caption>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/postgresqlLogo.jpg"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">
                PostgreSQL
              </caption>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center h-32 w-32 bg-white rounded-md">
              <Image
                width={55}
                height={55}
                src={"/images/convexLogo.png"}
                alt={"android"}
              />
              <caption className="text-xs italic text-gray-400">Convex</caption>
            </div>
          </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default FourthSection;

"use client";
import VideoBackground from "@/components/video-background";
import { fonts, raleway } from "@/app/layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { MutableRefObject, useRef } from "react";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import SecondSection from "./second-section";
import Link from "next/link";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const slickItems = [
  {
    title: "Realizamos Consultoria Informática",
    video: "/videos/consulting.mp4",
  },
  {
    title: "Desenvolvemos Aplicativos Móveis - Android e iOS",
    video: "/videos/mobile-dev.mp4",
  },
  {
    title: "Desenvolvemos Aplicativos Web",
    video: "/videos/web-dev.mp4",
  },
  // {
  //   title: "Flutter",
  //   image: "/images/flutterLogo.png",
  // },
  // {
  //   title: "ReactJS",
  //   image: "/images/reactNativeLogo.png",
  // },
  // {
  //   title: "NextJS",
  //   image: "/images/nextJsLogo.png",
  // },
  // {
  //   title: "TypeScript",
  //   image: "/images/typescriptLogo.png",
  // },
  // {
  //   title: "NodeJs",
  //   image: "/images/nodeJsLogo.png",
  // },
  // {
  //   title: "TypeScript",
  //   image: "/images/mongoDbLogo.png",
  // },
  // {
  //   title: "TypeScript",
  //   image: "/images/postgreSqlLogo.jpg",
  // },
  // {
  //   title: "TypeScript",
  //   image: "/images/convexLogo.png",
  // },
];

const marqueeImages = [
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

const FirstSection = (props: Props) => {
  // let sliderRef = useRef(null);
  return (
    <section>
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-10">

      <div className="w-full flex flex-col justify-center items-center  ">
        {/* <p className="text-[16px] text-sky-500 mb-6">
          A sua Estratégia de Mobilidade Digital.
        </p> */}

        <div className="w-[200px] h-1 bg-yellow-500 my-2" />
        <h1
          className={cn(
            "text-3xl lg:text-5xl font-bold text-sky-900 text-center"
            // raleway.className
          )}
        >
          Programadores Altamente Qualificados{" "}
          <span className="text-lg lg:text-xl font-normal">estão aqui!</span>
        </h1>
        <div className="py-6">
          {/* <ul className="flex flex-col  gap-2 text-[18px] text-justify">
            <li className="">
              <div className="flex gap-2 items-center">
                <ArrowRight className="w-4 h-4 text-sky-500" />
                <p>
                  Precisa de{" "}
                  <span className="font-bold text-sky-500 it">
                    informatizar
                  </span>{" "}
                  o modelo de seu{" "}
                  <span className="font-bold text-sky-500 it">negócio</span>?
                </p>
              </div>
            </li>
            <li className="">
              <div className="flex gap-2 items-center">
                <ArrowRight className="w-4 h-4 text-sky-500" />
                <p>
                  Pensa em criar uma{" "}
                  <span className="font-bold text-sky-500 it">
                    presença online
                  </span>{" "}
                  para a sua empresa?
                </p>
              </div>
            </li>

            <li className="">
              <div className="flex gap-2 items-center">
                <ArrowRight className="w-4 h-4 text-sky-500" />
                <p>
                  Precisa de um{" "}
                  <span className="font-bold text-sky-500 it">programador</span>{" "}
                  para um projecto de Tecnologia de Informação?
                </p>
              </div>
            </li>

            <li className="gap-2">
              <div className="flex gap-2 items-center">
                <ArrowRight className="w-4 h-4 text-sky-500" />
                <p>
                  Precisa de uma{" "}
                  <span className="font-bold text-sky-500 it">
                    consultoria informática
                  </span>{" "}
                  para o seu negócio?
                </p>
              </div>
            </li>

            <li className="">
              <div className="flex gap-2 items-center">
                <ArrowRight className="w-4 h-4 text-sky-500" />
                <p>
                  Precisa de um{" "}
                  <span className="font-bold text-sky-500 it">
                    mentor, tutor ou consultor
                  </span>{" "}
                  para orientar-lhe num projecto informático?
                </p>
              </div>
            </li>
          </ul> */}
          <p className="text-[20px] font-semibold text-center">
            Tem algum projecto informático em mente?
          </p>
          <p className="lg:text-[20px] font-semibold text-center">
            Nós podemos ajudar!
          </p>
          <p className="lg:text-[16px] text-gray-600 font-semibold text-center">
            Com a <span className="font-bold">TECMOZA</span>, pagará menos por
            uma solução de alta qualidade.
          </p>
        </div>
        <Link href={"/contact-us"} >
        <Button size={"sm"} variant={"outline2"} className="gap-2 py-6">
          Contacte-Nos <ArrowRight className="w-4 h-4 text-sky-500" />
        </Button>
        </Link>
        <div className="w-[200px] h-1 bg-yellow-500 my-2" />

      </div>
     
        <Slider
          // ref={(slider) => (sliderRef = slider)}
          {...settings}
          className=" w-full h-full"
        >
          {slickItems.map((item, index) => (
            <div key={index} className="relative rounded-md w-full h-full">
              <video
                // ref={videoRef}
                autoPlay
                muted
                loop
                className="  rounded-md aspect-square object-cover"
              >
                <source src={item.video} type="video/mp4" />
              </video>
              <div className="absolute top-10 left-10 z-40 ">
              <p className="text-2xl lg:text-4xl font-semibold italic text-gray-200 py-6 px-12">{item.title}</p>

              </div>

            </div>
          ))}
        </Slider>
      </div>
      <div className="my-12 ">
          <h2 className="text-xl font-semibold text-gray-500">Já trabalhamos aqui...</h2>
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
    </section>
  );
};

export default FirstSection;

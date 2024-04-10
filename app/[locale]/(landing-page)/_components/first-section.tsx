"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OurClientSection from "@/our-clients-section";
import { Button } from "@/ui/button";

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
    title: "Desenvolvemos Aplicativos Móveis para Android e iOS",
    video: "/videos/mobile-dev.mp4",
  },
  {
    title: "Desenvolvemos Aplicativos Web e Windows",
    video: "/videos/web-dev.mp4",
  },

  {
    title: "Realizamos Consultoria Informática",
    video: "/videos/consulting.mp4",
  },
  {
    title: "Realizamos Mentoria e Treinamento Digitais",
    video: "/videos/mentoring.mp4",
  },
];

type Props = {};

const FirstSection = (props: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          ref={ref}
          initial={{ x: -100 }}
          animate={{ x: inView ? 0 : -100 }}
          transition={{ duration: 2.5, delay: 0 }}
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="w-[200px] h-1 bg-yellow-500 my-2" />
          <h1 className="text-3xl lg:text-5xl font-bold text-sky-900 text-center">
            Programadores Altamente Qualificados{" "}
            <span className="text-lg lg:text-xl font-normal text-center">
              estão aqui!
            </span>
          </h1>
          <div className="py-6">
            <p className="text-[20px] font-semibold text-center">
              Tem algum projecto informático em mente?
            </p>
            <p className="lg:text-[20px] font-semibold text-center">
              Nós podemos ajudar!
            </p>
            <p className="lg:text-[16px] text-gray-600 font-semibold text-center">
              Com a TECMOZA, terá uma solução digital de alta qualidade a preço
              competitivo.
            </p>
          </div>
          <Link href={"/contact-us"}>
            <Button size={"sm"} variant={"outline2"} className="gap-2 py-6">
              Contacte-Nos <ArrowRight className="w-4 h-4 text-sky-500" />
            </Button>
          </Link>
          <div className="w-[200px] h-1 bg-yellow-500 my-2" />
        </motion.div>

        <Slider {...settings} className=" w-full h-full">
          {slickItems.map((item, index) => (
            <div key={index} className="relative rounded-md w-full h-full">
              <video
                autoPlay
                muted
                loop
                className="  rounded-md aspect-square object-cover"
              >
                <source src={item.video} type="video/mp4" />
              </video>
              <div className="absolute top-10 left-4 z-40 ">
                <p className="text-2xl lg:text-4xl font-bold italic text-sky-900 py-6 px-12">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <OurClientSection />
    </section>
  );
};

export default FirstSection;

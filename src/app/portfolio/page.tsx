"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProjectsSection from "./_components/projects-section";

type Props = {};

const PortfolioPage = (props: Props) => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const imageWidth = 1920;
  const imageHeight = 1080;


  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight((window.innerHeight));
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
     
      <div className="relative w-screen h-screen ">
        <Image
          src={"/images/portfolio/bg.png"}
          alt="portfolio background"
          width={imageWidth}
          height={imageHeight}
          className=" opacity-10 "
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full">

        <div className=" flex flex-col h-full  items-center justify-center gap-10 px-6 lg:px-24 ">
          <h1 className="text-3xl lg:text-5xl font-bold text-sky-900">
            Estudos de Casos
          </h1>
          <p className="text-2xl max-w-[800px] text-center font-semibold text-black">
            Acreditamos que os grandes produtos não acontecem sem paixão,
            inteligência e empenho pessoal, e isso é demonstrado pelo nosso
            portfolio que abrange diferentes clientes, indústrias e
            públicos-alvo.
          </p>
        </div>
        </div>
      </div>

   

   
      <div className="bg-white  py-6">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default PortfolioPage;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProjectsSection from "./_components/projects-section";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

const PortfolioPage = (props: Props) => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const imageWidth = 1920;
  const imageHeight = 1080;
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className=" flex flex-col h-full  items-center justify-center gap-10 px-6 lg:px-24 ">
            <h1 className="text-3xl lg:text-5xl font-bold text-sky-900 dark:text-white">
              Alguns Casos De Trabalhos Já Realizados
            </h1>
            <p className="text-2xl max-w-[800px] text-center font-semibold text-black dark:text-gray-400">
              Acreditamos que os grandes produtos não acontecem sem paixão,
              inteligência e empenho pessoal, e isso é demonstrado pelo nosso
              portfolio que destaca alguns casos de trabalhos já realizados.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="bg-white dark:bg-black  py-6">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default PortfolioPage;

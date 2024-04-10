"use client";
import { motion } from "framer-motion";
import { GoalIcon, Milestone } from "lucide-react";
import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

const VisionSection = (props: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="text-[18px]"
    >
      <h1 className="text-xl lg:text-3xl font-bold text-black">
        {/* <div className="w-[75px] h-1 bg-yellow-500 my-4" /> */}
        Em Que Acreditamos
      </h1>
      <div className="w-[75px] h-1 bg-yellow-500 my-4" />

      <div className="flex flex-col md:flex-row gap-6 ">
        <div className="flex flex-col justify-center  md:w-1/2 bg-white dark:bg-black p-4">
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-sky-500 rounded-full w-fit h-fit justify-center items-center">
              <GoalIcon className="w-8 h-8  text-white " />
            </div>
            <h1 className="text-lg lg:text-xl font-bold text-sky-900">
              A Nossa Visão
            </h1>
          </div>
          <div className="">
         
            <p className="sm:text-[14px] lg:text-[16px] text-justify text-gray-500 py-4">
              Tornar a TECMOZA o <b>líder</b> em <b>soluções tecnológicas</b>{" "}
              inovadoras em Moçambique, impulsionando a{" "}
              <b>transformação digital</b> e contribuindo para o{" "}
              <b>desenvolvimento sustentável</b> do país.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center md:w-1/2 p-4">
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-sky-500 rounded-full w-fit h-fit justify-center items-center">
              <Milestone className="w-8 h-8  text-white " />
            </div>
            <h1 className="text-lg lg:text-xl font-bold text-sky-900">
              A Nossa Missão
            </h1>
          </div>

          <div>
            <p className="sm:text-[14px] lg:text-[16px] text-justify text-gray-500 py-4">
            &rarr;
              Oferecer soluções digitais de excelência, personalizadas às
              necessidades de nossos clientes, através de uma equipe altamente
              capacitada e comprometida com a inovação contínua.
            </p>

            <p className="sm:text-[14px] lg:text-[16px] text-justify text-gray-500 py-4">
            &rarr;
              Capacitar indivíduos e organizações a aproveitarem todo o
              potencial da tecnologia para alcançarem seus objetivos e crescerem
              em um ambiente digital em constante evolução.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VisionSection;

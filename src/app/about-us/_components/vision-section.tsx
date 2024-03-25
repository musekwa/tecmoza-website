"use client"
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
      className="flex flex-col md:flex-col gap-4 items-center text-[18px]"
    >
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="p-3 bg-sky-500 rounded-full">
            <GoalIcon className="w-12 h-12  text-white " />
          </div>
          <h1 className="text-xl lg:text-3xl font-bold text-sky-500">
            A Nossa Visão
          </h1>
          <div className="w-[75px] h-1 bg-yellow-500 my-4" />
        </div>
        <div className="w-full mx-auto bg-white rounded-full shadow-md">
          <p className="sm:text-[14px] lg:text-[18px] text-sky-900 lg:tracking-wider text-center lg:leading-8 p-4">
            Tornar a TECMOZA o <b>líder</b> em <b>soluções tecnológicas</b>{" "}
            inovadoras em Moçambique, impulsionando a{" "}
            <b>transformação digital</b> e contribuindo para o{" "}
            <b>desenvolvimento sustentável</b> do país.
          </p>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex flex-col justify-center items-center">
          <div className="p-3 bg-sky-500 rounded-full">
            <Milestone className="w-12 h-12  text-white " />
          </div>
          <h1 className="text-xl lg:text-3xl font-bold text-sky-500">
            A Nossa Missão
          </h1>
          <div className="w-[75px] h-1 bg-yellow-500 my-4" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="w-full mx-auto  rounded-sm shadow-md">
            <p className="text-[18px] text-sky-900 tracking-wider text-justify leading-8 p-4">
              Oferecer soluções digitais de excelência, personalizadas às
              necessidades de nossos clientes, através de uma equipe altamente
              capacitada e comprometida com a inovação contínua.
            </p>
          </div>

          <div className="w-full mx-auto   rounded-sm shadow-md">
            <p className="text-[18px] text-sky-900 tracking-wider text-justify leading-8 p-4">
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

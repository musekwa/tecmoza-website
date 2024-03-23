"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaAndroid, FaLaptop } from "react-icons/fa";
import {
  FaComputer,
  FaListCheck,
  FaMobileScreen,
  FaPhone,
} from "react-icons/fa6";
import { motion } from "framer-motion";

type Props = {};

const ThirdSection = (props: Props) => {
  return (
    <section className="py-12">
      <div className="flex flex-col">
        <h1 className="text-xl lg:text-3xl font-bold">
          Nossos Serviços
        </h1>
        <div className="w-[75px] h-1 bg-yellow-500 my-4" />
        <p className="text-sm lg:text-[16px] lg:tracking-wide ">
          A nossa equipa possui experiência em cumprir os objectivos pretendidos
          e moldar as ideias de acordo com a demanda do mercado.
        </p>
      </div>
      <motion.div 
            
      className="flex flex-col justify-center items-center md:flex-row  md:justify-between  gap-4 py-8">
        <div className="relative bg-white rounded-md w-[300px] h-[400px] p-2">
          <FaMobileScreen size={50} className="text-sky-900" />
          <h1 className="text-xl md:text-2xl py-4 text-sky-900 font-bold">
            Aplicativos Móveis
            <br />
            <span className="text-sm italic text-black font-normal">
              Desenvolvimento
            </span>
          </h1>

          <p className="text-justify text-sm leading-6 ">Desenvolvemos aplicativos móveis robustos, mas fáceis de usuar, 
          com interfaces de usuários cativantes, com base na tecnolgia moderna. <br />Os requisitos de negócio do nosso cliente determinam as funcionalidades que Desenvolvemos.</p>
        
          
            <div className="absolute bottom-0 right-0 bg-sky-500 hover:bg-sky-600 p-1 rounded-br-md rounded-tl-md cursor-pointer hover:animate-pulse hover:scale-110 transition-all duration-300 text-white ">
              <Link href={"/services/mobile"} className="">
              <div className="flex gap-2 text-xs items-center">
              
              Saiba mais 
                <ArrowRight className="text-white w-6 h-6" />
                
              </div>
              </Link>
          </div>
        </div>

        <div className="relative bg-white rounded-md w-[300px] h-[400px] cursor-pointer p-2">
          <FaLaptop size={50} className="text-sky-900" />
          <h1 className="text-xl md:text-2xl py-4 text-sky-900 font-bold">
          Aplicativos Web
            <br />
            <span className="text-sm italic text-black font-normal">
              Desenvolvimento
            </span>
          </h1>

          <p className="text-justify text-sm leading-6 ">
          Ajudamos empresas e pessoas singulares a criarem uma presenca no mundo digital por meio de páginas web empoderadas com a inteligência artificial. 
          </p>
        
          
          <div className="absolute bottom-0 right-0 bg-sky-500 hover:bg-sky-600 p-1 rounded-br-md rounded-tl-md cursor-pointer hover:animate-pulse hover:scale-110 transition-all duration-300 text-white ">
              <Link href={"/services/web"} className="">
              <div className="flex gap-2 text-xs items-center">
              
              Saiba mais 
                <ArrowRight className="text-white w-6 h-6" />
                
              </div>
              </Link>
          </div>
        </div>
        <div className="relative bg-white rounded-md w-[300px] h-[400px] cursor-pointer  p-2">
        <FaListCheck size={50} className="text-sky-900" />
          <h1 className="text-xl md:text-2xl py-4 text-sky-900 font-bold">
            Consultoria Informática
            <br />
            <span className="text-sm italic text-black font-normal">
              Consultoria
            </span>
          </h1>

          <p className="text-justify text-sm leading-6 ">Desenhamos e implementamos estratégias de transitão digital para as empresas,
          prestando-lhes o nosso apoio, desde a fase de concepção até à entrega final do produto. 
          </p>
        
          
          <div className="absolute bottom-0 right-0 bg-sky-500 hover:bg-sky-600 p-1 rounded-br-md rounded-tl-md cursor-pointer hover:animate-pulse hover:scale-110 transition-all duration-300 text-white ">
              <Link href={"/services/consulting"} className="">
              <div className="flex gap-2 text-xs items-center">
              
              Saiba mais 
                <ArrowRight className="text-white w-6 h-6" />
                
              </div>
              </Link>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default ThirdSection;

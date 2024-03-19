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

type Props = {};

const ThirdSection = (props: Props) => {
  return (
    <section className="py-12">
      <div className="flex flex-col">
        <h1 className="text-xl lg:text-3xl font-bold">
          Contrate Um dos Melhores Programadores de Moçambique
        </h1>
        <div className="w-[75px] h-1 bg-yellow-500 my-4" />
        <p className="text-sm lg:text-[16px] lg:tracking-wide ">
          A nossa equipa possui experiência em cumprir os objectivos pretendidos
          e moldar as ideias de acordo com a demanda do mercado.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row  md:justify-between  gap-4 py-8">
        <div className="relative bg-white rounded-md w-[300px] h-[400px] cursor-pointer hover:bg-sky-200 hover:scale-90 transition-all duration-300 p-2">
          <FaMobileScreen size={50} className="text-sky-900" />
          <h1 className="text-xl md:text-2xl py-4 text-sky-900 font-bold">
            Aplicativos Móveis
            <br />
            <span className="text-sm italic text-black font-normal">
              Desenvolvimento
            </span>
          </h1>

          <p className="text-justify text-sm leading-6 ">Nossos serviços de desenvolvimento de aplicativos móveis ajudam na digitalização do modelo de negócio da sua empresa, o que, por sua vez, reduz os custos de produção e aumenta a rentabilidade</p>
        
          
            <div className="absolute bottom-0 right-0 bg-sky-500 hover:bg-sky-600 p-1 rounded-br-md cursor-pointer ">
              <Link href={"/"} className="">
                <ArrowRight className="text-white w-6 h-6" />
              </Link>
          </div>
        </div>

        <div className="relative bg-white rounded-md w-[300px] h-[400px] cursor-pointer hover:bg-sky-200 hover:scale-90 transition-all duration-300 p-2">
          <FaLaptop size={50} className="text-sky-900" />
          <h1 className="text-xl md:text-2xl py-4 text-sky-900 font-bold">
          Aplicativos Web
            <br />
            <span className="text-sm italic text-black font-normal">
              Desenvolvimento
            </span>
          </h1>

          <p className="text-justify text-sm leading-6 ">
          Nossos aplicativos web são responsivos e incorporam animações elegantes. Projetamos uma arquitectura de informação que proporciona uma experiência de usuário excepcional, independentemente do dispositivo utilizado.
          </p>
        
          
            <div className="absolute bottom-0 right-0 bg-sky-500 hover:bg-sky-600 p-1 rounded-br-md cursor-pointer ">
              <Link href={"/"} className="">
                <ArrowRight className="text-white w-6 h-6" />
              </Link>
          </div>
        </div>
        <div className="relative bg-white rounded-md w-[300px] h-[400px] cursor-pointer hover:bg-sky-200 hover:scale-90 transition-all duration-300 p-2">
        <FaListCheck size={50} className="text-sky-900" />
          <h1 className="text-xl md:text-2xl py-4 text-sky-900 font-bold">
            Consultoria Informática
            <br />
            <span className="text-sm italic text-black font-normal">
              Consultoria
            </span>
          </h1>

          <p className="text-justify text-sm leading-6 ">Nossa consultoria de informática oferece soluções especializadas para empresas. Combinamos expertise técnica com uma abordagem estratégica. Ajudamos a otimizar sistemas, implementar segurança cibernética e alinhar a TI aos objetivos de negócios.</p>
        
          
            <div className="absolute bottom-0 right-0 bg-sky-500 hover:bg-sky-600 p-1 rounded-br-md cursor-pointer ">
              <Link href={"/"} className="">
                <ArrowRight className="text-white w-6 h-6" />
              </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThirdSection;

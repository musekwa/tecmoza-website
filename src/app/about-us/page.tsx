import GetInTouch from "@/components/get-in-touch";
import VideoBackground from "@/components/video-background";
import { CupSodaIcon, HandshakeIcon, Trophy } from "lucide-react";
import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className=" py-6 h-full w-full">

      <div className="p-6 lg:px-24 mt-6  bg-white">
        <h1 className="text-xl lg:text-3xl font-bold pb-3">Quem Somos?</h1>
        <div className="w-[75px] h-1 bg-yellow-500 my-4" />

        <div className="flex flex-row gap-8">
          <div className="w-full">
            <p className="text-[16px] tracking-wide text-justify leading-6 py-2">
            Como empresa líder no desenvolvimento de aplicações móveis e web
              em Moçambique, oferecemos serviços de informatização de modelos de
              negócios em Moçambique. As soluções de tecnologia da TECMOZA
              impulsionam o desenvolvimento de negócios dos nossos clientes. A
              partir de Moçambique, trabalhamos remotamente ou localmente, para 
              dotar os nossos clientes com soluções digitais inovadoras, eficazes e de alto desempenho.
            </p>

            <p className="text-[16px] tracking-wide text-justify leading-6 py-2">
              A nossa base de clientes envolve clientes a nível nacional e
              global. Estes investem nas nossas soluções tecnológicas de ponta e
              sofisticadas para realizar operações comerciais com resultados
              desejáveis. Fornecemos soluções digitais personalizadas para
              minimizar a latência na execução de suas tarefas empresariais.
            </p>
          </div>

          <div className="hidden sm:block w-full md:relative">
            <video
              // ref={}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-lg"
            >
              <source src="/videos/team.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-4 left-4">
              <h1 className="text-sky-500 text-4xl font-bold ">TECMOZA</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:px-24 ">
        <h1 className="text-xl lg:text-3xl font-bold">Visão e Missão</h1>
        <div className="w-[75px] h-1 bg-yellow-500 my-4" />
        <div className="max-w-screen-sm ">
          <p className="text-[16px] tracking-wide text-justify leading-6 py-2">
            Oferecer aos nossos clientes os produtos digitais que resolvam os
            problemas de seu negócio.
          </p>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-8 mt-6">
          {/* ------------------- */}

          <div className="flex flex-col gap-5 bg-white p-6 w-full rounded-md hover:scale-105 transition-all duration-300">
            <div className=" p-6 w-[80px] h-[80px] bg-sky-900 rounded-sm text-center animate-slide-top-down duration-500 delay-700">
              <div className="w-full h-full flex jc items-center  ">
                <HandshakeIcon className="text-white w-12 h-12" />
              </div>
            </div>
            <h1 className="text-xl font-bold pb-3 text-sky-900">
              Relacionamento
            </h1>
            <p className="text-justify text-[16px]">
              Na TECMOZA, investimos o nosso tempo e esforço para fortalecer os
              relacionamentos e fidelidade dos nossos clientes. Estamos
              comprometidos com a qualidade dos serviços que oferecemos.
            </p>
          </div>

          {/* ------------------- */}

          <div className="flex flex-col gap-5 bg-white p-6 w-full rounded-md hover:scale-105 transition-all duration-300">
            <div className=" p-6 w-[80px] h-[80px] bg-sky-900 rounded-sm text-center animate-slide-top-down duration-500 delay-700">
              <div className="w-full h-full flex jc items-center">
                <Trophy className="text-white w-12 h-12" />
              </div>
            </div>
            <h1 className="text-xl font-bold pb-3 text-sky-900">
              Excelência no Trabalho
            </h1>
            <p className="text-justify text-[16px]">
              Sejam quais forem os requisitos de seu negócio, nós, na TECMOZA,
              trabalhamos incansavelmente para aprimorar o seu produto e
              serviço. Temos sempre uma atitude positiva diante dos desafios.
            </p>
          </div>

          {/* ------------------- */}

          <div className="flex flex-col gap-5 bg-white p-6  w-full rounded-md hover:scale-105 transition-all duration-300">
            <div className=" p-6 w-[80px] h-[80px] bg-sky-900 rounded-sm text-center animate-slide-top-down duration-500 delay-700">
              <div className="w-full h-full flex jc items-center">
                <FaPeopleGroup className="text-white w-12 h-12" />
              </div>
            </div>
            <h1 className="text-xl font-bold pb-3 text-sky-900">
              Espírito de Equipe
            </h1>
            <p className="text-justify text-[16px]">
              Uma força de trabalho empenhada e motivada é o que impulsiona o
              resultado final do negócio. A nossa experiência e os nossos
              programadores qualificados tomam isto como o seu lema para manter
              uma moral mais elevada e um desempenho superior com maior
              produtividade.
            </p>
          </div>
          {/* ------------------- */}
        </div>
      </div>
      <GetInTouch />
    </div>
  );
};

export default AboutPage;

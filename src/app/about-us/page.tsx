import GetInTouch from "@/components/get-in-touch";
import VideoBackground from "@/components/video-background";
import {
  ArrowRight,
  CupSodaIcon,
  FlagIcon,
  GoalIcon,
  HandshakeIcon,
  Milestone,
  Trophy,
  UserRoundPlus,
} from "lucide-react";
import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import AboutHeroSection from "./about-hero-section";
import OurValues from "./our-values";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <AboutHeroSection />
      <div className=" py-6 h-full w-full">
        <div className="p-6 lg:px-24 mt-6  bg-white">
          <h1 className="text-xl lg:text-3xl font-bold pb-3">Quem Somos?</h1>
          <div className="w-[75px] h-1 bg-yellow-500 my-4" />

          <div className="flex flex-row gap-8">
            <div className="w-full text-[18px] ">
              <p className="tracking-wide text-justify leading-6 py-2">
                A <b>Tecmoza</b> é uma empresa de tecnologia da informação
                sediada em Maputo, Moçambique, constituída por uma equipe de
                especialistas apaixonados por oferecer soluções inovadoras e
                personalizadas.
                <br />
                Desde a nossa fundação, temos nos empenhado em impulsionar a
                transformação digital de empresas e indivíduos em todo o país.
                <br />
                Formamos uma equipe multidisciplinar de especialistas que atua
                nas seguintes áreas de tecnologia:
              </p>
              <ol className="list-decimal pl-8 flex flex-col gap-3 pb-3">
                <li>
                  <span className="ml-2">
                    Desenvolvimento de Aplicativos Móveis - Android e iOS
                  </span>
                </li>
                <li>
                  <span className="ml-2">
                    Desenvolvimento de Aplicativos Web e Windows
                  </span>
                </li>
                <li>
                  <span className="ml-2">Consultoria Informática</span>
                </li>
                <li>
                  <span className="ml-2">Treinamento e Mentoria Digitais</span>
                </li>
              </ol>
              <p>
                Com expertise em diversas plataformas e linguagens de
                programação, garantimos soluções tecnológicas eficientes,
                escaláveis e seguras.
              </p>
              <p>
                Além do desenvolvimento de software, oferecemos consultoria em
                Tecnologia de Informação, auxiliando organizações a otimizarem
                seus processos de negócios por meio da implementação de
                estratégias e tecnologias avançadas.
                <br />
                Nossa equipe experiente trabalha em estreita colaboração com os
                clientes para compreender seus desafios e fornecer recomendações
                estratégicas.
              </p>
              <p>
                Acreditamos que a educação é fundamental para o progresso
                tecnológico. Por isso, oferecemos programas de treinamento e
                mentoria digital, capacitando usuários, profissionais e
                estudantes a adquirirem habilidades valiosas em áreas como
                literacia digital, programação, design de software, etc.
              </p>
              <p>
                Na Tecmoza, estamos comprometidos em fornecer serviços de
                qualidade superior, pautados pela excelência técnica e o
                atendimento personalizado. Nossa abordagem inovadora, aliada à
                expertise de nossa equipe, nos torna parceiros confiáveis para
                impulsionar o sucesso digital de nossos clientes em Moçambique e
                além.
              </p>
            </div>

            <div className="hidden md:block w-full md:relative">
              <video
                // ref={}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover rounded-lg"
              >
                <source src="/videos/team.mp4" type="video/mp4" />
              </video>
              {/* <div className="absolute top-4 left-4">
              <h1 className="text-sky-500 text-4xl font-bold ">TECMOZA</h1>
            </div> */}
            </div>
          </div>
        </div>

        <div className="p-6 lg:px-24 ">
          {/* <h1 className="text-xl lg:text-3xl font-bold">Visão e Missão</h1> */}
          {/* <div className="w-[75px] h-1 bg-yellow-500 my-4" /> */}

          <div className="flex flex-col md:flex-col gap-4 items-center text-[18px]">
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
                  Tornar-se <b>líder</b> em <b>soluções tecnológicas</b>{" "}
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
                    necessidades de nossos clientes, através de uma equipe
                    altamente capacitada e comprometida com a inovação contínua.
                  </p>
                </div>

                <div className="w-full mx-auto   rounded-sm shadow-md">
                  <p className="text-[18px] text-sky-900 tracking-wider text-justify leading-8 p-4">
                    Capacitar indivíduos e organizações a aproveitarem todo o
                    potencial da tecnologia para alcançarem seus objetivos e
                    crescerem em um ambiente digital em constante evolução.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="my-6">
            <div className="flex flex-col justify-center items-center">
              <div className="p-3 bg-sky-500 rounded-full">
                <FlagIcon className="w-12 h-12  text-white " />
              </div>
              <h1 className="text-xl lg:text-3xl font-bold text-sky-500">
                Os Nossos Valores
              </h1>
              <div className="w-[75px] h-1 bg-yellow-500 my-4" />
            </div>
            <OurValues />
          </div>


        </div>
        <GetInTouch />
      </div>
    </>
  );
};

export default AboutPage;

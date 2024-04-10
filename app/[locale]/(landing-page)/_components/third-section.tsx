"use client";
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
  FaTeamspeak,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    serviceName: "Desenvolvimento - Android e iOS",
    icon: <FaMobileScreen size={30} />,
    href: "/services/mobile",
    descriprion:
      "Desenvolvemos aplicativos móveis robustos, cativantes, fáceis de usuar, com base na tecnolgia moderna. Os requisitos de negócio do nosso cliente determinam a escolha de tecnologia que usamos.",
  },
  {
    serviceName: "Desenvolvimento - Web e Windows",
    icon: <FaLaptop size={30} />,
    href: "/services/web",
    descriprion:
      "Empoderamos empresas e indivíduos singulares com aplicacões baseadas na tecnologia Web que, além de uma presença no mundo virtual, dota-lhes com um sistema de apoio à decisão que permite tomar decisões informadas.",
  },
  {
    serviceName: "Consultoria - Consultoria da TI",
    icon: <FaListCheck size={30} />,
    href: "/services/consulting",
    descriprion:
      "Desenhamos e implementamos estratégias de transição digital e informatização de modelos de negócio para as empresas, prestando-lhes o nosso apoio antes, durante e depois da implementação.",
  },

  {
    serviceName: "Treinamento - Treinamento Digital",
    icon: <FaTeamspeak size={30} />,
    href: "/services/consulting",
    descriprion:
      "Ajudamos empresas e pessoas singulares a aumentarem a sua literacia digital por meio de mentoria e treinamento acelerados e orientados a suas necessidades.",
  },
];

type Props = {};

const ThirdSection = (props: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <section className="py-12" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="flex flex-col"
      >
        <h1 className="text-xl lg:text-3xl font-bold">Nossos Serviços</h1>
        <div className="w-[75px] h-1 bg-yellow-500 my-4" />
        <p className="text-sm lg:text-[16px] lg:tracking-wide ">
          A nossa equipa possui experiência em cumprir os objectivos pretendidos
          e moldar as ideias de acordo com a demanda do mercado.
        </p>
      </motion.div>

      <div className=" flex flex-col sm:grid sm:grid-cols-2  xl:grid-cols-4 justify-center items-center justify-items-center gap-8 py-8 ">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.5 }}
            //

            className="relative bg-white dark:bg-gray-900 rounded-md w-[300px] h-[400px] p-2"
          >
            <div className="border-2 bg-sky-500 p-4 w-fit rounded-full text-white">
              {service.icon}
            </div>
            <h1 className="text-xl md:text-2xl py-4 text-sky-900 font-bold">
              {service.serviceName.slice(
                service.serviceName.split(" ")[0].length
              )}
              <br />
              <span className="text-sm italic text-black dark:text-gray-600 font-normal">
                {service.serviceName.split(" ")[0]}
              </span>
            </h1>

            <p className="text-justify text-sm leading-6 text-gray-600">
              {service.descriprion}
            </p>

            <div className="absolute bottom-0 right-0 bg-sky-500 hover:bg-sky-600 p-1 rounded-br-md rounded-tl-md cursor-pointer hover:animate-pulse hover:scale-110 transition-all duration-300 text-white ">
              <Link href={"/services"} className="">
                <div className="flex gap-2 text-xs items-center">
                  Saiba mais
                  <ArrowRight className="text-white w-6 h-6" />
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;

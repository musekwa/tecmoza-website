"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FlagIcon, Highlighter, School2Icon, Tally5 } from "lucide-react";
import { FaBuysellads, FaPeopleCarryBox, FaTeamspeak } from "react-icons/fa6";
import { FaStickerMule, FaStickyNote } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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

const ourValues = [
  {
    value: "Inovação",
    description:
      "Buscamos constantemente soluções criativas e de vanguarda para atender às demandas em constante mudança de nossos clientes",
    icon: <Highlighter size={30} />,
  },
  {
    value: "Excelência",
    description:
      "Comprometemo-nos a entregar produtos e serviços de alta qualidade, superando as expectativas dos clientes",
    icon: <Highlighter size={30} />,
  },
  {
    value: "Integridade",
    description:
      "Valorizamos a ética, a transparência e a responsabilidade em todas as nossas ações e relacionamentos",
    icon: <Highlighter size={30} />,
  },
  {
    value: "Colaboração",
    description:
      "Acreditamos na força do trabalho em equipe e na construção de parcerias sólidas com nossos clientes e comunidade",
    icon: <Tally5 size={30} />,
  },
  {
    value: "Aprendizado Contínuo",
    description:
      "Incentivamos o desenvolvimento profissional e pessoal de nossa equipe, promovendo um ambiente de crescimento e compartilhamento de conhecimento",
    icon: <School2Icon size={30} />,
  },
  {
    value: "Impacto Social",
    description:
      "Buscamos criar soluções tecnológicas que gerem impacto positivo na sociedade e contribuam para o desenvolvimento sustentável de Moçambique",
    icon: <FaPeopleCarryBox size={30} />,
  },
  {
    value: "Orientação para o Cliente",
    description:
      "Colocamos as necessidades e a satisfação de nossos clientes como prioridade, fornecendo atendimento personalizado e soluções sob medida",
    icon: <FaStickyNote size={30} />,
  },
];

type Props = {};

const OurValuesSection = (props: Props) => {
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
    >
      <div className="flex flex-col justify-center items-center">
        <div className="p-3 bg-sky-500 rounded-full">
          <FlagIcon className="w-12 h-12  text-white " />
        </div>
        <h1 className="text-xl lg:text-3xl font-bold text-sky-500">
          Os Nossos Valores
        </h1>
        <div className="w-[75px] h-1 bg-yellow-500 my-4" />
      </div>
      <div className="flex flex-col justify-between">
        <Slider {...settings}>
          {ourValues.map((item, index) => (
            <div key={index} className="">
              <div className="flex justify-center items-center my-2 ">
                <div className="p-4 rounded-full bg-sky-900 text-white">
                  {item.icon}
                </div>
              </div>
              <div className="w-full flex flex-col ">
                <div className="bg-sky-900 p-2">
                  <h1 className="text-center text-white text-[18px] font-semibold">
                    {item.value}
                  </h1>
                </div>
                <div className="p-3 mt-2">
                  <p className="text-[13px] text-justify  text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default OurValuesSection;
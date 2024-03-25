"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

const AboutDescriptionSection = (props: Props) => {
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
      className="p-6 lg:px-24  "
    >
      <h1 className="text-xl lg:text-3xl font-bold pb-3">Quem Somos?</h1>
      <div className="w-[75px] h-1 bg-yellow-500 my-4" />

      <div className="flex flex-row gap-8">
        <div className="w-full text-[18px] ">
          <p className="tracking-wide text-justify leading-6 py-2">
            A <b>Tecmoza</b> é uma empresa de tecnologia da informação sediada
            em Maputo, Moçambique e constituída por uma equipe ágil de
            especialistas apaixonados por oferecer soluções inovadoras e
            personalizadas.
            <br />
            Desde a nossa fundação, temos nos empenhado em impulsionar a
            transformação digital de empresas e indivíduos em todo o país.
            <br />
            Formamos uma equipe multidisciplinar de especialistas que atua nas
            seguintes áreas de tecnologia:
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
            Com expertise em diversas plataformas e linguagens de programação,
            garantimos soluções tecnológicas eficientes, escaláveis e seguras.
          </p>
          <p>
            Além do desenvolvimento de software, oferecemos consultoria em
            Tecnologia de Informação, auxiliando organizações a otimizarem seus
            processos de negócios por meio da implementação de estratégias e
            tecnologias avançadas.
            <br />
            Nossa equipe experiente trabalha em estreita colaboração com os
            clientes para compreender seus desafios e fornecer recomendações
            estratégicas.
          </p>
          <p>
            Acreditamos que a educação é fundamental para o progresso
            tecnológico. Por isso, oferecemos programas de treinamento e
            mentoria digital, capacitando usuários, profissionais e estudantes a
            adquirirem habilidades valiosas em áreas como literacia digital,
            programação, design de software, etc.
          </p>
          <p>
            Na Tecmoza, estamos comprometidos em fornecer serviços de qualidade
            superior, pautados pela excelência técnica e o atendimento
            personalizado. Nossa abordagem inovadora, aliada à expertise de
            nossa equipe, nos torna parceiros confiáveis para impulsionar o
            sucesso digital de nossos clientes em Moçambique e além.
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
        </div>
      </div>
    </motion.div>
  );
};

export default AboutDescriptionSection;
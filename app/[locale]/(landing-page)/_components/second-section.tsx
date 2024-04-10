"use client";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Handshake,
  Smile,
  TabletSmartphone,
  User2Icon,
  Users2,
} from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

type Props = {};

const SecondSection = (props: Props) => {
  const { ref, inView, entry } = useInView({ threshold: 0.2 });
  const countupRef = useRef(null);
  const { t } = useTranslation();

  return (
    <section className="" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="flex flex-col">
          <h1 className="text-xl lg:text-3xl font-bold">Reconhecimentos</h1>
          <div className="w-[75px] h-1 bg-yellow-500 my-4" />
          <p className="text-sm lg:text-[16px] lg:tracking-wider">
            Não nos limitamos a criar aplicativos; aplicamos a engenharia para
            criar soluções digitais adequadas para o seu modelo de negócio.{" "}
            <br />
            Prestamos serviços de qualidade com professionalismo.
          </p>
        </div>
        <div
          ref={countupRef}
          className="grid grid-cols-2 xl:grid-cols-4 text-center items-center justify-items-center justify-between gap-4 lg:gap-10 py-6"
        >
          <div className="min-w-[150px] lg:min-w-[200px] h-24 p-1 bg-white dark:bg-black flex flex-row justify-evenly items-center rounded-md gap-2">
            <CalendarDays className="w-8 h-8 lg:w-12 lg:h-12 text-sky-900 " />
            <div className="flex flex-col justify-center items-center w-1/2 ">
              <h2 className="text-xl lg:text-3xl font-bold text-center">
                {inView && (
                  <CountUp
                    // scrollSpyDelay={2}
                    start={0}
                    end={7}
                    duration={4}
                    delay={0}
                  />
                )}
                +
              </h2>
              <p className="text-sm lg:text-[16px] font-semibold text-sky-500 tracking-tighter text-center">
                Anos de <br /> Experiência
              </p>
            </div>
          </div>
          <div className="min-w-[150px] lg:min-w-[200px] h-24 p-1  bg-white dark:bg-black flex flex-row justify-evenly items-center rounded-md gap-2 ">
            <Handshake className="w-8 h-8 lg:w-12 lg:h-12 text-sky-900" />
            <div className="flex flex-col justify-center items-center w-1/2">
              <h2 className="text-xl lg:text-3xl font-bold text-center ">
                {inView && (
                  <CountUp start={0} end={13} duration={4} delay={0} />
                )}
                +
              </h2>
              <p className="text-sm lg:text-[16px]  font-semibold text-sky-500 tracking-tighter text-center">
                Força da <br /> Equipe
              </p>
            </div>
          </div>
          <div className="min-w-[150px] lg:min-w-[200px] h-24 p-1  bg-white dark:bg-black flex flex-row justify-evenly items-center rounded-md gap-2 ">
            <TabletSmartphone className="w-8 h-8 lg:w-12 lg:h-12 text-sky-900" />
            <div className="flex flex-col justify-center items-center w-1/2">
              <h2 className="text-xl lg:text-3xl font-bold text-center ">
                {inView && (
                  <CountUp start={0} end={19} duration={4} delay={0} />
                )}
                +
              </h2>
              <p className="text-sm lg:text-[16px]  font-semibold text-sky-500 tracking-tighter text-center">
                Produtos <br /> Desenvolvidos
              </p>
            </div>
          </div>
          <div className="min-w-[150px] lg:min-w-[200px] h-24 p-1  bg-white dark:bg-black flex flex-row justify-evenly items-center rounded-md gap-2 ">
            <Smile className="w-8 h-8 lg:w-12 lg:h-12 text-sky-900" />
            <div className="flex flex-col justify-center items-center w-1/2">
              <h2 className="text-xl lg:text-3xl font-bold text-center">
                {inView && (
                  <CountUp start={0} end={19} duration={4} delay={0} />
                )}
                +
              </h2>
              <p className="text-sm lg:text-[16px]  font-semibold text-sky-500 tracking-tighter text-center">
                Clientes <br /> Satisfeitos
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SecondSection;

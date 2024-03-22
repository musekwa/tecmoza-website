"use client";
import {
  CalendarDays,
  Handshake,
  Smile,
  TabletSmartphone,
  User2Icon,
  Users2,
} from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

type Props = {};

const SecondSection = (props: Props) => {
  const [scrollOn, setScrollOn] = useState(false);
  const [scrollTrigger, setScrollTrigger] = useState<ScrollTrigger | null>(null);

  const handleEnter = useCallback(() => setScrollOn(true), []);
  const handleExit = useCallback(() => setScrollOn(false), []);

  useEffect(() => {
    const newScrollTrigger = new ScrollTrigger({
      onEnter: handleEnter,
      onExit: handleExit,
    });

  }, [handleEnter, handleExit]);
  return (
    <section className="">

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
        <div className="grid grid-cols-2 xl:grid-cols-4 text-center items-center justify-between gap-4 lg:gap-10 py-6">
          <div className="min-w-[150px] lg:min-w-[200px] h-24 p-1 bg-white flex flex-row justify-evenly items-center rounded-md gap-2">
            <CalendarDays className="w-8 h-8 lg:w-12 lg:h-12 text-sky-900 " />
            <div className="flex flex-col justify-center items-center w-1/2 ">
              <h2 className="text-xl lg:text-3xl font-bold text-center">
                {/* {scrollOn && (
                  <CountUp
                    
                    // scrollSpyDelay={2}
                    start={0}
                    end={7}
                    duration={4}
                    delay={0}
                  />
                )} */}
                13+
              </h2>
              <p className="text-sm lg:text-[16px] font-semibold text-sky-500 tracking-tighter text-center">
                Anos de <br /> Experiência
              </p>
            </div>
          </div>
          <div className="min-w-[150px] lg:min-w-[200px] h-24 p-1  bg-white flex flex-row justify-evenly items-center rounded-md gap-2 ">
            <Handshake className="w-8 h-8 lg:w-12 lg:h-12 text-sky-900" />
            <div className="flex flex-col justify-center items-center w-1/2">
              <h2 className="text-xl lg:text-3xl font-bold text-center ">
                {/* {scrollOn && (
                  <CountUp   start={13} end={13} duration={4} delay={1} />
                )} */}
                13+
              </h2>
              <p className="text-sm lg:text-[16px]  font-semibold text-sky-500 tracking-tighter text-center">
                Força da <br /> Equipe
              </p>
            </div>
          </div>
          <div className="min-w-[150px] lg:min-w-[200px] h-24 p-1  bg-white flex flex-row justify-evenly items-center rounded-md gap-2 ">
            <TabletSmartphone className="w-8 h-8 lg:w-12 lg:h-12 text-sky-900" />
            <div className="flex flex-col justify-center items-center w-1/2">
              <h2 className="text-xl lg:text-3xl font-bold text-center ">
                {/* {scrollOn && (
                  <CountUp  start={19} end={19} duration={4} delay={2} />
                )} */}
                19+
              </h2>
              <p className="text-sm lg:text-[16px]  font-semibold text-sky-500 tracking-tighter text-center">
                Produtos <br /> Desenvolvidos
              </p>
            </div>
          </div>
          <div className="min-w-[150px] lg:min-w-[200px] h-24 p-1  bg-white flex flex-row justify-evenly items-center rounded-md gap-2 ">
            <Smile className="w-8 h-8 lg:w-12 lg:h-12 text-sky-900" />
            <div className="flex flex-col justify-center items-center w-1/2">
              <h2 className="text-xl lg:text-3xl font-bold text-center">
                {/* {scrollOn && (
                  <CountUp  start={19} end={19} duration={4} delay={3} />
                )} */}
                19+
              </h2>
              <p className="text-sm lg:text-[16px]  font-semibold text-sky-500 tracking-tighter text-center">
                Clientes <br /> Satisfeitos
              </p>
            </div>
          </div>
        </div>

    </section>
  );
};

export default SecondSection;

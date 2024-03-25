import Image from "next/image";
import React from "react";
import ProjectsSection from "./_components/projects-section";

type Props = {};

const PortfolioPage = (props: Props) => {
  return (
    <div className="">
      <div className="w-full h-screen px-6 lg:px-24">
        <Image
          src={"/images/portfolio/bg.png"}
          alt="portfolio background"
          width={45}
          height={45}
          // fill
          style={
            {
              // objectFit: "fill",
              // aspectRatio: "16 / 9",
              // objectPosition: "center",
            }
          }
          className="opacity-5"
          priority
        />
        <div className=" flex flex-col h-full max-w-screen-md  pt-[200px]  gap-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-sky-900">
            Estudos de Casos
          </h1>
          <p className="text-xl">
            Acreditamos que os grandes produtos não acontecem sem paixão,
            inteligência e empenho pessoal, e isso é demonstrado pelo nosso
            portfolio que abrange diferentes clientes, indústrias e
            públicos-alvo.
          </p>
        </div>
      </div>


      <div className="bg-white  py-6">
        
          <ProjectsSection />

      </div>
    </div>
  );
};

export default PortfolioPage;

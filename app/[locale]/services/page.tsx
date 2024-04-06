import GetInTouch from "@/components/get-in-touch";

import React from "react";
import ServicesHeroSection from "./_components/services-hero-section";
import ServiceImage from "./_components/service-image";
import clsx from "clsx";
import ServiceDescription from "./_components/service-description";

const serviceImage = [
  {
    serviceName: "mobile",
    imageHref: "/images/services/mobile.png",
    serviceHref: "/services",
    imageBlockAnimation: { x: -40 },
    descriptionBlockAnimation: { x: 200 },
    title: "Aplicativos Móveis - Android e iOS",
    subtitle: "Desenvolvimento",
    bgColor: "bg-white",
    blocksOrder: "",
    description:
      "Desenvolvemos aplicativos móveis para Android e iPhone.",
    list: [
      "Levamos em consideração o grau de literacia de usuários finais ao desenharmos as Interfaces de Usuários.",
      "Escolhemos a pilha de tecnoligas com base em requisitos funcionais e não funcionais definidos.",
      "Entregamos aplicativos móveis instaláveis em dispositivos Android e iOS de todos os tamanhos.",
    ],
  },
  {
    serviceName: "web",
    imageHref: "/images/services/web.png",
    serviceHref: "/services",
    imageBlockAnimation: { x: 200 },
    descriptionBlockAnimation: { x: -40 },
    title: "Aplicativos Web e Windows",
    subtitle: "Desenvolvimento",
    bgColor: "",
    blocksOrder: "reverse",
    description:
      "Desenvolvemos aplicativos Web e Windows.",
    list: [
      "Criamos aplicativos Web e Windows responsivos, interactivos e com sistemas de desenho proporcionais à marca da empresa cliente.",
      "Desenhamos uma aquitectura de informação acessível para todas as camadas de usuários, incluindo os de deficiência visual.",
      "Adicionamos funcionalidades que ajudam o nosso cliente actualizar o conteúdo de sua página Web sem a intervenção de um Técnico de Tecnolgia de Informação.",
    ],
  },
  {
    serviceName: "consulting",
    imageHref: "/images/services/consulting.png",
    serviceHref: "/services",
    imageBlockAnimation: { x: -40 },
    descriptionBlockAnimation: { x: 200 },
    title: "Consultoria Informática",
    subtitle: "Consultoria",
    bgColor: "bg-white",
    blocksOrder: "",
    description:
      "Informatizamos modelos e processos de negócios das empresas.",
    list: [
      "Analisamos as necessidades e implementamos estratégias de transformação digital das empresas.",
      "Auditamos sistemas de informação legados das empresas e os modernizamos com tecnologias mais recentes.",
      "Fazemos manutenção e melhoria contínua dos sistemas de informação.",
     
    ],
  },
  {
    serviceName: "mentoring",
    imageHref: "/images/services/mentoring.png",
    serviceHref: "/services",
    imageBlockAnimation: { x: 200 },
    descriptionBlockAnimation: { x: -40 },
    title: "Treinamento Digital",
    subtitle: "Treinamento e Mentoria",
    bgColor: "",
    blocksOrder: "reverse",
    description:
      "Treinammos e mentoramos empresas e pessoas singulares.",
    list: [
      "Ajudamos empresas e indivíduos singulares a aprimorar a sua literacia digital por meio de uma capacitação orientada a suas necessidades.",
      "Mentoramos de forma prolongada empresas e indivíduos singulares na adoção de novas tecnologias.",
      "Capacitamos estudantes em programação e engenharia de software.",
    ],
  },
];

type Props = {};

const ServicesPage = (props: Props) => {
  return (
    <div className="">
      <ServicesHeroSection />
      {serviceImage.map((service, index) => {
        return (
          <div key={index} className={clsx(
            "px-6 lg:px-24  py-12", 
            service.bgColor,
          )}>
            <h1 className="text-2xl lg:text-3xl font-bold text-center text-sky-900">
              {service.title}
            </h1>
            <p className="text-center text-gray-500">{service.subtitle}</p>

            <div className="w-[75px] h-1 bg-yellow-500 my-4 mx-auto" />

            <div className={clsx(
              `flex flex-col gap-4`, 
              service.blocksOrder === "reverse" ? "md:flex-row-reverse" : "md:flex-row",
            )}>
              <ServiceImage
                serviceName={service.serviceName}
                imageHref={service.imageHref}
                animation={service.imageBlockAnimation}
              />
              <ServiceDescription  
                description={service.description}
                list={service.list}
                animation={service.descriptionBlockAnimation}
                serviceHref={service.serviceHref}
              />
            </div>
          </div>
        );
      })}


      <GetInTouch />
    </div>
  );
};

export default ServicesPage;

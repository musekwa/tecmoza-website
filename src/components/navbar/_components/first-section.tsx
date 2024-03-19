import VideoBackground from "@/components/video-background";
import { fonts, raleway } from "@/app/layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const marqueeImages = [
  {
    src: "/images/slidingImages/infoSysLogo.png",
    alt: "infoSys",
  },
  {
    src: "/images/slidingImages/iamLogo.png",
    alt: "iam",
  },
  {
    src: "/images/slidingImages/abbLogo.png",
    alt: "abb",
  },
];

type Props = {};

const FirstSection = (props: Props) => {
  return (
    <section className=" flex flex-col  lg:flex-row gap-10">
      <div className="w-full md:w-1/2 z-10">
        <div className="w-[200px] h-1 bg-yellow-500 mb-6" />
        <p className="text-[16px] text-sky-500 mb-6">
          A sua Estratégia de Mobilidade Digital.
        </p>

        <h1
          className={cn(
            "text-2xl lg:text-4xl font-bold"
            // raleway.className
          )}
        >
          Os Melhores e Mais Inovadores Desenvolvedores{" "}
          <span className="text-lg lg:text-xl font-normal">estão aqui.</span>
        </h1>
        <div className="py-6">
          <p className="text-[14px] lg:text-[18px] tracking-wider leading-loose text-justify">
            A <b>TECMOZA</b> sempre deu prioridade às necessidades dos seus
            clientes. Os nossos programadores irão personalizar as melhores
            aplicações móveis e/ou web dentro do seu orçamento e de acordo com o
            seu modelo de negócio.
          </p>
        </div>
        <Button size={"sm"} variant={"outline2"} className="gap-2 py-6">
          Contrate Um Desenvolvedor Dedicado{" "}
          <ArrowRight className="w-4 h-4 text-sky-500" />
        </Button>
        <div className="my-12 ">
          <Marquee autoFill speed={25}>
            {marqueeImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={120}
                height={50}
                className="mx-4 z-0 w-auto h-auto"
              />
            ))}
          </Marquee>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 border">
        <video
          // ref={videoRef}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full rounded-md aspect-auto object-cover"
        >
          <source src="/videos/hero-section-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 right-0  z-5 w-full h-full  ">
          <div className="flex justify-center items-center w-full h-full rounded-2xl">
            <Image
              src={"/images/mobile.png"}
              alt="mobile"
              width={130}
              height={130}
              className="w-auto h-auto rounded-md hover:scale-150 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

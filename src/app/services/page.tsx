import GetInTouch from "@/components/get-in-touch";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLaptop, FaListCheck, FaMobileScreen } from "react-icons/fa6";

type Props = {};

const ServicesPage = (props: Props) => {
  return (
    <div className="">
      <div className="relative h-[300px] bg-slate-900">
        <div className="absolute top-20 right-20  z-20">
          <h1 className="text-lg md:text-3xl lg:text-5xl font-bold text-white tracking-tight">
            PRINCIPAIS PRODUTOS E SERVICOS{" "}
          </h1>
        </div>

        <AspectRatio ratio={16 / 9} className="h-[300px] z-0 ">
          <Image
            src={"/images/services/services.jpg"}
            alt="Hero Image"
            fill
            style={{
              objectFit: "cover",
              //   aspectRatio: "16 / 9",
              //   objectPosition: "center",
            }}
            priority
          />
        </AspectRatio>
      </div>

      <div className="grid md:grid-cols-3 justify-between gap-6  px-6 lg:px-24">
        <div className="flex flex-col justify-center p-3 bg-white space-y-4 pointer-cusor">
          <div className="mx-auto">
            <div className="flex rounded-full p-6 border-2 border-sky-500 w-20 h-20  justify-center items-center">
              <FaMobileScreen size={50} className="text-sky-500 text-center" />
            </div>
          </div>
          <h1 className="text-center text-lg md:text-xl font-bold text-sky-500 pt-2">
            Desenvolvimento de <br />
            Aplicativos Móveis
          </h1>
          <div>
            <p className="text-justify text-sm lg:text-[16px] lg:tracking-wide">
              Desenvolvemos aplicativos móveis robustos, mas fáceis de usuar,
              com interfaces de usuários cativantes, com base na tecnolgia
              moderna.
              <br />
              Os requisitos de negócio do nosso cliente determinam as
              funcionalidades que Desenvolvemos.
            </p>
          </div>

          <div className="flex justify-center cursor-pointer">
            <Link href="/services/mobile">
              <Button className="w-fit rounded-full bg-sky-500">Saiba mais</Button>
            </Link>
          </div>
          
        </div>

        <div className="flex flex-col justify-center p-3 bg-white space-y-4 ">
          <div className="mx-auto">
            <div className="flex rounded-full p-6 border-2 border-sky-500 w-20 h-20  justify-center items-center">
              <FaLaptop size={50} className="text-sky-500 text-center" />
            </div>
          </div>
          <h1 className="text-center text-lg md:text-xl font-bold text-sky-500 pt-2">
            Desenvolvimento de <br />
            Aplicativos Web
          </h1>
          <div>
            <p className="text-justify text-sm lg:text-[16px] lg:tracking-wide">
              Desenvolvemos aplicativos móveis robustos, mas fáceis de usuar,
              com interfaces de usuários cativantes, com base na tecnolgia
              moderna.
              <br />
              Os requisitos de negócio do nosso cliente determinam as
              funcionalidades que Desenvolvemos.
            </p>
          </div>
          <div className="flex justify-center cursor-pointer">
            <Link href="/services/web">
              <Button className="w-fit rounded-full bg-sky-500">Saiba mais</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center p-3 bg-white space-y-4 ">
          <div className="mx-auto">
            <div className="flex rounded-full p-6 border-2 border-sky-500 w-20 h-20  justify-center items-center">
              <FaListCheck size={50} className="text-sky-500 text-center" />
            </div>
          </div>
          <h1 className="text-center text-lg md:text-xl font-bold text-sky-500 pt-2">
            Consultoria <br />
            Informática
          </h1>
          <div>
            <p className="text-justify text-sm lg:text-[16px] lg:tracking-wide">
              Desenvolvemos aplicativos móveis robustos, mas fáceis de usuar,
              com interfaces de usuários cativantes, com base na tecnolgia
              moderna.
              <br />
              Os requisitos de negócio do nosso cliente determinam as
              funcionalidades que Desenvolvemos.
            </p>
          </div>
        <div className="flex justify-center cursor-pointer">
            <Link href="/services/consulting">
              <Button className="w-fit rounded-full bg-sky-500">Saiba mais</Button>
            </Link>
          </div>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default ServicesPage;

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const GetInTouch = (props: Props) => {
  return (
    <div className="bg-sky-200 mt-12 py-12">
      <div className="flex flex-col justify-center items-center lg:w-2/3 p-12 mx-auto ">
        <h1 className="text-center text-xl lg:text-3xl font-bold">
          Precisa da Nossa Consultoria?
        </h1>
        <div className="w-[75px] h-1 bg-yellow-500 my-4" />
        <p className="text-sm lg:text-[16px] lg:tracking-wide  text-center">
          Tem dúvidas ou perguntas sobre os nossos serviços de design e
          desenvolvimento? Estamos disponíveis 24 horas por dia. Entre em
          contacto connosco agora!
        </p>
      </div>

      <div className="flex justify-center items-center">
        <Link href={"/contact-us"}>
          <Button
            className="
      text-white
      py-6
      text-sm
      font-light
      rounded-md
      bg-sky-500
      hover:scale-110
      transition-all
      duration-300
      shadow-md
      hover:bg-sky-700
      hover:shadow-sky-900
  "
          >
            <h1 className="font-bold tracking-wider text-lg">Contactar-Nos</h1>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GetInTouch;

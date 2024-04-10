import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const GetInTouch = (props: Props) => {
  return (
    <div className="bg-sky-200 dark:bg-black dark:border-t dark:border-t-gray-800 mt-12 p-8">
      <div className="flex flex-col justify-center items-center lg:w-2/3 mx-auto gap-4">
        <h1 className="text-center text-xl lg:text-3xl font-bold">
          Tem Algum Projecto Informático Em Mente?
        </h1>
        <div className="w-[75px] h-1 bg-yellow-500 mt-2" />
        <div className="text-center">
        <h4 className="text-sky-900 font-semibold italic animate-pulse">Nós Podemos Ajudar!</h4>
          <p className="text-[14px] lg:text-[18px] lg:tracking-wider lg:leading-normal">
            TECMOZA irá prestar-lhe um serviço de qualidade a um preço competitivo.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <Link href={"/contact-us"}>
          <Button
            className="
      py-6
      rounded-md
      bg-sky-500
      hover:scale-110
      transition-all
      duration-300
      shadow-md
      hover:bg-sky-900
      hover:shadow-sky-900
  "
          >
            <h1 className="text-lg text-white">Contacte-Nos</h1>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GetInTouch;

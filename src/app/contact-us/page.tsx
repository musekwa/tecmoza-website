import React from "react";
import ContactForm from "./_components/contact-form";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

type Props = {};

const SendMessagePage = (props: Props) => {
  return (
    <div className="px-6 lg:px-24 pt-6">
      {/* <h1 className="text-2xl font-bold text-center">Contactar-Nos</h1> */}

      <div className="flex flex-col-reverse lg:flex-row gap-8 justify-between">
        <div className="w-full">
          <ContactForm />
        </div>

        <div className="w-full lg:max-w-[300px] xl:max-w-[450px] bg-sky-200 text-right p-6 flex flex-col items-end">
          <h1 className="text-xl lg:text-2xl text-black font-bold tracking-tight">
            Entre em Contacto Connosco
          </h1>
          <div className="w-[75px] h-1 bg-yellow-500 my-4" />
          <p className="text-[14px] tracking-wider leading-loose text-right">
            Precisa de uma equipe de desenvolvedores ou de um programador de
            excelência em Moçambique? Contacte-nos! Podemos ajudar a transformar
            o seu negócio a um preço acessível.
          </p>
          <div className="w-[75px] h-1 bg-yellow-500 my-4" />
          <h1 className="text-xl lg:text-2xl text-sky-900 font-bold tracking-tight">
            MOÇAMBIQUE
          </h1>
          <p className="leading-loose text-gray-600 py-4">
            No. 412, Av. 25 de Setembro, <br />
            Maputo
          </p>
          <p className="leading-loose text-gray-600 py-4">
            +258 84 044 5375 <br />
            +258 86 014 0080 <br />
            contact@tecmoza.com
          </p>
          <div className="flex flex-row items-center  gap-8 pt-2 ">
            <FaLinkedin size={24} className="text-sky-900 cursor-pointer" />
            <FaYoutube size={24} className="text-sky-900 cursor-pointer" />
            <FaFacebook size={24} className="text-sky-900 cursor-pointer" />
            <FaTwitter size={24} className="text-sky-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessagePage;
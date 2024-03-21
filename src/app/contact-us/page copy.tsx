
import ActionButton from "@/components/custom-buttons/action-button";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";


import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import ContactButton from "./_components/contact-button";


type Props = {};

const ContactPage = (props: Props) => {

  return (
    <div className="px-6 lg:px-24 pt-6 w-screen">
      <div className="w-[75px] h-1 bg-yellow-500 my-8" />

      <div className="flex flex-col-reverse md:flex-row w-full ">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl lg:text-4xl font-bold py-6">Contactar-Nos</h1>
          <p className="text-[14px] lg:text-[18px] tracking-wider leading-loose text-justify">
            Precisa de uma equipe de desenvolvedores ou de um programador de
            excelência em Moçambique? Contacte-nos! Podemos ajudar a transformar
            o seu negócio a um preço acessível.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 py-6 my-6">
        <div className="w-full justify-center items-center lg:w-2/3 ">
                  {/* <ContactForm /> */}
          <ContactButton
          >
            <Button>Envie sua mensagem</Button>
          </ContactButton>
                  
        </div>

        <div className="w-full lg:w-1/3 bg-sky-200 p-6">
          <h1 className="text-xl lg:text-2xl text-black font-bold tracking-tight">
            Entre em Contacto Connosco
          </h1>
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

export default ContactPage;

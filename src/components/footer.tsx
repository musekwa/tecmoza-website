import React from "react";
import Logo from "./logo";
import {
  Facebook,
  Linkedin,
  LocateIcon,
  Mail,
  MapPin,
  PhoneCallIcon,
  PhoneIcon,
  Youtube,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" bg-sky-500 text-white px-4 lg:px-24 pt-6 ">
      <div className="xs:grid xs:grid-cols-1 lg:flex lg:flex-row lg:justify-between gap-6">
        <div className="w-fit flex flex-col">
          <div className=" bg-white  p-0.5 flex flex-row items-center justify-center border rounded-md border-sky-500 cursor-pointer ">
            <Logo />
          </div>

          <div className="py-4 gap-2 flex flex-col text-sm">
            <div className="flex flex-row items-center gap-2">
              <PhoneIcon />
              <div>
                <p>+(258) 84 044 5375</p>
                <p>+(258) 86 014 0080</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Mail />
              <div>
                <p>contact@tecmoza.com</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-2 pt-2 ">
              <FaLinkedin size={24} className="cursor-pointer" />
              <FaYoutube size={24} className="cursor-pointer" />
              <FaFacebook size={24} className="cursor-pointer" />
              <FaTwitter size={24} className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="h-0.5 w-24 my-6 bg-white lg:hidden" />

        <ul className="w-fit flex flex-col gap-1 lg:gap-4 ">
          <li>
            <Link href={"/about"}>- Sobre Nós</Link>
          </li>
          <li>
            <Link href={"/blog"}>- Blog</Link>
          </li>
          <li>
            <Link href={"/career"}>- Oportunidades</Link>
          </li>
          <li>
            <Link href={"/contact"}>- Contactar-Nos</Link>
          </li>
        </ul>

        <div className="h-0.5 w-24 bg-white my-6 lg:hidden" />

        <div className="w-fit flex flex-row items-start gap-2 ">
          <MapPin />
          <div className="tex-[13px]">
            <h1 className="font-bold text-xl lg:text-2xl">
              Mozambique, Maputo
            </h1>
            <p>Av. 25 de Setembro, No. 412</p>
          </div>
        </div>
      </div>

      <div className="h-0.5 w-full bg-gray-200 mt-12 mb-4" />
      <div className="flex flex-col lg:flex-row justify-between items-center text-[13px] pb-6">
        <div>
          <p className="text-gray-200">
            Copyright © 2024 Tecmoza. All rights reserved.
          </p>
        </div>
        <div className="hover:text-sky-900 cursor-pointer">
          <p className="text-white">Privacidade Política Termos de Uso</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

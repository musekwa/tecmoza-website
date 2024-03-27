"use client";
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
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import UserSubscriptionForm from "./user-subscription/user-subscription-form";
import UserSubscription from "./user-subscription/user-subscription";
import { useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type Props = {};

const Footer = (props: Props) => {
  const router = useRouter();
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <footer className=" bg-sky-500 text-white px-4 lg:px-24 pt-2 mt-2">
      <div className="xs:grid xs:grid-cols-1 lg:flex lg:flex-row lg:justify-between gap-6">
        <div className="w-fit flex flex-col">
          <div className=" bg-white  p-0.5 flex flex-row items-center justify-center border rounded-md border-sky-500 cursor-pointer ">
            <Logo />
          </div>

          <div className="py-2 gap-2 flex flex-col text-sm">
            <div className="flex flex-row items-center gap-2">
              <PhoneIcon size={16} />
              <div>
                <p>+(258) 84 044 5375</p>
                <p>+(258) 86 014 0080</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Mail size={16} />
              <div>
                <p>contact@tecmoza.com</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-2 pt-1 ">
              <Link
                href={
                  "https://www.linkedin.com/company/tecmoza-lda/about/?viewAsMember=true"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} className="cursor-pointer" />
              </Link>
              <Link
                href={"https://www.youtube.com/@tecmoza"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={20} className="cursor-pointer" />
              </Link>
              <Link
                href={"https://www.facebook.com/tecmoza.lda"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} className="cursor-pointer" />
              </Link>
              <Link href={"https://twitter.com/tecmoza2"} target={"_blank"} rel="noopener noreferrer">
                <FaTwitter size={20} className="cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        <div className="h-0.5 w-24 my-6 bg-white lg:hidden" />

        <ul className="w-fit flex flex-col gap-1 lg:gap-2 ">
          <li>
            <Link href={"/about-us"}>- Quem Somos?</Link>
          </li>
          <li>
            <Link href={"/services"}>- Nossos Serviços</Link>
          </li>
          <li>
            <Link href={"/blog"}>- Blog</Link>
          </li>
          <li>
            <Link href={"/contact-us"}>- Fale Connosco</Link>
          </li>
        </ul>

        <div className="h-0.5 w-24 bg-white my-6 lg:hidden" />

        <div className="w-fit flex flex-row items-start gap-2 ">
          <MapPin size={16} className="mt-2" />
          <div className="tex-[13px]">
            <h1 className="font-bold text-xl lg:text-2xl">
              Mozambique, Maputo
            </h1>
            <p>Av. 25 de Setembro, No. 412</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <UserSubscription />
      </div>

      <div className="h-0.5 w-full bg-gray-200 mt-4 mb-2" />
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

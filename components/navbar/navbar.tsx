"use client";
import React, { useState } from "react";
import Logo from "../logo";

import {
  Headphones,
  Info,
  Home,
  LibrarySquare,
  LifeBuoy,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  UserCircle2,
  UserPlus,
  GraduationCap,
  Download,
  DollarSign,
  Code2Icon,
  Code,
  ChevronDown,
  Camera,
  Building2,
  BarChart,
  AlignJustify,
  Lock,
  Users,
  ScreenShare,
  TabletSmartphone,
  LayoutPanelTop,
} from "lucide-react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

import Image from "next/image";
import {
  FaLaptop,
  FaListCheck,
  FaMobileScreen,
  FaTeamspeak,
} from "react-icons/fa6";
import { MenuItem, MenuOptionsProps } from "./types";
import { NavigationMenuBar } from "./_components/menu-options";
import ActionButtons from "./_components/action-buttons";
import LanguageChanger from "@/LanguageChanger";

export const menuItems: MenuItem[] = [
  {
    title: "Início",
    menu: "landing-page",
    href: "/",
    options: [
      // {
      //   label: "Desenvolvimento de Aplicativos Móveis",
      //   icon: <FaMobileScreen size={30} className="text-sky-900" />,
      //   href: "/team-alignment",
      // },
      // {
      //   label: "Desenvolvimento de Aplicativos Web",
      //   icon: <FaLaptop size={30} className="text-sky-900" />,
      //   href: "/sales",
      // },
      // {
      //   label: "Consultoria Informática",
      //   icon: <FaListCheck size={30} className="text-sky-900" />,
      //   href: "/engineering",
      // },
    ],
  },
  {
    title: "Serviços",
    menu: "services",
    href: "/services",
    options: [
      {
        label: "Desenvolvimento - Android e iOS",
        icon: <FaMobileScreen size={25} className="text-sky-500" />,
        href: "/services/mobile",
      },
      {
        label: "Desenvolvimento - Web e Windows",
        icon: <FaLaptop size={25} className="text-sky-500" />,
        href: "/services/web",
      },
      {
        label: "Consultoria - Consultoria Informática",
        icon: <FaListCheck size={25} className="text-sky-500" />,
        href: "/services/consulting",
      },
      {
        label: "Treinamento e Mentoria - Treinamento Digital",
        icon: <FaTeamspeak size={25} className="text-sky-500" />,
        href: "/services/mentoring",
      },
    ],
  },
  {
    title: "Portfolio",
    menu: "portfolio",
    href: "/portfolio",
    options: [],
  },
  // {
  //   title: "Blog",
  //   menu: "blog",
  //   href: "/blog",
  //   options: [],
  // },
  {
    title: "Sobre Nós",
    menu: "about-us",
    href: "/about-us",
    options: [],
  },
];

const slideVariants = {
  hidden: { y: -35 },
  visible: { y: 0 },
};

type Props = {};

const Navbar = (props: Props) => {
  // const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOptions, setMenuOptions] = useState<MenuOptionsProps | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  

  const handleMouseEnter = (menuOptions: MenuOptionsProps) => {
    // setActiveMenu(menu);
    setMenuOptions({
      menu: menuOptions.menu,
      title: menuOptions.title,
      options: menuOptions.options,
      active: true,
    });
  };

  const handleMouseOver = (menuOptions: MenuOptionsProps) => {
    // setActiveMenu(menu);
    setMenuOptions({
      menu: menuOptions.menu,
      title: menuOptions.title,
      options: menuOptions.options,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    // setActiveMenu(null);
    setMenuOptions(null);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-5 shadow-sm lg:px-24 bg-white h-24">
        <div
          onMouseOver={handleMouseLeave}
          className="hover:scale-110 transition-all duration-300 hover:shadow-md               
          hover:shadow-sky-900 border rounded-md border-sky-500 p-0.5 cursor-pointer "
        >
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
          {/* <LanguageChanger /> */}
        <div className="flex">
          <NavigationMenuBar
            setMenuOptions={setMenuOptions}
            dropdownVisible={dropdownVisible}
            setDropdownVisible={setDropdownVisible}
          />
          <div onMouseEnter={handleMouseLeave} className="flex items-center">
            <ActionButtons
              dropdownVisible={dropdownVisible}
              setDropdownVisible={setDropdownVisible}
            />
          </div>
       

         

        </div>
      </div>
      {menuOptions?.active && menuOptions.options.length > 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit={"hidden"}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            when: "afterChildren",
            staggerChildren: 0.2,
          }}
          variants={slideVariants}
          className="absolute top-24 left-0 right-0 z-50 bg-white"
        >
          <div
            onMouseLeave={handleMouseLeave}
            onMouseOver={() => handleMouseOver(menuOptions)}
            className="flex flex-row px-24 py-6 min-h-40 border z-50 justify-between items-start gap-4"
          >
            <div className="w-[400px] ">
              <p className="text-sm underline text-yellow-500">
                {menuOptions.title}
              </p>
            </div>
            <div className="grid grid-cols-2  gap-6 w-1/2">
              {menuOptions?.options.map((option, index) => (
                <Link
                  href={option.href}
                  key={index}
                  className="flex items-center"
                >
                  <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                    <div className="flex gap-4 justify-center items-center">
                      <div>{option.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-[16px] font-semibold">
                          {option.label.split(" - ")[1]}
                        </div>
                        <div className="text-[10px] italic">
                          {option.label.split(" - ")[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

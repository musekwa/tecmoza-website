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

import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

import Image from "next/image";
import { FaLaptop, FaListCheck, FaMobileScreen } from "react-icons/fa6";
import { MenuItem, MenuOptionsProps } from "./types";
import { NavigationMenuBar } from "./_components/menu-options";
import ActionButtons from "./_components/action-buttons";

export const menuItems: MenuItem[] = [
  {
    title: "Página Inicial",
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
        label: "Desenvolvimento de Aplicativos Móveis",
        icon: <FaMobileScreen size={30} className="text-sky-900" />,
        href: "/team-alignment",
      },
      {
        label: "Desenvolvimento de Aplicativos Web",
        icon: <FaLaptop size={30} className="text-sky-900" />,
        href: "/sales",
      },
      {
        label: "Consultoria Informática",
        icon: <FaListCheck size={30} className="text-sky-900" />,
        href: "/engineering",
      },
    ],
  },

  // {
  //   title: "Tecnologia",
  //   menu: "technology",
  //   href: "/technology",
  //   options: [
  //     {
  //       label: "iOS",
  //       icon: (
  //         <Image src={"/images/iosLogo.png"} alt="ios" width={30} height={30} />
  //       ),
  //       href: "/bird-ai",
  //     },
  //     {
  //       label: "Android",
  //       icon: (
  //         <Image
  //           src={"/images/androidLogo.png"}
  //           alt="android"
  //           width={30}
  //           height={30}
  //         />
  //       ),
  //       href: "/enterprise",
  //     },
  //     {
  //       label: "React Native",
  //       icon: (
  //         <Image
  //           src={"/images/reactNativeLogo.png"}
  //           alt="react native"
  //           width={30}
  //           height={30}
  //         />
  //       ),
  //       href: "/",
  //     },
  //     {
  //       label: "Flutter",
  //       icon: (
  //         <Image
  //           src={"/images/flutterLogo.png"}
  //           alt="flutter"
  //           width={30}
  //           height={30}
  //         />
  //       ),
  //       href: "/",
  //     },
  //     {
  //       label: "ReactJS",
  //       icon: (
  //         <Image
  //           src={"/images/reactNativeLogo.png"}
  //           alt="reactjs"
  //           width={30}
  //           height={30}
  //         />
  //       ),
  //       href: "/",
  //     },
  //     {
  //       label: "NextJS",
  //       icon: (
  //         <Image
  //           src={"/images/nextJsLogo.png"}
  //           alt="nextjs"
  //           width={30}
  //           height={30}
  //         />
  //       ),
  //       href: "/",
  //     },
  //     {
  //       label: "MongoDB",
  //       icon: (
  //         <Image
  //           src={"/images/mongoDbLogo.png"}
  //           alt="mongodb"
  //           width={30}
  //           height={30}
  //         />
  //       ),
  //       href: "/",
  //     },
  //     {
  //       label: "PostgreSQL",
  //       icon: (
  //         <Image
  //           src={"/images/postgreSqlLogo.jpg"}
  //           alt="postgresql"
  //           width={30}
  //           height={30}
  //         />
  //       ),
  //       href: "/",
  //     },
  //     {
  //       label: "Convex",
  //       icon: (
  //         <Image
  //           src={"/images/convexLogo.png"}
  //           alt="convex"
  //           width={30}
  //           height={30}
  //         />
  //       ),
  //       href: "/",
  //     },
  //     {
  //       label: "TypeScript",
  //       icon: (
  //         <Image
  //           src={"/images/typescriptLogo.png"}
  //           alt="typescript"
  //           width={30}
  //           height={30}
  //         />
  //       ),
  //       href: "/",
  //     },
  //     {
  //       label: "NodeJS",
  //       icon: (
  //         <Image
  //           src={"/images/nodeJsLogo.png"}
  //           alt="nodejs"
  //           width={30}
  //           height={30}
  //         />
  //       ),
  //       href: "/",
  //     },
  //   ],
  // },
  {
    title: "Portfolio",
    menu: "portfolio",
    href: "/portfolio",
    options: [],
  },
  {
    title: "Blog",
    menu: "blog",
    href: "/blog",
    options: [],
  },
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
        <div className="flex">
          <NavigationMenuBar setMenuOptions={setMenuOptions} />
          <div onMouseEnter={handleMouseLeave} className="flex items-center">
            <ActionButtons />
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
            <div className="flex flex-wrap gap-8">
              {menuOptions?.options.map((option, index) => (
                <Link
                  href={option.href}
                  key={index}
                  className="min-w-[100px] flex"
                >
                  <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                    <div className="flex gap-4 justify-center items-center">
                      <div>{option.icon}</div>
                      <div className="text-sm">{option.label}</div>
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

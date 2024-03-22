"use client";

import React, { useState } from "react";
import { MenuItem, MenuOptionsProps, Option } from "../types";
import { motion } from "framer-motion";
import clsx from "clsx";
import { menuItems } from "../navbar";
import Link from "next/link";

export const NavigationMenuBar = (
  {
    setMenuOptions,
  }: { setMenuOptions: (menu: MenuOptionsProps | null) => void },
  menuOptions: MenuOptionsProps
) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const renderMenu = (item: MenuItem) => {
    const { title, menu, options, href } = item;
    const handleMouseEnter = (menu: string) => {
      setActiveMenu(menu);
      setMenuOptions({
        menu: menu,
        title: title,
        options: item.options,
        active: true,
      });
    };
    const handleMouseLeave = () => {
      setActiveMenu(null);
      // setMenuOptions(null);
    };

    return (
      <div
        className="flex items-center relative "
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          <div >
            <Link href={href}>
              <div className="flex items-center hover:border-b-2 hover:border-sky-500 h-12">
                <div className="w-max mx-1 ">{title}</div>
                {options.length > 0 && (
                  <motion.div
                    variants={
                      {
                        // open: { rotate: 360 },
                        // closed: { rotate: 0 },
                      }
                    }
                    transition={{ duration: 0.6 }}
                    style={{ originY: 0.55 }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 20 20"
                      className={clsx(
                        "",
                        activeMenu === menu && "fill-sky-500"
                      )}
                    >
                      <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="
      hidden
      text-[16px]
      font-medium
      space-x-4
      items-center
      lg:flex
      h-24
    "
    >
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className="cursor-pointer hidden lg:block">
            {renderMenu(item)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

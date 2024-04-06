"use client";
import React, { useState } from "react";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./dropdown-menu";
import { Button } from "../../ui/button";

type ActionButtonsProps = {
  dropdownVisible: boolean;
  setDropdownVisible: (dropdownVisible: boolean)=>void;
};

const ActionButtons = ({
  dropdownVisible,
  setDropdownVisible,
}: ActionButtonsProps) => {
 
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="flex items-center md:justify-end lg:space-x-6 lg:pl-10">

      <div className="flex lg:space-x-4 items-center">

        <Link href={"/contact-us"}>
          <Button
            className="
            hidden
            text-white
            py-6
            lg:py-2
            text-sm
            font-light
            rounded-[40px]
            bg-sky-500
            hover:scale-110
            transition-all
            duration-300
            shadow-md
            md:hidden
            lg:flex
            hover:bg-sky-700
            hover:shadow-sky-900
  
        "
          >
            Contacte-Nos
          </Button>
        </Link>
      </div>
      <div className="">
        {dropdownVisible && (
          <div
            onClick={toggleDropdown}
            className="bg-sky-500 p-3 rounded-full lg:hidden cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-md hover:bg-sky-900 hover:shadow-sky-900"
          >
            <X className="h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full" />
          </div>
        )}
        {!dropdownVisible && (
          <div
            onClick={toggleDropdown}
            className="bg-[#eff0ff] p-3 rounded-full lg:hidden cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-md hover:bg-sky-900 hover:shadow-sky-900"
          >
            <AlignJustify className="h-6 w-6 text-sky-500 items-center justify-center rounded-full" />
          </div>
         )}
      </div>
      {
        dropdownVisible && <DropdownMenu onClose={closeDropdown} />
      }
    </div>
  );
};

export default ActionButtons;
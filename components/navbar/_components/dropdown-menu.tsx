"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { menuItems } from "../navbar";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../../ui/accordion";
import LanguageChanger from "@/components/LanguageChanger";
import { ProgressBarLink } from "@/components/progress-bar";

interface DropdownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onClose }) => {
  const [accordionValue, setAccordionValue] = useState<string | undefined>();
  const handleLinkClick = () => {
    // Just close the dropdown, navigation will happen via ProgressBarLink
    onClose();
  };

  return (
    <div className="max-w-2/3 min-w-1/2 bg-white dark:bg-gray-900 py-5 px-10 items-center justify-center absolute top-20 right-0 lg:hidden">
      <Accordion
        className="pl-2 text-lg"
        type="single"
        collapsible
        value={accordionValue}
        onValueChange={setAccordionValue}
      >
        {menuItems.map((item) => {
          if (item.options.length > 0) {
            return (
              <AccordionItem
                key={item.title}
                className="my-6  hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                value={item.menu}
              >
                <AccordionTrigger className="px-2">
                  <div className="font-medium py-4 px-2 my-6">{item.title}</div>
                </AccordionTrigger>
                <AccordionContent>
                  {item.options.map((option) => {
                    return (
                      <ProgressBarLink
                        key={option.label}
                        href={option.href}
                        className="pl-6"
                        onClick={handleLinkClick}
                      >
                        <div className="flex py-2 gap-6 pl-8 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900 rounded-md">
                          <div>{option.icon}</div>
                          <div>{option.label}</div>
                        </div>
                      </ProgressBarLink>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          } else {
            return (
              <ProgressBarLink
                key={item.title}
                href={item.href}
                className="
                flex
                flex-1
                items-center 
                justify-between
                 font-medium
                py-4
                px-2
                my-6
                border-b
                cursor-pointer
                hover:bg-gray-100
                dark:hover:bg-gray-700
                hover:underline
                rounded-md
                "
                onClick={handleLinkClick}
              >
                {item.title}
                <div>
                  <ArrowRight className="h-3.5 w-5 " />
                </div>
              </ProgressBarLink>
            );
          }
        })}
      </Accordion>
      <div className="lg:pt-32">
        <div className="flex items-center justify-center space-x-4">
          <ProgressBarLink href={"/contact-us"} onClick={handleLinkClick}>
            <Button
              className="
               text-white
               text-sm
               font-light
               bg-sky-500
               p-6 
               rounded-[40px]
               hover:scale-110
               transition-all
               duration-300
               shadow-md
               hover:bg-sky-700
               hover:shadow-sky-900
         "
            >
              Contacte-Nos
            </Button>
          </ProgressBarLink>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

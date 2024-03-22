import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";

import { menuItems } from "../navbar";

interface DropdownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen bg-white py-5 px-10 items-center justify-center absolute top-20 right-0 lg:hidden">
      <Accordion className="pl-2 text-lg" type="single" collapsible>
        {menuItems.map((item) => {
          if (item.options.length > 0) {
            return (
              <AccordionItem key={item.title} className="my-6 border-b hover:bg-gray-100 rounded-md" value={item.menu}>
                <AccordionTrigger className="px-2">{item.title}</AccordionTrigger>
                <AccordionContent>
                  {item.options.map((option) => {
                    return (
                      <Link
                        key={option.label}
                        href={option.href}
                        className="pl-6"
                        onClick={handleLinkClick}
                      >
                        <div className="flex py-2 gap-6 pl-8 cursor-pointer hover:bg-gray-200 rounded-md">
                          <div>{option.emoji}</div>
                          <div>{option.label}</div>
                        </div>
                      </Link>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          } else {
            return (
              <Link
              key={item.title}
              href={"/"}
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
                hover:underline
                rounded-md
                "
            >
              {item.title}
              <div>
                <ArrowRight className="h-3.5 w-5 " />
              </div>
            </Link>
            );
          }
        })}
       
      </Accordion>
      <div className="lg:pt-32">
        <div className="flex items-center justify-center space-x-4">
          <Link href={"/contact"}>
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
              Contactar-Nos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

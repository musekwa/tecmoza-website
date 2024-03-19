import React from "react";
import Link from "next/link";
import { ContentMenuProps } from "../types";


const ContentMenu: React.FC<ContentMenuProps> = ({ options }) => {
  return (
    // <div className="absolute top-24 left-0 right-0z-50 bg-white p-4 w-[300px] border">
    <div className="absolute top-24 left-auto right-auto">
      <ul
        className=""
      >
        {options.map((option, index) => (
          
          <Link href={option.href} key={index}>
            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-3xl">
              <div className="flex gap-4">
                <div>{option.emoji}</div>
                <div>{option.label}</div>
              </div>
            </div>
          </Link>
      
        ))}
      </ul>
    </div>
  );
};

export default ContentMenu;

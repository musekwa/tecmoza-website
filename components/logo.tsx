"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  size: "xl" | "lg" | "md" | "sm";
  href: string;
};

const Logo = React.forwardRef(({}, ref: any) => {

  return (
    <div ref={ref} className="flex justify-center items-center">
      <Image
        src="/images/logos/logo.jpeg"
        alt="logo tecmoza"
        width={45}
        height={45}
         className="cursor-pointer w-auto h-auto"
        priority
      />
      <div className={`text-2xl font-bold text-sky-500`}>TECMOZA</div>
    </div>
  );
});

export default Logo;

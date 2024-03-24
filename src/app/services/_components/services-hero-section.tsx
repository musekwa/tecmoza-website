"use client"
import Image from 'next/image'
import React from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

type Props = {}


const ServicesHeroSection = (props: Props) => {
  return (
    <motion.div 
      initial={{scale: 0.5, opacity: 0}}
      whileInView={{scale: 1, opacity: 1}}
      animate={{scale: 1, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}

      className="relative h-[300px]">
        <div className="absolute top-20 right-20  z-20">
          <h1 className="text-lg md:text-3xl lg:text-5xl font-bold text-white tracking-tight">
            PRINCIPAIS PRODUTOS E SERVIÇOS{" "}
          </h1>
        </div>

        <AspectRatio ratio={16 / 9} className="h-[300px] z-0 ">
          <Image
            src={"/images/services/services.jpg"}
            alt="Hero Image"
            fill
            style={{
              objectFit: "cover",
              //   aspectRatio: "16 / 9",
              //   objectPosition: "center",
            }}
            priority
          />
        </AspectRatio>
      </motion.div>
  )
}

export default ServicesHeroSection
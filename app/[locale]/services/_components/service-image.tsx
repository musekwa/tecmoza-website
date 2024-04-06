"use client";
import clsx from "clsx";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";



export interface AnimationProps {
  x?: number | string;
  y?: number | string;
  rotate?: number | string;
  opacity?: number | string;
  scale?: number | string;
}

type Props = {
  serviceName: string
  imageHref: string
  animation: AnimationProps
}

const ServiceImage = ({
  serviceName,
  imageHref,
  animation
}: Props) => {
  const { ref, inView, entry }  = useInView({ threshold: 0.1, triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      initial={{ x: animation.x, opacity: 0 }}
      animate={{ x: inView ? 0 : animation.x, opacity: inView ? 1 : 0 }}	
      transition={{ duration: 1.5, delay: 0 }}
      className="flex items-center justify-center w-full  "
    >
      <div className="flex justify-center items-center p-2 self-center ">
      <Image
        src={imageHref}
        alt={serviceName}
        width={500}
        height={500}
        className="animate-bounce-forever transition duration-3000"
        priority

      />

      </div>
    </motion.div>
  )
}

export default ServiceImage
"use client";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

type Props = {};

const AboutHeroSection = (props: Props) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative h-[300px]"
    >

      <AspectRatio ratio={1} className="h-[300px] z-0">
        <Image
          src={"/images/logos/tecmoza-banner.jpeg"}
          alt="Hero Image"
          fill
          style={{
            objectFit: "fill",
            //   aspectRatio: "16 / 9",
            //   objectPosition: "center",
          }}
          priority
        />
      </AspectRatio>
    </motion.div>
  );
};

export default AboutHeroSection;

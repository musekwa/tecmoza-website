"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

type Props = {};

const AboutHeroSection = (props: Props) => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(()=>{

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight((window.innerHeight));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className=""
    >

        <Image
          src={"/images/logos/tecmoza-banner.jpeg"}
          alt="Hero Image"
          width={viewportWidth}
          height={200}

          className=""
          priority
        />
     
    </motion.div>
  );
};

export default AboutHeroSection;

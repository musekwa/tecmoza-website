"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MoreVerticalIcon, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimationProps } from "./service-image";

type Props = {
    description: string;
    list?: string[];
    serviceHref: string;
    animation: AnimationProps;
}

const ServiceDescription = ({
    description,
    list,
    serviceHref,
    animation
}: Props) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
      });
      return (
        <motion.div
          className="w-full self-center grid justify-items-center  p-2"
          initial={{ opacity: 0, x: animation.x }}
          animate={{ x: inView ? 0 : animation.x, opacity: inView ? 1 : 0 }}	
          transition={{ duration: 0.5, delay: 0 }}
        >
          <div className="">
            <p className="text-xl lg:text-3xl font-bold text-center text-sky-500">
              {description}
            </p>
          </div>
          <ol className="flex flex-col gap-2 text-sky-900 text-[18px] p-6">
            {list?.map((item, index) => (
              <li className="flex gap-4 items-center" key={index}>
                <div className="w-10">
                  <ArrowRight className="w-6 h-6 text-sky-900" />
                </div>
                <p>{item}</p>
              </li>
            ))}
          </ol>
          <Link href={serviceHref} className="w-fit" ref={ref}>
            <Button className="bg-sky-500 rounded-full">
              Saiba mais
            </Button>
          </Link>
        </motion.div>
      );
}

export default ServiceDescription
"use client"
import { projects } from "@/lib/data/project";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useInView } from "react-intersection-observer";




type Props = {};

const ProjectsSection = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
    const router = useRouter();
    const handleNavigation = (href: string) => {
        router.push(href);
    }

  return (
    <div className="md:mt-40 ">
      <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: 0.5 }}

      className="grid grid-cols-1 md:grid-cols-2 px-6 lg:px-24 justify-items-center text-center gap-20 pb-20 ">
        {projects.map((project, index) => (
          <div 
          onClick={() => handleNavigation(project.href)}
          key={index}
          className="group w-full  flex flex-col items-center cursor-pointer">
            <Image
              src={project.image}
              alt={project.name}
              // fill
              width={500}
              height={500}
              priority
              style={{
                // aspectRatio: "1",
              }}
              className=" group-hover:scale-90 duration-300 transition-all ease-in-out"
            />
            <div className="py-6">
              <div className="flex flex-row gap-6 justify-around text-[14px] text-black">
                {project.activities.split(",").map((activity, index) => (
                  <div key={index}>{activity}</div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center text-black px-6 py-2">
                {project.technologies.split(",").map((technology, index) => (
                <Chip key={index} className="text-gray-500 bg-slate-200 text-[12px]">{technology}</Chip>
                ))}
              </div>
              <h1 className="text-xl lg:text-2xl text-black font-semibold group-hover:text-sky-500">
                {project.name} - {project.shortDescription}
              </h1>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;

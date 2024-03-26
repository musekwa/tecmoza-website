"use client";
import { projects } from "@/lib/data/project";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import SimilarProjectsSection from "../_components/similar-prects-section";
import ProjectCard from "../_components/project-card";

type Props = {};

const ProjectPage = (props: Props) => {
  const params = useParams();
  const project = projects.find(
    (project) => project.href.split("/").pop() === params.project
  );

  const router = useRouter();
  useEffect(() => {
    const handleNavigation = (href: string) => {
      router.push(href);
    };

    if (!project) {
      handleNavigation("/portfolio");
      return;
    }
  }, [params]);

  if (!project) {
    return null;
  }

  return (
    <div className="w-full h-full pb-20 ">
      <div className="flex flex-col justify-center items-center p-6 lg:p-24">
        <div className="p-16 bg-white rounded-2xl">
          <Image
            src={project.image}
            alt={project.name}
            width={600}
            height={600}
            priority
            style={{
              aspectRatio: "1",
            }}
            className="bg-gray-400 object-cover rounded-2xl  group-hover:scale-90 duration-300 transition-all ease-in-out"
          />
        </div>
        <div className="lg:w-2/3 py-12 flex flex-col lg:flex-row justify-between gap-6">
          <div className="w-full space-y-6">
            <div className="">
              <h1 className="font-semibold text-lg">Nome do produto:</h1>

              <p className="text-sm lg:text-[16px]  text-black leading-8">
                {project.name}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Actividades realizadas:</h4>
              {project.activities.split(",").map((activity, index) => (
                <p
                  className="text-sm lg:text-[16px]  text-black leading-8"
                  key={index}
                >
                  {activity}
                </p>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-lg">Tecnologia:</h4>
              {project.technologies.split(",").map((technology, index) => (
                <p
                  className="text-sm lg:text-[16px]  text-black leading-8"
                  key={index}
                >
                  {technology}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full space-y-6">
            <div>
              <h4 className="font-semibold text-lg">Breve Descrição:</h4>
              <p className="text-sm lg:text-[16px]  text-black leading-8">
                {project.longDescription}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Problemas resolvidos:</h4>
              <ol className="list-disc list-inside">
                {project.solvedProblems.map((problem, index) => (
                  <li
                    className="text-sm lg:text-[16px]  text-black leading-8"
                    key={index}
                  >
                    {problem}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Funcionalidades:</h4>
              <ol className="list-disc list-inside">
                {project.features.map((feature, index) => (
                  <li
                    className="text-sm lg:text-[16px]  text-black leading-8"
                    key={index}
                  >
                    {feature}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-6">
        <div className="p-6 lg:px-24">
          <h1 className="text-xl lg:text-3xl font-bold">Projectos Similares</h1>
          <div className="w-[75px] h-1 bg-yellow-500 my-4" />
        </div>
        <SimilarProjectsSection>
          {projects
            .filter((proj) => proj.name !== project.name)
            .map((project, index) => (
              <ProjectCard
                key={index}
                href={project.href}
                name={project.name}
                image={project.image}
                shortDescription={project.shortDescription}
              />
            ))}
        </SimilarProjectsSection>
      </div>
    </div>
  );
};

export default ProjectPage;
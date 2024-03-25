"use client";
import { projects } from "@/lib/data/project";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

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
    }
  }, [params]);

  return (
    <div className="w-full h-full ">
      <h1>{project?.name}</h1>
    </div>
  );
};

export default ProjectPage;

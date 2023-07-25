import {
  LargeProject,
  ProjectSmall,
  ProjectWrapper,
  ProjectWrapper2,
} from "@/devlink";
import getAllProjects from "@/lib/getAllProjects";
import React from "react";

const Project = async () => {
  const projects = await getAllProjects();
  const editorial = projects.filter(({ cat }) => {
    return cat == "Editorial";
  });
  const poster = projects.filter(({ cat }) => {
    return cat == "Poster";
  });
  const merch = projects.filter(({ cat }) => {
    return cat == "Merch";
  });
  const promo = projects.filter(({ cat }) => {
    return cat == "Promo";
  });
  return (
    <>
      <ProjectWrapper
        subheadingText="Editorial"
        projectLargeSlot={editorial.map((project) => (
          <LargeProject
            key={project._id}
            clientLogoImage={project.images[0]}
            projectTitle={project.title}
            link={{ href: `/portfolio/${project._id}` }}
          />
        ))}
      />
      <br />
      <br />
      <ProjectWrapper2
        subheadingText="Poster"
        projectSmallSlot={poster.map((project) => (
          <ProjectSmall
            key={project._id}
            clientLogoImage2={project.images[0]}
            projectTitle={project.title}
            link={{ href: `/portfolio/${project._id}` }}
          />
        ))}
      />
      <br />
      <br />
      <ProjectWrapper
        subheadingText="Merch"
        projectLargeSlot={merch.map((project) => (
          <LargeProject
            key={project._id}
            clientLogoImage={project.images[0]}
            projectTitle={project.title}
            link={{ href: `/portfolio/${project._id}` }}
          />
        ))}
      />
      <br />
      <br />
      <ProjectWrapper2
        subheadingText2="Promo"
        projectSmallSlot={promo.map((project) => (
          <ProjectSmall
            key={project._id}
            clientLogoImage2={project.images[0]}
            projectTitle={project.title}
            link={{ href: `/portfolio/${project._id}` }}
          />
        ))}
      />
    </>
  );
};

export default Project;

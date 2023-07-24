import {
  LargeProject,
  ProjectSmall,
  ProjectWrapper,
  ProjectWrapper2,
} from "@/devlink";
import getAllProjects from "@/lib/getAllProjects";
import React from "react";

const Project = async () => {
  // const projects = await getAllProjects();
  // const editorial = projects.filter(({ cat }) => {
  //   return cat == "Editorial";
  // });
  // const poster = projects.filter(({ cat }) => {
  //   return cat == "Poster";
  // });
  // const merch = projects.filter(({ cat }) => {
  //   return cat == "Merch";
  // });
  // const promo = projects.filter(({ cat }) => {
  //   return cat == "Promo";
  // });
  return (
    <>
      <ProjectWrapper
        subheadingText="Editorial"
        projectLargeSlot={<LargeProject />}
        // projectLargeSlot={projects[0].images.map((image) => (
        //   <LargeProject key={image} clientLogoImage={image} projectTitle=" " />
        // ))}
      />
      {/* <ProjectWrapper
        subheadingText="Poster"
        projectLargeSlot={poster.map((pic) => (
          <LargeProject clientLogoImage={pic.images[0]} projectTitle=" " />
        ))}
      />
      <ProjectWrapper
        subheadingText="Merch"
        projectLargeSlot={merch.map((pic) => (
          <LargeProject clientLogoImage={pic.images[0]} projectTitle=" " />
        ))}
      /> */}
      <br />
      <br />
      <ProjectWrapper2
        subheadingText2="Promo"
        projectSmallSlot={<ProjectSmall />}
        // projectSmallSlot={projects[1].images.map((image) => (
        //   <ProjectSmall key={image} clientLogoImage2={image} projectTitle=" " />
        // ))}
      />
    </>
  );
};

export default Project;

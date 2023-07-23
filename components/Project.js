import {
  LargeProject,
  ProjectSmall,
  ProjectWrapper,
  ProjectWrapper2,
} from "@/devlink";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Project = async () => {
  const projects = await getData();
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
        projectLargeSlot={projects[0].images.map((image) => (
          <LargeProject clientLogoImage={image} projectTitle=" " />
        ))}
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
        projectSmallSlot={projects[1].images.map((image) => (
          <ProjectSmall clientLogoImage2={image} projectTitle=" " />
        ))}
      />
    </>
  );
};

export default Project;

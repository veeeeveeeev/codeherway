"use client";
import {
  LargeProject,
  ProjectSmall,
  ProjectWrapper,
  ProjectWrapper2,
} from "@/devlink";
// import getAllProjects from "@/lib/getAllProjects";
import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Project = () => {
  const { data, error } = useSWR("/api/projects", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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
        projectLargeSlot={data[0].images.map((image) => (
          <LargeProject key={image} clientLogoImage={image} projectTitle=" " />
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
        projectSmallSlot={data[1].images.map((image) => (
          <ProjectSmall key={image} clientLogoImage2={image} projectTitle=" " />
        ))}
      />
    </>
  );
};

export default Project;

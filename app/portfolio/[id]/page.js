import { ProjectBody, ProjectImage, ProjectTop } from "@/devlink";
import getProject from "@/lib/getProject";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const post = await getProject(params.id);
  if (!post.title) {
    return {
      title: "User Not Found",
    };
  }
  return {
    title: post.title,
  };
}

const Detail = async ({ params }) => {
  const data = await getProject(params.id);
  if (!data.title) notFound();

  return (
    <>
      <ProjectTop title={data.title} desc={data.desc} />
      <ProjectBody
        projectImage={data.images.map((img) => (
          <ProjectImage key={img} image={img} />
        ))}
      />
    </>
  );
};

export default Detail;

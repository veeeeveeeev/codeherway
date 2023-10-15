import { PostBody, PostTop } from "@/devlink";
import React from "react";
import ViBlogBody from "@/components/ViBlogBody";
import getPost from "@/lib/getPost";
import { notFound } from "next/navigation";
import getTranslation from "@/lib/getTranslation";
export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  if (!post.title) {
    return {
      title: "User Not Found",
    };
  }
  return {
    title: post.title,
  };
}

const Post = async ({ params }) => {
  const data = await getPost(params.id);
  if (!data.title) notFound();

  //   const heading = await getTranslation(data.title);

  return (
    <div>
      <PostTop heading={data.title} />
      <PostBody image={data.image} richText={<ViBlogBody data={data} />} />
    </div>
  );
};

export default Post;

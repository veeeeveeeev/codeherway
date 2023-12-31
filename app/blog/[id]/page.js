import { PostBody, PostTop } from "@/devlink";
import React from "react";
import BlogBody from "@/components/BlogBody";
import getPost from "@/lib/getPost";
import { notFound } from "next/navigation";
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
  return (
    <div>
      <PostTop heading={data.title} />
      <PostBody image={data.image} richText={<BlogBody data={data} />} />
    </div>
  );
};

export default Post;

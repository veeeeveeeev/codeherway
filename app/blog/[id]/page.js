import { PostBody, PostTop } from "@/devlink";
import React from "react";
import BlogBody from "@/components/BlogBody";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
  };
}

const Post = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      <PostTop heading={data.title} />
      <PostBody image={data.image} richText={<BlogBody data={data} />} />
    </div>
  );
};

export default Post;

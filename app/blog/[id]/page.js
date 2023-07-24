"use client";
import { PostBody, PostTop } from "@/devlink";
import React from "react";
import BlogBody from "@/components/BlogBody";
import getPost from "@/lib/getPost";
// import getAllPosts from "@/lib/getAllPosts";
import { notFound } from "next/navigation";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

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

const Post = ({ params }) => {
  const { data, error } = useSWR(`/api/posts/${params.id}`, fetcher);
  if (error) return notFound();
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <PostTop heading={data.title} />
      <PostBody image={data.image} richText={<BlogBody data={data} />} />
    </div>
  );
};

export default Post;

// export async function generateStaticParams() {
//   const posts = await getAllPosts();
//   return posts.map((post) => ({
//     id: post.id,
//   }));
// }

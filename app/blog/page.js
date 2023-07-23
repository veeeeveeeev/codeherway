import {
  BlogBody,
  BlogComponent,
  BlogTop,
  SectionCallToAction,
} from "@/devlink";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div>
      <BlogTop headingTopText="BLOG - CODE HER WAY" />
      <BlogBody
        blogComponent={data.map((post) => (
          <BlogComponent
            imageBlog={post.image}
            headingBlog={post.title}
            catBlog={post.cat}
            headingLink={{ href: `/blog/${post._id}` }}
          />
        ))}
      />
      <SectionCallToAction />
    </div>
  );
};

export default Blog;

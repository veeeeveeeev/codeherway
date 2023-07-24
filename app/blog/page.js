import {
  BlogBody,
  BlogComponent,
  BlogTop,
  SectionCallToAction,
} from "@/devlink";
import getAllPosts from "@/lib/getAllPosts";
import React from "react";

const Blog = async () => {
  const data = await getAllPosts();

  return (
    <div>
      <BlogTop headingTopText="BLOG - CODE HER WAY" />
      <BlogBody
        blogComponent={data.map((post) => (
          <BlogComponent
            key={post.id}
            // imageBlog={post.image}
            headingBlog={post.title}
            catBlog={post.title}
            headingLink={{ href: `/blog/${post.id}` }}
          />
        ))}
      />
      <SectionCallToAction />
    </div>
  );
};

export default Blog;

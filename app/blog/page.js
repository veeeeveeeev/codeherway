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
            key={post._id}
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

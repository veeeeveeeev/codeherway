import Pagination from "@/components/Pagination";
import {
  BlogBody,
  BlogComponent,
  BlogTop,
  SectionCallToAction,
} from "@/devlink";
import getAllPosts from "@/lib/getAllPosts";
import getTranslation from "@/lib/getTranslation";
import React from "react";

const Blog = async ({ searchParams }) => {
  const posts = await getAllPosts();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const data = posts.slice(start, end);
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
        pagination={<Pagination next={end < posts.length} prev={start > 1} />}
      />

      <SectionCallToAction />
    </div>
  );
};

export default Blog;

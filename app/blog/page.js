"use client";
import {
  BlogBody,
  BlogComponent,
  BlogTop,
  SectionCallToAction,
} from "@/devlink";
// import getAllPosts from "@/lib/getAllPosts";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Blog = () => {
  const { data, error } = useSWR("/api/posts", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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

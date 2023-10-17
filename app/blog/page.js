import Pagination from "@/components/Pagination";
import View from "@/components/View";
import {
  BlogBody,
  BlogComponent,
  BlogTop,
  SectionCallToAction,
} from "@/devlink";
import getAllPosts from "@/lib/getAllPosts";
import increaseView from "@/lib/increaseView";
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
          <View post={post} />
        ))}
        pagination={<Pagination next={end < posts.length} prev={start > 1} />}
      />

      <SectionCallToAction />
    </div>
  );
};

export default Blog;

"use client";
import {
  HomeBlog,
  HomeBlogComponent,
  SectionCallToAction,
  SectionHero,
} from "@/devlink";
// import getAllPosts from "@/lib/getAllPosts";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR("/api/posts", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const feature = data.filter(({ feature }) => {
    return feature;
  });

  return (
    <>
      <SectionHero />
      <HomeBlog
        header="BLOG - CODE HER WAY"
        homeBlogComponent={feature.map((post) => (
          <HomeBlogComponent
            key={post._id}
            blogLink={{ href: `/blog/${post._id}` }}
            imageBlog={post.image}
            headingBlog={post.title}
            catBlog={post.cat}
          />
        ))}
        buttonText="VIEW ALL"
        blogBtnLink={{ href: "/blog" }}
      />
      <SectionCallToAction />
    </>
  );
};

export default Home;

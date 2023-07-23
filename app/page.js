import {
  HomeBlog,
  HomeBlogComponent,
  SectionCallToAction,
  SectionHero,
} from "@/devlink";
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Home = async () => {
  const data = await getData();
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

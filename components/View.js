// "use client";
import { BlogComponent } from "@/devlink";
// import increaseView from "@/lib/increaseView";

const View = ({ post }) => {
  return (
    <BlogComponent
      key={post._id}
      imageBlog={post.image}
      headingBlog={post.title}
      catBlog={post.cat}
      headingLink={{ href: `/blog/${post._id}` }}
      view={" "}
      //   onClick={increaseView(post._id)}
    />
  );
};

export default View;

const BlogBody = async ({ data }) => {
  return <div dangerouslySetInnerHTML={{ __html: data.body }} />;
};

export default BlogBody;

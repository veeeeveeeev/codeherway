import React from "react";

const BlogBody = ({ data }) => {
  return <div dangerouslySetInnerHTML={{ __html: data.body }} />;
};

export default BlogBody;

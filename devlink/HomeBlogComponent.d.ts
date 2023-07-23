import * as React from "react";
import * as Types from "./types";

declare function HomeBlogComponent(props: {
  as?: React.ElementType;
  blogLink?: Types.Basic.Link;
  imageBlog?: Types.Asset.Image;
  headingBlog?: React.ReactNode;
  catBlog?: React.ReactNode;
}): React.JSX.Element;

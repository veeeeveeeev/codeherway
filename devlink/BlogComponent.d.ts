import * as React from "react";
import * as Types from "./types";

declare function BlogComponent(props: {
  as?: React.ElementType;
  imageBlog?: Types.Asset.Image;
  headingLink?: Types.Basic.Link;
  headingBlog?: React.ReactNode;
  catBlog?: React.ReactNode;
  view?: React.ReactNode;
}): React.JSX.Element;

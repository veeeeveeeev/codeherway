import * as React from "react";
import * as Types from "./types";

declare function HomeBlog(props: {
  as?: React.ElementType;
  imageBlog?: Types.Asset.Image;
  headingBlog?: React.ReactNode;
  catBlog?: React.ReactNode;
  blogLink?: Types.Basic.Link;
  header?: React.ReactNode;
  blogBtnLink?: Types.Devlink.RuntimeProps;
  buttonText?: React.ReactNode;
  homeBlogComponent?: Types.Devlink.Slot;
}): React.JSX.Element;

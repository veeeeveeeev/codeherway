import * as React from "react";
import * as Types from "./types";

declare function BlogBody(props: {
  as?: React.ElementType;
  imageBlog?: Types.Asset.Image;
  headingBlog?: React.ReactNode;
  catBlog?: React.ReactNode;
  headingLink?: Types.Basic.Link;
  blogComponent?: Types.Devlink.Slot;
  back?: Types.Basic.Link;
  next?: Types.Basic.Link;
  hidden?: Types.Visibility.VisibilityConditions;
  pagination?: Types.Devlink.Slot;
}): React.JSX.Element;

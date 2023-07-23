import * as React from "react";
import * as Types from "./types";

declare function HomeBlog(props: {
  as?: React.ElementType;
  header?: React.ReactNode;
  blogBtnLink?: Types.Devlink.RuntimeProps;
  buttonText?: React.ReactNode;
  homeBlogComponent?: Types.Devlink.Slot;
}): React.JSX.Element;

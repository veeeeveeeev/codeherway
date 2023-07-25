import * as React from "react";
import * as Types from "./types";

declare function LargeProject(props: {
  as?: React.ElementType;
  clientLogoImage?: Types.Asset.Image;
  projectTitle?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;

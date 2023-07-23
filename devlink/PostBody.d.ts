import * as React from "react";
import * as Types from "./types";

declare function PostBody(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  richText?: Types.Basic.RichTextChildren;
}): React.JSX.Element;

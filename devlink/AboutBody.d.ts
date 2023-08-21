import * as React from "react";
import * as Types from "./types";

declare function AboutBody(props: {
  as?: React.ElementType;
  aboutImage?: Types.Asset.Image;
  introText?: React.ReactNode;
  image1?: Types.Asset.Image;
  imageBlock?: Types.Devlink.Slot;
  link?: Types.Basic.Link;
  textLink?: React.ReactNode;
}): React.JSX.Element;

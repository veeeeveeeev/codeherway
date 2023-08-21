import * as React from "react";
import * as Types from "./types";

declare function NewNav(props: {
  as?: React.ElementType;
  home?: Types.Basic.Link;
  blog?: Types.Basic.Link;
  porfolio?: Types.Basic.Link;
  contact?: Types.Basic.Link;
  about?: Types.Basic.Link;
}): React.JSX.Element;

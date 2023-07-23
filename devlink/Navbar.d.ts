import * as React from "react";
import * as Types from "./types";

declare function Navbar(props: {
  as?: React.ElementType;
  home?: Types.Basic.Link;
  blog?: Types.Basic.Link;
  portfolio?: Types.Basic.Link;
  about?: Types.Basic.Link;
  contact?: Types.Basic.Link;
}): React.JSX.Element;

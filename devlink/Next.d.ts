import * as React from "react";
import * as Types from "./types";

declare function Next(props: {
  as?: React.ElementType;
  next?: Types.Basic.Link;
}): React.JSX.Element;

import * as React from "react";
import * as Types from "./types";

declare function Next(props: {
  as?: React.ElementType;
  hide?: Types.Visibility.VisibilityConditions;
  next?: Types.Basic.Link;
}): React.JSX.Element;

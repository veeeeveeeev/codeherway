import * as React from "react";
import * as Types from "./types";

declare function Previous(props: {
  as?: React.ElementType;
  hide?: Types.Visibility.VisibilityConditions;
  hidden?: Types.Visibility.VisibilityConditions;
  back?: Types.Basic.Link;
}): React.JSX.Element;

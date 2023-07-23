import * as React from "react";
import * as Types from "./types";

declare function ProjectWrapper(props: {
  as?: React.ElementType;
  subheadingText?: React.ReactNode;
  projectLargeSlot?: Types.Devlink.Slot;
}): React.JSX.Element;

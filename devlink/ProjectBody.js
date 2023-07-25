import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProjectBody.module.css";

export function ProjectBody({
  as: _Component = _Builtin.Section,
  projectImage,
}) {
  return (
    <_Component tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "content")} tag="div">
        {projectImage}
      </_Builtin.Block>
    </_Component>
  );
}

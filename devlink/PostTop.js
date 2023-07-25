import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PostTop.module.css";

export function PostTop({
  as: _Component = _Builtin.Section,
  heading = "Anne Wojcicki - Democratizing Genetic Testing",
}) {
  return (
    <_Component className={_utils.cx(_styles, "section-project-top")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "block-top-2")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-project-top-2")}
          dyn={{
            bind: {},
          }}
          tag="h1"
        >
          {heading}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "project-line-long-2")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}

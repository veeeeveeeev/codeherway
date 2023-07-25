import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PostBody.module.css";

export function PostBody({
  as: _Component = _Builtin.Section,
  image = "",
  richText = "",
}) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "content-2")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image-project-main-2")}
          dyn={{
            bind: {},
          }}
          height="auto"
          loading="lazy"
          width="auto"
          src={image}
        />
        <_Builtin.RichText
          className={_utils.cx(_styles, "rich-text-block")}
          dyn={{
            bind: {},
          }}
          tag="div"
        >
          {richText}
        </_Builtin.RichText>
      </_Builtin.Block>
    </_Component>
  );
}

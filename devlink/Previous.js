import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Previous.module.css";

export function Previous({
  as: _Component = _Builtin.Link,
  hidden = true,

  back = {
    href: "#",
  },
}) {
  return hidden ? (
    <_Component
      className={_utils.cx(_styles, "button", "next")}
      button={false}
      options={back}
    >
      <_Builtin.Block className={_utils.cx(_styles, "text-block-5")} tag="div">
        {"Chevron_left"}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-block-6")}
        block="inline"
        tag="div"
      >
        {"Previous"}
      </_Builtin.Block>
    </_Component>
  ) : null;
}

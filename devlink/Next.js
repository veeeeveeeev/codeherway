import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Next.module.css";

export function Next({
  as: _Component = _Builtin.Link,
  hide,
  next = {
    href: "#",
  },
}) {
  console.log(hide);
  return (
    <_Component
      className={_utils.cx(_styles, "button", "next", !hide && "hide")}
      button={false}
      options={next}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "text-block-6")}
        block="inline"
        tag="div"
      >
        {"Next"}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "text-block-5")} tag="div">
        {"chevron_right"}
      </_Builtin.Block>
    </_Component>
  );
}

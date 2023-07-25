import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProjectImage.module.css";

export function ProjectImage({
  as: _Component = _Builtin.Image,
  image = "https://uploads-ssl.webflow.com/64a66f68b6db9c22b28bd749/64b368587079905e88a5effc_301208922_5310248965689375_7294085252739612083_n.jpg",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "image-project-main")}
      dyn={{
        bind: {},
      }}
      height="auto"
      loading="lazy"
      width="auto"
      src={image}
    />
  );
}

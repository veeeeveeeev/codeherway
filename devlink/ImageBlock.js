import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImageBlock.module.css";

export function ImageBlock({ as: _Component = _Builtin.Block, image = "" }) {
  return (
    <_Component
      className={_utils.cx(_styles, "client")}
      id={_utils.cx(
        _styles,
        "w-node-e7ae2855-5114-286b-b05f-38d750eadc7b-50eadc7b"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "block-client-logo")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image-3")}
          loading="lazy"
          width="auto"
          height="auto"
          src={image}
        />
      </_Builtin.Block>
    </_Component>
  );
}

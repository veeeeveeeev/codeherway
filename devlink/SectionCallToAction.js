import React from "react";
import * as _Builtin from "./_Builtin";
import { CallToAction } from "./CallToAction";
import * as _utils from "./utils";
import _styles from "./SectionCallToAction.module.css";

export function SectionCallToAction({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-call-to-action")}
      tag="div"
    >
      <CallToAction ctaLink={{ href: "/portfolio" }} />
    </_Component>
  );
}

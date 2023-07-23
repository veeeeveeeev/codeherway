import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ProjectWrapper2.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-157":{"id":"e-157","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"600d6825-940d-daae-c2c1-9ae3b11a900f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"600d6825-940d-daae-c2c1-9ae3b11a900f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689478004528},"e-158":{"id":"e-158","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-157"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"600d6825-940d-daae-c2c1-9ae3b11a900f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"600d6825-940d-daae-c2c1-9ae3b11a900f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689478004528}},"actionLists":{"a-27":{"id":"a-27","title":"View 0.2s + Move","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-27-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}},{"id":"a-27-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116},"a-28":{"id":"a-28","title":"View Out + Move","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650941127116}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ProjectWrapper2({
  as: _Component = _Builtin.Grid,
  subheadingText2 = (
    <>
      {"PROMO"}
      <br />
      {"‍"}
    </>
  ),
  clientLogoImage2 = "https://uploads-ssl.webflow.com/64a66f68b6db9c22b28bd749/64b2ae3a605b77f62557d59b_Copy%20of%20mai%20mo%20don.jpg",
  projectSmallSlot,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "grid-about")}
      data-w-id="600d6825-940d-daae-c2c1-9ae3b11a900f"
      tag="div"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "subheading")}
        id={_utils.cx(
          _styles,
          "w-node-_600d6825-940d-daae-c2c1-9ae3b11a9010-b11a900f"
        )}
        tag="h6"
      >
        {subheadingText2}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(_styles, "block-about")}
        id={_utils.cx(
          _styles,
          "w-node-_600d6825-940d-daae-c2c1-9ae3b11a9011-b11a900f"
        )}
        tag="div"
      >
        <_Builtin.Grid className={_utils.cx(_styles, "grid-client")} tag="div">
          {projectSmallSlot}
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}

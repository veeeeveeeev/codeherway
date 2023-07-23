import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ErrorPage.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-148":{"id":"e-148","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-149"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dea75633-b741-6de5-3bf3-941b80074fe9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dea75633-b741-6de5-3bf3-941b80074fe9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651733320929},"e-149":{"id":"e-149","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-148"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dea75633-b741-6de5-3bf3-941b80074fe9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dea75633-b741-6de5-3bf3-941b80074fe9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651733320930}},"actionLists":{"a-27":{"id":"a-27","title":"View 0.2s + Move","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-27-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}},{"id":"a-27-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116},"a-28":{"id":"a-28","title":"View Out + Move","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650941127116}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ErrorPage({
  as: _Component = _Builtin.Block,

  homeLink = {
    href: "#",
  },
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "utility-page-wrap")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "utility-page-content")}
        data-w-id="dea75633-b741-6de5-3bf3-941b80074fe9"
        tag="div"
      >
        <_Builtin.Heading tag="h2">{"Page Not Found"}</_Builtin.Heading>
        <_Builtin.Paragraph>
          {"The page you are looking for doesn't exist or has been moved"}
        </_Builtin.Paragraph>
        <_Builtin.Link
          className={_utils.cx(_styles, "button")}
          button={true}
          options={homeLink}
        >
          {"Back to Home"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}

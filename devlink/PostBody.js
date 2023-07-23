import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./PostBody.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-72":{"id":"e-72","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-73"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"25d4b2bd-9ef5-f433-bf6f-9102fd75a390","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"25d4b2bd-9ef5-f433-bf6f-9102fd75a390","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651289954121},"e-73":{"id":"e-73","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"25d4b2bd-9ef5-f433-bf6f-9102fd75a390","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"25d4b2bd-9ef5-f433-bf6f-9102fd75a390","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651289954122},"e-74":{"id":"e-74","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-75"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"25d4b2bd-9ef5-f433-bf6f-9102fd75a391","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"25d4b2bd-9ef5-f433-bf6f-9102fd75a391","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651290101628},"e-75":{"id":"e-75","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"25d4b2bd-9ef5-f433-bf6f-9102fd75a391","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"25d4b2bd-9ef5-f433-bf6f-9102fd75a391","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651290101628}},"actionLists":{"a-27":{"id":"a-27","title":"View 0.2s + Move","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-27-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}},{"id":"a-27-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116},"a-28":{"id":"a-28","title":"View Out + Move","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650941127116}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PostBody({
  as: _Component = _Builtin.Section,
  image = "",
  richText = "",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "content")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image-project-main")}
          data-w-id="25d4b2bd-9ef5-f433-bf6f-9102fd75a390"
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
          data-w-id="25d4b2bd-9ef5-f433-bf6f-9102fd75a391"
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

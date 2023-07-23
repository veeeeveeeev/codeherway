import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./PostTop.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-60":{"id":"e-60","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dfdd945f-a989-5f53-9ac8-d73f27d364f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dfdd945f-a989-5f53-9ac8-d73f27d364f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651288188841},"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dfdd945f-a989-5f53-9ac8-d73f27d364f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dfdd945f-a989-5f53-9ac8-d73f27d364f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651288188842},"e-66":{"id":"e-66","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-67"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dfdd945f-a989-5f53-9ac8-d73f27d364f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dfdd945f-a989-5f53-9ac8-d73f27d364f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651288373689},"e-67":{"id":"e-67","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-66"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dfdd945f-a989-5f53-9ac8-d73f27d364f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dfdd945f-a989-5f53-9ac8-d73f27d364f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651288373690}},"actionLists":{"a-27":{"id":"a-27","title":"View 0.2s + Move","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-27-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}},{"id":"a-27-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116},"a-28":{"id":"a-28","title":"View Out + Move","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650941127116},"a-32":{"id":"a-32","title":"View 0.5s + Move","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-32-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-32-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}},{"id":"a-32-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PostTop({
  as: _Component = _Builtin.Section,
  heading = "Heading",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-project-top")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "block-top")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-project-top")}
          data-w-id="dfdd945f-a989-5f53-9ac8-d73f27d364f6"
          dyn={{
            bind: {},
          }}
          tag="h1"
        >
          {heading}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "project-line-long")}
          data-w-id="dfdd945f-a989-5f53-9ac8-d73f27d364f8"
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}

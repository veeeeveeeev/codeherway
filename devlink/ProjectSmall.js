import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ProjectSmall.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-242":{"id":"e-242","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-243"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"206522c1-d988-ca66-45b3-8a46aa14697c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"206522c1-d988-ca66-45b3-8a46aa14697c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689839156897},"e-243":{"id":"e-243","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-242"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"206522c1-d988-ca66-45b3-8a46aa14697c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"206522c1-d988-ca66-45b3-8a46aa14697c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689839156898},"e-244":{"id":"e-244","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-245"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e2ef4643-b8d1-b746-10ff-4a0be4790d09","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e2ef4643-b8d1-b746-10ff-4a0be4790d09","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689839912411},"e-245":{"id":"e-245","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e2ef4643-b8d1-b746-10ff-4a0be4790d09","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e2ef4643-b8d1-b746-10ff-4a0be4790d09","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689839912415}},"actionLists":{"a-39":{"id":"a-39","title":"Project - On","actionItemGroups":[{"actionItems":[{"id":"a-39-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".text-block-2","selectorGuids":["3b8ed01a-b10b-73d4-e60a-28968413356d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1689838949696},"a-40":{"id":"a-40","title":"Project Out","actionItemGroups":[{"actionItems":[{"id":"a-40-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".text-block-2","selectorGuids":["3b8ed01a-b10b-73d4-e60a-28968413356d"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1689839098698}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ProjectSmall({
  as: _Component = _Builtin.Block,
  clientLogoImage2 = "https://uploads-ssl.webflow.com/64a66f68b6db9c22b28bd749/64b2ae3a605b77f62557d59b_Copy%20of%20mai%20mo%20don.jpg",
  projectTitle = "Hiellllhfoaiagihaeohi",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "client")}
      id={_utils.cx(
        _styles,
        "w-node-e2ef4643-b8d1-b746-10ff-4a0be4790d07-e4790d07"
      )}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "div-block")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-block-2")}
          tag="div"
        >
          {projectTitle}
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "client-logo", "promo")}
          data-w-id="e2ef4643-b8d1-b746-10ff-4a0be4790d09"
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src={clientLogoImage2}
        />
      </_Builtin.Block>
    </_Component>
  );
}

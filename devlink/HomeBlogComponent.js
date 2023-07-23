import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HomeBlogComponent.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-176":{"id":"e-176","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b27defa-f478-f85c-bb59-e52df6514723","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b27defa-f478-f85c-bb59-e52df6514723","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689677724816},"e-177":{"id":"e-177","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b27defa-f478-f85c-bb59-e52df6514723","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b27defa-f478-f85c-bb59-e52df6514723","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689677724816},"e-178":{"id":"e-178","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-179"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b27defa-f478-f85c-bb59-e52df6514723","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b27defa-f478-f85c-bb59-e52df6514723","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689677724816},"e-179":{"id":"e-179","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b27defa-f478-f85c-bb59-e52df6514723","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b27defa-f478-f85c-bb59-e52df6514723","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689677724816},"e-180":{"id":"e-180","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-181"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b27defa-f478-f85c-bb59-e52df6514726","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b27defa-f478-f85c-bb59-e52df6514726","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689677724816},"e-181":{"id":"e-181","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-180"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b27defa-f478-f85c-bb59-e52df6514726","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b27defa-f478-f85c-bb59-e52df6514726","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689677724816},"e-217":{"id":"e-217","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-218"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|7e97b6e8-60d7-407e-8e77-73d16356ba5f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|7e97b6e8-60d7-407e-8e77-73d16356ba5f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689756761017},"e-218":{"id":"e-218","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-217"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|7e97b6e8-60d7-407e-8e77-73d16356ba5f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|7e97b6e8-60d7-407e-8e77-73d16356ba5f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689756761017},"e-219":{"id":"e-219","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-220"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|7e97b6e8-60d7-407e-8e77-73d16356ba5f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|7e97b6e8-60d7-407e-8e77-73d16356ba5f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689756761017},"e-220":{"id":"e-220","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-219"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|7e97b6e8-60d7-407e-8e77-73d16356ba5f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|7e97b6e8-60d7-407e-8e77-73d16356ba5f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689756761017},"e-221":{"id":"e-221","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|2058ffe5-4e4e-1e09-948f-a1badc33b0ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|2058ffe5-4e4e-1e09-948f-a1badc33b0ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689756764269},"e-222":{"id":"e-222","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-221"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|2058ffe5-4e4e-1e09-948f-a1badc33b0ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|2058ffe5-4e4e-1e09-948f-a1badc33b0ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689756764269},"e-223":{"id":"e-223","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|2058ffe5-4e4e-1e09-948f-a1badc33b0ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|2058ffe5-4e4e-1e09-948f-a1badc33b0ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689756764269},"e-224":{"id":"e-224","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-223"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|2058ffe5-4e4e-1e09-948f-a1badc33b0ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|2058ffe5-4e4e-1e09-948f-a1badc33b0ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689756764269},"e-238":{"id":"e-238","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-239"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd815|74a0a620-bed0-c80e-add7-85aea038f697","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd815|74a0a620-bed0-c80e-add7-85aea038f697","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689829695089},"e-239":{"id":"e-239","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-238"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd815|74a0a620-bed0-c80e-add7-85aea038f697","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd815|74a0a620-bed0-c80e-add7-85aea038f697","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689829695089},"e-262":{"id":"e-262","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-263"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"120e7166-b355-6abe-cc45-9aeab19661a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"120e7166-b355-6abe-cc45-9aeab19661a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689931126946},"e-263":{"id":"e-263","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-262"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"120e7166-b355-6abe-cc45-9aeab19661a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"120e7166-b355-6abe-cc45-9aeab19661a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689931126946},"e-264":{"id":"e-264","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-265"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"120e7166-b355-6abe-cc45-9aeab19661a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"120e7166-b355-6abe-cc45-9aeab19661a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689931126946},"e-265":{"id":"e-265","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-264"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"120e7166-b355-6abe-cc45-9aeab19661a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"120e7166-b355-6abe-cc45-9aeab19661a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689931126946},"e-270":{"id":"e-270","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-271"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|15b10f34-46e3-92d5-8425-cc1d4d3c6e79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|15b10f34-46e3-92d5-8425-cc1d4d3c6e79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689931833266},"e-271":{"id":"e-271","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-270"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|15b10f34-46e3-92d5-8425-cc1d4d3c6e79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|15b10f34-46e3-92d5-8425-cc1d4d3c6e79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689931833266},"e-272":{"id":"e-272","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-273"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|15b10f34-46e3-92d5-8425-cc1d4d3c6e79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|15b10f34-46e3-92d5-8425-cc1d4d3c6e79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689931833266},"e-273":{"id":"e-273","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64a66f68b6db9c22b28bd81f|15b10f34-46e3-92d5-8425-cc1d4d3c6e79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64a66f68b6db9c22b28bd81f|15b10f34-46e3-92d5-8425-cc1d4d3c6e79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689931833266}},"actionLists":{"a-20":{"id":"a-20","title":"Image Project - On","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".block-image-project","selectorGuids":["2a613e43-83a1-7ce4-4ad9-b87d310f44e6"]},"xValue":0.95,"yValue":0.95,"locked":true}},{"id":"a-20-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".image-project","selectorGuids":["07f4712e-8a4e-8d1f-4d45-cd68eb618ab7"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1651030647294},"a-21":{"id":"a-21","title":"Image Project - Out","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".block-image-project","selectorGuids":["2a613e43-83a1-7ce4-4ad9-b87d310f44e6"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-21-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".image-project","selectorGuids":["07f4712e-8a4e-8d1f-4d45-cd68eb618ab7"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1651030647294},"a-25":{"id":"a-25","title":"View 0.0s","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-25-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116},"a-24":{"id":"a-24","title":"View Out","actionItemGroups":[{"actionItems":[{"id":"a-24-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650941127116}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeBlogComponent({
  as: _Component = _Builtin.Block,

  blogLink = {
    href: "#",
  },

  imageBlog = "",
  headingBlog = "Heading",
  catBlog = "Text Link",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "collection-item")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "project")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "link-block-image-project")}
          data-w-id="7b27defa-f478-f85c-bb59-e52df6514723"
          button={false}
          dyn={{
            bind: {},
          }}
          options={blogLink}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "block-image-project")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-project")}
              dyn={{
                bind: {},
              }}
              height="auto"
              loading="eager"
              width="auto"
              src={imageBlog}
            />
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "link-heading-project")}
          data-w-id="7b27defa-f478-f85c-bb59-e52df6514726"
          button={false}
          dyn={{
            bind: {},
          }}
          options={blogLink}
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-project")}
            dyn={{
              bind: {},
            }}
            tag="h5"
          >
            {headingBlog}
          </_Builtin.Heading>
        </_Builtin.Link>
        <_Builtin.Block className={_utils.cx(_styles, "text-link")} tag="div">
          {catBlog}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

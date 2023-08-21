import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AboutBody.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-284":{"id":"e-284","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-285"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e9d635d-440f-64a1-137a-629543453d64","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e9d635d-440f-64a1-137a-629543453d64","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651540723387},"e-285":{"id":"e-285","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-284"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e9d635d-440f-64a1-137a-629543453d64","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e9d635d-440f-64a1-137a-629543453d64","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651540723388},"e-286":{"id":"e-286","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-287"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e9d635d-440f-64a1-137a-629543453d65","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e9d635d-440f-64a1-137a-629543453d65","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651540692038},"e-287":{"id":"e-287","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e9d635d-440f-64a1-137a-629543453d65","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e9d635d-440f-64a1-137a-629543453d65","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651540692039},"e-288":{"id":"e-288","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-289"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e9d635d-440f-64a1-137a-629543453d6c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e9d635d-440f-64a1-137a-629543453d6c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651540738891},"e-289":{"id":"e-289","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-288"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e9d635d-440f-64a1-137a-629543453d6c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e9d635d-440f-64a1-137a-629543453d6c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651540738891},"e-290":{"id":"e-290","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-291"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e9d635d-440f-64a1-137a-629543453d83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e9d635d-440f-64a1-137a-629543453d83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651541988572},"e-291":{"id":"e-291","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-290"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e9d635d-440f-64a1-137a-629543453d83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e9d635d-440f-64a1-137a-629543453d83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1651541988572},"e-292":{"id":"e-292","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-293"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e9d635d-440f-64a1-137a-629543453d93","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1692093003357},"e-293":{"id":"e-293","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e9d635d-440f-64a1-137a-629543453d93","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1692093003357}},"actionLists":{"a-30":{"id":"a-30","title":"View 0.3s + Move","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-30-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}},{"id":"a-30-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116},"a-28":{"id":"a-28","title":"View Out + Move","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650941127116},"a-27":{"id":"a-27","title":"View 0.2s + Move","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":0,"unit":""}},{"id":"a-27-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"value":1,"unit":""}},{"id":"a-27-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":700,"target":{"useEventTarget":true,"id":"6b729c56-a548-b7c0-5ed0-d42db2ae2152"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650941127116}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AboutBody({
  as: _Component = _Builtin.Section,
  aboutImage = "",
  introText = "I am a self-taught programmer, and was able to create this website from scratch! My two biggest hobbies are coding and designing. I love exploring new things, hanging out with friends, binging shows, doing puzzles, visiting museums, going out for cafes, planning, journaling, going on road trips, and so much more!",
  // image1 = "",
  // imageBlock,

  link = {
    href: "#",
  },

  textLink = "Text Link",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section", "page")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "about")}
        data-w-id="8e9d635d-440f-64a1-137a-629543453d64"
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "grid-about-2")}
          data-w-id="8e9d635d-440f-64a1-137a-629543453d65"
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-2")}
            id={_utils.cx(
              _styles,
              "w-node-_8e9d635d-440f-64a1-137a-629543453d66-43453d63"
            )}
            loading="lazy"
            height={160}
            width={160}
            src={aboutImage}
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "block-about")}
            id={_utils.cx(
              _styles,
              "w-node-_8e9d635d-440f-64a1-137a-629543453d67-43453d63"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-4")}
              tag="h3"
            >
              {
                "Hi! I am Khue, a Vietnamese highschool student full of passion and determination."
              }
            </_Builtin.Heading>
            <_Builtin.Paragraph
              id={_utils.cx(
                _styles,
                "w-node-_8e9d635d-440f-64a1-137a-629543453d6a-43453d63"
              )}
            >
              {introText}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Grid>
        <_Builtin.Grid
          className={_utils.cx(_styles, "grid-about-2")}
          data-w-id="8e9d635d-440f-64a1-137a-629543453d83"
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "subheading")}
            id={_utils.cx(
              _styles,
              "w-node-_8e9d635d-440f-64a1-137a-629543453d84-43453d63"
            )}
            tag="h3"
          >
            {"Why "}
            <br />
            {"Code Her Way?"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "block-about")}
            id={_utils.cx(
              _styles,
              "w-node-_8e9d635d-440f-64a1-137a-629543453d88-43453d63"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-award")}
              tag="h3"
            >
              {"Where it all started"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "awards-info", "first")}
              tag="div"
            >
              {
                "On my journey to become a programmer, I have experienced a lot of hardship and problems, including lack of resources, guides, and doubts from others. There are even times when I have come close to quitting due to frustration. Fortunately, I have people encouraging me and guiding me along my journey. But I know not everyone does. I want to be able to help people throughout their coding process and offer them support so that they would not feel lonely and lose interest in this field. Hence, Code Her Way was born."
              }
              <br />
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-award")}
              tag="h3"
            >
              {"Purpose"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "awards-info", "first")}
              id={_utils.cx(
                _styles,
                "w-node-_8e9d635d-440f-64a1-137a-629543453d90-43453d63"
              )}
              tag="div"
            >
              {
                "Code Her Way’s main purpose is to empower people, especially girls, regardless of any background to pursue their passion: coding. This website is a platform that provides users with computer-science-related content as well as inspires them on their own journey to become a computer scientist. Despite the name, the blog is for everyone! People of all ages, genders, and levels can join this community to learn more about computer science and support each other!"
              }
              <br />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
        <_Builtin.Grid
          className={_utils.cx(_styles, "grid-about-2")}
          data-w-id="8e9d635d-440f-64a1-137a-629543453d93"
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "subheading")}
            id={_utils.cx(
              _styles,
              "w-node-_8e9d635d-440f-64a1-137a-629543453d94-43453d63"
            )}
            tag="h3"
          >
            {"More About Me"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "block-about")}
            id={_utils.cx(
              _styles,
              "w-node-_8e9d635d-440f-64a1-137a-629543453d96-43453d63"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-award")}
              tag="h3"
            >
              {"Resume"}
            </_Builtin.Heading>
            <_Builtin.Link
              className={_utils.cx(_styles, "awards-info", "first")}
              button={false}
              options={link}
            >
              {textLink}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}

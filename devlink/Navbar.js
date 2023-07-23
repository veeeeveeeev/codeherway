import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".nav-overflow","originalId":"006c6e91-d11f-ed2c-debd-ab813c3d2164","appliesTo":"CLASS"},"targets":[{"selector":".nav-overflow","originalId":"006c6e91-d11f-ed2c-debd-ab813c3d2164","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650939191462},"e-22":{"id":"e-22","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-229"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".nav-overflow","originalId":"006c6e91-d11f-ed2c-debd-ab813c3d2164","appliesTo":"CLASS"},"targets":[{"selector":".nav-overflow","originalId":"006c6e91-d11f-ed2c-debd-ab813c3d2164","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650939191462},"e-231":{"id":"e-231","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb199","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb199","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689828567754},"e-232":{"id":"e-232","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-231"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb199","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4018dd8e-2bd5-971d-3766-c9cb3ddeb199","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689828567756}},"actionLists":{"a-16":{"id":"a-16","title":"Nav Link - On","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".nav-overflow","selectorGuids":["88e9c080-2091-62ff-018d-5d4ee2c029af"]},"value":0.3,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650939196729},"a-17":{"id":"a-17","title":"Nav Link - Out","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".nav-overflow","selectorGuids":["88e9c080-2091-62ff-018d-5d4ee2c029af"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650939282143},"a-14":{"id":"a-14","title":"Navbar - Open","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".nav-overflow","selectorGuids":["88e9c080-2091-62ff-018d-5d4ee2c029af"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-14-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":700,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".nav-overflow","selectorGuids":["88e9c080-2091-62ff-018d-5d4ee2c029af"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1650847717657},"a-15":{"id":"a-15","title":"Navbar - Close","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".nav-overflow","selectorGuids":["88e9c080-2091-62ff-018d-5d4ee2c029af"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650847717657}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({
  as: _Component = _Builtin.NavbarWrapper,

  home = {
    href: "#",
  },

  blog = {
    href: "#",
  },

  portfolio = {
    href: "#",
  },

  about = {
    href: "#",
  },

  contact = {
    href: "#",
  },
}) {
  _interactions.useInteractions(_interactionsData, _styles);
  return;
}

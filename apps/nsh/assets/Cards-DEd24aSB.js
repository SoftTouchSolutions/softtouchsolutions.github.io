import { a as React, P as PropTypes, r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { m as mapToCssModules, i as classnames, t as tagPropType, f as PageHeaders, R as Row, C as Col, g as Card, h as CardBody, n as CardHeader, B as Button, F as Form, I as Input, b as Link, w as Modal, x as ModalHeader, y as ModalBody, L as Label } from "./index-AOv_UoEY.js";
import { N as Nav } from "./Nav-gO3mkbbi.js";
import { N as NavItem } from "./NavItem-BNbPYxZP.js";
import { N as NavLink } from "./NavLink-CbHYmh6A.js";
import { C as CardFooter } from "./CardFooter-B6NzWbA-.js";
import { C as CardTitle } from "./CardTitle-p-89_2wb.js";
import { L as ListGroup, a as ListGroupItem } from "./ListGroupItem-DEGIFh9u.js";
import { p as photo10 } from "./10-8A9hOF9c.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
var _excluded$1 = ["className", "cssModule", "tag", "innerRef"];
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes$1 = {
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
function CardLink(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "a" : _props$tag, innerRef = props.innerRef, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classnames(className, "card-link"), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
    ref: innerRef,
    className: classes
  }));
}
CardLink.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "tag"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
};
function CardText(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "p" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classnames(className, "card-text"), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
CardText.propTypes = propTypes;
const data = [
  {
    id: "1",
    name: "Basic card",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    footer: "This is Basic card footer",
    icon: "fe fe-chevron-up",
    remove: "fe fe-x"
  },
  {
    id: "2",
    name: "Basic card",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    footer: "This is Basic card footer",
    icon: "fe fe-chevron-up",
    remove: "fe fe-x"
  },
  {
    id: "3",
    name: "Basic Color Card-Header",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    footer: "This is Basic card footer",
    classheader: "bg-primary",
    titleclass: "text-white",
    icon: "fe fe-chevron-up text-white",
    remove: "fe fe-x text-white"
  },
  {
    id: "4",
    icon: "fe fe-chevron-up",
    name: "Basic Color Card-Footer",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    footer: "This is Basic card footer",
    classfooter: "bg-info text-white",
    remove: "fe fe-x"
  }
];
const Backgrounddata = [
  {
    id: "1",
    class: "bg-primary text-white",
    header: "Primary Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    icon: "fe fe-chevron-up text-white",
    remove: "fe fe-x text-white"
  },
  {
    id: "2",
    class: "text-white bg-secondary",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    header: "Secondary Card Title",
    icon: "fe fe-chevron-up text-white",
    remove: "fe fe-x text-white"
  }
];
const Alertdata = [
  {
    id: "1",
    class: "card-alert alert alert-success mb-0",
    text: " Adding action was successful"
  },
  {
    id: "2",
    class: "card-alert alert alert-danger mb-0",
    text: "Adding action failed"
  }
];
const loaderdata = [
  {
    loaders: "spinner",
    id: "1"
  },
  {
    loaders: "spinner1",
    id: "2",
    text: "double-bounce1",
    text2: "double-bounce2"
  }
];
const Builtdata = [
  {
    id: "1",
    name: "Built card",
    text: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
    id: "2",
    name: "Card Blue",
    text: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    status: "card-status bg-blue"
  },
  {
    id: "3",
    name: "Card Status On Left Side",
    text: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    status: "card-status card-status-left bg-red br-bl-7 br-tl-7"
  }
];
const Cards = () => {
  const [remove, Setremove] = reactExports.useState(true);
  const values = [
    true
  ];
  const [modal, setModal] = reactExports.useState(false);
  const [modaltoggle, setmodaltoggle] = reactExports.useState(true);
  const toggle = () => setModal(!modal);
  const [shows, setShows] = reactExports.useState(false);
  let [isFirstCollapseds, setisFirstCollapseds] = reactExports.useState(true);
  let firsts = () => {
    if (isFirstCollapseds === false) {
      setisFirstCollapseds(true);
    } else if (isFirstCollapseds === true) {
      setisFirstCollapseds(false);
    }
  };
  const [initialshow, setInitialshow] = reactExports.useState(true);
  let [isinitialCollapse, setisinitialCollapse] = reactExports.useState(false);
  let initialClose = () => {
    if (isinitialCollapse === false) {
      setisinitialCollapse(true);
    } else if (isinitialCollapse === true) {
      setisinitialCollapse(false);
    }
  };
  let [isFirstCollapsed1, setisFirstCollapsed1] = reactExports.useState(true);
  let [isFirstCollapsed2, setisFirstCollapsed2] = reactExports.useState(true);
  let [isFirstCollapsed3, setisFirstCollapsed3] = reactExports.useState(true);
  let [isFirstCollapsed4, setisFirstCollapsed4] = reactExports.useState(true);
  let [isFirstCollapsed5, setisFirstCollapsed5] = reactExports.useState(true);
  let first = (ele, id) => {
    let isFirstCollapsed = eval("isFirstCollapsed" + ele);
    let setisFirstCollapsed = eval("setisFirstCollapsed" + ele);
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    } else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };
  const [linkalert1, setlinkalert1] = reactExports.useState(data);
  const [linkalert2, setlinkalert2] = reactExports.useState(Backgrounddata);
  const [linkalert3, setlinkalert3] = reactExports.useState(Alertdata);
  const [linkalert4, setlinkalert4] = reactExports.useState(loaderdata);
  const [linkalert6, setlinkalert6] = reactExports.useState(Builtdata);
  let handleRemove = (ele, id) => {
    let linkalert = eval("linkalert" + ele);
    let setlinkalert = eval("setlinkalert" + ele);
    const newList = linkalert.filter((list) => list.id !== id);
    setlinkalert(newList);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Cards",
        home: "Home",
        name: "Elements",
        fonticonsname: "Cards"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", lg: "4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: "This is some text within a card body." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Card title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "card-subtitle mb-2 text-muted", children: "Card subtitle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "Some quick example text to build on the card title and make up the bulk of the card's content." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardLink, { href: "#", children: "Card link" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardLink, { href: "#", children: "Another link" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListGroupItem, { className: "list-group-item", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListGroupItem, { className: "list-group-item", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListGroupItem, { className: "list-group-item", children: "Vestibulum at eros" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListGroupItem, { className: "list-group-item", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListGroupItem, { className: "list-group-item", children: "Vestibulum at eros" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "image", src: photo10 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Card title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "Some quick example text to build on the card title and make up the bulk of the card's content." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListGroupItem, { className: "list-group-item", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListGroupItem, { className: "list-group-item", children: "Dapibus ac facilisis in" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardLink, { href: "#", children: "Card link" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardLink, { href: "#", children: "Another link" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", lg: "4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Featured" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#", children: "Go somewhere" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Featured" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#", children: "Go somewhere" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "text-muted", children: "2 days ago" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Featured" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Special title treatment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "With supporting text below as a natural lead-in to additional content." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#", children: "Go somewhere" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Quote" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "blockquote mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "blockquote-footer", children: [
            "Someone famous in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("cite", { title: "Source Title", children: "Source Title" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Card title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "With supporting text below as a natural lead-in to additional content." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#", children: "Button" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Special title treatment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "With supporting text below as a natural lead-in to additional content." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#", children: "Go somewhere" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Special title treatment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "With supporting text below as a natural lead-in to additional content." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#", children: "Go somewhere" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Special title treatment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "With supporting text below as a natural lead-in to additional content." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#", children: "Go somewhere" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { pills: true, className: "nav nav-pills card-header-pills my-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link ", active: true, "aria-current": "page", href: "#", children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link", href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { "aria-disabled": "true", className: "nav-link", disabled: true, href: "#", tabIndex: "-1", children: "Disabled" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Special title treatment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "With supporting text below as a natural lead-in to additional content." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#", children: "Go somewhere" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { pills: true, className: "nav nav-pills card-header-pills mt-0 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link active d-block", href: "#", children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link d-block", href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { "aria-disabled": "true", className: "nav-link disabled d-block", href: "#", tabIndex: "-1", children: "Disabled" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", children: "Special title treatment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardText, { children: "With supporting text below as a natural lead-in to additional content." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#", children: "Go somewhere" })
      ] }) }) }),
      linkalert1.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: list.classheader, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", className: list.titleclass, children: list.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "card-options-collapse",
                "data-bs-toggle": "card-collapse",
                onClick: () => {
                  first(1, list.id);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: list.icon })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "card-options-remove",
                "data-bs-toggle": "card-remove",
                onClick: () => handleRemove(1, list.id),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: list.remove })
              }
            )
          ] })
        ] }),
        isFirstCollapsed1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: list.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: list.classfooter, children: list.footer })
        ] }) : null
      ] }) }, index))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      linkalert2.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: list.class, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "border-transparent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: list.header }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "card-options-collapse",
                "data-bs-toggle": "card-collapse",
                onClick: () => {
                  first(2, list.id);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: list.icon })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "card-options-remove",
                "data-bs-toggle": "card-remove",
                onClick: () => handleRemove(2, list.id),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: list.remove })
              }
            )
          ] })
        ] }),
        isFirstCollapsed2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: list.text }) : null
      ] }) }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Panel with custom buttons" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary btn-sm", children: "Action 1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-secondary btn-sm ms-2", children: "Action 2" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful actual teachings of the great explorer" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Card with search form" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-options", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "input-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control form-control-sm", placeholder: "Search something...", name: "s" }) }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful actual teachings of the great explorer" })
      ] }) }),
      linkalert3.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Card with alert" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "card-options-collapse",
                "data-bs-toggle": "card-collapse",
                onClick: () => {
                  first(3, list.id);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-chevron-up" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "card-options-remove",
                "data-bs-toggle": "card-remove",
                onClick: () => handleRemove(3, list.id),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x" })
              }
            )
          ] })
        ] }),
        isFirstCollapsed3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: list.class, children: list.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" })
        ] }) : null
      ] }) }, index)),
      linkalert4.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Card with loader" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "card-options-collapse",
                onClick: () => {
                  first(4, list.id);
                },
                "data-bs-toggle": "card-collapse",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-chevron-up" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "card-options-remove",
                onClick: () => handleRemove(4, list.id),
                "data-bs-toggle": "card-remove",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x" })
              }
            )
          ] })
        ] }),
        isFirstCollapsed4 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dimmer active", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: list.loaders, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: list.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: list.text2 })
        ] }) }) }) : null
      ] }) }, index))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        remove ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "custom-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "d-flex custom-card-header border-bottom-0 ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title", children: "Basic Card" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "#",
                  className: "card-options-collapse me-2",
                  "data-bs-toggle": "card-collapse",
                  onClick: () => {
                    firsts();
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-chevron-up" })
                }
              ),
              values.map((v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "#",
                  className: "card-options-fullscreen me-2",
                  "data-bs-toggle": "card-fullscreen",
                  onClick: toggle,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-maximize" })
                },
                idx
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "#",
                  className: "card-options-remove",
                  "data-bs-toggle": "card-remove",
                  onClick: () => Setremove(false),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x" })
                }
              )
            ] })
          ] }),
          isFirstCollapseds ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere" }) }) : null
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, fullscreen: true, size: "lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Modal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: "Modal body content" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Card with switch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-options", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch m-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", value: "1", className: "form-switch-input", defaultChecked: true, onClick: () => {
              setmodaltoggle(!modaltoggle);
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator" })
          ] }) })
        ] }),
        modaltoggle && /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "4", children: initialshow ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Initial collapsed card" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "card-options-collapse me-5", onClick: () => {
              initialClose();
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-chevron-down" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", onClick: () => setInitialshow(false), "aria-label": "close", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x" }) })
          ] })
        ] }),
        isinitialCollapse ? /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }) : null
      ] }) : null }),
      linkalert6.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: list.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: list.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", onClick: () => first(5, list.id), className: "card-options-collapse", "data-bs-toggle": "card-collapse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-chevron-up" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => handleRemove(6, list.id), color: "", className: "card-options-remove", "data-bs-toggle": "card-remove", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x" }) })
          ] })
        ] }),
        isFirstCollapsed5 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: list.text }) : null
      ] }) }, index))
    ] })
  ] });
};
Cards.propTypes = {};
Cards.defaultProps = {};
export {
  Cards as default
};

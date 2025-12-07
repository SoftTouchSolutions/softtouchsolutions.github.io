import { a as React, P as PropTypes, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { p as photo2 } from "./2-bavdzQaD.js";
import { p as photo20, a as photo12 } from "./12-U7ux0O5W.js";
import { p as photo1 } from "./1-CXDQDCif.js";
import { p as photo5, a as photo6 } from "./6-NgB5q-sK.js";
import { p as photo8 } from "./8-DBQQbcvu.js";
import { p as photo10 } from "./10-8A9hOF9c.js";
import { p as photo11 } from "./11-_IJrd_jw.js";
import { p as photo2$1, a as photo12$1 } from "./14-0pej-tsD.js";
import { p as photo15 } from "./15-CS5OAozU.js";
import { m as mapToCssModules, i as classnames, t as tagPropType, g as Card, n as CardHeader, b as Link, h as CardBody, f as PageHeaders, R as Row, C as Col, B as Button } from "./index-CPwjB16p.js";
import { C as CardFooter } from "./CardFooter-gsvOndN0.js";
import { C as CardTitle } from "./CardTitle-Cqv0xue5.js";
import { u as user16 } from "./16-Cj3VG8Ln.js";
import { u as user10 } from "./10-DvLRbf8W.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
var _excluded = ["className", "cssModule", "top", "bottom", "tag"];
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
  /** Add `bottom` prop if image is at bottom of card */
  bottom: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Add `top` prop if image is at top of card */
  top: PropTypes.bool
};
function CardImg(props) {
  var className = props.className, cssModule = props.cssModule, top = props.top, bottom = props.bottom, _props$tag = props.tag, Tag = _props$tag === void 0 ? "img" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var cardImgClassName = "card-img";
  if (top) {
    cardImgClassName = "card-img-top";
  }
  if (bottom) {
    cardImgClassName = "card-img-bottom";
  }
  var classes = mapToCssModules(classnames(className, cardImgClassName), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
CardImg.propTypes = propTypes;
const BuiltCard = () => {
  let [isFirstCollapsed, setisFirstCollapsed] = React.useState(true);
  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    } else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };
  const [show, setShow] = React.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: show ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-blog-overlay ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "z-index-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", className: "card-title text-white", children: "card-with image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "#",
            className: "card-options-collapse me-2",
            "data-bs-toggle": "card-collapse",
            onClick: () => first(),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-chevron-up text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "#",
            className: "card-options-remove",
            "data-bs-toggle": "card-remove",
            onClick: () => setShow(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-white" })
          }
        )
      ] })
    ] }),
    isFirstCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "text-white", children: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }) : null
  ] }) : null });
};
const BuiltCard2 = () => {
  let [isFirstCollapsed, setisFirstCollapsed] = React.useState(true);
  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    } else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };
  const [show, setShow] = React.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: show ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", className: "card-title ", children: "card-with image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "#",
            onClick: () => first(),
            className: "card-options-collapse me-2",
            "data-bs-toggle": "card-collapse",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-chevron-up " })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "#",
            onClick: () => setShow(false),
            className: "card-options-remove",
            "data-bs-toggle": "card-remove",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x " })
          }
        )
      ] })
    ] }),
    isFirstCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "text-white card-blog-overlay1 h-9 w-100" }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "-4", children: "Duis aute irure dolor" })
  ] }) : null });
};
const Employeecard = () => {
  let [isFirstCollapsed, setisFirstCollapsed] = React.useState(true);
  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    } else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };
  const [show, setShow] = React.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: show ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Employee card" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "#",
            onClick: () => first(),
            className: "card-options-collapse me-2",
            "data-bs-toggle": "card-collapse",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-chevron-up" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "#",
            onClick: () => setShow(false),
            className: "card-options-remove me-2",
            "data-bs-toggle": "card-remove",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x " })
          }
        )
      ] })
    ] }),
    isFirstCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user16, className: "avatar avatar-xxl brround", alt: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "h4 mb-0 mt-3 font-weight-bold", children: "James Thomas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text text-muted", children: "Web designer" })
    ] }) : null
  ] }) : null });
};
const Employeecard2 = () => {
  let [isFirstCollapsed, setisFirstCollapsed] = React.useState(true);
  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    } else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };
  const [show, setShow] = React.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: show ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Employee card" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-options", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "#",
            onClick: () => first(),
            className: "card-options-collapse me-2",
            "data-bs-toggle": "card-collapse",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-chevron-up" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "#",
            onClick: () => setShow(false),
            className: "card-options-remove me-2",
            "data-bs-toggle": "card-remove",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x " })
          }
        )
      ] })
    ] }),
    isFirstCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user10, className: "avatar avatar-xxl brround", alt: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "h4 mb-0 mt-3 font-weight-bold", children: "Rebacca Thomas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text text-muted", children: "Web designer" })
    ] }) : null
  ] }) : null });
};
const CardImages = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Cards-Image",
        home: "Home",
        name: "Elements",
        fonticonsname: "Cards-Image"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardImg,
          {
            alt: "",
            src: photo2,
            className: "img-height"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title mb-3", children: "Card title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "Some quick example text to build on the card title and make up the bulk of the card's content." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", children: "Read More" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title mb-3", children: "Card title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "Some quick example text to build on the card title and make up the bulk of the card's content." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", children: "Read More" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardImg,
          {
            alt: "",
            src: photo1,
            className: "img-height"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardImg,
          {
            alt: "",
            src: photo5,
            className: "img-height"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title mb-3", children: "Card title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "Some quick example text to build on the card title and make up the bulk of the card's content." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { children: "card footer" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "card header" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardImg,
          {
            alt: "",
            src: photo6,
            className: "img-height"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "Some quick example text to build on the card title and make up the bulk of the card's content." }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardImg,
          {
            alt: "",
            src: photo10,
            className: "img-height"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title", children: "Card title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Last updated 3 mins ago" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardImg,
          {
            alt: "",
            src: photo8,
            className: "img-height"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title", children: "Card title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, xl: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-blog-overlay1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title text-white", children: "card-with image" }),
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "text-white z-index-9", children: "This is Basic card footer" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, xl: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-blog-overlay2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title text-white", children: "card-with image" }),
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "text-white z-index-9", children: "This is Basic card footer" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, xl: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BuiltCard, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, xl: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BuiltCard2, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, xl: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-aside", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "-flex flex-column", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
            "Link to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Play Music" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted", children: "Some quick example text to build on the card title and make up the bulk of the card's" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex align-items-center pt-5 mt-auto text-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "icon d-none d-md-inline-block ms-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-step-backward" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "icon d-none d-md-inline-block ms-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-play " }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "icon d-none d-md-inline-block ms-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-step-forward" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "#",
            className: "card-aside-column br-tr-7 br-br-7 w-50",
            style: { backgroundImage: `url(${photo2})` }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, xl: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-aside bg-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "-flex flex-column", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "text-white", children: "Play Music" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
            "Some quick example text to build on the card title and make up the bulk of the card's",
            " "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex align-items-center pt-5 mt-auto text-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "icon d-none d-md-inline-block ms-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-step-backward text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "icon d-none d-md-inline-block ms-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-play text-white " }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "icon d-none d-md-inline-block ms-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-step-forward text-white" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "#",
            className: "card-aside-column br-tr-7 br-br-7 w-50",
            style: { backgroundImage: `url(${photo20})` }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Employeecard, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Employeecard2, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title ", children: "Card Group" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-group p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-none border border-lg-end-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardImg, { src: photo10, alt: "image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title", children: "Card title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Last updated 3 mins ago" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-none border border-lg-end-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardImg, { src: photo11, alt: "image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title", children: "Card title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "This card has supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Last updated 3 mins ago" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-none border overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardImg, { src: photo12, alt: "image", className: "img-height1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title", children: "Card title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Last updated 3 mins ago" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title ", children: "Card Group Footers" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-group p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: " overflow-hidden shadow-none border border-lg-end-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardImg, { src: photo2$1, alt: "image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title", children: "Card title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Last updated 3 mins ago" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: " overflow-hidden shadow-none border border-lg-end-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardImg, { src: photo12$1, alt: "image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title", children: "Card title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "This card has supporting text below as a natural lead-in to additional content." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Last updated 3 mins ago" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden shadow-none border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardImg, { src: photo15, alt: "image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title", children: "Card title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-text", children: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Last updated 3 mins ago" }) })
        ] })
      ] })
    ] })
  ] });
};
CardImages.propTypes = {};
CardImages.defaultProps = {};
export {
  CardImages as default
};

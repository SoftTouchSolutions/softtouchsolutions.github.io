import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-Dr-4baW5.js";
import { C as CardTitle } from "./CardTitle-BjRFrU5i.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Panel = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
  const elementRef4 = reactExports.useRef();
  let CopytoClipBoard = (ele) => {
    var _a;
    let data = (_a = ele.current) == null ? void 0 : _a.innerText;
    navigator.clipboard.writeText(data);
    alert("Text copied successfully");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Panels",
        home: "Home",
        name: "Elements",
        fonticonsname: "Panels"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Simple Panels" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel expanel-default mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-body", children: "Basic panel example" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "svg-icon me-2",
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
            ]
          }
        ),
        " ",
        "Show Code",
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="expanel expanel-default mt-4">
        <div className="expanel-body">Basic panel example</div>
    </div>
                ` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            onClick: () => {
              CopytoClipBoard(elementRef);
            },
            className: "svg-icon",
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
            ]
          }
        ) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Panel with heading" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "expanel expanel-default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-heading", children: "Panel heading without title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-body", children: "Panel content" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "expanel expanel-default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "expanel-title", children: "Panel title" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-body", children: "Panel content" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "svg-icon me-2",
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
            ]
          }
        ),
        " ",
        "Show Code",
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Row className="mt-4">
      <Col lg="6">
        <div className="expanel expanel-default">
          <div className="expanel-heading">
            Panel heading without title
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
      <Col lg="6">
        <div className="expanel expanel-default">
          <div className="expanel-heading">
            <h3 className="expanel-title">Panel title</h3>
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
    </Row>
                  ` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            onClick: () => {
              CopytoClipBoard(elementRef2);
            },
            className: "svg-icon",
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
            ]
          }
        ) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Panel with footer" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "expanel expanel-default mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-body", children: "Panel content" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-footer", children: "Panel footer" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "svg-icon me-2",
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
            ]
          }
        ),
        " ",
        "Show Code",
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="expanel expanel-default mt-4">
      <div className="expanel-body">Panel content</div>
      <div className="expanel-footer">Panel footer</div>
    </div>
              ` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            onClick: () => {
              CopytoClipBoard(elementRef3);
            },
            className: "svg-icon",
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
            ]
          }
        ) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Panel with color header" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "expanel expanel-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "expanel-title", children: "Panel title" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-body", children: "Panel content" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "expanel expanel-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "expanel-title", children: "Panel title" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-body", children: "Panel content" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "expanel expanel-success", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "expanel-title", children: "Panel title" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-body", children: "Panel content" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "expanel expanel-danger", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "expanel-title", children: "Panel title" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "expanel-body", children: "Panel content" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "svg-icon me-2",
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
            ]
          }
        ),
        " ",
        "Show Code",
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Row className="mt-4">
      <Col lg="6">
        <div className="expanel expanel-primary">
          <div className="expanel-heading">
            <h3 className="expanel-title">Panel title</h3>
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
      <Col lg="6">
        <div className="expanel expanel-secondary">
          <div className="expanel-heading">
            <h3 className="expanel-title">Panel title</h3>
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col lg="6">
        <div className="expanel expanel-success">
          <div className="expanel-heading">
            <h3 className="expanel-title">Panel title</h3>
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
      <Col lg="6">
        <div className="expanel expanel-danger">
          <div className="expanel-heading">
            <h3 className="expanel-title">Panel title</h3>
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
    </Row>
              ` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            onClick: () => {
              CopytoClipBoard(elementRef4);
            },
            className: "svg-icon",
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
            ]
          }
        ) })
      ] })
    ] }) }) })
  ] });
};
Panel.propTypes = {};
Panel.defaultProps = {};
export {
  Panel as default
};

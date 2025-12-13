import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, L as Label, B as Button } from "./index-Drmsz9hA.js";
import { C as CardTitle } from "./CardTitle-DTApbb8G.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-YSmGIrnj.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./TooltipPopoverWrapper-BZlnwhoL.js";
const Tooltips = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
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
        title: "Tooltip",
        home: "Home",
        name: "Elements",
        fonticonsname: "Tooltip"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "Tooltip", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Default Tooltip" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label mb-2", children: "Static Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-static-demo mb-4 border br-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tooltip bs-tooltip-top", role: "tooltip", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-inner", children: "Tooltip on the top" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", className: " mg-t-30 mg-sm-t-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tooltip bs-tooltip-bottom", role: "tooltip", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-inner", children: "Tooltip on the bottom" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", className: " mg-t-30 mg-lg-t-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tooltip bs-tooltip-start", role: "tooltip", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-inner", children: "Tooltip on the right" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", className: " mg-t-30 mg-lg-t-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tooltip bs-tooltip-end", role: "tooltip", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-inner", children: "Tooltip on the left" })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label mb-2", children: "Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light px-4 pt-4 pb-2 border br-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-placement": "top",
                  "data-bs-toggle": "tooltip",
                  id: "top",
                  title: "Tooltip on top",
                  type: "button",
                  children: "Hover me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { placement: "top", target: "top", children: "Tooltip on Top" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-placement": "bottom",
                  id: "bottom",
                  "data-bs-toggle": "tooltip",
                  title: "Tooltip on Bottom",
                  type: "button",
                  children: "Hover me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { placement: "bottom", target: "bottom", children: "Tooltip on Bottom" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-placement": "right",
                  id: "right",
                  "data-bs-toggle": "tooltip",
                  title: "Tooltip on right",
                  type: "button",
                  children: "Hover me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { placement: "right", target: "right", children: "Tooltip on Right" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-placement": "left",
                  id: "left",
                  "data-bs-toggle": "tooltip",
                  title: "Tooltip on left",
                  type: "button",
                  children: "Hover me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { placement: "left", target: "left", children: "Tooltip on Left" })
            ] })
          ] }) })
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
          "Html",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Row className="text-center">
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="top"
        data-bs-toggle="tooltip"
        id="top"
        title="Tooltip on top"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="top" target="top">
        Tooltip on Top
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="bottom"
        id="bottom"
        data-bs-toggle="tooltip"
        title="Tooltip on Bottom"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="bottom" target="bottom">
        Tooltip on Bottom
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="right"
        id="right"
        data-bs-toggle="tooltip"
        title="Tooltip on right"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="right" target="right">
        Tooltip on Right
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="left"
        id="left"
        data-bs-toggle="tooltip"
        title="Tooltip on left"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="left" target="left">
        Tooltip on Left
      </UncontrolledTooltip>
    </Col>
  </Row>
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "Tooltip1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Color Tooltip" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label  mb-2", children: "Static Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-static-demo mb-4 border br-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "tooltip tooltip-primary bs-tooltip-top",
                role: "tooltip",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-arrow" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-inner", children: "Tooltip on the top" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", className: " mg-t-30 mg-sm-t-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "tooltip tooltip-secondary bs-tooltip-bottom",
                role: "tooltip",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-arrow" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-inner", children: "Tooltip on the bottom" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", className: " mg-t-30 mg-lg-t-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "tooltip tooltip-danger bs-tooltip-start",
                role: "tooltip",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-arrow" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-inner", children: "Tooltip on the left" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", className: " mg-t-30 mg-lg-t-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "tooltip tooltip-info bs-tooltip-end",
                role: "tooltip",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-arrow" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tooltip-inner", children: "Tooltip on the right" })
                ]
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label mb-2", children: "Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light px-4 pt-4 pb-2 border br-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "text-center color-tooltip", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  id: "colortop",
                  "data-bs-toggle": "tooltip-primary",
                  title: "Tooltip on top",
                  type: "button",
                  children: "Hover me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                UncontrolledTooltip,
                {
                  placement: "top",
                  target: "colortop",
                  className: "primary-tooltip",
                  style: { background: "var(--primary-bg-color)" },
                  children: "Tooltip on Top"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  id: "colorbottom",
                  "data-bs-toggle": "tooltip-secondary",
                  title: "Tooltip on bottom",
                  type: "button",
                  children: "Hover me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                UncontrolledTooltip,
                {
                  placement: "bottom",
                  target: "colorbottom",
                  className: "primary-tooltip",
                  style: { background: "var(--primary-bg-color)" },
                  children: "Tooltip on Bottom"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  id: "colorright",
                  "data-bs-toggle": "tooltip-danger",
                  title: "Tooltip on right",
                  type: "button",
                  children: "Hover me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                UncontrolledTooltip,
                {
                  placement: "right",
                  target: "colorright",
                  className: "primary-tooltip",
                  style: { background: "var(--primary-bg-color)" },
                  children: "Tooltip on Right"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  id: "colorleft",
                  "data-bs-placement": "left",
                  "data-bs-toggle": "tooltip-info",
                  title: "Tooltip on left",
                  type: "button",
                  children: "Hover me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                UncontrolledTooltip,
                {
                  placement: "left",
                  target: "colorleft",
                  className: "primary-tooltip",
                  style: { background: "var(--primary-bg-color)" },
                  children: "Tooltip on Left"
                }
              )
            ] })
          ] }) })
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
          "Html",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Row className="text-center color-tooltip">
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colortop"
        data-bs-toggle="tooltip-primary"
        title="Tooltip on top"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="top"
        target="colortop"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Top
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colorbottom"
        data-bs-toggle="tooltip-secondary"
        title="Tooltip on bottom"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="bottom"
        target="colorbottom"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Bottom
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colorright"
        data-bs-toggle="tooltip-danger"
        title="Tooltip on right"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="right"
        target="colorright"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Right
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colorleft"
        data-bs-placement="left"
        data-bs-toggle="tooltip-info"
        title="Tooltip on left"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="left"
        target="colorleft"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Left
      </UncontrolledTooltip>
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
      ] })
    ] }) })
  ] });
};
Tooltips.propTypes = {};
Tooltips.defaultProps = {};
export {
  Tooltips as default
};

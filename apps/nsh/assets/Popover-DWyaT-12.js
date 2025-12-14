import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, B as Button } from "./index-DRovfVAv.js";
import { C as CardTitle } from "./CardTitle-Bk04aMpl.js";
import { U as UncontrolledPopover, P as PopoverHeader, a as PopoverBody } from "./PopoverBody-C39AuOdr.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./TooltipPopoverWrapper-u4cgTmeC.js";
const Popover = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
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
        title: "Tooltip and Popover",
        home: "Home",
        name: "Elements",
        fonticonsname: "Tooltip and Popover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-4", id: "popover", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Default Popover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label mb-2", children: "Static Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-static-demo mb-4 border br-3 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: " mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popover bs-popover-top", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "popover-header", children: "Popover top" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: " mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popover bs-popover-bottom", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "popover-header", children: "Popover Bottom" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: " mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popover bs-popover-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "popover-header", children: "Popover Left" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: " mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popover bs-popover-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "popover-header", children: "Popover Right" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }) })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label mb-2", children: "Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 bg-light border br-3 pt-4 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: "mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "btn btn-secondary",
                  id: "top",
                  children: "Click me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledPopover, { placement: "top", target: "top", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { defaultValue: true, children: "Popover Top" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { children: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: "mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-container": "body",
                  "data-bs-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                  id: "bottom",
                  "data-bs-popover-color": "default",
                  "data-bs-toggle": "popover",
                  title: "Popover bottom",
                  type: "button",
                  children: "Click me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledPopover, { placement: "bottom", target: "bottom", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { children: "Popover Bottom" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { style: { margin: 0 }, children: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: "mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-container": "body",
                  "data-bs-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                  id: "left",
                  "data-bs-popover-color": "default",
                  "data-bs-toggle": "popover",
                  title: "Popover left",
                  type: "button",
                  children: "Click me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledPopover, { placement: "left", target: "left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { children: "Popover left" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { style: { margin: 0 }, children: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: "mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-container": "body",
                  "data-bs-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                  id: "right",
                  "data-bs-popover-color": "default",
                  "data-bs-toggle": "popover",
                  title: "Popover right",
                  type: "button",
                  children: "Click me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledPopover, { placement: "right", target: "right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { children: "Popover right" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { style: { margin: 0 }, children: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus." })
              ] })
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
          "Show Code",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Row className="row-sm text-center">
    <Col sm="6" lg="3" className="mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="top"
        data-bs-popover-color="default"
        data-bs-toggle="popover"
        title="Popover top"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover placement="top" target="top">
        <PopoverHeader>Popover top</PopoverHeader>
        <PopoverBody style={{ margin: 0 }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col sm="6" lg="3" className="mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="bottom"
        data-bs-popover-color="default"
        data-bs-toggle="popover"
        title="Popover bottom"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover placement="bottom" target="bottom">
        <PopoverHeader>Popover Bottom</PopoverHeader>
        <PopoverBody style={{ margin: 0 }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col sm="6" lg="3" className="mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="left"
        data-bs-popover-color="default"
        data-bs-toggle="popover"
        title="Popover left"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover placement="left" target="left">
        <PopoverHeader>Popover left</PopoverHeader>
        <PopoverBody style={{ margin: 0 }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col sm="6" lg="3" className="mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="right"
        data-bs-popover-color="default"
        data-bs-toggle="popover"
        title="Popover right"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover placement="right" target="right">
        <PopoverHeader>Popover right</PopoverHeader>
        <PopoverBody style={{ margin: 0 }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-4", id: "popover1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Colored Head Popover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label mb-2", children: "Static Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-static-demo mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popover popover-head-primary bs-popover-top", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "popover-header", children: "Popover top" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: " mt-5 mt-md-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popover popover-head-secondary bs-popover-bottom", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "popover-header", children: "Popover Bottom" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }) })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label mb-2", children: "Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 bg-light border br-3 pt-4 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: "  mt-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-container": "body",
                  "data-bs-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                  id: "Coloredtop",
                  "data-bs-popover-color": "head-primary",
                  title: "Popover top",
                  type: "button",
                  children: "Click me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                UncontrolledPopover,
                {
                  placement: "top",
                  target: "Coloredtop",
                  className: "popover-head-primary",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { children: "Popover top" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { children: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus." })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mt-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-container": "body",
                  "data-bs-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                  id: "Coloredbottom",
                  "data-bs-popover-color": "head-secondary",
                  title: "Popover bottom",
                  type: "button",
                  children: "Click me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                UncontrolledPopover,
                {
                  placement: "bottom",
                  target: "Coloredbottom",
                  className: "popover-head-secondary",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { children: "Popover bottom" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { style: { margin: 0 }, children: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus." })
                  ]
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
          "Show Code",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
     <Row className="row-sm text-center">
     <Col sm="6" lg="3" className="  mt-3 text-center">
       <Button
         color=""
         className="btn btn-secondary"
         data-bs-container="body"
         data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
         id="Coloredtop"
         data-bs-popover-color="head-primary"
         title="Popover top"
         type="button"
       >
         Click me
       </Button>
       <UncontrolledPopover
         placement="top"
         target="Coloredtop"
         className="popover-head-primary"
       >
         <PopoverHeader>Popover top</PopoverHeader>
         <PopoverBody style={{ margin: 0 }}>
           Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
         </PopoverBody>
       </UncontrolledPopover>
     </Col>
     <Col sm="6" lg="3" className=" mt-3 text-center">
       <Button
         color=""
         className="btn btn-secondary"
         data-bs-container="body"
         data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
         id="bottom"
         data-bs-popover-color="head-secondary"
         title="Popover bottom"
         type="button"
       >
         Click me
       </Button>
       <UncontrolledPopover
         placement="bottom"
         target="bottom"
         className="popover-head-secondary"
       >
         <PopoverHeader>Popover bottom</PopoverHeader>
         <PopoverBody style={{ margin: 0 }}>
           Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
         </PopoverBody>
       </UncontrolledPopover>
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", id: "popover2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Full Colored Popover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label mb-2", children: "Static Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-static-demo mb-4 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: " mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popover popover-primary bs-popover-top", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "popover-header", children: "Popover top" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: " mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popover popover-secondary bs-popover-bottom", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-arrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "popover-header", children: "Popover Bottom" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popover-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }) })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label mb-2", children: "Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 bg-light border br-3 pb-5 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-container": "body",
                  "data-bs-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                  id: "topfullcolor",
                  "data-bs-popover-color": "primary",
                  title: "Popover top",
                  type: "button",
                  children: "Click me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledPopover, { placement: "top", target: "topfullcolor", className: "full-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { tag: "h3", className: "", children: "Popover top" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { children: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", lg: "3", className: " mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-secondary",
                  "data-bs-container": "body",
                  "data-bs-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                  id: "bottomfullcolor",
                  "data-bs-popover-color": "secondary",
                  title: "Popover bottom",
                  type: "button",
                  children: "Click me"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                UncontrolledPopover,
                {
                  placement: "bottom",
                  target: "bottomfullcolor",
                  className: "full-secondary",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { tag: "h3", children: "Popover bottom" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { children: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus." })
                  ]
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
          "Show Code",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Row className="row-sm text-center">
    <Col sm="6" lg="3" className=" mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="topfullcolor"
        data-bs-popover-color="primary"
        title="Popover top"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover placement="top" target="topfullcolor" className="full-primary">
        <PopoverHeader tag="h3">Popover top</PopoverHeader>
        <PopoverBody>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col sm="6" lg="3" className=" mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="bottomfullcolor"
        data-bs-popover-color="secondary"
        title="Popover bottom"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover
        placement="bottom"
        target="bottomfullcolor"
        className="full-secondary"
      >
        <PopoverHeader tag="h3">Popover bottom</PopoverHeader>
        <PopoverBody>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
  </Row>
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
      ] })
    ] }) })
  ] });
};
Popover.propTypes = {};
Popover.defaultProps = {};
export {
  Popover as default
};

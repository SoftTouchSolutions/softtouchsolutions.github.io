import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, s as Badge } from "./index-AOv_UoEY.js";
import { C as CardTitle } from "./CardTitle-p-89_2wb.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Badges = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
  const elementRef4 = reactExports.useRef();
  const elementRef5 = reactExports.useRef();
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
        title: "Badges",
        home: "Home",
        name: "Elements",
        fonticonsname: "Badges"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Simple Badges" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
            "Heading 01 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "badge-default", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
            "Heading 02 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "badge-default", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
            "Heading 03 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "badge-default", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
            "Heading 04 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "badge-default", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { children: [
            "Heading 05 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "badge-default", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { children: [
            "Heading 06 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "badge-default", children: "New" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
 <h1>
   Heading 01 <Badge color="" className="badge-default">New</Badge>
 </h1>
 <h2>
   Heading 02 <Badge color="" className="badge-default">New</Badge>
 </h2>
 <h3>
   Heading 03 <Badge color="" className="badge-default">New</Badge>
 </h3>
 <h4>
   Heading 04 <Badge color="" className="badge-default">New</Badge>
 </h4>
 <h5>
   Heading 05 <Badge color="" className="badge-default">New</Badge>
 </h5>
 <h6>
   Heading 06<Badge color="" className="badge-default">New</Badge>
 </h6>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Colored Badges" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-blue", children: [
            "Heading 01 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "bg-primary", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-red", children: [
            "Heading 02 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "bg-danger", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-yellow", children: [
            "Heading 03 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "bg-warning", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-green", children: [
            "Heading 04 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "bg-success", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "text-info", children: [
            "Heading 05 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "bg-info", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: "text-secondary", children: [
            "Heading 06 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "bg-secondary", children: "New" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `        
<h1 className="text-blue">
  Heading 01 <Badge color="" className="bg-primary">New</Badge>
</h1>
<h2 className="text-red">
  Heading 02 <Badge color="" className="bg-danger">New</Badge>
</h2>
<h3 className="text-yellow">
  Heading 03 <Badge color="" className="bg-warning">New</Badge>
</h3>
<h4 className="text-green">
  Heading 04 <Badge color="" className="bg-success">New</Badge>
</h4>
<h5 className="text-info">
  Heading 05 <Badge color="" className="bg-info">New</Badge>
</h5>
<h6 className="text-secondary">
  Heading 06<Badge color="" className="bg-secondary">New</Badge>
</h6>
                
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
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Contextual variations" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 badge-default mt-2", children: "Default" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 bg-primary mt-2", children: "Primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 bg-success mt-2", children: "Success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 bg-info mt-2", children: "Info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 bg-warning mt-2", children: "Warning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 bg-danger mt-2", children: "Danger" })
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
 <Badge color="" className="me-1 badge-default mt-2">Default</Badge>
 <Badge color="" className="me-1 bg-primary mt-2">Primary</Badge>
 <Badge color="" className="me-1 bg-success mt-2">Success</Badge>
 <Badge color="" className="me-1 bg-info mt-2">Info</Badge>
 <Badge color="" className="me-1 bg-warning mt-2">Warning</Badge>
 <Badge color="" className="me-1 bg-danger mt-2">Danger</Badge>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Pill Badges" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 badge rounded-pill badge-default mt-2", children: "Default" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 badge rounded-pill bg-primary mt-2", children: "Primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 badge rounded-pill bg-success mt-2", children: "Success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 badge rounded-pill bg-info mt-2", children: "Info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 badge rounded-pill bg-warning mt-2", children: "Warning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "", className: "me-1 badge rounded-pill bg-danger mt-2", children: "Danger" })
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
<Badge color="" className="me-1 badge rounded-pill badge-default mt-2">
  Default
</Badge>
<Badge color="" className="me-1 badge rounded-pill bg-primary mt-2">
  Primary
</Badge>
<Badge color="" className="me-1 badge rounded-pill bg-success mt-2">
  Success
</Badge>
<Badge color="" className="me-1 badge rounded-pill bg-info mt-2">Info</Badge>
<Badge color="" className="me-1 badge rounded-pill bg-warning mt-2">
  Warning
</Badge>
<Badge color="" className="me-1 badge rounded-pill bg-danger mt-2">Danger</Badge>
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
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xs: "12", sm: "6", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer offer-default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape-text", children: "top" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "lead font-weight-semibold", children: "Default badge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
              "And a little description.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " and so one"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xs: "12", sm: "6", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer offer-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape-text", children: "top" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "lead font-weight-semibold", children: "Success badge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
              "And a little description.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " and so one"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xs: "12", sm: "6", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer offer-radius offer-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape-text", children: "top" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "lead font-weight-semibold", children: "Primary badge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
              "And a little description.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " and so one"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xs: "12", sm: "6", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer offer-info mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape-text", children: "top" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "lead font-weight-semibold", children: "Info Badge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
              "And a little description.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " and so one"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xs: "12", sm: "6", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer offer-warning mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape-text", children: "top" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "lead font-weight-semibold", children: "Warning badge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
              "And a little description.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " and so one"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xs: "12", sm: "6", lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer offer-radius offer-danger mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shape-text", children: "top" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "lead font-weight-semibold", children: "Danger Badge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
              "And a little description.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " and so one"
            ] })
          ] })
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-default">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Default badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-success">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Success badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-radius offer-primary">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Primary badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-info mb-6">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Info Badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-warning mb-6">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Warning badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-radius offer-danger mb-6">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Danger Badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            onClick: () => {
              CopytoClipBoard(elementRef5);
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
  ] });
};
Badges.propTypes = {};
Badges.defaultProps = {};
export {
  Badges as default
};

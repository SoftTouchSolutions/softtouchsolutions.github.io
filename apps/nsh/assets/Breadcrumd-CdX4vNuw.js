import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, ad as Breadcrumb, ae as BreadcrumbItem } from "./index-zbnKGqDS.js";
import { C as CardTitle } from "./CardTitle-5XhNrNGW.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Breadcrumd = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
  const elementRef4 = reactExports.useRef();
  const elementRef5 = reactExports.useRef();
  const elementRef6 = reactExports.useRef();
  const elementRef7 = reactExports.useRef();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Breadcrumbs",
        home: "Home",
        name: "Elements",
        fonticonsname: "Breadcrumbs"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Simple Breadcrumbs" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", active: true, children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", active: true, children: "About" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", active: true, children: "Library" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Library" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", active: true, children: "Data" })
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
    <Breadcrumb className="breadcrumb1">
      <BreadcrumbItem className="breadcrumb-item1 active">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item1 active">
        About
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb1">
      <BreadcrumbItem className="breadcrumb-item1">
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item1 active">
        Library
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb1">
      <BreadcrumbItem className="breadcrumb-item1">
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item1">
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item1 active">
        Data
      </BreadcrumbItem>
    </Breadcrumb>
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mg-b-20", id: "breadcrumb1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Custom Styling" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "breadcrumb", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb breadcrumb-style1 mb-0 p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Home" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Library" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item active", children: "Data" })
      ] }) }) }),
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
    <nav aria-label="breadcrumb">
      <Breadcrumb className="breadcrumb breadcrumb-style1 mb-0 p-0">
        <BreadcrumbItem className="breadcrumb-item">
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item">
          <a href="#">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item active">
          Data
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mg-b-20", id: "breadcrumb2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Custom Divider" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "breadcrumb", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb breadcrumb-style2 mb-0 p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Home" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Library" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item active", children: "Data" })
      ] }) }) }),
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
    <nav aria-label="breadcrumb">
      <Breadcrumb className="breadcrumb breadcrumb-style2 mb-0 p-0">
        <BreadcrumbItem className="breadcrumb-item">
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item">
          <a href="#">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item active">
          Data
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
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
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", lg: "12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Color Breadcrumbs" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb1 bg-blue", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1 text-white", active: true, children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1 text-white", active: true, children: "About" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb1 bg-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-white", children: "Home" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1 text-white", active: true, children: "Library" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb1 bg-success", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-white", children: "Home" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-white", children: "Library" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1 text-white", active: true, children: "Data" })
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
   <Breadcrumb className="breadcrumb1 bg-blue">
     <BreadcrumbItem
       className="breadcrumb-item1 text-white"
       active
     >
       Home
     </BreadcrumbItem>
     <BreadcrumbItem
       className="breadcrumb-item1 text-white"
       active
     >
       About
     </BreadcrumbItem>
   </Breadcrumb>
   <Breadcrumb className="breadcrumb1 bg-secondary">
     <BreadcrumbItem className="breadcrumb-item1">
       <a href="#" className="text-white">
         Home
       </a>
     </BreadcrumbItem>
     <BreadcrumbItem
       className="breadcrumb-item1 text-white"
       active
     >
       Library
     </BreadcrumbItem>
   </Breadcrumb>
   <Breadcrumb className="breadcrumb1 bg-success">
     <BreadcrumbItem className="breadcrumb-item1">
       <a href="#" className="text-white">
         Home
       </a>
     </BreadcrumbItem>
     <BreadcrumbItem className="breadcrumb-item1">
       <a href="#" className="text-white">
         Library
       </a>
     </BreadcrumbItem>
     <BreadcrumbItem
       className="breadcrumb-item1 text-white"
       active
     >
       Data
     </BreadcrumbItem>
   </Breadcrumb>
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "breadcrumb4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Icon Breadcrumbs" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "breadcrumb", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb1 border bg-transparent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadcrumbItem, { className: "breadcrumb-item1 ", active: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "i",
                {
                  className: "fa fa-star-o me-2 white-text",
                  "aria-hidden": "true"
                }
              ),
              "Home"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1 ", active: true, children: "About" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-o me-2", "aria-hidden": "true" }),
              "Home"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadcrumbItem, { className: "breadcrumb-item1", active: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-o me-2", "aria-hidden": "true" }),
              "Library"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb1 bg-primary mb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "i",
                {
                  className: "fa fa-star-o me-2 white-text",
                  "aria-hidden": "true"
                }
              ),
              "Home"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item1 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "i",
                {
                  className: "fa fa-star-o me-2 white-text",
                  "aria-hidden": "true"
                }
              ),
              "Library"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadcrumbItem, { className: "breadcrumb-item1 text-white", active: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "i",
                {
                  className: "fa fa-star-o me-2 white-text",
                  "aria-hidden": "true"
                }
              ),
              "Data"
            ] })
          ] })
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
    <nav aria-label="breadcrumb">
      <Breadcrumb className="breadcrumb1 border bg-transparent">
        <BreadcrumbItem className="breadcrumb-item1" active>
          <i
            className="fa fa-star-o me-2 white-text"
            aria-hidden="true"
          ></i>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item1" active>
          About
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className="breadcrumb1">
        <BreadcrumbItem className="breadcrumb-item1">
          <a href="#" className="">
            <i
              className="fa fa-star-o me-2"
              aria-hidden="true"
            ></i>
            Home
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item1" active>
          <i className="fa fa-star-o me-2" aria-hidden="true"></i>
          Library
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className="breadcrumb1 bg-primary mb-0">
        <BreadcrumbItem className="breadcrumb-item1">
          <a href="#" className="text-white">
            <i
              className="fa fa-star-o me-2 white-text"
              aria-hidden="true"
            ></i>
            Home
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item1 text-white">
          <a href="#" className="text-white">
            <i
              className="fa fa-star-o me-2 white-text"
              aria-hidden="true"
            ></i>
            Library
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem
          className="breadcrumb-item1 text-white"
          active
        >
          <i
            className="fa fa-star-o me-2 white-text"
            aria-hidden="true"
          ></i>
          Data
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Style Breadcrumbs" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb-arrow mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Home" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { active: true, className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Data" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb-arrow mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Home" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Library" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { active: true, className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Data" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb-arrow mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Home" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Library" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Elements" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { active: true, className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Data" }) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef6, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Breadcrumb className="breadcrumb breadcrumb-arrow mt-3">
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active className="">
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb breadcrumb-arrow mt-3">
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem active className="">
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb breadcrumb-arrow mt-3">
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Elements</a>
      </BreadcrumbItem>
      <BreadcrumbItem active className="">
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
              ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef6);
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Svg Breadcrumb" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "breadcrumb-style4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb border p-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z",
                        opacity: ".3"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "breadcrumb-icon", children: " Home" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item ", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Data" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb border p-4 mb-4 bg-light", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z",
                        opacity: ".3"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "breadcrumb-icon", children: " Home" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Library" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Data" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumb, { className: "breadcrumb p-4 bg-primary br-3 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "d-flex text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z",
                        opacity: ".3"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "breadcrumb-icon", children: " Home" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-white", children: "Library" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-white", children: "Elements" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { className: "breadcrumb-item text-white", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Data" }) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef7, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Breadcrumb className="breadcrumb border p-4 mb-4">
      <BreadcrumbItem className="breadcrumb-item">
        <a href="#" className="d-flex">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
            <path
              d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z"
              opacity=".3"
            />
          </svg>
          <span className="breadcrumb-icon"> Home</span>
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item " active>
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb border p-4 mb-4 bg-light">
      <BreadcrumbItem className="breadcrumb-item">
        <a href="#" className="d-flex">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
            <path
              d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z"
              opacity=".3"
            />
          </svg>
          <span className="breadcrumb-icon"> Home</span>
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item">
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item " active>
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb p-4 bg-primary br-3 overflow-hidden">
      <BreadcrumbItem className="breadcrumb-item text-white">
        <a href="#" className="d-flex text-white">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
            <path
              d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z"
              opacity=".3"
            />
          </svg>
          <span className="breadcrumb-icon"> Home</span>
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item text-white">
        <a href="#" className="text-white">
          Library
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item text-white">
        <a href="#" className="text-white">
          Elements
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem
        className="breadcrumb-item text-white"
        active
      >
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
              ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef7);
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
Breadcrumd.propTypes = {};
Breadcrumd.defaultProps = {};
export {
  Breadcrumd as default
};

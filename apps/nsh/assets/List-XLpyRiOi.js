import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, b as Link } from "./index-Drmsz9hA.js";
import { C as CardTitle } from "./CardTitle-DTApbb8G.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const List = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
  const elementRef4 = reactExports.useRef();
  const elementRef5 = reactExports.useRef();
  const elementRef6 = reactExports.useRef();
  const elementRef7 = reactExports.useRef();
  const elementRef8 = reactExports.useRef();
  const elementRef9 = reactExports.useRef();
  const elementRef10 = reactExports.useRef();
  const elementRef11 = reactExports.useRef();
  const elementRef12 = reactExports.useRef();
  const elementRef13 = reactExports.useRef();
  const elementRef14 = reactExports.useRef();
  const elementRef15 = reactExports.useRef();
  const elementRef16 = reactExports.useRef();
  const elementRef17 = reactExports.useRef();
  const elementRef18 = reactExports.useRef();
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
        title: "List",
        home: "Home",
        name: "Elements",
        fonticonsname: "List"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Basic List Group" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Active List item" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item active", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <ul className="list-group">
      <li className="list-group-item active">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-12 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Default Active Link List" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-default", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item active", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="panel panel-default">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-12 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Primary Active Link List" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item active", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "language-markup mb-0", children: [
            " ",
            ` 
    <div className="panel panel-primary">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
    `
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-12 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Success Active Link List" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-success", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item active", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="panel panel-success">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-12 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Info Active Link List" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-info", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item active", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef6, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="panel panel-info">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-12 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Warning Active Link List" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-warning", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item active", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef7, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="panel panel-warning">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element17", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-12 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "list styles" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-danger", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item active", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "list-group-item", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element18", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef8, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="panel panel-danger">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
                  ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element18", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef8);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Order list" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "listorder", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "listorder", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "listorder", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "listorder", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "listorder", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef9, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <ul className="list-group">
      <li className="listorder">Cras justo odio</li>
      <li className="listorder">Dapibus ac facilisis in</li>
      <li className="listorder">Morbi leo risus</li>
      <li className="listorder">Porta ac consectetur ac</li>
      <li className="listorder">Vestibulum at eros</li>
    </ul>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef9);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Unorder list" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "listunorder", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "listunorder", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "listunorder", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "listunorder", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "listunorder", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef10, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <ul className="list-group">
      <li className="listunorder">Cras justo odio</li>
      <li className="listunorder">Dapibus ac facilisis in</li>
      <li className="listunorder">Morbi leo risus</li>
      <li className="listunorder">Porta ac consectetur ac</li>
      <li className="listunorder">Vestibulum at eros</li>
    </ul>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef10);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Disabled List item" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item disabled", children: "Cras justo odio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Morbi leo risus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef11, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <ul className="list-group">
      <li className="list-group-item disabled">
        Cras justo odio
      </li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef11);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Contextual classes with List Group" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item list-group-item-success", children: "Dapibus ac facilisis in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item list-group-item-info", children: "Cras sit amet nibh libero" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item list-group-item-warning", children: "Porta ac consectetur ac" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-group-item list-group-item-danger", children: "Vestibulum at eros" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element21", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef12, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <ul className="list-group">
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item list-group-item-success">
        Dapibus ac facilisis in
      </li>
      <li className="list-group-item list-group-item-info">
        Cras sit amet nibh libero
      </li>
      <li className="list-group-item list-group-item-warning">
        Porta ac consectetur ac
      </li>
      <li className="list-group-item list-group-item-danger">
        Vestibulum at eros
      </li>
    </ul>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element21", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef12);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "List Group with icons" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-check", "aria-hidden": "true" }),
            " Cras justo odio"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-check", "aria-hidden": "true" }),
            " Dapibus ac facilisis in"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-check", "aria-hidden": "true" }),
            " Morbi leo risus"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-check", "aria-hidden": "true" }),
            " Porta ac consectetur ac"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-check", "aria-hidden": "true" }),
            " Vestibulum at eros"
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element22", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef13, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <ul className="list-group">
      <li className="list-group-item">
        <i className="fa fa-check" aria-hidden="true"></i> Cras
        justo odio
      </li>
      <li className="list-group-item">
        <i className="fa fa-check" aria-hidden="true"></i> Dapibus
        ac facilisis in
      </li>
      <li className="list-group-item">
        <i className="fa fa-check" aria-hidden="true"></i> Morbi
        leo risus
      </li>
      <li className="list-group-item">
        <i className="fa fa-check" aria-hidden="true"></i> Porta
        ac consectetur ac
      </li>
      <li className="list-group-item">
        <i className="fa fa-check" aria-hidden="true"></i>{" "}
        Vestibulum at eros
      </li>
    </ul>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element22", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef13);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "List Group with colored icons" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cog text-primary", "aria-hidden": "true" }),
            " ",
            "Dapibus ac facilisis in"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cog text-danger", "aria-hidden": "true" }),
            " ",
            "Dapibus ac facilisis in"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cog text-success", "aria-hidden": "true" }),
            " ",
            "Cras sit amet nibh libero"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cog text-warning", "aria-hidden": "true" }),
            " ",
            "Porta ac consectetur ac"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cog text-info", "aria-hidden": "true" }),
            " ",
            "Vestibulum at eros"
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element23", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef14, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <ul className="list-group">
      <li className="list-group-item">
        <i
          className="fa fa-cog text-primary"
          aria-hidden="true"
        ></i>{" "}
        Dapibus ac facilisis in
      </li>
      <li className="list-group-item">
        <i
          className="fa fa-cog text-danger"
          aria-hidden="true"
        ></i>{" "}
        Dapibus ac facilisis in
      </li>
      <li className="list-group-item">
        <i
          className="fa fa-cog text-success"
          aria-hidden="true"
        ></i>{" "}
        Cras sit amet nibh libero
      </li>
      <li className="list-group-item">
        <i
          className="fa fa-cog text-warning"
          aria-hidden="true"
        ></i>{" "}
        Porta ac consectetur ac
      </li>
      <li className="list-group-item">
        <i className="fa fa-cog text-info" aria-hidden="true"></i>{" "}
        Vestibulum at eros
      </li>
    </ul>` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element23", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef14);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "List Group With defalut badges" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            "Cras justo odio",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badgetext badge badge-default rounded-pill", children: "14" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            "Dapibus ac facilisis in",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " badgetext badge badge-default rounded-pill", children: "2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item", children: [
            "Morbi leo risus",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " badgetext badge badge-default rounded-pill", children: "1" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <ul className="list-group">
      <li className="list-group-item">
        Cras justo odio
        <span className="badgetext badge badge-default rounded-pill">
          14
        </span>
      </li>
      <li className="list-group-item">
        Dapibus ac facilisis in
        <span className=" badgetext badge badge-default rounded-pill">
          2
        </span>
      </li>
      <li className="list-group-item">
        Morbi leo risus
        <span className=" badgetext badge badge-default rounded-pill">
          1
        </span>
      </li>
    </ul>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef15);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "List Group With color badges" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item justify-content-between", children: [
            "Cras justo odio",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badgetext badge bg-primary rounded-pill", children: "14" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item justify-content-between", children: [
            "Dapibus ac facilisis in",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badgetext badge bg-danger rounded-pill", children: "2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-group-item justify-content-between", children: [
            "Morbi leo risus",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badgetext badge bg-success rounded-pill", children: "1" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef16, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <ul className="list-group">
      <li className="list-group-item justify-content-between">
        Cras justo odio
        <span className="badgetext badge bg-primary rounded-pill">
          14
        </span>
      </li>
      <li className="list-group-item justify-content-between">
        Dapibus ac facilisis in
        <span className="badgetext badge bg-danger rounded-pill">
          2
        </span>
      </li>
      <li className="list-group-item justify-content-between">
        Morbi leo risus
        <span className="badgetext badge bg-success rounded-pill">
          1
        </span>
      </li>
    </ul>` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef16);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "List Group With Custom content" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "#",
              className: "list-group-item list-group-item-action flex-column align-items-start active",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex w-100 justify-content-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-1", children: "List group item heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "3 days ago" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Donec id elit non mi porta." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "#",
              className: "list-group-item list-group-item-action flex-column align-items-start",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex w-100 justify-content-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-1", children: "List group item heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "3 days ago" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Donec id elit non mi porta." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "#",
              className: "list-group-item list-group-item-action flex-column align-items-start",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex w-100 justify-content-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-1", children: "List group item heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "3 days ago" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Donec id elit non mi porta." })
              ]
            }
          )
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef17, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="list-group">
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start active"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </Link>
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small className="text-muted">
          Donec id elit non mi porta.
        </small>
      </Link>
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small className="text-muted">
          Donec id elit non mi porta.
        </small>
      </Link>
    </div>` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef17);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "List Group With Disabled Custom content" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "list-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "#",
              className: "list-group-item list-group-item-action flex-column align-items-start disabled",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex w-100 justify-content-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-1", children: "List group item heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "3 days ago" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Donec id elit non mi porta." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "#",
              className: "list-group-item list-group-item-action flex-column align-items-start",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex w-100 justify-content-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-1", children: "List group item heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "3 days ago" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Donec id elit non mi porta." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "#",
              className: "list-group-item list-group-item-action flex-column align-items-start",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex w-100 justify-content-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-1", children: "List group item heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "3 days ago" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Donec id elit non mi porta." })
              ]
            }
          )
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef18, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="list-group">
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start disabled"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </Link>
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small className="text-muted">
          Donec id elit non mi porta.
        </small>
      </Link>
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small className="text-muted">
          Donec id elit non mi porta.
        </small>
      </Link>
    </div>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef18);
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
    ] })
  ] });
};
List.propTypes = {};
List.defaultProps = {};
export {
  List as default
};

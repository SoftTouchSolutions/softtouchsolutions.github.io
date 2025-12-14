import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { u as user6 } from "./6-BnLqC6y1.js";
import { u as user14 } from "./14-D5oivJTg.js";
import { u as user1 } from "./1-D9D-sDJ2.js";
import { u as user4 } from "./4-B2cp7gEW.js";
import { u as user9 } from "./9-uUt78-1N.js";
import { u as user12 } from "./12-DCQ8KYQr.js";
import { u as user7 } from "./7-DPYO_OwL.js";
import { u as user11 } from "./11-DOVWzwhr.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, b as Link } from "./index-zbnKGqDS.js";
import { C as CardTitle } from "./CardTitle-5XhNrNGW.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Tags = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
  const elementRef4 = reactExports.useRef();
  const elementRef5 = reactExports.useRef();
  const elementRef6 = reactExports.useRef();
  const elementRef7 = reactExports.useRef();
  const elementRef8 = reactExports.useRef();
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
        title: "Tags",
        home: "Home",
        name: "Elements",
        fonticonsname: "Tags"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Default tag" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tags", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "First tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Second tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Third tag" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <div className="tags">
    <span className="tag">First tag</span>
    <span className="tag">Second tag</span>
    <span className="tag">Third tag</span>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Link tag" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tags", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "tag", children: "First tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "tag", children: "Second tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "tag", children: "Third tag" })
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
    <div className="tags">
      <Link to="#" className="tag">
        First tag
      </Link>
      <Link to="#" className="tag">
        Second tag
      </Link>
      <Link to="#" className="tag">
        Third tag
      </Link>
    </div>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Rounded tag" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tags", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-rounded", children: "First tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-rounded", children: "Second tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-rounded", children: "Third tag" })
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
    <div className="tags">
      <span className="tag tag-rounded">First tag</span>
      <span className="tag tag-rounded">Second tag</span>
      <span className="tag tag-rounded">Third tag</span>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Color tag" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tags", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-blue", children: "Blue tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-azure", children: "Azure tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-indigo", children: "Indigo tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-purple", children: "Purple tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-pink", children: "Pink tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-red", children: "Red tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-orange", children: "Orange tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-yellow", children: "Yellow tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-lime", children: "Lime tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-green", children: "Green tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-teal", children: "Teal tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-cyan", children: "Cyan tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-gray", children: "Gray tag" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-gray-dark", children: "Dark gray tag" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="tags">
      <span className="tag tag-blue">Blue tag</span>
      <span className="tag tag-azure">Azure tag</span>
      <span className="tag tag-indigo">Indigo tag</span>
      <span className="tag tag-purple">Purple tag</span>
      <span className="tag tag-pink">Pink tag</span>
      <span className="tag tag-red">Red tag</span>
      <span className="tag tag-orange">Orange tag</span>
      <span className="tag tag-yellow">Yellow tag</span>
      <span className="tag tag-lime">Lime tag</span>
      <span className="tag tag-green">Green tag</span>
      <span className="tag tag-teal">Teal tag</span>
      <span className="tag tag-cyan">Cyan tag</span>
      <span className="tag tag-gray">Gray tag</span>
      <span className="tag tag-gray-dark">Dark gray tag</span>
    </div>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "List of tags" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "You can create a list of tags with the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "highlighter-rouge", children: ".tags" }),
            " container."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tags", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "First tag" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Second tag" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Third tag" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "If the list is very long, it will automatically wrap on multiple lines, while keeping all tags evenly spaced." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tags", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "One" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Two" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Three" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Four" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Five" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Six" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Seven" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Eight" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Nine" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Ten" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Eleven" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Twelve" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Thirteen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Fourteen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Fifteen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Sixteen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Seventeen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Eighteen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Nineteen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: "Twenty" })
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
                  <div className="text-wrap">
                    <p>
                      You can create a list of tags with the{" "}
                      <code className="highlighter-rouge">.tags</code>{" "}
                      container.
                    </p>
                    <div className="tags">
                      <span className="tag">First tag</span>
                      <span className="tag">Second tag</span>
                      <span className="tag">Third tag</span>
                    </div>
                    <p className="mt-4">
                      If the list is very long, it will automatically wrap on
                      multiple lines, while keeping all tags evenly spaced.
                    </p>
                    <div className="tags">
                      <span className="tag">One</span>
                      <span className="tag">Two</span>
                      <span className="tag">Three</span>
                      <span className="tag">Four</span>
                      <span className="tag">Five</span>
                      <span className="tag">Six</span>
                      <span className="tag">Seven</span>
                      <span className="tag">Eight</span>
                      <span className="tag">Nine</span>
                      <span className="tag">Ten</span>
                      <span className="tag">Eleven</span>
                      <span className="tag">Twelve</span>
                      <span className="tag">Thirteen</span>
                      <span className="tag">Fourteen</span>
                      <span className="tag">Fifteen</span>
                      <span className="tag">Sixteen</span>
                      <span className="tag">Seventeen</span>
                      <span className="tag">Eighteen</span>
                      <span className="tag">Nineteen</span>
                      <span className="tag">Twenty</span>
                    </div>
                  </div>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Avatar tag" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tags", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "tag-avatar avatar",
                style: { backgroundImage: `url(${user6})` }
              }
            ),
            " ",
            "Victoria"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "tag-avatar avatar",
                style: { backgroundImage: `url(${user14})` }
              }
            ),
            " ",
            "Nathan"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "tag-avatar avatar",
                style: { backgroundImage: `url(${user1})` }
              }
            ),
            " ",
            "Alice"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "tag-avatar avatar",
                style: { backgroundImage: `url(${user4})` }
              }
            ),
            " ",
            "Rose"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "tag-avatar avatar",
                style: { backgroundImage: `url(${user9})` }
              }
            ),
            " ",
            "Peter"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "tag-avatar avatar",
                style: { backgroundImage: `url(${user12})` }
              }
            ),
            " ",
            "Wayne"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "tag-avatar avatar",
                style: { backgroundImage: `url(${user7})` }
              }
            ),
            " ",
            "Michelle"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "tag-avatar avatar",
                style: { backgroundImage: `url(${user11})` }
              }
            ),
            " ",
            "Debra"
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef6, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                  <div className="tags">
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user6})}}
                      ></span>
                      Victoria
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user14})}}
                      ></span>
                      Nathan
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user1})}}
                      ></span>
                      Alice
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user4})}}
                      ></span>
                      Rose
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user9})}}
                      ></span>
                      Peter
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user12})}}
                      ></span>
                      Wayne
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage:url(${user7})}}
                      ></span>
                      Michelle
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user11})}}
                      ></span>
                      Debra
                    </span>
                  </div>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Tag remove" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tags", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            "One",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "tag-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            "Two",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "tag-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            "Three",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "tag-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag", children: [
            "Four",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "tag-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x" }) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef7, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                  <div className="tags">
                    <span className="tag">
                      One
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag">
                      Two
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag">
                      Three
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag">
                      Four
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                  </div>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Tag addons" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tags", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag", children: [
            "npm",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "tag-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag tag-danger", children: [
            "npm",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-activity" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag", children: [
            "bundle",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-addon tag-success", children: "passing" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag tag-dark", children: [
            "CSS gzip size",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-addon tag-warning", children: "20.9 kB" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef8, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
              <div className="tags">
                    <div className="tag">
                      npm
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </div>
                    <div className="tag tag-danger">
                      npm
                      <span className="tag-addon">
                        <i className="fe fe-activity"></i>
                      </span>
                    </div>
                    <div className="tag">
                      bundle
                      <span className="tag-addon tag-success">passing</span>
                    </div>
                    <span className="tag tag-dark">
                      CSS gzip size
                      <span className="tag-addon tag-warning">20.9 kB</span>
                    </span>
                  </div>
` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
    ] })
  ] });
};
Tags.propTypes = {};
Tags.defaultProps = {};
export {
  Tags as default
};

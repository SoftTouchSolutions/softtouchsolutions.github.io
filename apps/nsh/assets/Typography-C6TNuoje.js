import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, T as Table } from "./index-DRovfVAv.js";
import { C as CardTitle } from "./CardTitle-Bk04aMpl.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Typography = () => {
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
  const elementRef19 = reactExports.useRef();
  const elementRef20 = reactExports.useRef();
  const elementRef21 = reactExports.useRef();
  const elementRef22 = reactExports.useRef();
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
        title: "Typography",
        home: "Home",
        name: "Utilites",
        fonticonsname: "Typography"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Default Heading Text" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Examples using standard ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "h1" }),
            " to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "h6" }),
            " html tags"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "h1. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "h2. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "h3. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "h4. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: "h5. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "h6. Heading" })
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
  <div className="text-wrap">
    <p>
      Examples using standard <code>h1</code> to <code>h6</code>{" "}
      html tags
    </p>
    <h1>h1. Heading</h1>
    <h2>h2. Heading</h2>
    <h3>h3. Heading</h3>
    <h4>h4. Heading</h4>
    <h5>h5. Heading</h5>
    <h6>h6. Heading</h6>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Heading with color Text" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Examples using standard ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "h1" }),
            " to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "h6" }),
            " html tags"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-primary", children: "h1. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-secondary", children: "h2. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-success", children: "h3. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-danger", children: "h4. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-info", children: "h5. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-warning", children: "h6. Heading" })
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
  <div className="text-wrap">
    <p>
      Examples using standard <code>h1</code> to <code>h6</code>{" "}
      html tags
    </p>
    <h1 className="text-primary">h1. Heading</h1>
    <h2 className="text-secondary">h2. Heading</h2>
    <h3 className="text-success">h3. Heading</h3>
    <h4 className="text-danger">h4. Heading</h4>
    <h5 className="text-info">h5. Heading</h5>
    <h6 className="text-warning">h6. Heading</h6>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Heading-Inverse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Examples using ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "heading-inverse" }),
            " css"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading-inverse", children: "h1. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-inverse", children: "h2. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-inverse", children: "h3. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "heading-inverse", children: "h4. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "heading-inverse", children: "h5. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "heading-inverse", children: "h6. Heading" })
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
  <div className="text-wrap">
    <p>
      Examples using <code>heading-inverse</code> css
    </p>
    <h1 className="heading-inverse">h1. Heading</h1>
    <h2 className="heading-secondary">h2. Heading</h2>
    <h3 className="heading-inverse">h3. Heading</h3>
    <h4 className="heading-inverse">h4. Heading</h4>
    <h5 className="heading-inverse">h5. Heading</h5>
    <h6 className="heading-inverse">h6. Heading</h6>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Heading primary to danger" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Examples using ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "heading-primary" }),
            " to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "heading-danger" }),
            " css"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading-inverse bg-primary ", children: "h1. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-inverse bg-secondary", children: "h2. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-inverse bg-success", children: "h3. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "heading-inverse bg-info", children: "h4. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "heading-inverse bg-warning", children: "h5. Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "heading-inverse bg-danger", children: "h6. Heading" })
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
  <div className="text-wrap">
    <p>
      Examples using <code>heading-primary</code> to{" "}
      <code>heading-danger</code> css
    </p>
    <h1 className="heading-inverse bg-primary ">h1. Heading</h1>
    <h2 className="heading-inverse bg-secondary">
      h2. Heading
    </h2>
    <h3 className="heading-inverse bg-success">h3. Heading</h3>
    <h4 className="heading-inverse bg-info">h4. Heading</h4>
    <h5 className="heading-inverse bg-warning">h5. Heading</h5>
    <h6 className="heading-inverse bg-danger">h6. Heading</h6>
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
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Paragraph Text" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lead", children: "Most designers set their type arbitrarily, either by pulling values out of the sky or by adhering to a baseline grid. The former case isn’t worth discussing here, but the latter requires a closer look." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "You can use the mark tag to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("mark", { children: "highlight" }),
          " text."
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
      Far far away, behind the word mountains, far from the
      countries Vokalia and Consonantia, there live the blind
      texts. Separated they live in Bookmarksgrove right at the
      coast of the Semantics, a large language ocean. A small
      river named Duden flows by their place and supplies it
      with the necessary regelialia. It is a paradisematic
      country, in which roasted parts of sentences fly into your
      mouth.
    </p>
    <p className="lead">
      Most designers set their type arbitrarily, either by
      pulling values out of the sky or by adhering to a baseline
      grid. The former case isn’t worth discussing here, but the
      latter requires a closer look.
    </p>
    <p>
      You can use the mark tag to <mark>highlight</mark> text.
    </p>
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
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Text alignment" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Easily realign text to components with text alignment classes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "example", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-start", children: "Left aligned text on all viewport sizes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center", children: "Center aligned text on all viewport sizes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-end", children: "Right aligned text on all viewport sizes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify m-0", children: "Both aligned text on all viewport sizes. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus." })
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
  <div className="text-wrap">
    <p>
      Easily realign text to components with text alignment
      classes.
    </p>
    <div className="example">
      <p className="text-start">
        Left aligned text on all viewport sizes.
      </p>
      <p className="text-center">
        Center aligned text on all viewport sizes.
      </p>
      <p className="text-end">
        Right aligned text on all viewport sizes.
      </p>
      <p className="text-justify m-0">
        Both aligned text on all viewport sizes. Ambitioni
        dedisse scripsisse iudicaretur. Cras mattis iudicium
        purus sit amet fermentum. Donec sed odio operae, eu
        vulputate felis rhoncus.
      </p>
    </div>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Text transform" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Transform text in components with text capitalization classes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "example", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lowercase", children: "Lowercased text." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-uppercase", children: "Uppercased text." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-capitalize m-0", children: "Capitalized text." })
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
  <div className="text-wrap">
    <p>
      Transform text in components with text capitalization
      classes.
    </p>
    <div className="example">
      <p className="text-lowercase">Lowercased text.</p>
      <p className="text-uppercase">Uppercased text.</p>
      <p className="text-capitalize m-0">Capitalized text.</p>
    </div>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Letter spacing" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Utilities for controlling the tracking (letter spacing) of an element." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "example", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tracking-tight", children: "Lorem ipsum dolor sit amet. Tight letter spacing." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tracking-normal", children: "Lorem ipsum dolor sit amet. Normal letter spacing." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tracking-wide m-0", children: "Lorem ipsum dolor sit amet. Wide letter spacing." })
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
  <div className="text-wrap">
    <p>
      Utilities for controlling the tracking (letter spacing) of
      an element.
    </p>
    <div className="example">
      <p className="tracking-tight">
        Lorem ipsum dolor sit amet. Tight letter spacing.
      </p>
      <p className="tracking-normal">
        Lorem ipsum dolor sit amet. Normal letter spacing.
      </p>
      <p className="tracking-wide m-0">
        Lorem ipsum dolor sit amet. Wide letter spacing.
      </p>
    </div>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: 12, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Line Height" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Utilities for controlling the leading (line height) of an element." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "example", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-none", children: [
                "Lorem ipsum dolor sit amet.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                " Dolor sit amet."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-tight", children: [
                "Lorem ipsum dolor sit amet.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                " Dolor sit amet."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-normal", children: [
                "Lorem ipsum dolor sit amet.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                " Dolor sit amet."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-loose m-0", children: [
                "Lorem ipsum dolor sit amet.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                " Dolor sit amet."
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef9, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <div className="text-wrap">
    <p>
      Utilities for controlling the leading (line height) of an
      element.
    </p>
    <div className="example">
      <p className="leading-none">
        Lorem ipsum dolor sit amet.
        <br />
        Dolor sit amet.
      </p>
      <p className="leading-tight">
        Lorem ipsum dolor sit amet.
        <br />
        Dolor sit amet.
      </p>
      <p className="leading-normal">
        Lorem ipsum dolor sit amet.
        <br />
        Dolor sit amet.
      </p>
      <p className="leading-loose m-0">
        Lorem ipsum dolor sit amet.
        <br />
        Dolor sit amet.
      </p>
    </div>
  </div>
              ` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Text-styles" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "card-body px-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "You can use the mark tag to",
              /* @__PURE__ */ jsxRuntimeExports.jsx("mark", { children: "highlight" }),
              " text."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("del", { children: "This line of text is meant to be treated as deleted text." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("s", { children: "This line of text is meant to be treated as no longer accurate." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ins", { children: "This line of text is meant to be treated as an addition to the document." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "This line of text will render as underlined" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "This line of text is meant to be treated as fine print." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "This line rendered as bold text." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "This line rendered as italicized text." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "This line rendered as italicized text." }) })
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef10, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <p>
    You can use the mark tag to
    <mark>highlight</mark> text.
  </p>
  <p>
    <del>
      This line of text is meant to be treated as deleted text.
    </del>
  </p>
  <p>
    <s>
      This line of text is meant to be treated as no longer
      accurate.
    </s>
  </p>
  <p>
    <ins>
      This line of text is meant to be treated as an addition to
      the document.
    </ins>
  </p>
  <p>
    <u>This line of text will render as underlined</u>
  </p>
  <p>
    <small>
      This line of text is meant to be treated as fine print.
    </small>
  </p>
  <p>
    <strong>This line rendered as bold text.</strong>
  </p>
  <p>
    <em>This line rendered as italicized text.</em>
  </p>
  <p>
    <b>This line rendered as italicized text.</b>
  </p>
              ` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Unorder List Style" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-style", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lorem ipsum dolor sit amet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consectetur adipiscing elit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Integer molestie lorem at massa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Facilisis in pretium nisl aliquet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Nulla volutpat aliquam velit",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Phasellus iaculis neque" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purus sodales ultricies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vestibulum laoreet porttitor sem" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ac tristique libero volutpat at" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Faucibus porta lacus fringilla vel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aenean sit amet erat nunc" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eget porttitor lorem" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef11, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <ul className="list-style">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  ` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "clipboard-icon",
                  "data-clipboard-target": "#element11",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  )
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Unorder List Style2" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-style2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lorem ipsum dolor sit amet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consectetur adipiscing elit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Integer molestie lorem at massa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Facilisis in pretium nisl aliquet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Nulla volutpat aliquam velit",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Phasellus iaculis neque" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purus sodales ultricies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vestibulum laoreet porttitor sem" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ac tristique libero volutpat at" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Faucibus porta lacus fringilla vel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aenean sit amet erat nunc" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eget porttitor lorem" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef12, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <ul className="list-style2">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  ` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "clipboard-icon",
                  "data-clipboard-target": "#element12",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  )
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Unorder List Style3" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-style3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lorem ipsum dolor sit amet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consectetur adipiscing elit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Integer molestie lorem at massa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Facilisis in pretium nisl aliquet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Nulla volutpat aliquam velit",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Phasellus iaculis neque" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purus sodales ultricies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vestibulum laoreet porttitor sem" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ac tristique libero volutpat at" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Faucibus porta lacus fringilla vel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aenean sit amet erat nunc" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eget porttitor lorem" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef13, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <ul className="list-style3">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  ` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "clipboard-icon",
                  "data-clipboard-target": "#element13",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  )
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Unorder List Style4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-style4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lorem ipsum dolor sit amet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consectetur adipiscing elit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Integer molestie lorem at massa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Facilisis in pretium nisl aliquet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Nulla volutpat aliquam velit",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Phasellus iaculis neque" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purus sodales ultricies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vestibulum laoreet porttitor sem" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ac tristique libero volutpat at" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Faucibus porta lacus fringilla vel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aenean sit amet erat nunc" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eget porttitor lorem" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element14", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef14, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <ul className="list-style4">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  ` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "clipboard-icon",
                  "data-clipboard-target": "#element14",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  )
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Unorder List Style5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-style5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lorem ipsum dolor sit amet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consectetur adipiscing elit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Integer molestie lorem at massa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Facilisis in pretium nisl aliquet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Nulla volutpat aliquam velit",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Phasellus iaculis neque" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purus sodales ultricies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vestibulum laoreet porttitor sem" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ac tristique libero volutpat at" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Faucibus porta lacus fringilla vel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aenean sit amet erat nunc" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eget porttitor lorem" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <ul className="list-style5">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  ` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "clipboard-icon",
                  "data-clipboard-target": "#element15",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  )
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Unorder List Style6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-style6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lorem ipsum dolor sit amet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consectetur adipiscing elit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Integer molestie lorem at massa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Facilisis in pretium nisl aliquet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Nulla volutpat aliquam velit",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Phasellus iaculis neque" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purus sodales ultricies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vestibulum laoreet porttitor sem" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ac tristique libero volutpat at" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Faucibus porta lacus fringilla vel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aenean sit amet erat nunc" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eget porttitor lorem" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef16, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <ul className="list-style6">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  ` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "clipboard-icon",
                  "data-clipboard-target": "#element16",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  )
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Order list" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "order-list", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lorem ipsum dolor sit amet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consectetur adipiscing elit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Integer molestie lorem at massa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Facilisis in pretium nisl aliquet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Nulla volutpat aliquam velit",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "order-list", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Phasellus iaculis neque" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purus sodales ultricies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vestibulum laoreet porttitor sem" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ac tristique libero volutpat at" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Faucibus porta lacus fringilla vel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aenean sit amet erat nunc" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eget porttitor lorem" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef17, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <ol className="order-list">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ol className="order-list">
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ol>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ol>
                  ` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "clipboard-icon",
                  "data-clipboard-target": "#element17",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  )
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Order With unorder" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "order-list", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lorem ipsum dolor sit amet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consectetur adipiscing elit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Integer molestie lorem at massa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Facilisis in pretium nisl aliquet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Nulla volutpat aliquam velit",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-style4 ps-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Phasellus iaculis neque" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purus sodales ultricies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vestibulum laoreet porttitor sem" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ac tristique libero volutpat at" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Faucibus porta lacus fringilla vel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aenean sit amet erat nunc" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eget porttitor lorem" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element18", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef18, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <ol className="order-list">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul className="list-style4 ps-5">
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ol>
                  ` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "clipboard-icon",
                  "data-clipboard-target": "#element18",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  )
                }
              )
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Inline Style" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-inline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-inline-item", children: "Lorem ipsum" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-inline-item", children: "Phasellus iaculis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-inline-item", children: "Nulla volutpat" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef19, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <ul className="list-inline">
    <li className="list-inline-item">Lorem ipsum</li>
    <li className="list-inline-item">Phasellus iaculis</li>
    <li className="list-inline-item">Nulla volutpat</li>
  </ul>
              ` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                onClick: () => {
                  CopytoClipBoard(elementRef19);
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Description Align" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "col-sm-3", children: "Description lists" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "col-sm-9", children: "A description list is perfect for defining terms." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "col-sm-3", children: "Euismod" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { className: "col-sm-9", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Donec id elit non mi porta gravida at eget metus." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "col-sm-3", children: "Malesuada porta" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "col-sm-9", children: "Etiam porta sem malesuada magna mollis euismod." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "col-sm-3 text-truncate", children: "Truncated term is truncated" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "col-sm-9", children: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "col-sm-3", children: "Nesting" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "col-sm-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "col-sm-4", children: "Nested definition list" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "col-sm-8", children: "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc." })
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element201", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef20, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <dl className="row">
    <dt className="col-sm-3">Description lists</dt>
    <dd className="col-sm-9">
      A description list is perfect for defining terms.
    </dd>

    <dt className="col-sm-3">Euismod</dt>
    <dd className="col-sm-9">
      <p>
        Vestibulum id ligula porta felis euismod semper eget
        lacinia odio sem nec elit.
      </p>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </dd>

    <dt className="col-sm-3">Malesuada porta</dt>
    <dd className="col-sm-9">
      Etiam porta sem malesuada magna mollis euismod.
    </dd>

    <dt className="col-sm-3 text-truncate">
      Truncated term is truncated
    </dt>
    <dd className="col-sm-9">
      Fusce dapibus, tellus ac cursus commodo, tortor mauris
      condimentum nibh, ut fermentum massa justo sit amet risus.
    </dd>

    <dt className="col-sm-3">Nesting</dt>
    <dd className="col-sm-9">
      <dl className="row">
        <dt className="col-sm-4">Nested definition list</dt>
        <dd className="col-sm-8">
          Aenean posuere, tortor sed cursus feugiat, nunc augue
          blandit nunc.
        </dd>
      </dl>
    </dd>
  </dl>
              ` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element201", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                onClick: () => {
                  CopytoClipBoard(elementRef20);
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Quote Left" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "blockquote", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "blockquote-footer", children: [
                "Someone famous in",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("cite", { title: "Source Title", children: "Source Title" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element211", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef21, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <blockquote className="blockquote">
    <p className="mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Integer posuere erat a ante.
    </p>
    <footer className="blockquote-footer">
      Someone famous in{" "}
      <cite title="Source Title">Source Title</cite>
    </footer>
  </blockquote>
                  ` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "clipboard-icon",
                  "data-clipboard-target": "#element211",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      onClick: () => {
                        CopytoClipBoard(elementRef21);
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
                  )
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Quote Center" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "card-body px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "blockquote text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "blockquote-footer", children: [
                "Someone famous in",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("cite", { title: "Source Title", children: "Source Title" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef22, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <blockquote className="blockquote text-center">
    <p className="mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Integer posuere erat a ante.
    </p>
    <footer className="blockquote-footer">
      Someone famous in{" "}
      <cite title="Source Title">Source Title</cite>
    </footer>
  </blockquote>
                  ` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "clipboard-icon",
                  "data-clipboard-target": "#element22",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      onClick: () => {
                        CopytoClipBoard(elementRef22);
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
                  )
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: 12, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Font Size" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-5", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-6", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-7", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-8", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-9", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-10", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-11", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-12", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-13", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-14", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-15", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-16", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-17", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-18", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-19", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-20", children: "Demo Content Title" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table table-bordered text-nowrap mg-t-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Classes" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".fs-[size]" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Values" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 18 | 20 | 25 | 30 | ... | 100" })
                  ] })
                ] }) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Font Weight" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-weight-light", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-weight-normal", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-weight-semibold", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-weight-bold", children: "Demo Content Title" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table  table-bordered text-nowrap mg-t-0 mg-b-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Classes" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".font-[weight]" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Weight" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "bold | semibold | normal | light " })
                  ] })
                ] }) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Font Color" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-info", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-success", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-warning", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-danger", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple", children: "Demo Content Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange", children: "Demo Content Title" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table table-bordered text-nowrap mg-t-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "wd-20p", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Classes" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".text-[color]" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "wd-20p", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Colors" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "primary | success | warning | danger | info | indigo | purple | orange | teal | pink | black | white | inverse" })
                  ] })
                ] }) }) })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
Typography.propTypes = {};
Typography.defaultProps = {};
export {
  Typography as default
};

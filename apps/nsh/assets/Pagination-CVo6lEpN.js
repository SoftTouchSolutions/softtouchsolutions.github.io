import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, G as Pagination, H as PaginationItem, J as PaginationLink } from "./index-Drmsz9hA.js";
import { N as Nav } from "./Nav-43SVGHcv.js";
import { C as CardTitle } from "./CardTitle-DTApbb8G.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Paginations = () => {
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
        title: "Pagination",
        home: "Home",
        name: "Elements",
        fonticonsname: "Pagination"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Basic pagination" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pagination-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { "aria-label": "Page navigation", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item ", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaginationLink,
            {
              "aria-label": "Next",
              className: "page-link",
              href: "#",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-right" })
            }
          ) })
        ] }) }) }) }),
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
              <Nav aria-label="Page navigation">
              <Pagination className="pagination mb-0">
                <PaginationItem className="page-item " active>
                  <PaginationLink className="page-link" href="#">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    5
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink
                    aria-label="Next"
                    className="page-link"
                    href="#"
                  >
                    <i className="fa fa-angle-right"></i>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </Nav>
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Basic pagination" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item page-prev ", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", tabIndex: "-1", children: "Prev" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item ", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item page-next", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "Next" }) })
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
    <Pagination className="pagination ">
    <PaginationItem className="page-item page-prev " disabled>
      <PaginationLink className="page-link" href="#" tabIndex="-1">
        Prev
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item " active>
      <PaginationLink className="page-link" href="#">
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink className="page-link" href="#">
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink className="page-link" href="#">
        3
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink className="page-link" href="#">
        4
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item page-next">
      <PaginationLink className="page-link" href="#">
        Next
      </PaginationLink>
    </PaginationItem>
    </Pagination>
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Model Pagination" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination mg-b-0 page-0 ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaginationLink,
            {
              "aria-label": "Last",
              className: "page-link",
              href: "#",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-double-left" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaginationLink,
            {
              "aria-label": "Next",
              className: "page-link",
              href: "#",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-left" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item ", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link hidden-xs-down", href: "#", children: "4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaginationLink,
            {
              "aria-label": "Next",
              className: "page-link",
              href: "#",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-right" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaginationLink,
            {
              "aria-label": "Last",
              className: "page-link",
              href: "#",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-double-right" })
            }
          ) })
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
    <Pagination className="pagination mg-b-0 page-0 ">
    <PaginationItem className="page-item">
      <PaginationLink
        aria-label="Last"
        className="page-link"
        href="#"
      >
        <i className="fa fa-angle-double-left"></i>
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink
        aria-label="Next"
        className="page-link"
        href="#"
      >
        <i className="fa fa-angle-left"></i>
      </PaginationLink>
    </PaginationItem>
  
    <PaginationItem className="page-item">
      <PaginationLink className="page-link" href="#">
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item " active>
      <PaginationLink className="page-link" href="#">
        3
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink className="page-link hidden-xs-down" href="#">
        4
      </PaginationLink>
    </PaginationItem>
  
    <PaginationItem className="page-item">
      <PaginationLink
        aria-label="Next"
        className="page-link"
        href="#"
      >
        <i className="fa fa-angle-right"></i>
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink
        aria-label="Last"
        className="page-link"
        href="#"
      >
        <i className="fa fa-angle-double-right"></i>
      </PaginationLink>
    </PaginationItem>
              </Pagination>
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Model Pagination2" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { "aria-label": "Page navigation", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination pagination-success mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item page-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaginationLink,
            {
              "aria-label": "Next",
              className: "page-link",
              href: "#",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-left" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaginationLink,
            {
              "aria-label": "Last",
              className: "page-link",
              href: "#",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-double-left" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item ", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item disabled", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "page-link", children: "..." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "10" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item page-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaginationLink,
            {
              "aria-label": "Next",
              className: "page-link",
              href: "#",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-right" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PaginationLink,
            {
              "aria-label": "Last",
              className: "page-link",
              href: "#",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-double-right" })
            }
          ) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Nav aria-label="Page navigation">
    <Pagination className="pagination pagination-success mb-0">
      <PaginationItem className="page-item page-0">
        <PaginationLink
          aria-label="Next"
          className="page-link"
          href="#"
        >
          <i className="fa fa-angle-left"></i>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink
          aria-label="Last"
          className="page-link"
          href="#"
        >
          <i className="fa fa-angle-double-left"></i>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item " active>
        <PaginationLink className="page-link" href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item disabled">
        <span className="page-link">...</span>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          10
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item page-0">
        <PaginationLink
          aria-label="Next"
          className="page-link"
          href="#"
        >
          <i className="fa fa-angle-right"></i>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink
          aria-label="Last"
          className="page-link"
          href="#"
        >
          <i className="fa fa-angle-double-right"></i>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
    </Nav>
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Model Pagination2" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { "aria-label": "Page navigation example", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            PaginationLink,
            {
              className: "page-link",
              href: "#",
              "aria-label": "Previous",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-left" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            PaginationLink,
            {
              className: "page-link",
              href: "#",
              "aria-label": "Next",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-right" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next" })
              ]
            }
          ) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Nav aria-label="Page navigation example">
    <Pagination className="pagination">
      <PaginationItem className="page-item">
        <PaginationLink
          className="page-link"
          href="#"
          aria-label="Previous"
        >
          <i className="fa fa-angle-left"></i>
          <span className="sr-only">Previous</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink
          className="page-link"
          href="#"
          aria-label="Next"
        >
          <i className="fa fa-angle-right"></i>
          <span className="sr-only">Next</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
              </Nav>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Pagination left alignment" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Page navigation example", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item ", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PaginationLink, { className: "page-link", href: "#", tabIndex: "-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-left" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item active", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PaginationLink, { className: "page-link", href: "#", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-right" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next" })
          ] }) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef6, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <nav aria-label="Page navigation example">
    <Pagination className="pagination ">
      <PaginationItem className="page-item " disabled>
        <PaginationLink className="page-link" href="#" tabIndex="-1">
          <i className="fa fa-angle-left"></i>
          <span className="sr-only">Previous</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item active">
        <PaginationLink className="page-link" href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          <i className="fa fa-angle-right"></i>
          <span className="sr-only">Next</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
             </nav>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Pagination center alignment" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Page navigation example", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination justify-content-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item ", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PaginationLink, { className: "page-link", href: "#", tabIndex: "-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-left" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item ", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PaginationLink, { className: "page-link", href: "#", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-right" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next" })
          ] }) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef7, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <nav aria-label="Page navigation example">
      <Pagination className="pagination justify-content-center">
        <PaginationItem className="page-item " disabled>
          <PaginationLink className="page-link" href="#" tabIndex="-1">
            <i className="fa fa-angle-left"></i>
            <span className="sr-only">Previous</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="page-item">
          <PaginationLink className="page-link" href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="page-item " active>
          <PaginationLink className="page-link" href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="page-item">
          <PaginationLink className="page-link" href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="page-item">
          <PaginationLink className="page-link" href="#">
            <i className="fa fa-angle-right"></i>
            <span className="sr-only">Next</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </nav>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Pagination Right Alignment" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Page navigation example", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination justify-content-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PaginationLink, { className: "page-link", href: "#", tabIndex: "-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-left" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item ", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PaginationLink, { className: "page-link", href: "#", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-right" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next" })
          ] }) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef8, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <nav aria-label="Page navigation example">
    <Pagination className="pagination justify-content-end">
      <PaginationItem className="page-item" disabled>
        <PaginationLink className="page-link" href="#" tabIndex="-1">
          <i className="fa fa-angle-left"></i>
          <span className="sr-only">Previous</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item " active>
        <PaginationLink className="page-link" href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          <i className="fa fa-angle-right"></i>
          <span className="sr-only">Next</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
              </nav>
                
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
Paginations.propTypes = {};
Paginations.defaultProps = {};
export {
  Paginations as default
};

import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-AOv_UoEY.js";
import { C as CardTitle } from "./CardTitle-p-89_2wb.js";
import { u as user4 } from "./4-B2cp7gEW.js";
import { u as user9 } from "./9-uUt78-1N.js";
import { u as user8 } from "./8-BqL85zok.js";
import { u as user11 } from "./11-DOVWzwhr.js";
import { u as user12 } from "./12-DCQ8KYQr.js";
import { u as user2 } from "./2-C7nMX_t4.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const MediaObject = () => {
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
        title: "MediaObject",
        home: "Home",
        name: "Elements",
        fonticonsname: "MediaObject"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "media", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Basic Example" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media d-block d-sm-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              alt: "",
              className: "avatar avatar-xl brround me-3",
              src: user4
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body pt-4 pt-sm-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mg-b-5 tx-inverse tx-15", children: "Media heading" }),
            "Lorem Ipsum generators on the Internet as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
          ] })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="border p-4">
      <div className="media d-block d-sm-flex">
        <img
          alt=""
          className="avatar avatar-xl brround me-3"
          src={user4}
        />
        <div className="media-body pt-4 pt-sm-0">
          <h5 className="mg-b-5 tx-inverse tx-15">
            Media heading
          </h5>
          Lorem Ipsum generators on the Internet as necessary aut
          odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </div>
      </div>
    </div>` }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "media1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Nesting" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media d-block d-sm-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              alt: "",
              className: "avatar avatar-xl brround me-3",
              src: user9
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body pt-4 pt-sm-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mg-b-5 tx-inverse tx-15", children: "Media heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem Ipsum generators on the Internet as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media d-block d-sm-flex mg-t-25", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  alt: "",
                  className: "avatar avatar-xl brround me-3",
                  src: user8
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mg-b-5 tx-inverse tx-15", children: "Media heading" }),
                "Lorem Ipsum generators on the Internet as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
              ] })
            ] })
          ] })
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
    <div className="border p-4">
      <div className="media d-block d-sm-flex">
        <img
          alt=""
          className="avatar avatar-xl brround me-3"
          src={user9}
        />
        <div className="media-body pt-4 pt-sm-0">
          <h5 className="mg-b-5 tx-inverse tx-15">
            Media heading
          </h5>
          <p>
            Lorem Ipsum generators on the Internet as necessary
            aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit
          </p>
          <div className="media d-block d-sm-flex mg-t-25">
            <img
              alt=""
              className="avatar avatar-xl brround me-3"
              src={user8}
            />
            <div className="media-body">
              <h5 className="mg-b-5 tx-inverse tx-15">
                Media heading
              </h5>
              Lorem Ipsum generators on the Internet as necessary
              aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
        </div>
      </div>
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "media2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Alignment" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media d-block d-sm-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              alt: "",
              className: "avatar avatar-xl brround me-3 align-self-center",
              src: user11
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body pt-4 pt-sm-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mg-b-5 tx-inverse tx-15", children: "Media heading" }),
            "Lorem Ipsum generators on the Internet as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Lorem Ipsum generators on the Internet as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
          ] })
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
    <div className="border p-4">
      <div className="media d-block d-sm-flex">
        <img
          alt=""
          className="avatar avatar-xl brround me-3 align-self-center"
          src={user11}
        />
        <div className="media-body pt-4 pt-sm-0">
          <h5 className="mg-b-5 tx-inverse tx-15">
            Media heading
          </h5>
          Lorem Ipsum generators on the Internet as necessary aut
          odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit Lorem Ipsum generators on
          the Internet as necessary aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit
        </div>
      </div>
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "media3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Order" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media d-block d-sm-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body mb-4 mb-sm-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mg-b-5 tx-inverse tx-15", children: "Media heading" }),
            "Lorem Ipsum generators on the Internet as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              alt: "",
              className: "avatar avatar-xl brround ms-3",
              src: user12
            }
          )
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
    <div className="border p-4">
      <div className="media d-block d-sm-flex">
        <div className="media-body mb-4 mb-sm-0">
          <h5 className="mg-b-5 tx-inverse tx-15">
            Media heading
          </h5>
          Lorem Ipsum generators on the Internet as necessary aut
          odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </div>
        <img
          alt=""
          className="avatar avatar-xl brround ms-3"
          src={user12}
        />
      </div>
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "media4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Media List" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "media d-block d-sm-flex border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                className: "avatar avatar-xl brround me-3",
                src: user2
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body pt-4 pt-sm-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mg-b-5 tx-inverse tx-15", children: "Media heading" }),
              "Lorem Ipsum generators on the Internet as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "media d-block d-sm-flex mt-5 border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                className: "avatar avatar-xl brround me-3",
                src: user12
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body pt-4 pt-sm-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mg-b-5 tx-inverse tx-15", children: "Media heading" }),
              "Lorem Ipsum generators on the Internet as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "media d-block d-sm-flex mt-5 border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                className: "avatar avatar-xl brround me-3",
                src: user2
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body pt-4 pt-sm-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mg-b-5 tx-inverse tx-15", children: "Media heading" }),
              "Lorem Ipsum generators on the Internet as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            ] })
          ] })
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
    <div className="border p-4">
      <ul className="list-unstyled mb-0">
        <li className="media d-block d-sm-flex border-0">
          <img
            alt=""
            className="avatar avatar-xl brround me-3"
            src={user2}
          />
          <div className="media-body pt-4 pt-sm-0">
            <h5 className="mg-b-5 tx-inverse tx-15">
              Media heading
            </h5>
            Lorem Ipsum generators on the Internet as necessary
            aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit
          </div>
        </li>
        <li className="media d-block d-sm-flex mt-5 border-0">
          <img
            alt=""
            className="avatar avatar-xl brround me-3"
            src={user12}
          />
          <div className="media-body pt-4 pt-sm-0">
            <h5 className="mg-b-5 tx-inverse tx-15">
              Media heading
            </h5>
            Lorem Ipsum generators on the Internet as necessary
            aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit
          </div>
        </li>
        <li className="media d-block d-sm-flex mt-5 border-0">
          <img
            alt=""
            className="avatar avatar-xl brround me-3"
            src={user2}
          />
          <div className="media-body pt-4 pt-sm-0">
            <h5 className="mg-b-5 tx-inverse tx-15">
              Media heading
            </h5>
            Lorem Ipsum generators on the Internet as necessary
            aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit
          </div>
        </li>
      </ul>
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
      ] })
    ] }) })
  ] });
};
MediaObject.propTypes = {};
MediaObject.defaultProps = {};
export {
  MediaObject as default
};

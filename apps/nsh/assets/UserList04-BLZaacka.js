import { a as React, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { v as PageHeaderstyle, R as Row, C as Col, g as Card, h as CardBody, Q as Modaluser, I as Input, c as DropdownToggle, D as DropdownMenu, r as Progress } from "./index-DRovfVAv.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-Bd29La1Q.js";
import { C as CardFooter } from "./CardFooter-Df6sAJQc.js";
import { d as data } from "./data-Cg5ysEjj.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./7-DPYO_OwL.js";
import "./6-BnLqC6y1.js";
import "./5-vtpEo8ki.js";
import "./1-D9D-sDJ2.js";
import "./8-BqL85zok.js";
import "./3-sVDGTRrN.js";
import "./4-B2cp7gEW.js";
import "./9-uUt78-1N.js";
const UserList04 = () => {
  const [allData, setAllData] = React.useState(data);
  let allElement2 = [];
  let myfunction = (InputData) => {
    let allElement;
    for (allElement of data) {
      if (allElement.name[0] == " ") {
        allElement.name = allElement.name.trim();
      }
      if (allElement.name.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.name.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }
    }
    setAllData(allElement2);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "User List", home: "Home", Pages: "Apps", elements: "User List", name: "User List 04" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "flex-lg-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "flex-lg-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "e-panel ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modaluser, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col col-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 w-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-icon", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-icon-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-search" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              className: "form-control",
              placeholder: "Search User",
              onChange: (ele) => {
                myfunction(ele.target.value);
              }
            }
          )
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: allData.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border p-0 shadow-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "avatar avatar-lg brround d-block cover-image",
              src: list.photo
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper ms-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: list.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: list.work })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-end ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group ms-3 mb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DropdownToggle,
              {
                tag: "a",
                color: "",
                className: "option-dots",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-ellipsis-v" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-edit me-2" }),
                " Edit"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trash me-2" }),
                " Delete"
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex mb-3", children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z",
                      opacity: ".3"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h6 mb-0 ms-3 mt-1", children: list.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M15.2 18.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45l-1.2 1.19zM6.54 5h-1.5c.09 1.32.35 2.59.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58zM14 8h5V5h-5z",
                      opacity: ".3"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM12 3v10l3-3h6V3h-9zm7 5h-5V5h5v3z" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h6 mb-0 ms-3 mt-1", children: "+345 657 567" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: "Work Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: "mb-0 ms-4 font-weight-bold", children: [
              list.num,
              " "
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              className: "progress-sm mb-0 mt-1",
              color: "primary",
              value: list.no
            }
          )
        ] })
      ] }) }, index)) })
    ] }) }) }) }) }) })
  ] });
};
UserList04.propTypes = {};
UserList04.defaultProps = {};
export {
  UserList04 as default
};

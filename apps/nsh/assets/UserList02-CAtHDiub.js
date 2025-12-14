import { a as React, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { v as PageHeaderstyle, R as Row, C as Col, g as Card, h as CardBody, Q as Modaluser, I as Input, b as Link } from "./index-zbnKGqDS.js";
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
const UserList02 = () => {
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "User List", home: "Home", Pages: "Apps", elements: "User List", name: "User List 02" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "flex-lg-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "flex-lg-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "e-panel ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modaluser, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 w-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-icon", children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: allData.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-sm-flex align-items-center border p-3 mb-3 br-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            className: "avatar avatar-lg brround d-block cover-image",
            src: list.photo
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper ms-sm-3  mt-4 mt-sm-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: list.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: list.work })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "float-sm-end ms-auto mt-4 mt-sm-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-white btn-sm me-1", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "#",
              className: "btn btn-primary btn-sm",
              children: "View Profile"
            }
          )
        ] })
      ] }) }, index)) })
    ] }) }) }) }) }) })
  ] });
};
UserList02.propTypes = {};
UserList02.defaultProps = {};
export {
  UserList02 as default
};

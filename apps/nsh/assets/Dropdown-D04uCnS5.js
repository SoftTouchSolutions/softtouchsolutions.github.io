import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, c as DropdownToggle, D as DropdownMenu, B as Button } from "./index-DRovfVAv.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-Bd29La1Q.js";
import { C as CardTitle } from "./CardTitle-Bk04aMpl.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Dropdown = () => {
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
        title: "Dropdowns",
        home: "Home",
        name: "Elements",
        fonticonsname: "Dropdowns"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Single button dropdowns" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-default", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-body p-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-default dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-primary dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-success dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-info dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-warning dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-danger dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-warning dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Rounded button dropdowns" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-default", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-body p-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-default btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-primary btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-success btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-info btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-warning btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-danger btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
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
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-default btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-primary btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <DropdownItem className="divider"></DropdownItem>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-success btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-info btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-warning btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-danger btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Split button dropdowns" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-default", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-body p-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", type: "button", className: "btn btn-default", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-default dropdown-toggle me-1",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", type: "button", className: "btn btn-primary", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-primary dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", type: "button", className: "btn btn-success", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-success dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", type: "button", className: "btn btn-info", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-info dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", type: "button", className: "btn btn-warning", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-warning dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", type: "button", className: "btn btn-danger", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-danger dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-default"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-primary"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-success"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                             <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button color="" type="button" className="btn btn-info">
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-warning"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-warning dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-danger"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                             <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Rounded Split button dropdowns" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-default", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-body p-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-default",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-default dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-primary",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-primary dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-success",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-success dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-info",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-info dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-warning",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-warning btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-danger",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-danger dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-default"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-default dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-primary"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <DropdownItem className="divider"></DropdownItem>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-success"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-info"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-warning"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-warning btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                             <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <DropdownItem className="divider"></DropdownItem>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-danger"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>` }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Single Square outline button dropdowns" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-default", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-body p-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-primary dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-success dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-info dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-warning dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-danger dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
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
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-warning dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>` }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Rounded button dropdowns" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-default", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-body p-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-primary btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-success btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-info btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-warning btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  "Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef6, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-primary btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-success btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-info btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-warning btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Split button dropdowns" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-default", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-body p-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-primary",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-primary dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-success",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-success dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-info",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-info dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-warning",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-warning dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-danger",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-danger dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef7, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-outline-info"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-outline-warning"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-warning dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Rounded Split button dropdowns" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-default", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-body p-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-outline-primary",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-outline-primary dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-outline-success",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-outline-success dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-outline-info",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-outline-info dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-outline-warning",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-outline-warning btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-outline-danger",
                children: "Action"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-pill btn-outline-danger dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Dropdown" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef8, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-primary"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                             <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-success"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-info"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-warning"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-warning btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-danger"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>` }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Dropup variation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropup btn-group mt-2 mb-2 me-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                className: "btn btn-primary dropdown-toggle",
                type: "button",
                "data-bs-toggle": "dropdown",
                children: [
                  "Dropup1",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "HTML" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "CSS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "JavaScript" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "About Us" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropup btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                className: "btn btn-info dropdown-toggle",
                type: "button",
                "data-bs-toggle": "dropdown",
                children: [
                  "Dropup2",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "HTML" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "CSS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "JavaScript" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "About Us" })
            ] })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef9, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                
                  <UncontrolledDropdown className="dropup btn-group mt-2 mb-2 me-2">
                    <DropdownToggle
                      color=""
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Dropup1
                      <span className="caret"></span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem href="#">HTML</DropdownItem>
                      <DropdownItem href="#">CSS</DropdownItem>
                      <DropdownItem href="#">JavaScript</DropdownItem>
                      <li className="divider"></li>
                      <DropdownItem href="#">About Us</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  {/* <!-- Split dropup button --> */}
                  <UncontrolledDropdown className="dropup btn-group mt-2 mb-2">
                    <DropdownToggle
                      color=""
                      className="btn btn-info dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Dropup2
                      <span className="caret"></span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem href="#">HTML</DropdownItem>
                      <DropdownItem href="#">CSS</DropdownItem>
                      <DropdownItem href="#">JavaScript</DropdownItem>
                      <li className="divider"></li>
                      <DropdownItem href="#">About Us</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Icon Drop Downs dropdowns" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-default", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-body p-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-facebook btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-facebook" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-twitter btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-twitter" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-google btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-google" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-youtube btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-youtube " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-vimeo btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-vimeo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-1 btn-group mt-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-github btn-pill dropdown-toggle",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-github" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", role: "menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-plus-title", children: [
                "Dropdown",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up mx-2", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Separated link" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef10, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-facebook btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-facebook"></i>{" "}
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-twitter btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-twitter"></i>{" "}
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-google btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-google"></i>{" "}
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-youtube btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-youtube "></i>
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-vimeo btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-vimeo"></i>
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-github btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-github"></i>{" "}
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>` }) }),
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
      ] }) })
    ] })
  ] });
};
Dropdown.propTypes = {};
Dropdown.defaultProps = {};
export {
  Dropdown as default
};

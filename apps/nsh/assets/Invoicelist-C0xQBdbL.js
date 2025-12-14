import { j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as file } from "./file-yDWqDtJD.js";
import { v as PageHeaderstyle, R as Row, C as Col, g as Card, h as CardBody, b as Link, I as Input, T as Table, L as Label, c as DropdownToggle, D as DropdownMenu, B as Button, F as Form } from "./index-DRovfVAv.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-Bd29La1Q.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Invoicelist = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaderstyle,
    {
      title: "Invoice List",
      home: "Home",
      Pages: "Pages",
      elements: "Invoice",
      name: "Invoice List"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "card-body", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "#", className: "btn btn-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-plus" }),
          " Add New Invoice"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 w-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-icon", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-icon-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-search" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              className: "form-control",
              placeholder: "Search Invoice"
            }
          )
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "e-table", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive table-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Table,
        {
          className: "table card-table table-vcenter text-nowrap border",
          id: "example1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Invoice" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Generate Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Due Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Bill to" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Options" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      defaultValue: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file, alt: "img", className: "w-5 h-5 me-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn-link", to: "#", children: "INVOICE #23543" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$230" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 Jan 2020" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "25 Jan 2020" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "Daneil Robert" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownToggle,
                    {
                      tag: "a",
                      color: "default",
                      className: "btn btn-light btn-sm",
                      "data-bs-toggle": "dropdown",
                      "aria-expanded": "false",
                      children: [
                        "Options ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-eye me-2" }),
                      " View"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-share me-2" }),
                      " Send"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-edit me-2" }),
                      " Edit"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trash me-2" }),
                      " Delete"
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      defaultValue: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file, alt: "img", className: "w-5 h-5 me-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn-link", to: "#", children: "INVOICE #43245" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$640" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 Jan 2020" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "25 Jan 2020" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "Daneil Robert" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownToggle,
                    {
                      tag: "a",
                      color: "default",
                      className: "btn btn-light btn-sm",
                      "data-bs-toggle": "dropdown",
                      "aria-expanded": "false",
                      children: [
                        "Options ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-eye me-2" }),
                      " View"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-share me-2" }),
                      " Send"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-edit me-2" }),
                      " Edit"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trash me-2" }),
                      " Delete"
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      defaultValue: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file, alt: "img", className: "w-5 h-5 me-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn-link", to: "#", children: "INVOICE #54323" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$241" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 Jan 2020" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "25 Jan 2020" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "Daneil Robert" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownToggle,
                    {
                      tag: "a",
                      color: "default",
                      className: "btn btn-light btn-sm",
                      "data-bs-toggle": "dropdown",
                      "aria-expanded": "false",
                      children: [
                        "Options ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-eye me-2" }),
                      " View"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-share me-2" }),
                      " Send"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-edit me-2" }),
                      " Edit"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trash me-2" }),
                      " Delete"
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      defaultValue: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file, alt: "img", className: "w-5 h-5 me-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn-link", to: "#", children: "INVOICE #52345" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$543" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 Jan 2020" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "25 Jan 2020" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "Daneil Robert" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownToggle,
                    {
                      tag: "a",
                      color: "default",
                      className: "btn btn-light btn-sm",
                      "data-bs-toggle": "dropdown",
                      "aria-expanded": "false",
                      children: [
                        "Options ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-eye me-2" }),
                      " View"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-share me-2" }),
                      " Send"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-edit me-2" }),
                      " Edit"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trash me-2" }),
                      " Delete"
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      defaultValue: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file, alt: "img", className: "w-5 h-5 me-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn-link", to: "#", children: "INVOICE #65343" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$654" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 Jan 2020" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "25 Jan 2020" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "Daneil Robert" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownToggle,
                    {
                      tag: "a",
                      color: "default",
                      className: "btn btn-light btn-sm",
                      "data-bs-toggle": "dropdown",
                      "aria-expanded": "false",
                      children: [
                        "Options ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-eye me-2" }),
                      " View"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-share me-2" }),
                      " Send"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-edit me-2" }),
                      " Edit"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trash me-2" }),
                      " Delete"
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      defaultValue: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file, alt: "img", className: "w-5 h-5 me-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn-link", to: "#", children: "INVOICE #23654" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$523" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 Jan 2020" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "25 Jan 2020" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "Daneil Robert" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownToggle,
                    {
                      tag: "a",
                      color: "default",
                      className: "btn btn-light btn-sm",
                      "data-bs-toggle": "dropdown",
                      "aria-expanded": "false",
                      children: [
                        "Options ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-eye me-2" }),
                      " View"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-share me-2" }),
                      " Send"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-edit me-2" }),
                      " Edit"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trash me-2" }),
                      " Delete"
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      defaultValue: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file, alt: "img", className: "w-5 h-5 me-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn-link", to: "#", children: "INVOICE #53245" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$324" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 Jan 2020" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "25 Jan 2020" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "Daneil Robert" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownToggle,
                    {
                      tag: "a",
                      color: "default",
                      className: "btn btn-light btn-sm",
                      "data-bs-toggle": "dropdown",
                      "aria-expanded": "false",
                      children: [
                        "Options ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-eye me-2" }),
                      " View"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-share me-2" }),
                      " Send"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-edit me-2" }),
                      " Edit"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trash me-2" }),
                      " Delete"
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      defaultValue: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file, alt: "img", className: "w-5 h-5 me-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn-link", to: "#", children: "INVOICE #34234" }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$543" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 Jan 2020" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "25 Jan 2020" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: "Daneil Robert" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownToggle,
                    {
                      tag: "a",
                      color: "default",
                      className: "btn btn-light btn-sm",
                      "data-bs-toggle": "dropdown",
                      "aria-expanded": "false",
                      children: [
                        "Options ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-eye me-2" }),
                      " View"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-share me-2" }),
                      " Send"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-edit me-2" }),
                      " Edit"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trash me-2" }),
                      " Delete"
                    ] })
                  ] })
                ] }) })
              ] })
            ] })
          ]
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "modal fade",
        role: "dialog",
        tabIndex: "-1",
        id: "user-form-modal",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-dialog modal-lg", role: "document", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "modal-title", children: "Create User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "btn-close",
                "data-bs-dismiss": "modal",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "×" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "form", noValidate: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "form-control",
                      type: "text",
                      name: "name",
                      placeholder: "John Smith",
                      defaultValue: "John Smith"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Username" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "form-control",
                      type: "text",
                      name: "username",
                      placeholder: "johnny.s",
                      defaultValue: "johnny.s"
                    }
                  )
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    className: "form-control",
                    type: "text",
                    placeholder: "user@example.com"
                  }
                )
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "About" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    className: "form-control",
                    rows: "5",
                    placeholder: "My Bio"
                  }
                )
              ] }) }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", className: "col-12 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Change Password" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Current Password" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "form-control",
                      type: "password",
                      placeholder: "••••••"
                    }
                  )
                ] }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "New Password" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        className: "form-control",
                        type: "password",
                        placeholder: "••••••"
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                      "Confirm",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "d-none d-xl-inline", children: "Password" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        className: "form-control",
                        type: "password",
                        placeholder: "••••••"
                      }
                    )
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "5", className: "col-12  offset-sm-1 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Keeping in Touch" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email Notifications" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-controls-stacked px-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-control custom-checkbox", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "checkbox",
                          className: "custom-control-input",
                          id: "notifications-blog",
                          defaultChecked: true
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          className: "custom-control-label",
                          htmlFor: "notifications-blog",
                          children: "Blog posts"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-control custom-checkbox", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "checkbox",
                          className: "custom-control-input",
                          id: "notifications-news",
                          defaultChecked: true
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          className: "custom-control-label",
                          htmlFor: "notifications-news",
                          children: "Newsletter"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-control custom-checkbox", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "checkbox",
                          className: "custom-control-input",
                          id: "notifications-offers",
                          defaultChecked: true
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          className: "custom-control-label",
                          htmlFor: "notifications-offers",
                          children: "Personal Offers"
                        }
                      )
                    ] })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: " d-flex justify-content-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-primary",
                type: "submit",
                children: "Save Changes"
              }
            ) }) })
          ] }) }) })
        ] }) })
      }
    )
  ] }) })
] });
Invoicelist.propTypes = {};
Invoicelist.defaultProps = {};
export {
  Invoicelist as default
};

import { j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { s as PageHeaderstyle, R as Row, C as Col, g as Card, b as Link, h as CardBody, c as DropdownToggle, D as DropdownMenu, T as Table, L as Label, I as Input, G as Pagination, H as PaginationItem, J as PaginationLink } from "./index-Drmsz9hA.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-ChYO2B-2.js";
import { L as ListGroup, a as ListGroupItem } from "./ListGroupItem-C2xqAcTL.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-YSmGIrnj.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./TooltipPopoverWrapper-BZlnwhoL.js";
const EmailInbox = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaderstyle,
    {
      title: "Email Inbox",
      home: "Home",
      Pages: "Pages",
      elements: "Email",
      name: "Email Inbox"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "4", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-transparent mb-0 mail-inbox pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `pages/email/emailcompose`,
            className: "btn btn-primary btn-lg btn-block",
            children: "Compose"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            active: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center active",
            children: [
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z", opacity: ".3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" })
                  ]
                }
              ),
              " ",
              "Inbox ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ms-auto badge bg-success", children: "14" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center",
            children: [
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M20 16V6H4v10.01L20 16zm-7-1.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zM4 16V6h16v10.01L4 16zm9-6.87c-3.89.54-5.44 3.2-6 5.87 1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7v2.13z" })
                  ]
                }
              ),
              "Sent Mail"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center",
            children: [
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M18.49 9.89l.26-2.79-2.74-.62-1.43-2.41L12 5.18 9.42 4.07 7.99 6.48l-2.74.62.26 2.78L3.66 12l1.85 2.11-.26 2.8 2.74.62 1.43 2.41L12 18.82l2.58 1.11 1.43-2.41 2.74-.62-.26-2.79L20.34 12l-1.85-2.11zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.9 5.54l-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12l-2.44-2.78.34-3.68zM18.75 16.9l-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11.26 2.79zM11 15h2v2h-2zm0-8h2v6h-2z" })
                  ]
                }
              ),
              " ",
              "Important ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ms-auto badge bg-danger", children: "3" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center",
            children: [
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M17.11 10.83l-2.47-.21-1.2-.1-.47-1.11L12 7.13l-.97 2.28-.47 1.11-1.2.1-2.47.21 1.88 1.63.91.79-.27 1.17-.57 2.42 2.13-1.28 1.03-.63 1.03.63 2.13 1.28-.57-2.42-.27-1.17.91-.79z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zm-7.41 5.18l.56 2.41-2.12-1.28-1.03-.62-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.16z" })
                  ]
                }
              ),
              " ",
              "Starred"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center",
            children: [
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 15.36l-8-5.02V18h16l-.01-7.63z", opacity: ".3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 3.32L19.99 8v.01L12 13 4 8l8-4.68zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z" })
                  ]
                }
              ),
              " ",
              "Drafts"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center",
            children: [
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 7H5v10h11l3.55-5z", opacity: ".3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z" })
                  ]
                }
              ),
              " ",
              "Tags"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center",
            children: [
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 9h8v10H8z", opacity: ".3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" })
                  ]
                }
              ),
              " ",
              "Trash"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: " border-top", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-transparent mb-0 mail-inbox", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center px-0 py-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 brround bg-primary-transparent me-2" }),
              " ",
              "Friends"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center px-0 py-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 brround bg-secondary-transparent me-2" }),
              " ",
              "Family"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center px-0 py-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 brround bg-success-transparent me-2" }),
              " ",
              "Social"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center px-0 py-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 brround bg-info-transparent me-2" }),
              " ",
              "Office"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center px-0 py-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 brround bg-warning-transparent me-2" }),
              " ",
              "Work"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            tag: "a",
            className: "list-group-item list-group-item-action d-flex align-items-center px-0 py-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 brround bg-danger-transparent me-2" }),
              " ",
              "Settings"
            ]
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", lg: "8", xl: "9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: " p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inbox-body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mail-option", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chk-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                tag: "a",
                "data-bs-toggle": "dropdown",
                className: "btn mini all",
                "aria-expanded": "false",
                children: [
                  "All",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down " })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: " None" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: " Read" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: " Unread" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                id: "Refresh",
                "data-bs-placement": "top",
                "data-bs-toggle": "",
                to: "#",
                className: "btn mini tooltips",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: " fa fa-refresh" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { target: "Refresh", placement: "top", children: "Refresh" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-group hidden-phone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownToggle,
              {
                color: "",
                tag: "a",
                "data-bs-toggle": "dropdown",
                className: "btn mini blue",
                "aria-expanded": "false",
                children: [
                  "More",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down " })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-pencil" }),
                " Mark as Read"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-ban" }),
                " Spam"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trash-o" }),
                " Delete"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "unstyled inbox-pagination", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1-50 of 234" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "np-btn", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-right pagination-right" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table table-inbox table-hover text-nowrap mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-warning" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "Tim Reid, S P N" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "Boost Your Website Traffic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "April 01" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star inbox-started" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "view-message dont-show font-weight-semibold", children: [
              "Freelancer.com",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "view-message", children: [
              "Stop wasting your visitors",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "May 23" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "unread", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark text-danger" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message  dont-show", children: "PHPClass" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message ", children: "Added a new class: Login Class Fast Site" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message  text-end", children: "9:27 AM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "Facebook" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "view-message view-message", children: [
              "Somebody requested a new password",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "June 13" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-warning" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "Skype" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message view-message", children: "Password successfully changed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "March 24" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star inbox-started" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "Google+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "alireza, do you know" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "March 09" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star inbox-started" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "view-message dont-show font-weight-semibold", children: [
              "WOW Slider",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "New WOW Slider v7.8 - 67% off" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "March 14" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star inbox-started text-warning" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "LinkedIn Pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "The One Sign Your Co-Worker Will Stab" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "Feb 19" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "unread", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "view-message dont-show font-weight-semibold", children: [
              "Google Webmaster",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "Improve the search presence of WebSite" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "March 15" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "JW Player" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "view-message", children: [
              "Last Chance: Upgrade to Pro for",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "March 15" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "Drupal Community" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message view-message", children: "Welcome to the Drupal Community" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "March 04" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star inbox-started text-warning" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "dont-show font-weight-semibold", children: "Zoosk " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "7 new singles we think you'll like" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "May 14" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark text-danger" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "view-message dont-show font-weight-semibold", children: [
              "LinkedIn",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "view-message", children: [
              "Alireza: Nokia Networks, System Group and",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "February 25" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "dont-show font-weight-semibold", children: "Facebook" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message view-message", children: "Your account was recently logged into" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "March 14" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "Twitter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "Your Twitter password has been changed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "April 07" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "InternetSeer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "Performance Report" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "July 14" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark text-danger" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "view-message dont-show font-weight-semibold", children: [
              "Bertina",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "IMPORTANT: Don't lose your domains!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "June 16" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star inbox-started" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark text-danger" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "view-message dont-show font-weight-semibold", children: [
              "Laura Gaffin, S P N",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "Your Website On Google (Higher Rankings Are Better)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "August 10" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "Facebook" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message view-message", children: "Alireza Zare Login faild" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "feb 14" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star inbox-started" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "AddMe.com" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message", children: "Submit Your Website to the AddMe Business Directory" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "August 10" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "checkbox",
                  className: "custom-control-input",
                  name: "example-checkbox2",
                  value: "option2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "inbox-small-cells", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bookmark" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message dont-show font-weight-semibold", children: "Terri Rexer, S P N" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message view-message", children: "Forget Google AdWords: Un-Limited Clicks fo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "view-message text-end font-weight-semibold", children: "April 14" })
          ] })
        ] }) }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item page-prev", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", tabIndex: "-1", children: "Prev" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item ", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "1" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "2" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "3" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item page-next", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "Next" }) })
      ] })
    ] })
  ] })
] });
EmailInbox.propTypes = {};
EmailInbox.defaultProps = {};
export {
  EmailInbox as default
};

import { j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { u as user2 } from "./2-CzZ0lnvD.js";
import { f as file2, d as doc } from "./file2-9Fx0WMPB.js";
import { s as PageHeaderstyle, R as Row, C as Col, g as Card, b as Link, n as CardHeader, h as CardBody, c as DropdownToggle, D as DropdownMenu } from "./index-Dr-4baW5.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-DRoStKfe.js";
import { C as CardFooter } from "./CardFooter-BNYtMN9A.js";
import { C as CardTitle } from "./CardTitle-BjRFrU5i.js";
import { L as ListGroup, a as ListGroupItem } from "./ListGroupItem-BMVT9wdr.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-Dhj_EzA1.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./TooltipPopoverWrapper--vPxev6P.js";
const EmailRead = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "Email Services", home: "Home", Pages: "Pages", elements: "Email", name: "Email Services" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "4", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-transparent mb-0 mail-inbox pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `${"/apps/nsh/"}pages/email/emailcompose`,
            className: "btn btn-primary btn-lg btn-block",
            children: "Compose"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ListGroupItem,
          {
            action: true,
            active: true,
            href: "#",
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-body border-top", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "list-group list-group-transparent mb-0 mail-inbox", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "8", xl: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h4", children: "Main Read" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "email-media", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0 d-sm-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "me-2 rounded-circle avatar avatar-lg",
              src: user2,
              alt: "avatar"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body pt-0 overflow-inherit", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "float-end d-none d-xl-flex fs-15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "me-3 mt-1 text-muted", children: "Sep 13 , 2022 12:45 pm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "#",
                  className: "me-3",
                  "data-bs-toggle": "tooltip",
                  title: "",
                  id: "Rated",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                            d: "M17.11 10.83l-2.47-.21-1.2-.1-.47-1.11L12 7.13l-.97 2.28-.47 1.11-1.2.1-2.47.21 1.88 1.63.91.79-.27 1.17-.57 2.42 2.13-1.28 1.03-.63 1.03.63 2.13 1.28-.57-2.42-.27-1.17.91-.79z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zm-7.41 5.18l.56 2.41-2.12-1.28-1.03-.62-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.16z" })
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { target: "Rated", placement: "top", children: "Rated" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "#",
                  className: "me-3",
                  "data-bs-toggle": "tooltip",
                  title: "",
                  id: "Reply",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" })
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { target: "Reply", placement: "top", children: "Reply" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "me-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DropdownToggle,
                  {
                    color: "",
                    tag: "a",
                    role: "button",
                    "aria-expanded": "false",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "svg",
                      {
                        className: "svg-icon",
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-share me-2" }),
                    " Reply"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-alert-circle me-2" }),
                    "Report Spam"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trash me-2" }),
                    "Delete"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-printer me-2" }),
                    "Print"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-filter me-2" }),
                    "Filter"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-title text-dark font-weight-semibold mt-1", children: [
              "Alica Nestle",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted font-weight-semibold", children: "( alicnestle@gmail.com )" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: "mb-0", children: [
              "to Adam Cotter ( adamcotter@gmail.com )",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "me-2 d-xl-none d-block", children: "Sep 13 , 2022 12:45 pm" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "eamil-body mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Hi Sir/Madam" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            " "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            " ",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            " ",
            "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "Thanking you Sir/Madam" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "email-attch", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "float-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "#",
                  "data-bs-toggle": "tooltip",
                  title: "",
                  id: "Download",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                            d: "M14.17 11H13V5h-2v6H9.83L12 13.17z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" })
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { target: "Download", placement: "top", children: "Download" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-weight-semibold", children: [
              "3 Attachments ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: "View" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", className: " mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "", to: `${"/apps/nsh/"}pages/gallery`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border p-0 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file2, alt: "img", className: "w-80 mx-auto" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-light p-3 border border-top-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-file-excel-o me-1" }),
                " ",
                "xlsdocument.xls"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", className: " mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "", to: `${"/apps/nsh/"}pages/gallery`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border p-0 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: doc, alt: "img", className: "w-80 mx-auto" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-light p-3 border border-top-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-file-word-o me-1" }),
                " worddocument"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", lg: "3", className: " mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "", to: `${"/apps/nsh/"}pages/gallery`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border p-0 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: doc, alt: "img", className: "w-80 mx-auto" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-light p-3 border border-top-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-file-word-o me-1" }),
                " worddocument"
              ] })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-primary mt-1 mb-1 me-1", to: "#", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-reply" }),
          " Reply"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-secondary mt-1 mb-1 me-1", to: "#", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-share" }),
          " Forward"
        ] })
      ] })
    ] }) })
  ] })
] });
EmailRead.propTypes = {};
EmailRead.defaultProps = {};
export {
  EmailRead as default
};

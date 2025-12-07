import { j as jsxRuntimeExports, r as reactExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, I as Input, g as Card, b as Link, B as Button, v as Modal, w as ModalHeader, x as ModalBody, F as Form, L as Label, y as ModalFooter } from "./index-CPwjB16p.js";
import { u as user7 } from "./7-6SzHPYz9.js";
import { u as user1 } from "./1-BRel2upO.js";
import { u as user2 } from "./2-CzZ0lnvD.js";
import { u as user3 } from "./3-BGsNsrgF.js";
import { u as user4 } from "./4-D2jqn9Fg.js";
import { u as user5 } from "./5-Dpcr_Tz2.js";
import { u as user6 } from "./6-CYNIMoC8.js";
import { u as user8 } from "./8-lww0UeON.js";
import { u as user9 } from "./9-uUt78-1N.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Contactlist = () => {
  function ContactList(args) {
    const [modal, setModal] = reactExports.useState(false);
    const toggle = () => setModal(!modal);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { color: "", className: "btn btn-primary", onClick: toggle, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-plus" }),
        "  Add New Contact"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, ...args, size: "lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Create User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { className: "modal-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "form", noValidate: true, children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: 6, className: "col-12  mb-3", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: 5, className: "col-12 offset-sm-1 mb-3", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "d-flex justify-content-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", children: "Save Changes" }) }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggle, children: "Do Something" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggle, children: "Cancel" })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Contact List",
        home: "Home",
        name: "Apps",
        fonticonsname: "Contact List"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "flex-lg-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "flex-lg-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactList, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 w-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-icon", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-icon-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-search" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              className: "form-control",
              placeholder: "Search Contact"
            }
          )
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center user-contact-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user7,
                alt: "",
                className: "avatar avatar-xxl brround d-block cover-image mx-auto"
              }
            ),
            " "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: "Denis Rosenblum" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Project Manager" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "btn btn-white btn-svgs me-1",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-3",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
                      ]
                    }
                  ),
                  " ",
                  "Message"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light btn-svgs", to: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon me-3",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                  ]
                }
              ),
              "Profile"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center user-contact-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "avatar avatar-xxl brround d-block cover-image mx-auto",
              alt: "",
              src: user1
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: "Catherina Bamber" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Company Manager" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "btn btn-white btn-svgs",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-3",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
                      ]
                    }
                  ),
                  " ",
                  "Message"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light btn-svgs", to: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon me-3",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                  ]
                }
              ),
              "Profile"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center user-contact-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "avatar avatar-xxl brround d-block cover-image mx-auto",
              alt: "",
              src: user2
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: "Dana Lott" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Hr Manager" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "btn btn-white btn-svgs",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-3",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
                      ]
                    }
                  ),
                  " ",
                  "Message"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light btn-svgs", to: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon me-3",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                  ]
                }
              ),
              "Profile"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center user-contact-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "avatar avatar-xxl brround d-block cover-image mx-auto",
              src: user3,
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: "Benedict Vallone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Hr Recriuter" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "btn btn-white btn-svgs",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-3",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
                      ]
                    }
                  ),
                  " ",
                  "Message"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light btn-svgs", to: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon me-3",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                  ]
                }
              ),
              "Profile"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center user-contact-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: user4,
              alt: "",
              className: "avatar avatar-xxl brround d-block cover-image mx-auto"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: "Robbie Ruder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Ceo" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "btn btn-white btn-svgs",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-3",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
                      ]
                    }
                  ),
                  " ",
                  "Message"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light btn-svgs", to: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon me-3",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                  ]
                }
              ),
              "Profile"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center user-contact-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: user5,
              alt: "",
              className: "avatar avatar-xxl brround d-block cover-image mx-auto"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: "Micaela Aultman" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Php developer" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "btn btn-white btn-svgs",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-3",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
                      ]
                    }
                  ),
                  " ",
                  "Message"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light btn-svgs", to: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon me-3",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                  ]
                }
              ),
              "Profile"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center user-contact-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: user6,
              className: "avatar avatar-xxl brround d-block cover-image mx-auto",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: "Jacquelynn Sapienza" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Web developer" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "btn btn-white btn-svgs",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-3",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
                      ]
                    }
                  ),
                  " ",
                  "Message"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light btn-svgs", to: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon me-3",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                  ]
                }
              ),
              "Profile"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center user-contact-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "avatar avatar-xxl brround d-block cover-image mx-auto",
              src: user8,
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: "Elida Distefano" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Hr Manager" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "btn btn-white btn-svgs",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-3",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
                      ]
                    }
                  ),
                  " ",
                  "Message"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light btn-svgs", to: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon me-3",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                  ]
                }
              ),
              "Profile"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center user-contact-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: user9,
              alt: "",
              className: "avatar avatar-xxl brround d-block cover-image mx-auto"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wrapper mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 mt-1 text-dark font-weight-semibold", children: "Collin Bridgman" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "web designer" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "btn btn-white btn-svgs",
                to: "#",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-3",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
                      ]
                    }
                  ),
                  " ",
                  "Message"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light btn-svgs", to: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon me-3",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                  ]
                }
              ),
              "Profile"
            ] })
          ] })
        ] }) }) })
      ] })
    ] }) }) }) }) }) })
  ] });
};
Contactlist.propTypes = {};
Contactlist.defaultProps = {};
export {
  Contactlist as default
};

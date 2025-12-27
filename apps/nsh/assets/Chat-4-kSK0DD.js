import { a as React, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { S as SimpleBar } from "./index-DWkztd76.js";
import { u as user5 } from "./5-vtpEo8ki.js";
import { u as user2 } from "./2-C7nMX_t4.js";
import { u as user7 } from "./7-DPYO_OwL.js";
import { u as user3 } from "./3-sVDGTRrN.js";
import { u as user9 } from "./9-uUt78-1N.js";
import { u as user6 } from "./6-BnLqC6y1.js";
import { u as user16 } from "./16-Cj3VG8Ln.js";
import { v as PageHeaderstyle, R as Row, C as Col, g as Card, i as classnames, c as DropdownToggle, D as DropdownMenu, b as Link } from "./index-AOv_UoEY.js";
import { N as Nav } from "./Nav-gO3mkbbi.js";
import { N as NavItem } from "./NavItem-BNbPYxZP.js";
import { N as NavLink } from "./NavLink-CbHYmh6A.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-te3rbsH-.js";
import { L as ListGroup, a as ListGroupItem } from "./ListGroupItem-DEGIFh9u.js";
import { T as TabContent, a as TabPane } from "./TabPane-C7AbRQve.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-D5Rf3Lfn.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./TooltipPopoverWrapper-DH6P2XRB.js";
const Chat = () => {
  const [navTabactive, setnavTabactive] = React.useState("tab-7");
  const Navtabs = (tab) => {
    if (navTabactive !== tab) {
      setnavTabactive(tab);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "Chat", home: "Home", Pages: "Apps", elements: "Chat", name: "Chat 01" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bootstrap snippet  overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tile tile-alt mb-0", id: "messages-main", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ms-menu", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab-menu-heading border-top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabs-menu1 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              className: classnames({ active: navTabactive === "tab-7" }),
              onClick: () => {
                Navtabs("tab-7");
              },
              children: "Chat"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              className: classnames({ active: navTabactive === "tab-8" }),
              onClick: () => {
                Navtabs("tab-8");
              },
              children: "Contacts"
            }
          ) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { activeTab: navTabactive, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { className: "tab-pane", tabId: "tab-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ListGroup,
            {
              className: "list-group lg-alt chat-conatct-list",
              id: "ChatList",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user5,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Davil Parnell" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "Fierent fastidii recteque ad pro" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chat-time text-muted", children: "2 mins" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user2,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Ann Watkinson" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: "list-group-item-text text-muted", children: [
                      "Cum sociis natoque penatibus",
                      " "
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chat-time text-muted", children: "10 mins" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user7,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Marse Walter" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "Suspendisse sapien ligula" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chat-time text-muted", children: "15 mins" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lv-avatar float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user3,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Jeremy Robbins" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "Phasellus porttitor tellus nec" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chat-time text-muted", children: "30 mins" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lv-avatar float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user9,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Reginald Horace" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "Quisque consequat arcu eget" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chat-time text-muted", children: "50 min" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user6,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Shark Henry" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "Nam lobortis odio et leo maximu" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chat-time text-muted", children: "1 day" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user7,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Paul Van Dack" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "Nam posuere purus sed velit auctor sodales" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chat-time text-muted", children: "2 days" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lv-avatar float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user5,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "James Anderson" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "Vivamus imperdietsag" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chat-time text-muted", children: "2 days" })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { className: "tab-pane", tabId: "tab-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ListGroup,
            {
              className: "list-group lg-alt chat-conatct-list",
              id: "ChatList2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user5,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Davil Parnell" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "davilparnell@gmail.com" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DropdownToggle,
                      {
                        tag: "a",
                        color: "",
                        "data-bs-toggle": "dropdown",
                        className: "option-dots",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Call" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Videocall" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "New Message" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Settings" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user2,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Ann Watkinson" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "annwatkinso@gmail.com" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DropdownToggle,
                      {
                        tag: "a",
                        color: "",
                        "data-bs-toggle": "dropdown",
                        className: "option-dots",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Call" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Videocall" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "New Message" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Settings" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user7,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Marse Walter" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "marsewalter@gmail.com" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DropdownToggle,
                      {
                        tag: "a",
                        color: "",
                        "data-bs-toggle": "dropdown",
                        className: "option-dots",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Call" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Videocall" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "New Message" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Settings" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lv-avatar float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user3,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Jeremy Robbins" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "jeremyrobbins@gmail.com" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DropdownToggle,
                      {
                        "data-bs-toggle": "dropdown",
                        className: "option-dots",
                        color: "",
                        tag: "a",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Call" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Videocall" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "New Message" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Settings" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lv-avatar float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user9,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Reginald Horace" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "reginaldhorace@gmail.com" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DropdownToggle,
                      {
                        tag: "a",
                        color: "",
                        "data-bs-toggle": "dropdown",
                        className: "option-dots",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Call" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Videocall" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "New Message" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Settings" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user6,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Shark Henry" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "sharkhenry@gmail.com" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DropdownToggle,
                      {
                        tag: "a",
                        color: "",
                        "data-bs-toggle": "dropdown",
                        className: "option-dots",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Call" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Videocall" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "New Message" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Settings" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user7,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "Paul Van Dack" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "paulvandack@gmail.com" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DropdownToggle,
                      {
                        tag: "a",
                        color: "",
                        "data-bs-toggle": "dropdown",
                        className: "option-dots",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Call" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Videocall" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "New Message" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Settings" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: " media p-4 border-top mt-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lv-avatar float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: user5,
                      alt: "",
                      className: "avatar avatar-md brround"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-group-item-heading text-default font-weight-semibold", children: "James Anderson" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "list-group-item-text text-muted", children: "jamesanderson@gmail.com" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DropdownToggle,
                      {
                        tag: "a",
                        color: "",
                        "data-bs-toggle": "dropdown",
                        className: "option-dots",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Call" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Videocall" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "New Message" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Settings" })
                    ] })
                  ] }) })
                ] })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ms-body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-header clearfix", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", id: "ms-menu-trigger", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bars" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "float-start hidden-xs d-flex ms-6 chat-user", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user16,
                alt: "",
                className: "avatar avatar-md brround me-2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "align-items-center mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Jhon Thomson" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "float-end actions align-items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "text-default", "data-bs-toggle": "tooltip", id: "Call", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                        d: "M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.07 7.57C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5c.07.89.22 1.76.46 2.59L5.79 8.8z" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { palcement: "top", target: "Call", children: "Call" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { "data-bs-toggle": "tooltip", to: "#", id: "Archive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                        d: "M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { palcement: "top", target: "Archive", children: "Archive" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { "data-bs-toggle": "tooltip", to: "#", id: "Trash", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon",
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
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { palcement: "top", target: "Trash", children: "Trash" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { "data-bs-toggle": "tooltip", to: "#", id: "View", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                        d: "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { palcement: "top", target: "View", children: "View Info" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { tag: "li", className: "dropdown", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DropdownToggle,
                {
                  color: "",
                  tag: "a",
                  "data-bs-toggle": "dropdown",
                  className: "option-dots",
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Refresh" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Message Settings" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chat-body-style", id: "ChatBody", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SimpleBar, { style: { height: 500 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "message-feed media mt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user16,
                alt: "",
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mf-content", children: "Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: "mf-date", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-clock-o" }),
                " 20/05/2020 at 09:00"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "message-feed right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-end ps-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user5,
                alt: "",
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mf-content", children: "Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: "mf-date", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-clock-o" }),
                " 20/05/2020 at 09:30"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "message-feed media", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user16,
                alt: "",
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mf-content", children: "Etiam ex arcumentum" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: "mf-date", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-clock-o" }),
                " 20/05/2020 at 09:33"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "message-feed right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-end ps-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user5,
                alt: "",
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mf-content", children: "Etiam nec facilisis lacus. Nulla imperdiet augue ullamcorper dui ullamcorper, eu laoreet sem consectetur. Aenean et ligula risus. Praesent sed posuere sem. Cum sociis natoque penatibus et magnis dis parturient montes," }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: "mf-date", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-clock-o" }),
                " 20/05/2020 at 10:10"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "message-feed media", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start pe-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user16,
                alt: "",
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mf-content", children: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ac tortor ut elit sodales varius. Mauris id ipsum id mauris malesuada tincidunt. Vestibulum elit massa, pulvinar at sapien sed, luctus vestibulum eros." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: "mf-date", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-clock-o" }),
                " 20/05/2020 at 10:24"
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msb-reply", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { placeholder: "What's on your mind..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                    d: "M4 8.25l7.51 1-7.5-3.22zm.01 9.72l7.5-3.22-7.51 1z",
                    opacity: ".3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z" })
              ]
            }
          ) })
        ] })
      ] })
    ] }) }) }) })
  ] });
};
Chat.propTypes = {};
Chat.defaultProps = {};
export {
  Chat as default
};

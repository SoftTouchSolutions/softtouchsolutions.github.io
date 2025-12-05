import { j as jsxRuntimeExports, r as reactExports } from "./mui-BeFIxXnL.js";
import { s as PageHeaderstyle, R as Row, C as Col, g as Card, h as CardBody, b as Link, c as DropdownToggle, D as DropdownMenu, v as Modal, w as ModalHeader, x as ModalBody, I as Input, B as Button } from "./index-PSM4fvJQ.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-D9bvUbQw.js";
import { C as CardFooter } from "./CardFooter-DmrFf5V7.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-BYIL4rnJ.js";
import { u as user1 } from "./1-BUa3VTVx.js";
import { u as user2 } from "./2-CZG5-XEi.js";
import { u as user3 } from "./3-DewQfFKi.js";
import { u as user4 } from "./4-CiCF6POl.js";
import { u as user5 } from "./5-Bbe9oaSY.js";
import { u as user6 } from "./6-DKyKs-cB.js";
import { u as user9 } from "./9-B-t1XTQx.js";
import { u as user10 } from "./10-DJ-GFekV.js";
import { u as user11 } from "./11-D9JwV_OQ.js";
import { u as user12 } from "./12-Rb6Kq9Uc.js";
import { u as user16 } from "./16-Cuc8by-s.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./TooltipPopoverWrapper-CcGnuSHT.js";
const Popdata = [
  {
    call: "call",
    video: "vedio",
    img: user1,
    name: "Shamika Griffith",
    email: "shamikagriffith@gmail.com"
  },
  {
    call: "call1",
    video: "vedio1",
    img: user2,
    name: "Margarette Wycoff",
    email: "margarettewycoff@gmail.com"
  },
  {
    call: "call2",
    video: "vedio2",
    img: user3,
    name: "Myrta Powe",
    email: "myrtapower@gmail.com"
  },
  {
    call: "call3",
    video: "vedio3",
    img: user4,
    name: "Consuelo Valenzuela",
    email: "consuelovalenzuela@gmail.com"
  },
  {
    call: "call4",
    video: "vedio4",
    img: user5,
    name: " Carolyne Wirtz",
    email: "carolynewirtz@gmail.com"
  },
  {
    call: "call5",
    video: "vedio5",
    img: user6,
    name: "Archie Kesler",
    email: "archiekesler@gmail.com"
  },
  {
    call: "call6",
    video: "vedio6",
    img: user9,
    name: "Elizabeth Loux",
    email: "elizabethloux@gmail.com"
  },
  {
    call: "call7",
    video: "vedio7",
    img: user10,
    name: "Kathaleen Roysden",
    email: "kathaleenroysden@gmail.com"
  },
  {
    call: "call8",
    video: "vedio8",
    img: user11,
    name: "Raisa Ladwig",
    email: "raisaladwig@gmail.com"
  },
  {
    call: "call9",
    video: "vedio9",
    img: user12,
    name: "Veronica Kimer",
    email: "veronicakimer@gmail.com"
  }
];
const Chat03 = () => {
  function FormModal(args) {
    const [modal, setModal] = reactExports.useState(false);
    const toggle = () => setModal(!modal);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "option-dots new-list2", onClick: toggle, color: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                d: "M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",
                opacity: ".3"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { isOpen: modal, toggle, ...args, className: "border-0 modal-dialog-right chatbox", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card overflow-hidden mb-0 border-0 chat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalHeader, { toggle, className: "action-header flex-fill", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "float-start hidden-xs d-flex ms-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont me-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user16,
                className: "rounded-circle user_img avatar avatar-md",
                alt: "img"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "align-items-center mt-2 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-0", children: "John Thomson" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot-label bg-success" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-3 fs-12", children: "online" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "ah-actions actions align-items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "call-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "d-done d-md-block phone-button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "video-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "d-done d-md-block phone-button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "svg-icon",
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 8h10v8H5z", opacity: ".3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z" })
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { tag: "li", className: "dropdown", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DropdownToggle,
                {
                  color: "",
                  "data-toggle": "dropdown",
                  tag: "a",
                  "aria-expanded": "true",
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { style: { margin: "0px" }, className: "", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-user-circle me-2" }),
                  " View profile"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-users me-2" }),
                  " Add to close friends"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-plus me-2" }),
                  " Add to group"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-ban me-2" }),
                  " Block"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "#",
                className: "",
                onClick: toggle,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    className: "svg-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
                    ]
                  }
                ) })
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { className: "card-body msg_card_body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chat-box-single-line", children: /* @__PURE__ */ jsxRuntimeExports.jsx("abbr", { className: "timestamp", children: "February 1st, 2019" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user9,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer", children: [
              "Hi, how are you Jenna Side?",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time", children: "8:40 AM, Today" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-end ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer_send", children: [
              "Hi Connor Paige i am good tnx how about you?",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time_send", children: "8:55 AM, Today" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user16,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-start ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user9,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer", children: [
              "I am good too, thank you for your chat template",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time", children: "9:00 AM, Today" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-end ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer_send", children: [
              "You welcome Connor Paige",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time_send", children: "9:05 AM, Today" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user16,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-start ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user9,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer", children: [
              "Yo, Can you update Views?",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time", children: "9:07 AM, Today" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-end mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer_send", children: [
              "But I must explain to you how all this mistaken born and I will give",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time_send", children: "9:10 AM, Today" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user16,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-start ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user9,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer", children: [
              "Yo, Can you update Views?",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time", children: "9:07 AM, Today" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-end mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer_send", children: [
              "But I must explain to you how all this mistaken born and I will give",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time_send", children: "9:10 AM, Today" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user16,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-start ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user9,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer", children: [
              "Yo, Can you update Views?",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time", children: "9:07 AM, Today" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-end mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer_send", children: [
              "But I must explain to you how all this mistaken born and I will give",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time_send", children: "9:10 AM, Today" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user16,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "img_cont_msg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user9,
                className: "rounded-circle user_img_msg",
                alt: "img"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "msg_cotainer", children: [
              "Okay Bye, text you later..",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "msg_time", children: "9:12 AM, Today" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "msb-reply-button ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              className: "form-control  bg-white",
              placeholder: "Typing...."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              color: "",
              type: "button",
              className: "btn btn-primary ",
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
                        d: "M4 8.25l7.51 1-7.5-3.22zm.01 9.72l7.5-3.22-7.51 1z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z" })
                  ]
                }
              )
            }
          ) })
        ] }) }) })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "Pop up Chat", home: "Home", Pages: "Apps", elements: "Chat", name: "Pop up Chat" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: Popdata.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chat-widget-header d-flex p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-weight-bold d-flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            className: "avatat avatar-md brround me-2",
            src: list.img,
            alt: "img"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 d-none d-sm-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-weight-semibold mb-0", children: list.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: list.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormModal, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            className: "option-dots new-list2",
            to: "#",
            id: list.call,
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
                      d: "M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z",
                      opacity: ".3"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.07 7.57C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5c.07.89.22 1.76.46 2.59L5.79 8.8z" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          UncontrolledTooltip,
          {
            placement: "top",
            target: list.call,
            children: "call"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            className: "option-dots new-list2",
            to: "#",
            id: list.video,
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 8h10v8H5z", opacity: ".3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          UncontrolledTooltip,
          {
            placement: "top",
            target: list.video,
            children: "Video call"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DropdownToggle,
            {
              color: "",
              className: "option-dots new-list2",
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu tx-13 dropdown-menu-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { e: "dropdown-item", href: "#", children: "Assigned to" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Mark As Unread" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Mark As Important" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Add to Tasks" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Add Star" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Move to" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Mute" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Move to Trash" })
          ] })
        ] })
      ] }) })
    ] }) }) }) }, index)) }) }) })
  ] });
};
Chat03.propTypes = {};
Chat03.defaultProps = {};
export {
  Chat03 as default
};

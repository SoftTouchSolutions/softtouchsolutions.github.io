import { j as jsxRuntimeExports, r as reactExports } from "./mui-6YGer9Nu.js";
import { v as PageHeaderstyle, R as Row, C as Col, g as Card, h as CardBody, T as Table, L as Label, I as Input, r as Progress, B as Button, w as Modal, x as ModalHeader, y as ModalBody, F as Form, z as ModalFooter } from "./index-DRovfVAv.js";
import { u as user2 } from "./2-C7nMX_t4.js";
import { u as user1 } from "./1-D9D-sDJ2.js";
import { u as user3 } from "./3-sVDGTRrN.js";
import { u as user4 } from "./4-B2cp7gEW.js";
import { u as user5 } from "./5-vtpEo8ki.js";
import { u as user6 } from "./6-BnLqC6y1.js";
import { u as user7 } from "./7-DPYO_OwL.js";
import { u as user8 } from "./8-BqL85zok.js";
import { u as user9 } from "./9-uUt78-1N.js";
import { u as user10 } from "./10-DvLRbf8W.js";
import { u as user11 } from "./11-DOVWzwhr.js";
import { u as user12 } from "./12-DCQ8KYQr.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const userdata = [
  {
    photo: user1,
    name: "Nam Guy",
    work: "web designer",
    join: "09 Dec 2017",
    progress: "30",
    num: "30%"
  },
  {
    photo: user2,
    name: "Tracy Lindahl",
    work: "web developer",
    join: "27 Jan 2018",
    progress: "82",
    num: "82%"
  },
  {
    photo: user3,
    name: "Breana Millis",
    work: "Php developer",
    join: "09 Dec 2017",
    progress: "68",
    num: "68%"
  },
  {
    photo: user4,
    name: "Antwan Tramel",
    work: "Hr Manager",
    join: "20 Jan 2018",
    progress: "78",
    num: "78%"
  },
  {
    photo: user5,
    name: "Geraldine Arpin",
    work: "Recriuter",
    join: "13 Jan 2018",
    progress: "45",
    num: "45%"
  },
  {
    photo: user6,
    name: "Clement Niehaus",
    work: "Ceo",
    join: "25 Jan 2018",
    progress: "60",
    num: "60%"
  },
  {
    photo: user7,
    name: "Melinda Mayers",
    work: "Director",
    join: "12 Jan 2018",
    progress: "55",
    num: "55%"
  },
  {
    photo: user8,
    name: "Willodean Monson",
    work: "web designer",
    join: "27 Jan 2018",
    progress: "45",
    num: "45%"
  },
  {
    photo: user9,
    name: "Brenton Moncada",
    work: "web developer",
    join: "12 Dec 2017",
    progress: "40",
    num: "40%"
  },
  {
    photo: user10,
    name: "Cyndy Kirschbaum",
    work: "web developer",
    join: "10 Dec 2017",
    progress: "80",
    num: "80%"
  },
  {
    photo: user11,
    name: "Renna Spino",
    work: "Hr Manager",
    join: "03 Dec 2017",
    progress: "70",
    num: "70%"
  },
  {
    photo: user12,
    name: "Renna Spino",
    work: "web developer",
    join: "09 Dec 2017",
    progress: "65",
    num: "65%"
  }
];
const UserList01 = () => {
  function USerModal(args) {
    const [modal, setModal] = reactExports.useState(false);
    const toggle = () => setModal(!modal);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "",
          className: "btn btn-sm btn-white btn-svg edit-btn",
          type: "button",
          onClick: toggle,
          children: "Edit"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, ...args, size: "lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Create User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "", noValidate: true, children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "New Password" }),
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
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: " d-flex justify-content-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", type: "#", onClick: toggle, children: "Save Changes" }) }) }) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "User List", home: "Home", Pages: "Apps", elements: "User List", name: "User List 01" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "flex-lg-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "flex-lg-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "e-panel ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "e-table", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive table-lg mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Table,
      {
        className: "table table-bordered border-top text-nowrap",
        id: "example1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "align-top border-bottom-0 wd-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-bottom-0 w-20", children: "User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-bottom-0 w-15", children: "Date of joining" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-bottom-0 w-30", children: "Performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-bottom-0 w-10", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: userdata.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "avatar brround avatar-md d-block",
                  style: {
                    backgroundImage: `url(${list.photo})`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ms-3 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0 font-weight-bold", children: list.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "", children: list.work })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: list.join }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-nowrap align-middle", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-2 ms-4 font-weight-bold", children: list.num }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Progress,
                {
                  className: "progress-sm mb-0 mt-1",
                  color: "primary",
                  value: list.progress
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-group align-top", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(USerModal, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-sm btn-white btn-svg",
                  type: "button",
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
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 9h8v10H8z", opacity: ".3" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" })
                      ]
                    }
                  )
                }
              )
            ] }) })
          ] }, index)) })
        ]
      }
    ) }) }) }) }) }) }) }) })
  ] });
};
UserList01.propTypes = {};
UserList01.defaultProps = {};
export {
  UserList01 as default
};

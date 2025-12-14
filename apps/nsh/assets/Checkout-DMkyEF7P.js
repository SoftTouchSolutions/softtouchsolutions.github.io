import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-CaNXbm0e.js";
import { v as PageHeaderstyle, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, r as Progress, i as classnames, F as Form, E as FormGroup, L as Label, I as Input, B as Button, b as Link } from "./index-DRovfVAv.js";
import { N as Nav } from "./Nav-CVKaW-zk.js";
import { N as NavItem } from "./NavItem-DkHc0SNR.js";
import { N as NavLink } from "./NavLink-D_6FymOo.js";
import { C as CardTitle } from "./CardTitle-Bk04aMpl.js";
import { T as TabContent, a as TabPane } from "./TabPane-VbW0PGu-.js";
import { p as product2 } from "./2-D-V5ih7N.js";
import { p as product5 } from "./5-Bf8W3P_a.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Checkout = () => {
  const Countryoptions = [
    { value: "Brazil", label: "Brazil" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Germany", label: "Germany" },
    { value: "Poland", label: "Poland" }
  ];
  const [countryOption, setCountryOption] = reactExports.useState(null);
  const [activeTab, setactiveTab] = reactExports.useState(1);
  const [progressbarvalue, setprogressbarvalue] = reactExports.useState(0);
  const [passedSteps, setPassedSteps] = reactExports.useState([1]);
  function toggleTab(tab, value) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];
      if (tab >= 1 && tab <= 6) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
    setprogressbarvalue(value);
  }
  const [Tab1, setTab1] = reactExports.useState("tab1");
  const style1 = (tab) => {
    if (Tab1 !== tab) {
      setTab1(tab);
    }
  };
  const [num, setNumber] = reactExports.useState(0);
  const [num1, setNumber1] = reactExports.useState(0);
  const Increment = () => {
    setNumber(num + 1);
  };
  const Decrement = () => {
    if (num === 0) {
      return false;
    }
    setNumber(num - 1);
  };
  const Increment1 = () => {
    setNumber1(num1 + 1);
  };
  const Decrement1 = () => {
    if (num1 === 0) {
      return false;
    }
    setNumber1(num1 - 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "Checkout", home: "Home", Pages: "Pages", elements: "E-commerce", name: "Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Checkout" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xxl: "6", className: "mx-auto mt-4 ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "p-0 p-sm-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progress-nav w-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              value: progressbarvalue,
              style: { height: "4px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Nav,
            {
              className: "nav-pills progress-bar-tab custom-nav",
              role: "tablist",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "wd25p", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NavLink,
                  {
                    to: "#",
                    className: classnames({
                      active: activeTab === 1,
                      done: activeTab <= 6 && activeTab >= 0
                    }),
                    onClick: () => {
                      toggleTab(1, 0);
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "number", children: "1" }) })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "wd25p", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NavLink,
                  {
                    to: "#",
                    className: classnames({
                      active: activeTab === 2,
                      done: activeTab <= 6 && activeTab > 1
                    }),
                    onClick: () => {
                      toggleTab(2, 25);
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "number", children: "2" }) })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "wd25p", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NavLink,
                  {
                    to: "#",
                    className: classnames({
                      active: activeTab === 3,
                      done: activeTab <= 6 && activeTab > 2
                    }),
                    onClick: () => {
                      toggleTab(3, 50);
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "number", children: "3" }) })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "wd25p", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NavLink,
                  {
                    to: "#",
                    className: classnames({
                      active: activeTab === 4,
                      done: activeTab <= 6 && activeTab > 3
                    }),
                    onClick: () => {
                      toggleTab(4, 75);
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "number", children: "4" }) })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "wd25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NavLink,
                  {
                    to: "#",
                    className: classnames({
                      active: activeTab === 5,
                      done: activeTab <= 6 && activeTab > 4
                    }),
                    onClick: () => {
                      toggleTab(5, 100);
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "number", children: "5" }) })
                  }
                ) })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "px-0 p-sm-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { activeTab, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Signin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-start mb-2", children: "Signin to Your Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-muted tx-13 ms-0 text-start", children: "Signin to create, discover and connect with the global community" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "form-group text-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    className: "form-control",
                    placeholder: "Enter your email",
                    type: "text"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "form-group text-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    className: "form-control",
                    placeholder: "Enter your password",
                    type: "password"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn ripple btn-primary btn-block",
                  children: "Sign In"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-start gap-3 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  style: { background: "#949eb7", color: "#fff" },
                  onClick: () => {
                    toggleTab(activeTab - 1, 0);
                  },
                  children: "Previous"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  className: "btn btn-primary ms-auto",
                  onClick: () => {
                    toggleTab(activeTab + 1, 25);
                  },
                  children: "Next"
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Billing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "needs-validation", noValidate: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-start mb-2", children: "Billing Information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-muted tx-13 ms-0 text-start", children: "Lorem Ipsum has been the industry's standard dummy text ever since" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "6", className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "firstName", children: "First name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "text",
                      className: "form-control",
                      id: "firstName",
                      placeholder: "",
                      defaultValue: "",
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: "Valid first name is required." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "6", className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "lastName", children: "Last name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "text",
                      className: "form-control",
                      id: "lastName",
                      placeholder: "",
                      defaultValue: "",
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: "Valid last name is required." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "address", children: "Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "text",
                    className: "form-control",
                    id: "address",
                    placeholder: "1234 Main St",
                    required: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: "Please enter your shipping address." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "address2", children: [
                  "Address 2",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "(Optional)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "text",
                    className: "form-control",
                    id: "address2",
                    placeholder: "Apartment or suite"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "mobile", children: "Mobile Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "text",
                    className: "form-control",
                    id: "mobile"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "5", className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Country" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StateManagedSelect$1,
                    {
                      defaultValue: countryOption,
                      onChange: setCountryOption,
                      options: Countryoptions,
                      placeholder: "Brazil",
                      classNamePrefix: "Search"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: "Please select a valid country." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "4", className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "State" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StateManagedSelect$1,
                    {
                      defaultValue: countryOption,
                      onChange: setCountryOption,
                      options: Countryoptions,
                      placeholder: "Poland",
                      classNamePrefix: "Search"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: "Please provide a valid state." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "3", className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "zip", children: "Zip" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "text",
                      className: "form-control",
                      id: "zip",
                      placeholder: "",
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: "Zip code required." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  color: "",
                  className: "btn btn-primary btn-block",
                  type: "submit",
                  children: [
                    " ",
                    "Checkout"
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-start gap-3 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  style: { background: "#949eb7", color: "#fff" },
                  onClick: () => {
                    toggleTab(activeTab - 1, 0);
                  },
                  children: "Previous"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  className: "btn btn-primary ms-auto",
                  onClick: () => {
                    toggleTab(activeTab + 1, 25);
                  },
                  children: "Next"
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-start mb-2", children: "Your Order" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-muted tx-13 ms-0 text-start", children: "Lorem Ipsum has been the industry's standard dummy text ever since" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "product", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left mb-2", children: [
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "#", className: "thumb", children: [
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: product2,
                          alt: "",
                          className: "br-5"
                        }
                      ),
                      " "
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "purchase", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { children: [
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: "Flowerpot" }),
                        " "
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex flex-wrap  mt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 product-title tx-12", children: "Quantity:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "handle-counter ms-2",
                            id: "handleCounter1",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Button,
                                {
                                  color: "",
                                  className: "counter-minus btn btn-outline-light border",
                                  onClick: Decrement,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-minus" })
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  type: "text",
                                  defaultValue: "2",
                                  className: "form-control qty",
                                  children: num
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Button,
                                {
                                  color: "",
                                  className: "counter-plus btn btn-outline-light border",
                                  onClick: Increment,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-plus" })
                                }
                              )
                            ]
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "price tx-20", children: "$290" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left mb-2", children: [
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "#", className: "thumb", children: [
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: product5,
                          alt: "",
                          className: "br-5"
                        }
                      ),
                      " "
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "purchase", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { children: [
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: "white chair" }),
                        " "
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex flex-wrap mt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 product-title tx-12", children: "Quantity:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "handle-counter ms-2",
                            id: "handleCounter2",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Button,
                                {
                                  color: "",
                                  className: "counter-minus btn btn-outline-light border",
                                  onClick: Decrement1,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-minus" })
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  type: "text",
                                  defaultValue: "2",
                                  className: "form-control qty",
                                  children: num1
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Button,
                                {
                                  color: "",
                                  className: "counter-plus btn btn-outline-light border",
                                  onClick: Increment1,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-plus" })
                                }
                              )
                            ]
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "price tx-20", children: "$124" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "checkout", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "subtotal", children: [
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "heading", children: "Subtotal" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "total tx-20 font-weight-bold", children: "$364" }),
                " "
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-start gap-3 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  style: { background: "#949eb7", color: "#fff" },
                  onClick: () => {
                    toggleTab(activeTab - 1, 0);
                  },
                  children: "Previous"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  className: "btn btn-primary ms-auto",
                  onClick: () => {
                    toggleTab(activeTab + 1, 25);
                  },
                  children: "Next"
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Payments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-start mb-2", children: "Payments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-muted tx-13 ms-0 text-start", children: "Lorem Ipsum has been the industry's standard dummy text ever since" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-pay", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "tabs-menu nav", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    NavLink,
                    {
                      className: classnames({ active: Tab1 === "tab1" }),
                      onClick: () => {
                        style1("tab1");
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-credit-card" }),
                        " Credit Card"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    NavLink,
                    {
                      className: classnames({ active: Tab1 === "tab2" }),
                      onClick: () => {
                        style1("tab2");
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-paypal" }),
                        " Paypal"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    NavLink,
                    {
                      className: classnames({ active: Tab1 === "tab3" }),
                      onClick: () => {
                        style1("tab3");
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-university" }),
                        " Bank Transfer"
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body tabs-menu-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { className: "tab-content", activeTab: Tab1, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    TabPane,
                    {
                      className: "tab-pane",
                      tabId: "tab1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "text-danger py-3 br-3 mb-4",
                            role: "alert",
                            children: "Please Enter Valid Details"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "CardHolder Name" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "text",
                              className: "form-control",
                              placeholder: "First Name"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Card number" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                type: "text",
                                className: "form-control",
                                placeholder: "Search for..."
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Button,
                              {
                                color: "",
                                className: "btn btn-primary box-shadow-0",
                                type: "button",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cc-visa" }),
                                  "  ",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cc-amex" }),
                                  "  ",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cc-mastercard" })
                                ]
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Expiration" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Input,
                                {
                                  type: "number",
                                  className: "form-control",
                                  placeholder: "MM",
                                  name: "Month"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Input,
                                {
                                  type: "number",
                                  className: "form-control",
                                  placeholder: "YY",
                                  name: "Year"
                                }
                              )
                            ] })
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
                              "CVV",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-question-circle" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                type: "number",
                                className: "form-control",
                                required: true
                              }
                            )
                          ] }) })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "Paypal is easiest way to pay online" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "#", className: "btn btn-primary", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-paypal" }),
                      " Log in my Paypal"
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                      " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                      " "
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "Bank account details" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "card-text", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "BANK: " }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: " THE UNION BANK 0456" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "card-text", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "Account number: " }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: " 67542897653214" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "card-text", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "IBAN: " }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: "543218769" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                      " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                      " "
                    ] })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-start gap-3 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  style: { background: "#949eb7", color: "#fff" },
                  onClick: () => {
                    toggleTab(activeTab - 1, 0);
                  },
                  children: "Previous"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  className: "btn btn-primary ms-auto",
                  onClick: () => {
                    toggleTab(activeTab + 1, 25);
                  },
                  children: "Next"
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Finished" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-center mb-4", children: "Your order Confirmed!" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "w-100h h-100h mx-auto justify-content-center mb-3 text-center",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 130.2 130.2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "circle",
                      {
                        className: "path circle",
                        fill: "none",
                        stroke: "#22c03c",
                        strokeWidth: "6",
                        strokeMiterlimit: "10",
                        cx: "65.1",
                        cy: "65.1",
                        r: "62.1"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "polyline",
                      {
                        className: "path check",
                        fill: "none",
                        stroke: "#22c03c",
                        strokeWidth: "6",
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        points: "100.2,40.2 51.5,88.8 29.8,67.5 "
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "success pl-5 pr-5", children: "Order placed successfully. Your order will be dispacted soon. meanwhile you can track your order in my order section." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-start gap-3 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  style: { background: "#949eb7", color: "#fff" },
                  onClick: () => {
                    toggleTab(activeTab - 1, 0);
                  },
                  children: "Previous"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  className: "btn btn-success ms-auto",
                  children: "Order again"
                }
              )
            ] })
          ] }) })
        ] }) })
      ] }) }) })
    ] }) }) })
  ] });
};
Checkout.propTypes = {};
Checkout.defaultProps = {};
export {
  Checkout as default
};

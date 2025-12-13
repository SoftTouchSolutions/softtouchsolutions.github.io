import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { s as PageHeaderstyle, i as classnames, R as Row, C as Col, g as Card, h as CardBody, b as Link } from "./index-BtyINLIY.js";
import { N as Nav } from "./Nav-A6hBcsM-.js";
import { N as NavItem } from "./NavItem-MovbypiN.js";
import { N as NavLink } from "./NavLink-T5jMsap9.js";
import { L as ListGroup, a as ListGroupItem } from "./ListGroupItem-Dy-O-syv.js";
import { T as TabContent, a as TabPane } from "./TabPane-BMa1_zHw.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Pricing03 = () => {
  const [Pricing, setpricing] = reactExports.useState("Year");
  const toggle = (on) => {
    if (Pricing !== on) {
      setpricing(on);
    }
  };
  const [Pricing1, setpricing1] = reactExports.useState("Month1");
  const toggle1 = (on) => {
    if (Pricing1 !== on) {
      setpricing1(on);
    }
  };
  const [Pricing3, setpricing3] = reactExports.useState("Year3");
  const toggle3 = (on) => {
    if (Pricing3 !== on) {
      setpricing3(on);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "Pricing", home: "Home", Pages: "Pages", elements: "Pricing", name: "Pricing 03" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pricing-tabs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pri-tabs-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { tabs: true, className: "nav nav-price", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { style: { cursor: "pointer" }, className: classnames({ active: Pricing === "Month" }), onClick: () => {
          toggle("Month");
        }, children: "Month" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { style: { cursor: "pointer" }, className: classnames({ active: Pricing === "Year" }), onClick: () => {
          toggle("Year");
        }, children: "Year" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { activeTab: Pricing, className: "text-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: "Month", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm pricing-style01", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mg-b-20 mg-lg-b-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3", children: "Free" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "display-4 font-weight-semibold my-4", children: "$0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled leading-loose", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4" }),
                " Ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 30 days"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 1 Gb Storage"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Security Check"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-danger mx-2" }),
                " Private Messages"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-danger mx-2" }),
                " Urgent Ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 24/7 Support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-primary btn-block", children: "Choose plan" }) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mg-b-20 mg-lg-b-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3", children: "Premium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "display-4 font-weight-semibold my-4", children: "$65" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled leading-loose", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "50" }),
                " Ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 60 Days"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 10 Gb Storage"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Security Check"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-danger mx-2" }),
                " Private Messages"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-danger mx-2" }),
                " Urgent ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 24/7 Support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-success btn-block", children: "Choose plan" }) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mg-b-20 mg-sm-b-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3", children: "Enterprise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "display-4 font-weight-semibold my-4", children: "$100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled leading-loose", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "100" }),
                " Ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 180 days"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 25 Gb Storage"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Security Check"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Private Messages"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-danger mx-2" }),
                " Urgent ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 24/7 Support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-primary btn-block", children: "Choose plan" }) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3", children: "Unlimited" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "display-4 font-weight-semibold my-4", children: "$150" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled leading-loose", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Unlimited" }),
                " Ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 365 Days"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 50 Gb Storage"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Security Check"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Private Messages"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Urgent ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 24/7 Support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-primary btn-block", children: "Choose plan" }) })
          ] }) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: "Year", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm pricing-style01", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mg-b-20 mg-lg-b-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3", children: "Free" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "display-4 font-weight-semibold my-4", children: "$0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled leading-loose", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4" }),
                " Ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 30 days"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 1 Gb Storage"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Security Check"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-danger mx-2" }),
                " Private Messages"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-danger mx-2" }),
                " Urgent Ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 24/7 Support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-primary btn-block", children: "Choose plan" }) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mg-b-20 mg-lg-b-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3", children: "Premium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "display-4 font-weight-semibold my-4", children: "$250" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled leading-loose", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "50" }),
                " Ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 60 Days"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 10 Gb Storage"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Security Check"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-danger mx-2" }),
                " Private Messages"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-danger mx-2" }),
                " Urgent ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 24/7 Support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-success btn-block", children: "Choose plan" }) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mg-b-20 mg-sm-b-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3", children: "Enterprise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "display-4 font-weight-semibold my-4", children: "$500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled leading-loose", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "100" }),
                " Ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 180 days"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 25 Gb Storage"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Security Check"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Private Messages"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x text-danger mx-2" }),
                " Urgent ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 24/7 Support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-primary btn-block", children: "Choose plan" }) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3", children: "Unlimited" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "display-4 font-weight-semibold my-4", children: "$1000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled leading-loose", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Unlimited" }),
                " Ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 365 Days"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 50 Gb Storage"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Security Check"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Private Messages"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " Urgent ads"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check text-success mx-2" }),
                " 24/7 Support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-primary btn-block", children: "Choose plan" }) })
          ] }) }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pricing-tabs mt-7 bg-white br-7 px-5 pt-5 pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pri-tabs-heading pri-tabs-heading2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { tabs: true, className: "nav nav-price", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { style: { cursor: "pointer" }, className: classnames({ active: Pricing1 === "Month1" }), onClick: () => {
          toggle1("Month1");
        }, children: "Month" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { style: { cursor: "pointer" }, className: classnames({ active: Pricing1 === "Year1" }), onClick: () => {
          toggle1("Year1");
        }, children: "Year" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { activeTab: Pricing1, className: "text-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: "Month1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "plan-card shadow-none border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-plane plan-icon bg-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-uppercase font-weight-semibold text-primary", children: "Starter Pack" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "plan-price padding-b-15 display-4 mb-0 font-weight-semibold", children: [
                "$19 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted m-l-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "Per Month" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "plan-div-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-features pb-4 mt-4 text-muted padding-t-b-30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2 " }),
                " FreeDomain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2" }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1" }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Money" }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "24/7" }),
                " Support"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-primary mt-4", children: "Sign Up Now" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "plan-card shadow-none border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trophy plan-icon bg-info" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-uppercase font-weight-semibold text-info", children: "Professional Pack" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "plan-price padding-b-15 display-4 mb-0  font-weight-semibold", children: [
                "$29 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted m-l-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "Per Month" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "plan-div-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-features pb-4 mt-4 text-muted padding-t-b-30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3 " }),
                " FreeDomain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "5" }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3" }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Money" }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "24/7" }),
                " Support"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-info mt-4", children: "Sign Up Now" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "plan-card shadow-none border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-umbrella plan-icon bg-secondary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-uppercase font-weight-semibold text-secondary", children: "Enterprise Pack" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "plan-price padding-b-15 display-4 mb-0 font-weight-semibold", children: [
                "$39 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted m-l-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "Per Month" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "plan-div-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-features pb-4 mt-4 text-muted padding-t-b-30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10 " }),
                " FreeDomain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10" }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8" }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Money" }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "24/7" }),
                " Support"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-secondary mt-4", children: "Sign Up Now" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "plan-card shadow-none border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cube plan-icon bg-success" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-uppercase font-weight-semibold text-success", children: "Unlimited Pack" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "plan-price padding-b-15 display-4 mb-0 font-weight-semibold", children: [
                "$49 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted m-l-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "Per Month" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "plan-div-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-features pb-4 mt-4 text-muted padding-t-b-30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "12 " }),
                " FreeDomain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10" }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "6" }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Money" }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "24/7" }),
                " Support"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-success mt-4", children: "Sign Up Now" })
            ] })
          ] }) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: "Year1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "plan-card shadow-none border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-plane plan-icon bg-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-uppercase font-weight-semibold text-primary", children: "Starter Pack" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "plan-price padding-b-15 display-4 mb-0 font-weight-semibold", children: [
                "$119 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted m-l-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "Per Year" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "plan-div-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-features pb-4 mt-4 text-muted padding-t-b-30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2 " }),
                " FreeDomain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2" }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1" }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Money" }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "24/7" }),
                " Support"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-primary mt-4", children: "Sign Up Now" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "plan-card shadow-none border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trophy plan-icon bg-info" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-uppercase font-weight-semibold text-info", children: "Professional Pack" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "plan-price padding-b-15 display-4 mb-0  font-weight-semibold", children: [
                "$129 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted m-l-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "Per Year" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "plan-div-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-features pb-4 mt-4 text-muted padding-t-b-30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3 " }),
                " FreeDomain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "5" }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3" }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Money" }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "24/7" }),
                " Support"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-info mt-4", children: "Sign Up Now" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "plan-card shadow-none border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-umbrella plan-icon bg-secondary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-uppercase font-weight-semibold text-secondary", children: "Enterprise Pack" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "plan-price padding-b-15 display-4 mb-0 font-weight-semibold", children: [
                "$139 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted m-l-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "Per Year" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "plan-div-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-features pb-4 mt-4 text-muted padding-t-b-30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10 " }),
                " FreeDomain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10" }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8" }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Money" }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "24/7" }),
                " Support"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-secondary mt-4", children: "Sign Up Now" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "plan-card shadow-none border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cube plan-icon bg-success" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "text-uppercase font-weight-semibold text-success", children: "Unlimited Pack" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "plan-price padding-b-15 display-4 mb-0 font-weight-semibold", children: [
                "$149 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted m-l-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "Per Year" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "plan-div-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "plan-features pb-4 mt-4 text-muted padding-t-b-30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "12 " }),
                " FreeDomain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10" }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "6" }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Money" }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "24/7" }),
                " Support"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-lg btn-success mt-4", children: "Sign Up Now" })
            ] })
          ] }) }) })
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pricing-tabs mt-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pri-tabs-heading pri-tabs-heading3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { tabs: true, className: "nav nav-price", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { style: { cursor: "pointer" }, className: classnames({ active: Pricing3 === "Week3" }), onClick: () => {
          toggle3("Week3");
        }, children: "Week" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { style: { cursor: "pointer" }, className: classnames({ active: Pricing3 === "Month3" }), onClick: () => {
          toggle3("Month3");
        }, children: "Month" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { style: { cursor: "pointer" }, className: classnames({ active: Pricing3 === "Year3" }), onClick: () => {
          toggle3("Year3");
        }, children: "Year" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { activeTab: Pricing3, className: "text-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: "Week3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "no-xl-gutters pt-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4454c3", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Personal" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$0 /" }),
              " 7 Days"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 1 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-lg btn-primary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4454c3", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Premium" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$15 /" }),
              " 7 Days"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 3 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-lg btn-primary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color active bg-white overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#f72d66", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Corporate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$25 /" }),
              " 7 Days"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 4 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "6 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-lg btn-secondary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4454c3", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Business" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$49 /" }),
              " 7 days"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 5 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-lg btn-primary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: "Month3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "no-xl-gutters pt-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4454c3", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Personal" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$15 /" }),
              " month"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 1 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn  btn-lg btn-primary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4454c3", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Premium" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$25 /" }),
              " month"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 3 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-lg btn-primary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color active bg-white overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#f72d66", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Corporate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$35 /" }),
              " month"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 4 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "6 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-lg btn-secondary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4454c3", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Business" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$99 /" }),
              " month"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 5 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-lg btn-primary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { tabId: "Year3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "no-xl-gutters pt-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4454c3", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Personal" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$115 /" }),
              " Year"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 1 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-lg btn-primary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4454c3", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Premium" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$125 /" }),
              " Year"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 3 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-lg btn-primary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color active bg-white overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#f72d66", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Corporate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$135 /" }),
              " Year"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 4 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "6 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn  btn-lg btn-secondary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", xl: "3", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel price  panel-color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white text-center price-svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4454c3", fillOpacity: "1", d: "M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-title", children: "Business" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lead font-weight-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$199 /" }),
              " Year"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-flush text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 5 Free" }),
                " Domain Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8 " }),
                " One-Click Apps"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 2 " }),
                " Databases"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Money " }),
                " BackGuarntee"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " 24/7" }),
                " support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-footer text-center border-end-0 border-start-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn  btn-lg btn-primary btn-block", to: "#", children: "Purchase Now!" }) })
          ] }) })
        ] }) })
      ] }) })
    ] }) })
  ] });
};
Pricing03.propTypes = {};
Pricing03.defaultProps = {};
export {
  Pricing03 as default
};

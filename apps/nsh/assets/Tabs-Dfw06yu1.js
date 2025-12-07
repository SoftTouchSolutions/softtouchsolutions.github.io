import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, i as classnames } from "./index-CPwjB16p.js";
import { N as Nav } from "./Nav-ngY-M_4b.js";
import { N as NavItem } from "./NavItem-DSOwopdp.js";
import { N as NavLink } from "./NavLink-Dg5YmngC.js";
import { C as CardTitle } from "./CardTitle-Cqv0xue5.js";
import { T as TabContent, a as TabPane } from "./TabPane-CVyflK-u.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Tabs = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
  const elementRef4 = reactExports.useRef();
  const elementRef5 = reactExports.useRef();
  let CopytoClipBoard = (ele) => {
    var _a;
    let data = (_a = ele.current) == null ? void 0 : _a.innerText;
    navigator.clipboard.writeText(data);
    alert("Text copied successfully");
  };
  const [Tab1, setTab1] = reactExports.useState("1");
  const style1 = (tab) => {
    if (Tab1 !== tab) {
      setTab1(tab);
    }
  };
  const [Tab2, setTab2] = reactExports.useState("tab5");
  const style2 = (tab) => {
    if (Tab2 !== tab) {
      setTab2(tab);
    }
  };
  const [Tab3, setTab3] = reactExports.useState("tab11");
  const style3 = (tab) => {
    if (Tab3 !== tab) {
      setTab3(tab);
    }
  };
  const [Tab4, setTab4] = reactExports.useState("tab21");
  const style4 = (tab) => {
    if (Tab4 !== tab) {
      setTab4(tab);
    }
  };
  const [Tab5, setTab5] = reactExports.useState("tab28");
  const style5 = (tab) => {
    if (Tab5 !== tab) {
      setTab5(tab);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Tabs",
        home: "Home",
        name: "Elements",
        fonticonsname: "Tabs"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Tabs style" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel panel-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab-menu-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabs-menu ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav panel-tabs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                className: classnames({ active: Tab1 === "1" }),
                onClick: () => {
                  style1("1");
                },
                children: "Tab 1"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                className: classnames({ active: Tab1 === "2" }),
                onClick: () => {
                  style1("2");
                },
                "data-bs-toggle": "tab",
                children: "Tab 2"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                className: classnames({ active: Tab1 === "3" }),
                onClick: () => {
                  style1("3");
                },
                "data-bs-toggle": "tab",
                children: "Tab 3"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                className: classnames({ active: Tab1 === "4" }),
                onClick: () => {
                  style1("4");
                },
                "data-bs-toggle": "tab",
                children: "Tab 4"
              }
            ) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body tabs-menu-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { activeTab: Tab1, className: "tab-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { tabId: "1", className: "tab-pane", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { tabId: "2", className: "tab-pane", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                " ",
                "default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { tabId: "3", className: "tab-pane", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "over the years, sometimes by accident, sometimes on purpose (injected humour and the like" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { tabId: "4", className: "tab-pane", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et" })
            ] })
          ] }) })
        ] }) }),
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
    <div className="panel panel-primary">
    <div className="tab-menu-heading">
      <div className="tabs-menu ">
        {/* <!-- Tabs --> */}
        <Nav className="nav panel-tabs">
          <NavItem className="">
            <NavLink
              className={classnames({ active: Tab1 === "1" })}
              onClick={() => {
                style1("1");
              }}
            >
              Tab 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab1 === "2" })}
              onClick={() => {
                style1("2");
              }}
              data-bs-toggle="tab"
            >
              Tab 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab1 === "3" })}
              onClick={() => {
                style1("3");
              }}
              data-bs-toggle="tab"
            >
              Tab 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab1 === "4" })}
              onClick={() => {
                style1("4");
              }}
              data-bs-toggle="tab"
            >
              Tab 4
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
    <div className="panel-body tabs-menu-body">
      <TabContent activeTab={Tab1} className="tab-content">
        <TabPane tabId="1" className="tab-pane">
          <p>
            page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many
            web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes
            on purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane tabId="2" className="tab-pane">
          <p>
            {" "}
            default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the
            like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane tabId="3" className="tab-pane">
          <p>
            over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane tabId="4" className="tab-pane">
          <p>
            page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many
            web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes
            on purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
      </TabContent>
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Tabs Style 2" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel panel-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " tab-menu-heading p-0 bg-light", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabs-menu1 ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav panel-tabs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                className: classnames({ active: Tab2 === "tab5" }),
                onClick: () => {
                  style2("tab5");
                },
                "data-bs-toggle": "tab",
                children: "Tab 1"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                className: classnames({ active: Tab2 === "tab6" }),
                onClick: () => {
                  style2("tab6");
                },
                "data-bs-toggle": "tab",
                children: "Tab 2"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                className: classnames({ active: Tab2 === "tab7" }),
                onClick: () => {
                  style2("tab7");
                },
                "data-bs-toggle": "tab",
                children: "Tab 3"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavLink,
              {
                className: classnames({ active: Tab2 === "tab8" }),
                onClick: () => {
                  style2("tab8");
                },
                "data-bs-toggle": "tab",
                children: "Tab 4"
              }
            ) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body tabs-menu-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { activeTab: Tab2, className: "tab-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane ", tabId: "tab6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                " ",
                "default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane ", tabId: "tab7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "over the years, sometimes by accident, sometimes on purpose (injected humour and the like" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane ", tabId: "tab8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et" })
            ] })
          ] }) })
        ] }) }),
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
    <div className="panel panel-primary">
    <div className=" tab-menu-heading p-0 bg-light">
      <div className="tabs-menu1 ">
        {/* <!-- Tabs --> */}
        <Nav className="nav panel-tabs">
          <NavItem className="">
            <NavLink
              className={classnames({ active: Tab2 === "tab5" })}
              onClick={() => {
                style2("tab5");
              }}
              data-bs-toggle="tab"
            >
              Tab 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab2 === "tab6" })}
              onClick={() => {
                style2("tab6");
              }}
              data-bs-toggle="tab"
            >
              Tab 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab2 === "tab7" })}
              onClick={() => {
                style2("tab7");
              }}
              data-bs-toggle="tab"
            >
              Tab 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab2 === "tab8" })}
              onClick={() => {
                style2("tab8");
              }}
              data-bs-toggle="tab"
            >
              Tab 4
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
    <div className="panel-body tabs-menu-body">
      <TabContent activeTab={Tab2} className="tab-content">
        <TabPane className="tab-pane" tabId="tab5">
          <p>
            page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many
            web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes
            on purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane className="tab-pane " tabId="tab6">
          <p>
            {" "}
            default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the
            like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane className="tab-pane " tabId="tab7">
          <p>
            over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane className="tab-pane " tabId="tab8">
          <p>
            page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many
            web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes
            on purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
      </TabContent>
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "tabs-style3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Tab Style3" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel panel-primary tabs-style-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab-menu-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabs-menu ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav panel-tabs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavLink,
              {
                className: classnames({ active: Tab3 === "tab11" }),
                onClick: () => {
                  style3("tab11");
                },
                "data-bs-toggle": "tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-laptop" }),
                  " Tab Style 01"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavLink,
              {
                className: classnames({ active: Tab3 === "tab12" }),
                onClick: () => {
                  style3("tab12");
                },
                "data-bs-toggle": "tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cube" }),
                  " Tab Style 02"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavLink,
              {
                className: classnames({ active: Tab3 === "tab13" }),
                onClick: () => {
                  style3("tab13");
                },
                "data-bs-toggle": "tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cogs" }),
                  " Tab Style 03"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavLink,
              {
                className: classnames({ active: Tab3 === "tab14" }),
                onClick: () => {
                  style3("tab14");
                },
                "data-bs-toggle": "tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-tasks" }),
                  " Tab Style 04"
                ]
              }
            ) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body tabs-menu-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { className: "tab-content", activeTab: Tab3, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
                " "
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                " ",
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
                " "
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab14", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus",
                " "
              ] })
            ] })
          ] }) })
        ] }) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="panel panel-primary tabs-style-3">
    <div className="tab-menu-heading">
      <div className="tabs-menu ">
        {/* <!-- Tabs --> */}
        <Nav className="nav panel-tabs">
          <NavItem>
            <NavLink
              className={classnames({ active: Tab3 === "tab11" })}
              onClick={() => {
                style3("tab11");
              }}
              data-bs-toggle="tab"
            >
              <i className="fa fa-laptop"></i> Tab Style 01
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab3 === "tab12" })}
              onClick={() => {
                style3("tab12");
              }}
              data-bs-toggle="tab"
            >
              <i className="fa fa-cube"></i> Tab Style 02
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab3 === "tab13" })}
              onClick={() => {
                style3("tab13");
              }}
              data-bs-toggle="tab"
            >
              <i className="fa fa-cogs"></i> Tab Style 03
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab3 === "tab14" })}
              onClick={() => {
                style3("tab14");
              }}
              data-bs-toggle="tab"
            >
              <i className="fa fa-tasks"></i> Tab Style 04
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
    <div className="panel-body tabs-menu-body">
      <TabContent className="tab-content" activeTab={Tab3}>
        <TabPane className="tab-pane" tabId="tab11">
          <p>
            At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt
            in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga.
          </p>
          <p className="mb-0">
            Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus.{" "}
          </p>
        </TabPane>
        <TabPane className="tab-pane" tabId="tab12">
          <p>
            {" "}
            Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus.{" "}
          </p>
          <p className="mb-0">
            At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt
            in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga.
          </p>
        </TabPane>
        <TabPane className="tab-pane" tabId="tab13">
          <p>
            Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates
            repudiandae sint et molestiae non recusandae
          </p>
          <p className="mb-0">
            Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus.{" "}
          </p>
        </TabPane>
        <TabPane className="tab-pane" tabId="tab14">
          <p>
            On the other hand, we denounce with righteous
            indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so
            blinded by desire
          </p>
          <p className="mb-0">
            Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis
            dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus{" "}
          </p>
        </TabPane>
      </TabContent>
    </div>
  </div>            
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "tabs-style4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Vertical Tabs" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-lg-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-end-0 br-tl-7 br-bl-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-primary tabs-style-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab-menu-heading border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabs-menu ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav panel-tabs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavLink,
              {
                className: classnames({
                  active: Tab4 === "tab21"
                }),
                onClick: () => {
                  style4("tab21");
                },
                "data-bs-toggle": "tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-laptop" }),
                  " Tab Style 01"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavLink,
              {
                className: classnames({
                  active: Tab4 === "tab22"
                }),
                onClick: () => {
                  style4("tab22");
                },
                "data-bs-toggle": "tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cube" }),
                  " Tab Style 02"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavLink,
              {
                className: classnames({
                  active: Tab4 === "tab23"
                }),
                onClick: () => {
                  style4("tab23");
                },
                "data-bs-toggle": "tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cogs" }),
                  " Tab Style 03"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavLink,
              {
                className: classnames({
                  active: Tab4 === "tab24"
                }),
                onClick: () => {
                  style4("tab24");
                },
                "data-bs-toggle": "tab",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-tasks" }),
                  " Tab Style 04"
                ]
              }
            ) })
          ] }) }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabs-style-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body tabs-menu-body br-tr-7 br-bl-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { className: "tab-content", activeTab: Tab4, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane active", tabId: "tab21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
                " "
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab22", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                " ",
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                " ",
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab23", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
                " "
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab24", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus",
                " "
              ] })
            ] })
          ] }) }) })
        ] }) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="d-lg-flex">
    <div className="border border-end-0 br-tl-7 br-bl-7">
      <div className="panel panel-primary tabs-style-4">
        <div className="tab-menu-heading border-0">
          <div className="tabs-menu ">
            {/* <!-- Tabs --> */}
            <Nav className="nav panel-tabs">
              <NavItem>
                <NavLink
                  className={classnames({
                    active: Tab4 === "tab21",
                  })}
                  onClick={() => {
                    style4("tab21");
                  }}
                  data-bs-toggle="tab"
                >
                  <i className="fa fa-laptop"></i> Tab Style 01
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: Tab4 === "tab22",
                  })}
                  onClick={() => {
                    style4("tab22");
                  }}
                  data-bs-toggle="tab"
                >
                  <i className="fa fa-cube"></i> Tab Style 02
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: Tab4 === "tab23",
                  })}
                  onClick={() => {
                    style4("tab23");
                  }}
                  data-bs-toggle="tab"
                >
                  <i className="fa fa-cogs"></i> Tab Style 03
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: Tab4 === "tab24",
                  })}
                  onClick={() => {
                    style4("tab24");
                  }}
                  data-bs-toggle="tab"
                >
                  <i className="fa fa-tasks"></i> Tab Style 04
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    </div>
    <div className="tabs-style-4">
      <div className="panel-body tabs-menu-body br-tr-7 br-bl-0">
        <TabContent className="tab-content" activeTab={Tab4}>
          <TabPane className="tab-pane active" tabId="tab21">
            <p>
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <p className="mb-0">
              Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.{" "}
            </p>
          </TabPane>
          <TabPane className="tab-pane" tabId="tab22">
            <p>
              {" "}
              Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.{" "}
            </p>
            <p>
              {" "}
              Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.{" "}
            </p>
            <p className="mb-0">
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
          </TabPane>
          <TabPane className="tab-pane" tabId="tab23">
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut
              rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.
            </p>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut
              rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.
            </p>
            <p className="mb-0">
              Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.{" "}
            </p>
          </TabPane>
          <TabPane className="tab-pane" tabId="tab24">
            <p>
              On the other hand, we denounce with righteous
              indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment,
              so blinded by desire quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor
              repellendus.
            </p>
            <p>
              On the other hand, we denounce with righteous
              indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment,
              so blinded by desire quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor
              repellendus.
            </p>
            <p className="mb-0">
              Nam libero tempore, cum soluta nobis est eligendi
              optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et
              aut officiis debitis aut rerum necessitatibus{" "}
            </p>
          </TabPane>
        </TabContent>
      </div>
    </div>
  </div> 
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Tabs Style 5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel panel-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tab_wrapper first_tab", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "tab_list", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavItem,
              {
                className: classnames({ active: Tab5 === "tab28" }),
                onClick: () => {
                  style5("tab28");
                },
                children: "Tab 1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavItem,
              {
                className: classnames({ active: Tab5 === "tab29" }),
                onClick: () => {
                  style5("tab29");
                },
                children: "Tab 2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavItem,
              {
                className: classnames({ active: Tab5 === "tab30" }),
                onClick: () => {
                  style5("tab30");
                },
                children: "Tab 3"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NavItem,
              {
                className: classnames({ active: Tab5 === "tab31" }),
                onClick: () => {
                  style5("tab31");
                },
                children: "Tab 4"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "content_wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { className: "tab-content", activeTab: Tab5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { className: "p-3", tabId: "tab28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { className: "p-3", tabId: "tab29", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { className: "p-3", tabId: "tab30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { className: "p-3", tabId: "tab31", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }) })
          ] }) })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <div className="panel panel-primary">
    <div className="tab_wrapper first_tab">
      <Nav className="tab_list">
        <NavItem
          className={classnames({ active: Tab5 === "tab28" })}
          onClick={() => {
            style5("tab28");
          }}
        >
          Tab 1
        </NavItem>
        <NavItem
          className={classnames({ active: Tab5 === "tab29" })}
          onClick={() => {
            style5("tab29");
          }}
        >
          Tab 2
        </NavItem>
        <NavItem
          className={classnames({ active: Tab5 === "tab30" })}
          onClick={() => {
            style5("tab30");
          }}
        >
          Tab 3
        </NavItem>
        <NavItem
          className={classnames({ active: Tab5 === "tab31" })}
          onClick={() => {
            style5("tab31");
          }}
        >
          Tab 4
        </NavItem>
      </Nav>
      <div className="content_wrapper">
        <TabContent className="tab-content" activeTab={Tab5}>
          <TabPane className="p-3" tabId="tab28">
            <p>
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum
              is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content
              here', making it look like readable English. Many
              desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like) It is a long
              established fact that a reader will be distracted by
              the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has
              a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing
              packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their
              infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </TabPane>
          <TabPane className="p-3" tabId="tab29">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of
              the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in
              45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first
              line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
              comes from a line in section 1.10.32. Contrary to
              popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure
              Latin words, consectetur, from a Lorem Ipsum passage,
              and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de
              Finibus Bonorum et Malorum" (The Extremes of Good and
              Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section
              1.10.32.
            </p>
          </TabPane>
          <TabPane className="p-3" tabId="tab30">
            <p>
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are
              going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence
              structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc. There are many
              variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look
              even slightly believable. If you are going to use a
              passage of Lorem Ipsum, you need to be sure there
              isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses
              a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate
              Lorem Ipsum which looks reasonable. The generated
              Lorem Ipsum is therefore always free from repetition,
              injected humour, or non-characteristic words etc.
            </p>
          </TabPane>
          <TabPane className="p-3" tabId="tab31">
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </TabPane>
        </TabContent>
      </div>
    </div>
  </div>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] })
    ] }) })
  ] });
};
Tabs.propTypes = {};
Tabs.defaultProps = {};
export {
  Tabs as default
};

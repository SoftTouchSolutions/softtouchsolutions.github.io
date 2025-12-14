import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, p as Alert, B as Button, b as Link } from "./index-zbnKGqDS.js";
import { N as Nav } from "./Nav-B-OeKn5F.js";
import { N as NavItem } from "./NavItem-CTWoskJp.js";
import { N as NavLink } from "./NavLink-DZy2BxGM.js";
import { C as CardTitle } from "./CardTitle-5XhNrNGW.js";
import { U as UncontrolledPopover, P as PopoverHeader, a as PopoverBody } from "./PopoverBody-Dc3GGE-B.js";
import { T as TabContent, a as TabPane } from "./TabPane-DQRhxVOr.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./TooltipPopoverWrapper-CkVa6Jzi.js";
const initialList = [
  {
    id: "1",
    color: "success",
    text: "alert—At vero eos et accusamus praesentium!",
    show: " Success"
  },
  {
    id: "2",
    color: "info",
    text: "alert—At vero eos et accusamus praesentium!",
    show: " Info"
  },
  {
    id: "3",
    color: "warning",
    text: "alert—At vero eos et accusamus praesentium!",
    show: "Warning"
  },
  {
    id: "4",
    color: "danger",
    text: "alert—At vero eos et accusamus praesentium!",
    show: "Danger"
  }
];
const LinkData = [
  {
    id: "21",
    class: "alert alert-success",
    color: "success",
    text: "You successfully read",
    show: "Well done!",
    linktext: " this important alert message.",
    text2: ""
  },
  {
    id: "22",
    class: "alert alert-info",
    color: "info",
    text: "This",
    show: "Heads up!",
    linktext: " alert needs your attention,",
    text2: " but it's not super important."
  },
  {
    id: "23",
    class: "alert alert-warning",
    color: "warning",
    text: "Better check yourself, you're",
    show: "Warning! ",
    linktext: " not looking too good.",
    text2: ""
  },
  {
    id: "24",
    class: "alert alert-danger",
    color: "danger",
    text: "",
    show: "Oh snap!",
    linktext: " Change a few things up",
    text2: " and try submitting again."
  }
];
const AlertsStyle = [
  {
    id: "11",
    color: "success",
    class: "alert alert-success",
    show: "Success Message",
    text: "You successfully read this important alert message."
  },
  {
    id: "12",
    color: "info",
    class: "alert alert-info",
    show: "Info Message",
    text: "This alert needs your attention, but it's not super important."
  },
  {
    id: "13",
    color: "warning",
    class: "alert alert-warning",
    show: "Warning Message",
    text: "Best check yo self, you're not looking too good."
  },
  {
    id: "14",
    color: "danger",
    class: "alert alert-danger",
    show: "Danger Message",
    text: "Change a few things up and try submitting again."
  }
];
const Alerticon = [
  {
    id: "31",
    color: "success",
    class: "alert alert-success",
    icon: "fa fa-check-circle-o me-2",
    text: " Well done! You successfully read this important alert message."
  },
  {
    id: "32",
    color: "info",
    class: "alert alert-info",
    icon: "fa fa-bell-o me-2",
    text: "Heads up! This alert needs your attention, but it's not super important."
  },
  {
    id: "33",
    color: "warning",
    class: "alert alert-warning",
    icon: "fa fa-exclamation me-2",
    text: "Warning! Better check yourself, you're not looking too good."
  },
  {
    id: "34",
    color: "danger",
    class: "alert alert-danger",
    icon: "fa fa-frown-o me-2",
    text: "Oh snap!Change a few things up and try submitting again."
  }
];
const Alerts = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
  const elementRef4 = reactExports.useRef();
  const elementRef5 = reactExports.useRef();
  const elementRef6 = reactExports.useRef();
  let CopytoClipBoard = (ele) => {
    var _a;
    let data = (_a = ele.current) == null ? void 0 : _a.innerText;
    navigator.clipboard.writeText(data);
    alert("Text copied successfully");
  };
  const [Tab1, setTab1] = reactExports.useState("info");
  const style = (tab) => {
    if (Tab1 !== tab) {
      setTab1(tab);
    }
  };
  const [alertData, setalertData] = reactExports.useState(initialList);
  let handleRemove = (id) => {
    const newList = alertData.filter((list) => list.id !== id);
    setalertData(newList);
  };
  const [linkalert, setlinkalert] = reactExports.useState(LinkData);
  let handleRemove1 = (id) => {
    const newList = linkalert.filter((list) => list.id !== id);
    setlinkalert(newList);
  };
  const [AlertsStyledata, setAlertsStyledata] = reactExports.useState(AlertsStyle);
  let handleRemove2 = (id) => {
    const newList = AlertsStyledata.filter((list) => list.id !== id);
    setAlertsStyledata(newList);
  };
  const [Alertsicon, setAlertsicon] = reactExports.useState(Alerticon);
  let handleRemove3 = (id) => {
    const newList = Alertsicon.filter((list) => list.id !== id);
    setAlertsicon(newList);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Alerts",
        home: "Home",
        name: "Elements",
        fonticonsname: "Alerts"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Default alerts" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: alertData.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Alert,
        {
          color: item.color,
          className: "default-alerts",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                onClick: () => handleRemove(item.id),
                className: "btn-close"
              }
            ),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.show }),
            " ",
            item.text
          ]
        },
        Math.random()
      )) }),
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
  const [alertData, setalertData] = useState(initialList);
  let handleRemove = (id) => {
    const newList = alertData.filter((list) => list.id !== id);
    setalertData(newList);
  }
              {alertData.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                        </Alert>
              ))}` }) }),
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
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Links in alerts" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: linkalert.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Alert,
        {
          className: item.class,
          color: item.color,
          children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.show }),
            " ",
            item.text,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                onClick: () => handleRemove1(item.id),
                className: "btn-close btn"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                className: "alert-link",
                to: "#",
                children: item.linktext
              }
            ),
            item.text2
          ]
        },
        Math.random()
      )) }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                const [linkalert, setlinkalert] = useState(LinkData);
                let handleRemove1 = (id) => {
                  const newList = linkalert.filter((list) => list.id !== id);
                  setlinkalert(newList);
                }
                {linkalert.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove1(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          <Link
      className="alert-link"
      to="#"
    >
     {item.linktext}
    </Link>
    {item.text2}
                        </Alert>
              ))}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Tabs Alerts" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav nav-pills nav-with-alerts row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { tag: "li", className: "col-lg-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { tag: "a", onClick: () => {
                style("info");
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-info", children: "Informations" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "col-lg-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { onClick: () => {
                style("success");
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-success", children: "Successes" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "col-lg-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { onClick: () => {
                style("warning");
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-warning", children: "Warnings" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "col-lg-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { onClick: () => {
                style("error");
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-danger", children: "Errors" }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { className: "tab-content", activeTab: Tab1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { className: "tab-pane", tabId: "info", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-info", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula nec arcu at faucibus. Duis justo urna, adipiscing quis turpis non, dictum hendrerit ipsum. Fusce non viverra erat. Curabitur sit amet ante dui. Donec congue molestie mi a varius. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ornare quam eu ultricies bibendum. Cras ante augue, pharetra eget ultricies eu, aliquam eu velit. Phasellus mattis vitae justo pretium tempus. Duis vitae felis et sem tristique suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { className: "tab-pane", tabId: "success", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-success", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Nulla magna sapien, ullamcorper nec dolor id, gravida venenatis velit. Aliquam et malesuada metus. Sed vitae turpis pharetra nunc dignissim ultricies et sit amet lacus. Cras gravida felis mauris, a pellentesque augue interdum ac. In varius facilisis ante, nec viverra libero commodo ac. Maecenas tempus, elit nec aliquet fermentum, tellus odio auctor sapien, eu scelerisque purus turpis quis eros. Morbi id ante diam. Phasellus aliquet purus id odio mollis dignissim. Proin sagittis, risus a ullamcorper dapibus, velit enim adipiscing nulla, vel facilisis ipsum dui quis diam. Aliquam ullamcorper accumsan felis id consequat. Nullam vehicula ut mi eget porta." }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { className: "tab-pane", tabId: "warning", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-warning", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Curabitur varius euismod nisi ac lacinia. Curabitur nec urna adipiscing, fermentum augue id, commodo nisl. Quisque ut convallis est. Suspendisse tellus nisi, tempus eu nulla quis, laoreet imperdiet ante. Vivamus in lorem purus. Integer luctus elit et metus condimentum porta. Suspendisse viverra sit amet mauris vel elementum. Fusce lorem arcu, accumsan non odio vel, vestibulum pharetra odio. Sed non mollis mi, ac lacinia nunc. Cras eleifend massa velit, tincidunt tempor arcu sodales at. Nam sit amet erat enim. Mauris placerat suscipit odio, vitae gravida purus bibendum sed. Suspendisse a nunc quis libero rutrum mattis at ac metus. In ac risus eleifend, vestibulum mi eget, dapibus nulla. Nunc diam eros, convallis a sagittis non, rhoncus non nunc. Maecenas in eleifend quam." }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabPane, { className: "tab-pane", tabId: "error", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-danger", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sed quis dapibus nunc. Proin vestibulum libero elit, gravida tincidunt mauris tincidunt blandit. Donec non ultrices neque, nec sollicitudin elit. Curabitur volutpat nulla vel mauris vestibulum, tempor ultrices quam ullamcorper. Fusce ultricies elementum pretium. In vel consectetur leo, nec rutrum velit. Fusce fermentum pulvinar nibh. Ut posuere ante sed luctus egestas. Aenean ut suscipit tortor." }) }) })
            ] })
          ] }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                
                
                <Nav className="nav nav-pills nav-with-alerts row">
                    <NavItem tag="li" className="col-lg-3">
                      <NavLink tag="a" onClick={() => { style("info"); }} data-bs-toggle="tab">
                        <div className="alert alert-info">Informations</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("success"); }} data-bs-toggle="tab">
                        <div className="alert alert-success">Successes</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("warning"); }} data-bs-toggle="tab">
                        <div className="alert alert-warning">Warnings</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("error"); }} data-bs-toggle="tab">
                        <div className="alert alert-danger">Errors</div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-content" activeTab={Tab1}>
                    <TabPane className="tab-pane" tabId="info">
                      <div className="alert alert-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut vehicula nec arcu at faucibus. Duis justo
                          urna, adipiscing quis turpis non, dictum hendrerit
                          ipsum. Fusce non viverra erat. Curabitur sit amet ante
                          dui. Donec congue molestie mi a varius. Suspendisse
                          potenti. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus. Aliquam
                          ornare quam eu ultricies bibendum. Cras ante augue,
                          pharetra eget ultricies eu, aliquam eu velit.
                          Phasellus mattis vitae justo pretium tempus. Duis
                          vitae felis et sem tristique suscipit. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="success">
                      <div className="alert alert-success">
                        <p>
                          Nulla magna sapien, ullamcorper nec dolor id, gravida
                          venenatis velit. Aliquam et malesuada metus. Sed vitae
                          turpis pharetra nunc dignissim ultricies et sit amet
                          lacus. Cras gravida felis mauris, a pellentesque augue
                          interdum ac. In varius facilisis ante, nec viverra
                          libero commodo ac. Maecenas tempus, elit nec aliquet
                          fermentum, tellus odio auctor sapien, eu scelerisque
                          purus turpis quis eros. Morbi id ante diam. Phasellus
                          aliquet purus id odio mollis dignissim. Proin
                          sagittis, risus a ullamcorper dapibus, velit enim
                          adipiscing nulla, vel facilisis ipsum dui quis diam.
                          Aliquam ullamcorper accumsan felis id consequat.
                          Nullam vehicula ut mi eget porta.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="warning">
                      <div className="alert alert-warning">
                        <p>
                          Curabitur varius euismod nisi ac lacinia. Curabitur
                          nec urna adipiscing, fermentum augue id, commodo nisl.
                          Quisque ut convallis est. Suspendisse tellus nisi,
                          tempus eu nulla quis, laoreet imperdiet ante. Vivamus
                          in lorem purus. Integer luctus elit et metus
                          condimentum porta. Suspendisse viverra sit amet mauris
                          vel elementum. Fusce lorem arcu, accumsan non odio
                          vel, vestibulum pharetra odio. Sed non mollis mi, ac
                          lacinia nunc. Cras eleifend massa velit, tincidunt
                          tempor arcu sodales at. Nam sit amet erat enim. Mauris
                          placerat suscipit odio, vitae gravida purus bibendum
                          sed. Suspendisse a nunc quis libero rutrum mattis at
                          ac metus. In ac risus eleifend, vestibulum mi eget,
                          dapibus nulla. Nunc diam eros, convallis a sagittis
                          non, rhoncus non nunc. Maecenas in eleifend quam.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="error">
                      <div className="alert alert-danger">
                        <p>
                          Sed quis dapibus nunc. Proin vestibulum libero elit,
                          gravida tincidunt mauris tincidunt blandit. Donec non
                          ultrices neque, nec sollicitudin elit. Curabitur
                          volutpat nulla vel mauris vestibulum, tempor ultrices
                          quam ullamcorper. Fusce ultricies elementum pretium.
                          In vel consectetur leo, nec rutrum velit. Fusce
                          fermentum pulvinar nibh. Ut posuere ante sed luctus
                          egestas. Aenean ut suscipit tortor.
                        </p>
                      </div>
                    </TabPane>
                  </TabContent>` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Alerts Popovers" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "me-1 btn btn-success mt-1 mb-1",
                id: "Success",
                children: "Show success"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              UncontrolledPopover,
              {
                placement: "bottom",
                target: "Success",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { tag: "h3", children: "Alert Success" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { children: "Well done! You successfully read this important alert message.." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "me-1 btn btn-info mt-1 mb-1",
                id: "Info",
                children: "Show info"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              UncontrolledPopover,
              {
                placement: "top",
                target: "Info",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { tag: "h3", children: "Alert Info" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { children: "Heads up! This alert needs your attention, but it's not super important..." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "me-1 btn btn-warning mt-1 mb-1",
                id: "Warning",
                children: "Show warning"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              UncontrolledPopover,
              {
                placement: "bottom",
                target: "Warning",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { tag: "h3", children: "Alert Warning" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { children: "Warning! Best check yo self, you're not looking too good.." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "me-1 btn btn-secondary mt-1 mb-1",
                id: "Secondary",
                children: "Show secondary"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              UncontrolledPopover,
              {
                placement: "top",
                target: "Secondary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { tag: "h3", children: "Alert Secondary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { children: "Error! Please Check u r emial id.." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "me-1 btn btn-danger mt-1 mb-1",
                id: "Danger",
                children: "Show danger"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              UncontrolledPopover,
              {
                placement: "bottom",
                target: "Danger",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { tag: "h3", children: "Alert Danger" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { children: "Oh snap! Change a few things up and try submitting again.." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                type: "button",
                className: "me-1 btn btn-primary mt-1 mb-1",
                id: "Primary",
                children: "Show primary"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              UncontrolledPopover,
              {
                placement: "top",
                target: "Primary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverHeader, { tag: "h3", children: "Alert Primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverBody, { children: "Cool! This alert will close in 3 seconds. The data-delay attribute is in milliseconds.." })
                ]
              }
            )
          ] }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `<Button 
            color=""
              type="button"
              className="me-1 btn btn-success mt-1 mb-1"
              id="Success"
            >
              Show success
            </Button>
            <UncontrolledPopover
    placement="bottom"
    target="Success"
  >
    <PopoverHeader tag="h3" >
     Alert Success
    </PopoverHeader>
    <PopoverBody >
    Well done! You successfully read this important alert message..
    </PopoverBody>
  </UncontrolledPopover>` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Alerts style" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: AlertsStyledata.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Alert,
          {
            className: item.class,
            color: item.color,
            children: [
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.show }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  onClick: () => handleRemove2(item.id),
                  className: "btn-close btn"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "message-inner-separator" }),
              item.text
            ]
          }
        ) }, Math.random())) }) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                 const [AlertsStyledata, setAlertsStyledata] = useState(AlertsStyle);
                 let handleRemove2 = (id) => {
                   const newList = AlertsStyledata.filter((list) => list.id !== id);
                   setAlertsStyledata(newList);
                 }
               
               {AlertsStyledata.map((item) => (
              <Col sm="6"md="6"  key={Math.random()}>
                        <Alert
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong>
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove2(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          
                          <hr className="message-inner-separator" />
                           {item.text}
                        </Alert>
              </Col>
              ))}` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Alert with icon" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: Alertsicon.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Alert,
          {
            className: item.class,
            color: item.color,
            children: [
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  type: "button",
                  onClick: () => handleRemove3(item.id),
                  className: "btn-close btn"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: item.icon, "aria-hidden": "true" }),
              item.text
            ]
          },
          Math.random()
        )) }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef6, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                const [Alertsicon, setAlertsicon] = useState(Alerticon);
                let handleRemove3 = (id) => {
                  const newList = Alertsicon.filter((list) => list.id !== id);
                  setAlertsicon(newList);
                }
                
                {Alertsicon.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove3(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          
                          <i className={item.icon} aria-hidden="true"></i>{item.text}
                        </Alert>
              
              ))}
           ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef6);
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
      ] }) })
    ] })
  ] });
};
Alerts.propTypes = {};
Alerts.defaultProps = {};
export {
  Alerts as default
};

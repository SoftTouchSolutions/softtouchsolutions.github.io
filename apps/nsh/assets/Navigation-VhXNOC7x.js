import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, c as DropdownToggle, D as DropdownMenu } from "./index-BtyINLIY.js";
import { N as Nav } from "./Nav-A6hBcsM-.js";
import { N as NavItem } from "./NavItem-MovbypiN.js";
import { N as NavLink } from "./NavLink-T5jMsap9.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-B9TQj4BA.js";
import { C as CardTitle } from "./CardTitle-BLcyN_Gi.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Navigation = () => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Navigation",
        home: "Home",
        name: "Elements",
        fonticonsname: "Navigation"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Basic Nav" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav1 br-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              className: "nav-link ",
              active: true,
              "aria-current": "page",
              href: "#",
              children: "Active"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link", href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link", href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link ", disabled: true, href: "#", children: "Disabled" }) })
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
    <Nav className="nav1 br-7">
    <NavItem className="nav-item1">
      <NavLink
        className="nav-link "
        active
        aria-current="page"
        href="#"
      >
        Active
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link " disabled href="#">
        Disabled
      </NavLink>
    </NavItem>
              </Nav>
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Nav Vertical" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { vertical: true, className: "nav1 flex-column br-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              className: "nav-link",
              active: true,
              "aria-current": "page",
              href: "#",
              children: "Active"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link", href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link", href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link", disabled: true, href: "#", children: "Disabled" }) })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "language-markup mb-0", children: [
            `
    <Nav vertical className="nav1 flex-column br-7">
    <NavItem className="nav-item1">
      <NavLink
        className="nav-link"
        active
        aria-current="page"
        href="#"
      >
        Active
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" disabled href="#">
        Disabled
      </NavLink>
    </NavItem>
    </Nav>
              `,
            " "
          ] }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Color Navigation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { pills: true, className: "nav nav-pills", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item m-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link  px-4 py-2", active: true, href: "#", children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { nav: true, className: "nav-item dropdown m-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DropdownToggle,
              {
                color: "",
                className: "nav-link dropdown-toggle px-4 py-2",
                "data-bs-toggle": "dropdown",
                role: "button",
                "aria-expanded": "false",
                children: "Dropdown"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { divider: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item m-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link px-4 py-2", href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item m-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link  px-4 py-2", disabled: true, href: "#", children: "Disabled" }) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
     <Nav pills className="nav nav-pills">
     <NavItem className="nav-item m-2">
       <NavLink className="nav-link  px-4 py-2" active href="#">
         Active
       </NavLink>
     </NavItem>
     <UncontrolledDropdown nav className="nav-item dropdown m-2">
       <DropdownToggle
         color=""
         className="nav-link dropdown-toggle px-4 py-2"
         data-bs-toggle="dropdown"
         role="button"
         aria-expanded="false"
       >
         Dropdown
       </DropdownToggle>
       <DropdownMenu className="dropdown-menu">
         <DropdownItem className="dropdown-item" href="#">
           Action
         </DropdownItem>
         <DropdownItem className="dropdown-item" href="#">
           Another action
         </DropdownItem>
         <DropdownItem className="dropdown-item" href="#">
           Something else here
         </DropdownItem>
         <DropdownItem divider></DropdownItem>
         <DropdownItem className="dropdown-item" href="#">
           Separated link
         </DropdownItem>
       </DropdownMenu>
     </UncontrolledDropdown>
     <NavItem className="nav-item m-2">
       <NavLink className="nav-link px-4 py-2" href="#">
         Link
       </NavLink>
     </NavItem>
     <NavItem className="nav-item m-2">
       <NavLink className="nav-link  px-4 py-2" disabled href="#">
         Disabled
       </NavLink>
     </NavItem>
   </Nav>
   ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Icon Navigation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { tabs: true, pills: true, className: "nav-pills-circle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { href: "#", onClick: (ele) => {
            document.querySelectorAll(".activeFunction").forEach((element) => {
              element.classList.remove("active");
            });
            ele.target.classList.add("active");
          }, className: "border py-3 px-5 m-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "activeFunction nav-link-icon d-block", children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-home" }),
            " Home"
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              href: "#",
              onClick: (ele) => {
                document.querySelectorAll(".activeFunction").forEach((element) => {
                  element.classList.remove("active");
                });
                ele.target.classList.add("active");
              },
              className: "border py-3 px-5 m-2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "activeFunction nav-link-icon d-block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-unlock" }),
                " Lock",
                " "
              ] })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              href: "#",
              onClick: (ele) => {
                document.querySelectorAll(".activeFunction").forEach((element) => {
                  element.classList.remove("active");
                });
                ele.target.classList.add("active");
              },
              className: "border py-3 px-5 m-2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "activeFunction nav-link-icon d-block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-play" }),
                " Videos"
              ] })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              href: "#",
              onClick: (ele) => {
                document.querySelectorAll(".activeFunction").forEach((element) => {
                  element.classList.remove("active");
                });
                ele.target.classList.add("active");
              },
              className: "border py-3 px-5 m-2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "activeFunction nav-link-icon d-block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-layers" }),
                " Servers"
              ] })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              href: "#",
              onClick: (ele) => {
                document.querySelectorAll(".activeFunction").forEach((element) => {
                  element.classList.remove("active");
                });
                ele.target.classList.add("active");
              },
              className: "border py-3 px-5 m-2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "activeFunction nav-link-icon d-block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-image" }),
                " Gallery",
                " "
              ] })
            }
          ) })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Nav tabs pills className="nav-pills-circle">
    <NavItem>
      <NavLink href="#" className="border py-3 px-5 m-2" active><span className="nav-link-icon d-block"> <i className="fe fe-home"></i> Home</span></NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-unlock"></i> Lock{" "}</span></NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-play"></i> Videos</span></NavLink>  
    </NavItem>
    <NavItem>
      <NavLink  href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-layers"></i> Servers</span></NavLink>
    </NavItem>
    <NavItem>
      <NavLink  href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-image"></i> Gallery{" "}</span></NavLink>
    </NavItem>
  </Nav>` }) }),
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Icon Nav Bar" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { tabs: true, pills: true, className: "nav-pills-circle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { href: "#", className: "border w-8 h-8 text-center br-100 m-2", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-link-icon d-block text-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-home fs-20" }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { href: "#", className: "border w-8 h-8 text-center br-100 m-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "nav-link-icon d-block text-center mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-unlock fs-20" }),
            " "
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { href: "#", className: "border w-8 h-8 text-center br-100 m-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-link-icon d-block text-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-play fs-20" }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { href: "#", className: "border w-8 h-8 text-center br-100 m-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-link-icon d-block text-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-layers fs-20" }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { href: "#", className: "border w-8 h-8 text-center br-100 m-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "nav-link-icon d-block text-center mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-image fs-20" }),
            " "
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                 <Nav tabs pills className="nav-pills-circle">
                 <NavItem>
                   <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2" active><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-home fs-20"></i></span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-unlock fs-20"></i> </span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-play fs-20"></i></span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink  href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-layers fs-20"></i></span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink  href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-image fs-20"></i>{" "}</span></NavLink>
                 </NavItem>
               </Nav>
` }) }),
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Navigation backgrounds" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav1 bg-primary br-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white active", href: "#", children: "Active" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link disabled text-white-50", href: "#", children: "Disabled" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav1 bg-info mt-4 br-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white active", href: "#", children: "Active" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link disabled text-white-50", href: "#", children: "Disabled" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav1 bg-success mt-4 br-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white active", href: "#", children: "Active" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link disabled text-white-50", href: "#", children: "Disabled" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav1 bg-danger mt-4 br-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white active", href: "#", children: "Active" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link disabled text-white-50", href: "#", children: "Disabled" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav1 bg-secondary mt-4 br-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white active", href: "#", children: "Active" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link disabled text-white-50", href: "#", children: "Disabled" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav1 bg-yellow mt-4 br-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white active", href: "#", children: "Active" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link text-white", href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "nav-item1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: "nav-link disabled text-white-50", href: "#", children: "Disabled" }) })
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef6, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                <Nav className="nav1 bg-primary br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-info mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-success mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-danger mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-secondary mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-yellow mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
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
      ] })
    ] }) })
  ] });
};
Navigation.propTypes = {};
Navigation.defaultProps = {};
export {
  Navigation as default
};

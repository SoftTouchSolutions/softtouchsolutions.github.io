import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { u as user12 } from "./12-DCQ8KYQr.js";
import { u as user2 } from "./2-C7nMX_t4.js";
import { u as user9 } from "./9-uUt78-1N.js";
import { u as user4 } from "./4-B2cp7gEW.js";
import { u as user16 } from "./16-Cj3VG8Ln.js";
import { p as photo3, a as photo4 } from "./4-CUU99mC1.js";
import { p as photo2 } from "./2-bavdzQaD.js";
import { p as photo5, a as photo6 } from "./6-NgB5q-sK.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, i as classnames, h as CardBody, F as Form, b as Link, B as Button, c as DropdownToggle, D as DropdownMenu, n as CardHeader, L as Label } from "./index-AOv_UoEY.js";
import { N as Nav } from "./Nav-gO3mkbbi.js";
import { N as NavItem } from "./NavItem-BNbPYxZP.js";
import { N as NavLink } from "./NavLink-CbHYmh6A.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-te3rbsH-.js";
import { C as CardTitle } from "./CardTitle-p-89_2wb.js";
import { L as ListGroup, a as ListGroupItem } from "./ListGroupItem-DEGIFh9u.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-D5Rf3Lfn.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./TooltipPopoverWrapper-DH6P2XRB.js";
const TimeLine = () => {
  const [Tab1, setTab1] = reactExports.useState("1");
  const style1 = (tab) => {
    if (Tab1 !== tab) {
      setTab1(tab);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "TimeLine",
        home: "Home",
        name: "Apps",
        fonticonsname: "TimeLine"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab-menu-heading p-0 border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabs-menu1 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "nav", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: classnames({ active: Tab1 === "1" }), onClick: () => {
              style1("1");
            }, "data-bs-toggle": "tab", children: "Post" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: classnames({ active: Tab1 === "2" }), onClick: () => {
              style1("2");
            }, "data-bs-toggle": "tab", children: "Albumbs" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { className: classnames({ active: Tab1 === "3" }), onClick: () => {
              style1("3");
            }, "data-bs-toggle": "tab", children: "Videos" }) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "d-flex border-top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "me-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "", className: "rounded-circle avatar avatar-md mw-fit-content", src: user16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "profile-edit w-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "form-control", placeholder: "What are you doing right now?", rows: "5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-share border border-light2 border-top-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "me-2", title: "", "data-bs-toggle": "tooltip", "data-bs-placement": "bottom", id: "Audio", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 13.3c.66 0 1.19-.54 1.19-1.2l.01-6.2c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v6.2c0 .66.54 1.2 1.2 1.2z", opacity: ".3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2V5.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { target: "Audio", placement: "bottom", children: "Audio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "me-2", title: "", "data-bs-toggle": "tooltip", "data-bs-placement": "bottom", id: "Video", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 8h10v8H5z", opacity: ".3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { target: "Video", placement: "bottom", children: "Video" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "me-2", title: "", "data-bs-toggle": "tooltip", "data-bs-placement": "bottom", id: "Picture", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z", opacity: ".3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { target: "Picture", placement: "bottom", children: "Picture" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { color: "", type: "submit", className: "btn btn-sm btn-success pull-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-share ms-1" }),
                  " Share"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media mt-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-user me-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "", className: "rounded-circle avatar avatar-md mw-fit-content", src: user16 }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0 mt-1 font-weight-bold", children: "Peter Hill" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-primary", children: "just now" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown show", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownToggle, { tag: "a", color: "", className: "new option-dots", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Edit Post" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Delete Post" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Personal Settings" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media mg-t-15 profile-footer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-user me-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "avatar-list avatar-list-stacked", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user12})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user2})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user9})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user2})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user4})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", children: "+28" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0 mt-2 ms-2", children: "28 people like your photo" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "new", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon me-3 mt-2", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "new", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon me-3 mt-2", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "new", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon mt-2", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "5", opacity: ".3", r: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "12", opacity: ".3", r: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "19.02", opacity: ".3", r: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" })
              ] }) })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media mt-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-user me-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "", className: "rounded-circle avatar avatar-md mw-fit-content", src: user16 }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0 mt-1 font-weight-bold", children: "Peter Hill" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Sep 26 2019, 10:14am" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown show", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownToggle, { color: "", tag: "a", className: "new option-dots", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Edit Post" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Delete Post" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Personal Settings" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo2, alt: "img", className: "w-40 m-1 br-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo3, alt: "img", className: "w-40 m-1 br-5" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media mg-t-15 profile-footer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-user me-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "avatar-list avatar-list-stacked", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user12})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user2})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user9})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user2})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user4})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", children: "+28" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0 mt-2 ms-2", children: "28 people like your photo" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "new", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon me-3 mt-2", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "new", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon me-3 mt-2", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "new", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon mt-2", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "5", opacity: ".3", r: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "12", opacity: ".3", r: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "19.02", opacity: ".3", r: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" })
              ] }) })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media mt-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-user me-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "", className: "rounded-circle avatar avatar-md mw-fit-content", src: user16 }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0 mt-1 font-weight-bold", children: "Peter Hill" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Sep 24 2019, 09:14am" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown show", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownToggle, { color: "", tag: "a", className: "new option-dots", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Edit Post" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Delete Post" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Personal Settings" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo4, alt: "img", className: "w-30 m-1 br-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo5, alt: "img", className: "w-30 m-1 br-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo6, alt: "img", className: "w-30 m-1 br-5" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media mg-t-15 profile-footer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-user me-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "avatar-list avatar-list-stacked", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user12})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user2})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user9})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user2})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", style: { backgroundImage: `url(${user4})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround", children: "+28" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0 mt-2 ms-2", children: "28 people like your photo" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "new", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon me-3 mt-2", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "new", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon me-3 mt-2", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "new", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon mt-2", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "5", opacity: ".3", r: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "12", opacity: ".3", r: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "19.02", opacity: ".3", r: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" })
              ] }) })
            ] }) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mg-b-20 card--events", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Trending Posts" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item d-flex border-top-0 border-start-0 border-end-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-primary me-3 mt-1 brround" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "fs-12", children: [
                "Oct 20 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold", children: "Sunday" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: "New Fests Blog" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 text-muted fs-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8AM - 4PM" }),
                " Rew City, USA"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item d-flex border-start-0 border-end-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-secondary me-3 mt-1 brround" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "fs-12", children: [
                "Oct 18 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold", children: "Friday" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "New Location Visited" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 text-muted fs-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8AM - 5PM" }),
                " Newyork"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item d-flex border-start-0 border-end-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-success me-3 mt-1 brround" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "fs-12", children: [
                "Oct 12 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold", children: "Saturday" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Weding Event Dance Show" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 text-muted fs-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8AM - 5PM" }),
                " Japan"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item d-flex border-start-0 border-end-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-warning me-3 mt-1 brround" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "fs-12", children: [
                "Sep 20 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold", children: "Friday" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Field day Festival Events Orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 text-muted fs-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8AM - 4PM" }),
                " Rew City, USA"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item d-flex border-start-0 border-end-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-info me-3 mt-1 brround" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "fs-12", children: [
                "Sep 25 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold", children: "Wednesday" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Christamas Party Event Orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 text-muted fs-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8AM - 5PM" }),
                " Newyork"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { className: "list-group-item d-flex border-start-0 border-end-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-danger me-3 mt-1 brround" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "fs-12", children: [
                "Sep 30 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold", children: "Monday" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "New Weding Event Dance Show Orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 text-muted fs-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8AM - 5PM" }),
                " Japan"
              ] })
            ] })
          ] })
        ] }) }) })
      ] }) })
    ] })
  ] });
};
TimeLine.propTypes = {};
TimeLine.defaultProps = {};
export {
  TimeLine as default
};

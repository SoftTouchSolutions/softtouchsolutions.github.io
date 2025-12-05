import { j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, b as Link, c as DropdownToggle, D as DropdownMenu, F as Form, I as Input, B as Button } from "./index-PSM4fvJQ.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-D9bvUbQw.js";
import { C as CardTitle } from "./CardTitle-BC9vGAnP.js";
import { u as user4 } from "./4-CiCF6POl.js";
import { u as user1 } from "./1-BUa3VTVx.js";
import { u as user8 } from "./8-tIO3X5Xv.js";
import { u as user16 } from "./16-Cuc8by-s.js";
import { f as favicon1 } from "./favicon1-CBO3Mpmi.js";
import { l as logo1 } from "./logo1-Bdwt01HK.js";
import { f as favicon } from "./favicon-jxi7jcMW.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const logo = "/assets/logo-Bqn5iBfy.png";
const Header = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "Headers",
      home: "Home",
      name: "Elements",
      fonticonsname: "Headers"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Header Style 01" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "header py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "header-brand", to: `${"/"}dashboard/dashboard01`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, className: "header-brand-img desktop-lgo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo1, className: "header-brand-img dark-logo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon, className: "header-brand-img mobile-logo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon1, className: "header-brand-img darkmobile-logo", alt: "Dashtic logo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex order-lg-2 ms-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dropdown d-none d-md-flex mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "nav-link icon requestfullscreen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-maximize floating" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "nav-link icon exitfullscreen", style: { display: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-minimize floating" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown d-none d-md-flex mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownToggle, { color: "", className: "nav-link icon", "data-bs-toggle": "dropdown", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-bell floating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-unread bg-danger" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notifyimg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-message-square" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Message Sent." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "3 hours ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notifyimg bg-danger", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-shopping-cart" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: " Order Placed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "5 hour ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notifyimg bg-success", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-calendar" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: " Event Started" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "45 mintues ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notifyimg bg-warning", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-airplay" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Your Admin launched" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "1 day ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " text-center p-2 border-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "", children: "View All Notifications" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown d-none d-md-flex mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownToggle, { color: "", className: "nav-link icon", "data-bs-toggle": "dropdown", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-mail floating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " nav-unread badge bg-warning  rounded-pill", children: "2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "dropdown-item text-center", children: "2 New Messages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround me-3 align-self-center", style: { backgroundImage: `url(${user4})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Madeleine" }),
                " Hey! there I' am available....",
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "3 hours ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround me-3 align-self-center", style: { backgroundImage: `url(${user1})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Anthony" }),
                " New product Launching...",
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "5 hour ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround me-3 align-self-center", style: { backgroundImage: `url(${user8})` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Olivia" }),
                " New Schedule Realease......",
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "45 mintues ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "dropdown-item text-center", children: "See all Messages" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownToggle, { color: "", className: "nav-link leading-none mt-1", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar avatar-md brround", style: { backgroundImage: `url(${user16})` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-start dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "dropdown-item text-center user pb-0", children: "John Thomson" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center user-semi-title text-dark", children: "App Developer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "dropdown-icon mdi mdi-account-outline " }),
              " Profile"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "dropdown-icon  mdi mdi-settings" }),
              " Settings"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "dropdown-icon mdi  mdi-message-outline" }),
              " Inbox"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "dropdown-icon mdi mdi-comment-check-outline" }),
              " Message"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "login.html", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "dropdown-icon mdi  mdi-logout-variant" }),
              " Sign out"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "header-toggler d-lg-none ms-3 ms-lg-0", "data-bs-toggle": "collapse", "data-bs-target": "#headerMenuCollapse1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "header-toggler-icon" }) })
    ] }) }) }) })
  ] }) }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Header Style 02" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "header py-4 bg-primary br-bl-7 br-br-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "header-brand", to: `${"/"}dashboard/dashboard01`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo1, className: "header-brand-img desktop-lgo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo1, className: "header-brand-img dark-logo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon, className: "header-brand-img mobile-logo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon1, className: "header-brand-img darkmobile-logo", alt: "Dashtic logo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex order-lg-2 ms-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "defaultheader d-none d-lg-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { className: "form-inline mt-2 me-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-element mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "search", className: "form-control header-search bg-transparent border-transparent", placeholder: "Search…", "aria-label": "Search", tabIndex: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary-color", type: "button", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-search text-white-50" }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex order-lg-2 ms-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dropdown d-none d-md-flex mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "nav-link icon requestfullscreen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-maximize floating" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "nav-link icon exitfullscreen", style: { display: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-minimize floating" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown d-none d-md-flex mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownToggle, { color: "", className: "nav-link icon", "data-bs-toggle": "dropdown", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-bell floating" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-unread bg-danger" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notifyimg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-message-square" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Message Sent." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "3 hours ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notifyimg bg-danger", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-shopping-cart" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: " Order Placed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "5 hour ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notifyimg bg-success", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-calendar" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: " Event Started" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "45 mintues ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notifyimg bg-warning", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-airplay" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Your Admin launched" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "1 day ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " text-center p-2 border-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "", children: "View All Notifications" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown d-none d-md-flex mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownToggle, { color: "", className: "nav-link icon", "data-bs-toggle": "dropdown", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-mail floating" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " nav-unread badge bg-warning  rounded-pill", children: "2" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "dropdown-item text-center", children: "2 New Messages" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround me-3 align-self-center", style: { backgroundImage: `url(${user4})` } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Madeleine" }),
                  " Hey! there I' am available....",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "3 hours ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround me-3 align-self-center", style: { backgroundImage: `url(${user1})` } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Anthony" }),
                  " New product Launching...",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "5 hour ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar brround me-3 align-self-center", style: { backgroundImage: `url(${user8})` } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Olivia" }),
                  " New Schedule Realease......",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "45 mintues ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "dropdown-item text-center", children: "See all Messages" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownToggle, { color: "", className: "nav-link leading-none mt-1", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar avatar-md brround", style: { backgroundImage: `url(${user16})` } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-start dropdown-menu-arrow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "dropdown-item text-center user pb-0", children: "John Thomson" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center user-semi-title text-dark", children: "App Developer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "dropdown-icon mdi mdi-account-outline " }),
                " Profile"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "dropdown-icon  mdi mdi-settings" }),
                " Settings"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "dropdown-icon mdi  mdi-message-outline" }),
                " Inbox"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "dropdown-icon mdi mdi-comment-check-outline" }),
                " Message"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "login.html", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "dropdown-icon mdi  mdi-logout-variant" }),
                " Sign out"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "header-toggler d-lg-none ms-3 ms-lg-0 text-white", "data-bs-toggle": "collapse", "data-bs-target": "#headerMenuCollapse2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "header-toggler-icon" }) })
    ] }) }) }) })
  ] }) }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Header Style 03 with Svg Icons" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "header py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fluid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "header-brand", to: `${"/"}dashboard/dashboard01`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, className: "header-brand-img desktop-lgo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo1, className: "header-brand-img dark-logo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon, className: "header-brand-img mobile-logo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon1, className: "header-brand-img darkmobile-logo", alt: "Dashtic logo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex order-lg-2 ms-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", "data-bs-toggle": "search", className: "nav-link nav-link-lg d-md-none navsearch", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon search-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { className: "form-inline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-element mt-1 d-none d-lg-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "search", className: "form-control header-search", placeholder: "Search…", "aria-label": "Search", tabIndex: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary-color", type: "button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon search-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown header-fullscreen ps-2 d-none d-lg-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "nav-link icon full-screen-link p-0", id: "fullscreen-button", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "header-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7,14 L5,14 L5,19 L10,19 L10,17 L7,17 L7,14 Z M5,10 L7,10 L7,7 L10,7 L10,5 L5,5 L5,10 Z M17,17 L14,17 L14,19 L19,19 L19,14 L17,14 L17,17 Z M14,5 L14,7 L17,7 L17,10 L19,10 L19,5 L14,5 Z" }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown ps-2 d-none d-lg-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownToggle, { color: "", className: "nav-link icon p-0", "data-bs-toggle": "dropdown", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { opacity: ".3", d: "M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pulse " })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-4", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 11V4H4v8.17l.59-.58.58-.59H6z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zM4.59 11.59l-.59.58V4h11v7H5.17l-.58.59z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-weight-bold", children: "Message Sent." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "3 hours ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-4", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 11l2.76-5H6.16l2.37 5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-weight-bold", children: " Order Placed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "5 hour ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-4", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 8h14V6H5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-weight-bold", children: " Event Started" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "45 mintues ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-4", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 13h5v7h-5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM2 4h18v5h2V4c0-1.11-.9-2-2-2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4zm9 2l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-weight-bold", children: "Your Admin launched" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "1 day ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " text-center p-2 border-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "", children: "View All Notifications" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownToggle, { color: "", className: "nav-link leading-none", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user16, alt: "img", className: "avatar avatar-md brround" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "dropdown-item text-center user pb-0 font-weight-bold", children: "John Thomson" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center user-semi-title", children: "App Developer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Profile" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { opacity: ".3", d: "M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.48,7.09 9.07,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.11,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.51,16.92 14.92,16.68 15.35,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.57,5.11 19.4,5.02 19.22,5.02 C19.16,5.02 19.1,5.03 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.89,5.03 4.83,5.02 4.77,5.02 C4.6,5.02 4.43,5.11 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.43,18.89 4.6,18.98 4.78,18.98 C4.84,18.98 4.9,18.97 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.11,18.97 19.17,18.98 19.23,18.98 C19.4,18.98 19.57,18.89 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 Z M17.45,11.27 C17.49,11.58 17.5,11.79 17.5,12 C17.5,12.21 17.48,12.43 17.45,12.73 L17.31,13.86 L18.2,14.56 L19.28,15.4 L18.58,16.61 L17.31,16.1 L16.27,15.68 L15.37,16.36 C14.94,16.68 14.53,16.92 14.12,17.09 L13.06,17.52 L12.9,18.65 L12.7,20 L11.3,20 L11.11,18.65 L10.95,17.52 L9.89,17.09 C9.46,16.91 9.06,16.68 8.66,16.38 L7.75,15.68 L6.69,16.11 L5.42,16.62 L4.72,15.41 L5.8,14.57 L6.69,13.87 L6.55,12.74 C6.52,12.43 6.5,12.2 6.5,12 C6.5,11.8 6.52,11.57 6.55,11.27 L6.69,10.14 L5.8,9.44 L4.72,8.6 L5.42,7.39 L6.69,7.9 L7.73,8.32 L8.63,7.64 C9.06,7.32 9.47,7.08 9.88,6.91 L10.94,6.48 L11.1,5.35 L11.3,4 L12.69,4 L12.88,5.35 L13.04,6.48 L14.1,6.91 C14.53,7.09 14.93,7.32 15.33,7.62 L16.24,8.32 L17.3,7.89 L18.57,7.38 L19.27,8.59 L18.2,9.44 L17.31,10.14 L17.45,11.27 Z M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Settings" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 11V4H4v8.17l.59-.58.58-.59H6z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zM4.59 11.59l-.59.58V4h11v7H5.17l-.58.59z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Messages" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0zm0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 20h12V10H6v10zm2-6h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10zm-7-1h2v-3h3v-2h-3v-3h-2v3H8v2h3z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Sign Out" })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }) })
  ] }) }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Header Style 4 with Svg Icons" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "header py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fluid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "header-brand", to: `${"/"}dashboard/dashboard01`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, className: "header-brand-img desktop-lgo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo1, className: "header-brand-img dark-logo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon, className: "header-brand-img mobile-logo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon1, className: "header-brand-img darkmobile-logo", alt: "Dashtic logo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex order-lg-2 ms-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", "data-bs-toggle": "search", className: "nav-link nav-link-lg d-md-none navsearch", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon search-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { className: "form-inline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-element mt-1 d-none d-lg-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "search", className: "form-control header-search", placeholder: "Search…", "aria-label": "Search", tabIndex: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn btn-primary-color", type: "button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon search-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown d-none d-sm-flex header-option me-4 ms-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownToggle, { color: "", className: "nav-link icon p-0", "data-bs-toggle": "dropdown", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { opacity: ".3", d: "M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.48,7.09 9.07,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.11,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.51,16.92 14.92,16.68 15.35,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.57,5.11 19.4,5.02 19.22,5.02 C19.16,5.02 19.1,5.03 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.89,5.03 4.83,5.02 4.77,5.02 C4.6,5.02 4.43,5.11 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.43,18.89 4.6,18.98 4.78,18.98 C4.84,18.98 4.9,18.97 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.11,18.97 19.17,18.98 19.23,18.98 C19.4,18.98 19.57,18.89 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 Z M17.45,11.27 C17.49,11.58 17.5,11.79 17.5,12 C17.5,12.21 17.48,12.43 17.45,12.73 L17.31,13.86 L18.2,14.56 L19.28,15.4 L18.58,16.61 L17.31,16.1 L16.27,15.68 L15.37,16.36 C14.94,16.68 14.53,16.92 14.12,17.09 L13.06,17.52 L12.9,18.65 L12.7,20 L11.3,20 L11.11,18.65 L10.95,17.52 L9.89,17.09 C9.46,16.91 9.06,16.68 8.66,16.38 L7.75,15.68 L6.69,16.11 L5.42,16.62 L4.72,15.41 L5.8,14.57 L6.69,13.87 L6.55,12.74 C6.52,12.43 6.5,12.2 6.5,12 C6.5,11.8 6.52,11.57 6.55,11.27 L6.69,10.14 L5.8,9.44 L4.72,8.6 L5.42,7.39 L6.69,7.9 L7.73,8.32 L8.63,7.64 C9.06,7.32 9.47,7.08 9.88,6.91 L10.94,6.48 L11.1,5.35 L11.3,4 L12.69,4 L12.88,5.35 L13.04,6.48 L14.1,6.91 C14.53,7.09 14.93,7.32 15.33,7.62 L16.24,8.32 L17.3,7.89 L18.57,7.38 L19.27,8.59 L18.2,9.44 L17.31,10.14 L17.45,11.27 Z M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "nav-span", children: [
              "Notificatiions ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down ms-1 fs-18" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-start dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "App Design Projects" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Web Design Projects" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "App Development Projects" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Back-End Projects" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-start px-5 p-2 border-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "", children: "View Projects" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownToggle, { color: "", className: "nav-link leading-none", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user16, alt: "img", className: "avatar avatar-md brround" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "dropdown-item text-center user pb-0 font-weight-bold", children: "John Thomson" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center user-semi-title", children: "App Developer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Profile" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { opacity: ".3", d: "M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.48,7.09 9.07,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.11,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.51,16.92 14.92,16.68 15.35,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.57,5.11 19.4,5.02 19.22,5.02 C19.16,5.02 19.1,5.03 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.89,5.03 4.83,5.02 4.77,5.02 C4.6,5.02 4.43,5.11 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.43,18.89 4.6,18.98 4.78,18.98 C4.84,18.98 4.9,18.97 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.11,18.97 19.17,18.98 19.23,18.98 C19.4,18.98 19.57,18.89 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 Z M17.45,11.27 C17.49,11.58 17.5,11.79 17.5,12 C17.5,12.21 17.48,12.43 17.45,12.73 L17.31,13.86 L18.2,14.56 L19.28,15.4 L18.58,16.61 L17.31,16.1 L16.27,15.68 L15.37,16.36 C14.94,16.68 14.53,16.92 14.12,17.09 L13.06,17.52 L12.9,18.65 L12.7,20 L11.3,20 L11.11,18.65 L10.95,17.52 L9.89,17.09 C9.46,16.91 9.06,16.68 8.66,16.38 L7.75,15.68 L6.69,16.11 L5.42,16.62 L4.72,15.41 L5.8,14.57 L6.69,13.87 L6.55,12.74 C6.52,12.43 6.5,12.2 6.5,12 C6.5,11.8 6.52,11.57 6.55,11.27 L6.69,10.14 L5.8,9.44 L4.72,8.6 L5.42,7.39 L6.69,7.9 L7.73,8.32 L8.63,7.64 C9.06,7.32 9.47,7.08 9.88,6.91 L10.94,6.48 L11.1,5.35 L11.3,4 L12.69,4 L12.88,5.35 L13.04,6.48 L14.1,6.91 C14.53,7.09 14.93,7.32 15.33,7.62 L16.24,8.32 L17.3,7.89 L18.57,7.38 L19.27,8.59 L18.2,9.44 L17.31,10.14 L17.45,11.27 Z M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Settings" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 11V4H4v8.17l.59-.58.58-.59H6z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zM4.59 11.59l-.59.58V4h11v7H5.17l-.58.59z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Messages" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0zm0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 20h12V10H6v10zm2-6h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10zm-7-1h2v-3h3v-2h-3v-3h-2v3H8v2h3z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Sign Out" })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }) })
  ] }) }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Header Style 5 with Svg Icons" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "header bg-primary br-bl-7 br-br-7 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fluid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "header-brand", to: `${"/"}dashboard/dashboard01`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo1, className: "header-brand-img desktop-lgo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo1, className: "header-brand-img dark-logo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon, className: "header-brand-img mobile-logo", alt: "Dashtic logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon1, className: "header-brand-img darkmobile-logo", alt: "Dashtic logo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex order-lg-2 ms-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", "data-bs-toggle": "search", className: "nav-link nav-link-lg d-md-none navsearch", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon search-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { className: "form-inline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-element mt-1 d-none d-lg-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "search", className: "form-control header-search", placeholder: "Search…", "aria-label": "Search", tabIndex: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn btn-primary-color", type: "button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon search-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown header-fullscreen ps-2 d-none d-lg-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "nav-link icon full-screen-link p-0", id: "fullscreen-button2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "header-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7,14 L5,14 L5,19 L10,19 L10,17 L7,17 L7,14 Z M5,10 L7,10 L7,7 L10,7 L10,5 L5,5 L5,10 Z M17,17 L14,17 L14,19 L19,19 L19,14 L17,14 L17,17 Z M14,5 L14,7 L17,7 L17,10 L19,10 L19,5 L14,5 Z" }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown ps-2 d-none d-lg-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownToggle, { color: "", className: "nav-link icon p-0", "data-bs-toggle": "dropdown", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { opacity: ".3", d: "M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pulse " })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-4", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 11V4H4v8.17l.59-.58.58-.59H6z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zM4.59 11.59l-.59.58V4h11v7H5.17l-.58.59z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-weight-bold", children: "Message Sent." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "3 hours ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-4", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 11l2.76-5H6.16l2.37 5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-weight-bold", children: " Order Placed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "5 hour ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-4", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 8h14V6H5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-weight-bold", children: " Event Started" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "45 mintues ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "#", className: "dropdown-item d-flex pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-4", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 13h5v7h-5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM2 4h18v5h2V4c0-1.11-.9-2-2-2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4zm9 2l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-weight-bold", children: "Your Admin launched" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "1 day ago" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " text-center p-2 border-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "", children: "View All Notifications" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownToggle, { color: "", className: "nav-link leading-none", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user16, alt: "img", className: "avatar avatar-md brround" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "dropdown-item text-center user pb-0 font-weight-bold", children: "John Thomson" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center user-semi-title", children: "App Developer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Profile" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { opacity: ".3", d: "M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.48,7.09 9.07,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.11,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.51,16.92 14.92,16.68 15.35,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.57,5.11 19.4,5.02 19.22,5.02 C19.16,5.02 19.1,5.03 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.89,5.03 4.83,5.02 4.77,5.02 C4.6,5.02 4.43,5.11 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.43,18.89 4.6,18.98 4.78,18.98 C4.84,18.98 4.9,18.97 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.11,18.97 19.17,18.98 19.23,18.98 C19.4,18.98 19.57,18.89 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 Z M17.45,11.27 C17.49,11.58 17.5,11.79 17.5,12 C17.5,12.21 17.48,12.43 17.45,12.73 L17.31,13.86 L18.2,14.56 L19.28,15.4 L18.58,16.61 L17.31,16.1 L16.27,15.68 L15.37,16.36 C14.94,16.68 14.53,16.92 14.12,17.09 L13.06,17.52 L12.9,18.65 L12.7,20 L11.3,20 L11.11,18.65 L10.95,17.52 L9.89,17.09 C9.46,16.91 9.06,16.68 8.66,16.38 L7.75,15.68 L6.69,16.11 L5.42,16.62 L4.72,15.41 L5.8,14.57 L6.69,13.87 L6.55,12.74 C6.52,12.43 6.5,12.2 6.5,12 C6.5,11.8 6.52,11.57 6.55,11.27 L6.69,10.14 L5.8,9.44 L4.72,8.6 L5.42,7.39 L6.69,7.9 L7.73,8.32 L8.63,7.64 C9.06,7.32 9.47,7.08 9.88,6.91 L10.94,6.48 L11.1,5.35 L11.3,4 L12.69,4 L12.88,5.35 L13.04,6.48 L14.1,6.91 C14.53,7.09 14.93,7.32 15.33,7.62 L16.24,8.32 L17.3,7.89 L18.57,7.38 L19.27,8.59 L18.2,9.44 L17.31,10.14 L17.45,11.27 Z M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Settings" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 11V4H4v8.17l.59-.58.58-.59H6z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zM4.59 11.59l-.59.58V4h11v7H5.17l-.58.59z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Messages" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item d-flex", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "header-icon me-3", x: "1008", y: "1248", viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", focusable: "false", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0zm0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 20h12V10H6v10zm2-6h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10zm-7-1h2v-3h3v-2h-3v-3h-2v3H8v2h3z" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Sign Out" })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }) })
  ] }) }) })
] });
Header.propTypes = {};
Header.defaultProps = {};
export {
  Header as default
};

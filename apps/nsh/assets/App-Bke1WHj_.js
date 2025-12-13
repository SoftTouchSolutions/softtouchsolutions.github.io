import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { S as SimpleBar } from "./index-DRCK5GEP.js";
import { l as localStorageBackUp, R as RtltoLtr, L as LtrtoRtl, a as LightTheme, d as dark, V as VerticalMenu, h as horizontal, H as HorizontalHoverMenu, b as LightMenu, C as ColorMenu, D as DarkMenu, c as Lightheader, e as Colorheader, f as Darkheader, g as Defaultbody, B as Bodystyle, F as FullWidth, i as Boxed, j as Fixed, S as Scrollable, r as resetData, k as dynamicBgTransparentBackground } from "./Switcherdata-YIYJ30vT.js";
import { R as Row, I as Input, L as Label, B as Button, u as useLocation, a as useNavigate, b as Link, F as Form, D as DropdownMenu, c as DropdownToggle, A as APIServices, d as useMenu, S as Swal, P as Provider_default, e as AuthProvider, M as MenuProvider, O as Outlet } from "./index-Drmsz9hA.js";
import "./firebase-CMXa_3X0.js";
import { u as useSidebarState, N as Navbar, l as logo, a as NavbarToggler, s as store, S as SidebarProvider, b as Sidebar, F as Footer, T as TabToTop } from "./store-DFqh3qej.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-ChYO2B-2.js";
import { C as Collapse } from "./Collapse-D9rzJkT9.js";
import { u as user16 } from "./16-Cj3VG8Ln.js";
import { l as logo1 } from "./logo1-BnyHkmZE.js";
import { f as favicon } from "./favicon-TrKW_Zmf.js";
import { E as EditProfileService, P as ProfileService } from "./editprofile-CWaPFwGl.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./data-CEwbOx7G.js";
import "./4-C6YgBNXp.js";
import "./2-D-V5ih7N.js";
import "./5-Bf8W3P_a.js";
function Switcher({ clickhandler }) {
  reactExports.useEffect(() => {
    localStorageBackUp();
  });
  function changePrimaryColor(value) {
    var _a;
    var userColor = value;
    localStorage.setItem("dashticPrimaryColor", userColor);
    localStorage.setItem("dashticprimaryHoverColor", userColor + 95);
    localStorage.setItem("dashticprimaryBorderColor", userColor);
    localStorage.setItem("dashticprimaryTransparent", userColor + 20);
    let html = (_a = document.querySelector("html")) == null ? void 0 : _a.style;
    html == null ? void 0 : html.setProperty(
      "--primary-bg-color",
      userColor
    );
    html == null ? void 0 : html.setProperty(
      "--primary-bg-hover",
      userColor + 95
    );
    html == null ? void 0 : html.setProperty(
      "--primary-bg-border",
      userColor
    );
  }
  function BgBackground(res) {
    var _a, _b;
    var userColor = res;
    (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("dark-mode");
    (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("light-mode");
    localStorage.setItem("DashticBGswitcher", userColor);
    const dynamicBackgroundColor = document.querySelectorAll(
      "input.background-primary-light"
    );
    dynamicBgTransparentBackground(
      dynamicBackgroundColor,
      userColor
    );
    localStorage.removeItem("dashticlighttheme");
    localStorage.setItem("dashticdark", "true");
    let mySwitch9 = document.querySelector("#myonoffswitch2");
    mySwitch9.checked = true;
    let mySwitch5 = document.querySelector("#myonoffswitch5");
    mySwitch5.checked = true;
    let mySwitch8 = document.querySelector("#myonoffswitch8");
    mySwitch8.checked = true;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "switcher-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "demo_changer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form_holder sidebar-right1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleBar, { style: { height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "predefined_styles", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "LTR AND RTL VERSIONS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "LTR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch25", id: "myonoffswitch54", className: "onoffswitch2-checkbox", defaultChecked: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => RtltoLtr(), htmlFor: "myonoffswitch54", className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "RTL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch25", id: "myonoffswitch55", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => LtrtoRtl(), htmlFor: "myonoffswitch55", className: "onoffswitch2-label" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Theme Style" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Light Theme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch1", id: "myonoffswitch1", className: "onoffswitch2-checkbox", defaultChecked: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => LightTheme(), htmlFor: "myonoffswitch1", className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Dark Theme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch1", id: "myonoffswitch2", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => dark(), htmlFor: "myonoffswitch2", className: "onoffswitch2-label" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft switcher-nav", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Navigation Style" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Vertical Menu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch15", id: "myonoffswitch34", className: "onoffswitch2-checkbox", defaultChecked: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => VerticalMenu(), htmlFor: "myonoffswitch34", className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Horizantal Click Menu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch15", id: "myonoffswitch35", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: horizontal, htmlFor: "myonoffswitch35", className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Horizantal Hover Menu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch15", id: "myonoffswitch111", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => HorizontalHoverMenu(), htmlFor: "myonoffswitch111", className: "onoffswitch2-label" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Theme Primary Color" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Primary Color" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input-color-picker color-primary-light",
              defaultValue: "#4454c3",
              id: "colorID",
              onChange: (e) => changePrimaryColor(e.target.value),
              type: "color",
              "data-id": "bg-color",
              "data-id1": "bg-hover",
              "data-id2": "bg-border",
              name: "lightPrimary"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Background Color" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input-bg-picker background-primary-light",
              defaultValue: "#373c56",
              id: "bgID",
              onChange: ((res) => {
                BgBackground(res.target.value);
              }),
              type: "color",
              "data-id3": "body",
              "data-id4": "theme",
              name: "BackgroundPrimary"
            }
          ) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft leftmenu-styles", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Menu Styles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Light Menu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch2", id: "myonoffswitch3", className: "onoffswitch2-checkbox", defaultChecked: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => LightMenu(), htmlFor: "myonoffswitch3", className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Color Menu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch2", id: "myonoffswitch4", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => ColorMenu(), htmlFor: "myonoffswitch4", className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Dark Menu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch2", id: "myonoffswitch5", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => DarkMenu(), htmlFor: "myonoffswitch5", className: "onoffswitch2-label" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft header-styles", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Header Styles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Light Header" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch3", id: "myonoffswitch6", className: "onoffswitch2-checkbox", defaultChecked: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => Lightheader(), htmlFor: "myonoffswitch6", className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Color Header" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch3", id: "myonoffswitch7", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => Colorheader(), htmlFor: "myonoffswitch7", className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Dark Header" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch3", id: "myonoffswitch8", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => Darkheader(), htmlFor: "myonoffswitch8", className: "onoffswitch2-label" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Skin Modes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Default Body" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "onoffswitch2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitchBody", id: "myonoffswitch07", className: "onoffswitch2-checkbox", defaultChecked: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch07", onClick: () => Defaultbody(), className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Body Style1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "onoffswitch2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitchBody", id: "myonoffswitch06", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch06", onClick: () => Bodystyle(), className: "onoffswitch2-label" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Layout Width Styles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Full Width" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch4", id: "myonoffswitch9", className: "onoffswitch2-checkbox", defaultChecked: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => FullWidth(), htmlFor: "myonoffswitch9", className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Boxed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch4", id: "myonoffswitch10", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => Boxed(), htmlFor: "myonoffswitch10", className: "onoffswitch2-label" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft switcher-layout", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Layout Positions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Fixed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch5", id: "myonoffswitch11", className: "onoffswitch2-checkbox", defaultChecked: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => Fixed(), htmlFor: "myonoffswitch11", className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Scrollable" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch5", id: "myonoffswitch12", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { onClick: () => Scrollable(), htmlFor: "myonoffswitch12", className: "onoffswitch2-label" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Reset All Styles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "switch_section my-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "",
          className: "btn btn-danger btn-block",
          onClick: () => {
            localStorage.clear();
            let htm = document.querySelector("html");
            htm.style = "";
            resetData();
          },
          type: "button",
          children: "Reset All"
        }
      ) }) })
    ] })
  ] }) }) }) }) }) });
}
const Header = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [searchval, setsearchval] = reactExports.useState("Type something");
  const [show2, setShow2] = reactExports.useState(false);
  const [NavData, setNavData] = reactExports.useState([]);
  const [searchcolor, setsearchcolor] = reactExports.useState("text-dark");
  const [show1, setShow1] = reactExports.useState(false);
  const [InputValue, setInputValue] = reactExports.useState("");
  const [userData, setUserData] = reactExports.useState({
    staff_name: "User",
    userType: "Employee",
    email: "",
    profilePicture: user16
  });
  const { collapseSidebar, expandSidebar } = useSidebarState();
  reactExports.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await APIServices.getCurrentUser();
        if (response && response.data) {
          setUserData({
            staff_name: response.data.staff_name || response.data.email || "User",
            userType: response.data.userType || "Employee",
            email: response.data.email || "",
            profilePicture: response.data.profile_picture ? `http://localhost:8000${response.data.profile_picture}?t=${(/* @__PURE__ */ new Date()).getTime()}` : user16
          });
        }
      } catch (error) {
        console.error("Error fetching user data for header:", error);
      }
    };
    fetchUserData();
  }, []);
  const handleLogout = async () => {
    try {
      await APIServices.logout();
      Swal.fire({
        title: "Logged Out",
        text: "You have been successfully logged out",
        icon: "success",
        timer: 2e3,
        showConfirmButton: false
      }).then(() => {
        let path = "/login";
        navigate(path);
      });
    } catch (error) {
      console.error("Error during logout:", error);
      Swal.fire("Error", "Failed to logout. Please try again.", "error");
    }
  };
  const responsivesearch = () => {
    document.querySelector("body").classList.add("search-show");
  };
  let myfunction = (inputvalue) => {
    if (document.querySelector(".search-result") != null) {
      document.querySelector(".search-result").classList.remove("d-none");
    }
    let i = [];
    let allElement2 = [];
    const { menuItems } = useMenu();
    menuItems.map((mainlevel) => {
      if (mainlevel.Items) {
        mainlevel.Items.map((sublevel) => {
          setShow1(true);
          if (sublevel.children) {
            sublevel.children.map((sublevel1) => {
              i.push(sublevel1);
              if (sublevel1.children) {
                sublevel1.children.map((sublevel2) => {
                  i.push(sublevel2);
                  return sublevel2;
                });
              }
              return sublevel1;
            });
          }
          return sublevel;
        });
      }
      return mainlevel;
    });
    for (let allElement of i) {
      if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
        if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
          setShow2(true);
          allElement2.push(allElement);
        }
      }
    }
    if (!allElement2.length || inputvalue === "") {
      if (inputvalue === "") {
        setShow2(false);
        setsearchval("Type something");
        setsearchcolor("text-dark");
      }
      if (!allElement2.length) {
        setShow2(false);
        setsearchcolor("text-danger");
        setsearchval("There is no component with this name");
      }
    }
    setNavData(allElement2);
  };
  let location = useLocation();
  const [faces6, setImage] = reactExports.useState(user16);
  const [outPut, setoutPut] = reactExports.useState(EditProfileService.returnId());
  reactExports.useEffect(() => {
    if (ProfileService.returnImage() != void 0) {
      setImage(ProfileService.returnImage());
    }
    setoutPut(EditProfileService.returnId());
  }, [location]);
  let navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { className: "app-header header top-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fluid main-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown side-nav", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-sidebar__toggle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "open-toggle", to: "#", onClick: () => {
        document.querySelector("body").classList.add("sidenav-toggled");
        collapseSidebar();
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          className: "header-icon",
          xmlns: "http://www.w3.org/2000/svg",
          height: "24",
          viewBox: "0 0 24 24",
          width: "24",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "close-toggle", to: "#", onClick: () => {
        document.querySelector("body").classList.remove("sidenav-toggled");
        expandSidebar();
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          className: "header-icon",
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "header-brand", to: "/dashboard/dashboard01", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: logo,
          className: "header-brand-img desktop-lgo",
          alt: "Dashtic logo"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: logo1,
          className: "header-brand-img dark-logo",
          alt: "Dashtic logo"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: favicon,
          className: "header-brand-img mobile-logo",
          alt: "Dashtic logo"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex order-lg-2 ms-lg-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NavbarToggler,
        {
          onClick: toggle,
          className: "navbar-toggler navresponsive-toggler d-lg-none",
          type: "button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "navbar-toggler-icon fe fe-more-vertical " })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "navbar navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Collapse,
        {
          isOpen,
          navbar: true,
          className: "collapse navbar-collapse",
          id: "navbarSupportedContent-4",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "#",
                onClick: () => responsivesearch(),
                className: "nav-link nav-link-lg d-lg-none navsearch",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    className: "header-icon search-icon",
                    x: "1008",
                    y: "1248",
                    viewBox: "0 0 24 24",
                    height: "100%",
                    width: "100%",
                    preserveAspectRatio: "xMidYMid meet",
                    focusable: "false",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 me-md-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { className: "form-inline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-element", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "search",
                  className: "form-control header-search",
                  placeholder: "Search…",
                  "aria-label": "Search",
                  tabIndex: "1",
                  onChange: (ele) => {
                    myfunction(ele.target.value);
                    setInputValue(ele.target.value);
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "",
                  type: "button",
                  color: "none",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "header-icon search-icon",
                      x: "1008",
                      y: "1248",
                      viewBox: "0 0 24 24",
                      height: "100%",
                      width: "100%",
                      preserveAspectRatio: "xMidYMid meet",
                      focusable: "false",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                      ]
                    }
                  )
                }
              ),
              show1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-result p-absolute  border mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "search-items", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: " me-2 text-break", children: [
                  'Search result of " ',
                  InputValue,
                  ' "',
                  " "
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { as: "div", className: "", children: show2 ? NavData.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    className: "",
                    to: `${e.path}/`,
                    onClick: () => {
                      setShow1(false);
                    },
                    children: e.title
                  }
                ) }, Math.random())) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "b",
                  {
                    className: `${searchcolor} search-items-result`,
                    children: searchval
                  }
                ) })
              ] }) : ""
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledDropdown, { className: "dropdown header-notify", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow  animated", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                DropdownItem,
                {
                  href: `pages/email/emailinbox`,
                  className: "dropdown-item d-flex pb-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: "header-icon me-4",
                        x: "1008",
                        y: "1248",
                        viewBox: "0 0 24 24",
                        height: "100%",
                        width: "100%",
                        preserveAspectRatio: "xMidYMid meet",
                        focusable: "false"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-weight-bold", children: "Message Sent." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "3 hours ago" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                DropdownItem,
                {
                  href: `pages/email/emailinbox`,
                  className: "dropdown-item d-flex pb-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "svg",
                      {
                        className: "header-icon me-4",
                        x: "1008",
                        y: "1248",
                        viewBox: "0 0 24 24",
                        height: "100%",
                        width: "100%",
                        preserveAspectRatio: "xMidYMid meet",
                        focusable: "false",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              d: "M15.55 11l2.76-5H6.16l2.37 5z",
                              opacity: ".3"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-weight-bold", children: [
                        " ",
                        "Order Placed"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "5 hour ago" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                DropdownItem,
                {
                  href: `pages/email/emailinbox`,
                  className: "dropdown-item d-flex pb-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "svg",
                      {
                        className: "header-icon me-4",
                        x: "1008",
                        y: "1248",
                        viewBox: "0 0 24 24",
                        height: "100%",
                        width: "100%",
                        preserveAspectRatio: "xMidYMid meet",
                        focusable: "false",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 8h14V6H5z", opacity: ".3" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zM4.59 11.59l-.59.58V4h11v7H5.17l-.58.59z" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-weight-bold", children: [
                        " ",
                        "Event Started"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "45 mintues ago" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                DropdownItem,
                {
                  href: `pages/email/emailinbox`,
                  className: "dropdown-item d-flex pb-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "svg",
                      {
                        className: "header-icon me-4",
                        x: "1008",
                        y: "1248",
                        viewBox: "0 0 24 24",
                        height: "100%",
                        width: "100%",
                        preserveAspectRatio: "xMidYMid meet",
                        focusable: "false",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 13h5v7h-5z", opacity: ".3" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM2 4h18v5h2V4c0-1.11-.9-2-2-2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4zm9 2l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-weight-bold", children: "Admin launched" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-muted", children: "1 day ago" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " text-center p-2 border-top" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown profile-dropdown", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DropdownToggle,
                {
                  color: "",
                  href: "#",
                  className: "nav-link icon leading-none",
                  "data-bs-toggle": "dropdown",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: userData.profilePicture,
                      alt: "profile",
                      className: "avatar avatar-md brround"
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow animated", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DropdownItem,
                    {
                      tag: Link,
                      to: "/employee/profile",
                      className: "dropdown-item text-center user pb-0 font-weight-bold",
                      children: userData.staff_name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center user-semi-title", children: userData.userType }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  DropdownItem,
                  {
                    className: "dropdown-item d-flex",
                    href: `employee/profile`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "svg",
                        {
                          className: "header-icon me-3",
                          x: "1008",
                          y: "1248",
                          viewBox: "0 0 24 24",
                          height: "100%",
                          width: "100%",
                          preserveAspectRatio: "xMidYMid meet",
                          focusable: "false",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                                opacity: ".3"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Profile" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  DropdownItem,
                  {
                    className: "dropdown-item d-flex",
                    onClick: () => navigate("/Tools/Settings"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          className: "header-icon me-3",
                          x: "1008",
                          y: "1248",
                          viewBox: "0 0 24 24",
                          height: "100%",
                          width: "100%",
                          preserveAspectRatio: "xMidYMid meet",
                          focusable: "false",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              opacity: ".3",
                              d: "M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.48,7.09 9.07,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.11,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.51,16.92 14.92,16.68 15.35,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z M17.45,11.27 C17.49,11.58 17.5,11.79 17.5,12 C17.5,12.21 17.48,12.43 17.45,12.73 L17.31,13.86 L18.2,14.56 L19.28,15.4 L18.58,16.61 L17.31,16.1 L16.27,15.68 L15.37,16.36 C14.94,16.68 14.53,16.92 14.12,17.09 L13.06,17.52 L12.9,18.65 L12.7,20 L11.3,20 L11.11,18.65 L10.95,17.52 L9.89,17.09 C9.46,16.91 9.06,16.68 8.66,16.38 L7.75,15.68 L6.69,16.11 L5.42,16.62 L4.72,15.41 L5.8,14.57 L6.69,13.87 L6.55,12.74 C6.52,12.43 6.5,12.2 6.5,12 C6.5,11.8 6.52,11.57 6.55,11.27 L6.69,10.14 L5.8,9.44 L4.72,8.6 L5.42,7.39 L6.69,7.9 L7.73,8.32 L8.63,7.64 C9.06,7.32 9.47,7.08 9.88,6.91 L10.94,6.48 L11.1,5.35 L11.3,4 L12.69,4 L12.88,5.35 L13.04,6.48 L14.1,6.91 C14.53,7.09 14.93,7.32 15.33,7.62 L16.24,8.32 L17.3,7.89 L18.57,7.38 L19.27,8.59 L18.2,9.44 L17.31,10.14 L17.45,11.27 Z M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Settings" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  DropdownItem,
                  {
                    className: "dropdown-item",
                    onClick: () => navigate("/pages/email/emailinbox"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "svg",
                        {
                          className: "header-icon me-3",
                          x: "1008",
                          y: "1248",
                          viewBox: "0 0 24 24",
                          height: "100%",
                          width: "100%",
                          preserveAspectRatio: "xMidYMid meet",
                          focusable: "false",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                d: "M15 11V4H4v8.17l.59-.58.58-.59H6z",
                                opacity: ".3"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zM4.59 11.59l-.59.58V4h11v7H5.17l-.58.59z" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Messages" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  DropdownItem,
                  {
                    className: "dropdown-item d-flex",
                    onClick: handleLogout,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "svg",
                        {
                          className: "header-icon me-3",
                          x: "1008",
                          y: "1248",
                          viewBox: "0 0 24 24",
                          height: "100%",
                          width: "100%",
                          preserveAspectRatio: "xMidYMid meet",
                          focusable: "false",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
                                fill: "none"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                d: "M6 20h12V10H6v10zm2-6h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z",
                                opacity: ".3"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10zm-7-1h2v-3h3v-2h-3v-3h-2v3H8v2h3z" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Sign Out" })
                    ]
                  }
                )
              ] })
            ] })
          ] })
        }
      ) })
    ] })
  ] }) }) }) });
};
function App() {
  document.querySelector("body").classList.remove("page-style1", "bg-style", "error-page");
  document.querySelector("body").classList.add("main-body", "app", "sidebar-mini", "light-mode", "ltr");
  const headersearch = () => {
    document.querySelector("body").classList.remove("search-show");
    if (document.querySelector(".search-result")) {
      document.querySelector(".search-result").classList.add("d-none");
    }
    document.querySelector(".demo_changer").classList.remove("active");
    document.querySelector(".demo_changer").style.right = "-270px";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Provider_default, { store, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "horizontalMenucontainer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Switcher, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-main open", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "app-content main-content", onClick: () => headersearch(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "side-app", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fluid main-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabToTop, {})
  ] }) }) }) }) });
}
export {
  App as default
};

import { a as React, j as jsxRuntimeExports, r as reactExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, h as CardBody, I as Input, L as Label, B as Button, a as useNavigate, d as useMenu, b as Link, c as DropdownToggle, D as DropdownMenu, F as Form, A as APIServices, S as Swal, P as Provider_default } from "./index-CPwjB16p.js";
import { l as localStorageBackUp, R as RtltoLtr, L as LtrtoRtl, a as LightTheme, d as dark, V as VerticalMenu, h as horizontal, H as HorizontalHoverMenu, b as LightMenu, C as ColorMenu, D as DarkMenu, c as Lightheader, e as Colorheader, f as Darkheader, g as Defaultbody, B as Bodystyle, F as FullWidth, i as Boxed, j as Fixed, S as Scrollable, r as resetData, n as dynamicLightPrimaryColor, k as dynamicBgTransparentBackground } from "./Switcherdata-YIYJ30vT.js";
import { N as Navbar, l as logo, a as NavbarToggler, S as Sidebar, s as store, T as TabToTop, F as Footer } from "./store-C_NnPhCz.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-TRH6DnwV.js";
import { C as Collapse } from "./Collapse-H603jBmi.js";
import { u as user16 } from "./16-Cj3VG8Ln.js";
import { l as logo1 } from "./logo1-BnyHkmZE.js";
import { f as favicon } from "./favicon-TrKW_Zmf.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./index-DWkztd76.js";
import "./favicon1-IUYgMLTj.js";
import "./editprofile-CWaPFwGl.js";
import "./data-CEwbOx7G.js";
import "./4-C6YgBNXp.js";
import "./2-D-V5ih7N.js";
import "./5-Bf8W3P_a.js";
const Switcher = () => {
  React.useEffect(() => {
    localStorageBackUp();
  });
  function changePrimaryColor() {
    var userColor = document.getElementById("colorID").value;
    localStorage.setItem("dashticPrimaryColor", userColor);
    localStorage.setItem("dashticprimaryHoverColor", userColor + 95);
    localStorage.setItem("dashticprimaryBorderColor", userColor);
    localStorage.setItem("dashticprimaryTransparent", userColor + 20);
    const dynamicPrimaryLight = document.querySelectorAll(
      "input.color-primary-light"
    );
    dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);
  }
  function BgBackground() {
    var userColor = document.getElementById("bgID").value;
    document.querySelector("body").classList.add("dark-mode");
    document.querySelector("body").classList.remove("light-mode");
    const dynamicBackgroundColor = document.querySelectorAll(
      "input.background-primary-light"
    );
    dynamicBgTransparentBackground(
      dynamicBackgroundColor,
      userColor
    );
    localStorage.removeItem("dashticlighttheme");
    localStorage.setItem("dashticdark", true);
    let mySwitch9 = document.querySelector("#myonoffswitch2");
    mySwitch9.checked = true;
    let mySwitch5 = document.querySelector("#myonoffswitch5");
    mySwitch5.checked = true;
    let mySwitch8 = document.querySelector("#myonoffswitch8");
    mySwitch8.checked = true;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Switcher",
        home: "Home",
        name: "Pages",
        fonticonsname: "Switcher"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", className: "m-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "sidebar-right1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "predefined_styles", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "LTR AND RTL VERSIONS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "LTR" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch25", id: "myonoffswitch54", className: "onoffswitch2-checkbox", defaultChecked: "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch54", onClick: () => RtltoLtr(), className: "onoffswitch2-label" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "RTL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch25", id: "myonoffswitch55", className: "onoffswitch2-checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch55", onClick: () => LtrtoRtl(), className: "onoffswitch2-label" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch1", id: "myonoffswitch1", className: "onoffswitch2-checkbox", defaultChecked: "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch1", onClick: () => LightTheme(), className: "onoffswitch2-label" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Dark Theme" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch1", id: "myonoffswitch2", className: "onoffswitch2-checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch2", onClick: () => dark(), className: "onoffswitch2-label" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch15", id: "myonoffswitch34", className: "onoffswitch2-checkbox", defaultChecked: "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch34", onClick: () => VerticalMenu(), className: "onoffswitch2-label" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Horizantal Click Menu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch15", id: "myonoffswitch35", className: "onoffswitch2-checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch35", onClick: horizontal, className: "onoffswitch2-label" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Horizantal Hover Menu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch15", id: "myonoffswitch111", className: "onoffswitch2-checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch111", onClick: () => HorizontalHoverMenu(), className: "onoffswitch2-label" })
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
                className: " input-color-picker color-primary-light",
                defaultValue: "#4454c3",
                id: "colorID",
                onInput: (e) => changePrimaryColor(),
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
                onInput: (e) => BgBackground(),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch2", id: "myonoffswitch3", className: "onoffswitch2-checkbox", defaultChecked: "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch3", onClick: () => LightMenu(), className: "onoffswitch2-label" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Color Menu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch2", id: "myonoffswitch4", className: "onoffswitch2-checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch4", onClick: () => ColorMenu(), className: "onoffswitch2-label" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Dark Menu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch2", id: "myonoffswitch5", className: "onoffswitch2-checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch5", onClick: () => DarkMenu(), className: "onoffswitch2-label" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch3", id: "myonoffswitch6", className: "onoffswitch2-checkbox", defaultChecked: "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch6", onClick: () => Lightheader(), className: "onoffswitch2-label" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Color Header" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch3", id: "myonoffswitch7", className: "onoffswitch2-checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch7", onClick: () => Colorheader(), className: "onoffswitch2-label" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Dark Header" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch3", id: "myonoffswitch8", className: "onoffswitch2-checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch8", onClick: () => Darkheader(), className: "onoffswitch2-label" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitchBody", id: "myonoffswitch07", className: "onoffswitch2-checkbox", defaultChecked: "" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch4", id: "myonoffswitch9", className: "onoffswitch2-checkbox", defaultChecked: "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch9", onClick: () => FullWidth(), className: "onoffswitch2-label" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Boxed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch4", id: "myonoffswitch10", className: "onoffswitch2-checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch10", onClick: () => Boxed(), className: "onoffswitch2-label" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch5", id: "myonoffswitch11", className: "onoffswitch2-checkbox", defaultChecked: "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch11", onClick: () => Fixed(), className: "onoffswitch2-label" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Scrollable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", name: "onoffswitch5", id: "myonoffswitch12", className: "onoffswitch2-checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch12", onClick: () => Scrollable(), className: "onoffswitch2-label" })
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
              document.querySelector("html").style = "";
              resetData();
            },
            type: "button",
            children: "Reset All"
          }
        ) }) })
      ] })
    ] }) }) }) }) }) })
  ] });
};
Switcher.propTypes = {};
Switcher.defaultProps = {};
const Header2 = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [searchval, setsearchval] = reactExports.useState("Type something");
  const [show2, setShow2] = reactExports.useState(false);
  const [NavData, setNavData] = reactExports.useState([]);
  const [searchcolor, setsearchcolor] = reactExports.useState("text-dark");
  const [show1, setShow1] = reactExports.useState(false);
  const [InputValue, setInputValue] = reactExports.useState("");
  const { menuItems } = useMenu();
  const [userData, setUserData] = reactExports.useState({
    staff_name: "User",
    userType: "Employee",
    email: "",
    profilePicture: user16
  });
  reactExports.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await APIServices.getCurrentUser();
        if (response && response.data) {
          setUserData({
            staff_name: response.data.staff_name || response.data.email || "User",
            userType: response.data.userType || "Employee",
            email: response.data.email || "",
            profilePicture: response.data.profile_picture ? `http://localhost:8000${response.data.profile_picture}` : user16
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
      localStorage.removeItem("auth_token");
      sessionStorage.removeItem("auth_token");
      Swal.fire({
        title: "Logged Out",
        text: "You have been successfully logged out",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        navigate("login");
      });
    } catch (error) {
      console.error("Logout failed:", error);
      Swal.fire("Error", "Failed to logout. Please try again.", "error");
    }
  };
  function Fullscreen() {
    if (document.fullScreenElement && document.fullScreenElement === null || !document.mozFullScreen && !document.webkitIsFullScreen) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  const Darkmode = () => {
    if (document.querySelector(".app").classList.contains("dark-mode")) {
      document.querySelector(".app").classList.remove("dark-mode");
      let DarkMenu1 = document.querySelector("#myonoffswitch1");
      DarkMenu1.checked = true;
    } else {
      document.querySelector(".app").classList.add("dark-mode");
      let DarkMenu1 = document.querySelector("#myonoffswitch2");
      DarkMenu1.checked = true;
      let mySwitch5 = document.querySelector("#myonoffswitch5");
      mySwitch5.checked = true;
      let mySwitch8 = document.querySelector("#myonoffswitch8");
      mySwitch8.checked = true;
    }
  };
  let myfunction = (inputvalue) => {
    var _a;
    (_a = document.querySelector(".search-result")) == null ? void 0 : _a.classList.remove("d-none");
    let i = [];
    let allElement2 = [];
    menuItems.map((mainlevel) => {
      if (mainlevel.Items) {
        mainlevel.Items.map((sublevel) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { className: "app-header header top-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fluid main-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown side-nav", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-sidebar__toggle", "data-bs-toggle": "sidebar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "open-toggle", to: "#", onClick: () => headerIcon(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "close-toggle", to: "#", onClick: () => headerClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "header-brand", to: `${"/apps/nsh/"}dashboard/dashboard01`, children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown  header-option", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        DropdownToggle,
        {
          tag: "button",
          className: "nav-link icon p-0",
          "data-bs-toggle": "dropdown",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: "header-icon",
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
                    d: "M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.46,7.09 9.06,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.1,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.53,16.92 14.93,16.68 15.33,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "nav-span", children: [
              "Projects ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down ms-1 fs-18" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-start dropdown-menu-arrow animated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "App Design Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Web Design Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "App Development Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Back-End Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-start px-5 p-2 border-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", className: "", children: "View Projects" }) })
      ] })
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
                "data-bs-toggle": "search",
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
                  },
                  onClick: () => {
                    setShow1(true);
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "btn",
                  type: "button",
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
              show1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card search-result p-absolute w-100 card border mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: "card-title me-2 text-break", children: [
                  'Search result of " ',
                  InputValue,
                  ' "',
                  " "
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { as: "div", className: "list-group", children: show2 ? NavData.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    className: "list-group-item",
                    to: `${e.path}/`,
                    children: e.title
                  }
                ) }, Math.random())) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "b",
                  {
                    className: `${searchcolor} list-group-item`,
                    children: searchval
                  }
                ) })
              ] }) : ""
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown header-theme", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "#",
                className: "nav-link icon layout-setting",
                onClick: () => Darkmode(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dark-layout", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "header-icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      enableBackground: "new 0 0 24 24",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      width: "24px",
                      fill: "#000000",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { fill: "none", height: "24", width: "24" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", opacity: ".3", r: "3" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "light-layout", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "header-icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      enableBackground: "new 0 0 24 24",
                      height: "24px",
                      viewBox: "0 0 24 24",
                      width: "24px",
                      fill: "#000000",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { fill: "none", height: "24", width: "24" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27 C17.45,17.19,14.93,19,12,19c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51zM12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z" })
                      ]
                    }
                  ) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown header-fullscreen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "#",
                className: "nav-link icon full-screen-link",
                id: "fullscreen-button",
                onClick: () => Fullscreen(),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "header-icon",
                    x: "1008",
                    y: "1248",
                    viewBox: "0 0 24 24",
                    height: "100%",
                    width: "100%",
                    preserveAspectRatio: "xMidYMid meet",
                    focusable: "false",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7,14 L5,14 L5,19 L10,19 L10,17 L7,17 L7,14 Z M5,10 L7,10 L7,7 L10,7 L10,5 L5,5 L5,10 Z M17,17 L14,17 L14,19 L19,19 L19,14 L17,14 L17,17 Z M14,5 L14,7 L17,7 L17,10 L19,10 L19,5 L14,5 Z" })
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "dropdown header-notify", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                DropdownToggle,
                {
                  className: "nav-link icon",
                  color: "",
                  "data-bs-toggle": "dropdown",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "svg",
                      {
                        className: "header-icon",
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
                              opacity: ".3",
                              d: "M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pulse " })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow  animated", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  DropdownItem,
                  {
                    href: "email-inbox.html",
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
                    href: "email-inbox.html",
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
                    href: "email-inbox.html",
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
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z" })
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
                    href: "email-inbox.html",
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " text-center p-2 border-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "email-inbox.html", className: "", children: "View All Notifications" }) })
              ] })
            ] }),
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
                    tag: Link,
                    to: "/employee/profile",
                    className: "dropdown-item d-flex",
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
                    tag: Link,
                    to: "/Tools/Settings",
                    className: "dropdown-item d-flex",
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
                              d: "M12,12c2.21,0 4,-1.79 4,-4c0,-2.21 -1.79,-4 -4,-4s-4,1.79 -4,4C8,10.21 9.79,12 12,12zM12,14c-2.67,0 -8,1.34 -8,4v2h16v-2C20,15.34 14.67,14 12,14z M12.5,9.9c0,0.1-0.1,0.1-0.1,0.1h-0.8c-0.1,0-0.1-0.1-0.1-0.1V6.5c0-0.1,0.1-0.1,0.1-0.1h0.8c0.1,0,0.1,0.1,0.1,0.1V9.9z M7.6,12.2h8.9c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5H7.6c-0.3,0-0.5,0.2-0.5,0.5S7.3,12.2,7.6,12.2z M7.6,14.6h8.9c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5H7.6c-0.3,0-0.5,0.2-0.5,0.5S7.3,14.6,7.6,14.6z"
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
                    className: "dropdown-item d-md-none d-flex",
                    tag: Link,
                    to: "/employee/profile",
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
                              d: "M12,12c2.21,0 4,-1.79 4,-4c0,-2.21 -1.79,-4 -4,-4s-4,1.79 -4,4C8,10.21 9.79,12 12,12zM12,14c-2.67,0 -8,1.34 -8,4v2h16v-2C20,15.34 14.67,14 12,14z M12.5,9.9c0,0.1-0.1,0.1-0.1,0.1h-0.8c-0.1,0-0.1-0.1-0.1-0.1V6.5c0-0.1,0.1-0.1,0.1-0.1h0.8c0.1,0,0.1,0.1,0.1,0.1V9.9z M7.6,12.2h8.9c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5H7.6c-0.3,0-0.5,0.2-0.5,0.5S7.3,12.2,7.6,12.2z M7.6,14.6h8.9c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5H7.6c-0.3,0-0.5,0.2-0.5,0.5S7.3,14.6,7.6,14.6z"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Profile" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  DropdownItem,
                  {
                    className: "dropdown-item d-flex",
                    tag: Link,
                    to: "/",
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
                                opacity: "0.3",
                                d: "M12,10.9c-0.1,0-0.2,0-0.2-0.1L3.5,6.1C3.4,6,3.3,5.8,3.3,5.6c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4S20.6,6,20.5,6.1l-8.2,4.7C12.2,10.8,12.1,10.9,12,10.9z M21.8,19.1c0,0.1-0.1,0.2-0.2,0.3l-8.8,5.1      c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0l-8.8-5.1c-0.1-0.1-0.2-0.2-0.2-0.3V6.4c0-0.1,0.1-0.2,0.2-0.3l8.8-5.1c0.1,0,0.1-0.1,0.2-0.1      c0.1,0,0.1,0,0.2,0.1l8.8,5.1c0.1,0.1,0.2,0.2,0.2,0.3V19.1z"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.4,6h-0.8c-0.3,0-0.6,0.2-0.6,0.5v3.5c0,0.3,0.3,0.5,0.6,0.5h0.8c0.3,0,0.6-0.2,0.6-0.5V6.5C13,6.2,12.7,6,12.4,6z      M12.5,9.9c0,0.1-0.1,0.1-0.1,0.1h-0.8c-0.1,0-0.1-0.1-0.1-0.1V6.5c0-0.1,0.1-0.1,0.1-0.1h0.8c0.1,0,0.1,0.1,0.1,0.1V9.9z" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7.6,12.2h8.9c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5H7.6c-0.3,0-0.5,0.2-0.5,0.5S7.3,12.2,7.6,12.2z" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7.6,14.6h8.9c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5H7.6c-0.3,0-0.5,0.2-0.5,0.5S7.3,14.6,7.6,14.6z" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "My Dashboard" })
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
function Switcherapp() {
  document.querySelector("body").classList.remove("page-style1", "error-page");
  document.querySelector("body").classList.add("main-body", "app", "sidebar-mini", "light-mode", "ltr");
  const headersearch = () => {
    if (document.querySelector(".search-result")) {
      document.querySelector(".search-result").classList.add("d-none");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "horizontalMenucontainer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-main open", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header2, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "app-sidebar__overlay", "data-bs-toggle": "sidebar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "app-content main-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "side-app", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fluid main-container", onClick: () => headersearch(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Provider_default, { store, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switcher, {}) }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabToTop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
export {
  Switcherapp as default
};

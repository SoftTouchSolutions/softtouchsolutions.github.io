import { r as reactExports, j as jsxRuntimeExports, a as React } from "./mui-6YGer9Nu.js";
import { R as Row, L as Label, B as Button, O as Outlet } from "./index-Drmsz9hA.js";
import { m as checkHoriMenu, s as switcherArrowFn } from "./Switcherdata-YIYJ30vT.js";
import { S as SimpleBar } from "./index-DRCK5GEP.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const LtrtoRtl = () => {
  var _a, _b, _c;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("rtl");
  (_b = document.querySelector("html[lang=en]")) == null ? void 0 : _b.setAttribute("dir", "rtl");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("ltr");
  localStorage.setItem("dashticrtl", "true");
  localStorage.removeItem("dashticltr");
};
const RtltoLtr = () => {
  var _a, _b, _c;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("ltr");
  (_b = document.querySelector("html[lang=en]")) == null ? void 0 : _b.setAttribute("dir", "ltr");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("rtl");
  localStorage.setItem("dashticltr", "true");
  localStorage.removeItem("dashticrtl");
};
const LightTheme = () => {
  var _a, _b;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("light-mode");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("dark-mode");
  let htmm = document.querySelector("html");
  htmm.style = "";
  localStorage.removeItem("dashticdark");
  localStorage.setItem("dashticlighttheme", "true");
  localStorage.removeItem("");
};
const dark = () => {
  var _a, _b;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("dark-mode");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("light-mode");
  let htmmm = document.querySelector("html");
  htmmm.style = "";
  localStorage.removeItem("dashticlighttheme");
  localStorage.setItem("dashticdark", "true");
};
function localStorageBackUp() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
  let html = (_a = document.querySelector("html")) == null ? void 0 : _a.style;
  let body = document.querySelector("body");
  if (localStorage.getItem("dashticPrimaryColor") !== null) {
    body == null ? void 0 : body.classList.add("light-mode");
    let mySwitch5 = document.getElementById("myonoffswitch1");
    mySwitch5.checked = true;
    html == null ? void 0 : html.setProperty(
      "--primary-bg-color",
      localStorage.getItem("dashticPrimaryColor")
    );
    html == null ? void 0 : html.setProperty(
      "--primary-bg-hover",
      localStorage.getItem("dashticprimaryHoverColor")
    );
    html == null ? void 0 : html.setProperty(
      "--primary-bg-border",
      localStorage.getItem("dashticprimaryBorderColor")
    );
  }
  if (localStorage.getItem("dashticdarkPrimaryColor") !== null) {
    body == null ? void 0 : body.classList.add("dark-mode");
    let mySwitch6 = document.getElementById("myonoffswitch2");
    mySwitch6.checked = true;
    html == null ? void 0 : html.setProperty(
      "--primary-bg-color",
      localStorage.getItem("dashticdarkPrimaryColor")
    );
    html == null ? void 0 : html.setProperty(
      "--primary-bg-hover",
      localStorage.getItem("dashticdarkPrimaryColor")
    );
    html == null ? void 0 : html.setProperty(
      "--primary-bg-border",
      localStorage.getItem("dashticdarkPrimaryColor")
    );
  }
  if (localStorage.dashticrtl) {
    (_b = document.querySelector("body")) == null ? void 0 : _b.classList.add("rtl");
    (_c = document.querySelector("html[lang=en]")) == null ? void 0 : _c.setAttribute("dir", "rtl");
    let steel = document.getElementById("style");
    if (steel) {
      steel.setAttribute("href");
    }
    (_d = document.querySelector("body")) == null ? void 0 : _d.classList.remove("ltr");
    let mySwitch7 = document.querySelector("#myonoffswitch55");
    mySwitch7.checked = true;
  }
  if (localStorage.dashtichorizontal) {
    (_e = document.querySelector(".app-header")) == null ? void 0 : _e.classList.add("hor-header");
    (_f = document.querySelector("body")) == null ? void 0 : _f.classList.remove("sidebar-mini");
    (_g = document.querySelector(".app-header")) == null ? void 0 : _g.classList.remove("side-header");
    (_h = document.querySelector(".main-content")) == null ? void 0 : _h.classList.remove("app-content");
    (_i = document.querySelector(".main-container")) == null ? void 0 : _i.classList.remove("container-fluid");
    (_j = document.querySelector("body")) == null ? void 0 : _j.classList.remove("sidenav-toggled");
    (_k = document.querySelector("body")) == null ? void 0 : _k.classList.remove("horizontal-hover");
    (_l = document.querySelector("body")) == null ? void 0 : _l.classList.add("horizontal");
    (_m = document.querySelector(".main-container")) == null ? void 0 : _m.classList.add("container");
    (_n = document.querySelector(".main-sidemenu")) == null ? void 0 : _n.classList.add("container");
    (_o = document.querySelector(".main-content")) == null ? void 0 : _o.classList.add("horizontal-content");
    (_p = document.querySelector(".app-sidebar")) == null ? void 0 : _p.classList.add("horizontal-main");
    (_q = document.querySelector(".side-app")) == null ? void 0 : _q.classList.add("container");
    let hori = document.querySelector(".horizontal .side-menu");
    hori.style.flexWrap = "nowrap";
    let mySwitch8 = document.querySelector("#myonoffswitch35");
    mySwitch8.checked = true;
    checkHoriMenu();
    switcherArrowFn();
  }
  if (localStorage.dashtichorizontalHover) {
    (_r = document.querySelector("body")) == null ? void 0 : _r.classList.add("horizontal-hover");
    (_s = document.querySelector("body")) == null ? void 0 : _s.classList.add("horizontal");
    (_t = document.querySelector(".main-content")) == null ? void 0 : _t.classList.add("horizontal-content");
    (_u = document.querySelector(".main-container")) == null ? void 0 : _u.classList.add("container");
    (_v = document.querySelector(".app-header")) == null ? void 0 : _v.classList.add("hor-header");
    (_w = document.querySelector(".app-sidebar")) == null ? void 0 : _w.classList.add("horizontal-main");
    (_x = document.querySelector(".main-sidemenu")) == null ? void 0 : _x.classList.add("container");
    (_y = document.querySelector(".side-app")) == null ? void 0 : _y.classList.add("container");
    (_z = document.querySelector("#slide-left")) == null ? void 0 : _z.classList.remove("d-none");
    (_A = document.querySelector("#slide-right")) == null ? void 0 : _A.classList.remove("d-none");
    (_B = document.querySelector(".main-content")) == null ? void 0 : _B.classList.remove("app-content");
    (_C = document.querySelector(".main-container")) == null ? void 0 : _C.classList.remove("container-fluid");
    (_D = document.querySelector("body")) == null ? void 0 : _D.classList.remove("sidebar-mini");
    (_E = document.querySelector("body")) == null ? void 0 : _E.classList.remove("sidenav-toggled");
    let muSwitch9 = document.querySelector("#myonoffswitch111");
    muSwitch9.checked = true;
    (_F = document.querySelector(".horizontal-hover .side-menu")) == null ? void 0 : _F.classList.add("flex-nowrap");
    let li = document.querySelectorAll(".side-menu li");
    li.forEach((e, i) => {
      if (e.classList.contains("is-expaned")) {
        let ele = [...e.children];
        ele.forEach((el, i2) => {
          el.classList.remove("active");
          if (el.classList.contains("slide-menu")) {
            el.style = "";
            el.style.display = "none";
          }
        });
        e.classList.remove("is-expaned");
      }
    });
    checkHoriMenu();
    switcherArrowFn();
  }
  if (localStorage.dashticdark) {
    let mySwitch9 = document.querySelector("#myonoffswitch2");
    mySwitch9.checked = true;
    dark();
  }
  if (localStorage.dashticlighttheme) {
    let mySwitch10 = document.querySelector("#myonoffswitch1");
    mySwitch10.checked = true;
    LightTheme();
  }
  if (localStorage.DashticcustomBGcolor) {
    const dynamicBackgroundColor = document.querySelectorAll(
      "input.background-primary-light"
    );
    dynamicBgTransparentBackground(
      dynamicBackgroundColor,
      localStorage.DashticcustomBGcolor
    );
  }
}
function handleThemeUpdate(cssVars) {
  const root = document.querySelector(":root");
  const keys = Object.keys(cssVars);
  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
function dynamicBgTransparentBackground(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName1 = `--dark-${item.getAttribute("data-id3")}`;
    const cssPropName2 = `--dark-${item.getAttribute("data-id4")}`;
    handleThemeUpdate({
      [cssPropName1]: color,
      [cssPropName2]: color
    });
  });
}
function resetData() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  let data1 = document.querySelector("#myonoffswitch1");
  data1.checked = true;
  let data2 = document.querySelector("#myonoffswitch11");
  if (data2) {
    data2.checked = true;
  }
  let data3 = document.querySelector("#myonoffswitch3");
  if (data3) {
    data3.checked = true;
  }
  let data4 = document.querySelector("#myonoffswitch6");
  if (data4) {
    data4.checked = true;
  }
  let data5 = document.querySelector("#myonoffswitch9");
  if (data5) {
    data5.checked = true;
  }
  let data6 = document.querySelector("#myonoffswitch54");
  if (data6) {
    data6.checked = true;
  }
  let data7 = document.querySelector("#myonoffswitch34");
  if (data7) {
    data7.checked = true;
  }
  let data8 = document.querySelector("#myonoffswitch111");
  if (data8) {
    data8.checked = false;
  }
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("dark-mode");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("dark-menu");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("color-menu");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.remove("gradient-menu");
  (_e = document.querySelector("body")) == null ? void 0 : _e.classList.remove("dark-header");
  (_f = document.querySelector("body")) == null ? void 0 : _f.classList.remove("color-header");
  (_g = document.querySelector("body")) == null ? void 0 : _g.classList.remove("gradient-header");
  (_h = document.querySelector("body")) == null ? void 0 : _h.classList.remove("layout-boxed");
  (_i = document.querySelector("body")) == null ? void 0 : _i.classList.remove("scrollable-layout");
  (_j = document.querySelector("body")) == null ? void 0 : _j.classList.add("sidebar-mini");
  (_k = document.querySelector(".app-header")) == null ? void 0 : _k.classList.add("side-header");
  (_l = document.querySelector(".main-content")) == null ? void 0 : _l.classList.add("app-content");
  (_m = document.querySelector(".main-container")) == null ? void 0 : _m.classList.add("container-fluid");
  (_n = document.querySelector("body")) == null ? void 0 : _n.classList.remove("horizontal");
  (_o = document.querySelector("body")) == null ? void 0 : _o.classList.remove("horizontal-hover");
  (_p = document.querySelector(".app-sidebar")) == null ? void 0 : _p.classList.remove("horizontal-main");
  (_q = document.querySelector(".app-header")) == null ? void 0 : _q.classList.remove("hor-header");
  (_r = document.querySelector(".main-sidemenu")) == null ? void 0 : _r.classList.remove("container");
  (_s = document.querySelector(".main-container")) == null ? void 0 : _s.classList.remove("container");
  (_t = document.querySelector(".side-app")) == null ? void 0 : _t.classList.remove("container");
  (_u = document.querySelector(".main-content")) == null ? void 0 : _u.classList.remove("horizontal-content");
  (_v = document.querySelector("body")) == null ? void 0 : _v.classList.add("ltr");
  (_w = document.querySelector("html[lang=en]")) == null ? void 0 : _w.setAttribute("dir", "ltr");
  (_x = document.querySelector("body")) == null ? void 0 : _x.classList.remove("rtl");
}
function Custompagesswitcher({ clickhandler }) {
  reactExports.useEffect(() => {
    localStorageBackUp();
  });
  function changePrimaryColor(value) {
    var _a;
    console.log(value);
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
    localStorage.setItem("DashticcustomBGcolor", userColor);
    const dynamicBackgroundColor = document.querySelectorAll(
      "input.background-primary-light"
    );
    dynamicBgTransparentBackground(
      dynamicBackgroundColor,
      userColor
    );
    localStorage.removeItem("dashticlighttheme");
    localStorage.setItem("dashticdark", "true");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "switcher-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "demo_changer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form_holder sidebar-right1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleBar, { style: { height: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "predefined_styles", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "LTR AND RTL VERSIONS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "LTR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "onoffswitch25", id: "myonoffswitch54", className: "onoffswitch2-checkbox", defaultChecked: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch54", onClick: () => RtltoLtr(), className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "RTL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "onoffswitch25", id: "myonoffswitch55", className: "onoffswitch2-checkbox" }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "onoffswitch1", id: "myonoffswitch1", className: "onoffswitch2-checkbox", defaultChecked: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch1", onClick: () => LightTheme(), className: "onoffswitch2-label" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "switch-toggle d-flex mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-auto", children: "Dark Theme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "onoffswitch2 my-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "onoffswitch1", id: "myonoffswitch2", className: "onoffswitch2-checkbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "myonoffswitch2", onClick: () => dark(), className: "onoffswitch2-label" })
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swichermainleft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Reset All Styles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skin-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "switch_section my-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "",
          className: "btn btn-danger btn-block",
          onClick: () => {
            localStorage.clear();
            let htmm = document.querySelector("html");
            htmm.style = "";
            resetData();
          },
          type: "button",
          children: "Reset All"
        }
      ) }) })
    ] })
  ] }) }) }) }) }) }) });
}
function Custompages() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Custompagesswitcher, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
export {
  Custompages as default
};

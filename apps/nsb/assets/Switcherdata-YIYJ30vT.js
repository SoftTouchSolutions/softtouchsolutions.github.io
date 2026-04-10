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
const Defaultbody = () => {
  var _a, _b;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("body-default");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("body-style1");
  localStorage.setItem("dashticdefaultbody", "true");
  localStorage.removeItem("dashticbodystyle1");
  let myonoffswitch07 = document.querySelector("#myonoffswitch07");
  myonoffswitch07.checked = true;
};
const Bodystyle = () => {
  var _a, _b;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("body-style1");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("body-default");
  localStorage.setItem("dashticbodystyle1", "true");
  localStorage.removeItem("dashticdefaultbody");
  let myonoffswitch06 = document.querySelector("#myonoffswitch06");
  myonoffswitch06.checked = true;
};
const Lightheader = () => {
  var _a, _b, _c, _d;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("color-header");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("gradient-header");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("dark-header");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.add("light-header");
  localStorage.setItem("dashticlightheader", "true");
  localStorage.removeItem("dashticcolorheader");
  localStorage.removeItem("dashticdarkheader");
  localStorage.removeItem("dashticgradientheader");
  let myonoffswitch6 = document.querySelector("#myonoffswitch6");
  myonoffswitch6.checked = true;
};
const Colorheader = () => {
  var _a, _b, _c, _d;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("gradient-header");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("dark-header");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("light-header");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.add("color-header");
  localStorage.removeItem("dashticlightheader");
  localStorage.setItem("dashticcolorheader", "true");
  localStorage.removeItem("dashticdarkheader");
  localStorage.removeItem("dashticgradientheader");
  let myonoffswitch7 = document.querySelector("#myonoffswitch7");
  myonoffswitch7.checked = true;
};
const gradientheader = () => {
  var _a, _b, _c, _d;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("color-header");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("dark-header");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("light-header");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.add("gradient-header");
  localStorage.removeItem("dashticlightheader");
  localStorage.removeItem("dashticcolorheader");
  localStorage.removeItem("dashticdarkheader");
  localStorage.setItem("dashticgradientheader", "true");
};
const Darkheader = () => {
  var _a, _b, _c, _d;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("color-header");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("gradient-header");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("light-header");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.add("dark-header");
  localStorage.removeItem("dashticlightheader");
  localStorage.removeItem("dashticcolorheader");
  localStorage.setItem("dashticdarkheader", "true");
  localStorage.removeItem("dashticgradientheader");
  let myonoffswitch8 = document.querySelector("#myonoffswitch8");
  myonoffswitch8.checked = true;
};
const LightMenu = () => {
  var _a, _b, _c, _d;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("color-menu");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("dark-menu");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("gradient-menu");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.add("light-menu");
  localStorage.setItem("dashticlightmenu", "true");
  localStorage.removeItem("dashticcolormenu");
  localStorage.removeItem("dashticdarkmenu");
  localStorage.removeItem("dashticgradientmenu");
  let myonoffswitch3 = document.querySelector("#myonoffswitch3");
  myonoffswitch3.checked = true;
};
const ColorMenu = () => {
  var _a, _b, _c, _d;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("color-menu");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("light-menu");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("dark-menu");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.remove("gradient-menu");
  localStorage.setItem("dashticcolormenu", "true");
  localStorage.removeItem("dashticlightmenu");
  localStorage.removeItem("dashticdarkmenu");
  localStorage.removeItem("dashticgradientmenu");
  let myonoffswitch4 = document.querySelector("#myonoffswitch4");
  myonoffswitch4.checked = true;
};
const DarkMenu = () => {
  var _a, _b, _c, _d;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("light-menu");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("color-menu");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("gradient-menu");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.add("dark-menu");
  localStorage.setItem("dashticdarkmenu", "true");
  localStorage.removeItem("dashticlightmenu");
  localStorage.removeItem("dashticcolormenu");
  localStorage.removeItem("dashticgradientmenu");
  let myonoffswitch5 = document.querySelector("#myonoffswitch5");
  myonoffswitch5.checked = true;
};
const GradientMenu = () => {
  var _a, _b, _c, _d;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("light-menu");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("color-menu");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("dark-menu");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.add("gradient-menu");
  localStorage.setItem("dashticgradientmenu", "true");
  localStorage.removeItem("dashticlightmenu");
  localStorage.removeItem("dashticdarkmenu");
  localStorage.removeItem("dashticcolormenu");
};
const FullWidth = () => {
  var _a, _b;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("layout-boxed");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.add("layout-fullwidth");
  localStorage.setItem("dashticlayoutfullwidth", "true");
  localStorage.removeItem("dashticlayoutboxed");
  let myonoffswitch9 = document.querySelector("#myonoffswitch9");
  myonoffswitch9.checked = true;
};
const Boxed = () => {
  var _a, _b;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("layout-fullwidth");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.add("layout-boxed");
  localStorage.setItem("dashticlayoutboxed", "true");
  localStorage.removeItem("dashticlayoutfullwidth");
  let myonoffswitch10 = document.querySelector("#myonoffswitch10");
  myonoffswitch10.checked = true;
  checkHoriMenu();
  switcherArrowFn();
};
const Fixed = () => {
  var _a, _b;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("scrollable-layout");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.add("fixed-layout");
  localStorage.setItem("dashticfixedlayout", "true");
  localStorage.removeItem("dashticscrollablelayout");
  let myonoffswitch11 = document.querySelector("#myonoffswitch11");
  myonoffswitch11.checked = true;
};
const Scrollable = () => {
  var _a, _b;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("fixed-layout");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.add("scrollable-layout");
  localStorage.setItem("dashticscrollablelayout", "true");
  localStorage.removeItem("dashticfixedlayout");
  let myonoffswitch12 = document.querySelector("#myonoffswitch12");
  myonoffswitch12.checked = true;
};
const LightTheme = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("light-mode");
  let mySwitch3 = document.querySelector("#myonoffswitch3");
  mySwitch3.checked = true;
  let mySwitch4 = document.querySelector("#myonoffswitch6");
  mySwitch4.checked = true;
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("dark-mode");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("dark-header");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.remove("color-header");
  (_e = document.querySelector("body")) == null ? void 0 : _e.classList.remove("gradient-header");
  (_f = document.querySelector("body")) == null ? void 0 : _f.classList.remove("dark-menu");
  (_g = document.querySelector("body")) == null ? void 0 : _g.classList.remove("color-menu");
  (_h = document.querySelector("body")) == null ? void 0 : _h.classList.remove("gradient-menu");
  let htmm = document.querySelector("html");
  htmm.style = "";
  localStorage.removeItem("dashticdark");
  localStorage.setItem("dashticlighttheme", "true");
  localStorage.removeItem("");
};
const dark = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("dark-mode");
  let mySwitch = document.querySelector("#myonoffswitch8");
  mySwitch.checked = true;
  let mySwitch1 = document.querySelector("#myonoffswitch5");
  mySwitch1.checked = true;
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("light-mode");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("light-header");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.remove("color-header");
  (_e = document.querySelector("body")) == null ? void 0 : _e.classList.remove("gradient-header");
  (_f = document.querySelector("body")) == null ? void 0 : _f.classList.remove("light-menu");
  (_g = document.querySelector("body")) == null ? void 0 : _g.classList.remove("color-menu");
  (_h = document.querySelector("body")) == null ? void 0 : _h.classList.remove("gradient-menu");
  let htm = document.querySelector("html");
  htm.style = "";
  localStorage.removeItem("dashticlighttheme");
  localStorage.setItem("dashticdark", "true");
};
const VerticalMenu = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("sidebar-mini");
  (_b = document.querySelector(".app-header")) == null ? void 0 : _b.classList.add("side-header");
  (_c = document.querySelector(".main-content")) == null ? void 0 : _c.classList.add("app-content");
  (_d = document.querySelector(".main-container")) == null ? void 0 : _d.classList.add("container-fluid");
  (_e = document.querySelector(".side-app")) == null ? void 0 : _e.classList.remove("container");
  (_f = document.querySelector("body")) == null ? void 0 : _f.classList.remove("horizontal");
  (_g = document.querySelector("body")) == null ? void 0 : _g.classList.remove("horizontal-hover");
  (_h = document.querySelector(".app-sidebar")) == null ? void 0 : _h.classList.remove("horizontal-main");
  (_i = document.querySelector(".app-header")) == null ? void 0 : _i.classList.remove("hor-header");
  (_j = document.querySelector(".main-sidemenu")) == null ? void 0 : _j.classList.remove("container");
  (_k = document.querySelector(".main-container")) == null ? void 0 : _k.classList.remove("container");
  (_l = document.querySelector(".main-content")) == null ? void 0 : _l.classList.remove("horizontal-content");
  localStorage.setItem("dashticvertical", "true");
  localStorage.removeItem("dashtichorizontal");
  localStorage.removeItem("dashtichorizontalHover");
};
const horizontal = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  (_a = document.querySelector(".app-header")) == null ? void 0 : _a.classList.add("hor-header");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("sidebar-mini");
  (_c = document.querySelector(".app-header")) == null ? void 0 : _c.classList.remove("side-header");
  (_d = document.querySelector(".main-content")) == null ? void 0 : _d.classList.remove("app-content");
  (_e = document.querySelector(".main-container")) == null ? void 0 : _e.classList.remove("container-fluid");
  (_f = document.querySelector("body")) == null ? void 0 : _f.classList.remove("sidenav-toggled");
  (_g = document.querySelector("body")) == null ? void 0 : _g.classList.remove("horizontal-hover");
  (_h = document.querySelector("body")) == null ? void 0 : _h.classList.add("horizontal");
  (_i = document.querySelector(".main-container")) == null ? void 0 : _i.classList.add("container");
  (_j = document.querySelector(".main-sidemenu")) == null ? void 0 : _j.classList.add("container");
  (_k = document.querySelector(".main-content")) == null ? void 0 : _k.classList.add("horizontal-content");
  (_l = document.querySelector(".app-sidebar")) == null ? void 0 : _l.classList.add("horizontal-main");
  (_m = document.querySelector(".side-app")) == null ? void 0 : _m.classList.add("container");
  let horizontal2 = document.querySelector(".horizontal .side-menu");
  horizontal2.style.flexWrap = "nowrap";
  checkHoriMenu();
  switcherArrowFn();
  localStorage.removeItem("dashticvertical");
  localStorage.setItem("dashtichorizontal", "true");
  localStorage.removeItem("dashtichorizontalHover");
};
const HorizontalHoverMenu = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("horizontal-hover");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.add("horizontal");
  (_c = document.querySelector(".main-content")) == null ? void 0 : _c.classList.add("horizontal-content");
  (_d = document.querySelector(".main-container")) == null ? void 0 : _d.classList.add("container");
  (_e = document.querySelector(".app-header")) == null ? void 0 : _e.classList.add("hor-header");
  (_f = document.querySelector(".app-sidebar")) == null ? void 0 : _f.classList.add("horizontal-main");
  (_g = document.querySelector(".main-sidemenu")) == null ? void 0 : _g.classList.add("container");
  (_h = document.querySelector(".side-app")) == null ? void 0 : _h.classList.add("container");
  (_i = document.querySelector("#slide-left")) == null ? void 0 : _i.classList.remove("d-none");
  (_j = document.querySelector("#slide-right")) == null ? void 0 : _j.classList.remove("d-none");
  (_k = document.querySelector(".main-content")) == null ? void 0 : _k.classList.remove("app-content");
  (_l = document.querySelector(".main-container")) == null ? void 0 : _l.classList.remove("container-fluid");
  (_m = document.querySelector("body")) == null ? void 0 : _m.classList.remove("sidebar-mini");
  (_n = document.querySelector("body")) == null ? void 0 : _n.classList.remove("sidenav-toggled");
  (_o = document.querySelector(".horizontal-hover .side-menu")) == null ? void 0 : _o.classList.add("flex-nowrap");
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
  localStorage.removeItem("dashticvertical");
  localStorage.setItem("dashtichorizontalHover", "true");
  localStorage.removeItem("dashtichorizontal");
};
function checkHoriMenu() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  let menuWidth = document.querySelector(".horizontal-main");
  let menuItems = document.querySelector(".side-menu");
  let mainSidemenuWidth = document.querySelector(".main-sidemenu");
  let menuContainerWidth = (menuWidth == null ? void 0 : menuWidth.offsetWidth) - (mainSidemenuWidth == null ? void 0 : mainSidemenuWidth.offsetWidth);
  let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
  let marginRightValue = Math.ceil(
    Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
  );
  let check = menuItems.scrollWidth + (0 - (menuWidth == null ? void 0 : menuWidth.offsetWidth)) + menuContainerWidth;
  if ((_a = document.querySelector("body")) == null ? void 0 : _a.classList.contains("ltr")) {
    menuItems.style.marginRight = 0;
  } else {
    menuItems.style.marginLeft = 0;
  }
  if (menuItems.scrollWidth - 2 < (menuWidth == null ? void 0 : menuWidth.offsetWidth) - menuContainerWidth) {
    (_b = document.querySelector(".slide-left")) == null ? void 0 : _b.classList.add("d-none");
    (_c = document.querySelector(".slide-right")) == null ? void 0 : _c.classList.add("d-none");
    (_d = document.querySelector(".slide-leftRTL")) == null ? void 0 : _d.classList.add("d-none");
    (_e = document.querySelector(".slide-rightRTL")) == null ? void 0 : _e.classList.add("d-none");
  } else if (marginLeftValue !== 0 || marginRightValue !== 0) {
    (_f = document.querySelector(".slide-right")) == null ? void 0 : _f.classList.remove("d-none");
    (_g = document.querySelector(".slide-rightRTL")) == null ? void 0 : _g.classList.remove("d-none");
  } else if (marginLeftValue !== -check || marginRightValue !== -check) {
    (_h = document.querySelector(".slide-left")) == null ? void 0 : _h.classList.remove("d-none");
    (_i = document.querySelector(".slide-leftRTL")) == null ? void 0 : _i.classList.remove("d-none");
  }
  if (menuItems.scrollWidth - 2 > (menuWidth == null ? void 0 : menuWidth.offsetWidth) - menuContainerWidth) {
    (_j = document.querySelector(".slide-left")) == null ? void 0 : _j.classList.remove("d-none");
    (_k = document.querySelector(".slide-right")) == null ? void 0 : _k.classList.remove("d-none");
    (_l = document.querySelector(".slide-leftRTL")) == null ? void 0 : _l.classList.remove("d-none");
    (_m = document.querySelector(".slide-rightRTL")) == null ? void 0 : _m.classList.remove("d-none");
  }
  if (marginLeftValue === 0 || marginRightValue === 0) {
    (_n = document.querySelector(".slide-left")) == null ? void 0 : _n.classList.add("d-none");
    (_o = document.querySelector(".slide-leftRTL")) == null ? void 0 : _o.classList.add("d-none");
  }
  if (marginLeftValue !== 0 || marginRightValue !== 0) {
    (_p = document.querySelector(".slide-left")) == null ? void 0 : _p.classList.remove("d-none");
    (_q = document.querySelector(".slide-leftRTL")) == null ? void 0 : _q.classList.remove("d-none");
  }
}
function switcherArrowFn() {
  var _a, _b;
  let slideLeft = document.querySelector(".slide-left");
  let slideRight = document.querySelector(".slide-right");
  function slideClick() {
    let slide = document.querySelectorAll(".slide");
    let sideMenuitem = document.querySelectorAll(".slide-menu__item");
    let slideMenu = document.querySelectorAll(".slide-menu");
    slide.forEach((element, _index) => {
      if (element.classList.contains("is-expanded") === true) {
        element.classList.remove("is-expanded");
      }
    });
    sideMenuitem.forEach((element, _index) => {
      if (element.classList.contains("active") === true) {
        element.classList.remove("active");
      }
    });
    slideMenu.forEach((element, _index) => {
      if (element) {
        element.style.display = "none";
      }
    });
  }
  window.addEventListener("resize", () => {
    var _a2, _b2, _c, _d, _e, _f;
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth = (menuWidth == null ? void 0 : menuWidth.offsetWidth) - (mainSidemenuWidth == null ? void 0 : mainSidemenuWidth.offsetWidth);
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0]));
    let check = menuItems.scrollWidth + (0 - (menuWidth == null ? void 0 : menuWidth.offsetWidth)) + menuContainerWidth;
    if ((menuWidth == null ? void 0 : menuWidth.offsetWidth) - menuContainerWidth > menuItems.scrollWidth) {
      (_a2 = document.querySelector(".slide-left")) == null ? void 0 : _a2.classList.add("d-none");
      (_b2 = document.querySelector(".slide-right")) == null ? void 0 : _b2.classList.add("d-none");
      menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = 0;
    } else {
      (_c = document.querySelector(".slide-right")) == null ? void 0 : _c.classList.remove("d-none");
    }
    if (((_d = document.querySelector("html")) == null ? void 0 : _d.getAttribute("dir")) === "rtl") {
      if (Math.abs(marginRightValue) < Math.abs(check) === false && (menuWidth == null ? void 0 : menuWidth.offsetWidth) - menuContainerWidth < menuItems.scrollWidth) {
        menuItems.style.marginRight = -check + "px";
        (_e = document.querySelector(".slide-left")) == null ? void 0 : _e.classList.remove("d-none");
      } else {
        menuItems.style.marginRight = 0;
      }
    } else {
      if (Math.abs(marginLeftValue) < Math.abs(check) === false && (menuWidth == null ? void 0 : menuWidth.offsetWidth) - menuContainerWidth < menuItems.scrollWidth) {
        menuItems.style.marginLeft = -check + "px";
        (_f = document.querySelector(".slide-right")) == null ? void 0 : _f.classList.add("d-none");
      } else {
        menuItems.style.marginLeft = 0;
      }
    }
  });
  if (!((_a = document.querySelector("body")) == null ? void 0 : _a.classList.contains("login-img")) && !((_b = document.querySelector("body")) == null ? void 0 : _b.classList.contains("error-bg"))) {
    checkHoriMenu();
  }
  slideLeft.addEventListener("click", () => {
    var _a2, _b2, _c, _d, _e, _f, _g, _h;
    slideClick();
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth = (menuWidth == null ? void 0 : menuWidth.offsetWidth) - (mainSidemenuWidth == null ? void 0 : mainSidemenuWidth.offsetWidth);
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) + 100;
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) + 100;
    if (((_a2 = document.querySelector("html")) == null ? void 0 : _a2.getAttribute("dir")) === "rtl") {
      if (marginRightValue < 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = Number(menuItems.style.marginRight.split("px")[0]) + 100 + "px";
        (_b2 = document.querySelector(".slide-right")) == null ? void 0 : _b2.classList.remove("d-none");
        (_c = document.querySelector(".slide-left")) == null ? void 0 : _c.classList.remove("d-none");
      } else {
        (_d = document.querySelector(".slide-left")) == null ? void 0 : _d.classList.add("d-none");
      }
      if (marginRightValue >= 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = "0px";
      }
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
    } else {
      if (marginLeftValue < 0) {
        menuItems.style.marginLeft = Number(menuItems.style.marginLeft.split("px")[0]) + 100 + "px";
        if ((menuWidth == null ? void 0 : menuWidth.offsetWidth) - menuContainerWidth < menuItems.scrollWidth) {
          (_e = document.querySelector(".slide-left")) == null ? void 0 : _e.classList.remove("d-none");
          (_f = document.querySelector(".slide-right")) == null ? void 0 : _f.classList.remove("d-none");
        }
      } else {
        (_g = document.querySelector(".slide-left")) == null ? void 0 : _g.classList.add("d-none");
      }
      if (marginLeftValue >= 0) {
        menuItems.style.marginLeft = "0px";
        if ((menuWidth == null ? void 0 : menuWidth.offsetWidth) < menuItems.scrollWidth) {
          (_h = document.querySelector(".slide-left")) == null ? void 0 : _h.classList.add("d-none");
        }
      }
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
    }
  });
  slideRight.addEventListener("click", () => {
    var _a2, _b2, _c, _d, _e, _f;
    slideClick();
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth = (menuWidth == null ? void 0 : menuWidth.offsetWidth) - (mainSidemenuWidth == null ? void 0 : mainSidemenuWidth.offsetWidth);
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) - 100;
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) - 100;
    let check = menuItems.scrollWidth + (0 - (menuWidth == null ? void 0 : menuWidth.offsetWidth)) + menuContainerWidth;
    if (((_a2 = document.querySelector("html")) == null ? void 0 : _a2.getAttribute("dir")) === "rtl") {
      if (marginRightValue > -check) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = Number(menuItems.style.marginRight.split("px")[0]) - 100 + "px";
      } else {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = -check + "px";
        (_b2 = document.querySelector(".slide-right")) == null ? void 0 : _b2.classList.add("d-none");
        (_c = document.querySelector(".slide-left")) == null ? void 0 : _c.classList.remove("d-none");
      }
      if (marginRightValue !== 0) {
        (_d = document.querySelector(".slide-left")) == null ? void 0 : _d.classList.remove("d-none");
      }
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
    } else {
      if (marginLeftValue > -check) {
        menuItems.style.marginLeft = Number(menuItems.style.marginLeft.split("px")[0]) - 100 + "px";
      } else {
        menuItems.style.marginLeft = -check + "px";
        (_e = document.querySelector(".slide-right")) == null ? void 0 : _e.classList.add("d-none");
      }
      if (marginLeftValue !== 0) {
        (_f = document.querySelector(".slide-left")) == null ? void 0 : _f.classList.remove("d-none");
      }
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
    }
  });
}
function localStorageBackUp() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
  let html = (_a = document.querySelector("html")) == null ? void 0 : _a.style;
  let body = document.querySelector("body");
  localStorage.dashticlightheader && Lightheader();
  localStorage.dashticdarkheader && Darkheader();
  localStorage.dashticcolorheader && Colorheader();
  localStorage.dashticgradientheader && gradientheader();
  localStorage.dashticlightmenu && LightMenu();
  localStorage.dashticdarkmenu && DarkMenu();
  localStorage.dashticcolormenu && ColorMenu();
  localStorage.dashticgradientmenu && GradientMenu();
  localStorage.dashticlayoutfullwidth && FullWidth();
  localStorage.dashticlayoutboxed && Boxed();
  localStorage.dashticfixedlayour && Fixed();
  localStorage.dashticscrollablelayout && Scrollable();
  localStorage.dashticdefaultbody && Defaultbody();
  localStorage.dashticbodystyle1 && Bodystyle();
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
  if (localStorage.DashticBGswitcher) {
    const dynamicBackgroundColor = document.querySelectorAll(
      "input.background-primary-light"
    );
    dynamicBgTransparentBackground(
      dynamicBackgroundColor,
      localStorage.DashticBGswitcher
    );
  }
  if (localStorage.dashticPrimaryColor) {
    const dynamicPrimaryLight = document.querySelectorAll(
      "input.color-primary-light"
    );
    dynamicLightPrimaryColor(dynamicPrimaryLight, localStorage.dashticprimaryBorderColor);
  }
}
function handleThemeUpdate(cssVars) {
  const root = document.querySelector(":root");
  const keys = Object.keys(cssVars);
  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
const hex2rgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
};
function dynamicLightPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-color-rgb`;
    const cssPropName1 = `--primary--bg-color`;
    const cssPropName2 = `--primary--bg-hover`;
    handleThemeUpdate({
      [cssPropName]: hex2rgb(color),
      [cssPropName1]: hex2rgb(color),
      [cssPropName2]: color
      // [cssPropName3]: color,
    });
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
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
  let data1 = document.querySelector("#myonoffswitch1");
  data1.checked = true;
  let data2 = document.querySelector("#myonoffswitch11");
  data2.checked = true;
  let data3 = document.querySelector("#myonoffswitch3");
  data3.checked = true;
  let data4 = document.querySelector("#myonoffswitch6");
  data4.checked = true;
  let data9 = document.querySelector("#myonoffswitch07");
  data9.checked = true;
  let data5 = document.querySelector("#myonoffswitch9");
  data5.checked = true;
  let data6 = document.querySelector("#myonoffswitch54");
  data6.checked = true;
  let data7 = document.querySelector("#myonoffswitch34");
  data7.checked = true;
  let data8 = document.querySelector("#myonoffswitch111");
  data8.checked = false;
  (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("body-style1");
  (_b = document.querySelector("body")) == null ? void 0 : _b.classList.remove("dark-mode");
  (_c = document.querySelector("body")) == null ? void 0 : _c.classList.remove("dark-menu");
  (_d = document.querySelector("body")) == null ? void 0 : _d.classList.remove("color-menu");
  (_e = document.querySelector("body")) == null ? void 0 : _e.classList.remove("gradient-menu");
  (_f = document.querySelector("body")) == null ? void 0 : _f.classList.remove("dark-header");
  (_g = document.querySelector("body")) == null ? void 0 : _g.classList.remove("color-header");
  (_h = document.querySelector("body")) == null ? void 0 : _h.classList.remove("gradient-header");
  (_i = document.querySelector("body")) == null ? void 0 : _i.classList.remove("layout-boxed");
  (_j = document.querySelector("body")) == null ? void 0 : _j.classList.remove("scrollable-layout");
  (_k = document.querySelector("body")) == null ? void 0 : _k.classList.add("sidebar-mini");
  (_l = document.querySelector(".app-header")) == null ? void 0 : _l.classList.add("side-header");
  (_m = document.querySelector(".main-content")) == null ? void 0 : _m.classList.add("app-content");
  (_n = document.querySelector(".main-container")) == null ? void 0 : _n.classList.add("container-fluid");
  (_o = document.querySelector("body")) == null ? void 0 : _o.classList.remove("horizontal");
  (_p = document.querySelector("body")) == null ? void 0 : _p.classList.remove("horizontal-hover");
  (_q = document.querySelector(".app-sidebar")) == null ? void 0 : _q.classList.remove("horizontal-main");
  (_r = document.querySelector(".app-header")) == null ? void 0 : _r.classList.remove("hor-header");
  (_s = document.querySelector(".main-sidemenu")) == null ? void 0 : _s.classList.remove("container");
  (_t = document.querySelector(".main-container")) == null ? void 0 : _t.classList.remove("container");
  (_u = document.querySelector(".side-app")) == null ? void 0 : _u.classList.remove("container");
  (_v = document.querySelector(".main-content")) == null ? void 0 : _v.classList.remove("horizontal-content");
  (_w = document.querySelector("body")) == null ? void 0 : _w.classList.add("ltr");
  (_x = document.querySelector("html[lang=en]")) == null ? void 0 : _x.setAttribute("dir", "ltr");
  (_y = document.querySelector("body")) == null ? void 0 : _y.classList.remove("rtl");
}
const horizontalmenusticky = () => {
  var _a, _b;
  if (document.querySelector(".hor-header")) {
    if (window.scrollY > 30) {
      (_a = document.querySelector(".hor-header")) == null ? void 0 : _a.classList.add("fixed-header", "visible-title");
      let Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.add("sticky-pin");
      });
    } else {
      (_b = document.querySelector(".hor-header")) == null ? void 0 : _b.classList.remove("fixed-header", "visible-title");
      let Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.remove("sticky-pin");
      });
    }
  }
};
window.addEventListener("scroll", horizontalmenusticky);
export {
  Bodystyle as B,
  ColorMenu as C,
  DarkMenu as D,
  FullWidth as F,
  HorizontalHoverMenu as H,
  LtrtoRtl as L,
  RtltoLtr as R,
  Scrollable as S,
  VerticalMenu as V,
  LightTheme as a,
  LightMenu as b,
  Lightheader as c,
  dark as d,
  Colorheader as e,
  Darkheader as f,
  Defaultbody as g,
  horizontal as h,
  Boxed as i,
  Fixed as j,
  dynamicBgTransparentBackground as k,
  localStorageBackUp as l,
  checkHoriMenu as m,
  dynamicLightPrimaryColor as n,
  resetData as r,
  switcherArrowFn as s
};

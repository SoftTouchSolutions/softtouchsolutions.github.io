import { a as React, P as PropTypes, r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { m as mapToCssModules, i as classnames, t as tagPropType, d as useMenu, u as useLocation, b as Link, N as NavLink, A as APIServices, R as Row, C as Col, j as configureStore } from "./index-PSM4fvJQ.js";
import { S as SimpleBar } from "./index-DWkztd76.js";
import { f as favicon1 } from "./favicon1-CBO3Mpmi.js";
import { f as favicon } from "./favicon-jxi7jcMW.js";
import { l as logo1 } from "./logo1-Bdwt01HK.js";
import { u as user16 } from "./16-Cuc8by-s.js";
import { E as EditProfileService, P as ProfileService } from "./editprofile-CWaPFwGl.js";
import { P as PODUCTDATA } from "./data-C89A3n9c.js";
var _excluded$1 = ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "container", "tag", "children"];
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes$1 = {
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Theme the navbar by adding a background color  */
  color: PropTypes.string,
  /** Use any of the responsive containers to change how wide the content in your navbar is presented. */
  container: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** This prop is passed if the background is dark, to make the text lighter */
  dark: PropTypes.bool,
  /** Determine if to show toggler button */
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Make the navbar fixed at the top */
  fixed: PropTypes.string,
  /** Add `.navbar-light` class */
  light: PropTypes.bool,
  role: PropTypes.string,
  /** Use `position: sticky` which isn't fully supported in every browser */
  sticky: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType
};
var getExpandClass = function getExpandClass2(expand) {
  if (expand === false) {
    return false;
  }
  if (expand === true || expand === "xs") {
    return "navbar-expand";
  }
  return "navbar-expand-".concat(expand);
};
function Navbar(props) {
  var _classNames;
  var _props$expand = props.expand, expand = _props$expand === void 0 ? false : _props$expand, className = props.className, cssModule = props.cssModule, light = props.light, dark = props.dark, fixed = props.fixed, sticky = props.sticky, color = props.color, _props$container = props.container, container = _props$container === void 0 ? "fluid" : _props$container, _props$tag = props.tag, Tag = _props$tag === void 0 ? "nav" : _props$tag, children = props.children, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classnames(className, "navbar", getExpandClass(expand), (_classNames = {
    "navbar-light": light,
    "navbar-dark": dark
  }, _defineProperty$1(_classNames, "bg-".concat(color), color), _defineProperty$1(_classNames, "fixed-".concat(fixed), fixed), _defineProperty$1(_classNames, "sticky-".concat(sticky), sticky), _classNames)), cssModule);
  var containerClass = container && container === true ? "container" : "container-".concat(container);
  return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
    className: classes
  }), container ? /* @__PURE__ */ React.createElement("div", {
    className: containerClass
  }, children) : children);
}
Navbar.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "children", "tag"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  type: PropTypes.string,
  /** Pass children so this component can wrap the child elements */
  children: PropTypes.node
};
function NavbarToggler(props) {
  var className = props.className, cssModule = props.cssModule, children = props.children, _props$tag = props.tag, Tag = _props$tag === void 0 ? "button" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classnames(className, "navbar-toggler"), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends({
    "aria-label": "Toggle navigation"
  }, _objectSpread({
    type: "button"
  }, attributes), {
    className: classes
  }), children || /* @__PURE__ */ React.createElement("span", {
    className: mapToCssModules("navbar-toggler-icon", cssModule)
  }));
}
NavbarToggler.propTypes = propTypes;
const logo = "/assets/logo-BjCkGc0t.svg";
const useSidebarMenu = () => {
  const { menuItems, userType, isMenuLoaded } = useMenu();
  const [menuitems, setMenuitems] = reactExports.useState([]);
  reactExports.useEffect(() => {
    console.log("[SIDEBAR] Menu context updated:", {
      menuItemsLength: (menuItems == null ? void 0 : menuItems.length) || 0,
      userType,
      isMenuLoaded
    });
    if (menuItems && Array.isArray(menuItems) && menuItems.length > 0) {
      const clonedMenuItems = JSON.parse(JSON.stringify(menuItems));
      setMenuitems(clonedMenuItems);
      console.log("[SIDEBAR] Menu items updated in local state");
    } else if (isMenuLoaded && (!menuItems || menuItems.length === 0)) {
      setMenuitems([]);
      console.log("[SIDEBAR] Menu is empty for current user role");
    }
  }, [menuItems, userType, isMenuLoaded]);
  const clearMenuActive = () => {
    if (menuitems && menuitems.length > 0) {
      const updatedMenuItems = menuitems.map((mainlevel) => {
        if (mainlevel.Items) {
          const updatedItems = mainlevel.Items.map((sublevel) => {
            sublevel.active = false;
            if (sublevel.children) {
              sublevel.children = sublevel.children.map((sublevel1) => {
                sublevel1.active = false;
                if (sublevel1.children) {
                  sublevel1.children = sublevel1.children.map((sublevel2) => {
                    sublevel2.active = false;
                    if (sublevel2.children) {
                      sublevel2.children = sublevel2.children.map((sublevel3) => {
                        sublevel3.active = false;
                        return sublevel3;
                      });
                    }
                    return sublevel2;
                  });
                }
                return sublevel1;
              });
            }
            return sublevel;
          });
          return { ...mainlevel, Items: updatedItems };
        }
        return mainlevel;
      });
      setMenuitems(updatedMenuItems);
    }
  };
  const updateMenuItems = (updatedItems) => {
    setMenuitems([...updatedItems]);
  };
  return {
    menuitems,
    setMenuitems,
    updateMenuItems,
    clearMenuActive,
    userType,
    isMenuLoaded
  };
};
let history = [];
const Sidebar = () => {
  let location = useLocation();
  const { menuitems, updateMenuItems, clearMenuActive: clearMenuActiveFn, userType, isMenuLoaded } = useSidebarMenu();
  const [outPut, setoutPut] = reactExports.useState(EditProfileService.returnId());
  const [userData, setUserData] = reactExports.useState({ staff_name: "John Thomson", email: "", userType: "App Developer" });
  reactExports.useEffect(() => {
    history.push(location.pathname);
    if (history.length > 2) {
      history.shift();
    }
    if (history[0] !== history[1]) {
      setSidemenu();
    }
    let mainContent = document.querySelector(".main-content");
    mainContent.addEventListener("click", mainContentClickFn);
    return () => {
      mainContent.removeEventListener("click", mainContentClickFn);
    };
  }, [location]);
  reactExports.useEffect(() => {
    if (document.body.classList.contains("horizontal") && window.innerWidth >= 992) {
      clearMenuActive();
    }
  }, []);
  function mainContentClickFn() {
    if (document.body.classList.contains("horizontal") && window.innerWidth >= 992) {
      clearMenuActive();
    }
  }
  reactExports.useEffect(() => {
    if (isMenuLoaded && menuitems && menuitems.length > 0) {
      const hasActiveItems = menuitems.some(
        (category) => category.Items && category.Items.some((item) => item.active || item.selected)
      );
      if (!hasActiveItems) {
        setSidemenu();
      }
    }
  }, [isMenuLoaded, location.pathname]);
  reactExports.useEffect(() => {
    console.log("[SIDEBAR DEBUG] Current user type:", userType);
    console.log("[SIDEBAR DEBUG] Is menu loaded:", isMenuLoaded);
    console.log("[SIDEBAR DEBUG] Menu items available:", (menuitems == null ? void 0 : menuitems.length) || 0);
    if (menuitems && menuitems.length > 0) {
      console.log("[SIDEBAR DEBUG] Menu structure:", menuitems.map((category) => {
        var _a, _b;
        return {
          categoryItems: ((_a = category.Items) == null ? void 0 : _a.length) || 0,
          items: ((_b = category.Items) == null ? void 0 : _b.map((item) => {
            var _a2;
            return {
              title: item.title,
              hasChildren: !!item.children,
              childrenCount: ((_a2 = item.children) == null ? void 0 : _a2.length) || 0
            };
          })) || []
        };
      }));
    } else {
      console.log("[SIDEBAR DEBUG] No menu items found - check role-based filtering");
    }
  }, [userType, isMenuLoaded, menuitems]);
  reactExports.useEffect(() => {
    const token = localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token");
    console.log("[SIDEBAR DEBUG] Auth token exists:", !!token);
    console.log("[SIDEBAR DEBUG] Current location:", location.pathname);
  }, [location]);
  function setSidemenu() {
    if (!menuitems || menuitems.length === 0) return;
    const cloned = JSON.parse(JSON.stringify(menuitems));
    cloned.forEach((category) => {
      if (!category.Items) return;
      category.Items.forEach((items) => {
        items.active = false;
        items.selected = false;
        if (location.pathname === "/dashtic/preview" || location.pathname === "/dashtic/preview/") {
          location.pathname = "/dashboard/dashboard01/";
        }
        if (location.pathname === items.path + "/") {
          items.active = true;
          items.selected = true;
        }
        if (items.children) {
          items.children.forEach((submenu) => {
            submenu.active = false;
            submenu.selected = false;
            if (location.pathname === submenu.path + "/") {
              items.active = true;
              items.selected = true;
              submenu.active = true;
              submenu.selected = true;
            }
            if (submenu.children) {
              submenu.children.forEach((submenu1) => {
                submenu1.active = false;
                submenu1.selected = false;
                if (location.pathname === submenu1.path + "/") {
                  items.active = true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                  submenu1.active = true;
                  submenu1.selected = true;
                }
              });
            }
          });
        }
      });
    });
    updateMenuItems(cloned);
  }
  function toggleSidemenu(item) {
    if (!menuitems || menuitems.length === 0) return;
    if (!document.body.classList.contains("horizontalmenu-hover") || window.innerWidth < 992) {
      const cloned = JSON.parse(JSON.stringify(menuitems));
      if (!item.active) {
        cloned.forEach((mainlevel) => {
          if (!mainlevel.Items) return;
          mainlevel.Items.forEach((sublevel) => {
            sublevel.active = false;
            if (item.title === sublevel.title) {
              sublevel.active = true;
            }
            if (sublevel.children) {
              sublevel.children.forEach((sublevel1) => {
                sublevel1.active = false;
                if (item.title === sublevel1.title) {
                  sublevel.active = true;
                  sublevel1.active = true;
                }
                if (sublevel1.children) {
                  sublevel1.children.forEach((sublevel2) => {
                    sublevel2.active = false;
                    if (item.title === sublevel2.title) {
                      sublevel.active = true;
                      sublevel1.active = true;
                      sublevel2.active = true;
                    }
                    if (sublevel2.children) {
                      sublevel2.children.forEach((sublevel3) => {
                        sublevel3.active = false;
                        if (item.title === sublevel3.title) {
                          sublevel.active = true;
                          sublevel1.active = true;
                          sublevel2.active = true;
                          sublevel3.active = true;
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        });
      } else {
        cloned.forEach((mainlevel) => {
          if (!mainlevel.Items) return;
          mainlevel.Items.forEach((sublevel) => {
            if (sublevel.title === item.title) {
              sublevel.active = !sublevel.active;
            }
          });
        });
      }
      updateMenuItems(cloned);
    }
  }
  function clearMenuActive() {
    clearMenuActiveFn();
  }
  function Onhover() {
    if (document.querySelector(".app")) {
      if (document.querySelector(".app").classList.contains("sidenav-toggled"))
        document.querySelector(".app").classList.add("sidenav-toggled-open");
    }
  }
  function Outhover() {
    if (document.querySelector(".app")) {
      document.querySelector(".app").classList.remove("sidenav-toggled-open");
    }
  }
  const [faces6, setfaces6] = reactExports.useState(user16);
  reactExports.useEffect(() => {
    const loadUserData = async () => {
      try {
        const response = await APIServices.getCurrentUser();
        if (response && response.data) {
          if (response.data.profile_picture) {
            setfaces6(`http://localhost:8000${response.data.profile_picture}?t=${(/* @__PURE__ */ new Date()).getTime()}`);
          } else if (ProfileService.returnImage() != void 0) {
            setfaces6(ProfileService.returnImage());
          }
          setUserData({
            staff_name: response.data.staff_name || response.data.email || "John Thomson",
            email: response.data.email || "",
            userType: response.data.userType || "App Developer"
          });
        }
      } catch (error) {
        console.error("Error loading user data:", error);
        if (ProfileService.returnImage() != void 0) {
          setfaces6(ProfileService.returnImage());
        }
        setoutPut(EditProfileService.returnId());
      }
    };
    loadUserData();
  }, [location]);
  if (!isMenuLoaded) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky", children: /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "app-sidebar sidebar-scroll" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "aside",
    {
      className: "app-sidebar sidebar-scroll",
      onMouseOver: () => Onhover(),
      onMouseOut: () => Outhover(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-sidebar-header active", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "desktop-logo logo-light active", to: `${"/"}dashboard/dashboard01`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, className: "main-logo", alt: "logo" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "desktop-logo logo-dark active", to: `${"/"}dashboard/dashboard01`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo1, className: "main-logo", alt: "logo" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "logo-icon mobile-logo icon-light active", to: `${"/"}dashboard/dashboard01`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon, alt: "logo" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "logo-icon mobile-logo icon-dark active", to: `${"/"}dashboard/dashboard01`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: favicon1, alt: "logo" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleBar, { className: "sidebar-menuscroll", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-sidemenu is-expanded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "app-sidebar__user", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dropdown user-pro-body text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "user-pic", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "user-img", className: "avatar avatar-xl brround mb-1", src: faces6 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "user-info text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: " mb-1 font-weight-bold", children: userData.staff_name || `${outPut.firstName || "John"} ${outPut.lastName || "Thomson"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted app-sidebar__user-name text-sm", children: userData.userType || outPut.role || "App Developer" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slide-left disabled", id: "slide-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "#7b8191", width: "24", height: "24", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "side-menu open", children: menuitems.map((Item, itemi) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: Item.Items.map((menuItem, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `slide ${menuItem.selected ? "is-expanded" : ""}  ${menuItem.active ? "is-expanded" : ""}`, children: [
            menuItem.type === "link" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              NavLink,
              {
                to: menuItem.path + "/",
                className: `side-menu__item ${menuItem.selected ? " active" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `side-menu__icon fe fe-${menuItem.icon}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "side-menu__label", children: menuItem.title }),
                  menuItem.badge ? /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: menuItem.badge, children: menuItem.badgetxt }) : ""
                ]
              }
            ) : "",
            menuItem.type === "sub" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "javascript", onClick: (event) => {
              event.preventDefault();
              toggleSidemenu(menuItem);
            }, className: `side-menu__item ${menuItem.selected ? "active is-expanded" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `side-menu__icon fe fe-${menuItem.icon}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "side-menu__label", children: menuItem.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "angle fe fe-chevron-right" })
            ] }) : "",
            menuItem.children ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "ul",
              {
                className: `slide-menu ${menuItem.active ? "open" : ""}`,
                style: menuItem.active ? { display: "block" } : { display: "none" },
                children: menuItem.children.map((childrenItem, index) => {
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `sub-slide ${childrenItem.selected ? "is-expanded" : ""} ${childrenItem.active ? "is-expanded" : ""}`, children: [
                    childrenItem.type === "sub" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "javascript",
                        className: `slide-item ${childrenItem.selected ? "active is-expanded" : ""}`,
                        onClick: (event) => {
                          event.preventDefault();
                          toggleSidemenu(childrenItem);
                        },
                        children: [
                          childrenItem.title,
                          childrenItem.active,
                          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "sub-angle fe fe-chevron-right" })
                        ]
                      }
                    ) : "",
                    childrenItem.type === "link" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { as: "li", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      NavLink,
                      {
                        to: childrenItem.path + "/",
                        className: "slide-item",
                        children: [
                          childrenItem.title,
                          childrenItem.active
                        ]
                      }
                    ) }) : "",
                    childrenItem.children ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "ul",
                      {
                        className: `sub-slide-menu ${childrenItem.selected ? "open" : ""}`,
                        style: childrenItem.active ? { display: "block" } : { display: "none" },
                        children: childrenItem.children.map(
                          (childrenSubItem, key) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                            childrenSubItem.type === "link" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              NavLink,
                              {
                                to: childrenSubItem.path + "/",
                                className: "sub-slide-item",
                                children: [
                                  childrenSubItem.title,
                                  childrenSubItem.active
                                ]
                              }
                            ) : "",
                            childrenSubItem.type === "sub" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { as: "li", className: `sub-slide2 ${childrenSubItem.selected ? "is-expanded" : ""} ${childrenSubItem.active ? "is-expanded" : ""}`, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                NavLink,
                                {
                                  to: "#",
                                  className: "sub-slide-item",
                                  onClick: (event) => {
                                    event.preventDefault();
                                    toggleSidemenu(childrenSubItem);
                                  },
                                  children: [
                                    childrenSubItem.title,
                                    childrenSubItem.active,
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "sub-angle2 fe fe-chevron-down" })
                                  ]
                                }
                              ),
                              childrenItem.children.map(
                                (childrenSubItemsub, key2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "ul",
                                  {
                                    className: `sub-slide-menu1 ${childrenSubItemsub.selected ? "open" : ""}`,
                                    style: childrenSubItemsub.active ? { display: "block" } : { display: "none" },
                                    children: childrenItem.children.map(
                                      (childrenSubItemsubs, key3) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(NavLink, { className: "sub-slide-item2", to: "#", children: [
                                        childrenSubItemsubs.title,
                                        childrenSubItemsubs.active
                                      ] }) }, key3)
                                    )
                                  },
                                  key2
                                )
                              )
                            ] }) : ""
                          ] }, key)
                        )
                      }
                    ) : ""
                  ] }, index);
                })
              }
            ) : ""
          ] }, i)) }, itemi + Math.random() * 100)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slide-right", id: "slide-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "#7b8191", width: "24", height: "24", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" }) }) })
        ] }) })
      ]
    }
  ) });
};
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "align-items-center flex-row-reverse", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", sm: "12", className: " mt-3 mt-lg-0 text-center", children: [
    "Copyright © 2024 ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "text-primary", children: "Nshrmb" }),
    ". Designed with ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fa fa-heart text-danger" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#" }),
    " All rights reserved."
  ] }) }) }) }) });
};
const TabToTop = () => {
  const [BacktoTop, setBacktopTop] = reactExports.useState("");
  reactExports.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktopTop("d-block");
      } else setBacktopTop("");
    });
  }, []);
  const screenup = () => {
    window.scrollTo({
      top: 10,
      behavior: "auto"
      //   smooth
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "#",
      id: "back-to-top",
      onClick: screenup,
      className: `${BacktoTop}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" })
      ] })
    }
  ) });
};
const data = PODUCTDATA;
function reducer(state = data, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      state = PODUCTDATA.filter((idx) => {
        return idx.id == payload;
      });
      return [...state];
    case "PRODUCT":
      state = PODUCTDATA.filter((idx) => {
        return idx.id == payload;
      });
      return state;
  }
}
const store = configureStore({
  reducer
  // middleware: [thunk], // Pass the middleware as an array
});
export {
  Footer as F,
  Navbar as N,
  Sidebar as S,
  TabToTop as T,
  NavbarToggler as a,
  logo as l,
  store as s
};

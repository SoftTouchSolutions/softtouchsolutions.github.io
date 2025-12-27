import { a as React, r as reactExports, P as PropTypes } from "./mui-BeFIxXnL.js";
import { m as mapToCssModules, i as classnames, t as tagPropType } from "./index-AOv_UoEY.js";
import { C as Collapse } from "./Collapse-BJaCZK7b.js";
var AccordionContext = /* @__PURE__ */ React.createContext({});
var _excluded$4 = ["flush", "open", "toggle", "className", "cssModule", "tag", "innerRef"];
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$4.apply(this, arguments);
}
function _objectWithoutProperties$4(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4(source, excluded);
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
function _objectWithoutPropertiesLoose$4(source, excluded) {
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
var propTypes$4 = {
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Render accordions edge-to-edge with their parent container */
  flush: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** The current active key that corresponds to the currently expanded card */
  open: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Function that's triggered on clicking `AccordionHeader` */
  toggle: PropTypes.func.isRequired
};
function Accordion(props) {
  var flush = props.flush, open = props.open, toggle = props.toggle, className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, innerRef = props.innerRef, attributes = _objectWithoutProperties$4(props, _excluded$4);
  var classes = mapToCssModules(classnames(className, "accordion", {
    "accordion-flush": flush
  }), cssModule);
  var accordionContext = reactExports.useMemo(function() {
    return {
      open,
      toggle
    };
  });
  return /* @__PURE__ */ React.createElement(AccordionContext.Provider, {
    value: accordionContext
  }, /* @__PURE__ */ React.createElement(Tag, _extends$4({}, attributes, {
    className: classes,
    ref: innerRef
  })));
}
Accordion.propTypes = propTypes$4;
var _excluded$3 = ["defaultOpen", "stayOpen"];
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$3.apply(this, arguments);
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties$3(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3(source, excluded);
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
function _objectWithoutPropertiesLoose$3(source, excluded) {
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
var propTypes$3 = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
  defaultOpen: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  stayOpen: PropTypes.bool
};
function UncontrolledAccordion(_ref) {
  var defaultOpen = _ref.defaultOpen, stayOpen = _ref.stayOpen, props = _objectWithoutProperties$3(_ref, _excluded$3);
  var _useState = reactExports.useState(defaultOpen || (stayOpen ? [] : void 0)), _useState2 = _slicedToArray(_useState, 2), open = _useState2[0], setOpen = _useState2[1];
  var toggle = function toggle2(id) {
    if (stayOpen) {
      if (open.includes(id)) {
        setOpen(open.filter(function(accordionId) {
          return accordionId !== id;
        }));
      } else {
        setOpen([].concat(_toConsumableArray(open), [id]));
      }
    } else if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };
  return /* @__PURE__ */ React.createElement(Accordion, _extends$3({}, _objectSpread({
    tag: "div"
  }, props), {
    open,
    toggle
  }));
}
UncontrolledAccordion.propTypes = propTypes$3;
var _excluded$2 = ["className", "cssModule", "tag", "innerRef", "children", "targetId"];
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$2.apply(this, arguments);
}
function _objectWithoutProperties$2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
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
function _objectWithoutPropertiesLoose$2(source, excluded) {
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
var propTypes$2 = {
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing base class name with a new class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Unique key used to control item's collapse/expand */
  targetId: PropTypes.string.isRequired
};
function AccordionHeader(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "h2" : _props$tag, innerRef = props.innerRef, children = props.children, targetId = props.targetId, attributes = _objectWithoutProperties$2(props, _excluded$2);
  var _useContext = reactExports.useContext(AccordionContext), open = _useContext.open, toggle = _useContext.toggle;
  var classes = mapToCssModules(classnames(className, "accordion-header"), cssModule);
  var buttonClasses = mapToCssModules(classnames("accordion-button", {
    collapsed: !(Array.isArray(open) ? open.includes(targetId) : open === targetId)
  }), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$2({}, attributes, {
    className: classes,
    ref: innerRef
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: buttonClasses,
    onClick: function onClick() {
      return toggle(targetId);
    }
  }, children));
}
AccordionHeader.propTypes = propTypes$2;
var _excluded$1 = ["className", "cssModule", "tag", "innerRef"];
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
  /** To add custom class */
  className: PropTypes.string,
  /** Change existing base class name with a new class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Set a custom element for this component */
  tag: tagPropType
};
function AccordionItem(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, innerRef = props.innerRef, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classnames(className, "accordion-item"), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}
AccordionItem.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "tag", "innerRef", "children", "accordionId"];
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
  /** Unique key used to control item's collapse/expand */
  accordionId: PropTypes.string.isRequired,
  /** To add custom class */
  className: PropTypes.string,
  children: PropTypes.node,
  /** Change existing base class name with a new class name */
  cssModule: PropTypes.object,
  /** Pass ref to the component */
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Set a custom element for this component */
  tag: tagPropType
};
function AccordionBody(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, innerRef = props.innerRef, children = props.children, accordionId = props.accordionId, attributes = _objectWithoutProperties(props, _excluded);
  var _useContext = reactExports.useContext(AccordionContext), open = _useContext.open;
  var classes = mapToCssModules(classnames(className, "accordion-collapse"), cssModule);
  return /* @__PURE__ */ React.createElement(Collapse, _extends({}, attributes, {
    className: classes,
    ref: innerRef,
    isOpen: Array.isArray(open) ? open.includes(accordionId) : open === accordionId
  }), /* @__PURE__ */ React.createElement(Tag, {
    className: "accordion-body"
  }, children));
}
AccordionBody.propTypes = propTypes;
export {
  AccordionItem as A,
  UncontrolledAccordion as U,
  AccordionHeader as a,
  AccordionBody as b
};

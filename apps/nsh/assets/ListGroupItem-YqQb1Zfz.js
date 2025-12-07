import { a as React, P as PropTypes } from "./mui-BeFIxXnL.js";
import { m as mapToCssModules, i as classnames, t as tagPropType } from "./index-CPwjB16p.js";
var _excluded$1 = ["className", "cssModule", "tag", "flush", "horizontal", "numbered"];
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
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Remove borders to make the list appear flush */
  flush: PropTypes.bool,
  /** Make the list horizontal instead of vertical */
  horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Add number to the ListItems */
  numbered: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
};
var getHorizontalClass = function getHorizontalClass2(horizontal) {
  if (horizontal === false) {
    return false;
  }
  if (horizontal === true || horizontal === "xs") {
    return "list-group-horizontal";
  }
  return "list-group-horizontal-".concat(horizontal);
};
function ListGroup(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "ul" : _props$tag, flush = props.flush, _props$horizontal = props.horizontal, horizontal = _props$horizontal === void 0 ? false : _props$horizontal, _props$numbered = props.numbered, numbered = _props$numbered === void 0 ? false : _props$numbered, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classnames(
    className,
    "list-group",
    // list-group-horizontal cannot currently be mixed with list-group-flush
    // we only try to apply horizontal classes if flush is false
    flush ? "list-group-flush" : getHorizontalClass(horizontal),
    {
      "list-group-numbered": numbered
    }
  ), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
    className: classes
  }));
}
ListGroup.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "tag", "active", "disabled", "action", "color"];
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
  /** Add action prop to give effects while hovering over element */
  action: PropTypes.bool,
  /** Add active prop to make the current selection active */
  active: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add background colour to the list item */
  color: PropTypes.string,
  /** Make the list item appear disabled */
  disabled: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
};
var handleDisabledOnClick = function handleDisabledOnClick2(e) {
  e.preventDefault();
};
function ListGroupItem(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "li" : _props$tag, active = props.active, disabled = props.disabled, action = props.action, color = props.color, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classnames(className, active ? "active" : false, disabled ? "disabled" : false, action ? "list-group-item-action" : false, color ? "list-group-item-".concat(color) : false, "list-group-item"), cssModule);
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
ListGroupItem.propTypes = propTypes;
export {
  ListGroup as L,
  ListGroupItem as a
};

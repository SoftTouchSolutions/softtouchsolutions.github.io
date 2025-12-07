import { a as React, T as Transition, P as PropTypes, r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { a0 as TransitionStatuses, m as mapToCssModules, i as classnames, t as tagPropType, $ as TransitionTimeouts, V as omit, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-CPwjB16p.js";
import { p as photo23 } from "./23-B5Zg6o7q.js";
import { p as photo20, a as photo12 } from "./12-U7ux0O5W.js";
import { p as photo1 } from "./1-CXDQDCif.js";
import { p as photo2 } from "./2-bavdzQaD.js";
import { p as photo3, a as photo4 } from "./4-CUU99mC1.js";
import { p as photo5, a as photo6 } from "./6-NgB5q-sK.js";
import { p as photo7 } from "./7-oZbLhkCE.js";
import { p as photo8 } from "./8-DBQQbcvu.js";
import { p as photo2$1, a as photo12$1 } from "./14-0pej-tsD.js";
import { p as photo15 } from "./15-CS5OAozU.js";
import { p as photo18 } from "./18-OKtq5Itd.js";
import { p as photo11 } from "./11-_IJrd_jw.js";
import { p as photo9 } from "./9-Cd4JggXr.js";
import { p as photo10 } from "./10-8A9hOF9c.js";
import { C as CardTitle } from "./CardTitle-Cqv0xue5.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
var CarouselContext = /* @__PURE__ */ React.createContext({});
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$2(obj);
}
var _excluded$3 = ["in", "children", "cssModule", "slide", "tag", "className"];
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
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}
function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$2(o, p);
}
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$2(this, result);
  };
}
function _possibleConstructorReturn$2(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$2(self);
}
function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$2(o);
}
var CarouselItem = /* @__PURE__ */ (function(_React$Component) {
  _inherits$2(CarouselItem2, _React$Component);
  var _super = _createSuper$2(CarouselItem2);
  function CarouselItem2(props) {
    var _this;
    _classCallCheck$2(this, CarouselItem2);
    _this = _super.call(this, props);
    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized$2(_this));
    _this.onEntering = _this.onEntering.bind(_assertThisInitialized$2(_this));
    _this.onExit = _this.onExit.bind(_assertThisInitialized$2(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized$2(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized$2(_this));
    return _this;
  }
  _createClass$2(CarouselItem2, [{
    key: "onEnter",
    value: function onEnter(node, isAppearing) {
      this.setState({
        startAnimation: false
      });
      this.props.onEnter(node, isAppearing);
    }
  }, {
    key: "onEntering",
    value: function onEntering(node, isAppearing) {
      var offsetHeight = node.offsetHeight;
      this.setState({
        startAnimation: true
      });
      this.props.onEntering(node, isAppearing);
      return offsetHeight;
    }
  }, {
    key: "onExit",
    value: function onExit(node) {
      this.setState({
        startAnimation: false
      });
      this.props.onExit(node);
    }
  }, {
    key: "onExiting",
    value: function onExiting(node) {
      this.setState({
        startAnimation: true
      });
      node.dispatchEvent(new CustomEvent("slide.bs.carousel"));
      this.props.onExiting(node);
    }
  }, {
    key: "onExited",
    value: function onExited(node) {
      node.dispatchEvent(new CustomEvent("slid.bs.carousel"));
      this.props.onExited(node);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props, isIn = _this$props["in"], children = _this$props.children, cssModule = _this$props.cssModule, _this$props$slide = _this$props.slide, slide = _this$props$slide === void 0 ? true : _this$props$slide, _this$props$tag = _this$props.tag, Tag = _this$props$tag === void 0 ? "div" : _this$props$tag, className = _this$props.className, transitionProps = _objectWithoutProperties$3(_this$props, _excluded$3);
      return /* @__PURE__ */ React.createElement(Transition, _extends$4({}, transitionProps, {
        enter: slide,
        exit: slide,
        "in": isIn,
        onEnter: this.onEnter,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }), function(status) {
        var direction = _this2.context.direction;
        var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
        var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === "end" ? "carousel-item-start" : "carousel-item-end");
        var orderClassName = status === TransitionStatuses.ENTERING && (direction === "end" ? "carousel-item-next" : "carousel-item-prev");
        var itemClasses = mapToCssModules(classnames(className, "carousel-item", isActive && "active", directionClassName, orderClassName), cssModule);
        return /* @__PURE__ */ React.createElement(Tag, {
          className: itemClasses
        }, children);
      });
    }
  }]);
  return CarouselItem2;
})(React.Component);
CarouselItem.propTypes = _objectSpread(_objectSpread({}, Transition.propTypes), {}, {
  /** Set a custom element for this component */
  tag: tagPropType,
  "in": PropTypes.bool,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  children: PropTypes.node,
  /** Enable/disable animation */
  slide: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string
});
CarouselItem.defaultProps = _objectSpread(_objectSpread({}, Transition.defaultProps), {}, {
  timeout: TransitionTimeouts.Carousel
});
CarouselItem.contextType = CarouselContext;
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
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
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$1(o, p);
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result);
  };
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self);
}
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
var SWIPE_THRESHOLD = 40;
var propTypes$1 = {
  /** the current active slide of the carousel */
  activeIndex: PropTypes.number,
  /** a function which should advance the carousel to the next slide (via activeIndex) */
  next: PropTypes.func.isRequired,
  /** a function which should advance the carousel to the previous slide (via activeIndex) */
  previous: PropTypes.func.isRequired,
  /** controls if the left and right arrow keys should control the carousel */
  keyboard: PropTypes.bool,
  /** If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it.
   */
  pause: PropTypes.oneOf(["hover", false]),
  /** Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load. */
  ride: PropTypes.oneOf(["carousel"]),
  /** the interval at which the carousel automatically cycles */
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  children: PropTypes.array,
  /** called when the mouse enters the Carousel */
  mouseEnter: PropTypes.func,
  /** called when the mouse exits the Carousel */
  mouseLeave: PropTypes.func,
  /** controls whether the slide animation on the Carousel works or not */
  slide: PropTypes.bool,
  /** make the controls, indicators and captions dark on the Carousel */
  dark: PropTypes.bool,
  fade: PropTypes.bool,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add custom class */
  className: PropTypes.string,
  /** Enable touch support */
  enableTouch: PropTypes.bool
};
var propsToOmit = Object.keys(propTypes$1);
var defaultProps = {
  interval: 5e3,
  pause: "hover",
  keyboard: true,
  slide: true,
  enableTouch: true,
  fade: false
};
var Carousel$1 = /* @__PURE__ */ (function(_React$Component) {
  _inherits$1(Carousel2, _React$Component);
  var _super = _createSuper$1(Carousel2);
  function Carousel2(props) {
    var _this;
    _classCallCheck$1(this, Carousel2);
    _this = _super.call(this, props);
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized$1(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized$1(_this));
    _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized$1(_this));
    _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized$1(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized$1(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized$1(_this));
    _this.touchStartX = 0;
    _this.touchStartY = 0;
    _this.state = {
      activeIndex: _this.props.activeIndex,
      direction: "end",
      indicatorClicked: false
    };
    return _this;
  }
  _createClass$1(Carousel2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.ride === "carousel") {
        this.setInterval();
      }
      document.addEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.activeIndex === this.state.activeIndex) return;
      this.setInterval();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearInterval();
      document.removeEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(evt) {
      if (this.props.keyboard) {
        if (evt.keyCode === 37) {
          this.props.previous();
        } else if (evt.keyCode === 39) {
          this.props.next();
        }
      }
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      if (!this.props.enableTouch) {
        return;
      }
      this.touchStartX = e.changedTouches[0].screenX;
      this.touchStartY = e.changedTouches[0].screenY;
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e) {
      if (!this.props.enableTouch) {
        return;
      }
      var currentX = e.changedTouches[0].screenX;
      var currentY = e.changedTouches[0].screenY;
      var diffX = Math.abs(this.touchStartX - currentX);
      var diffY = Math.abs(this.touchStartY - currentY);
      if (diffX < diffY) {
        return;
      }
      if (diffX < SWIPE_THRESHOLD) {
        return;
      }
      if (currentX < this.touchStartX) {
        this.props.next();
      } else {
        this.props.previous();
      }
    }
  }, {
    key: "getContextValue",
    value: function getContextValue() {
      return {
        direction: this.state.direction
      };
    }
  }, {
    key: "setInterval",
    value: (function(_setInterval) {
      function setInterval2() {
        return _setInterval.apply(this, arguments);
      }
      setInterval2.toString = function() {
        return _setInterval.toString();
      };
      return setInterval2;
    })(function() {
      var _this2 = this;
      this.clearInterval();
      if (this.props.interval) {
        this.cycleInterval = setInterval(function() {
          _this2.props.next();
        }, parseInt(this.props.interval, 10));
      }
    })
  }, {
    key: "clearInterval",
    value: (function(_clearInterval) {
      function clearInterval2() {
        return _clearInterval.apply(this, arguments);
      }
      clearInterval2.toString = function() {
        return _clearInterval.toString();
      };
      return clearInterval2;
    })(function() {
      clearInterval(this.cycleInterval);
    })
  }, {
    key: "hoverStart",
    value: function hoverStart() {
      if (this.props.pause === "hover") {
        this.clearInterval();
      }
      if (this.props.mouseEnter) {
        var _this$props;
        (_this$props = this.props).mouseEnter.apply(_this$props, arguments);
      }
    }
  }, {
    key: "hoverEnd",
    value: function hoverEnd() {
      if (this.props.pause === "hover") {
        this.setInterval();
      }
      if (this.props.mouseLeave) {
        var _this$props2;
        (_this$props2 = this.props).mouseLeave.apply(_this$props2, arguments);
      }
    }
  }, {
    key: "renderItems",
    value: function renderItems(carouselItems, className) {
      var _this3 = this;
      var slide = this.props.slide;
      return /* @__PURE__ */ React.createElement("div", {
        className
      }, carouselItems.map(function(item, index) {
        var isIn = index === _this3.state.activeIndex;
        return /* @__PURE__ */ React.cloneElement(item, {
          "in": isIn,
          slide
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props3 = this.props, cssModule = _this$props3.cssModule, slide = _this$props3.slide, className = _this$props3.className, dark = _this$props3.dark, fade = _this$props3.fade;
      var attributes = omit(this.props, propsToOmit);
      var outerClasses = mapToCssModules(classnames(className, "carousel", fade && "carousel-fade", slide && "slide", dark && "carousel-dark"), cssModule);
      var innerClasses = mapToCssModules(classnames("carousel-inner"), cssModule);
      var children = this.props.children.filter(function(child) {
        return child !== null && child !== void 0 && typeof child !== "boolean";
      });
      var slidesOnly = children.every(function(child) {
        return child.type === CarouselItem;
      });
      if (slidesOnly) {
        return /* @__PURE__ */ React.createElement("div", _extends$3({}, attributes, {
          className: outerClasses,
          onMouseEnter: this.hoverStart,
          onMouseLeave: this.hoverEnd
        }), /* @__PURE__ */ React.createElement(CarouselContext.Provider, {
          value: this.getContextValue()
        }, this.renderItems(children, innerClasses)));
      }
      if (children[0] instanceof Array) {
        var _carouselItems = children[0];
        var _controlLeft = children[1];
        var _controlRight = children[2];
        return /* @__PURE__ */ React.createElement("div", _extends$3({}, attributes, {
          className: outerClasses,
          onMouseEnter: this.hoverStart,
          onMouseLeave: this.hoverEnd
        }), /* @__PURE__ */ React.createElement(CarouselContext.Provider, {
          value: this.getContextValue()
        }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight));
      }
      var indicators = children[0];
      var wrappedOnClick = function wrappedOnClick2(e) {
        if (typeof indicators.props.onClickHandler === "function") {
          _this4.setState({
            indicatorClicked: true
          }, function() {
            return indicators.props.onClickHandler(e);
          });
        }
      };
      var wrappedIndicators = /* @__PURE__ */ React.cloneElement(indicators, {
        onClickHandler: wrappedOnClick
      });
      var carouselItems = children[1];
      var controlLeft = children[2];
      var controlRight = children[3];
      return /* @__PURE__ */ React.createElement("div", _extends$3({}, attributes, {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd
      }), /* @__PURE__ */ React.createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = null;
      var activeIndex = prevState.activeIndex, direction = prevState.direction, indicatorClicked = prevState.indicatorClicked;
      if (nextProps.activeIndex !== activeIndex) {
        if (nextProps.activeIndex === activeIndex + 1) {
          direction = "end";
        } else if (nextProps.activeIndex === activeIndex - 1) {
          direction = "start";
        } else if (nextProps.activeIndex < activeIndex) {
          direction = indicatorClicked ? "start" : "end";
        } else if (nextProps.activeIndex !== activeIndex) {
          direction = indicatorClicked ? "end" : "start";
        }
        newState = {
          activeIndex: nextProps.activeIndex,
          direction,
          indicatorClicked: false
        };
      }
      return newState;
    }
  }]);
  return Carousel2;
})(React.Component);
Carousel$1.propTypes = propTypes$1;
Carousel$1.defaultProps = defaultProps;
var _excluded$2 = ["direction", "onClickHandler", "cssModule", "directionText", "className"];
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
function CarouselControl(props) {
  var direction = props.direction, onClickHandler = props.onClickHandler, cssModule = props.cssModule, directionText = props.directionText, className = props.className, attributes = _objectWithoutProperties$2(props, _excluded$2);
  var anchorClasses = mapToCssModules(classnames(className, "carousel-control-".concat(direction)), cssModule);
  var iconClasses = mapToCssModules(classnames("carousel-control-".concat(direction, "-icon")), cssModule);
  var screenReaderClasses = mapToCssModules(classnames("visually-hidden"), cssModule);
  return (
    // We need to disable this linting rule to use an `<a>` instead of
    // `<button>` because that's what the Bootstrap examples require:
    // https://getbootstrap.com/docs/4.5/components/carousel/#with-controls
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    /* @__PURE__ */ React.createElement("a", _extends$2({}, attributes, {
      className: anchorClasses,
      style: {
        cursor: "pointer"
      },
      role: "button",
      tabIndex: "0",
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    }), /* @__PURE__ */ React.createElement("span", {
      className: iconClasses,
      "aria-hidden": "true"
    }), /* @__PURE__ */ React.createElement("span", {
      className: screenReaderClasses
    }, directionText || direction))
  );
}
CarouselControl.propTypes = {
  /** Set the direction of control button */
  direction: PropTypes.oneOf(["prev", "next"]).isRequired,
  /** Function to be triggered on click */
  onClickHandler: PropTypes.func.isRequired,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Screen reader text */
  directionText: PropTypes.string,
  /** Add custom class */
  className: PropTypes.string
};
var _excluded$1 = ["items", "activeIndex", "cssModule", "onClickHandler", "className"];
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
function CarouselIndicators(props) {
  var items = props.items, activeIndex = props.activeIndex, cssModule = props.cssModule, onClickHandler = props.onClickHandler, className = props.className, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var listClasses = mapToCssModules(classnames(className, "carousel-indicators"), cssModule);
  var indicators = items.map(function(item, idx) {
    var indicatorClasses = mapToCssModules(classnames({
      active: activeIndex === idx
    }), cssModule);
    return /* @__PURE__ */ React.createElement("button", {
      "aria-label": item.caption,
      "data-bs-target": true,
      type: "button",
      key: "".concat(item.key || Object.values(item).join("")),
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });
  return /* @__PURE__ */ React.createElement("div", _extends$1({
    className: listClasses
  }, attributes), indicators);
}
CarouselIndicators.propTypes = {
  /** The current active index */
  activeIndex: PropTypes.number.isRequired,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Array of items to show */
  items: PropTypes.array.isRequired,
  /** Function to be triggered on click */
  onClickHandler: PropTypes.func.isRequired
};
function CarouselCaption(props) {
  var captionHeader = props.captionHeader, captionText = props.captionText, cssModule = props.cssModule, className = props.className;
  var classes = mapToCssModules(classnames(className, "carousel-caption", "d-none", "d-md-block"), cssModule);
  return /* @__PURE__ */ React.createElement("div", {
    className: classes
  }, /* @__PURE__ */ React.createElement("h3", null, captionHeader), /* @__PURE__ */ React.createElement("p", null, captionText));
}
CarouselCaption.propTypes = {
  /** Heading for the caption */
  captionHeader: PropTypes.node,
  /** Text for caption */
  captionText: PropTypes.node.isRequired,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var _excluded = ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"];
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var propTypes = {
  items: PropTypes.array.isRequired,
  indicators: PropTypes.bool,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  defaultActiveIndex: PropTypes.number,
  activeIndex: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  goToIndex: PropTypes.func
};
var UncontrolledCarousel = /* @__PURE__ */ (function(_Component) {
  _inherits(UncontrolledCarousel2, _Component);
  var _super = _createSuper(UncontrolledCarousel2);
  function UncontrolledCarousel2(props) {
    var _this;
    _classCallCheck(this, UncontrolledCarousel2);
    _this = _super.call(this, props);
    _this.animating = false;
    _this.state = {
      activeIndex: props.defaultActiveIndex || 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(UncontrolledCarousel2, [{
    key: "onExiting",
    value: function onExiting() {
      this.animating = true;
    }
  }, {
    key: "onExited",
    value: function onExited() {
      this.animating = false;
    }
  }, {
    key: "next",
    value: function next() {
      var _this2 = this;
      if (this.animating) return;
      this.setState(function(prevState) {
        var nextIndex = prevState.activeIndex === _this2.props.items.length - 1 ? 0 : prevState.activeIndex + 1;
        return {
          activeIndex: nextIndex
        };
      });
    }
  }, {
    key: "previous",
    value: function previous() {
      var _this3 = this;
      if (this.animating) return;
      this.setState(function(prevState) {
        var nextIndex = prevState.activeIndex === 0 ? _this3.props.items.length - 1 : prevState.activeIndex - 1;
        return {
          activeIndex: nextIndex
        };
      });
    }
  }, {
    key: "goToIndex",
    value: function goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({
        activeIndex: newIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props = this.props;
      _this$props.defaultActiveIndex;
      var _this$props$autoPlay = _this$props.autoPlay, autoPlay = _this$props$autoPlay === void 0 ? true : _this$props$autoPlay, _this$props$indicator = _this$props.indicators, indicators = _this$props$indicator === void 0 ? true : _this$props$indicator, _this$props$controls = _this$props.controls, controls = _this$props$controls === void 0 ? true : _this$props$controls, items = _this$props.items, goToIndex = _this$props.goToIndex, props = _objectWithoutProperties(_this$props, _excluded);
      var activeIndex = this.state.activeIndex;
      var slides = items.map(function(item) {
        var key = item.key || item.src;
        return /* @__PURE__ */ React.createElement(CarouselItem, {
          onExiting: _this4.onExiting,
          onExited: _this4.onExited,
          key
        }, /* @__PURE__ */ React.createElement("img", {
          className: "d-block w-100",
          src: item.src,
          alt: item.altText
        }), /* @__PURE__ */ React.createElement(CarouselCaption, {
          captionText: item.caption,
          captionHeader: item.header || item.caption
        }));
      });
      return /* @__PURE__ */ React.createElement(Carousel$1, _extends({
        activeIndex,
        next: this.next,
        previous: this.previous,
        ride: autoPlay ? "carousel" : void 0
      }, props), indicators && /* @__PURE__ */ React.createElement(CarouselIndicators, {
        items,
        activeIndex: props.activeIndex || activeIndex,
        onClickHandler: goToIndex || this.goToIndex
      }), slides, controls && /* @__PURE__ */ React.createElement(CarouselControl, {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: props.previous || this.previous
      }), controls && /* @__PURE__ */ React.createElement(CarouselControl, {
        direction: "next",
        directionText: "Next",
        onClickHandler: props.next || this.next
      }));
    }
  }]);
  return UncontrolledCarousel2;
})(reactExports.Component);
UncontrolledCarousel.propTypes = propTypes;
const photo19 = "/apps/nsh/assets/19-DhcAyuFG.jpg";
const photo21 = "/apps/nsh/assets/21-zXwe9KmP.jpg";
const photo22 = "/apps/nsh/assets/22-HvQqch9R.jpg";
const photo24 = "/apps/nsh/assets/24-DH_QmqKP.jpg";
const photo25 = "/apps/nsh/assets/25-D0cyLg1B.jpg";
const photo16 = "/apps/nsh/assets/16-DMvJt1Fr.jpg";
const photo17 = "/apps/nsh/assets/17-cV06A5Jg.jpg";
const photoblue = "/apps/nsh/assets/blue-elBADNrm.jpg";
const photogreen = "/apps/nsh/assets/green-Cxfh9fBm.jpg";
const photored = "/apps/nsh/assets/red-BJPkdvrx.jpg";
const Carousel = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
  const elementRef4 = reactExports.useRef();
  const elementRef5 = reactExports.useRef();
  const elementRef6 = reactExports.useRef();
  const elementRef7 = reactExports.useRef();
  const elementRef8 = reactExports.useRef();
  const elementRef9 = reactExports.useRef();
  const elementRef10 = reactExports.useRef();
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
        title: "Carousel",
        home: "Home",
        name: "Elements",
        fonticonsname: "Carousel"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Carousel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "carousel-default",
            className: "carousel slide",
            "data-bs-ride": "carousel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UncontrolledCarousel,
              {
                indicators: false,
                interval: 4e3,
                controls: false,
                items: [
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo19
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo20
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo21
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo22
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo23
                  }
                ]
              }
            )
          }
        ) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `<UncontrolledCarousel
                indicators={false}
                interval={4000}
                controls={false}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo19,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo20,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo21,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo22,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo23,
                  },
                ]}
              />` }) }),
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Carousel with indicators" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "carousel-indicators",
            className: "carousel slide carouselindicators",
            "data-bs-ride": "carousel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UncontrolledCarousel,
              {
                interval: 4e3,
                controls: false,
                items: [
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo24
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo25
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo1
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo2
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo3
                  }
                ]
              }
            )
          }
        ) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `<UncontrolledCarousel
                interval={4000}
                controls={false}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo24,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo25,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo1,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo2,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo3,
                  },
                ]}
              />` }) }),
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Carousel with controls" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "carousel-controls",
            className: "carousel slide",
            "data-bs-ride": "carousel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UncontrolledCarousel,
              {
                indicators: false,
                interval: 4e3,
                items: [
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo4
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo5
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo6
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo7
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo8
                  }
                ]
              }
            )
          }
        ) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `<UncontrolledCarousel
                indicators={false}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo4,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo5,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo6,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo7,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo8,
                  },
                ]}
              />` }) }),
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Carousel with captions" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "carousel-captions",
            className: "carousel slide",
            "data-bs-ride": "carousel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UncontrolledCarousel,
              {
                indicators: false,
                interval: 4e3,
                items: [
                  {
                    key: 1,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo9
                  },
                  {
                    key: 2,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo10
                  },
                  {
                    key: 3,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo11
                  },
                  {
                    key: 4,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo12
                  },
                  {
                    key: 5,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo2$1
                  }
                ]
              }
            )
          }
        ) }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `<UncontrolledCarousel
                indicators={false}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo9,
                  },
                  {
                    key: 2,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo10,
                  },
                  {
                    key: 3,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo11,
                  },
                  {
                    key: 4,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo12,
                  },
                  {
                    key: 5,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo13,
                  },
                ]}
              />` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Carousel with top controls" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "carousel-indicators1",
            className: "carousel slide",
            "data-bs-ride": "carousel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UncontrolledCarousel,
              {
                controls: false,
                indicators: true,
                interval: 4e3,
                items: [
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src: photo12$1
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src: photo15
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src: photo16
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src: photo17
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src: photo18
                  }
                ]
              }
            )
          }
        ) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `<UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src: photo14,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src: photo15,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src: photo16,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src: photo17,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src: photo18,
                  },
                ]}
              />` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Carousel with top-right controls" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "carousel-indicators2",
            className: "carousel slide",
            "data-bs-ride": "carousel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UncontrolledCarousel,
              {
                controls: false,
                indicators: true,
                interval: 4e3,
                items: [
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src: photo19
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src: photo20
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src: photo21
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src: photo22
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src: photo23
                  }
                ]
              }
            )
          }
        ) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef6, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: ` <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo19,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo20,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo21,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo22,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo23,
                  },
                ]}
              />` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Carousel with top-left controls" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "carousel-indicators3",
            className: "carousel slide",
            "data-bs-ride": "carousel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UncontrolledCarousel,
              {
                controls: false,
                indicators: true,
                interval: 4e3,
                items: [
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src: photo24
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src: photo25
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src: photo1
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src: photo2
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src: photo3
                  }
                ]
              }
            )
          }
        ) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef7, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `<UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo24,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo25,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo1,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo2,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo3,
                  },
                ]}
              />` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef7);
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Carousel with bottom-right controls" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "carousel-indicators4",
            className: "carousel slide",
            "data-bs-ride": "carousel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UncontrolledCarousel,
              {
                controls: false,
                indicators: true,
                interval: 4e3,
                items: [
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src: photo4
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src: photo5
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src: photo6
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src: photo7
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src: photo8
                  }
                ]
              }
            )
          }
        ) }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef8, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `<UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo4,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo5,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo6,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo7,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo8,
                  },
                ]}
              />` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef8);
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Carousel with bottom-left controls" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "carousel-indicators5",
            className: "carousel slide",
            "data-bs-ride": "carousel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UncontrolledCarousel,
              {
                controls: false,
                indicators: true,
                interval: 4e3,
                items: [
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src: photo9
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src: photo10
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src: photo11
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src: photo12
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src: photo2$1
                  }
                ]
              }
            )
          }
        ) }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef9, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "language-markup mb-0", children: [
            `
              <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo9,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo10,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo11,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo12,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo13,
                  },
                ]}
              />
               `,
            " "
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef9);
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
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Carousel with Background color captions" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "carousel-captions2",
            className: "carousel slide",
            "data-bs-ride": "carousel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              UncontrolledCarousel,
              {
                controls: true,
                indicators: false,
                interval: 4e3,
                items: [
                  {
                    key: 1,
                    caption: "The wise man therefore always holds in these matters to this principle.",
                    altText: "",
                    src: photored
                  },
                  {
                    key: 2,
                    caption: "The wise man therefore always holds in these matters to this principle.",
                    altText: "",
                    src: photoblue
                  },
                  {
                    key: 3,
                    caption: "The wise man therefore always holds in these matters to this principle.",
                    altText: "",
                    src: photogreen
                  }
                ]
              }
            )
          }
        ) }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef10, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
                 <UncontrolledCarousel
                 controls={true}
                 indicators={false}
                 interval={4000}
                 items={[
                   {
                     key: 1,
                     caption: "The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.",
                     altText: "",
                     src:photored,
                   },
                   {
                     key: 2,
                     caption: "The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.",
                     altText: "",
                     src:photoblue,
                   },
                   {
                     key: 3,
                     caption: "The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.",
                     altText: "",
                     src:photogreen,
                   },
                 ]}
               />` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef10);
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
      ] }) })
    ] })
  ] });
};
Carousel.propTypes = {};
Carousel.defaultProps = {};
export {
  Carousel as default
};

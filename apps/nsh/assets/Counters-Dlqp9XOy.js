import { r as reactExports, q as propTypesExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, b as Link, h as CardBody, n as CardHeader } from "./index-zbnKGqDS.js";
import { p as photo8 } from "./8-DBQQbcvu.js";
import { p as photo9 } from "./9-Cd4JggXr.js";
import { p as photo10 } from "./10-8A9hOF9c.js";
import { g as getDefaultExportFromCjs, r as requireReact } from "./vendor-DcOWwNOt.js";
import { C as CardTitle } from "./CardTitle-5XhNrNGW.js";
import "./utils-pMlYcaaZ.js";
/*! zero-fill. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var zeroFill;
var hasRequiredZeroFill;
function requireZeroFill() {
  if (hasRequiredZeroFill) return zeroFill;
  hasRequiredZeroFill = 1;
  zeroFill = function zeroFill2(width, number, pad) {
    if (number === void 0) {
      return function(number2, pad2) {
        return zeroFill2(width, number2, pad2);
      };
    }
    if (pad === void 0) pad = "0";
    width -= number.toString().length;
    if (width > 0) return new Array(width + (/\./.test(number) ? 2 : 1)).join(pad) + number;
    return number + "";
  };
  return zeroFill;
}
var hhMmSs;
var hasRequiredHhMmSs;
function requireHhMmSs() {
  if (hasRequiredHhMmSs) return hhMmSs;
  hasRequiredHhMmSs = 1;
  hhMmSs = {
    fromMs,
    fromS,
    toMs,
    toS
  };
  const zeroFill2 = requireZeroFill();
  const HOUR = 36e5;
  const MINUTE = 6e4;
  const SECOND = 1e3;
  const TIME_FORMAT_ERRMSG = "Time format error";
  function fromMs(ms, format = "mm:ss") {
    if (typeof ms !== "number" || Number.isNaN(ms)) {
      throw new Error("NaN error");
    }
    let absMs = Math.abs(ms);
    let negative = ms < 0;
    let hours = Math.floor(absMs / HOUR);
    let minutes = Math.floor(absMs % HOUR / MINUTE);
    let seconds = Math.floor(absMs % MINUTE / SECOND);
    let miliseconds = Math.floor(absMs % SECOND);
    return formatTime2({
      negative,
      hours,
      minutes,
      seconds,
      miliseconds
    }, format);
  }
  function fromS(s, format = "mm:ss") {
    if (typeof s !== "number" || Number.isNaN(s)) {
      throw new Error("NaN error");
    }
    let ms = s * SECOND;
    return fromMs(ms, format);
  }
  function toMs(time, format = "mm:ss") {
    let re;
    if (["mm:ss", "mm:ss.sss", "hh:mm:ss", "hh:mm:ss.sss"].includes(format)) {
      re = /^(-)?(?:(\d\d+):)?(\d\d):(\d\d)(\.\d+)?$/;
    } else if (format === "hh:mm") {
      re = /^(-)?(\d\d):(\d\d)(?::(\d\d)(?:(\.\d+))?)?$/;
    } else {
      throw new Error(TIME_FORMAT_ERRMSG);
    }
    let result = re.exec(time);
    if (!result) throw new Error();
    let negative = result[1] === "-";
    let hours = result[2] | 0;
    let minutes = result[3] | 0;
    let seconds = result[4] | 0;
    let miliseconds = Math.floor(1e3 * result[5] | 0);
    if (minutes > 60 || seconds > 60) {
      throw new Error();
    }
    return (negative ? -1 : 1) * (hours * HOUR + minutes * MINUTE + seconds * SECOND + miliseconds);
  }
  function toS(time, format = "mm:ss") {
    let ms = toMs(time, format);
    return Math.floor(ms / SECOND);
  }
  function formatTime2(time, format) {
    let showMs;
    let showSc;
    let showHr;
    switch (format.toLowerCase()) {
      case "hh:mm:ss.sss":
        showMs = true;
        showSc = true;
        showHr = true;
        break;
      case "hh:mm:ss":
        showMs = !!time.miliseconds;
        showSc = true;
        showHr = true;
        break;
      case "hh:mm":
        showMs = !!time.miliseconds;
        showSc = showMs || !!time.seconds;
        showHr = true;
        break;
      case "mm:ss":
        showMs = !!time.miliseconds;
        showSc = true;
        showHr = !!time.hours;
        break;
      case "mm:ss.sss":
        showMs = true;
        showSc = true;
        showHr = !!time.hours;
        break;
      default:
        throw new Error(TIME_FORMAT_ERRMSG);
    }
    let hh = zeroFill2(2, time.hours);
    let mm = zeroFill2(2, time.minutes);
    let ss = zeroFill2(2, time.seconds);
    let sss = zeroFill2(3, time.miliseconds);
    return (time.negative ? "-" : "") + (showHr ? showMs ? `${hh}:${mm}:${ss}.${sss}` : showSc ? `${hh}:${mm}:${ss}` : `${hh}:${mm}` : showMs ? `${mm}:${ss}.${sss}` : `${mm}:${ss}`);
  }
  return hhMmSs;
}
var hhMmSsExports = requireHhMmSs();
const TimeFormat = /* @__PURE__ */ getDefaultExportFromCjs(hhMmSsExports);
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
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function zeroPad(value) {
  var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  var strValue = String(value);
  if (length === 0) return strValue;
  var match = strValue.match(/(.*?)([0-9]+)(.*)/);
  var prefix = match ? match[1] : "";
  var suffix = match ? match[3] : "";
  var strNo = match ? match[2] : strValue;
  var paddedNo = strNo.length >= length ? strNo : (_toConsumableArray(Array(length)).map(function() {
    return "0";
  }).join("") + strNo).slice(length * -1);
  return "".concat(prefix).concat(paddedNo).concat(suffix);
}
var timeDeltaFormatOptionsDefaults = {
  daysInHours: false,
  zeroPadTime: 2
};
function calcTimeDelta(date) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _options$now = options.now, now = _options$now === void 0 ? Date.now : _options$now, _options$precision = options.precision, precision = _options$precision === void 0 ? 0 : _options$precision, controlled = options.controlled, _options$offsetTime = options.offsetTime, offsetTime = _options$offsetTime === void 0 ? 0 : _options$offsetTime, overtime = options.overtime;
  var startTimestamp;
  if (typeof date === "string") {
    startTimestamp = new Date(date).getTime();
  } else if (date instanceof Date) {
    startTimestamp = date.getTime();
  } else {
    startTimestamp = date;
  }
  if (!controlled) {
    startTimestamp += offsetTime;
  }
  var timeLeft = controlled ? startTimestamp : startTimestamp - now();
  var clampedPrecision = Math.min(20, Math.max(0, precision));
  var total = Math.round(parseFloat(((overtime ? timeLeft : Math.max(0, timeLeft)) / 1e3).toFixed(clampedPrecision)) * 1e3);
  var seconds = Math.abs(total) / 1e3;
  return {
    total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor(seconds / 3600 % 24),
    minutes: Math.floor(seconds / 60 % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: Number((seconds % 1 * 1e3).toFixed()),
    completed: total <= 0
  };
}
function formatTimeDelta(timeDelta, options) {
  var days = timeDelta.days, hours = timeDelta.hours, minutes = timeDelta.minutes, seconds = timeDelta.seconds;
  var _Object$assign = Object.assign(Object.assign({}, timeDeltaFormatOptionsDefaults), options), daysInHours = _Object$assign.daysInHours, zeroPadTime = _Object$assign.zeroPadTime, _Object$assign$zeroPa = _Object$assign.zeroPadDays, zeroPadDays = _Object$assign$zeroPa === void 0 ? zeroPadTime : _Object$assign$zeroPa;
  var zeroPadTimeLength = Math.min(2, zeroPadTime);
  var formattedHours = daysInHours ? zeroPad(hours + days * 24, zeroPadTime) : zeroPad(hours, zeroPadTimeLength);
  return {
    days: daysInHours ? "" : zeroPad(days, zeroPadDays),
    hours: formattedHours,
    minutes: zeroPad(minutes, zeroPadTimeLength),
    seconds: zeroPad(seconds, zeroPadTimeLength)
  };
}
var Countdown = (function(_React$Component) {
  _inherits(Countdown2, _React$Component);
  var _super = _createSuper(Countdown2);
  function Countdown2() {
    var _this;
    _classCallCheck(this, Countdown2);
    _this = _super.apply(this, arguments);
    _this.state = {
      count: _this.props.count || 3
    };
    _this.startCountdown = function() {
      _this.interval = window.setInterval(function() {
        var count = _this.state.count - 1;
        if (count === 0) {
          _this.stopCountdown();
          _this.props.onComplete && _this.props.onComplete();
        } else {
          _this.setState(function(prevState) {
            return {
              count: prevState.count - 1
            };
          });
        }
      }, 1e3);
    };
    _this.stopCountdown = function() {
      clearInterval(_this.interval);
    };
    _this.addTime = function(seconds) {
      _this.stopCountdown();
      _this.setState(function(prevState) {
        return {
          count: prevState.count + seconds
        };
      }, _this.startCountdown);
    };
    return _this;
  }
  _createClass(Countdown2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCountdown();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children ? reactExports.cloneElement(this.props.children, {
        count: this.state.count
      }) : null;
    }
  }]);
  return Countdown2;
})(reactExports.Component);
Countdown.propTypes = {
  count: propTypesExports.number,
  children: propTypesExports.element,
  onComplete: propTypesExports.func
};
var Countdown$1 = (function(_React$Component) {
  _inherits(Countdown$12, _React$Component);
  var _super = _createSuper(Countdown$12);
  function Countdown$12(props) {
    var _this;
    _classCallCheck(this, Countdown$12);
    _this = _super.call(this, props);
    _this.mounted = false;
    _this.initialTimestamp = _this.calcOffsetStartTimestamp();
    _this.offsetStartTimestamp = _this.props.autoStart ? 0 : _this.initialTimestamp;
    _this.offsetTime = 0;
    _this.legacyMode = false;
    _this.legacyCountdownRef = null;
    _this.tick = function() {
      var timeDelta2 = _this.calcTimeDelta();
      var callback = timeDelta2.completed && !_this.props.overtime ? void 0 : _this.props.onTick;
      _this.setTimeDeltaState(timeDelta2, void 0, callback);
    };
    _this.setLegacyCountdownRef = function(ref) {
      _this.legacyCountdownRef = ref;
    };
    _this.start = function() {
      if (_this.isStarted()) return;
      var prevOffsetStartTimestamp = _this.offsetStartTimestamp;
      _this.offsetStartTimestamp = 0;
      _this.offsetTime += prevOffsetStartTimestamp ? _this.calcOffsetStartTimestamp() - prevOffsetStartTimestamp : 0;
      var timeDelta2 = _this.calcTimeDelta();
      _this.setTimeDeltaState(timeDelta2, "STARTED", _this.props.onStart);
      if (!_this.props.controlled && (!timeDelta2.completed || _this.props.overtime)) {
        _this.clearTimer();
        _this.interval = window.setInterval(_this.tick, _this.props.intervalDelay);
      }
    };
    _this.pause = function() {
      if (_this.isPaused()) return;
      _this.clearTimer();
      _this.offsetStartTimestamp = _this.calcOffsetStartTimestamp();
      _this.setTimeDeltaState(_this.state.timeDelta, "PAUSED", _this.props.onPause);
    };
    _this.stop = function() {
      if (_this.isStopped()) return;
      _this.clearTimer();
      _this.offsetStartTimestamp = _this.calcOffsetStartTimestamp();
      _this.offsetTime = _this.offsetStartTimestamp - _this.initialTimestamp;
      _this.setTimeDeltaState(_this.calcTimeDelta(), "STOPPED", _this.props.onStop);
    };
    _this.isStarted = function() {
      return _this.isStatus("STARTED");
    };
    _this.isPaused = function() {
      return _this.isStatus("PAUSED");
    };
    _this.isStopped = function() {
      return _this.isStatus("STOPPED");
    };
    _this.isCompleted = function() {
      return _this.isStatus("COMPLETED");
    };
    if (props.date) {
      var timeDelta = _this.calcTimeDelta();
      _this.state = {
        timeDelta,
        status: timeDelta.completed ? "COMPLETED" : "STOPPED"
      };
    } else {
      _this.legacyMode = true;
    }
    return _this;
  }
  _createClass(Countdown$12, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.legacyMode) {
        return;
      }
      this.mounted = true;
      if (this.props.onMount) this.props.onMount(this.calcTimeDelta());
      if (this.props.autoStart) this.start();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.legacyMode) {
        return;
      }
      if (this.props.date !== prevProps.date) {
        this.initialTimestamp = this.calcOffsetStartTimestamp();
        this.offsetStartTimestamp = this.initialTimestamp;
        this.offsetTime = 0;
        this.setTimeDeltaState(this.calcTimeDelta());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.legacyMode) {
        return;
      }
      this.mounted = false;
      this.clearTimer();
    }
  }, {
    key: "calcTimeDelta",
    value: function calcTimeDelta$1() {
      var _this$props = this.props, date = _this$props.date, now = _this$props.now, precision = _this$props.precision, controlled = _this$props.controlled, overtime = _this$props.overtime;
      return calcTimeDelta(date, {
        now,
        precision,
        controlled,
        offsetTime: this.offsetTime,
        overtime
      });
    }
  }, {
    key: "calcOffsetStartTimestamp",
    value: function calcOffsetStartTimestamp() {
      return Date.now();
    }
  }, {
    key: "addTime",
    value: function addTime(seconds) {
      this.legacyCountdownRef.addTime(seconds);
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      window.clearInterval(this.interval);
    }
  }, {
    key: "isStatus",
    value: function isStatus(status) {
      return this.state.status === status;
    }
  }, {
    key: "setTimeDeltaState",
    value: function setTimeDeltaState(timeDelta, status, callback) {
      var _this2 = this;
      if (!this.mounted) return;
      var completing = timeDelta.completed && !this.state.timeDelta.completed;
      var completedOnStart = timeDelta.completed && status === "STARTED";
      if (completing && !this.props.overtime) {
        this.clearTimer();
      }
      var onDone = function onDone2() {
        if (callback) callback(_this2.state.timeDelta);
        if (_this2.props.onComplete && (completing || completedOnStart)) {
          _this2.props.onComplete(timeDelta, completedOnStart);
        }
      };
      return this.setState(function(prevState) {
        var newStatus = status || prevState.status;
        if (timeDelta.completed && !_this2.props.overtime) {
          newStatus = "COMPLETED";
        } else if (!status && newStatus === "COMPLETED") {
          newStatus = "STOPPED";
        }
        return {
          timeDelta,
          status: newStatus
        };
      }, onDone);
    }
  }, {
    key: "getApi",
    value: function getApi() {
      return this.api = this.api || {
        start: this.start,
        pause: this.pause,
        stop: this.stop,
        isStarted: this.isStarted,
        isPaused: this.isPaused,
        isStopped: this.isStopped,
        isCompleted: this.isCompleted
      };
    }
  }, {
    key: "getRenderProps",
    value: function getRenderProps() {
      var _this$props2 = this.props, daysInHours = _this$props2.daysInHours, zeroPadTime = _this$props2.zeroPadTime, zeroPadDays = _this$props2.zeroPadDays;
      var timeDelta = this.state.timeDelta;
      return Object.assign(Object.assign({}, timeDelta), {
        api: this.getApi(),
        props: this.props,
        formatted: formatTimeDelta(timeDelta, {
          daysInHours,
          zeroPadTime,
          zeroPadDays
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.legacyMode) {
        var _this$props3 = this.props, count = _this$props3.count, _children = _this$props3.children, onComplete = _this$props3.onComplete;
        return reactExports.createElement(Countdown, {
          ref: this.setLegacyCountdownRef,
          count,
          onComplete
        }, _children);
      }
      var _this$props4 = this.props, className = _this$props4.className, overtime = _this$props4.overtime, children = _this$props4.children, renderer2 = _this$props4.renderer;
      var renderProps = this.getRenderProps();
      if (renderer2) {
        return renderer2(renderProps);
      }
      if (children && this.state.timeDelta.completed && !overtime) {
        return reactExports.cloneElement(children, {
          countdown: renderProps
        });
      }
      var _renderProps$formatte = renderProps.formatted, days = _renderProps$formatte.days, hours = _renderProps$formatte.hours, minutes = _renderProps$formatte.minutes, seconds = _renderProps$formatte.seconds;
      return reactExports.createElement("span", {
        className
      }, renderProps.total < 0 ? "-" : "", days, days ? ":" : "", hours, ":", minutes, ":", seconds);
    }
  }]);
  return Countdown$12;
})(reactExports.Component);
Countdown$1.defaultProps = Object.assign(Object.assign({}, timeDeltaFormatOptionsDefaults), {
  controlled: false,
  intervalDelay: 1e3,
  precision: 0,
  autoStart: true
});
Countdown$1.propTypes = {
  date: propTypesExports.oneOfType([propTypesExports.instanceOf(Date), propTypesExports.string, propTypesExports.number]),
  daysInHours: propTypesExports.bool,
  zeroPadTime: propTypesExports.number,
  zeroPadDays: propTypesExports.number,
  controlled: propTypesExports.bool,
  intervalDelay: propTypesExports.number,
  precision: propTypesExports.number,
  autoStart: propTypesExports.bool,
  overtime: propTypesExports.bool,
  className: propTypesExports.string,
  children: propTypesExports.element,
  renderer: propTypesExports.func,
  now: propTypesExports.func,
  onMount: propTypesExports.func,
  onStart: propTypesExports.func,
  onPause: propTypesExports.func,
  onStop: propTypesExports.func,
  onTick: propTypesExports.func,
  onComplete: propTypesExports.func
};
function Middle() {
  const intervalRef = reactExports.useRef(null);
  const [timer, setTimer] = reactExports.useState("00:00:00");
  reactExports.useEffect(() => {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(/* @__PURE__ */ new Date());
      const seconds = Math.floor(total / 1e3 % 60);
      const minutes = Math.floor(total / 1e3 / 60 % 60);
      const hours = Math.floor(total / 1e3 * 60 * 60 % 60);
      return {
        total,
        hours,
        minutes,
        seconds
      };
    }
    function startTimer(deadline) {
      let { total, hours, minutes, seconds } = getTimeRemaining(deadline);
      if (total >= 0) {
        setTimer(
          (hours ? hours : "0" + hours) + ":" + (minutes ? minutes : "0" + minutes) + ":" + (seconds ? seconds : "0" + seconds)
        );
      } else {
        clearInterval(intervalRef.current);
      }
    }
    function clearTimer(endtime) {
      setTimer("00:00:60");
      if (intervalRef.current) clearInterval(intervalRef.current);
      const id = setInterval(() => {
        startTimer(endtime);
      }, 1e3);
      intervalRef.current = id;
    }
    function getDeadlineTime() {
      let deadline = /* @__PURE__ */ new Date();
      deadline.setSeconds(deadline.getSeconds() + 60);
      return deadline;
    }
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: timer });
}
const formatTime = (time) => ` ${String(Math.floor(time / 60)).padStart(2, "0")} : ${String(
  time % 60
).padStart(2, "0")}`;
const Timer = ({ time }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    " 00 Days 00 :",
    formatTime(time)
  ] }) });
};
const IntervalTimerFunctional = () => {
  const [time, setTime] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const timerId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1e3);
    return () => clearInterval(timerId);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { time });
};
function Uptimer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IntervalTimerFunctional, {});
}
const Timers = ({ min }) => {
  let mainTime;
  const secondsLeft = () => {
    const left = Number(min) * 60;
    return left;
  };
  const [seconds, setSeconds] = reactExports.useState(secondsLeft());
  reactExports.useEffect(() => {
    startTime();
    return () => {
      stopTimer();
    };
  });
  const startTime = () => {
    if (seconds && seconds > 20) {
      mainTime = setInterval(tick, 1e3);
    }
  };
  const stopTimer = () => {
    clearInterval(mainTime);
  };
  const tick = () => {
    setSeconds((seconds2) => {
      const updatedSeconds = seconds2 - 1;
      if (updatedSeconds < 1) {
        stopTimer();
      }
      return updatedSeconds;
    });
  };
  const display = TimeFormat.fromS(seconds, "hh:mm:ss");
  const [h, m, s] = display.split(":");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    h,
    " : ",
    m,
    " : ",
    s
  ] });
};
const AfterComplete = () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "You are good to go!" });
const rendering = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AfterComplete, {});
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "under-countdown row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-xl-3 col-sm-6 mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "countdown", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "days", children: days }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "", children: "Days" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-xl-3 col-sm-6 mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "countdown", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hours", children: hours }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "", children: "Hours" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-xl-3 col-sm-6 mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "countdown", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "minutes", children: minutes }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "", children: "Minutes" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-xl-3 col-sm-6 mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "countdown", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seconds", children: seconds }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "", children: "Seconds" })
      ] }) })
    ] });
  }
};
function DayCounter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown$1, { date: Date.now() + 30888e5, renderer: rendering });
}
const AfterCompletion = () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "You are good to go!" });
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AfterCompletion, {});
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h3 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      days,
      "Days ",
      hours,
      " Hours ",
      minutes,
      " Minutes ",
      seconds,
      " Seconds"
    ] }) });
  }
};
function TimeCountingdaysLimit() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown$1, { date: Date.now() + 2592e5, renderer });
}
var build = {};
var countUp_umd$1 = { exports: {} };
var countUp_umd = countUp_umd$1.exports;
var hasRequiredCountUp_umd;
function requireCountUp_umd() {
  if (hasRequiredCountUp_umd) return countUp_umd$1.exports;
  hasRequiredCountUp_umd = 1;
  (function(module, exports$1) {
    !(function(t, i) {
      i(exports$1);
    })(countUp_umd, (function(t) {
      var i = function() {
        return i = Object.assign || function(t2) {
          for (var i2, n2 = 1, s = arguments.length; n2 < s; n2++) for (var e in i2 = arguments[n2]) Object.prototype.hasOwnProperty.call(i2, e) && (t2[e] = i2[e]);
          return t2;
        }, i.apply(this, arguments);
      }, n = (function() {
        function t2(t3, n2, s) {
          var e = this;
          this.endVal = n2, this.options = s, this.version = "2.9.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t4) {
            e.startTime || (e.startTime = t4);
            var i2 = t4 - e.startTime;
            e.remaining = e.duration - i2, e.useEasing ? e.countDown ? e.frameVal = e.startVal - e.easingFn(i2, 0, e.startVal - e.endVal, e.duration) : e.frameVal = e.easingFn(i2, e.startVal, e.endVal - e.startVal, e.duration) : e.frameVal = e.startVal + (e.endVal - e.startVal) * (i2 / e.duration);
            var n3 = e.countDown ? e.frameVal < e.endVal : e.frameVal > e.endVal;
            e.frameVal = n3 ? e.endVal : e.frameVal, e.frameVal = Number(e.frameVal.toFixed(e.options.decimalPlaces)), e.printValue(e.frameVal), i2 < e.duration ? e.rAF = requestAnimationFrame(e.count) : null !== e.finalEndVal ? e.update(e.finalEndVal) : e.options.onCompleteCallback && e.options.onCompleteCallback();
          }, this.formatNumber = function(t4) {
            var i2, n3, s2, a, o = t4 < 0 ? "-" : "";
            i2 = Math.abs(t4).toFixed(e.options.decimalPlaces);
            var r = (i2 += "").split(".");
            if (n3 = r[0], s2 = r.length > 1 ? e.options.decimal + r[1] : "", e.options.useGrouping) {
              a = "";
              for (var l = 3, u = 0, h = 0, p = n3.length; h < p; ++h) e.options.useIndianSeparators && 4 === h && (l = 2, u = 1), 0 !== h && u % l == 0 && (a = e.options.separator + a), u++, a = n3[p - h - 1] + a;
              n3 = a;
            }
            return e.options.numerals && e.options.numerals.length && (n3 = n3.replace(/[0-9]/g, (function(t5) {
              return e.options.numerals[+t5];
            })), s2 = s2.replace(/[0-9]/g, (function(t5) {
              return e.options.numerals[+t5];
            }))), o + e.options.prefix + n3 + s2 + e.options.suffix;
          }, this.easeOutExpo = function(t4, i2, n3, s2) {
            return n3 * (1 - Math.pow(2, -10 * t4 / s2)) * 1024 / 1023 + i2;
          }, this.options = i(i({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.el = "string" == typeof t3 ? document.getElementById(t3) : t3, n2 = null == n2 ? this.parse(this.el.innerHTML) : n2, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n2), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push((function() {
            return e.handleScroll(e);
          })), window.onscroll = function() {
            window.onScrollFns.forEach((function(t4) {
              return t4();
            }));
          }, this.handleScroll(this)));
        }
        return t2.prototype.handleScroll = function(t3) {
          if (t3 && window && !t3.once) {
            var i2 = window.innerHeight + window.scrollY, n2 = t3.el.getBoundingClientRect(), s = n2.top + window.pageYOffset, e = n2.top + n2.height + window.pageYOffset;
            e < i2 && e > window.scrollY && t3.paused ? (t3.paused = false, setTimeout((function() {
              return t3.start();
            }), t3.options.scrollSpyDelay), t3.options.scrollSpyOnce && (t3.once = true)) : (window.scrollY > e || s > i2) && !t3.paused && t3.reset();
          }
        }, t2.prototype.determineDirectionAndSmartEasing = function() {
          var t3 = this.finalEndVal ? this.finalEndVal : this.endVal;
          this.countDown = this.startVal > t3;
          var i2 = t3 - this.startVal;
          if (Math.abs(i2) > this.options.smartEasingThreshold && this.options.useEasing) {
            this.finalEndVal = t3;
            var n2 = this.countDown ? 1 : -1;
            this.endVal = t3 + n2 * this.options.smartEasingAmount, this.duration = this.duration / 2;
          } else this.endVal = t3, this.finalEndVal = null;
          null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
        }, t2.prototype.start = function(t3) {
          this.error || (this.options.onStartCallback && this.options.onStartCallback(), t3 && (this.options.onCompleteCallback = t3), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
        }, t2.prototype.pauseResume = function() {
          this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
        }, t2.prototype.reset = function() {
          cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
        }, t2.prototype.update = function(t3) {
          cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t3), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
        }, t2.prototype.printValue = function(t3) {
          var i2;
          if (this.el) {
            var n2 = this.formattingFn(t3);
            if (null === (i2 = this.options.plugin) || void 0 === i2 ? void 0 : i2.render) this.options.plugin.render(this.el, n2);
            else if ("INPUT" === this.el.tagName) this.el.value = n2;
            else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n2 : this.el.innerHTML = n2;
          }
        }, t2.prototype.ensureNumber = function(t3) {
          return "number" == typeof t3 && !isNaN(t3);
        }, t2.prototype.validateValue = function(t3) {
          var i2 = Number(t3);
          return this.ensureNumber(i2) ? i2 : (this.error = "[CountUp] invalid start or end value: ".concat(t3), null);
        }, t2.prototype.resetDuration = function() {
          this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
        }, t2.prototype.parse = function(t3) {
          var i2 = function(t4) {
            return t4.replace(/([.,'  ])/g, "\\$1");
          }, n2 = i2(this.options.separator), s = i2(this.options.decimal), e = t3.replace(new RegExp(n2, "g"), "").replace(new RegExp(s, "g"), ".");
          return parseFloat(e);
        }, t2;
      })();
      t.CountUp = n;
    }));
  })(countUp_umd$1, countUp_umd$1.exports);
  return countUp_umd$1.exports;
}
var hasRequiredBuild;
function requireBuild() {
  if (hasRequiredBuild) return build;
  hasRequiredBuild = 1;
  Object.defineProperty(build, "__esModule", { value: true });
  var React = requireReact();
  var countup_js = requireCountUp_umd();
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e, n, i, u, a = [], f = true, o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ;
        else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
      } catch (r2) {
        o = true, n = r2;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
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
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? React.useLayoutEffect : React.useEffect;
  function useEventCallback(fn) {
    var ref = React.useRef(fn);
    useIsomorphicLayoutEffect(function() {
      ref.current = fn;
    });
    return React.useCallback(function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return ref.current.apply(void 0, args);
    }, []);
  }
  var createCountUpInstance = function createCountUpInstance2(el, props) {
    var decimal = props.decimal, decimals = props.decimals, duration = props.duration, easingFn = props.easingFn, end = props.end, formattingFn = props.formattingFn, numerals = props.numerals, prefix = props.prefix, separator = props.separator, start = props.start, suffix = props.suffix, useEasing = props.useEasing, useGrouping = props.useGrouping, useIndianSeparators = props.useIndianSeparators, enableScrollSpy = props.enableScrollSpy, scrollSpyDelay = props.scrollSpyDelay, scrollSpyOnce = props.scrollSpyOnce, plugin = props.plugin;
    return new countup_js.CountUp(el, end, {
      startVal: start,
      duration,
      decimal,
      decimalPlaces: decimals,
      easingFn,
      formattingFn,
      numerals,
      separator,
      prefix,
      suffix,
      plugin,
      useEasing,
      useIndianSeparators,
      useGrouping,
      enableScrollSpy,
      scrollSpyDelay,
      scrollSpyOnce
    });
  };
  var _excluded$1 = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"];
  var DEFAULTS = {
    decimal: ".",
    separator: ",",
    delay: null,
    prefix: "",
    suffix: "",
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: true,
    enableReinitialize: true,
    useEasing: true,
    useGrouping: true,
    useIndianSeparators: false
  };
  var useCountUp = function useCountUp2(props) {
    var filteredProps = Object.fromEntries(Object.entries(props).filter(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), value = _ref2[1];
      return value !== void 0;
    }));
    var _useMemo = React.useMemo(function() {
      return _objectSpread2(_objectSpread2({}, DEFAULTS), filteredProps);
    }, [props]), ref = _useMemo.ref, startOnMount = _useMemo.startOnMount, enableReinitialize = _useMemo.enableReinitialize, delay = _useMemo.delay, onEnd = _useMemo.onEnd, onStart = _useMemo.onStart, onPauseResume = _useMemo.onPauseResume, onReset = _useMemo.onReset, onUpdate = _useMemo.onUpdate, instanceProps = _objectWithoutProperties(_useMemo, _excluded$1);
    var countUpRef = React.useRef();
    var timerRef = React.useRef();
    var isInitializedRef = React.useRef(false);
    var createInstance = useEventCallback(function() {
      return createCountUpInstance(typeof ref === "string" ? ref : ref.current, instanceProps);
    });
    var getCountUp = useEventCallback(function(recreate) {
      var countUp = countUpRef.current;
      if (countUp && !recreate) {
        return countUp;
      }
      var newCountUp = createInstance();
      countUpRef.current = newCountUp;
      return newCountUp;
    });
    var start = useEventCallback(function() {
      var run = function run2() {
        return getCountUp(true).start(function() {
          onEnd === null || onEnd === void 0 || onEnd({
            pauseResume,
            reset,
            start: restart,
            update
          });
        });
      };
      if (delay && delay > 0) {
        timerRef.current = setTimeout(run, delay * 1e3);
      } else {
        run();
      }
      onStart === null || onStart === void 0 || onStart({
        pauseResume,
        reset,
        update
      });
    });
    var pauseResume = useEventCallback(function() {
      getCountUp().pauseResume();
      onPauseResume === null || onPauseResume === void 0 || onPauseResume({
        reset,
        start: restart,
        update
      });
    });
    var reset = useEventCallback(function() {
      if (getCountUp().el) {
        timerRef.current && clearTimeout(timerRef.current);
        getCountUp().reset();
        onReset === null || onReset === void 0 || onReset({
          pauseResume,
          start: restart,
          update
        });
      }
    });
    var update = useEventCallback(function(newEnd) {
      getCountUp().update(newEnd);
      onUpdate === null || onUpdate === void 0 || onUpdate({
        pauseResume,
        reset,
        start: restart
      });
    });
    var restart = useEventCallback(function() {
      reset();
      start();
    });
    var maybeInitialize = useEventCallback(function(shouldReset) {
      if (startOnMount) {
        if (shouldReset) {
          reset();
        }
        start();
      }
    });
    React.useEffect(function() {
      if (!isInitializedRef.current) {
        isInitializedRef.current = true;
        maybeInitialize();
      } else if (enableReinitialize) {
        maybeInitialize(true);
      }
    }, [enableReinitialize, isInitializedRef, maybeInitialize, delay, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.formattingFn]);
    React.useEffect(function() {
      return function() {
        reset();
      };
    }, [reset]);
    return {
      start: restart,
      pauseResume,
      reset,
      update,
      getCountUp
    };
  };
  var _excluded = ["className", "redraw", "containerProps", "children", "style"];
  var CountUp2 = function CountUp3(props) {
    var className = props.className, redraw = props.redraw, containerProps = props.containerProps, children = props.children, style = props.style, useCountUpProps = _objectWithoutProperties(props, _excluded);
    var containerRef = React.useRef(null);
    var isInitializedRef = React.useRef(false);
    var _useCountUp = useCountUp(_objectSpread2(_objectSpread2({}, useCountUpProps), {}, {
      ref: containerRef,
      startOnMount: typeof children !== "function" || props.delay === 0,
      // component manually restarts
      enableReinitialize: false
    })), start = _useCountUp.start, reset = _useCountUp.reset, updateCountUp = _useCountUp.update, pauseResume = _useCountUp.pauseResume, getCountUp = _useCountUp.getCountUp;
    var restart = useEventCallback(function() {
      start();
    });
    var update = useEventCallback(function(end) {
      if (!props.preserveValue) {
        reset();
      }
      updateCountUp(end);
    });
    var initializeOnMount = useEventCallback(function() {
      if (typeof props.children === "function") {
        if (!(containerRef.current instanceof Element)) {
          console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);
          return;
        }
      }
      getCountUp();
    });
    React.useEffect(function() {
      initializeOnMount();
    }, [initializeOnMount]);
    React.useEffect(function() {
      if (isInitializedRef.current) {
        update(props.end);
      }
    }, [props.end, update]);
    var redrawDependencies = redraw && props;
    React.useEffect(function() {
      if (redraw && isInitializedRef.current) {
        restart();
      }
    }, [restart, redraw, redrawDependencies]);
    React.useEffect(function() {
      if (!redraw && isInitializedRef.current) {
        restart();
      }
    }, [restart, redraw, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.className, props.formattingFn]);
    React.useEffect(function() {
      isInitializedRef.current = true;
    }, []);
    if (typeof children === "function") {
      return children({
        countUpRef: containerRef,
        start,
        reset,
        update: updateCountUp,
        pauseResume,
        getCountUp
      });
    }
    return /* @__PURE__ */ React.createElement("span", _extends({
      className,
      ref: containerRef,
      style
    }, containerProps), typeof props.start !== "undefined" ? getCountUp().formattingFn(props.start) : "");
  };
  build.default = CountUp2;
  build.useCountUp = useCountUp;
  return build;
}
var buildExports = requireBuild();
const CountUp = /* @__PURE__ */ getDefaultExportFromCjs(buildExports);
const Counters = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "Counters",
      home: "Home",
      name: "Apps",
      fonticonsname: "Counters"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "card-img-top  ",
          src: photo8,
          alt: "img"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "d-flex flex-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-weight-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: "Time Counting From 0" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted", children: "To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary p-3 br-3 mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            id: "timer-countup",
            className: "h4 text-white mb-0 font-weight-bold",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Uptimer, {})
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "card-img-top ",
          src: photo9,
          alt: "img"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "d-flex flex-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-weight-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: "Time Counting From 60 to 20" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted", children: "To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary p-3 br-3 mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            id: "timer-countinbetween",
            className: "h4 text-white mb-0 font-weight-bold",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Timers, { min: 1 })
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "card-img-top ",
          src: photo10,
          alt: "img"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "d-flex flex-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-weight-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: "Time 1 minute counter" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted", children: "To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-warning p-3 br-3 mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            id: "timer-countercallback",
            className: "h4 text-white mb-0 font-weight-bold",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Middle, {})
          }
        ) })
      ] })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Time Counting days Limit" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-info p-3 br-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          id: "timer-outputpattern",
          className: "h3 text-white mb-0 font-weight-bold",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimeCountingdaysLimit, {})
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Numbers counter" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center list-icons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-user text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mt-4", children: "Employess" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { className: "h2", end: 2569 })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Numbers counter" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center list-icons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-dollar-sign text-success" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mt-4", children: "Profit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { className: "h2", start: 0, end: 56989.32, prefix: "2,", decimal: ".", decimals: 2 })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Numbers counter" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center list-icons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-alert-circle text-secondary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mt-4", children: "Errors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { className: "h2", end: 8998, prefix: "0." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Day Counter" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DayCounter, {}) })
    ] }) })
  ] })
] });
export {
  Counters as default
};

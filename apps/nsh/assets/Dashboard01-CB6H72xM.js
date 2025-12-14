import { a as React, P as PropTypes, j as jsxRuntimeExports, r as reactExports } from "./mui-6YGer9Nu.js";
import { m as mapToCssModules, i as classnames, t as tagPropType, k as useDispatch, l as ServiceFactory, g as Card, n as CardHeader, h as CardBody, o as Spinner, p as Alert, T as Table, q as PageHeader, R as Row, C as Col, r as Progress, s as Badge, b as Link, c as DropdownToggle, D as DropdownMenu, A as APIServices } from "./index-DRovfVAv.js";
import { r as reactTableExports } from "./index-D8JvFaG3.js";
import { h } from "./react-apexcharts.esm-CkgSm5Qi.js";
import { u as user12 } from "./12-DCQ8KYQr.js";
import { u as user5 } from "./5-vtpEo8ki.js";
import { u as user10 } from "./10-DvLRbf8W.js";
import { u as user2 } from "./2-C7nMX_t4.js";
import { u as user4 } from "./4-B2cp7gEW.js";
import { u as user1 } from "./1-D9D-sDJ2.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-Bd29La1Q.js";
import { S as SimpleBar } from "./index-DRCK5GEP.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
var _excluded = ["className", "cssModule", "size", "vertical", "tag"];
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
  /** Aria label */
  "aria-label": PropTypes.string,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
  role: PropTypes.string,
  /** Make the button bigger or smaller */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Make button group vertical */
  vertical: PropTypes.bool
};
function ButtonGroup(props) {
  var className = props.className, cssModule = props.cssModule, size = props.size, vertical = props.vertical, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classnames(className, size ? "btn-group-" + size : false, vertical ? "btn-group-vertical" : "btn-group"), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, _objectSpread({
    role: "group"
  }, attributes), {
    className: classes
  }));
}
ButtonGroup.propTypes = propTypes;
const orders1 = "/apps/nsh/assets/1-B40LmhLB.jpg";
const orders2 = "/apps/nsh/assets/2-B1125gc4.jpg";
const orders3 = "/apps/nsh/assets/3-vY58UaN8.jpg";
const orders5 = "/apps/nsh/assets/5-B06K3V5x.jpg";
const orders4 = "/apps/nsh/assets/4-NAELErLY.jpg";
const orders7 = "/apps/nsh/assets/7-BQLUYFDu.jpg";
const orders8 = "/apps/nsh/assets/8-Dabh9MmQ.jpg";
const orders10 = "/apps/nsh/assets/10-nIjMLiv2.jpg";
const orders11 = "/apps/nsh/assets/11-CS9ZU_RC.jpg";
const orders14 = "/apps/nsh/assets/14-y_SeMaWZ.jpg";
const orders12 = "/apps/nsh/assets/12-kZm00M9s.jpg";
const orders9 = "/apps/nsh/assets/9-DLG-scjE.jpg";
class ApexChart1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Sales",
          data: [253, 256, 395, 204, 251, 458, 364, 145, 156, 250, 253, 278]
        }
      ],
      options: {
        colors: ["#4454c3"],
        chart: {
          height: 400,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: void 0,
          width: 3,
          dashArray: 0
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          title: {
            text: "Month",
            style: {
              color: "#8e9cad",
              fontSize: "15px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label"
            }
          }
        },
        yaxis: {
          title: {
            text: "Revenue",
            style: {
              color: "#8e9cad",
              fontSize: "15px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label"
            }
          },
          color: "#8e9cad"
        },
        tooltip: {
          show: true
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      h,
      {
        options: this.state.options,
        series: this.state.series,
        type: "area",
        height: 400
      }
    ) });
  }
}
class ApexChart3 extends React.Component {
  constructor(props) {
    super(props);
    var sparklineData2 = [
      0,
      45,
      93,
      53,
      61,
      27,
      54,
      43,
      19,
      46,
      54,
      38,
      56,
      24,
      65,
      31,
      37,
      39,
      62,
      51,
      35,
      41,
      35,
      27
    ];
    this.state = {
      seriesSpark3: [
        {
          data: sparklineData2
        }
      ],
      optionsSpark3: {
        chart: {
          type: "area",
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: void 0,
          width: 2,
          dashArray: 0
        },
        fill: {
          opacity: 0.3
        },
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0
        },
        title: {
          offsetX: 0
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      h,
      {
        options: this.state.optionsSpark3,
        series: this.state.seriesSpark3,
        type: "area",
        height: 60,
        width: 160
      }
    );
  }
}
class ApexChart4 extends React.Component {
  constructor(props) {
    super(props);
    var sparklineData2 = [
      0,
      35,
      41,
      35,
      27,
      93,
      53,
      61,
      27,
      54,
      43,
      19,
      46,
      45,
      54,
      38,
      56,
      24,
      65,
      31,
      37,
      39,
      62,
      51
    ];
    this.state = {
      seriesSpark3: [
        {
          data: sparklineData2
        }
      ],
      optionsSpark3: {
        chart: {
          type: "area",
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: void 0,
          width: 2,
          dashArray: 0
        },
        fill: {
          opacity: 0.3
        },
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        colors: ["#31ce8b"],
        yaxis: {
          min: 0
        },
        title: {
          offsetX: 0
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      h,
      {
        options: this.state.optionsSpark3,
        series: this.state.seriesSpark3,
        type: "area",
        height: 60,
        width: 160
      }
    );
  }
}
class ApexChart5 extends React.Component {
  constructor(props) {
    super(props);
    var sparklineData2 = [
      0,
      45,
      54,
      38,
      56,
      24,
      65,
      31,
      37,
      39,
      62,
      51,
      35,
      41,
      35,
      27,
      93,
      53,
      61,
      27,
      54,
      43,
      19,
      46
    ];
    this.state = {
      seriesSpark3: [
        {
          data: sparklineData2
        }
      ],
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      optionsSpark3: {
        chart: {
          type: "area",
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: void 0,
          width: 2,
          dashArray: 0
        },
        fill: {
          gradient: {
            enabled: false
          }
        },
        colors: ["#ff5c51"],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0
        },
        title: {
          offsetX: 0
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      h,
      {
        options: this.state.optionsSpark3,
        series: this.state.seriesSpark3,
        type: "area",
        height: 60,
        width: 160
      }
    );
  }
}
const COLUMNS = [
  {
    Header: "Seller",
    accessor: "Seller",
    className: "border-bottom-0 sorting"
  },
  {
    Header: "Total Sales",
    accessor: "TotalSales",
    className: "border-bottom-0 sorting"
  },
  {
    Header: "Active Stocks",
    accessor: "ActiveStocks",
    className: "border-bottom-0 sorting"
  },
  {
    Header: "Category",
    accessor: "Category",
    className: "border-bottom-0 sorting"
  },
  {
    Header: "Revenue",
    accessor: "Revenue",
    className: "border-bottom-0 sorting"
  },
  {
    Header: "Status",
    accessor: "Status",
    className: "border-bottom-0 sorting sorting_desc"
  }
];
const DATATABLE = [
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "GOODS Best" }),
    TotalSales: "425.25",
    ActiveStocks: "1.2029",
    Category: "Cake",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-success me-1" }),
      ".05%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$42,282" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Indo Allinone" }),
    TotalSales: "81,865",
    ActiveStocks: "149.18",
    Category: "Fashion",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-success me-1" }),
      ".05%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$86,334" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Granite Cake" }),
    TotalSales: "1,250,103",
    ActiveStocks: "425.25",
    Category: "Medical",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-success me-1" }),
      ".05%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$21,762" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Sagar Limited" }),
    TotalSales: "24,983",
    ActiveStocks: "723.48",
    Category: "Mobile",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-success me-1" }),
      ".05%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$24,983" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Spark Limited" }),
    TotalSales: "32,309",
    ActiveStocks: "149.18",
    Category: "Gift",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$25,000" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Suprtmarket Online" }),
    TotalSales: "2,142",
    ActiveStocks: "149.18",
    Category: "Elactrical",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$5,196" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Multi Shop" }),
    TotalSales: "28,470",
    ActiveStocks: "1547.67",
    Category: "1547.67",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$86,334" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Altanta Products" }),
    TotalSales: "149.18",
    ActiveStocks: "10,120",
    Category: "Cloths",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$2,167.83" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "SREE Enrprices" }),
    TotalSales: "20,125",
    ActiveStocks: "10513.00",
    Category: "Watch",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$13,206" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Stranger Seller" }),
    TotalSales: "149.18",
    ActiveStocks: "25,000",
    Category: "Manufecture",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$58.39" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "GOODS Best" }),
    TotalSales: "425.25",
    ActiveStocks: "1.2029",
    Category: "Cake",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-success me-1" }),
      ".05%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$42,282" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Indo Allinone" }),
    TotalSales: "81,865",
    ActiveStocks: "149.18",
    Category: "Fashion",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-success me-1" }),
      ".05%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$86,334" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Granite Cake" }),
    TotalSales: "1,250,103",
    ActiveStocks: "425.25",
    Category: "Medical",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-success me-1" }),
      ".05%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$21,762" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Sagar Limited" }),
    TotalSales: "24,983",
    ActiveStocks: "723.48",
    Category: "Mobile",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-success me-1" }),
      ".05%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$24,983" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Spark Limited" }),
    TotalSales: "32,309",
    ActiveStocks: "149.18",
    Category: "Gift",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$25,000" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Suprtmarket Online" }),
    TotalSales: "2,142",
    ActiveStocks: "149.18",
    Category: "Elactrical",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$5,196" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Multi Shop" }),
    TotalSales: "28,470",
    ActiveStocks: "1547.67",
    Category: "1547.67",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$86,334" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Altanta Products" }),
    TotalSales: "149.18",
    ActiveStocks: "10,120",
    Category: "Cloths",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$2,167.83" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "SREE Enrprices" }),
    TotalSales: "20,125",
    ActiveStocks: "10513.00",
    Category: "Watch",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$13,206" })
  },
  {
    Seller: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "Stranger Seller" }),
    TotalSales: "149.18",
    ActiveStocks: "25,000",
    Category: "Manufecture",
    Status: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sorting_1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-danger me-1" }),
      ".01%"
    ] }),
    Revenue: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: "$58.39" })
  }
];
const userdata = [
  {
    photo: orders7,
    title: "New Book",
    num: "#12323423",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-primary rounded-pill",
    badge: "Completed"
  },
  {
    photo: orders8,
    title: "New Bowl",
    num: "#26762768",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-warning rounded-pill",
    badge: " Pending"
  },
  {
    photo: orders9,
    title: "Modal Car",
    num: "#76273277",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-primary rounded-pill",
    badge: " Pending"
  },
  {
    photo: orders10,
    title: "Headset",
    num: "#67237267",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-danger rounded-pill",
    badge: "Declined"
  },
  {
    photo: orders11,
    title: "New Headset",
    num: "#561527167",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-danger rounded-pill",
    badge: "Declined"
  },
  {
    photo: orders12,
    title: "Watch",
    num: "#12323423",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-primary rounded-pill",
    badge: "Completed"
  },
  {
    photo: orders14,
    title: "New Modal shoe",
    num: "#12323423",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-primary rounded-pill",
    badge: "Completed"
  },
  {
    photo: orders5,
    title: "Branded Shoes",
    num: "#26762768",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-warning rounded-pill",
    badge: " Pending"
  }
];
const RecentCustomers = [
  {
    img: user1,
    name: "John Wisely",
    text: "1340 Gills Rd, VA, 23139"
  },
  {
    img: user4,
    name: "Nicki Fanning",
    text: "408 1st St, NC, 28468"
  },
  {
    img: user5,
    name: "Lula Malone",
    text: "104 Jefferson Ln, TN, 37643"
  },
  {
    img: user2,
    name: "Rina Summa",
    text: "49 Scott Dr, NY, 10941"
  },
  {
    img: user10,
    name: "Yadira Acklin",
    text: "507 E 22nd St S, IA, 50208"
  },
  {
    img: user12,
    name: "Joanna Latta",
    text: "511 N Walnut St, LA, 71082"
  }
];
const Topproduct = [
  {
    pic: orders1,
    toptext: "Latest Books",
    time: "2,30,400 times"
  },
  {
    pic: orders2,
    toptext: "New Branded Shoes",
    time: "3,45,675 times"
  },
  {
    pic: orders3,
    toptext: "Beauty Makeup kit",
    time: "5,23,324 times"
  },
  {
    pic: orders4,
    toptext: "Headset",
    time: "1,42,400 times"
  },
  {
    pic: orders5,
    toptext: " New Modal Shoes",
    time: "3,30,400 times"
  },
  {
    pic: orders1,
    toptext: "Latest Books",
    time: "2,30,400 times"
  },
  {
    pic: orders2,
    toptext: " New Branded Shoes",
    time: "3,45,675 times"
  }
];
const GoalStatusPieChart = ({ completed = 0, inProgress = 0, notStarted = 0 }) => {
  const series = [completed, inProgress, notStarted];
  const options = {
    colors: ["#2dce89", "#ffc107", "#6c757d"],
    // Green for completed, Yellow for in progress, Gray for not started
    labels: ["Completed", "In Progress", "Not Started"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      fontFamily: "Helvetica, Arial, sans-serif",
      markers: {
        width: 12,
        height: 12,
        radius: 2
      }
    },
    chart: {
      type: "pie"
    },
    dataLabels: {
      enabled: true,
      formatter: function(val, opts) {
        return opts.w.config.series[opts.seriesIndex];
      }
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val + " goals";
        }
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 280
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: "0%"
        }
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "goal-status-chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    h,
    {
      options,
      series,
      type: "pie",
      height: 320
    }
  ) });
};
function transformGoalStatistics(goals) {
  const goalsArray = Array.isArray(goals) ? goals : (goals == null ? void 0 : goals.goals) || [];
  const submitted = goalsArray.length;
  const approvedGoals = goalsArray.filter((g) => g.approval === 1 || g.approved === 1);
  const approved = approvedGoals.length;
  const achieved = goalsArray.filter(
    (g) => g.goal_status === "Completed" || g.goal_status === "completed" || g.status === "Completed" || g.goal_progress && g.goal_progress >= 100 || g.progress_percentage && g.progress_percentage >= 100
  ).length;
  const breakdown = computeApprovedGoalsBreakdown(approvedGoals);
  return {
    submitted,
    approved,
    achieved,
    breakdown
  };
}
function computeApprovedGoalsBreakdown(approvedGoals) {
  const completed = approvedGoals.filter(
    (g) => g.goal_status === "Completed" || g.goal_status === "completed" || g.status === "Completed"
  ).length;
  const inProgress = approvedGoals.filter(
    (g) => g.goal_status === "In Progress" || g.goal_status === "in_progress" || g.status === "In Progress"
  ).length;
  const notStarted = approvedGoals.filter(
    (g) => g.goal_status === "Not Started" || g.goal_status === "not_started" || g.status === "Not Started" || !g.goal_status && !g.status
  ).length;
  return { completed, inProgress, notStarted };
}
function transformFeedbackStatistics(feedbackItems) {
  const items = Array.isArray(feedbackItems) ? feedbackItems : (feedbackItems == null ? void 0 : feedbackItems.feedback) || [];
  if (items.length === 0) {
    return {
      totalFeedback: 0,
      averageScore: 0,
      latestGrade: "N/A",
      latestScore: 0,
      gradeBreakdown: { A: 0, B: 0, C: 0, D: 0, F: 0 }
    };
  }
  const sorted = [...items].sort((a, b) => {
    const dateA = new Date(a.feedback_date || a.created_at || 0);
    const dateB = new Date(b.feedback_date || b.created_at || 0);
    return dateB - dateA;
  });
  const latest = sorted[0];
  const totalScore = items.reduce((sum, f) => sum + (f.total_score || 0), 0);
  const averageScore = items.length > 0 ? totalScore / items.length : 0;
  const gradeBreakdown = computeGradeBreakdown(items);
  return {
    totalFeedback: items.length,
    averageScore: Math.round(averageScore * 10) / 10,
    latestGrade: (latest == null ? void 0 : latest.finalGrade) || "N/A",
    latestScore: (latest == null ? void 0 : latest.total_score) || 0,
    gradeBreakdown
  };
}
function computeGradeBreakdown(feedbackItems) {
  const breakdown = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  feedbackItems.forEach((f) => {
    const grade = (f.finalGrade || "").toUpperCase();
    if (grade in breakdown) {
      breakdown[grade]++;
    }
  });
  return breakdown;
}
function computePerformanceTrend(feedbackItems) {
  var _a, _b;
  if (feedbackItems.length < 2) {
    return { direction: "stable", change: 0 };
  }
  const sorted = [...feedbackItems].sort((a, b) => {
    const dateA = new Date(a.feedback_date || a.created_at || 0);
    const dateB = new Date(b.feedback_date || b.created_at || 0);
    return dateB - dateA;
  });
  const latest = ((_a = sorted[0]) == null ? void 0 : _a.total_score) || 0;
  const previous = ((_b = sorted[1]) == null ? void 0 : _b.total_score) || 0;
  const change = latest - previous;
  return {
    direction: change > 0 ? "up" : change < 0 ? "down" : "stable",
    change: Math.round(change * 10) / 10
  };
}
function transformPeerAssessmentStatistics(assessments, employeeId = null) {
  var _a;
  const items = Array.isArray(assessments) ? assessments : (assessments == null ? void 0 : assessments.assessments) || [];
  if (items.length === 0) {
    return {
      totalReceived: 0,
      averageRating: 0,
      ratingBreakdown: { excellent: 0, good: 0, average: 0, needsImprovement: 0 },
      feedbackGiven: 0,
      latestRating: 0
    };
  }
  const received = employeeId ? items.filter((a) => a.assesseeID === employeeId || a.target_employee === employeeId) : items;
  const given = employeeId ? items.filter((a) => a.assessorID === employeeId || a.assessor_employee === employeeId) : [];
  const totalRating = received.reduce((sum, a) => sum + (a.overall_rating || 0), 0);
  const averageRating = received.length > 0 ? totalRating / received.length : 0;
  const ratingBreakdown = computeRatingBreakdown(received);
  const sorted = [...received].sort((a, b) => {
    const dateA = new Date(a.created_at || a.assessment_date || 0);
    const dateB = new Date(b.created_at || b.assessment_at || 0);
    return dateB - dateA;
  });
  const latestRating = ((_a = sorted[0]) == null ? void 0 : _a.overall_rating) || 0;
  return {
    totalReceived: received.length,
    averageRating: Math.round(averageRating * 10) / 10,
    ratingBreakdown,
    feedbackGiven: given.length,
    latestRating
  };
}
function computeRatingBreakdown(assessments) {
  const breakdown = { excellent: 0, good: 0, average: 0, needsImprovement: 0 };
  assessments.forEach((a) => {
    const rating = a.overall_rating || 0;
    if (rating >= 4.5) {
      breakdown.excellent++;
    } else if (rating >= 3.5) {
      breakdown.good++;
    } else if (rating >= 2.5) {
      breakdown.average++;
    } else {
      breakdown.needsImprovement++;
    }
  });
  return breakdown;
}
function getRatingLabel(rating) {
  if (rating >= 4.5) return "Excellent";
  if (rating >= 3.5) return "Good";
  if (rating >= 2.5) return "Average";
  if (rating >= 1.5) return "Needs Improvement";
  return "Not Rated";
}
function transformDevPlanProgress(plans) {
  const items = Array.isArray(plans) ? plans : (plans == null ? void 0 : plans.plans) || [];
  if (items.length === 0) {
    return {
      totalPlans: 0,
      averageProgress: 0,
      completedPlans: 0,
      inProgressPlans: 0,
      notStartedPlans: 0,
      statusBreakdown: { completed: 0, inProgress: 0, notStarted: 0 }
    };
  }
  const totalProgress = items.reduce((sum, p) => sum + (p.dev_progress || 0), 0);
  const averageProgress = items.length > 0 ? totalProgress / items.length : 0;
  const statusBreakdown = computeDevPlanStatusBreakdown(items);
  return {
    totalPlans: items.length,
    averageProgress: Math.round(averageProgress * 10) / 10,
    completedPlans: statusBreakdown.completed,
    inProgressPlans: statusBreakdown.inProgress,
    notStartedPlans: statusBreakdown.notStarted,
    statusBreakdown
  };
}
function computeDevPlanStatusBreakdown(plans) {
  const breakdown = { completed: 0, inProgress: 0, notStarted: 0 };
  plans.forEach((p) => {
    const progress = p.dev_progress || 0;
    const status = (p.status || "").toLowerCase();
    if (progress >= 100 || status === "completed") {
      breakdown.completed++;
    } else if (progress > 0 || status === "in progress" || status === "in-progress") {
      breakdown.inProgress++;
    } else {
      breakdown.notStarted++;
    }
  });
  return breakdown;
}
function getProgressColor(progress) {
  if (progress >= 100) return "success";
  if (progress >= 70) return "info";
  if (progress >= 40) return "warning";
  return "danger";
}
const TeamMembersCard = () => {
  const dispatch = useDispatch();
  const [teamMembers, setTeamMembers] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const domainServices = ServiceFactory.getService();
  reactExports.useEffect(() => {
    loadTeamMembers();
  }, []);
  const loadTeamMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      const currentUser = await domainServices.getCurrentUser(dispatch);
      if (currentUser && currentUser.employeeID) {
        const employeeProfile = await domainServices.getEmployeeProfile(dispatch);
        if (employeeProfile && employeeProfile.deptcode) {
          const employees = await domainServices.getEmployeesByDepartment(
            employeeProfile.deptcode,
            dispatch
          );
          if (employees && Array.isArray(employees)) {
            const filteredMembers = employees.filter((emp) => emp.employeeID !== currentUser.employeeID).map((emp) => ({
              name: `${emp.firstname || ""} ${emp.lastname || ""}`.trim() || emp.staff_name || "N/A",
              email: emp.email || "N/A",
              department: emp.deptcode || employeeProfile.deptcode
            }));
            setTeamMembers(filteredMembers);
          }
        }
      }
    } catch (err) {
      console.error("Error loading team members:", err);
      setError("Unable to load team members");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-testid": "team-members-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Team Members" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-options", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "btn btn-sm btn-primary",
          onClick: loadTeamMembers,
          disabled: loading,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-refresh-cw me-1" }),
            "Refresh"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { color: "primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Loading team members..." })
    ] }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { color: "warning", timeout: 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-alert-circle me-2" }),
      error
    ] }) : teamMembers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { color: "info", timeout: 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-info me-2" }),
      "No team members found in your department."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table table-hover mb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Department" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: teamMembers.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "team-member", "data-testid": "team-member", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "avatar avatar-md brround me-3",
              style: { backgroundColor: "#6c5ffc" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: member.name.charAt(0).toUpperCase() })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "name", "data-field": "name", children: member.name }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "email", "data-field": "email", children: member.email }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "department", "data-field": "department", children: member.department }) })
      ] }, index)) })
    ] }) }) })
  ] });
};
function computeCriteriaStats(assessments, criteriaLookup = {}) {
  const stats = {
    taskExecution: { self: 0, manager: 0, avg: 0, count: 0 },
    powerSkills: { self: 0, manager: 0, avg: 0, count: 0 },
    attitude: { self: 0, peer: 0, avg: 0, count: 0 },
    pendingAssessments: 0
  };
  if (!Array.isArray(assessments) || assessments.length === 0) {
    return stats;
  }
  assessments.forEach((a) => {
    if (a.status === "pending") {
      stats.pendingAssessments++;
      return;
    }
    const rating = a.rating || a.overall_rating || 0;
    const criteria = criteriaLookup[a.criteriaID] || {};
    const category = criteria.category || null;
    const assessorType = a.assessorType || "SELF";
    if (category === "Task Execution") {
      stats.taskExecution.count++;
      stats.taskExecution.avg += rating;
      if (assessorType === "SELF") stats.taskExecution.self = rating;
      if (assessorType === "MANAGER") stats.taskExecution.manager = rating;
    } else if (category === "Power Skills") {
      stats.powerSkills.count++;
      stats.powerSkills.avg += rating;
      if (assessorType === "SELF") stats.powerSkills.self = rating;
      if (assessorType === "MANAGER") stats.powerSkills.manager = rating;
    } else if (category === "Attitude") {
      stats.attitude.count++;
      stats.attitude.avg += rating;
      if (assessorType === "SELF") stats.attitude.self = rating;
      if (assessorType === "PEER") stats.attitude.peer = rating;
    }
  });
  if (stats.taskExecution.count > 0) {
    stats.taskExecution.avg = Math.round(stats.taskExecution.avg / stats.taskExecution.count * 10) / 10;
  }
  if (stats.powerSkills.count > 0) {
    stats.powerSkills.avg = Math.round(stats.powerSkills.avg / stats.powerSkills.count * 10) / 10;
  }
  if (stats.attitude.count > 0) {
    stats.attitude.avg = Math.round(stats.attitude.avg / stats.attitude.count * 10) / 10;
  }
  return stats;
}
const Dashboard01 = () => {
  const [goalStats, setGoalStats] = reactExports.useState({
    submitted: 0,
    approved: 0,
    achieved: 0
  });
  const [approvedGoalsBreakdown, setApprovedGoalsBreakdown] = reactExports.useState({
    completed: 0,
    inProgress: 0,
    notStarted: 0
  });
  const [feedbackStats, setFeedbackStats] = reactExports.useState({
    totalFeedback: 0,
    averageScore: 0,
    latestGrade: "N/A",
    latestScore: 0
  });
  const [feedbackTrend, setFeedbackTrend] = reactExports.useState({ direction: "stable", change: 0 });
  const [performanceScoreStats, setPerformanceScoreStats] = reactExports.useState({
    total: 0,
    averageScore: 0,
    selfRating: 0,
    goalsMet: 0
  });
  const [peerAssessmentStats, setPeerAssessmentStats] = reactExports.useState({
    totalReceived: 0,
    averageRating: 0,
    feedbackGiven: 0
  });
  const [criteriaStats, setCriteriaStats] = reactExports.useState({
    taskExecution: { self: 0, manager: 0, avg: 0 },
    powerSkills: { self: 0, manager: 0, avg: 0 },
    attitude: { self: 0, peer: 0, avg: 0 },
    pendingAssessments: 0
  });
  const [devPlanStats, setDevPlanStats] = reactExports.useState({
    totalPlans: 0,
    averageProgress: 0,
    completedPlans: 0,
    inProgressPlans: 0
  });
  reactExports.useEffect(() => {
    const fetchGoalStats = async () => {
      try {
        const result = await APIServices.getAllGoals();
        const stats = transformGoalStatistics(result);
        setGoalStats({
          submitted: stats.submitted,
          approved: stats.approved,
          achieved: stats.achieved
        });
        setApprovedGoalsBreakdown(stats.breakdown);
      } catch (error) {
        console.error("Error fetching goal statistics:", error);
      }
    };
    fetchGoalStats();
  }, []);
  reactExports.useEffect(() => {
    const fetchEPMData = async () => {
      try {
        const feedback = await APIServices.getAllFeedbacks();
        const fbStats = transformFeedbackStatistics(feedback);
        setFeedbackStats(fbStats);
        setFeedbackTrend(computePerformanceTrend(feedback));
        const performanceScores = await APIServices.getAllPerformanceScores();
        if (Array.isArray(performanceScores) && performanceScores.length > 0) {
          const avgScore = performanceScores.reduce((sum, s) => sum + (s.total_score || 0), 0) / performanceScores.length;
          const avgSelfRating = performanceScores.reduce((sum, s) => sum + (s.self_rating || 0), 0) / performanceScores.length;
          const avgGoalsMet = performanceScores.reduce((sum, s) => sum + (s.goals_met || 0), 0) / performanceScores.length;
          setPerformanceScoreStats({
            total: performanceScores.length,
            averageScore: Math.round(avgScore * 10) / 10,
            selfRating: Math.round(avgSelfRating * 10) / 10,
            goalsMet: Math.round(avgGoalsMet)
          });
        }
        const peerAssessments = await APIServices.getPeerAssessments();
        const paStats = transformPeerAssessmentStatistics(peerAssessments);
        setPeerAssessmentStats(paStats);
        const allCriteria = await APIServices.getAllPerformanceCriteria();
        const criteriaLookup = {};
        if (Array.isArray(allCriteria)) {
          allCriteria.forEach((c) => {
            criteriaLookup[c.criteriaID] = c;
          });
        }
        const critStats = computeCriteriaStats(peerAssessments, criteriaLookup);
        setCriteriaStats(critStats);
        const devPlans = await APIServices.getAllDevelopmentPlans();
        const dpStats = transformDevPlanProgress(devPlans);
        setDevPlanStats(dpStats);
      } catch (error) {
        console.error("Error fetching EPM data:", error);
      }
    };
    fetchEPMData();
  }, []);
  const tableInstance = reactTableExports.useTable(
    {
      columns: COLUMNS,
      data: DATATABLE
    },
    reactTableExports.useGlobalFilter,
    reactTableExports.useSortBy,
    reactTableExports.usePagination
  );
  const {
    getTableProps,
    // table props from react-table
    headerGroups,
    // headerGroups, if your table has groupings
    getTableBodyProps,
    // table body props from react-table
    prepareRow,
    // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page,
    // use, page or rows
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize
  } = tableInstance;
  const { globalFilter, pageIndex, pageSize } = state;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Performance Dashboard", date: "Select Date" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 9, md: 12, lg: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 4, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "card-custom-icon text-info icon-dropshadow-info",
              x: "1008",
              y: "1248",
              viewBox: "0 0 24 24",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              focusable: "false",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-1 ", children: "Submitted Goals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 font-weight-bold", children: goalStats.submitted }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1 text-muted", children: "Total goals submitted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              className: "",
              style: {
                height: "8px"
              },
              color: " bg-info",
              animated: true,
              value: goalStats.submitted > 0 ? 100 : 0
            }
          ) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 4, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "card-custom-icon text-success icon-dropshadow-success",
              x: "1008",
              y: "1248",
              viewBox: "0 0 24 24",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              focusable: "false",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-1 ", children: "Approved Goals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 font-weight-bold", children: goalStats.approved }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1 text-muted", children: "Goals approved by manager" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              className: "",
              animated: true,
              color: " bg-success",
              value: goalStats.submitted > 0 ? Math.round(goalStats.approved / goalStats.submitted * 100) : 0,
              style: { height: "8px" }
            }
          ) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 4, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "card-custom-icon text-warning icon-dropshadow-warning",
              x: "1008",
              y: "1248",
              viewBox: "0 0 24 24",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              focusable: "false",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-1 ", children: "Achieved Goals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 font-weight-bold", children: goalStats.achieved }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1 text-muted", children: "Goals completed successfully" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              className: "",
              color: " bg-warning",
              animated: true,
              value: goalStats.submitted > 0 ? Math.round(goalStats.achieved / goalStats.submitted * 100) : 0,
              style: { height: "8px" }
            }
          ) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: 8, md: 12, lg: 7, className: " pb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "card-header pb-50  border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "card-title", children: "Approved Goals Status" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex justify-content-center align-items-center", style: { minHeight: 320 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              GoalStatusPieChart,
              {
                completed: approvedGoalsBreakdown.completed,
                inProgress: approvedGoalsBreakdown.inProgress,
                notStarted: approvedGoalsBreakdown.notStarted
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, md: 12, lg: 5, className: "pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-4", children: "Goal Status Breakdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge bg-success me-2", style: { width: 12, height: 12, display: "inline-block" } }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Completed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: approvedGoalsBreakdown.completed }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge bg-warning me-2", style: { width: 12, height: 12, display: "inline-block" } }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "In Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: approvedGoalsBreakdown.inProgress }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge bg-secondary me-2", style: { width: 12, height: 12, display: "inline-block" } }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Not Started" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: approvedGoalsBreakdown.notStarted }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-top", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total Approved" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: goalStats.approved }) })
              ] })
            ] }) })
          ] }) })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, md: 12, xl: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-block mt-4 card-header border-0 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "card-title mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "text-primary me-2",
              viewBox: "0 0 24 24",
              height: "24",
              width: "24",
              fill: "currentColor",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
            }
          ),
          "Performance Summary"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: 12, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-2 font-weight-bold text-primary mb-0", children: feedbackStats.latestGrade }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted fs-16", children: "Latest Grade" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-0 font-weight-bold", children: feedbackStats.latestScore }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Latest Score" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-center align-items-center mb-3", children: [
            feedbackTrend.direction === "up" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trending-up me-1" }),
              "+",
              feedbackTrend.change,
              " points"
            ] }),
            feedbackTrend.direction === "down" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-trending-down me-1" }),
              feedbackTrend.change,
              " points"
            ] }),
            feedbackTrend.direction === "stable" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-minus me-1" }),
              "No change"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Progress,
              {
                className: "progress-lg",
                style: { height: "12px" },
                color: feedbackStats.averageScore >= 80 ? "success" : feedbackStats.averageScore >= 60 ? "warning" : "danger",
                value: feedbackStats.averageScore
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: "text-muted", children: [
              "Average: ",
              feedbackStats.averageScore,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 mb-2 text-muted fs-14", children: [
            "Based on ",
            feedbackStats.totalFeedback,
            " performance review(s)"
          ] })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 12, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Performance Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0 font-weight-bold", children: performanceScoreStats.averageScore }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Average Score" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex flex-column align-items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { color: performanceScoreStats.goalsMet >= 80 ? "success" : "warning", className: "mb-2", children: [
                performanceScoreStats.goalsMet,
                "% Goals Met"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-info", children: [
                "Self Rating: ",
                performanceScoreStats.selfRating,
                "/5"
              ] }) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              className: "mt-3",
              style: { height: "6px" },
              color: performanceScoreStats.averageScore >= 80 ? "success" : performanceScoreStats.averageScore >= 50 ? "warning" : "info",
              value: performanceScoreStats.averageScore
            }
          )
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "360° Feedback" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0 font-weight-bold", children: peerAssessmentStats.averageRating }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: getRatingLabel(peerAssessmentStats.averageRating) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex flex-column align-items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fs-24 text-warning mb-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "i",
              {
                className: `fa fa-star${i < Math.round(peerAssessmentStats.averageRating) ? "" : "-o"}`
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: "text-muted", children: [
              peerAssessmentStats.totalReceived,
              " reviews received"
            ] })
          ] }) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Dev Plan Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-0 font-weight-bold", children: [
                devPlanStats.averageProgress,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Average Progress" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col col-auto text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex flex-column align-items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { color: "success", className: "mb-1", children: [
                devPlanStats.completedPlans,
                " Completed"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { color: "info", children: [
                devPlanStats.inProgressPlans,
                " In Progress"
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              className: "mt-3",
              style: { height: "6px" },
              color: getProgressColor(devPlanStats.averageProgress),
              value: devPlanStats.averageProgress
            }
          )
        ] }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "align-items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "card-title mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "text-primary me-2", viewBox: "0 0 24 24", height: "24", width: "24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }),
          "360° Performance Criteria Assessment"
        ] }) }),
        criteriaStats.pendingAssessments > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { color: "warning", children: [
          criteriaStats.pendingAssessments,
          " Pending Assessments"
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-info mb-3", children: "Task Execution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-weight-bold mb-2", children: criteriaStats.taskExecution.avg }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Average Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              style: { height: "8px" },
              color: "info",
              value: criteriaStats.taskExecution.avg * 20
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { size: "sm", className: "mt-3 text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Self Assessment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-end font-weight-bold", children: [
                criteriaStats.taskExecution.self,
                "/5"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Manager Assessment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-end font-weight-bold", children: [
                criteriaStats.taskExecution.manager,
                "/5"
              ] })
            ] })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-success mb-3", children: "Power Skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-weight-bold mb-2", children: criteriaStats.powerSkills.avg }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Average Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              style: { height: "8px" },
              color: "success",
              value: criteriaStats.powerSkills.avg * 20
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { size: "sm", className: "mt-3 text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Self Assessment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-end font-weight-bold", children: [
                criteriaStats.powerSkills.self,
                "/5"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Manager Assessment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-end font-weight-bold", children: [
                criteriaStats.powerSkills.manager,
                "/5"
              ] })
            ] })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-warning mb-3", children: "Attitude" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-weight-bold mb-2", children: criteriaStats.attitude.avg }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: "Average Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              style: { height: "8px" },
              color: "warning",
              value: criteriaStats.attitude.avg * 20
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { size: "sm", className: "mt-3 text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Self Assessment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-end font-weight-bold", children: [
                criteriaStats.attitude.self,
                "/5"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Peer Assessment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-end font-weight-bold", children: [
                criteriaStats.attitude.peer,
                "/5"
              ] })
            ] })
          ] }) })
        ] }) }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-deck", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xxl: 4, xl: 5, lg: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Top Products" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleBar, { style: { height: "400px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scrollbar h-400", id: "scrollbar", children: Topproduct.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "me-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "w-8 h-8 rounded shadow",
              src: list.pic,
              alt: "media1"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-1 font-weight-semibold", children: list.toptext }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: list.time })
          ] })
        ] }, index)) }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, xl: 7, xxl: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "card-header d-sm-flex d-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Earning Revenue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ms-auto mt-4 mt-sm-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-white me-1", to: "#", children: "Week" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-primary me-1", to: "#", children: "Month" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-white me-1", to: "#", children: "Year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonGroup, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group ms-3 mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DropdownToggle,
                {
                  tag: "a",
                  color: "",
                  className: "option-dots",
                  "data-bs-toggle": "dropdown",
                  "aria-expanded": "false",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-ellipsis-v" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu p-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-download me-2" }),
                  " Download"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cog me-2" }),
                  " Settings"
                ] })
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-container chart-dropshadow-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApexChart1, {}) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 8, xxl: 8, lg: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "New Transactions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-options ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group ms-3 mb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DropdownToggle,
              {
                tag: "a",
                color: "",
                className: "option-dots",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-ellipsis-v" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Today" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Last Week" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Last Month" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Last Year" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cog me-2" }),
                " Settings"
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleBar, { style: { height: "400px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-400 scrollbar2", id: "scrollbar2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table transaction-table mb-0 text-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-bottom-0 w-200 d-block", children: "Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-bottom-0", children: "Transactions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-bottom-0", children: "Date &Time " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-bottom-0", children: "Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-bottom-0", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: userdata.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "font-weight-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  className: "w-7 h-7 rounded shadow me-3",
                  src: list.photo,
                  alt: "media1"
                }
              ),
              list.title
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.num }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-weight-bold", children: list.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: list.classname, children: list.badge }) })
          ] }, index)) })
        ] }) }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, xl: 4, xxl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Recent Customers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-options ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group ms-3 mb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DropdownToggle,
              {
                tag: "a",
                color: "",
                className: "option-dots",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-ellipsis-v" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Last Week" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Last Month" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Yearly" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cog me-2" }),
                " Settings"
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleBar, { style: { height: "400px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-400 scrollbar3", id: "scrollbar3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table transaction-table mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: RecentCustomers.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "w-7 h-7 rounded shadow me-3",
              src: list.img,
              alt: "media1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-1 font-weight-semibold", children: list.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: list.text })
          ] })
        ] }) }, index)) }) }) }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 12, xl: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeamMembersCard, {}) })
    ] })
  ] });
};
Dashboard01.propTypes = {};
Dashboard01.defaultProps = {};
export {
  Dashboard01 as default
};

import { a as React, P as PropTypes, j as jsxRuntimeExports, r as reactExports } from "./mui-BeFIxXnL.js";
import { m as mapToCssModules, i as classnames, t as tagPropType, k as useDispatch, l as ServiceFactory, g as Card, n as CardHeader, h as CardBody, o as Spinner, p as Alert, T as Table, q as PageHeader, R as Row, C as Col, r as Progress, b as Link, c as DropdownToggle, D as DropdownMenu } from "./index-CPwjB16p.js";
import { r as reactTableExports } from "./index-D8JvFaG3.js";
import { h } from "./react-apexcharts.esm-6tzUCLrI.js";
import { u as user12 } from "./12-DCQ8KYQr.js";
import { u as user5 } from "./5-Dpcr_Tz2.js";
import { u as user10 } from "./10-DvLRbf8W.js";
import { u as user2 } from "./2-CzZ0lnvD.js";
import { u as user4 } from "./4-D2jqn9Fg.js";
import { u as user1 } from "./1-BRel2upO.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-TRH6DnwV.js";
import { a as award } from "./award-CariT6ql.js";
import { S as SimpleBar } from "./index-DWkztd76.js";
import { W as WorldMap } from "./data-DGu_3f8u.js";
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
const usercountry = [
  {
    icon: "flag flag-us",
    country: "USA",
    price: " $519.75",
    className: "w-1 text-center ps-5"
  },
  {
    icon: "flag flag-cn",
    country: "China",
    price: "$248.07",
    className: "ps-5"
  },
  {
    icon: "flag flag-de ",
    country: "Germany",
    price: " $190.57",
    className: "ps-5"
  },
  {
    icon: "flag flag-ru",
    country: "Russia",
    price: " $173.25",
    className: "ps-5"
  },
  {
    icon: "flag flag-in",
    country: "India",
    price: "$63.00",
    className: "ps-5"
  },
  {
    icon: "flag flag-cn",
    country: "China",
    price: "$13.00",
    className: "ps-5"
  },
  {
    icon: "flag flag-pk",
    country: "Pakisthan",
    price: "$43.19",
    className: "ps-5"
  },
  {
    icon: "flag flag-ca",
    country: "Canada",
    price: "$56.19",
    className: "ps-5"
  },
  {
    icon: "flag flag-ge",
    country: "Germany",
    price: "$49.00",
    className: "ps-5"
  },
  {
    icon: "flag flag-us",
    country: "USA",
    price: "$519.75",
    className: "ps-5"
  },
  {
    icon: "flag flag-cn",
    country: "China",
    price: "$248.07",
    className: "ps-5"
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
const Dashboard01 = () => {
  const [content, setContent] = React.useState("");
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Sales Dashboard", date: "Select Date" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 9, md: 12, lg: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 4, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    opacity: ".0",
                    d: "M3.31,11 L5.51,19.01 L18.5,19 L20.7,11 L3.31,11 Z M12,17 C10.9,17 10,16.1 10,15 C10,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22,9 L17.21,9 L12.83,2.44 C12.64,2.16 12.32,2.02 12,2.02 C11.68,2.02 11.36,2.16 11.17,2.45 L6.79,9 L2,9 C1.45,9 1,9.45 1,10 C1,10.09 1.01,10.18 1.04,10.27 L3.58,19.54 C3.81,20.38 4.58,21 5.5,21 L18.5,21 C19.42,21 20.19,20.38 20.43,19.54 L22.97,10.27 L23,10 C23,9.45 22.55,9 22,9 Z M12,4.8 L14.8,9 L9.2,9 L12,4.8 Z M18.5,19 L5.51,19.01 L3.31,11 L20.7,11 L18.5,19 Z M12,13 C10.9,13 10,13.9 10,15 C10,16.1 10.9,17 12,17 C13.1,17 14,16.1 14,15 C14,13.9 13.1,13 12,13 Z" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-1 ", children: "All Orders" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 font-weight-bold", children: "3257" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-1 text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down  me-1" }),
              " 43.2"
            ] }),
            " ",
            "than last month"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              className: "",
              style: {
                height: "8px"
              },
              color: " bg-success",
              animated: true,
              value: "78"
            }
          ) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 4, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "card-custom-icon text-secondary icon-dropshadow-secondary",
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
                    opacity: ".0",
                    d: "M12.07,6.01 C8.2,6.01 5.07,9.14 5.07,13.01 C5.07,16.88 8.2,20.01 12.07,20.01 C15.94,20.01 19.07,16.88 19.07,13.01 C19.07,9.14 15.94,6.01 12.07,6.01 Z M13.07,14.01 L11.07,14.01 L11.07,8.01 L13.07,8.01 L13.07,14.01 Z"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.07,1.01 L15.07,1.01 L15.07,3.01 L9.07,3.01 L9.07,1.01 Z M11.07,8.01 L13.07,8.01 L13.07,14.01 L11.07,14.01 L11.07,8.01 Z M19.1,7.39 L20.52,5.97 C20.09,5.46 19.62,4.98 19.11,4.56 L17.69,5.98 C16.14,4.74 14.19,4 12.07,4 C7.1,4 3.07,8.03 3.07,13 C3.07,17.97 7.09,22 12.07,22 C17.05,22 21.07,17.97 21.07,13 C21.07,10.89 20.33,8.93 19.1,7.39 Z M12.07,20.01 C8.2,20.01 5.07,16.88 5.07,13.01 C5.07,9.14 8.2,6.01 12.07,6.01 C15.94,6.01 19.07,9.14 19.07,13.01 C19.07,16.88 15.94,20.01 12.07,20.01 Z" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-1 ", children: "Pending Orders" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 font-weight-bold", children: "1658" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-1 text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up  me-1" }),
              " 19.8"
            ] }),
            " ",
            "than last month"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              className: "",
              animated: true,
              color: " bg-secondary",
              value: "58",
              style: { height: "8px" }
            }
          ) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 4, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "card-custom-icon text-primary icon-dropshadow-primary",
              x: "1008",
              y: "1248",
              viewBox: "0 0 24 24",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              focusable: "false",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.65,6.35 C16.2,4.9 14.21,4 12,4 C7.58,4 4.01,7.58 4.01,12 C4.01,16.42 7.58,20 12,20 C15.73,20 18.84,17.45 19.73,14 L17.65,14 C16.83,16.33 14.61,18 12,18 C8.69,18 6,15.31 6,12 C6,8.69 8.69,6 12,6 C13.66,6 15.14,6.69 16.22,7.78 L13,11 L20,11 L20,4 L17.65,6.35 Z" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-1 ", children: "Refund Request" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 font-weight-bold", children: "168" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-1 text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up  me-1" }),
              " 0.8%"
            ] }),
            " ",
            "than last month"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              className: "",
              color: " bg-primary",
              animated: true,
              value: "58",
              style: { height: "8px" }
            }
          ) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: 8, md: 12, lg: 7, className: " pb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "card-header pb-50  border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "card-title", children: "Country Base Profit" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "vmap", className: "vmap-width", children: [
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(WorldMap, { setTooltipContent: setContent })
            ] }),
            content
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, md: 12, lg: 5, className: "pt-3 country-profit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleBar, { style: { height: 350 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "countryscroll", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table countrytable", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: usercountry.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: list.className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: list.icon }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.country }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-bold", children: list.price }) })
          ] }, index)) }) }) }) }) })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, md: 12, xl: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-block mt-4 card-header border-0 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-center", children: [
          "Congratulations ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "John!" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: 12, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: award, alt: "img", className: "sales-img" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0 mt-5 fs-40 counter font-weight-bold", children: "$1000k" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green me-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-arrow-up ms-1" }),
              "0.82%"
            ] }),
            " ",
            "since last year"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 mb-2 text-muted fs-18", children: [
            "You have done 99.9% target sales reached today. Keep going to reach your target.",
            " "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "mt-1 text-muted", children: "Today 20 minutes ago" })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 12, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Today Revenue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0 font-weight-bold", children: "$897k" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApexChart3, {}) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Unique Visitors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0 font-weight-bold", children: "5,896" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApexChart4, {}) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Expenses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0 font-weight-bold", children: "$1,678" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApexChart5, {}) })
        ] }) }) }) })
      ] }) })
    ] }),
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

import { j as jsxRuntimeExports, a as React } from "./mui-6YGer9Nu.js";
import { h } from "./react-apexcharts.esm-CkgSm5Qi.js";
import { u as user2 } from "./2-CzZ0lnvD.js";
import { u as user1 } from "./1-BRel2upO.js";
import { u as user3 } from "./3-BGsNsrgF.js";
import { u as user4 } from "./4-D2jqn9Fg.js";
import { u as user5 } from "./5-Dpcr_Tz2.js";
import { u as user6 } from "./6-CYNIMoC8.js";
import { u as user7 } from "./7-6SzHPYz9.js";
import { u as user8 } from "./8-lww0UeON.js";
import { u as user9 } from "./9-uUt78-1N.js";
import { u as user10 } from "./10-DvLRbf8W.js";
import { u as user11 } from "./11-DOVWzwhr.js";
import { u as user12 } from "./12-DCQ8KYQr.js";
import { u as user13 } from "./13-P8HidYhJ.js";
import { u as user14 } from "./14-D5oivJTg.js";
import { u as user15 } from "./15-M80PxkED.js";
import { u as user16 } from "./16-Cj3VG8Ln.js";
class ApexChart1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Page Views",
          data: [
            1453,
            3425,
            7654,
            3245,
            4532,
            5643,
            7635,
            5465,
            6754,
            5432,
            5435,
            6545
          ]
        },
        {
          name: "New Visitors",
          data: [
            1123,
            2435,
            5463,
            1245,
            3245,
            4534,
            5435,
            3452,
            5432,
            3452,
            2564,
            3456
          ]
        }
      ],
      options: {
        grid: {
          top: "6",
          right: "0",
          bottom: "17",
          left: "35"
        },
        chart: {
          type: "bar",
          height: 350
        },
        colors: ["var(--primary-bg-color)", "#f72d66"],
        plotOptions: {
          bar: {
            borderRadius: 5,
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
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
          axisLine: {
            lineStyle: {
              color: "rgba(67, 87, 133, .09)"
            }
          },
          axisLabel: {
            fontSize: 10,
            color: "#8e9cad"
          }
        },
        yaxis: {
          title: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(67, 87, 133, .09)"
            }
          },
          axisLabel: {
            fontSize: 10,
            color: "#8e9cad"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          show: true,
          showContent: true,
          alwaysShowContent: true,
          triggerOn: "mousemove",
          trigger: "axis",
          axisPointer: {
            label: {
              show: false
            }
          }
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
        type: "bar",
        height: 350
      }
    ) });
  }
}
class ApexChart2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [68, 55, 45],
      options: {
        colors: ["#2dce89", "var(--primary-bg-color)", "#f72d66"],
        legend: {
          show: false
        },
        chart: {
          type: "donut"
        },
        responsive: [
          {
            legend: {
              show: false
            },
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              }
            }
          }
        ]
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      h,
      {
        options: this.state.options,
        series: this.state.series,
        type: "donut"
      }
    ) });
  }
}
const Radialbar = {
  series: [85],
  options: {
    colors: ["var(--primary-bg-color)"],
    stroke: {
      lineCap: "round"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%"
        }
      }
    }
  }
};
const WeekPageViews = [
  {
    class: "w-1",
    icon: "flag flag-us",
    country: "USA",
    num: "6425"
  },
  {
    icon: "flag flag-cn",
    country: "Chaina",
    num: "5582"
  },
  {
    icon: "flag flag-de",
    country: "Germany",
    num: "4587"
  },
  {
    icon: "flag flag-ru",
    country: "Russia",
    num: "2520"
  },
  {
    icon: "flag flag-in",
    country: "India",
    num: "6429"
  }
];
const CountryTrafficSource = [
  {
    sourceicon: "flag flag-us flag-icon-squared me-2",
    sourcecountry: "United States",
    sourcenum: "4534",
    sourcenum2: "134",
    sourcenum3: "(1.51%)",
    BounceRate: "33.58% ",
    BounceRateicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-success" }),
    Exits: "15.47%",
    Exitsicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-success" })
  },
  {
    sourceicon: "flag flag-gb flag-icon-squared me-2",
    sourcecountry: "United Kingdom",
    sourcenum: "5463",
    sourcenum2: "290",
    sourcenum3: "(3.30%)",
    BounceRate: " 9.22% ",
    BounceRateicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" }),
    Exits: " 7.99%",
    Exitsicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-success" })
  },
  {
    sourceicon: "flag flag-in flag-icon-squared me-2",
    sourcecountry: "India",
    sourcenum: "6534",
    sourcenum2: "250",
    sourcenum3: "(3.00%)",
    BounceRate: " 20.75%",
    BounceRateicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" }),
    Exits: "2.40%",
    Exitsicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" })
  },
  {
    sourceicon: "flag flag-ca flag-icon-squared me-2",
    sourcecountry: "Canada",
    sourcenum: "4532",
    sourcenum2: "216",
    sourcenum3: "(2.79%)",
    BounceRate: " 32.07% ",
    BounceRateicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-success" }),
    Exits: " 15.09% ",
    Exitsicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" })
  },
  {
    sourceicon: "flag flag-fr flag-icon-squared me-2",
    sourcecountry: "France",
    sourcenum: "5643",
    sourcenum2: "216",
    sourcenum3: "(2.79%)",
    BounceRate: " 32.07%",
    BounceRateicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" }),
    Exits: "15.09%",
    Exitsicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-success" })
  },
  {
    sourceicon: "flag flag-cn flag-icon-squared me-2",
    sourcecountry: "China",
    sourcenum: "6534",
    sourcenum2: "216",
    sourcenum3: "(2.79%)",
    BounceRate: " 32.07% ",
    BounceRateicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" }),
    Exits: " 15.09% ",
    Exitsicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up text-success" })
  }
];
const MostVisitedPages = [
  {
    path: "home/index.html",
    img1: user1,
    img2: user2,
    img3: user3,
    img4: user4,
    img5: user5,
    visitors: "3456",
    page: "556",
    bounce: "13.6",
    bounceicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" }),
    date: "July 13, 2020"
  },
  {
    path: "Store/shop/cart.html",
    img1: user6,
    img2: user7,
    img3: user8,
    img4: user9,
    img5: user10,
    visitors: "3456",
    page: "556",
    bounce: "13.6",
    bounceicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" }),
    date: "June 15, 2020"
  },
  {
    path: "Store/shop",
    img1: user11,
    img2: user12,
    img3: user13,
    img4: user14,
    img5: user15,
    visitors: "3456",
    page: "556",
    bounce: "13.6",
    bounceicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" }),
    date: "July 8, 2020"
  },
  {
    path: "home/blog.html",
    img1: user16,
    img2: user2,
    img3: user9,
    img4: user2,
    img5: user4,
    visitors: "3456",
    page: "556",
    bounce: "13.6",
    bounceicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" }),
    date: "June 28, 2020"
  },
  {
    path: "home/blog/blog-overview.html",
    img1: user1,
    img2: user2,
    img3: user3,
    img4: user2,
    img5: user4,
    visitors: "3456",
    page: "556",
    bounce: "13.6",
    bounceicon: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down text-danger" }),
    date: "July 2, 2020"
  }
];
export {
  ApexChart1 as A,
  CountryTrafficSource as C,
  MostVisitedPages as M,
  Radialbar as R,
  WeekPageViews as W,
  ApexChart2 as a
};

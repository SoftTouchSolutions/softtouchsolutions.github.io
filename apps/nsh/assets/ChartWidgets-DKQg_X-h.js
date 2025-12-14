import { a as React, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, h as CardBody } from "./index-DRovfVAv.js";
import { h } from "./react-apexcharts.esm-CkgSm5Qi.js";
import { C as Chart, r as registerables, L as Line } from "./index-D6-dXmlQ.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
Chart.register(...registerables);
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
          size: "50%"
        }
      }
    }
  }
};
const Radialbar1 = {
  series: [60],
  options: {
    colors: ["#2dce89"],
    stroke: {
      lineCap: "round"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%"
        }
      }
    }
  }
};
const Radialbar2 = {
  series: [70],
  options: {
    colors: ["#f72d66"],
    stroke: {
      lineCap: "round"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%"
        }
      }
    }
  }
};
class Salesbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series6: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5]
      }],
      options6: {
        chart: {
          type: "bar",
          sparkline: {
            enabled: true
          }
        },
        colors: ["#4454c3"],
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function(seriesName) {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options6, series: this.state.series6, type: "bar", height: 40, width: "100%" }) });
  }
}
class Profitsbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series6: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5]
      }],
      options6: {
        chart: {
          type: "bar",
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        colors: ["#f7346b"],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function(seriesName) {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options6, series: this.state.series6, type: "bar", height: 40, width: "100%" }) });
  }
}
class Ordersbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series6: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5]
      }],
      options6: {
        chart: {
          type: "bar",
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        colors: ["#2dce89"],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function(seriesName) {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options6, series: this.state.series6, type: "bar", height: 40, width: "100%" }) });
  }
}
class Revenuebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series6: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5]
      }],
      options6: {
        chart: {
          type: "bar",
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        colors: ["#45aaf2"],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function(seriesName) {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options6, series: this.state.series6, type: "bar", height: 40, width: "100%" }) });
  }
}
const Bitcoinexhange = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false
    }
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true
      }
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value"
      }
    }
  }
};
const bitcoinexchange = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  type: "line",
  datasets: [
    {
      data: [83, 56, 89, 73, 61, 75, 86, 56],
      label: "Bitcoin Price",
      backgroundColor: "rgb(68, 84, 195,0.06)",
      borderColor: "rgba(68, 84, 195,0.6)",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4
    }
  ]
};
const Bitcoinexhange2 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false
    }
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true
      }
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value"
      }
    }
  }
};
const bitcoinexchange2 = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  type: "line",
  datasets: [
    {
      data: [45, 78, 67, 78, 36, 78, 89, 84],
      label: "Bitcoin Price",
      backgroundColor: "rgb(68, 84, 195,0.06)",
      borderColor: "rgba(68, 84, 195,0.6)",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4
    }
  ]
};
const Bitcoinexhange3 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false
    }
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true
      }
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value"
      }
    }
  }
};
const bitcoinexchange3 = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  type: "line",
  datasets: [
    {
      data: [56, 78, 36, 78, 29, 78, 37, 56],
      label: "Bitcoin Price",
      backgroundColor: "rgb(68, 84, 195,0.06)",
      borderColor: "rgba(68, 84, 195,0.6)",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4
    }
  ]
};
const Bitcoinexhange4 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false
    }
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true
      }
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value"
      }
    }
  }
};
const bitcoinexchange4 = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  type: "line",
  datasets: [
    {
      data: [45, 78, 98, 34, 67, 28, 89, 45],
      label: "Bitcoin Price",
      backgroundColor: "rgb(68, 84, 195,0.06)",
      borderColor: "rgba(68, 84, 195,0.6)",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4
    }
  ]
};
const ChartWidgets = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "Chart Widgets",
      home: "Home",
      name: "Widgets",
      fonticonsname: "Chart Widgets"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "py-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "my-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 fs-18 text-muted", children: "Total Application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-weight-bold mb-1", children: "45,675" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-arrow-up me-1" }),
          " +1.4%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          h,
          {
            options: Radialbar.options,
            series: Radialbar.series,
            type: "radialBar",
            className: "mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0",
            height: 170,
            width: 100
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto chart-circle-value text-center fs-20", children: "85%" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "py-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "my-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 fs-18 text-muted", children: "Shortlisted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-weight-bold mb-1", children: "30,175" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-arrow-up me-1" }),
          " +1.8%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          h,
          {
            options: Radialbar1.options,
            series: Radialbar1.series,
            type: "radialBar",
            className: "mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0",
            height: 170,
            width: 100
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto chart-circle-value text-center fs-20", children: "60%" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "py-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "my-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 fs-18 text-muted", children: "Rejected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-weight-bold mb-1", children: "7,745" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-arrow-down me-1" }),
          " -2.4%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          h,
          {
            options: Radialbar2.options,
            series: Radialbar2.series,
            type: "radialBar",
            className: "mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0",
            height: 170,
            width: 100
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto chart-circle-value text-center fs-20", children: "25%" })
      ] })
    ] }) }) }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, md: 12, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Today Revenue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0 font-weight-bold", children: "$897k" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApexChart3, {}) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, md: 12, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Unique Visitors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0 font-weight-bold", children: "5,896" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApexChart4, {}) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, md: 12, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Expenses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0 font-weight-bold", children: "$178" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApexChart5, {}) })
    ] }) }) }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 3, lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: " mb-1 ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-line-chart me-1" }),
          " Total Sales"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-0 font-weight-bold", children: [
          "4,786",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-12 text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success me-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-arrow-up ms-1 " }),
              " 12%"
            ] }),
            " ",
            "last week"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-wrapper overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Salesbar, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 3, lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: " mb-1 ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-usd me-1" }),
          " Total Profits"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-0 font-weight-bold", children: [
          "$873",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-12 text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger me-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-arrow-down ms-1 " }),
              " 0.34%"
            ] }),
            " ",
            "last week"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-wrapper overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Profitsbar, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 3, lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: " mb-1 ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cart-arrow-down me-1" }),
          " Total Orders"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-0 font-weight-bold", children: [
          "6,295",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-12 text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success me-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-arrow-up ms-1 " }),
              " 0.22%"
            ] }),
            " ",
            "last week"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-wrapper overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ordersbar, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 3, lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: " mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-signal me-1" }),
          " Total Sales Revenue"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-0 font-weight-bold", children: [
          "$356",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-12 text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger me-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-arrow-down ms-1" }),
              "0.82%"
            ] }),
            " ",
            "last week"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-wrapper overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Revenuebar, {}) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 3, md: 6, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-0", children: "BTC / USDT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 font-weight-bold", children: "$10513" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-wrapper ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Line,
        {
          options: Bitcoinexhange,
          data: bitcoinexchange,
          id: "CryptoChart",
          className: "h-5 overflow-hidden"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 3, md: 6, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-0", children: "XEM / USDT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 font-weight-bold", children: "$966" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-wrapper ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Line,
        {
          options: Bitcoinexhange2,
          data: bitcoinexchange2,
          id: "CryptoChart",
          className: "h-5 overflow-hidden"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 3, md: 6, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-0", children: "XRP / USDT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 font-weight-bold", children: "$7,349" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-wrapper ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Line,
        {
          options: Bitcoinexhange3,
          data: bitcoinexchange3,
          id: "CryptoChart",
          className: "h-5 overflow-hidden"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 3, md: 6, lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " mb-0", children: "NEO / USDT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 font-weight-bold", children: "$5,563" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-wrapper ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Line,
        {
          options: Bitcoinexhange4,
          data: bitcoinexchange4,
          id: "CryptoChart",
          className: "h-5 overflow-hidden"
        }
      ) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, sm: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget-line mt-5 ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "Shares" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-weight-bold", children: "1452" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        h,
        {
          options: Radialbar.options,
          series: Radialbar.series,
          type: "radialBar",
          className: "mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0",
          height: 170,
          width: 100
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-circle-value fs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-random text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "widget-line-list mt-5 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-end", children: [
          "45% ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-hand-o-up" }),
            " Positive"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "6% ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-hand-o-down" }),
            " Negative"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, sm: 12, className: "p-l-0 p-r-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget-line mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-weight-bold", children: "3265" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        h,
        {
          options: Radialbar2.options,
          series: Radialbar2.series,
          type: "radialBar",
          className: "mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0",
          height: 170,
          width: 100
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-circle-value fs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-life-ring text-secondary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "widget-line-list mt-5 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-end", children: [
          "55% ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-hand-o-up" }),
            " Positive"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "3% ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-hand-o-down" }),
            " Negative"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, sm: 12, className: " p-l-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget-line  mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "Users" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-weight-bold", children: "9562" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        h,
        {
          options: Radialbar1.options,
          series: Radialbar1.series,
          type: "radialBar",
          className: "mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0",
          height: 170,
          width: 100
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-circle-value fs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-tags text-success" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "widget-line-list mt-5 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-end", children: [
          "75% ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-hand-o-up" }),
            " Positive"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "6% ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-hand-o-down" }),
            " Negative"
          ] })
        ] })
      ] })
    ] }) })
  ] })
] });
ChartWidgets.propTypes = {};
ChartWidgets.defaultProps = {};
export {
  ChartWidgets as default
};

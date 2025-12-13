import { j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-BtyINLIY.js";
import { C as CardTitle } from "./CardTitle-BLcyN_Gi.js";
import { B as Bar, L as Line, D as Doughnut, P as Pie, C as Chart, r as registerables, A as ArcElement, p as plugin_tooltip, a as plugin_legend } from "./index-D6-dXmlQ.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
Chart.register(...registerables, ArcElement, plugin_tooltip, plugin_legend);
const LineOption = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};
const LineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      scales: {
        y: {
          grid: {
            display: true,
            color: "rgba(227, 229,235,0.1)",
            drawBorder: false
          }
        },
        x: {
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: "rgba(227, 229,235,0.1)"
          },
          grid: {
            display: true,
            color: "rgba(227, 229,235,0.1)",
            drawBorder: false
          }
        }
      },
      data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25, 60],
      borderColor: "#4454c3",
      borderWidth: 1,
      fill: false,
      tension: 0.5
    },
    {
      data: [35, 30, 45, 35, 55, 40, 15, 20, 25, 55, 50, 45],
      borderColor: "#424e79",
      borderWidth: 1,
      fill: false,
      tension: 0.5
    }
  ]
};
function LineChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { options: LineOption, data: LineData });
}
const AreaOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};
const AreaData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Data1",
      data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25],
      borderColor: "#424e79",
      fill: true,
      borderWidth: 1,
      tension: 0.5
    },
    {
      label: "Data2",
      data: [35, 30, 45, 35, 55, 40, 15, 20, 25, 55, 50, 45, 60],
      borderColor: "#4454c3",
      fill: true,
      borderWidth: 1,
      tension: 0.5
    }
  ]
};
function AreaChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { options: AreaOptions, data: AreaData });
}
const StackOption = {
  tooltips: {
    displayColors: true,
    callbacks: {
      mode: "x"
    }
  },
  plugins: {
    legend: {
      display: false,
      position: "right"
    }
  },
  scales: {
    x: {
      stacked: true,
      gridLines: {
        display: false
      }
    },
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true
      },
      type: "linear"
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: { position: "bottom", display: false }
};
const StackData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Data1",
      backgroundColor: "#4454c3",
      data: [14, 12, 34, 25, 24, 20],
      barPercentage: 0.5,
      borderWidth: 1
    },
    {
      label: "Data2",
      backgroundColor: "#8d96da",
      data: [14, 12, 34, 25, 24, 20],
      barPercentage: 0.5,
      borderWidth: 1
    }
  ]
};
function StackedBarChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { options: StackOption, data: StackData, className: "h-300" });
}
const HoriOption = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1
    }
  },
  tooltips: {
    displayColors: true
  },
  scales: {
    x: {
      stacked: true,
      gridLines: {
        display: false
      }
    },
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true
      }
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "right"
    },
    title: {
      display: false
    }
  }
};
const HoriData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [{
    label: "Data1",
    data: [14, 12, 34, 25, 24, 20],
    backgroundColor: "#8d96da",
    fill: true,
    borderWidth: 1
  }, {
    label: "Data2",
    data: [14, 12, 34, 25, 24, 20],
    backgroundColor: "#4454c3",
    fill: true,
    borderWidth: 1
  }]
};
function HoriStackedBarChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { options: HoriOption, data: HoriData, className: "h-300" });
}
const BarOption1 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};
const BarData1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: 80,
            fontColor: "rgba(171, 167, 167,0.9)"
          },
          grid: {
            display: true,
            color: "rgba(171, 167, 167,0.2)",
            drawBorder: false
          }
        },
        x: {
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: "rgba(171, 167, 167,0.9)"
          },
          grid: {
            display: true,
            color: "rgba(171, 167, 167,0.2)",
            drawBorder: false
          }
        }
      },
      label: "# of Votes",
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: "#4454c3",
      borderWidth: 1,
      fill: false
    }
  ]
};
function Solid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { options: BarOption1, data: BarData1 });
}
const BarOption2 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};
const BarData2 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: 80,
            fontColor: "rgba(171, 167, 167,0.9)"
          },
          grid: {
            display: true,
            color: "rgba(171, 167, 167,0.2)",
            drawBorder: false
          }
        },
        x: {
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: "rgba(171, 167, 167,0.9)"
          },
          grid: {
            display: true,
            color: "rgba(171, 167, 167,0.2)",
            drawBorder: false
          }
        }
      },
      label: "# of Votes",
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: "rgba(0,123,255,.5)",
      borderWidth: 1,
      fill: false
    }
  ]
};
function Transparency() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { options: BarOption2, data: BarData2 });
}
const BarOption3 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};
const BarData3 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: 80,
            fontColor: "rgba(171, 167, 167,0.9)"
          },
          grid: {
            display: true,
            color: "rgba(171, 167, 167,0.2)",
            drawBorder: false
          }
        },
        x: {
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: "rgba(171, 167, 167,0.9)"
          },
          grid: {
            display: true,
            color: "rgba(171, 167, 167,0.2)",
            drawBorder: false
          }
        }
      },
      label: "# of Votes",
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: ["#4454c3", "#a5ace2", "#4056a7", "#9fa7e1", "#4056a7", "#d2d6f1"],
      borderWidth: 1,
      fill: false
    }
  ]
};
function Gradient() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { options: BarOption3, data: BarData3 });
}
const Baroptions = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      display: false
    }
  }
};
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const Bardata = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: [14, 12, 34, 25, 24, 20],
      backgroundColor: ["#4454c3", "#767fbf", "#a0a7d7", "#3040b5", "#5764bf", "#8e9bf3"]
    }
  ]
};
function HoriBarChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { options: Baroptions, data: Bardata, className: "h-300" });
}
const BarGroupedOptions = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  tooltips: {
    displayColors: true
  },
  scales: {
    x: {
      stacked: false,
      gridLines: {
        display: false
      }
    },
    y: {
      stacked: false,
      ticks: {
        beginAtZero: true
      }
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "right"
    },
    title: {
      display: false
    }
  }
};
const BarGroupedData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "# of Votes",
      data: [14, 12, 34, 25, 24, 20],
      backgroundColor: ["#4454c3", "#767fbf", "#a0a7d7", "#3040b5", "#5764bf", "#8e9bf3"]
    },
    {
      data: [22, 30, 25, 30, 20, 40, 50],
      backgroundColor: "#4454c3"
    }
  ]
};
function HoriGroupedChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { options: BarGroupedOptions, data: BarGroupedData, className: "h-300" });
}
const DoughnutOptions = {
  plugins: {
    legend: {
      display: false,
      position: "right"
    }
  }
};
const Doughnutdata = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "# of Votes",
      data: [35, 24, 20, 15, 8],
      backgroundColor: ["#4454c3", "#767fbf", "#a0a7d7", "#3040b5", "#5764bf", "#8e9bf3"]
    }
  ]
};
function DoughnutChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Doughnut, { id: "chartDonut", data: Doughnutdata, options: DoughnutOptions });
}
const PieOptions = {
  plugins: {
    legend: {
      display: false,
      position: "right"
    }
  }
};
const PieData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "# of Votes",
      data: [20, 20, 30, 5, 25],
      backgroundColor: ["#4454c3", "#767fbf", "#a0a7d7", "#3040b5", "#5764bf", "#8e9bf3"]
    }
  ]
};
function PieChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { id: "chartPie", data: PieData, options: PieOptions });
}
const ChartjsCharts = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "Chartjs Chart",
      home: "Home",
      name: "Charts",
      fonticonsname: "Chartjs Chart"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", xl: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Bar Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Solid, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", xl: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Transparency " }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Transparency, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", xl: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Multicolored Bar Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gradient, {}) }) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Horizontal Bar Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chartjs-wrapper-demo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HoriBarChart, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Horizontal Bar Chart Style2" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chartjs-wrapper-demo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HoriGroupedChart, {}) }) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Vertical Stacked Bar Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chartjs-wrapper-demo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StackedBarChart, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Horizontal Stacked Bar Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chartjs-wrapper-demo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HoriStackedBarChart, {}) }) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Line Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chartjs-wrapper-demo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LineChart, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Area Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chartjs-wrapper-demo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AreaChart, {}) }) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Donut Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chartjs-wrapper-demo Chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DoughnutChart, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Pie Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chartjs-wrapper-demo Chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PieChart, {}) }) })
    ] }) })
  ] })
] });
ChartjsCharts.propTypes = {};
ChartjsCharts.defaultProps = {};
export {
  ChartjsCharts as default
};

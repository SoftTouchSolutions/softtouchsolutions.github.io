import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { h } from "./react-apexcharts.esm-CkgSm5Qi.js";
import { B as Button } from "./index-DRovfVAv.js";
class BasicAreaChart extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
        color: "#8ba3ea"
      }, {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
        color: "#c1c3f1"
      }],
      options: {
        chart: {
          height: 350,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "area", height: 350 }) });
  }
}
class StackedChart extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "South",
          data: [120, 232, 301, 434, 290, 130, 410]
        },
        {
          name: "North",
          data: [520, 432, 601, 634, 390, 330, 520]
        },
        {
          name: "Central",
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          stacked: true
        },
        colors: ["#f1b7c4", "#8a9ce4", "#c1c2f0"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8
          }
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center"
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "area", height: 350 }) });
  }
}
class NagetiveArea extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "north",
        data: [
          {
            x: 1996,
            y: 322
          },
          {
            x: 1997,
            y: 324
          },
          {
            x: 1998,
            y: 329
          },
          {
            x: 1999,
            y: 342
          },
          {
            x: 2e3,
            y: 348
          },
          {
            x: 2001,
            y: 334
          },
          {
            x: 2002,
            y: 325
          },
          {
            x: 2003,
            y: 316
          },
          {
            x: 2004,
            y: 318
          },
          {
            x: 2005,
            y: 330
          },
          {
            x: 2006,
            y: 355
          },
          {
            x: 2007,
            y: 366
          },
          {
            x: 2008,
            y: 337
          },
          {
            x: 2009,
            y: 352
          },
          {
            x: 2010,
            y: 377
          },
          {
            x: 2011,
            y: 383
          },
          {
            x: 2012,
            y: 344
          },
          {
            x: 2013,
            y: 366
          },
          {
            x: 2014,
            y: 389
          },
          {
            x: 2015,
            y: 334
          }
        ]
      }, {
        name: "south",
        data: [
          {
            x: 1996,
            y: 162
          },
          {
            x: 1997,
            y: 90
          },
          {
            x: 1998,
            y: 50
          },
          {
            x: 1999,
            y: 77
          },
          {
            x: 2e3,
            y: 35
          },
          {
            x: 2001,
            y: -45
          },
          {
            x: 2002,
            y: -88
          },
          {
            x: 2003,
            y: -120
          },
          {
            x: 2004,
            y: -156
          },
          {
            x: 2005,
            y: -123
          },
          {
            x: 2006,
            y: -88
          },
          {
            x: 2007,
            y: -66
          },
          {
            x: 2008,
            y: -45
          },
          {
            x: 2009,
            y: -29
          },
          {
            x: 2010,
            y: -45
          },
          {
            x: 2011,
            y: -88
          },
          {
            x: 2012,
            y: -132
          },
          {
            x: 2013,
            y: -146
          },
          {
            x: 2014,
            y: -169
          },
          {
            x: 2015,
            y: -184
          }
        ]
      }],
      options: {
        chart: {
          type: "area",
          height: 350
        },
        colors: ["#f1b7c4", "#8a9ce4"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          tickAmount: 4,
          floating: false,
          labels: {
            style: {
              colors: "#8e8da4"
            },
            offsetY: -7,
            offsetX: 0
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          opacity: 0.5
        },
        tooltip: {
          x: {
            format: "yyyy"
          },
          fixed: {
            enabled: false,
            position: "topRight"
          }
        },
        grid: {
          yaxis: {
            lines: {
              offsetX: -30
            }
          },
          padding: {
            left: 20
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "area", height: 400 }) });
  }
}
class DateTime extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: [
          [13273596e5, 30.95],
          [1327446e6, 31.34],
          [13275324e5, 31.18],
          [13276188e5, 31.05],
          [1327878e6, 31],
          [13279644e5, 30.95],
          [13280508e5, 31.24],
          [13281372e5, 31.29],
          [13282236e5, 31.85],
          [13284828e5, 31.86],
          [13285692e5, 32.28],
          [13286556e5, 32.1],
          [1328742e6, 32.65],
          [13288284e5, 32.21],
          [13290876e5, 32.35],
          [1329174e6, 32.44],
          [13292604e5, 32.46],
          [13293468e5, 32.86],
          [13294332e5, 32.75],
          [13297788e5, 32.54],
          [13298652e5, 32.33],
          [13299516e5, 32.97],
          [1330038e6, 33.41],
          [13302972e5, 33.27],
          [13303836e5, 33.27],
          [133047e7, 32.89],
          [13305564e5, 33.1],
          [13306428e5, 33.73],
          [1330902e6, 33.22],
          [13309884e5, 31.99],
          [13310748e5, 32.41],
          [13311612e5, 33.05],
          [13312476e5, 33.64],
          [13315068e5, 33.56],
          [13315932e5, 34.22],
          [13316796e5, 33.77],
          [1331766e6, 34.17],
          [13318524e5, 33.82],
          [13321116e5, 34.51],
          [1332198e6, 33.16],
          [13322844e5, 33.56],
          [13323708e5, 33.71],
          [13324572e5, 33.81],
          [13327128e5, 34.4],
          [13327992e5, 34.63],
          [13328856e5, 34.46],
          [1332972e6, 34.48],
          [13330584e5, 34.31],
          [13333176e5, 34.7],
          [1333404e6, 34.31],
          [13334904e5, 33.46],
          [13335768e5, 33.59],
          [13339224e5, 33.22],
          [13340088e5, 32.61],
          [13340952e5, 33.01],
          [13341816e5, 33.55],
          [1334268e6, 33.18],
          [13345272e5, 32.84],
          [13346136e5, 33.84],
          [13347e8, 33.39],
          [13347864e5, 32.91],
          [13348728e5, 33.06],
          [1335132e6, 32.62],
          [13352184e5, 32.4],
          [13353048e5, 33.13],
          [13353912e5, 33.26],
          [13354776e5, 33.58],
          [13357368e5, 33.55],
          [13358232e5, 33.77],
          [13359096e5, 33.76],
          [1335996e6, 33.32],
          [13360824e5, 32.61],
          [13363416e5, 32.52],
          [1336428e6, 32.67],
          [13365144e5, 32.52],
          [13366008e5, 31.92],
          [13366872e5, 32.2],
          [13369464e5, 32.23],
          [13370328e5, 32.33],
          [13371192e5, 32.36],
          [13372056e5, 32.01],
          [1337292e6, 31.31],
          [13375512e5, 32.01],
          [13376376e5, 32.01],
          [1337724e6, 32.18],
          [13378104e5, 31.54],
          [13378968e5, 31.6],
          [13382424e5, 32.05],
          [13383288e5, 31.29],
          [13384152e5, 31.05],
          [13385016e5, 29.82],
          [13387608e5, 30.31],
          [13388472e5, 30.7],
          [13389336e5, 31.69],
          [133902e7, 31.32],
          [13391064e5, 31.65],
          [13393656e5, 31.13],
          [1339452e6, 31.77],
          [13395384e5, 31.79],
          [13396248e5, 31.67],
          [13397112e5, 32.39],
          [13399704e5, 32.63],
          [13400568e5, 32.89],
          [13401432e5, 31.99],
          [13402296e5, 31.23],
          [1340316e6, 31.57],
          [13405752e5, 30.84],
          [13406616e5, 31.07],
          [1340748e6, 31.41],
          [13408344e5, 31.17],
          [13409208e5, 32.37],
          [134118e7, 32.19],
          [13412664e5, 32.51],
          [13414392e5, 32.53],
          [13415256e5, 31.37],
          [13417848e5, 30.43],
          [13418712e5, 30.44],
          [13419576e5, 30.2],
          [1342044e6, 30.14],
          [13421304e5, 30.65],
          [13423896e5, 30.4],
          [1342476e6, 30.65],
          [13425624e5, 31.43],
          [13426488e5, 31.89],
          [13427352e5, 31.38],
          [13429944e5, 30.64],
          [13430808e5, 30.02],
          [13431672e5, 30.33],
          [13432536e5, 30.95],
          [134334e7, 31.89],
          [13435992e5, 31.01],
          [13436856e5, 30.88],
          [1343772e6, 30.69],
          [13438584e5, 30.58],
          [13439448e5, 32.02],
          [1344204e6, 32.14],
          [13442904e5, 32.37],
          [13443768e5, 32.51],
          [13444632e5, 32.65],
          [13445496e5, 32.64],
          [13448088e5, 32.27],
          [13448952e5, 32.1],
          [13449816e5, 32.91],
          [1345068e6, 33.65],
          [13451544e5, 33.8],
          [13454136e5, 33.92],
          [13455e8, 33.75],
          [13455864e5, 33.84],
          [13456728e5, 33.5],
          [13457592e5, 32.26],
          [13460184e5, 32.32],
          [13461048e5, 32.06],
          [13461912e5, 31.96],
          [13462776e5, 31.46],
          [1346364e6, 31.27],
          [13467096e5, 31.43],
          [1346796e6, 32.26],
          [13468824e5, 32.79],
          [13469688e5, 32.46],
          [1347228e6, 32.13],
          [13473144e5, 32.43],
          [13474008e5, 32.42],
          [13474872e5, 32.81],
          [13475736e5, 33.34],
          [13478328e5, 33.41],
          [13479192e5, 32.57],
          [13480056e5, 33.12],
          [1348092e6, 34.53],
          [13481784e5, 33.83],
          [13484376e5, 33.41],
          [1348524e6, 32.9],
          [13486104e5, 32.53],
          [13486968e5, 32.8],
          [13487832e5, 32.44],
          [13490424e5, 32.62],
          [13491288e5, 32.57],
          [13492152e5, 32.6],
          [13493016e5, 32.68],
          [1349388e6, 32.47],
          [13496472e5, 32.23],
          [13497336e5, 31.68],
          [134982e7, 31.51],
          [13499064e5, 31.78],
          [13499928e5, 31.94],
          [1350252e6, 32.33],
          [13503384e5, 33.24],
          [13504248e5, 33.44],
          [13505112e5, 33.48],
          [13505976e5, 33.24],
          [13508568e5, 33.49],
          [13509432e5, 33.31],
          [13510296e5, 33.36],
          [1351116e6, 33.4],
          [13512024e5, 34.01],
          [1351638e6, 34.02],
          [13517244e5, 34.36],
          [13518108e5, 34.39],
          [135207e7, 34.24],
          [13521564e5, 34.39],
          [13522428e5, 33.47],
          [13523292e5, 32.98],
          [13524156e5, 32.9],
          [13526748e5, 32.7],
          [13527612e5, 32.54],
          [13528476e5, 32.23],
          [1352934e6, 32.64],
          [13530204e5, 32.65],
          [13532796e5, 32.92],
          [1353366e6, 32.64],
          [13534524e5, 32.84],
          [13536252e5, 33.4],
          [13538844e5, 33.3],
          [13539708e5, 33.18],
          [13540572e5, 33.88],
          [13541436e5, 34.09],
          [135423e7, 34.61],
          [13544892e5, 34.7],
          [13545756e5, 35.3],
          [1354662e6, 35.4],
          [13547484e5, 35.14],
          [13548348e5, 35.48],
          [1355094e6, 35.75],
          [13551804e5, 35.54],
          [13552668e5, 35.96],
          [13553532e5, 35.53],
          [13554396e5, 37.56],
          [13556988e5, 37.42],
          [13557852e5, 37.49],
          [13558716e5, 38.09],
          [1355958e6, 37.87],
          [13560444e5, 37.71],
          [13563036e5, 37.53],
          [13564764e5, 37.55],
          [13565628e5, 37.3],
          [13566492e5, 36.9],
          [13569084e5, 37.68],
          [13570812e5, 38.34],
          [13571676e5, 37.75],
          [1357254e6, 38.13],
          [13575132e5, 37.94],
          [13575996e5, 38.14],
          [1357686e6, 38.66],
          [13577724e5, 38.62],
          [13578588e5, 38.09],
          [1358118e6, 38.16],
          [13582044e5, 38.15],
          [13582908e5, 37.88],
          [13583772e5, 37.73],
          [13584636e5, 37.98],
          [13588092e5, 37.95],
          [13588956e5, 38.25],
          [1358982e6, 38.1],
          [13590684e5, 38.32],
          [13593276e5, 38.24],
          [1359414e6, 38.52],
          [13595004e5, 37.94],
          [13595868e5, 37.83],
          [13596732e5, 38.34],
          [13599324e5, 38.1],
          [13600188e5, 38.51],
          [13601052e5, 38.4],
          [13601916e5, 38.07],
          [1360278e6, 39.12],
          [13605372e5, 38.64],
          [13606236e5, 38.89],
          [136071e7, 38.81],
          [13607964e5, 38.61],
          [13608828e5, 38.63],
          [13612284e5, 38.99],
          [13613148e5, 38.77],
          [13614012e5, 38.34],
          [13614876e5, 38.55],
          [13617468e5, 38.11],
          [13618332e5, 38.59],
          [13619196e5, 39.6]
        ]
      }],
      options: {
        chart: {
          id: "area-datetime",
          type: "area",
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        colors: ["#8a9ce4"],
        annotations: {
          yaxis: [{
            y: 30,
            borderColor: "#999",
            label: {
              show: true,
              text: "Support",
              style: {
                color: "#fff",
                background: "#00E396"
              }
            }
          }],
          xaxis: [{
            x: (/* @__PURE__ */ new Date("14 Nov 2012")).getTime(),
            borderColor: "#999",
            yAxisIndex: 0,
            label: {
              show: true,
              text: "Rally",
              style: {
                color: "#fff",
                background: "#775DD0"
              }
            }
          }]
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: "hollow"
        },
        xaxis: {
          type: "datetime",
          min: (/* @__PURE__ */ new Date("01 Mar 2012")).getTime(),
          tickAmount: 6
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        }
      },
      selection: "one_year"
    };
  }
  updateData(timeline) {
    this.setState({
      selection: timeline
    });
    switch (timeline) {
      case "one_month":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          (/* @__PURE__ */ new Date("28 Jan 2013")).getTime(),
          (/* @__PURE__ */ new Date("27 Feb 2013")).getTime()
        );
        break;
      case "six_months":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          (/* @__PURE__ */ new Date("27 Sep 2012")).getTime(),
          (/* @__PURE__ */ new Date("27 Feb 2013")).getTime()
        );
        break;
      case "one_year":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          (/* @__PURE__ */ new Date("27 Feb 2012")).getTime(),
          (/* @__PURE__ */ new Date("27 Feb 2013")).getTime()
        );
        break;
      case "ytd":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          (/* @__PURE__ */ new Date("01 Jan 2013")).getTime(),
          (/* @__PURE__ */ new Date("27 Feb 2013")).getTime()
        );
        break;
      case "all":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          (/* @__PURE__ */ new Date("23 Jan 2012")).getTime(),
          (/* @__PURE__ */ new Date("27 Feb 2013")).getTime()
        );
        break;
    }
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "chart-area", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "toolbar text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            id: "one_month",
            onClick: () => this.updateData("one_month"),
            className: `${this.state.selection === "one_month" ? "active" : ""}  mb-3 me-2`,
            children: "1M"
          }
        ),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            id: "six_months",
            onClick: () => this.updateData("six_months"),
            className: `${this.state.selection === "six_months" ? "active" : ""}  mb-3 me-2`,
            children: "6M"
          }
        ),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            id: "one_year",
            onClick: () => this.updateData("one_year"),
            className: `${this.state.selection === "one_year" ? "active" : ""}  mb-3 me-2`,
            children: "1Y"
          }
        ),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            id: "ytd",
            onClick: () => this.updateData("ytd"),
            className: `${this.state.selection === "ytd" ? "active" : ""}  mb-3 me-2`,
            children: "YTD"
          }
        ),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            id: "all",
            onClick: () => this.updateData("all"),
            className: `${this.state.selection === "all" ? "active" : ""}  mb-3 me-2`,
            children: "ALL"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart-timeline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "area", height: 350 }) })
    ] });
  }
}
class BasicBarChart extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        color: "#4454c3"
      }],
      options: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "bar", height: 400 }) });
  }
}
class GroupedBarChart extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: [44, 55, 41, 64, 22, 43, 21],
        color: "#4454c3"
      }, {
        data: [53, 32, 33, 52, 13, 44, 32],
        color: "#c1c3f1"
      }],
      options: {
        chart: {
          type: "bar",
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "bar", height: 400 }) });
  }
}
class StackedBar extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Data 1",
        data: [44, 55, 41, 37, 22, 43, 21],
        color: "#2938a7"
      }, {
        name: "Data 2",
        data: [53, 32, 33, 52, 13, 43, 32],
        color: "#606dcc"
      }, {
        name: "Data 3",
        data: [12, 17, 11, 9, 15, 11, 20],
        color: "#8887cf"
      }, {
        name: "Data 4",
        data: [9, 7, 5, 8, 6, 9, 4],
        color: "#acacdb"
      }, {
        name: "Data 5",
        data: [25, 12, 19, 32, 25, 24, 10],
        color: "#c1c3f1"
      }],
      options: {
        dataLabels: {
          enabled: false
        },
        chart: {
          type: "bar",
          height: 350,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
          labels: {
            formatter: function(val) {
              return val + "K";
            }
          }
        },
        yaxis: {
          title: {
            text: void 0
          }
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val + "K";
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "bar", height: 430 }) });
  }
}
class BarNagetiveValue extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Positive Value",
          data: [
            0.4,
            0.65,
            0.76,
            0.88,
            1.5,
            2.1,
            2.9,
            3.8,
            3.9,
            4.2,
            4,
            4.3,
            4.1,
            4.2,
            4.5,
            3.9,
            3.5,
            3
          ]
        },
        {
          name: "Nagetive Value",
          data: [
            -0.8,
            -1.05,
            -1.06,
            -1.18,
            -1.4,
            -2.2,
            -2.85,
            -3.7,
            -3.96,
            -4.22,
            -4.3,
            -4.4,
            -4.1,
            -4,
            -4.1,
            -3.4,
            -3.1,
            -2.8
          ]
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 440,
          stacked: true
        },
        colors: ["#606dcc", "#c1c3f1"],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          min: -5,
          max: 5,
          title: {
            // text: 'Age',
          }
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function(val) {
              return val;
            }
          },
          y: {
            formatter: function(val) {
              return Math.abs(val) + "%";
            }
          }
        },
        xaxis: {
          categories: [
            "85+",
            "80-84",
            "75-79",
            "70-74",
            "65-69",
            "60-64",
            "55-59",
            "50-54",
            "45-49",
            "40-44",
            "35-39",
            "30-34",
            "25-29",
            "20-24",
            "15-19",
            "10-14",
            "5-9",
            "0-4"
          ],
          title: {
            text: "Percent"
          },
          labels: {
            formatter: function(val) {
              return Math.abs(Math.round(val)) + "%";
            }
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "bar", height: 430 }) });
  }
}
class BasicColumn extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Data 1",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        color: "#4454c3"
      }, {
        name: "Data 2",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        color: "#9ca5e0"
      }, {
        name: "Data 3",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        color: "#616fcc"
      }],
      options: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
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
          categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
        },
        yaxis: {
          title: {
            text: "$ (thousands)"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "bar", height: 350 }) });
  }
}
class StackedColumn extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Data A",
        data: [44, 55, 41, 67, 22, 43],
        color: "#4454c3"
      }, {
        name: "Data B",
        data: [13, 23, 20, 8, 13, 27],
        color: "#9ca5e0"
      }, {
        name: "Data C",
        data: [11, 17, 15, 15, 21, 14],
        color: "#616fcc"
      }, {
        name: "Data D",
        data: [21, 7, 25, 13, 22, 8],
        color: "#d5d9f1"
      }],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10
          }
        },
        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT"
          ]
        },
        legend: {
          position: "right",
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "bar", height: 350 }) });
  }
}
class ColumnNegativeValue extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: [
          1.45,
          5.42,
          5.9,
          -0.42,
          -12.6,
          -18.1,
          -18.2,
          -14.16,
          -11.1,
          -6.09,
          0.34,
          3.88,
          13.07,
          5.8,
          2,
          7.37,
          8.1,
          13.57,
          15.75,
          17.1,
          19.8,
          -27.03,
          -54.4,
          -47.2,
          -43.3,
          -18.6,
          -48.6,
          -41.1,
          -39.6,
          -37.6,
          -29.4,
          -21.4,
          -2.4
        ],
        color: "#4454c3"
      }],
      options: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: -100,
                to: -46,
                color: "#9ca5e0"
              }, {
                from: -45,
                to: 0,
                color: "#d5d9f1"
              }]
            },
            columnWidth: "80%"
          }
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          labels: {
            formatter: function(y) {
              return y.toFixed(0) + "%";
            }
          }
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2011-01-01",
            "2011-02-01",
            "2011-03-01",
            "2011-04-01",
            "2011-05-01",
            "2011-06-01",
            "2011-07-01",
            "2011-08-01",
            "2011-09-01",
            "2011-10-01",
            "2011-11-01",
            "2011-12-01",
            "2012-01-01",
            "2012-02-01",
            "2012-03-01",
            "2012-04-01",
            "2012-05-01",
            "2012-06-01",
            "2012-07-01",
            "2012-08-01",
            "2012-09-01",
            "2012-10-01",
            "2012-11-01",
            "2012-12-01",
            "2013-01-01",
            "2013-02-01",
            "2013-03-01",
            "2013-04-01",
            "2013-05-01",
            "2013-06-01",
            "2013-07-01",
            "2013-08-01",
            "2013-09-01"
          ],
          labels: {
            rotate: -90
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "bar", height: 350 }) });
  }
}
class ColumnMarker extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Actual",
          data: [
            {
              x: "2011",
              y: 1292,
              goals: [
                {
                  name: "Expected",
                  value: 1400,
                  strokeHeight: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2012",
              y: 4432,
              goals: [
                {
                  name: "Expected",
                  value: 5400,
                  strokeHeight: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2013",
              y: 5423,
              goals: [
                {
                  name: "Expected",
                  value: 5200,
                  strokeHeight: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2014",
              y: 6653,
              goals: [
                {
                  name: "Expected",
                  value: 6500,
                  strokeHeight: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2015",
              y: 8133,
              goals: [
                {
                  name: "Expected",
                  value: 6600,
                  strokeHeight: 13,
                  strokeWidth: 0,
                  strokeLineCap: "round",
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2016",
              y: 7132,
              goals: [
                {
                  name: "Expected",
                  value: 7500,
                  strokeHeight: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2017",
              y: 7332,
              goals: [
                {
                  name: "Expected",
                  value: 8700,
                  strokeHeight: 5,
                  strokeColor: "#775DD0"
                }
              ]
            },
            {
              x: "2018",
              y: 6553,
              goals: [
                {
                  name: "Expected",
                  value: 7300,
                  strokeHeight: 2,
                  strokeDashArray: 2,
                  strokeColor: "#775DD0"
                }
              ]
            }
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: "bar"
        },
        plotOptions: {
          bar: {
            columnWidth: "60%"
          }
        },
        colors: ["#abb2e5"],
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ["Actual", "Expected"],
          markers: {
            fillColors: ["#abb2e5", "#775DD0"]
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "bar", height: 350 }) });
  }
}
class BasicChart extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        color: "#4454c3"
      }],
      options: {
        chart: {
          height: 225,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        },
        tooltip: {
          color: "#000"
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "line", height: 350 }) });
  }
}
class Stepline extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        color: "#4454c3"
      }],
      options: {
        chart: {
          type: "line",
          height: 350
        },
        stroke: {
          curve: "stepline"
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          hover: {
            sizeOffset: 4
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "area", height: 350 }) });
  }
}
class Dashedline extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Sales",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      }],
      options: {
        chart: {
          height: 350,
          type: "line"
        },
        forecastDataPoints: {
          count: 7
        },
        stroke: {
          width: 5,
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: ["1/11/2000", "2/11/2000", "3/11/2000", "4/11/2000", "5/11/2000", "6/11/2000", "7/11/2000", "8/11/2000", "9/11/2000", "10/11/2000", "11/11/2000", "12/11/2000", "1/11/2001", "2/11/2001", "3/11/2001", "4/11/2001", "5/11/2001", "6/11/2001"],
          tickAmount: 10,
          labels: {
            formatter: function(value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), "dd MMM");
            }
          }
        },
        title: {
          style: {
            fontSize: "16px",
            color: "#666"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#4454c3"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        yaxis: {
          min: -10,
          max: 40
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "line", height: 350 }) });
  }
}
class Annotation extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        color: "#3b5cca"
      }],
      options: {
        chart: {
          height: 350,
          type: "line",
          id: "areachart-2"
        },
        annotations: {
          yaxis: [{
            y: 49,
            borderColor: "#4454c3",
            label: {
              borderColor: "#4454c3",
              style: {
                color: "#fff",
                background: "#4454c3"
              },
              text: "Support"
            }
          }, {
            y: 69,
            y2: 91,
            borderColor: "#000",
            fillColor: "#95abdd",
            opacity: 0.2,
            label: {
              borderColor: "#333",
              style: {
                fontSize: "10px",
                color: "#333",
                background: "#95abdd"
              },
              text: "Y-axis range"
            }
          }],
          xaxis: [{
            x: (/* @__PURE__ */ new Date("27 Nov")).getTime(),
            strokeDashArray: 0,
            borderColor: "#687cbf",
            label: {
              borderColor: "#687cbf",
              style: {
                color: "#fff",
                background: "#687cbf"
              },
              text: "Anno Test"
            }
          }, {
            x: (/* @__PURE__ */ new Date("8 Dec")).getTime(),
            x2: (/* @__PURE__ */ new Date("12 Dec")).getTime(),
            fillColor: "#687cbf",
            opacity: 0.4,
            label: {
              borderColor: "#687cbf",
              style: {
                fontSize: "10px",
                color: "#fff",
                background: "#687cbf"
              },
              offsetY: -10,
              text: "X-axis range"
            }
          }]
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        grid: {
          padding: {
            right: 30,
            left: 20
          }
        },
        labels: ["13 Nov", "16 Nov", "19 Nov", "22 Nov", "25 Nov", "28 Nov", "17 Dec", "22 Dec", "27 Dec"],
        xaxis: {
          type: "datetime"
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "line", height: 350 }) });
  }
}
class LineColumn extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Data 1",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        color: "#8b95da"
      }, {
        name: "Data 2",
        type: "line",
        data: [201, 352, 752, 320, 257, 160, 440, 505, 414, 671, 227],
        color: "#4454c3"
      }],
      options: {
        chart: {
          height: 350,
          type: "line"
        },
        stroke: {
          width: [0, 4]
        },
        dataLabels: {
          enabled: false,
          enabledOnSeries: [1]
        },
        labels: ["01 Jan 2001", "02 Jan 2001", "03 Jan 2001", "04 Jan 2001", "05 Jan 2001", "06 Jan 2001", "07 Jan 2001", "08 Jan 2001", "09 Jan 2001", "10 Jan 2001", "11 Jan 2001", "12 Jan 2001"],
        xaxis: {
          type: "datetime"
        },
        yaxis: [{}]
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "line", height: 350 }) });
  }
}
class MultipleSeries extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Data 1",
        type: "column",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        color: "#8b95da"
      }, {
        name: "Data 2",
        type: "column",
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
        color: "#4454c3"
      }, {
        name: "Data 3",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58],
        color: "#3e4a9b"
      }],
      options: {
        chart: {
          height: 350,
          type: "line",
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#008FFB"
            },
            labels: {
              style: {
                colors: "#008FFB"
              }
            },
            title: {
              text: "Y-axis series 1",
              style: {
                color: "#008FFB"
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: "Income",
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#00E396"
            },
            labels: {
              style: {
                colors: "#00E396"
              }
            },
            title: {
              text: "Y-axis series 2",
              style: {
                color: "#00E396"
              }
            }
          },
          {
            seriesName: "Revenue",
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#FEB019"
            },
            labels: {
              style: {
                colors: "#FEB019"
              }
            },
            title: {
              text: "Y-axis series 3",
              style: {
                color: "#FEB019"
              }
            }
          }
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft",
            offsetY: 30,
            offsetX: 60
          }
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "mixed-chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "line", height: 350 }) });
  }
}
class LineandAreaChart extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Data A",
        type: "area",
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
        color: "#98a1de"
      }, {
        name: "Data B",
        type: "line",
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
        color: "#4454c3"
      }],
      options: {
        chart: {
          height: 350,
          type: "line"
        },
        stroke: {
          curve: "smooth"
        },
        fill: {
          type: "solid",
          opacity: [0.35, 1]
        },
        labels: ["Dec 01", "Dec 02", "Dec 03", "Dec 04", "Dec 05", "Dec 06", "Dec 07", "Dec 08", "Dec 09 ", "Dec 10", "Dec 11"],
        markers: {
          size: 0
        },
        yaxis: [],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function(y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "line", height: 350 }) });
  }
}
class LineColumnArea extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Data A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        color: "#4454c3"
      }, {
        name: "Data B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        color: "#285cf7"
      }, {
        name: "Data C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        color: "#6d78c9"
      }],
      options: {
        chart: {
          height: 350,
          type: "line",
          stacked: false
        },
        stroke: {
          width: [0, 2, 5],
          curve: "smooth"
        },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: [
          "01/01/2003",
          "02/01/2003",
          "03/01/2003",
          "04/01/2003",
          "05/01/2003",
          "06/01/2003",
          "07/01/2003",
          "08/01/2003",
          "09/01/2003",
          "10/01/2003",
          "11/01/2003"
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function(y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "line", height: 350 }) });
  }
}
export {
  Annotation as A,
  BasicAreaChart as B,
  ColumnNegativeValue as C,
  DateTime as D,
  GroupedBarChart as G,
  LineColumn as L,
  MultipleSeries as M,
  NagetiveArea as N,
  StackedChart as S,
  BasicBarChart as a,
  StackedBar as b,
  BarNagetiveValue as c,
  BasicColumn as d,
  StackedColumn as e,
  ColumnMarker as f,
  BasicChart as g,
  Stepline as h,
  Dashedline as i,
  LineandAreaChart as j,
  LineColumnArea as k
};

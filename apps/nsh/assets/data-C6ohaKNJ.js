import { j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { h } from "./react-apexcharts.esm-6tzUCLrI.js";
const folder = "/apps/nsh/assets/folder-DTLAV8Is.png";
const Radialbar = {
  series: [85],
  options: {
    colors: ["var(--primary-bg-color)"],
    chart: {
      type: "radialBar",
      width: 50,
      height: 50,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%"
        },
        track: {
          margin: 0
        },
        dataLabels: {
          show: false
        }
      }
    }
  }
};
const Round = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    h,
    {
      options: Radialbar.options,
      series: Radialbar.series,
      className: "chart-circle chart-circle-sm chart-circle-primary ms-0 me-5",
      type: "radialBar",
      height: 80,
      width: 80
    }
  );
};
export {
  Round as R,
  folder as f
};

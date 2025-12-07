import { j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-CPwjB16p.js";
import { B as BasicAreaChart, S as StackedChart, N as NagetiveArea, D as DateTime } from "./apexchart-BX-pF5oe.js";
import { C as CardTitle } from "./CardTitle-Cqv0xue5.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./react-apexcharts.esm-6tzUCLrI.js";
const Area = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Area", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "AreaChart",
      home: "Home",
      name: "Charts",
      fonticonsname: "AreaChart"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Basic Area chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BasicAreaChart, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Stacked Area Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StackedChart, {}) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Area with Negative Values" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NagetiveArea, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Datetime X-Axis" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DateTime, {}) })
    ] }) })
  ] })
] });
Area.propTypes = {};
Area.defaultProps = {};
export {
  Area as default
};

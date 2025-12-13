import { j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-BtyINLIY.js";
import { C as CardTitle } from "./CardTitle-BLcyN_Gi.js";
import { d as BasicColumn, e as StackedColumn, C as ColumnNegativeValue, f as ColumnMarker } from "./apexchart-EhLLEsS0.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./react-apexcharts.esm-CkgSm5Qi.js";
const Column = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Column", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "ColumnChart",
      home: "Home",
      name: "Charts",
      fonticonsname: "ColumnChart"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Basic Column Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BasicColumn, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Stacked Column Chart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StackedColumn, {}) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Column Chart with Negative Values" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ColumnNegativeValue, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 6, md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Column with Markers" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ColumnMarker, {}) })
    ] }) })
  ] })
] });
Column.propTypes = {};
Column.defaultProps = {};
export {
  Column as default
};

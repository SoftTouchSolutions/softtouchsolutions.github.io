import { a as React, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-Dr-4baW5.js";
import { C as CardTitle } from "./CardTitle-BjRFrU5i.js";
import { W as WorldMap, S as Shapeworldmap, M as MapAnnotation, B as Basicmarkers, E as Europemap, C as Custommarkers } from "./data-DGu_3f8u.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const SimpleMaps = () => {
  const [content, setContent] = React.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Simple Maps",
        home: "Home",
        name: "Maps",
        fonticonsname: "Simple Maps"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "World Map" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          id: "vmap2",
          className: "stateh",
          style: { height: "300px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WorldMap, { setTooltipContent: setContent }),
            content
          ]
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "m-b-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Graticule Map" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "vmap3",
            className: "stateh",
            style: { height: "300px" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shapeworldmap, {})
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Canada Map" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "vmap4",
            className: "stateh",
            style: { height: "300px" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapAnnotation, {})
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "m-b-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Basic Markers Map" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "vmap5",
            className: "stateh",
            style: { height: "300px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Basicmarkers, {}),
              " "
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "m-b-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Europe Map" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "vmap6",
            className: "stateh",
            style: { height: "300px" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Europemap, {})
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Custom Markers Map" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "vmap7",
            className: "stateh",
            style: { height: "300px" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Custommarkers, {})
          }
        ) })
      ] }) })
    ] })
  ] });
};
SimpleMaps.propTypes = {};
SimpleMaps.defaultProps = {};
export {
  SimpleMaps as default
};

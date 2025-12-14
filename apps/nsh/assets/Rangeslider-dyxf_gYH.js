import { j as jsxRuntimeExports, v as Slider, a as React, s as styled, w as Tooltip, x as SliderThumb, P as PropTypes } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, g as Card, n as CardHeader, h as CardBody, R as Row, C as Col } from "./index-zbnKGqDS.js";
import { C as CardTitle } from "./CardTitle-5XhNrNGW.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const marks = [
  {
    value: 0,
    label: "0"
  },
  {
    value: 100,
    label: "100"
  }
];
function valuetext(value) {
  return `${value}`;
}
function DiscreteSliderMarks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slider,
    {
      defaultValue: 50,
      getAriaValueText: valuetext,
      step: 10,
      valueLabelDisplay: "on",
      marks
    }
  );
}
function valuetext2(value) {
  return `${value}`;
}
function RangeSlider3() {
  const [value, setValue] = React.useState([20, 74]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slider,
    {
      value,
      onChange: handleChange,
      valueLabelDisplay: "on",
      getAriaValueText: valuetext2
    }
  );
}
function RangeSlider4() {
  const [value, setValue] = React.useState([10, 94]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slider,
    {
      value,
      onChange: handleChange,
      valueLabelDisplay: "on",
      getAriaValueText: valuetext2,
      color: "secondary"
    }
  );
}
const marksrv = [
  {
    value: 0,
    label: "0°C"
  },
  {
    value: 20,
    label: "20°C"
  },
  {
    value: 37,
    label: "37°C"
  },
  {
    value: 100,
    label: "100°C"
  }
];
function valuetextrv(value) {
  return `${value}°C`;
}
function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}
function Rangeslider2() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slider,
    {
      "aria-label": "Restricted values",
      defaultValue: 20,
      valueLabelFormat,
      getAriaValueText: valuetextrv,
      step: null,
      valueLabelDisplay: "auto",
      marks: marksrv
    }
  );
}
({
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired
});
const iOSBoxShadow = "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const marks12 = [
  {
    value: 0
  },
  {
    value: 20
  },
  {
    value: 37
  },
  {
    value: 100
  }
];
const IOSSlider = styled(Slider)(({ theme }) => ({
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none"
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000"
    }
  },
  "& .MuiSlider-track": {
    border: "none"
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor"
    }
  }
}));
function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SliderThumb, { ...other, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "airbnb-bar" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "airbnb-bar" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "airbnb-bar" })
  ] });
}
AirbnbThumbComponent.propTypes = {
  children: PropTypes.node
};
function CustomizedSlider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    IOSSlider,
    {
      "aria-label": "ios slider",
      defaultValue: 60,
      marks: marks12,
      valueLabelDisplay: "on"
    }
  );
}
({
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired
});
const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none"
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit"
    },
    "&:before": {
      display: "none"
    }
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
    },
    "& > *": {
      transform: "rotate(45deg)"
    }
  }
});
({
  children: PropTypes.node
});
function CustomizedSlider1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    PrettoSlider,
    {
      valueLabelDisplay: "auto",
      "aria-label": "pretto slider",
      defaultValue: 20
    }
  );
}
function ValueLabelComponent2(props) {
  const { children, value } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { enterTouchDelay: 0, placement: "top", title: value, children });
}
ValueLabelComponent2.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired
};
({
  children: PropTypes.node
});
function CustomizedSlider2() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slider,
    {
      valueLabelDisplay: "auto",
      components: {
        ValueLabel: ValueLabelComponent2
      },
      "aria-label": "custom thumb label",
      defaultValue: 40
    }
  );
}
({
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired
});
const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)"
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  "& .MuiSlider-track": {
    height: 3
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? void 0 : 1,
    height: 3
  }
}));
({
  children: PropTypes.node
});
function CustomizedSlider4() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AirbnbSlider,
    {
      components: { Thumb: AirbnbThumbComponent },
      getAriaLabel: (index) => index === 0 ? "Minimum price" : "Maximum price",
      defaultValue: [30, 65]
    }
  );
}
const marksrt = [
  {
    value: 0,
    label: "0°C"
  },
  {
    value: 20,
    label: "20°C"
  },
  {
    value: 37,
    label: "37°C"
  },
  {
    value: 100,
    label: "100°C"
  }
];
function valuetextrt(value) {
  return `${value}°C`;
}
function TrackFalseSlider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slider,
    {
      track: false,
      "aria-labelledby": "track-false-slider",
      getAriaValueText: valuetextrt,
      defaultValue: 30,
      marks: marksrt
    }
  );
}
const marksrt1 = [
  {
    value: 0,
    label: "0°C"
  },
  {
    value: 20,
    label: "20°C"
  },
  {
    value: 37,
    label: "37°C"
  },
  {
    value: 100,
    label: "100°C"
  }
];
function valuetextrt1(value) {
  return `${value}°C`;
}
function TrackFalseSlider1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slider,
    {
      track: false,
      "aria-labelledby": "track-false-range-slider",
      getAriaValueText: valuetextrt1,
      defaultValue: [20, 37, 50],
      marks: marksrt1
    }
  );
}
const marksin = [
  {
    value: 0,
    label: "0°C"
  },
  {
    value: 20,
    label: "20°C"
  },
  {
    value: 37,
    label: "37°C"
  },
  {
    value: 100,
    label: "100°C"
  }
];
function valuetextin(value) {
  return `${value}°C`;
}
function TrackInvertedSlider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slider,
    {
      track: "inverted",
      "aria-labelledby": "track-inverted-slider",
      getAriaValueText: valuetextin,
      defaultValue: 30,
      marks: marksin
    }
  );
}
const marksin1 = [
  {
    value: 0,
    label: "0°C"
  },
  {
    value: 20,
    label: "20°C"
  },
  {
    value: 37,
    label: "37°C"
  },
  {
    value: 100,
    label: "100°C"
  }
];
function valuetextin1(value) {
  return `${value}°C`;
}
function TrackInvertedSlider1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slider,
    {
      track: "inverted",
      "aria-labelledby": "track-inverted-range-slider",
      getAriaValueText: valuetextin1,
      defaultValue: [20, 37],
      marks: marksin1
    }
  );
}
const Rangeslider = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "Range Slider",
      home: "Home",
      name: "Apps",
      fonticonsname: "Range Slider"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Range Slider" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DiscreteSliderMarks,
          {
            className: "rangeslider1",
            name: "example_name",
            type: "text",
            defaultValue: ""
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Rangeslider2,
          {
            className: "rangeslider2",
            name: "example_name",
            type: "text",
            defaultValue: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          RangeSlider3,
          {
            className: "rangeslider3",
            name: "example_name",
            type: "text",
            defaultValue: ""
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          RangeSlider4,
          {
            className: "rangeslider3",
            name: "example_name",
            type: "text",
            defaultValue: ""
          }
        ) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Range Slider (Modern Skin)" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CustomizedSlider,
          {
            className: "rangeslider1 irs-modern",
            data: "true",
            extra: "true",
            name: "example_name",
            type: "text"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomizedSlider1, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomizedSlider2, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomizedSlider4, {}) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Range Slider (Outline Skin)" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrackFalseSlider, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrackFalseSlider1, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrackInvertedSlider, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrackInvertedSlider1, {}) })
      ] })
    ] })
  ] })
] });
Rangeslider.propTypes = {};
Rangeslider.defaultProps = {};
export {
  Rangeslider as default
};

import { j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, T as Table, h as CardBody } from "./index-Drmsz9hA.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Basic = [
  {
    ID: "1",
    Name: "Joan Powell",
    Position: "Associate Developer",
    Salary: "$450,870"
  },
  {
    ID: "2",
    Name: "Gavin Gibson",
    Position: "Account manager",
    Salary: "$230,540"
  },
  {
    ID: "3",
    Name: "Julian Kerr",
    Position: "Senior Javascript Developer",
    Salary: "$55,300"
  },
  {
    ID: "4",
    Name: "Cedric Kelly",
    Position: "Accountant",
    Salary: "$234,100"
  },
  {
    ID: "5",
    Name: "Samantha May",
    Position: "Junior Technical Author",
    Salary: "$43,198"
  }
];
const Defaulttable = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "Default Tables",
      home: "Home",
      name: "Tables",
      fonticonsname: "Default Tables"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: 12, lg: 12, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Basic Table" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table card-table table-vcenter text-nowrap mb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Salary" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Basic.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: list.ID }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Position }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Salary })
        ] }, list.ID)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Striped Rows" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: " p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table table-striped card-table table-vcenter text-nowrap mb-0 table-bordered border-top-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Salary" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Basic.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: list.ID }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Position }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Salary })
        ] }, list.ID)) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Bordered Table" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table table-bordered card-table table-vcenter text-nowrap mb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Salary" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Basic.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: list.ID }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Position }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Salary })
        ] }, list.ID)) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Hoverable Rows Table" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: " p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table table-hover card-table table-vcenter text-nowrap mb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Salary" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Basic.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: list.ID }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Position }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Salary })
        ] }, list.ID)) })
      ] }) }) })
    ] })
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Full color variations" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table card-table table-vcenter text-nowrap table-primary mb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-primary text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-white", children: "ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-white", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-white", children: "Position" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-white", children: "Salary" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Basic.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: list.ID }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Position }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Salary })
      ] }, list.ID)) })
    ] }) })
  ] }) }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Full color variations2" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table card-table table-vcenter text-nowrap table-warning mb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-warning text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Position" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Salary" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Basic.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: list.ID }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Position }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Salary })
      ] }, list.ID)) })
    ] }) })
  ] }) }) })
] });
Defaulttable.propTypes = {};
Defaulttable.defaultProps = {};
export {
  Defaulttable as default
};

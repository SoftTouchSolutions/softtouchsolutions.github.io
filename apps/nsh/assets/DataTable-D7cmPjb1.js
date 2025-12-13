import { j as jsxRuntimeExports, a as React, aq as requirePropTypes, r as reactExports } from "./mui-6YGer9Nu.js";
import { B as Button, I as Input, L as Label, F as Form, T as Table, v as Modal, w as ModalHeader, x as ModalBody, y as ModalFooter, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-Drmsz9hA.js";
import { C as CardTitle } from "./CardTitle-DTApbb8G.js";
import { r as reactTableExports } from "./index-D8JvFaG3.js";
import { X as Xe } from "./index.es-Dn4wSDoi.js";
import { r as requireReact, a as requireReactDom, g as getDefaultExportFromCjs } from "./vendor-DcOWwNOt.js";
import { r as require_SetCache, a as require_baseUnary, b as require_cacheHas, c as require_Symbol, d as requireIsArguments, e as requireIsArray, f as require_arrayPush, g as require_Stack, h as require_baseIsEqual, i as requireIsObject, j as requireKeys, k as require_baseGetTag, l as requireIsObjectLike, m as require_MapCache, n as requireIsLength, o as require_isIndex, p as require_getNative, q as requireIsArrayLike } from "./_baseIsEqual-BzPMTjal.js";
import "./utils-pMlYcaaZ.js";
const COLUMNS = [
  {
    Header: "Name",
    accessor: "Name",
    className: "w-20 borderrigth"
  },
  {
    Header: "Position",
    accessor: "Position",
    className: "w-25 borderrigth"
  },
  {
    Header: "Office",
    accessor: "Office",
    className: "w-20 borderrigth"
  },
  {
    Header: "Age",
    accessor: "Age",
    className: "w-15 borderrigth"
  },
  {
    Header: "Salary",
    accessor: "Salary",
    className: "w-20 borderrigth"
  }
];
const DATATABLE = [
  {
    Id: "1",
    Name: "Tiger Nixon",
    Position: "System Architect",
    Office: "Edinburgh",
    Age: "61",
    Salary: "$320,800"
  },
  {
    Id: "2",
    Name: "Garrett Winters",
    Position: "Accountant",
    Office: "Tokyo",
    Age: "63",
    Salary: "$170,750"
  },
  {
    Id: "3",
    Name: "Ashton Cox",
    Position: "Junior Technical Author",
    Office: "San Francisco",
    Age: "66",
    Salary: "$86,000"
  },
  {
    Id: "4",
    Name: "Cedric Kelly",
    Position: "Senior Javascript Developer",
    Office: "Edinburgh",
    Age: "22",
    Salary: "$433,060"
  },
  {
    Id: "5",
    Name: "Airi Satou",
    Position: "Accountant",
    Office: "Tokyo",
    Age: "33",
    Salary: "$162,700"
  },
  {
    Id: "6",
    Name: "Brielle Williamson",
    Position: "Integration Specialist",
    Office: "New York",
    Age: "61",
    Salary: "$372,000"
  },
  {
    Id: "7",
    Name: "Herrod Chandler",
    Position: "Sales Assistant",
    Office: "San Francisco",
    Age: "59",
    Salary: "$137,500"
  },
  {
    Id: "8",
    Name: "Rhona Davidson",
    Position: "Integration Specialist",
    Office: "Tokyo",
    Age: "55",
    Salary: "$327,900"
  },
  {
    Id: "9",
    Name: "Colleen Hurst",
    Position: "Javascript Developer",
    Office: "San Francisco",
    Age: "39",
    Salary: "$205,500"
  },
  {
    Id: "10",
    Name: "Sonya Frost",
    Position: "Software Engineer",
    Office: "Edinburgh",
    Age: "23",
    Salary: "$103,600"
  },
  {
    Id: "11",
    Name: "Jena Gaines",
    Position: "Office Manager",
    Office: "London",
    Age: "30",
    Salary: "$90,560"
  },
  {
    Id: "12",
    Name: "Quinn Flynn",
    Position: "Support Lead",
    Office: "Edinburgh",
    Age: "22",
    Salary: "$342,000"
  },
  {
    Id: "13",
    Name: "Charde Marshall",
    Position: "Regional Director",
    Office: "San Francisco",
    Age: "36",
    Salary: "$470,600"
  },
  {
    Id: "14",
    Name: "Haley Kennedy",
    Position: "Senior Marketing Designer",
    Office: "London",
    Age: "43",
    Salary: "$313,500"
  },
  {
    Id: "15",
    Name: "Tatyana Fitzpatrick",
    Position: "Regional Director",
    Office: "London",
    Age: "19",
    Salary: "$385,750"
  },
  {
    Id: "16",
    Name: "Michael Silva",
    Position: "Marketing Designer",
    Office: "London",
    Age: "66",
    Salary: "$198,500"
  },
  {
    Id: "17",
    Name: "Paul Byrd",
    Position: "Chief Financial Officer (CFO)",
    Office: "New York",
    Age: "64",
    Salary: "$725,000"
  },
  {
    Id: "18",
    Name: "Gloria Little",
    Position: "Systems Administrator",
    Office: "New York",
    Age: "59",
    Salary: "$237,500"
  },
  {
    Id: "19",
    Name: "Bradley Greer",
    Position: "Software Engineer",
    Office: "London",
    Age: "41",
    Salary: "$132,000"
  },
  {
    Id: "20",
    Name: "Dai Rios",
    Position: "Personnel Lead",
    Office: "Edinburgh",
    Age: "35",
    Salary: "$217,500"
  },
  {
    Id: "21",
    Name: "Jenette Caldwell",
    Position: "Development Lead",
    Office: "New York",
    Age: "30",
    Salary: "$345,000"
  },
  {
    Id: "22",
    Name: "Yuri Berry",
    Position: "Chief Marketing Officer (CMO)",
    Office: "New York",
    Age: "40",
    Salary: "$675,000"
  },
  {
    Id: "23",
    Name: "Caesar Vance",
    Position: "Pre-Sales Support",
    Office: "New York",
    Age: "21",
    Salary: "$106,450"
  },
  {
    Id: "24",
    Name: "Doris Wilder",
    Position: "Sales Assistant",
    Office: "Sidney",
    Age: "23",
    Salary: "$85,600"
  },
  {
    Id: "25",
    Name: "Angelica Ramos",
    Position: "Chief Executive Officer (CEO)",
    Office: "London",
    Age: "47",
    Salary: "$1,200,000"
  },
  {
    Id: "26",
    Name: "Gavin Joyce",
    Position: "Developer",
    Office: "Edinburgh",
    Age: "42",
    Salary: "$92,575"
  },
  {
    Id: "27",
    Name: "Jennifer Chang",
    Position: "Regional Director",
    Office: "Singapore",
    Age: "28",
    Salary: "$357,650"
  },
  {
    Id: "28",
    Name: "Brenden Wagner",
    Position: "Software Engineer",
    Office: "San Francisco",
    Age: "28",
    Salary: "$206,850"
  },
  {
    Id: "29",
    Name: "Fiona Green",
    Position: "Chief Operating Officer (COO)",
    Office: "San Francisco",
    Age: "48",
    Salary: "$850,000"
  },
  {
    Id: "30",
    Name: "Shou Itou",
    Position: "Regional Marketing",
    Office: "Tokyo",
    Age: "20",
    Salary: "$163,000"
  },
  {
    Id: "31",
    Name: "Michelle House",
    Position: "Integration Specialist",
    Office: "Sidney",
    Age: "37",
    Salary: "$95,400"
  },
  {
    Id: "32",
    Name: "Suki Burks",
    Position: "Developer",
    Office: "London",
    Age: "53",
    Salary: "$114,500"
  },
  {
    Id: "33",
    Name: "Prescott Bartlett",
    Position: "Technical Author",
    Office: "London",
    Age: "27",
    Salary: "$145,000"
  },
  {
    Id: "34",
    Name: "Gavin Cortez",
    Position: "Team Leader",
    Office: "San Francisco",
    Age: "22",
    Salary: "$235,500"
  },
  {
    Id: "35",
    Name: "Martena Mccray",
    Position: "Post-Sales support",
    Office: "Edinburgh",
    Age: "46",
    Salary: "$324,050"
  },
  {
    Id: "36",
    Name: "Unity Butler",
    Position: "Marketing Designer",
    Office: "San Francisco",
    Age: "47",
    Salary: "$85,675"
  },
  {
    Id: "37",
    Name: "Howard Hatfield",
    Position: "Office Manager",
    Office: "San Francisco",
    Age: "51",
    Salary: "$164,500"
  },
  {
    Id: "38",
    Name: "Hope Fuentes",
    Position: "Secretary",
    Office: "San Francisco",
    Age: "41",
    Salary: "$109,850"
  },
  {
    Id: "39",
    Name: "Vivian Harrell",
    Position: "Financial Controller",
    Office: "San Francisco",
    Age: "62",
    Salary: "$452,500"
  },
  {
    Id: "40",
    Name: "Timothy Mooney",
    Position: "Office Manager",
    Office: "London",
    Age: "37",
    Salary: "$136,200"
  },
  {
    Id: "41",
    Name: "Jackson Bradshaw",
    Position: "Director",
    Office: "New York",
    Age: "65",
    Salary: "$645,750"
  },
  {
    Id: "42",
    Name: "Olivia Liang",
    Position: "Support Engineer",
    Office: "Singapore",
    Age: "64",
    Salary: "$234,500"
  },
  {
    Id: "43",
    Name: "Bruno Nash",
    Position: "Software Engineer",
    Office: "London",
    Age: "38",
    Salary: "$163,500"
  },
  {
    Id: "44",
    Name: "Sakura Yamamoto",
    Position: "Support Engineer",
    Office: "Tokyo",
    Age: "37",
    Salary: "$139,575"
  },
  {
    Id: "45",
    Name: "Thor Walton",
    Position: "Developer",
    Office: "New York",
    Age: "61",
    Salary: "$98,540"
  },
  {
    Id: "46",
    Name: "Finn Camacho",
    Position: "Support Engineer",
    Office: "San Francisco",
    Age: "47",
    Salary: "$87,500"
  },
  {
    Id: "47",
    Name: "Serge Baldwin",
    Position: "Data Coordinator",
    Office: "Singapore",
    Age: "64",
    Salary: "$138,575"
  },
  {
    Id: "48",
    Name: "Zenaida Frank",
    Position: "Software Engineer",
    Office: "New York",
    Age: "63",
    Salary: "$125,250"
  },
  {
    Id: "49",
    Name: "Zorita Serrano",
    Position: "Software Engineer",
    Office: "San Francisco",
    Age: "56",
    Salary: "$115,000"
  },
  {
    Id: "50",
    Name: "Jennifer Acosta",
    Position: "Junior Javascript Developer",
    Office: "Edinburgh",
    Age: "43",
    Salary: "$75,650"
  },
  {
    Id: "51",
    Name: "Cara Stevens",
    Position: "Sales Assistant",
    Office: "New York",
    Age: "46",
    Salary: "$145,600"
  },
  {
    Id: "52",
    Name: "Hermione Butler",
    Position: "Regional Director",
    Office: "London",
    Age: "47",
    Salary: "$356,250"
  },
  {
    Id: "53",
    Name: "Lael Greer",
    Position: "Systems Administrator",
    Office: "London",
    Age: "21",
    Salary: "$103,500"
  },
  {
    Id: "54",
    Name: "Jonas Alexander",
    Position: "Developer",
    Office: "San Francisco",
    Age: "30",
    Salary: "$86,500"
  },
  {
    Id: "55",
    Name: "Shad Decker",
    Position: "Regional Director",
    Office: "Edinburgh",
    Age: "51",
    Salary: "$183,000"
  },
  {
    Id: "56",
    Name: "Michael Bruce",
    Position: "Javascript Developer",
    Office: "Singapore",
    Age: "29",
    Salary: "$183,000"
  },
  {
    Id: "57",
    Name: "Donna Snider",
    Position: "Customer Support",
    Office: "New York",
    Age: "27",
    Salary: "$112,000"
  },
  {
    Id: "58",
    Name: "Fiona Green",
    Position: "Chief Operating Officer (COO)",
    Office: "San Francisco",
    Age: "48",
    Salary: "$850,000"
  },
  {
    Id: "59",
    Name: "Shou Itou",
    Position: "Regional Marketing",
    Office: "Tokyo",
    Age: "20",
    Salary: "$163,000"
  },
  {
    Id: "60",
    Name: "Prescott Bartlett",
    Position: "Technical Author",
    Office: "London",
    Age: "27",
    Salary: "$145,000"
  }
];
const BasicTable = () => {
  const tableInstance = reactTableExports.useTable(
    {
      columns: COLUMNS,
      data: DATATABLE
    },
    reactTableExports.useGlobalFilter,
    reactTableExports.useSortBy,
    reactTableExports.usePagination
  );
  const {
    getTableProps,
    // table props from react-table
    headerGroups,
    // headerGroups, if your table has groupings
    getTableBodyProps,
    // table body props from react-table
    prepareRow,
    // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page,
    // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize
  } = tableInstance;
  const { globalFilter, pageIndex, pageSize } = state;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          className: " mb-4 selectpage border me-1",
          value: pageSize,
          onChange: (e) => setPageSize(Number(e.target.value)),
          children: [10, 25, 50].map((pageSize2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: pageSize2, children: [
            "Show ",
            pageSize2
          ] }, pageSize2))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalFilter, { filter: globalFilter, setFilter: setGlobalFilter })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { ...getTableProps(), className: "table table-bordered table-hover mb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: headerGroups.map((headerGroup) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { ...headerGroup.getHeaderGroupProps(), children: headerGroup.headers.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "th",
        {
          ...column.getHeaderProps(column.getSortByToggleProps()),
          className: column.className,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabletitle ", children: column.render("Header") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "d-flex ms-auto", children: column.isSorted ? column.isSortedDesc ? /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up" }) : "" })
          ]
        }
      )) })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ...getTableBodyProps(), children: page.map((row) => {
        prepareRow(row);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { ...row.getRowProps(), children: row.cells.map((cell) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "borderrigth", ...cell.getCellProps(), children: cell.render("Cell") });
        }) });
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-block d-sm-flex mt-4 ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "", children: [
        "Page",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          pageIndex + 1,
          " of ",
          pageOptions.length
        ] }),
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ms-sm-auto ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn-default tablebutton me-2 d-sm-inline d-block my-1",
            onClick: () => gotoPage(0),
            disabled: !canPreviousPage,
            children: " Previous "
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn-default tablebutton me-2 my-1",
            onClick: () => {
              previousPage();
            },
            disabled: !canPreviousPage,
            children: " << "
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn-default tablebutton me-2 my-1",
            onClick: () => {
              previousPage();
            },
            disabled: !canPreviousPage,
            children: " < "
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn-default tablebutton me-2 my-1",
            onClick: () => {
              nextPage();
            },
            disabled: !canNextPage,
            children: " > "
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn-default tablebutton me-2 my-1",
            onClick: () => {
              nextPage();
            },
            disabled: !canNextPage,
            children: " >> "
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn-default tablebutton me-2 d-sm-inline d-block my-1",
            onClick: () => gotoPage(pageCount - 1),
            disabled: !canNextPage,
            children: " Next "
          }
        )
      ] })
    ] })
  ] });
};
const GlobalFilter = ({ filter, setFilter }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "d-flex ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      value: filter || "",
      onChange: (e) => setFilter(e.target.value),
      className: "form-control mb-4",
      placeholder: "Search..."
    }
  ) });
};
const Fixedheader = () => {
  const data2 = [
    {
      id: "1",
      SNO: 1,
      NAME: "Yonna",
      LAST: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "i.bond@datatables.net"
    },
    {
      id: "2",
      SNO: 2,
      NAME: "Zonna",
      LAST: "Jond",
      POSITION: "Accountant",
      DATE: "2012/02/21",
      SALARY: "$343,654",
      EMAIL: "a.bond@datatables.net"
    },
    {
      id: "3",
      SNO: 3,
      NAME: "Nonna",
      LAST: "Tond",
      POSITION: "Chief Executive Officer",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "s.bond@datatables.net"
    },
    {
      id: "4",
      SNO: 4,
      NAME: "Bonna",
      LAST: "Oond",
      POSITION: "Chief Operating Officer",
      DATE: "2012/02/21",
      SALARY: "$643,654",
      EMAIL: "w.bond@datatables.net"
    },
    {
      id: "5",
      SNO: 5,
      NAME: "Honna",
      LAST: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "e.bond@datatables.net"
    },
    {
      id: "6",
      SNO: 6,
      NAME: "Fonna",
      LAST: "Nond",
      POSITION: "Developer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "r.bond@datatables.net"
    },
    {
      id: "7",
      SNO: 7,
      NAME: "Aonna",
      LAST: "Xond",
      POSITION: "Development lead",
      DATE: "2012/02/21",
      SALARY: "$843,654",
      EMAIL: "g.bond@datatables.net"
    },
    {
      id: "8",
      SNO: 8,
      NAME: "Qonna",
      LAST: "Vond",
      POSITION: "Director",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "x.bond@datatables.net"
    },
    {
      id: "9",
      SNO: 9,
      NAME: "Jond",
      LAST: "Zonna",
      POSITION: "Marketing Officer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "k.bond@datatables.net"
    },
    {
      id: "10",
      SNO: 10,
      NAME: "Yonna",
      LAST: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "s.bond@datatables.net"
    },
    {
      id: "11",
      SNO: 11,
      NAME: "Yonna",
      LAST: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "b.bond@datatables.net"
    },
    {
      id: "12",
      SNO: 12,
      NAME: "Yonna",
      LAST: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "o.bond@datatables.net"
    },
    {
      id: "13",
      SNO: 13,
      NAME: "Qonna",
      LAST: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "q.bond@datatables.net"
    },
    {
      id: "14",
      SNO: 14,
      NAME: "Yonna",
      LAST: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "m.bond@datatables.net"
    },
    {
      id: "1",
      SNO: 1,
      NAME: "Yonna",
      LAST: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "i.bond@datatables.net"
    },
    {
      id: "2",
      SNO: 2,
      NAME: "Zonna",
      LAST: "Jond",
      POSITION: "Accountant",
      DATE: "2012/02/21",
      SALARY: "$343,654",
      EMAIL: "a.bond@datatables.net"
    },
    {
      id: "3",
      SNO: 3,
      NAME: "Nonna",
      LAST: "Tond",
      POSITION: "Chief Executive Officer",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "s.bond@datatables.net"
    },
    {
      id: "4",
      SNO: 4,
      NAME: "Bonna",
      LAST: "Oond",
      POSITION: "Chief Operating Officer",
      DATE: "2012/02/21",
      SALARY: "$643,654",
      EMAIL: "w.bond@datatables.net"
    },
    {
      id: "5",
      SNO: 5,
      NAME: "Honna",
      LAST: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "e.bond@datatables.net"
    },
    {
      id: "6",
      SNO: 6,
      NAME: "Fonna",
      LAST: "Nond",
      POSITION: "Developer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "r.bond@datatables.net"
    },
    {
      id: "7",
      SNO: 7,
      NAME: "Aonna",
      LAST: "Xond",
      POSITION: "Development lead",
      DATE: "2012/02/21",
      SALARY: "$843,654",
      EMAIL: "g.bond@datatables.net"
    },
    {
      id: "8",
      SNO: 8,
      NAME: "Qonna",
      LAST: "Vond",
      POSITION: "Director",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "x.bond@datatables.net"
    },
    {
      id: "9",
      SNO: 9,
      NAME: "Jond",
      LAST: "Zonna",
      POSITION: "Marketing Officer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "k.bond@datatables.net"
    },
    {
      id: "10",
      SNO: 10,
      NAME: "Yonna",
      LAST: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "s.bond@datatables.net"
    },
    {
      id: "11",
      SNO: 11,
      NAME: "Yonna",
      LAST: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "b.bond@datatables.net"
    },
    {
      id: "12",
      SNO: 12,
      NAME: "Yonna",
      LAST: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "o.bond@datatables.net"
    },
    {
      id: "13",
      SNO: 13,
      NAME: "Qonna",
      LAST: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "q.bond@datatables.net"
    },
    {
      id: "14",
      SNO: 14,
      NAME: "Yonna",
      LAST: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "m.bond@datatables.net"
    }
  ];
  const columns2 = [
    {
      name: "S.NO",
      selector: (row) => [row.SNO],
      sortable: true
    },
    {
      name: "NAME",
      selector: (row) => [row.NAME],
      sortable: true
    },
    {
      name: "LAST",
      selector: (row) => [row.LAST],
      sortable: true
    },
    {
      name: "POSITION",
      selector: (row) => [row.POSITION],
      sortable: true
    },
    {
      name: "DATE",
      selector: (row) => [row.DATE],
      sortable: true
    },
    {
      name: "SALARY",
      selector: (row) => [row.SALARY],
      sortable: true
    },
    {
      name: "EMAIL",
      selector: (row) => [row.EMAIL],
      sortable: true
    }
  ];
  const [allData, setAllData] = React.useState(data2);
  let allElement2 = [];
  let myfunction = (InputData) => {
    let allElement;
    for (allElement of data2) {
      if (allElement.NAME[0] == " ") {
        allElement.NAME = allElement.NAME.trim();
      }
      if (allElement.NAME.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.NAME.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }
    }
    setAllData(allElement2);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "datatable fixedHeader", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "float-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "text",
        placeholder: "Search...",
        className: "mb-4 form-control-sm form-control",
        onChange: (ele) => {
          myfunction(ele.target.value);
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Xe,
      {
        columns: columns2,
        data: allData,
        fixedHeader: true,
        pagination: true,
        fixedHeaderScrollHeight: "400px",
        className: "fixed-header"
      }
    )
  ] });
};
var dist = {};
var ui = {};
var hasRequiredUi;
function requireUi() {
  if (hasRequiredUi) return ui;
  hasRequiredUi = 1;
  Object.defineProperty(ui, "__esModule", {
    value: true
  });
  ui.Print = ui.Export = ui.Filter = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _propTypes = _interopRequireDefault(/* @__PURE__ */ requirePropTypes());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var Filter = function Filter2(_ref) {
    var _onChange = _ref.onChange, placeholder = _ref.placeholder;
    return _react["default"].createElement("div", {
      className: "data-table-extensions-filter"
    }, _react["default"].createElement("label", {
      htmlFor: "filterDataTable",
      className: "icon"
    }), _react["default"].createElement("input", {
      type: "text",
      name: "filterDataTable",
      className: "filter-text",
      placeholder,
      onChange: function onChange(e) {
        return _onChange(e);
      }
    }));
  };
  ui.Filter = Filter;
  Filter.propTypes = {
    onChange: _propTypes["default"].func,
    placeholder: _propTypes["default"].string.isRequired
  };
  Filter.defaultProps = {
    onChange: null
  };
  var Export2 = function Export3(props) {
    var className = props.className, onDropdown = props.onDropdown, _onClick = props.onClick;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
      type: "button",
      className: "download ".concat(className),
      onClick: function onClick() {
        return onDropdown();
      }
    }), _react["default"].createElement("div", {
      className: "dropdown ".concat(className)
    }, _react["default"].createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        return _onClick(e, "csv");
      }
    }, "Csv File"), _react["default"].createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        return _onClick(e, "excel");
      }
    }, "Excel File")));
  };
  ui.Export = Export2;
  Export2.propTypes = {
    className: _propTypes["default"].string,
    onDropdown: _propTypes["default"].func,
    onClick: _propTypes["default"].func
  };
  Export2.defaultProps = {
    className: "",
    onDropdown: null,
    onClick: null
  };
  var Print = function Print2(props) {
    return (
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
      _react["default"].createElement("button", {
        type: "button",
        className: "print",
        onClick: function onClick() {
          return props.onClick();
        }
      })
    );
  };
  ui.Print = Print;
  Print.propTypes = {
    onClick: _propTypes["default"].func
  };
  Print.defaultProps = {
    onClick: null
  };
  return ui;
}
var utilities = {};
var hasRequiredUtilities;
function requireUtilities() {
  if (hasRequiredUtilities) return utilities;
  hasRequiredUtilities = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    exports$1["default"] = void 0;
    var _reactDom = requireReactDom();
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var download = function download2(props) {
      var content = props.content, type = props.type, name = props.name;
      var file = new Blob(["\uFEFF", content], {
        type
      });
      var link = document.createElement("a");
      link.id = "_export_datatable_".concat(name);
      link.download = name;
      link.href = window.URL.createObjectURL(file);
      document.body.appendChild(link);
      link.click();
      document.getElementById(link.id).remove();
    };
    var print = function print2(table) {
      var printWindow = window.open();
      printWindow.document.write(table);
      printWindow.print();
      printWindow.close();
    };
    var lower = function lower2(value) {
      return value.toString().toLowerCase();
    };
    var objectValues = function objectValues2(item) {
      return Object.values(item).map(function(obj) {
        return _typeof(obj) === "object" && obj !== null ? objectValues2(obj) : obj;
      });
    };
    var filter = function filter2(search, constant, data2, filterHidden) {
      return constant.filter(function(item, index) {
        var value = (filterHidden ? objectValues(item) : Object.values(data2[index])).join();
        var searchSplit = search.split(" ").filter(function(filterItem) {
          return filterItem !== "";
        });
        return searchSplit.filter(function(filterItem) {
          return lower(value).indexOf(filterItem.trim()) !== -1;
        }).length === searchSplit.length;
      });
    };
    var getProperty = function getProperty2(row, selector, format) {
      if (typeof selector !== "string") {
        throw new Error("selector must be a . delimted string eg (my.property)");
      }
      if (format && typeof format === "function") {
        return format(row);
      }
      return selector.split(".").reduce(function(acc, part) {
        if (!acc) {
          return null;
        }
        var arr = part.match(/[^\]\\[.]+/g);
        if (arr.length > 1) {
          for (var i = 0; i < arr.length; i++) {
            return acc[arr[i]][arr[i + 1]];
          }
        }
        return acc[part];
      }, row);
    };
    var dataRender = function dataRender2(data2, header) {
      var rawData = [];
      data2.forEach(function(element) {
        var row = [];
        header.forEach(function(head) {
          if (head.cellExport) {
            var exportData = head.cellExport(element);
            row.push(exportData);
          } else if (head.cell) {
            var div = document.createElement("div");
            (0, _reactDom.render)(head.cell(element), div);
            row.push(div.innerText);
            (0, _reactDom.unmountComponentAtNode)(div);
          } else {
            row.push(getProperty(element, head.selector, head.format));
          }
        });
        rawData.push(row);
      });
      return rawData;
    };
    var concat = {
      csv: function csv(row) {
        var items = [];
        row.forEach(function(item) {
          if (_typeof(item) === "object" && item !== null) {
            items.push(Object.keys(item).map(function(key) {
              return "".concat(key, ": ").concat(item[key]);
            }).join(";"));
          } else {
            items.push(item);
          }
        });
        return items.join(";");
      },
      excel: function excel(row) {
        var items = [];
        row.forEach(function(item) {
          if (_typeof(item) === "object" && item !== null) {
            items.push("<table><tbody>".concat(Object.keys(item).map(function(key) {
              return "<tr><td>".concat(key, "</td><td>").concat(item[key], "</td></tr>");
            }).join(""), "</tbody></table>"));
          } else {
            items.push(item);
          }
        });
        return '<tr style="border-bottom:1px solid #000;"><td style="border-right:1px solid #000;">'.concat(items.join('</td><td style="border-right:1px solid #000;">'), "</td></tr>");
      }
    };
    var Utilities = {
      download,
      print,
      filter,
      getProperty,
      lower,
      dataRender,
      concat
    };
    var _default = Utilities;
    exports$1["default"] = _default;
  })(utilities);
  return utilities;
}
var _export = {};
var hasRequired_export;
function require_export() {
  if (hasRequired_export) return _export;
  hasRequired_export = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    exports$1["default"] = void 0;
    var _utilities = _interopRequireDefault(requireUtilities());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var csv = function csv2(data2, header, fileName) {
      var contentHeader = header ? "".concat(header.map(function(e) {
        return e.name;
      }).join(";"), "\n") : "";
      var content = "".concat(contentHeader).concat(data2.map(function(e) {
        return _utilities["default"].concat.csv(e);
      }).join("\n"));
      return {
        content,
        type: "text/csv",
        name: "".concat(fileName || document.title, ".csv")
      };
    };
    var excel = function excel2(data2, header, fileName) {
      var contentHeader = header ? "<thead><tr><td>".concat(header.map(function(e) {
        return e.name;
      }).join("</td><td>"), "</td><tr></thead>") : "";
      var contentBody = data2.map(function(e) {
        return _utilities["default"].concat.excel(e);
      });
      var content = "<table>".concat(contentHeader, "<tbody>").concat(contentBody.join(""), "</tbody></table>");
      return {
        content,
        type: "application/vnd.ms-excel",
        name: "".concat(fileName || document.title, ".xls")
      };
    };
    var print = function print2(data2, header) {
      var _excel = excel(data2, header), content = _excel.content;
      var style = "\nbody, table { \nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; \nfont-size:12px \n}\ntable {\nwidth: 100%;\n}\nthead {\nfont-weight: bold;\n}";
      return "<style>".concat(style, "</style>").concat(content);
    };
    var ExportMethod = {
      csv,
      excel,
      print
    };
    var _default = ExportMethod;
    exports$1["default"] = _default;
  })(_export);
  return _export;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    exports$1["default"] = void 0;
    var _react = _interopRequireWildcard(requireReact());
    var _propTypes = _interopRequireDefault(/* @__PURE__ */ requirePropTypes());
    var _ui = requireUi();
    var _utilities = _interopRequireDefault(requireUtilities());
    var _export2 = _interopRequireDefault(require_export());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      if (obj != null) {
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      return Constructor;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var DataTableExtensions = /* @__PURE__ */ (function(_Component) {
      _inherits(DataTableExtensions2, _Component);
      function DataTableExtensions2(props) {
        var _this;
        _classCallCheck(this, DataTableExtensions2);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTableExtensions2).call(this, props));
        var columns2 = props.columns, data2 = props.data, filterDigit = props.filterDigit;
        _this.state = {
          dropdown: false,
          columns: columns2,
          data: data2,
          constData: data2,
          filter: "",
          filterDigit
        };
        _this.raw = {
          header: [],
          data: []
        };
        return _this;
      }
      _createClass(DataTableExtensions2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;
          var columns2 = this.state.columns;
          columns2.forEach(function(element) {
            if (element["export"] !== false) {
              _this2.raw.header.push(element);
            }
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var _this3 = this;
          var _this$props = this.props, columns2 = _this$props.columns, data2 = _this$props.data, filterDigit = _this$props.filterDigit;
          var filter = this.state.filter;
          if (prevProps.columns !== columns2 || prevProps.data !== data2) {
            this.setState({
              columns: columns2,
              data: data2,
              filterDigit,
              constData: data2
            }, function() {
              _this3.checkHeader();
              if (filter.length > filterDigit) {
                _this3.onFilter(filter);
              }
            });
          }
        }
      }, {
        key: "onDataRender",
        value: function onDataRender() {
          var constData = this.state.constData;
          this.raw.data = _utilities["default"].dataRender(constData, this.raw.header);
        }
      }, {
        key: "onExport",
        value: function onExport(e, type) {
          this.onDataRender();
          var _this$props2 = this.props, exportHeaders = _this$props2.exportHeaders, fileName = _this$props2.fileName;
          var _this$raw = this.raw, data2 = _this$raw.data, header = _this$raw.header;
          var exportData = _export2["default"][type](data2, exportHeaders ? header : null, fileName);
          _utilities["default"].download(exportData);
          this.setState({
            dropdown: false
          });
          e.preventDefault();
        }
      }, {
        key: "onFilter",
        value: function onFilter(text) {
          var value = _utilities["default"].lower(text);
          var _this$state = this.state, constData = _this$state.constData, filterDigit = _this$state.filterDigit;
          var filterHidden = this.props.filterHidden;
          var filtered = constData;
          if (value.length > filterDigit) {
            if (!filterHidden) {
              this.onDataRender();
            }
            filtered = _utilities["default"].filter(value, constData, this.raw.data, filterHidden);
          }
          this.setState({
            data: filtered,
            filter: value
          });
        }
      }, {
        key: "onPrint",
        value: function onPrint() {
          this.onDataRender();
          var _this$raw2 = this.raw, data2 = _this$raw2.data, header = _this$raw2.header;
          var table = _export2["default"].print(data2, header);
          _utilities["default"].print(table);
        }
      }, {
        key: "checkHeader",
        value: function checkHeader() {
          var _this4 = this;
          var columns2 = this.state.columns;
          if (columns2.length !== this.raw.header.length) {
            this.raw.header = [];
            columns2.forEach(function(element) {
              if (element["export"] !== false) {
                _this4.raw.header.push(element);
              }
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;
          var _this$state2 = this.state, dropdown = _this$state2.dropdown, columns2 = _this$state2.columns, data2 = _this$state2.data;
          var _this$props3 = this.props, filter = _this$props3.filter, print = _this$props3.print, children = _this$props3.children, filterPlaceholder = _this$props3.filterPlaceholder;
          return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
            className: "data-table-extensions"
          }, filter && _react["default"].createElement(_ui.Filter, {
            onChange: function onChange(e) {
              return _this5.onFilter(e.target.value);
            },
            placeholder: filterPlaceholder
          }), _react["default"].createElement("div", {
            className: "data-table-extensions-action"
          }, this.props["export"] && _react["default"].createElement(_ui.Export, {
            className: dropdown ? "drop" : "",
            onDropdown: function onDropdown() {
              return _this5.setState(function(prevState) {
                return {
                  dropdown: !prevState.dropdown
                };
              });
            },
            onClick: function onClick(e, type) {
              return _this5.onExport(e, type);
            }
          }), print && _react["default"].createElement(_ui.Print, {
            onClick: function onClick() {
              return _this5.onPrint();
            }
          }))), _react["default"].cloneElement(children, {
            columns: columns2,
            data: data2
          }));
        }
      }]);
      return DataTableExtensions2;
    })(_react.Component);
    DataTableExtensions.propTypes = {
      columns: _propTypes["default"].array,
      data: _propTypes["default"].array,
      filter: _propTypes["default"].bool,
      filterPlaceholder: _propTypes["default"].string,
      "export": _propTypes["default"].bool,
      print: _propTypes["default"].bool,
      exportHeaders: _propTypes["default"].bool,
      children: _propTypes["default"].node,
      filterHidden: _propTypes["default"].bool,
      filterDigit: _propTypes["default"].number,
      fileName: _propTypes["default"].string
    };
    DataTableExtensions.defaultProps = {
      columns: [],
      data: [],
      filter: true,
      "export": true,
      print: true,
      exportHeaders: false,
      children: null,
      filterHidden: true,
      filterPlaceholder: "Filter Table",
      filterDigit: 2,
      fileName: document.title
    };
    var _default = DataTableExtensions;
    exports$1["default"] = _default;
  })(dist);
  return dist;
}
requireDist();
function convertArrayOfObjectsToCSV(array) {
  let result;
  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(data[0]);
  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;
  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;
      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });
  return result;
}
function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;
  const filename = "export.csv";
  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }
  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}
const Export = ({ onExport }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", onClick: (e) => onExport(e.target.value), children: "Export" });
const data = [
  {
    id: "1",
    SNO: 1,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "i.bond@datatables.net"
  },
  {
    id: "2",
    SNO: 2,
    NAME: "Zonna",
    LASTNAME: "Jond",
    POSITION: "Accountant",
    DATE: "2012/02/21",
    SALARY: "$343,654",
    EMAIL: "a.bond@datatables.net"
  },
  {
    id: "3",
    SNO: 3,
    NAME: "Nonna",
    LASTNAME: "Tond",
    POSITION: "Chief Executive Officer",
    DATE: "2012/02/21",
    SALARY: "$743,654",
    EMAIL: "s.bond@datatables.net"
  },
  {
    id: "4",
    SNO: 4,
    NAME: "Bonna",
    LASTNAME: "Oond",
    POSITION: "Chief Operating Officer",
    DATE: "2012/02/21",
    SALARY: "$643,654",
    EMAIL: "w.bond@datatables.net"
  },
  {
    id: "5",
    SNO: 5,
    NAME: "Honna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "2012/02/21",
    SALARY: "$243,654",
    EMAIL: "e.bond@datatables.net"
  },
  {
    id: "6",
    SNO: 6,
    NAME: "Fonna",
    LASTNAME: "Nond",
    POSITION: "Developer",
    DATE: "2012/02/21",
    SALARY: "$543,654",
    EMAIL: "r.bond@datatables.net"
  },
  {
    id: "7",
    SNO: 7,
    NAME: "Aonna",
    LASTNAME: "Xond",
    POSITION: "Development lead",
    DATE: "2012/02/21",
    SALARY: "$843,654",
    EMAIL: "g.bond@datatables.net"
  },
  {
    id: "8",
    SNO: 8,
    NAME: "Qonna",
    LASTNAME: "Vond",
    POSITION: "Director",
    DATE: "2012/02/21",
    SALARY: "$743,654",
    EMAIL: "x.bond@datatables.net"
  },
  {
    id: "9",
    SNO: 9,
    NAME: "Jond",
    LASTNAME: "Zonna",
    POSITION: "Marketing Officer",
    DATE: "2012/02/21",
    SALARY: "$543,654",
    EMAIL: "k.bond@datatables.net"
  },
  {
    id: "10",
    SNO: 10,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "s.bond@datatables.net"
  },
  {
    id: "11",
    SNO: 11,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "b.bond@datatables.net"
  },
  {
    id: "12",
    SNO: 12,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "o.bond@datatables.net"
  },
  {
    id: "13",
    SNO: 13,
    NAME: "Qonna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "2012/02/21",
    SALARY: "$243,654",
    EMAIL: "q.bond@datatables.net"
  },
  {
    id: "14",
    SNO: 14,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "m.bond@datatables.net"
  }
];
const columns = [
  {
    name: "S.NO",
    selector: (row) => [row.SNO],
    sortable: true
  },
  {
    name: "NAME",
    selector: (row) => [row.NAME],
    sortable: true
  },
  {
    name: "LAST NAME",
    selector: (row) => [row.LASTNAME],
    sortable: true
  },
  {
    name: "POSITION",
    selector: (row) => [row.POSITION],
    sortable: true
  },
  {
    name: "DATE",
    selector: (row) => [row.DATE],
    sortable: true
  },
  {
    name: " SALARY",
    selector: (row) => [row.SALARY],
    sortable: true
  },
  {
    name: "EMAIL",
    selector: (row) => [row.EMAIL],
    sortable: true
  }
];
const ExportCSV = () => {
  const actionsMemo = React.useMemo(() => /* @__PURE__ */ jsxRuntimeExports.jsx(Export, { onExport: () => downloadCSV(allData) }), []);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  let selectdata = [];
  const [allData, setAllData] = React.useState(data);
  let allElement2 = [];
  let myfunction = (InputData) => {
    let allElement;
    for (allElement of data) {
      if (allElement.NAME[0] == " ") {
        allElement.NAME = allElement.NAME.trim();
      }
      if (allElement.NAME.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.NAME.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }
    }
    setAllData(allElement2);
  };
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const Selectdata = () => {
      if (window.confirm(`download:\r ${selectedRows.map((r) => r.SNO)}?`)) {
        setToggleCleared(!toggleCleared);
        allData.map((e) => {
          selectedRows.map((sr) => {
            if (e.id === sr.id) {
              selectdata.push(e);
            }
            return selectedRows;
          });
          return allData;
        });
        downloadCSV(selectdata);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Export, { onExport: () => Selectdata(), icon: "true" });
  }, [allData, selectdata, selectedRows]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "datatable", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", placeholder: "Search...", className: "mb-4 form-control-sm form-control", onChange: (ele) => {
      myfunction(ele.target.value);
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Xe,
      {
        columns,
        data: allData,
        actions: actionsMemo,
        contextActions,
        onSelectedRowsChange: handleRowSelected,
        clearSelectedRows: toggleCleared,
        selectableRows: true,
        pagination: true
      }
    )
  ] });
};
var _baseFindIndex;
var hasRequired_baseFindIndex;
function require_baseFindIndex() {
  if (hasRequired_baseFindIndex) return _baseFindIndex;
  hasRequired_baseFindIndex = 1;
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  _baseFindIndex = baseFindIndex;
  return _baseFindIndex;
}
var _baseIsNaN;
var hasRequired_baseIsNaN;
function require_baseIsNaN() {
  if (hasRequired_baseIsNaN) return _baseIsNaN;
  hasRequired_baseIsNaN = 1;
  function baseIsNaN(value) {
    return value !== value;
  }
  _baseIsNaN = baseIsNaN;
  return _baseIsNaN;
}
var _strictIndexOf;
var hasRequired_strictIndexOf;
function require_strictIndexOf() {
  if (hasRequired_strictIndexOf) return _strictIndexOf;
  hasRequired_strictIndexOf = 1;
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1, length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  _strictIndexOf = strictIndexOf;
  return _strictIndexOf;
}
var _baseIndexOf;
var hasRequired_baseIndexOf;
function require_baseIndexOf() {
  if (hasRequired_baseIndexOf) return _baseIndexOf;
  hasRequired_baseIndexOf = 1;
  var baseFindIndex = require_baseFindIndex(), baseIsNaN = require_baseIsNaN(), strictIndexOf = require_strictIndexOf();
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  _baseIndexOf = baseIndexOf;
  return _baseIndexOf;
}
var _arrayIncludes;
var hasRequired_arrayIncludes;
function require_arrayIncludes() {
  if (hasRequired_arrayIncludes) return _arrayIncludes;
  hasRequired_arrayIncludes = 1;
  var baseIndexOf = require_baseIndexOf();
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }
  _arrayIncludes = arrayIncludes;
  return _arrayIncludes;
}
var _arrayIncludesWith;
var hasRequired_arrayIncludesWith;
function require_arrayIncludesWith() {
  if (hasRequired_arrayIncludesWith) return _arrayIncludesWith;
  hasRequired_arrayIncludesWith = 1;
  function arrayIncludesWith(array, value, comparator) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }
  _arrayIncludesWith = arrayIncludesWith;
  return _arrayIncludesWith;
}
var _arrayMap;
var hasRequired_arrayMap;
function require_arrayMap() {
  if (hasRequired_arrayMap) return _arrayMap;
  hasRequired_arrayMap = 1;
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  _arrayMap = arrayMap;
  return _arrayMap;
}
var _baseDifference;
var hasRequired_baseDifference;
function require_baseDifference() {
  if (hasRequired_baseDifference) return _baseDifference;
  hasRequired_baseDifference = 1;
  var SetCache = require_SetCache(), arrayIncludes = require_arrayIncludes(), arrayIncludesWith = require_arrayIncludesWith(), arrayMap = require_arrayMap(), baseUnary = require_baseUnary(), cacheHas = require_cacheHas();
  var LARGE_ARRAY_SIZE = 200;
  function baseDifference(array, values, iteratee, comparator) {
    var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
    if (!length) {
      return result;
    }
    if (iteratee) {
      values = arrayMap(values, baseUnary(iteratee));
    }
    if (comparator) {
      includes = arrayIncludesWith;
      isCommon = false;
    } else if (values.length >= LARGE_ARRAY_SIZE) {
      includes = cacheHas;
      isCommon = false;
      values = new SetCache(values);
    }
    outer:
      while (++index < length) {
        var value = array[index], computed = iteratee == null ? value : iteratee(value);
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        } else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
    return result;
  }
  _baseDifference = baseDifference;
  return _baseDifference;
}
var _isFlattenable;
var hasRequired_isFlattenable;
function require_isFlattenable() {
  if (hasRequired_isFlattenable) return _isFlattenable;
  hasRequired_isFlattenable = 1;
  var Symbol2 = require_Symbol(), isArguments = requireIsArguments(), isArray = requireIsArray();
  var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  _isFlattenable = isFlattenable;
  return _isFlattenable;
}
var _baseFlatten;
var hasRequired_baseFlatten;
function require_baseFlatten() {
  if (hasRequired_baseFlatten) return _baseFlatten;
  hasRequired_baseFlatten = 1;
  var arrayPush = require_arrayPush(), isFlattenable = require_isFlattenable();
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  _baseFlatten = baseFlatten;
  return _baseFlatten;
}
var _baseIsMatch;
var hasRequired_baseIsMatch;
function require_baseIsMatch() {
  if (hasRequired_baseIsMatch) return _baseIsMatch;
  hasRequired_baseIsMatch = 1;
  var Stack = require_Stack(), baseIsEqual = require_baseIsEqual();
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data2 = matchData[index];
      if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data2 = matchData[index];
      var key = data2[0], objValue = object[key], srcValue = data2[1];
      if (noCustomizer && data2[2]) {
        if (objValue === void 0 && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack();
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  _baseIsMatch = baseIsMatch;
  return _baseIsMatch;
}
var _isStrictComparable;
var hasRequired_isStrictComparable;
function require_isStrictComparable() {
  if (hasRequired_isStrictComparable) return _isStrictComparable;
  hasRequired_isStrictComparable = 1;
  var isObject = requireIsObject();
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  _isStrictComparable = isStrictComparable;
  return _isStrictComparable;
}
var _getMatchData;
var hasRequired_getMatchData;
function require_getMatchData() {
  if (hasRequired_getMatchData) return _getMatchData;
  hasRequired_getMatchData = 1;
  var isStrictComparable = require_isStrictComparable(), keys = requireKeys();
  function getMatchData(object) {
    var result = keys(object), length = result.length;
    while (length--) {
      var key = result[length], value = object[key];
      result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
  }
  _getMatchData = getMatchData;
  return _getMatchData;
}
var _matchesStrictComparable;
var hasRequired_matchesStrictComparable;
function require_matchesStrictComparable() {
  if (hasRequired_matchesStrictComparable) return _matchesStrictComparable;
  hasRequired_matchesStrictComparable = 1;
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
    };
  }
  _matchesStrictComparable = matchesStrictComparable;
  return _matchesStrictComparable;
}
var _baseMatches;
var hasRequired_baseMatches;
function require_baseMatches() {
  if (hasRequired_baseMatches) return _baseMatches;
  hasRequired_baseMatches = 1;
  var baseIsMatch = require_baseIsMatch(), getMatchData = require_getMatchData(), matchesStrictComparable = require_matchesStrictComparable();
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }
  _baseMatches = baseMatches;
  return _baseMatches;
}
var isSymbol_1;
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol_1;
  hasRequiredIsSymbol = 1;
  var baseGetTag = require_baseGetTag(), isObjectLike = requireIsObjectLike();
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  isSymbol_1 = isSymbol;
  return isSymbol_1;
}
var _isKey;
var hasRequired_isKey;
function require_isKey() {
  if (hasRequired_isKey) return _isKey;
  hasRequired_isKey = 1;
  var isArray = requireIsArray(), isSymbol = requireIsSymbol();
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  _isKey = isKey;
  return _isKey;
}
var memoize_1;
var hasRequiredMemoize;
function requireMemoize() {
  if (hasRequiredMemoize) return memoize_1;
  hasRequiredMemoize = 1;
  var MapCache = require_MapCache();
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }
  memoize.Cache = MapCache;
  memoize_1 = memoize;
  return memoize_1;
}
var _memoizeCapped;
var hasRequired_memoizeCapped;
function require_memoizeCapped() {
  if (hasRequired_memoizeCapped) return _memoizeCapped;
  hasRequired_memoizeCapped = 1;
  var memoize = requireMemoize();
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  _memoizeCapped = memoizeCapped;
  return _memoizeCapped;
}
var _stringToPath;
var hasRequired_stringToPath;
function require_stringToPath() {
  if (hasRequired_stringToPath) return _stringToPath;
  hasRequired_stringToPath = 1;
  var memoizeCapped = require_memoizeCapped();
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  _stringToPath = stringToPath;
  return _stringToPath;
}
var _baseToString;
var hasRequired_baseToString;
function require_baseToString() {
  if (hasRequired_baseToString) return _baseToString;
  hasRequired_baseToString = 1;
  var Symbol2 = require_Symbol(), arrayMap = require_arrayMap(), isArray = requireIsArray(), isSymbol = requireIsSymbol();
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray(value)) {
      return arrayMap(value, baseToString) + "";
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -Infinity ? "-0" : result;
  }
  _baseToString = baseToString;
  return _baseToString;
}
var toString_1;
var hasRequiredToString;
function requireToString() {
  if (hasRequiredToString) return toString_1;
  hasRequiredToString = 1;
  var baseToString = require_baseToString();
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  toString_1 = toString;
  return toString_1;
}
var _castPath;
var hasRequired_castPath;
function require_castPath() {
  if (hasRequired_castPath) return _castPath;
  hasRequired_castPath = 1;
  var isArray = requireIsArray(), isKey = require_isKey(), stringToPath = require_stringToPath(), toString = requireToString();
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }
  _castPath = castPath;
  return _castPath;
}
var _toKey;
var hasRequired_toKey;
function require_toKey() {
  if (hasRequired_toKey) return _toKey;
  hasRequired_toKey = 1;
  var isSymbol = requireIsSymbol();
  function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -Infinity ? "-0" : result;
  }
  _toKey = toKey;
  return _toKey;
}
var _baseGet;
var hasRequired_baseGet;
function require_baseGet() {
  if (hasRequired_baseGet) return _baseGet;
  hasRequired_baseGet = 1;
  var castPath = require_castPath(), toKey = require_toKey();
  function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  _baseGet = baseGet;
  return _baseGet;
}
var get_1;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get_1;
  hasRequiredGet = 1;
  var baseGet = require_baseGet();
  function get(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet(object, path);
    return result === void 0 ? defaultValue : result;
  }
  get_1 = get;
  return get_1;
}
var _baseHasIn;
var hasRequired_baseHasIn;
function require_baseHasIn() {
  if (hasRequired_baseHasIn) return _baseHasIn;
  hasRequired_baseHasIn = 1;
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  _baseHasIn = baseHasIn;
  return _baseHasIn;
}
var _hasPath;
var hasRequired_hasPath;
function require_hasPath() {
  if (hasRequired_hasPath) return _hasPath;
  hasRequired_hasPath = 1;
  var castPath = require_castPath(), isArguments = requireIsArguments(), isArray = requireIsArray(), isIndex = require_isIndex(), isLength = requireIsLength(), toKey = require_toKey();
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
  }
  _hasPath = hasPath;
  return _hasPath;
}
var hasIn_1;
var hasRequiredHasIn;
function requireHasIn() {
  if (hasRequiredHasIn) return hasIn_1;
  hasRequiredHasIn = 1;
  var baseHasIn = require_baseHasIn(), hasPath = require_hasPath();
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  hasIn_1 = hasIn;
  return hasIn_1;
}
var _baseMatchesProperty;
var hasRequired_baseMatchesProperty;
function require_baseMatchesProperty() {
  if (hasRequired_baseMatchesProperty) return _baseMatchesProperty;
  hasRequired_baseMatchesProperty = 1;
  var baseIsEqual = require_baseIsEqual(), get = requireGet(), hasIn = requireHasIn(), isKey = require_isKey(), isStrictComparable = require_isStrictComparable(), matchesStrictComparable = require_matchesStrictComparable(), toKey = require_toKey();
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }
  _baseMatchesProperty = baseMatchesProperty;
  return _baseMatchesProperty;
}
var identity_1;
var hasRequiredIdentity;
function requireIdentity() {
  if (hasRequiredIdentity) return identity_1;
  hasRequiredIdentity = 1;
  function identity(value) {
    return value;
  }
  identity_1 = identity;
  return identity_1;
}
var _baseProperty;
var hasRequired_baseProperty;
function require_baseProperty() {
  if (hasRequired_baseProperty) return _baseProperty;
  hasRequired_baseProperty = 1;
  function baseProperty(key) {
    return function(object) {
      return object == null ? void 0 : object[key];
    };
  }
  _baseProperty = baseProperty;
  return _baseProperty;
}
var _basePropertyDeep;
var hasRequired_basePropertyDeep;
function require_basePropertyDeep() {
  if (hasRequired_basePropertyDeep) return _basePropertyDeep;
  hasRequired_basePropertyDeep = 1;
  var baseGet = require_baseGet();
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }
  _basePropertyDeep = basePropertyDeep;
  return _basePropertyDeep;
}
var property_1;
var hasRequiredProperty;
function requireProperty() {
  if (hasRequiredProperty) return property_1;
  hasRequiredProperty = 1;
  var baseProperty = require_baseProperty(), basePropertyDeep = require_basePropertyDeep(), isKey = require_isKey(), toKey = require_toKey();
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }
  property_1 = property;
  return property_1;
}
var _baseIteratee;
var hasRequired_baseIteratee;
function require_baseIteratee() {
  if (hasRequired_baseIteratee) return _baseIteratee;
  hasRequired_baseIteratee = 1;
  var baseMatches = require_baseMatches(), baseMatchesProperty = require_baseMatchesProperty(), identity = requireIdentity(), isArray = requireIsArray(), property = requireProperty();
  function baseIteratee(value) {
    if (typeof value == "function") {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == "object") {
      return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
  }
  _baseIteratee = baseIteratee;
  return _baseIteratee;
}
var _apply;
var hasRequired_apply;
function require_apply() {
  if (hasRequired_apply) return _apply;
  hasRequired_apply = 1;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  _apply = apply;
  return _apply;
}
var _overRest;
var hasRequired_overRest;
function require_overRest() {
  if (hasRequired_overRest) return _overRest;
  hasRequired_overRest = 1;
  var apply = require_apply();
  var nativeMax = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  _overRest = overRest;
  return _overRest;
}
var constant_1;
var hasRequiredConstant;
function requireConstant() {
  if (hasRequiredConstant) return constant_1;
  hasRequiredConstant = 1;
  function constant(value) {
    return function() {
      return value;
    };
  }
  constant_1 = constant;
  return constant_1;
}
var _defineProperty;
var hasRequired_defineProperty;
function require_defineProperty() {
  if (hasRequired_defineProperty) return _defineProperty;
  hasRequired_defineProperty = 1;
  var getNative = require_getNative();
  var defineProperty = (function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  })();
  _defineProperty = defineProperty;
  return _defineProperty;
}
var _baseSetToString;
var hasRequired_baseSetToString;
function require_baseSetToString() {
  if (hasRequired_baseSetToString) return _baseSetToString;
  hasRequired_baseSetToString = 1;
  var constant = requireConstant(), defineProperty = require_defineProperty(), identity = requireIdentity();
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  _baseSetToString = baseSetToString;
  return _baseSetToString;
}
var _shortOut;
var hasRequired_shortOut;
function require_shortOut() {
  if (hasRequired_shortOut) return _shortOut;
  hasRequired_shortOut = 1;
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  _shortOut = shortOut;
  return _shortOut;
}
var _setToString;
var hasRequired_setToString;
function require_setToString() {
  if (hasRequired_setToString) return _setToString;
  hasRequired_setToString = 1;
  var baseSetToString = require_baseSetToString(), shortOut = require_shortOut();
  var setToString = shortOut(baseSetToString);
  _setToString = setToString;
  return _setToString;
}
var _baseRest;
var hasRequired_baseRest;
function require_baseRest() {
  if (hasRequired_baseRest) return _baseRest;
  hasRequired_baseRest = 1;
  var identity = requireIdentity(), overRest = require_overRest(), setToString = require_setToString();
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  _baseRest = baseRest;
  return _baseRest;
}
var isArrayLikeObject_1;
var hasRequiredIsArrayLikeObject;
function requireIsArrayLikeObject() {
  if (hasRequiredIsArrayLikeObject) return isArrayLikeObject_1;
  hasRequiredIsArrayLikeObject = 1;
  var isArrayLike = requireIsArrayLike(), isObjectLike = requireIsObjectLike();
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  isArrayLikeObject_1 = isArrayLikeObject;
  return isArrayLikeObject_1;
}
var last_1;
var hasRequiredLast;
function requireLast() {
  if (hasRequiredLast) return last_1;
  hasRequiredLast = 1;
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : void 0;
  }
  last_1 = last;
  return last_1;
}
var differenceBy_1;
var hasRequiredDifferenceBy;
function requireDifferenceBy() {
  if (hasRequiredDifferenceBy) return differenceBy_1;
  hasRequiredDifferenceBy = 1;
  var baseDifference = require_baseDifference(), baseFlatten = require_baseFlatten(), baseIteratee = require_baseIteratee(), baseRest = require_baseRest(), isArrayLikeObject = requireIsArrayLikeObject(), last = requireLast();
  var differenceBy2 = baseRest(function(array, values) {
    var iteratee = last(values);
    if (isArrayLikeObject(iteratee)) {
      iteratee = void 0;
    }
    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), baseIteratee(iteratee, 2)) : [];
  });
  differenceBy_1 = differenceBy2;
  return differenceBy_1;
}
var differenceByExports = requireDifferenceBy();
const differenceBy = /* @__PURE__ */ getDefaultExportFromCjs(differenceByExports);
const tableDataItems = [
  {
    id: "1",
    SNO: 1,
    Name: "Yonna",
    Office: "Qond",
    Position: "Financial Controller",
    Age: "30",
    Salary: "$143,654"
  },
  {
    id: "2",
    SNO: 2,
    Name: "Zonna",
    Office: "Jond",
    Position: "Accountant",
    Age: "22",
    Salary: "$343,654"
  },
  {
    id: "3",
    SNO: 3,
    Name: "Nonna",
    Office: "Tond",
    Position: "Chief Executive Officer",
    Age: "23",
    Salary: "$743,654"
  },
  {
    id: "4",
    SNO: 4,
    Name: "Bonna",
    Office: "Oond",
    Position: "Chief Operating Officer",
    Age: "24",
    Salary: "$643,654"
  },
  {
    id: "5",
    SNO: 5,
    Name: "Honna",
    Office: "Pond",
    Position: "Data Coordinator",
    Age: "25",
    Salary: "$243,654"
  },
  {
    id: "6",
    SNO: 6,
    Name: "Fonna",
    Office: "Nond",
    Position: "Developer",
    Age: "20",
    Salary: "$543,654"
  },
  {
    id: "7",
    SNO: 7,
    Name: "Aonna",
    Office: "Xond",
    Position: "Development lead",
    Age: "30",
    Salary: "$843,654"
  },
  {
    id: "8",
    SNO: 8,
    Name: "Qonna",
    Office: "Vond",
    Position: "Director",
    Age: "90",
    Salary: "$743,654"
  },
  {
    id: "9",
    SNO: 9,
    Name: "Jond",
    Office: "Zonna",
    Position: "Marketing Officer",
    Age: "67",
    Salary: "$543,654"
  },
  {
    id: "10",
    SNO: 10,
    Name: "Yonna",
    Office: "Qond",
    Position: "Financial Controller",
    Age: "65",
    Salary: "$143,654"
  },
  {
    id: "11",
    SNO: 11,
    Name: "Yonna",
    Office: "Qond",
    Position: "Financial Controller",
    Age: "26",
    Salary: "$143,654"
  },
  {
    id: "12",
    SNO: 12,
    Name: "Yonna",
    Office: "Qond",
    Position: "Financial Controller",
    Age: "45",
    Salary: "$143,654"
  },
  {
    id: "13",
    SNO: 13,
    Name: "Qonna",
    Office: "Pond",
    Position: "Data Coordinator",
    Age: "30",
    Salary: "$243,654"
  },
  {
    id: "14",
    SNO: 14,
    Name: "Yonna",
    Office: "Qond",
    Position: "Financial Controller",
    Age: "23",
    Salary: "$143,654"
  }
];
const DataTabless = () => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const columns2 = [
    {
      name: "S.NO",
      selector: (row) => [row.SNO],
      sortable: true
    },
    {
      name: "NAME",
      selector: (row) => [row.Name],
      sortable: true
    },
    {
      name: "LAST NAME",
      selector: (row) => [row.Office],
      sortable: true
    },
    {
      name: "POSITION",
      selector: (row) => [row.Position],
      sortable: true
    },
    {
      name: "AGE",
      selector: (row) => [row.Age],
      sortable: true
    },
    {
      name: " SALARY",
      selector: (row) => [row.Salary],
      sortable: true
    }
  ];
  const [allData, setAllData] = React.useState(tableDataItems);
  let allElement2 = [];
  let myfunction = (InputData) => {
    let allElement;
    for (allElement of tableDataItems) {
      if (allElement.Name[0] == " ") {
        allElement.Name = allElement.Name.trim();
      }
      if (allElement.Name.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.Name.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }
    }
    setAllData(allElement2);
  };
  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (window.confirm(
        `Are you sure you want to delete:\r ${selectedRows.map(
          (r) => r.SNO
        )}?`
      )) {
        setToggleCleared(!toggleCleared);
        setAllData(differenceBy(allData, selectedRows, "SNO"));
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", onClick: handleDelete, icon: "true", children: "Delete" }, "delete");
  }, [allData, selectedRows, toggleCleared]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "datatable deletadd", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "float-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "text",
        placeholder: "Search...",
        className: "mb-4 form-control-sm form-control",
        onChange: (ele) => {
          myfunction(ele.target.value);
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Xe,
      {
        title: true,
        columns: columns2,
        data: allData,
        selectableRows: true,
        contextActions,
        onSelectedRowsChange: handleRowSelected,
        clearSelectedRows: toggleCleared,
        pagination: true
      }
    )
  ] });
};
let nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");
const Savetable = (args) => {
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  const data2 = [
    {
      id: "1",
      sno: "1",
      Name: "Yonna",
      lastname: "Qond",
      position: "Financial Controller",
      email: "jacke123@gmail.com",
      salary: "$143,654"
    },
    {
      id: "2",
      sno: "2",
      Name: "Zonna",
      lastname: "Jond",
      position: "Accountant",
      email: "virginia456@gmail.com",
      salary: "$343,654"
    },
    {
      id: "3",
      sno: "3",
      Name: "Nonna",
      lastname: "Tond",
      position: "Chief Executive Officer",
      email: "jacobthomson@gmail.com",
      salary: "$743,654"
    },
    {
      id: "4",
      sno: "4",
      Name: "Bonna",
      lastname: "Oond",
      position: "Chief Operating Officer",
      email: "trevor@gmail.com",
      salary: "$643,654"
    },
    {
      id: "5",
      sno: "5",
      Name: "Honna",
      lastname: "Pond",
      position: "Data Coordinator",
      email: "kylie@gmail.com",
      salary: "$243,654"
    },
    {
      id: "6",
      sno: "6",
      Name: "Fonna",
      lastname: "Nond",
      position: "Developer",
      email: "jan@gmail.com",
      salary: "$543,654"
    },
    {
      id: "7",
      sno: "7",
      Name: "Aonna",
      lastname: "Xond",
      position: "Development lead",
      email: "trevor@gmail.com",
      salary: "$843,654"
    },
    {
      id: "8",
      sno: "8",
      Name: "Qonna",
      lastname: "Vond",
      position: "Director",
      email: "kylie@gmail.com",
      salary: "$843,654"
    },
    {
      id: "9",
      sno: "9",
      Name: "Jond",
      lastname: "Zonna",
      position: "Marketing Officer",
      email: "emily@gmail.com",
      salary: "$843,654"
    },
    {
      id: "10",
      sno: "10",
      Name: "Yonna",
      lastname: "Qond",
      position: "Financial Controller",
      email: "jan@gmail.com",
      salary: "$433,060"
    }
  ];
  const [contacts, setContacts] = reactExports.useState(data2);
  const [addFormData, setAddFormData] = reactExports.useState({
    sno: "",
    Name: "",
    lastname: "",
    position: "",
    email: "",
    salary: ""
  });
  const [editFormData, setEditFormData] = reactExports.useState({
    sno: "",
    Name: "",
    lastname: "",
    position: "",
    email: "",
    salary: ""
  });
  const [editContactId, setEditContactId] = reactExports.useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      sno: addFormData.sno,
      Name: addFormData.Name,
      lastname: addFormData.lastname,
      position: addFormData.position,
      email: addFormData.email,
      salary: addFormData.salary
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      sno: editFormData.sno,
      Name: editFormData.Name,
      lastname: editFormData.lastname,
      position: editFormData.position,
      email: editFormData.email,
      salary: editFormData.salary
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      sno: contact.sno,
      Name: contact.Name,
      lastname: contact.lastname,
      position: contact.position,
      email: contact.email,
      salary: contact.salary
    };
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  let allElement2 = [];
  let myfunction = (InputData) => {
    let allElement;
    for (allElement of data2) {
      if (allElement.Name[0] == " ") {
        allElement.Name = allElement.Name.trim();
      }
      if (allElement.Name.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.Name.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }
    }
    setContacts(allElement2);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleEditFormSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary mb-3", onClick: toggle, children: "Add New Row" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "float-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "text",
          placeholder: "Search...",
          className: "mb-4 form-control-sm form-control",
          onChange: (ele) => {
            myfunction(ele.target.value);
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Table,
        {
          id: "delete-datatable",
          className: "table table-bordered text-nowrap border-bottom",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "wd-5p text-center", children: "S NO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Last Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Position" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Salary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: contacts.map((contact) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: editContactId === contact.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              EditableRow,
              {
                editFormData,
                handleEditFormChange,
                handleCancelClick
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              ReadOnlyRow,
              {
                contact,
                handleEditClick,
                handleDeleteClick
              }
            ) }, contact.id)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Modal,
      {
        isOpen: modal,
        toggle,
        ...args,
        size: "lg",
        centered: true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalHeader, { id: "contained-modal-title-vcenter", children: [
            "Add New Row",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-close",
                onClick: toggle,
                children: "x"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleAddFormSubmit, className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "sno",
                required: true,
                placeholder: "S No...",
                onChange: handleAddFormChange,
                className: "form-control mb-2 border"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "Name",
                required: true,
                placeholder: "Enter a name...",
                onChange: handleAddFormChange,
                className: "form-control mb-2 border"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "lastname",
                required: true,
                placeholder: "Enter an lastname...",
                onChange: handleAddFormChange,
                className: "form-control mb-2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "position",
                required: true,
                placeholder: "Enter a phone number...",
                onChange: handleAddFormChange,
                className: "form-control mb-2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "email",
                name: "email",
                required: true,
                placeholder: "Enter an email...",
                onChange: handleAddFormChange,
                className: "form-control mb-2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "salary",
                name: "salary",
                required: true,
                placeholder: "Salary...",
                onChange: handleAddFormChange,
                className: "form-control mb-2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-primary me-2 wd-100p ",
                type: "submit",
                children: "Add"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggle, children: "Close" }) })
        ]
      }
    )
  ] });
};
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "text",
        required: true,
        placeholder: "S NO",
        name: "Sno",
        value: editFormData.sno,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "text",
        required: true,
        placeholder: "Enter a name...",
        name: "Name",
        value: editFormData.Name,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "text",
        required: true,
        placeholder: "Enter an lastname...",
        name: "lastname",
        value: editFormData.lastname,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "text",
        required: true,
        placeholder: "Enter a phone number...",
        name: "position",
        value: editFormData.position,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "email",
        required: true,
        placeholder: "Enter an email...",
        name: "email",
        value: editFormData.email,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "salary",
        required: true,
        placeholder: "Salary...",
        name: "salary",
        value: editFormData.salary,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary me-1", type: "submit", children: "Save" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "",
          className: "btn btn-danger me-1",
          type: "button ",
          onClick: handleCancelClick,
          children: "Cancel"
        }
      )
    ] })
  ] });
};
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "wd-5p text-center", children: contact.sno }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: contact.Name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: contact.lastname }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: contact.position }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: contact.email }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: contact.salary }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "",
          className: "btn btn-primary me-1",
          type: "button",
          onClick: (event) => handleEditClick(event, contact),
          children: "Edit"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "",
          className: "btn btn-danger me-1",
          type: "button",
          onClick: () => handleDeleteClick(contact.id),
          children: "Delete"
        }
      )
    ] })
  ] });
};
const DataTable = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "Data Tables",
      home: "Home",
      name: "Tables",
      fonticonsname: "Data Tables"
    }
  ),
  "Details Display DataTable",
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Basic DataTable" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BasicTable, {}) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "File Export" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "file-export", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExportCSV, {}) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Deleted Row DataTable" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataTabless, {}) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Details Display DataTable" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Savetable, {}) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Fixed Header" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive datatble-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fixedheader, {}) }) })
    ] })
  ] }) })
] });
DataTable.propTypes = {};
DataTable.defaultProps = {};
export {
  DataTable as default
};

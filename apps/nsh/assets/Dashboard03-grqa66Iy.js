import { a as React, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { u as user1 } from "./1-D9D-sDJ2.js";
import { u as user2 } from "./2-C7nMX_t4.js";
import { u as user4 } from "./4-B2cp7gEW.js";
import { u as user14 } from "./14-D5oivJTg.js";
import { u as user8 } from "./8-BqL85zok.js";
import { u as user10 } from "./10-DvLRbf8W.js";
import { u as user3 } from "./3-sVDGTRrN.js";
import { q as PageHeader, R as Row, C as Col, g as Card, h as CardBody, n as CardHeader, c as DropdownToggle, D as DropdownMenu, b as Link, T as Table, r as Progress } from "./index-DRovfVAv.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-Bd29La1Q.js";
import { C as CardTitle } from "./CardTitle-Bk04aMpl.js";
import { a as ApexChart2 } from "./data-_5U7v3ts.js";
import { S as SimpleBar } from "./index-DRCK5GEP.js";
import { h } from "./react-apexcharts.esm-CkgSm5Qi.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./5-vtpEo8ki.js";
import "./6-BnLqC6y1.js";
import "./7-DPYO_OwL.js";
import "./9-uUt78-1N.js";
import "./11-DOVWzwhr.js";
import "./12-DCQ8KYQr.js";
import "./13-P8HidYhJ.js";
import "./15-M80PxkED.js";
import "./16-Cj3VG8Ln.js";
class ProjectInvestment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Project Budget",
          data: [7635, 5465, 6754, 5432, 5435, 6545, 4453, 3425, 7654, 3245, 4532, 5643]
        },
        {
          name: "Expenses",
          data: [5435, 3452, 5432, 3452, 2564, 3456, 3123, 2435, 5463, 1245, 3245, 4534]
        }
      ],
      options: {
        legend: {
          position: "top"
        },
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        colors: ["var(--primary-bg-color)", "#f72d66"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        grid: {},
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        tooltip: {
          show: true,
          showContent: true,
          alwaysShowContent: true,
          triggerOn: "mousemove",
          trigger: "axis",
          axisPointer: {
            label: {
              show: false
            }
          }
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "line", height: 340 }) });
  }
}
class ApexChart3 extends React.Component {
  constructor(props) {
    super(props);
    var sparklineData2 = [13, 26, 20, 33, 21, 40, 35, 65];
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
        colors: ["#4454c3"],
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
        height: 185,
        width: "100%"
      }
    );
  }
}
const CompleteInvoices = [
  {
    Client: "Hoyt Righter",
    Date: "Jan 13, 2020",
    Invoice: "INV-1432",
    Amount: "$34,980",
    class: "badge bg-success rounded-pill",
    Status: "Paid"
  },
  {
    Client: "Melvina Harn",
    Date: "Feb 12, 2020",
    Invoice: "INV-5467",
    Amount: "$35,768",
    class: "badge bg-success rounded-pill",
    Status: "Paid"
  },
  {
    Client: "Riva Digangi",
    Date: "Mar 23, 2020",
    Invoice: "INV-6543",
    Amount: "$13,456",
    class: "badge bg-success rounded-pill",
    Status: "Paid"
  },
  {
    Client: "Craig Dollard",
    Date: "Apr 11, 2020",
    Invoice: "INV-3245",
    Amount: "$25,678",
    class: "badge bg-danger rounded-pill",
    Status: "Due"
  }
];
const Dashboard03 = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Project Management", date: "Select Date" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "expenses-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-university feature-icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-weight-bold mb-0 mt-4", children: "$12,345.00" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted fs-18 mb-0", children: "Expenses This Month" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApexChart3, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: 12, xl: 8, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-12 col-sm d-flex mb-4 mb-sm-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "mdi mdi-basket-fill fs-60 text-success icon-dropshadow-success me-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Total Orders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-0 font-weight-bold", children: "2245" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-12 col-sm d-flex mb-4 mb-sm-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "mdi mdi-basket-fill fs-60 text-primary icon-dropshadow-primary me-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Recent Order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-0 font-weight-bold", children: "45%" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-12 col-sm d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "mdi mdi-basket-fill fs-60 text-danger icon-dropshadow-danger me-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Cancel Orders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-0 font-weight-bold", children: "56%" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 4, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Total Invoices" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 font-weight-bold", children: "245" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-1 text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-down  me-1" }),
              " 43.2"
            ] }),
            " ",
            "last month"
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 4, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Credited Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 font-weight-bold", children: "$53k" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-1 text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up  me-1" }),
              " 19.8"
            ] }),
            " ",
            "last month"
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 4, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1", children: "Pending Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 font-weight-bold", children: "$2345" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-1 text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-caret-up  me-1" }),
              " 0.8%"
            ] }),
            " ",
            "last month"
          ] })
        ] }) }) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-deck", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Project Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DropdownToggle,
            {
              type: "button",
              className: "btn btn-white",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              color: "",
              children: "This week"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Next Week" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
              " ",
              "Last Month"
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "latest-timeline latest-timeline1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "timeline mb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "mt-0 media media-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "latest-timeline1-icon bg-primary shadow3", children: "10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: "mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "font-weight-semibold fs-17", children: "Angular Project" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge bg-success ms-2", children: "Completed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 fs-13 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Client:" }),
              " Hoyt Righter"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted fs-12 d-block", children: "12.00 am" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                className: "text-primary fs-12 font-weight-bold",
                to: "#",
                children: "View Details"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mt-0 media media-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media mt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "latest-timeline1-icon bg-secondary shadow3", children: "11" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: "mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "font-weight-semibold fs-17", children: "Html Project" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge bg-secondary ms-2", children: "Hold" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 fs-13 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Client:" }),
              " Riva Digangi"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted fs-12 d-block", children: "11.00 am" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                className: "text-primary fs-12 font-weight-bold",
                to: "#",
                children: "View Details"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mt-0 media media-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media mt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "latest-timeline1-icon bg-success shadow3", children: "12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h6", { className: "mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "font-weight-semibold fs-17", children: "Php Project" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge bg-primary ms-2", children: "Running" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 fs-13 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Client:" }),
              " Craig Dollard",
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted fs-12 d-block", children: "10.00am" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                className: "text-primary fs-12 font-weight-bold",
                to: "#",
                children: "View Details"
              }
            )
          ] })
        ] }) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 12, xl: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Project Investment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DropdownToggle,
            {
              color: "",
              type: "button",
              className: "btn btn-white dropdown-toggle",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              children: "This Year"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu p-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "last Year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "2018" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "2017" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "ProjectInvestment", className: "h-330", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectInvestment, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 5, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Project Statistics" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "mx-auto text-center pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-container2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApexChart2, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "pt-0 border-top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: " mt-4 no-gutters", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted mb-1 fs-13 d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-primary me-2 mt-1 brround" }),
          " ",
          "Running"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted mb-1 fs-13 d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-secondary me-2 mt-1 brround" }),
          " ",
          "Pending"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted mb-1 fs-13 d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-success me-2 mt-1 brround" }),
          " ",
          "Completed"
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 7, xl: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Complete Invoices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-options ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DropdownToggle,
            {
              className: "option-dots",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              color: "",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-ellipsis-v" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
              " ",
              "Download Print"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Last Week" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Last Month" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Yearly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { className: "dropdown-item", href: "#", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cog me-2" }),
              " Settings"
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive invoice-table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table card-table table-vcenter text-nowrap mb-0 border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "wd-lg-10p", children: "Client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "wd-lg-20p", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "wd-lg-20p", children: "Invoice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "wd-lg-20p", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "wd-lg-20p", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: CompleteInvoices.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-weight-semibold", children: list.Client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-nowrap", children: list.Date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Invoice }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Amount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: list.class, children: list.Status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group mb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DropdownToggle,
              {
                color: "",
                type: "button",
                className: "btn btn-white dropdown-toggle",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: "Actions"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Copy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Send Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Before Due" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Print Invoice" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Download Print" })
            ] })
          ] }) })
        ] }, index)) })
      ] }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, lg: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Project Payment Status" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-end justify-content-between mg-b-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "", children: "Angular Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-weight-bold mb-1", children: "50%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " progress-sm mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Progress,
          {
            className: "progress-bar",
            style: {
              height: "9px"
            },
            value: 50,
            color: "primary"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-end justify-content-between mg-b-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "", children: "Php Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-weight-bold mb-1", children: "60%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " progress-sm mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Progress,
          {
            className: "progress-bar ",
            style: {
              height: "9px"
            },
            value: 60,
            color: "secondary"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-end justify-content-between mg-b-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "", children: "Ecommerce Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-weight-bold mb-1", children: "40%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " progress-sm mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Progress,
          {
            className: "my-3 progress-bar ",
            style: {
              height: "9px"
            },
            value: 40,
            color: "info"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-end justify-content-between mg-b-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "", children: "Html Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-weight-bold mb-1", children: "100%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " progress-sm mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Progress,
          {
            className: "progress-bar",
            style: {
              height: "9px"
            },
            value: 100,
            color: "success"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-end justify-content-between mg-b-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "", children: "Java Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-weight-bold mb-1", children: "50%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " progress-sm mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Progress,
          {
            className: "progress-bar",
            style: {
              height: "9px"
            },
            value: 50,
            color: "danger"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-end justify-content-between mg-b-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "", children: "Wordpress Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-weight-bold mb-1", children: "90%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " progress-sm mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Progress,
          {
            className: "progress-bar ",
            style: {
              height: "9px"
            },
            value: 90,
            color: "warning"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Project Review Activity" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 scrollbar", id: "scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleBar, { style: { height: "340px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user14, alt: "", className: "img-activity shadow3 border-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "Adam Berry",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Add a new projects " }),
            " ",
            "AngularJS Template"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "30 mins ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user10, alt: "", className: "img-activity shadow3 border-secondary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "Irene Hunter",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: " Add a new projects " }),
            "Free HTML Template"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "1 days ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user4, alt: "", className: "img-activity shadow3 border-success" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "John Payne",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: " Add a new projects " }),
            "Free PSD Template"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "3 days ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user8, alt: "", className: "img-activity shadow3 border-danger" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "Julia Hardacre",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: " Add a new projects " }),
            "Free UI Template"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "5 days ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user14, alt: "", className: "img-activity shadow3 border-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "Adam Berry",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Add a new projects " }),
            " ",
            "AngularJS Template"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "30 mins ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user10, alt: "", className: "img-activity shadow3 border-secondary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "Irene Hunter",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: " Add a new projects " }),
            "Free HTML Template"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "1 days ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user4, alt: "", className: "img-activity shadow3 border-success" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "John Payne",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: " Add a new projects " }),
            "Free PSD Template"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "3 days ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user8, alt: "", className: "img-activity shadow3 border-danger" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "Julia Hardacre",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: " Add a new projects " }),
            "Free UI Template"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "5 days ago" })
        ] }) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 12, md: 12, xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Email Notification" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 scrollbar2", id: "scrollbar2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleBar, { style: { height: "340px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user4, alt: "", className: "img-activity shadow3 border-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "New Project ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Issue Fixed" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "30 mins ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user2, alt: "", className: "img-activity shadow3 border-secondary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "Wordpress Project",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: " New theme updated " })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "1 days ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user1, alt: "", className: "img-activity shadow3 border-success" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "E-Commerce",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Plugin Issue Fixed and Updated" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "3 days ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user3, alt: "", className: "img-activity shadow3 border-danger" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "New Theme",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: " Updated in Site" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "5 days ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user4, alt: "", className: "img-activity shadow3 border-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "New Project ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Issue Fixed" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "30 mins ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user2, alt: "", className: "img-activity shadow3 border-secondary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "Wordpress Project",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: " New theme updated " })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "1 days ago" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user1, alt: "", className: "img-activity shadow3 border-success" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "time-activity", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item-activity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 font-weight-bold", children: [
            "E-Commerce",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Plugin Issue Fixed and Updated" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted ", children: "3 days ago" })
        ] }) })
      ] }) }) })
    ] }) })
  ] })
] });
export {
  Dashboard03 as default
};

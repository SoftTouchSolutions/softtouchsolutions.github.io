import { a as React, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { q as PageHeader, R as Row, C as Col, g as Card, h as CardBody, n as CardHeader, c as DropdownToggle, D as DropdownMenu, T as Table, b as Link, I as Input } from "./index-BtyINLIY.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-B9TQj4BA.js";
import { C as CardFooter } from "./CardFooter-CtXrHYxe.js";
import { C as CardTitle } from "./CardTitle-BLcyN_Gi.js";
import { h } from "./react-apexcharts.esm-CkgSm5Qi.js";
import { u as user1 } from "./1-D9D-sDJ2.js";
import { u as user4 } from "./4-B2cp7gEW.js";
import { u as user3 } from "./3-sVDGTRrN.js";
import { u as user5 } from "./5-vtpEo8ki.js";
import { u as user6 } from "./6-BnLqC6y1.js";
import { u as user2 } from "./2-C7nMX_t4.js";
import { u as user7 } from "./7-DPYO_OwL.js";
import { u as user12 } from "./12-DCQ8KYQr.js";
import { u as user10 } from "./10-DvLRbf8W.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Radialbar = {
  series: [85],
  options: {
    colors: ["var(--primary-bg-color)"],
    stroke: {
      lineCap: "round"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%"
        }
      }
    }
  }
};
const Radialbar1 = {
  series: [60],
  options: {
    colors: ["#2dce89"],
    stroke: {
      lineCap: "round"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%"
        }
      }
    }
  }
};
const Radialbar2 = {
  series: [20],
  options: {
    colors: ["#f72d66"],
    stroke: {
      lineCap: "round"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%"
        }
      }
    }
  }
};
class ApexChart2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [68, 55, 45, 34, 56],
      options: {
        colors: ["#2dce89", "var(--primary-bg-color)", "#f72d66", "#45aaf2", "#ecb403"],
        legend: {
          show: false
        },
        chart: {
          type: "donut"
        },
        responsive: [
          {
            legend: {
              show: false
            },
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              }
            }
          }
        ]
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      h,
      {
        options: this.state.options,
        series: this.state.series,
        type: "donut"
      }
    ) });
  }
}
const BestEmployees = [
  {
    img: user1,
    name: "John Wisely",
    work: "React Developer"
  },
  {
    img: user4,
    name: "Nicki Fanning",
    work: "PHP Developer"
  },
  {
    img: user5,
    name: "Lula Malone",
    work: "Ui Designer"
  },
  {
    img: user2,
    name: "Rina Summa",
    work: "Java Developer"
  },
  {
    img: user10,
    name: "Yadira Acklin",
    work: "Web Developer"
  },
  {
    img: user12,
    name: "Joanna Latta",
    work: "Angular Developer"
  }
];
const ProjectStatus = [
  {
    title: "APPlications",
    num: "4,678",
    performance: "68%",
    class: "w-3 h-3 bg-primary me-2 mt-1 brround"
  },
  {
    title: "Shortlisted",
    num: "3,789",
    performance: "55%",
    class: "w-3 h-3 bg-secondary me-2 mt-1 brround"
  },
  {
    title: "Rejected",
    num: "2,137",
    performance: "45%",
    class: "w-3 h-3 bg-success me-2 mt-1 brround"
  },
  {
    title: "On Hold",
    num: "1,786",
    performance: "34%",
    class: "w-3 h-3 bg-info me-2 mt-1 brround"
  },
  {
    title: "Finalised",
    num: "897",
    performance: "27%",
    class: "w-3 h-3 bg-warning me-2 mt-1 brround"
  }
];
const ApplicationStatus = [
  {
    Code: "2548",
    Date: "3rd Feb 2019",
    Employee: "Emp-2312",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Sick",
    Status: "Approved",
    class: "badge bg-success rounded-pill"
  },
  {
    Code: "4536",
    Date: "23rd Mar 2019",
    Employee: "Emp-6754",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Hospital",
    class: "badge bg-success rounded-pill",
    Status: "Approved"
  },
  {
    Code: "2567",
    Date: "4th Feb 2019",
    Employee: "Emp-1432",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Outside",
    class: "badge bg-primary rounded-pill",
    Status: "Pending"
  },
  {
    Code: "7654",
    Date: "13th Mar 2019",
    Employee: "Emp-1254",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Normal",
    Status: "Rejected",
    class: "badge bg-danger rounded-pill"
  },
  {
    Code: "8754",
    Date: "28th Feb 2019",
    Employee: "Emp-8765",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Sick",
    Status: "Approved",
    class: "badge bg-success rounded-pill"
  },
  {
    Code: "1232",
    Date: "23rd Apr 2019",
    Employee: "Emp-7643",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Other Work",
    Status: "Rejected",
    class: "badge bg-danger rounded-pill"
  },
  {
    Code: "8765",
    Date: "16th Feb 2019",
    Employee: "Emp-2431",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Sick",
    Status: "Pending",
    class: "badge bg-primary rounded-pill"
  },
  {
    Code: "7654",
    Date: "23rd Mar 2019",
    Employee: "Emp-5643",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Outside",
    Status: "Rejected",
    class: "badge bg-danger rounded-pill"
  }
];
const EmployeeDetails = [
  {
    pic: user1,
    name: "Lillian Blake",
    email: "lillianblake@gmail.com",
    work: "React Developer",
    projecrt: "876",
    performance: "45%"
  },
  {
    pic: user2,
    name: "Georgine Earle",
    email: "georgineearle@gmail.com",
    work: "Php Developer",
    projecrt: "342",
    performance: "55%"
  },
  {
    pic: user3,
    name: "Veta Willson",
    email: "vetawillson@gmail.com",
    work: "Web Developer",
    projecrt: "564",
    performance: "85%"
  },
  {
    pic: user4,
    name: "Kayleigh Throneberry",
    email: "kayleighthroneberry@gmail.com",
    work: "Web Developer",
    projecrt: "345",
    performance: "90%"
  },
  {
    pic: user5,
    name: "Gretta Perro",
    email: "grettaperro@gmail.com",
    work: "Angular Developer",
    projecrt: "123",
    performance: "65%"
  },
  {
    pic: user6,
    name: "Emelina Poisson",
    email: "emelinapoisson@gmail.com",
    work: "Web Developer",
    projecrt: "456",
    performance: "40%"
  },
  {
    pic: user7,
    name: "Marleen Sohn",
    email: "marleensohn@gmail.com",
    work: "Web Developer",
    projecrt: "876",
    performance: "65%"
  }
];
class ProjectTracked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Project In",
        data: [1453, 3425, 7654, 3245, 4532, 5643, 7635, 5465, 6754, 5432, 5435, 6545]
      }, {
        name: "Project take",
        data: [1123, 2435, 5463, 1245, 3245, 4534, 5435, 3452, 5432, 3452, 2564, 3456]
      }, {
        name: "On Hold",
        data: [330, 990, 2191, 2e3, 1287, 1109, 2013, 1322, 1980, 2971, 3089, 1234]
      }],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            horizontal: false,
            columnWidth: "28%"
          }
        },
        colors: ["var(--primary-bg-color)", "#f72d66", "#cedbfd"],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        tooltip: {
          show: true
        },
        fill: {
          opacity: 1
        },
        legend: {
          show: false
        }
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "chart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options, series: this.state.series, type: "bar", height: 350 }) });
  }
}
class ApexCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series7: [45],
      options7: {
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
              size: "50%"
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
  }
  render() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(h, { options: this.state.options7, series: this.state.series7, className: "mx-auto chart-circle chart-circle-xs chart-circle-secondary mt-sm-0 mb-0 icon-dropshadow-secondary", type: "radialBar", height: 50, width: 50 }) });
  }
}
const Radialbartable = {
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
      options: Radialbartable.options,
      series: Radialbartable.series,
      className: "",
      type: "radialBar",
      height: 55,
      width: 60
    }
  );
};
const Dashboard04 = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Hr Dashboard", date: "Select Date" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "mb-lg-4 mb-xl-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 fs-18 text-muted", children: "Total Application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-weight-bold mb-1", children: "45,675" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-arrow-up me-1" }),
          " +1.4%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          h,
          {
            options: Radialbar.options,
            series: Radialbar.series,
            type: "radialBar",
            className: "mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0",
            height: 170,
            width: 100
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-circle-value text-center fs-20", children: "85%" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "mb-lg-4 mb-xl-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 fs-18 text-muted", children: "Shortlisted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-weight-bold mb-1", children: "30,175" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-arrow-up me-1" }),
          " +1.8%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          h,
          {
            options: Radialbar1.options,
            series: Radialbar1.series,
            type: "radialBar",
            className: "mx-auto chart-circle chart-circle-md chart-circle-success mt-sm-0 mb-0",
            height: 170,
            width: 100
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto chart-circle-value text-center fs-20", children: "60%" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "mb-lg-4 mb-xl-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 fs-18 text-muted", children: "Rejected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-weight-bold mb-1", children: "74,745" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-arrow-down me-1" }),
          " -2.4%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          h,
          {
            options: Radialbar2.options,
            series: Radialbar2.series,
            type: "radialBar",
            className: "mx-auto chart-circle chart-circle-md chart-circle-secondary mt-sm-0 mb-0",
            height: 170,
            width: 100
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto chart-circle-value text-center fs-20", children: "25%" })
      ] })
    ] }) }) }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row row-deck", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, xl: 8, lg: 7, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "d-sm-flex d-block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Project Tracked" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex ms-auto mt-sm-0 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DropdownToggle,
            {
              color: "",
              tag: "a",
              type: "button",
              className: "btn btn-white dropdown-toggle",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              children: "This Year"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu p-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "last Year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "2018" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "2017" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectTracked, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: 4, lg: 4, sm: 4, className: " mb-4 mb-sm-0 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-weight-normal text-dark mb-0", children: "1,897" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted mb-1 fs-13 d-inline-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-primary me-2 mt-1 br-3" }),
            " ",
            "Project In"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: 4, lg: 4, sm: 4, className: " mb-4 mb-sm-0 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-weight-normal text-dark mb-0", children: "3,785" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted mb-1 fs-13 d-inline-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-secondary me-2 mt-1 br-3" }),
            " ",
            "Project Take"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: 4, lg: 4, sm: 4, className: " text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-weight-normal text-dark mb-0", children: "16,897" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted mb-1 fs-13 d-inline-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-light-color me-2 mt-1 br-3" }),
            " ",
            "On Hold"
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, md: 12, lg: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Best Employees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-options ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DropdownToggle,
            {
              color: "",
              tag: "a",
              className: "option-dots",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-ellipsis-v" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "", children: " Download Print" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "", children: "Last Week" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "", children: "Last Month" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "", children: "Yearly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-divider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownItem, { href: "", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cog me-2" }),
              " Settings"
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: " p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table transaction-table mb-0 text-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: BestEmployees.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "d-sm-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "w-7 h-7 rounded shadow me-3",
              src: list.img,
              alt: "media1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-1 font-weight-semibold", children: list.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: list.work })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-white", to: "#", children: "Profile" }) })
      ] }, index)) }) }) }) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: " row-deck", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Project Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DropdownToggle,
            {
              color: "",
              tag: "a",
              type: "button",
              className: "btn btn-white dropdown-toggle",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false",
              children: "This Year"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu p-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "last Year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "2018" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "2017" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: " mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApexChart2, {}) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: " p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table table-hover mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ProjectStatus.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: list.class }),
          " ",
          list.title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: list.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: list.performance })
      ] }, index)) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Application Status" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: " d-sm-flex d-block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "my-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            className: "form-control",
            placeholder: "Search"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "my-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            className: "form-control",
            placeholder: "Date"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "my-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            className: "form-control",
            placeholder: "Reason"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "my-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-primary btn-block", to: "#", children: "Search" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: " table-responsive p-0 mx-313 scroll-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table card-table table-vcenter text-nowrap table-borderedless border-0 inde4-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Employee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Leave" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ApplicationStatus.map((list, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Employee }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Leave }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: list.Reason }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: list.class, children: list.Status }) })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "card-footer text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn-link", to: "#", children: "View All" }) })
    ] }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { as: "h3", children: "Employee Details" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table table-vcenter text-nowrap mb-0 border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-bottom-0", children: "Employee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center", children: "Occupation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center", children: "Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center", children: "Performance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: EmployeeDetails.map((list, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "avatar-lg rounded-circle me-3",
              src: list.pic,
              alt: "Image description"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ms-3 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-0 text-dark", children: list.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0  fs-13 text-muted", children: list.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center", children: list.work }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center", children: list.projecrt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto chart-circle chart-circle-xs chart-circle-success  mt-sm-0 mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Round, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto chart-circle-value chartcircle text-center", children: list.performance })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light", to: "#", children: [
          " ",
          "View Details"
        ] }) })
      ] }, i)) })
    ] }) }) })
  ] }) }) })
] });
Dashboard04.propTypes = {};
Dashboard04.defaultProps = {};
export {
  Dashboard04 as default
};

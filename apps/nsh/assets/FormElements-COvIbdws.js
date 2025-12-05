import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, I as Input, h as CardBody, F as Form, L as Label, B as Button, c as DropdownToggle, D as DropdownMenu, z as FormGroup, b as Link, i as classnames } from "./index-Dr-4baW5.js";
import { N as Nav } from "./Nav-B31R6ZtD.js";
import { N as NavItem } from "./NavItem-BmoPr1Wy.js";
import { N as NavLink } from "./NavLink-DgWWnDll.js";
import { U as UncontrolledDropdown, D as DropdownItem } from "./UncontrolledDropdown-DRoStKfe.js";
import { C as CardTitle } from "./CardTitle-BjRFrU5i.js";
import { L as ListGroup, a as ListGroupItem } from "./ListGroupItem-BMVT9wdr.js";
import { T as TabContent, a as TabPane } from "./TabPane-we4K_QqQ.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-uqX4oSmU.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const FormElements = () => {
  const [Tab1, setTab1] = reactExports.useState("tab20");
  const style1 = (tab) => {
    if (Tab1 !== tab) {
      setTab1(tab);
    }
  };
  const Monthsoptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" }
  ];
  const [monthsOption, setMonthsOption] = reactExports.useState(null);
  const Countryoptions = [
    { value: "Germany", label: "Germany" },
    { value: "Canada", label: "Canada" },
    { value: "Usa", label: "Usa" },
    { value: "Aus", label: "Aus" }
  ];
  const [countryOption, setCountryOption] = reactExports.useState(null);
  const Yearoptions = [
    { value: "2040", label: "2040" },
    { value: "2039", label: "2039" },
    { value: "2037", label: "2037" },
    { value: "2036", label: "2036" },
    { value: "2035", label: "2035" },
    { value: "2034", label: "2034" },
    { value: "2033", label: "2033" },
    { value: "2032", label: "2032" },
    { value: "2031", label: "2031" },
    { value: "2030", label: "2030" },
    { value: "2029", label: "2029" },
    { value: "2028", label: "2028" },
    { value: "2027", label: "2027" },
    { value: "2026", label: "2026" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" }
  ];
  const [yearOption, setYearOption] = reactExports.useState(null);
  const Daysoptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" }
  ];
  const [daysOption, setDaysOption] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Form-Elements",
        home: "Home",
        name: "Forms",
        fonticonsname: "Form-Elements"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "12", md: "12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Inputs & Textareas " }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row row-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control mb-4", placeholder: "Input box", type: "text" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg mg-t-10 mg-lg-t-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control mb-4", placeholder: "Input box (readonly)", readOnly: true, type: "text" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg mg-t-10 mg-lg-t-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control mb-4", disabled: true, placeholder: "Input box (disabled)", type: "text" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row row-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "form-control mb-4", placeholder: "Textarea", rows: "3" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg mg-t-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "form-control mb-4", placeholder: "Textarea (readonly)", readOnly: true, rows: "3" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg mg-t-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "form-control mb-4", disabled: true, placeholder: "Texarea (disabled)", rows: "3" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Input Sizes" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row row-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control form-control-sm  mb-4", placeholder: "Input sm box", type: "text" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control  mb-4", placeholder: "Input box", type: "text" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control form-control-lg", placeholder: "Input lg box", type: "text" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Valid Inputs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-body pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { className: "needs-validation was-validated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row row-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control  mb-4 is-valid state-valid", placeholder: "Input box (success state)", required: true, type: "text", defaultValue: "This is input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "form-control mb-4 is-valid state-valid", placeholder: "Textarea (success state)", required: true, rows: "3", defaultValue: "This is textarea" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control mb-4 is-invalid state-invalid", placeholder: "Input box (invalid state)", required: true, type: "text" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "form-control mb-4 is-invalid state-invalid", placeholder: "Textarea (invalid state)", required: true, rows: "3" })
            ] }) })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Form elements" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Country" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                defaultValue: countryOption,
                onChange: setCountryOption,
                options: Countryoptions,
                placeholder: "Country",
                classNamePrefix: "Search"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Input group" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Search for..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", type: "button", children: "Go!" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Input group buttons" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { className: "btn-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownToggle, { color: "", tag: "a", "data-bs-toggle": "dropdown", className: "btn btn-primary dropdown-toggle", children: "Action" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "News" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Messages" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { divider: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { className: "dropdown-item", href: "#", children: "Edit Profile" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Separated inputs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Search for..." }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-secondary", type: "button", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-search" }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-icon", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-icon-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-user" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Username" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "ZIP Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row gutters-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Search for..." }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-auto align-self-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "form-help",
                  "data-bs-toggle": "popover",
                  "data-bs-placement": "top",
                  "data-bs-content": "<p>ZIP Code must be US or CDN format. You can use an extended ZIP+4 code to determine address more accurately.</p>\r\n                                                        <p class='mb-0'><a href=''>USP ZIP codes lookup tools</a></p>\r\n                                                        ",
                  children: "?"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Bootstrap's Custom File Input" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-file", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "file", className: "form-control form-file-input", name: "form-file-input" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 m-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Date of birth" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "5", className: "mb-3 mb-sm-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: monthsOption,
                  onChange: setMonthsOption,
                  options: Monthsoptions,
                  placeholder: "Months",
                  classNamePrefix: "Search"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "3", className: "mb-3 mb-sm-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: daysOption,
                  onChange: setDaysOption,
                  options: Daysoptions,
                  placeholder: "Days",
                  classNamePrefix: "Search"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "4", className: "mb-3 mb-sm-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: yearOption,
                  onChange: setYearOption,
                  options: Yearoptions,
                  placeholder: "Year",
                  classNamePrefix: "Search"
                }
              ) })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", xl: "12", md: "12", sm: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h4", children: "Gerenal Elements" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "form-horizontal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Text" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", defaultValue: "Typing....." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", htmlFor: "example-email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", id: "example-email", name: "example-email", className: "form-control", placeholder: "Email" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", className: "form-control", defaultValue: "password" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Placeholder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "text" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Readonly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", readOnly: true, defaultValue: "Readonly value" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Disabled" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", disabled: true, defaultValue: "Disabled value" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control", type: "number", name: "number" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "6", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "form-horizontal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control", type: "text", name: "name" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Text area" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "form-control", rows: "3", defaultValue: "Hiiiii....." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "URL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control", type: "url", name: "url" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Search" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control", type: "search", name: "search" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Tel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control", type: "tel", name: "tel" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: " mb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "col-md-3 form-label", children: "Input Select" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                defaultValue: countryOption,
                onChange: setCountryOption,
                options: Countryoptions,
                placeholder: "Country",
                classNamePrefix: "Search"
              }
            ) })
          ] })
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { method: "post", className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "form elements" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "6", lg: "6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Toggle switch single" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", name: "form-switch-checkbox", className: "form-switch-input" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description", children: "I agree with terms and conditions" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Your skills" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "selectgroup selectgroup-pills", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "selectgroup-item", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", name: "value", defaultValue: "HTML", className: "selectgroup-input", defaultChecked: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectgroup-button", children: "HTML" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "selectgroup-item", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", name: "value", defaultValue: "CSS", className: "selectgroup-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectgroup-button", children: "CSS" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "selectgroup-item", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", name: "value", defaultValue: "PHP", className: "selectgroup-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectgroup-button", children: "PHP" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "selectgroup-item", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", name: "value", defaultValue: "JavaScript", className: "selectgroup-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectgroup-button", children: "JavaScript" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "selectgroup-item", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", name: "value", defaultValue: "Angular", className: "selectgroup-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectgroup-button", children: "Angular" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "selectgroup-item", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", name: "value", defaultValue: "Java", className: "selectgroup-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectgroup-button", children: "Java" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "selectgroup-item", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", name: "value", defaultValue: "C++", className: "selectgroup-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectgroup-button", children: "C++" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Select Color" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", defaultValue: "azure", className: "colorinput-input", defaultChecked: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-azure" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", defaultValue: "indigo", className: "colorinput-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-indigo" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", defaultValue: "purple", className: "colorinput-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-purple" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", defaultValue: "pink", className: "colorinput-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-pink" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", defaultValue: "red", className: "colorinput-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-red" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", defaultValue: "orange", className: "colorinput-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-orange" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", defaultValue: "yellow", className: "colorinput-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-yellow" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", defaultValue: "lime", className: "colorinput-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-lime" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", defaultValue: "green", className: "colorinput-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-green" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", defaultValue: "teal", className: "colorinput-input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-teal" })
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "6", lg: "6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Radios" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-controls-stacked", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", className: "custom-control-input", name: "example-radios", defaultValue: "option1", defaultChecked: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", className: "custom-control-input", name: "example-radios", defaultValue: "option2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", className: "custom-control-input", name: "example-radios", defaultValue: "option3", disabled: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option Disabled" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", className: "custom-control-input", name: "example-radios2", defaultValue: "option4", disabled: true, defaultChecked: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option Disabled defaultChecked" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 m-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Checkboxes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-controls-stacked", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", name: "example-checkbox1", defaultValue: "option1", defaultChecked: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", name: "example-checkbox2", defaultValue: "option2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", name: "example-checkbox3", defaultValue: "option3", disabled: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option Disabled" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", name: "example-checkbox4", defaultValue: "option4", defaultChecked: true, disabled: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option Disabled defaultChecked" })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Switches " }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { children: [
            "Bootstrap Switch Default",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { switch: true, className: "material-switch pull-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "someSwitchOptionDefault", name: "someSwitchOption001", type: "checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "someSwitchOptionDefault", className: "label-default" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { children: [
            "Bootstrap Switch Primary",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { switch: true, className: "material-switch pull-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "someSwitchOptionPrimary", name: "someSwitchOption001", type: "checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "someSwitchOptionPrimary", className: "label-primary" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { children: [
            "Bootstrap Switch Success",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { switch: true, className: "material-switch pull-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "someSwitchOptionSuccess", name: "someSwitchOption001", type: "checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "someSwitchOptionSuccess", className: "label-success" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { children: [
            "Bootstrap Switch Info",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { switch: true, className: "material-switch pull-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "someSwitchOptionInfo", name: "someSwitchOption001", type: "checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "someSwitchOptionInfo", className: "label-info" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { children: [
            "Bootstrap Switch Warning",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { switch: true, className: "material-switch pull-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "someSwitchOptionWarning", name: "someSwitchOption001", type: "checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "someSwitchOptionWarning", className: "label-warning" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroupItem, { children: [
            "Bootstrap Switch Danger",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { switch: true, className: "material-switch pull-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "someSwitchOptionDanger", name: "someSwitchOption001", type: "checkbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "someSwitchOptionDanger", className: "label-danger" })
            ] })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", xl: "6", md: "12", sm: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h4", children: "Vertical Form" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "exampleInputEmail1", className: "form-label", children: "Email address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "Enter email" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "exampleInputPassword1", className: "form-label", children: "Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", className: "form-control", id: "exampleInputPassword1", placeholder: "Password" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", name: "example-checkbox2", defaultValue: "option2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Check me Out" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", type: "submit", className: "btn btn-primary mt-4 mb-0", children: "Submit" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", xl: "6", md: "12", sm: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h4", children: "Horizontal Form" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "form-horizontal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "inputName", className: "col-md-3 form-label", children: "User Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", id: "inputName", placeholder: "Name" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "inputEmail3", className: "col-md-3 form-label", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", className: "form-control", id: "inputEmail3", placeholder: "Email" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "inputPassword3", className: "col-md-3 form-label", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", className: "form-control", id: "inputPassword3", placeholder: "Password" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "mb-0 row justify-content-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", name: "example-checkbox2", defaultValue: "option2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Check me Out" })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "mb-0 mt-4 row justify-content-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", type: "submit", className: "btn btn-primary me-1", children: "Sign in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", type: "submit", className: "btn btn-secondary me-1", children: "Cancel" })
          ] }) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Shipping Details" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", id: "name1", placeholder: "First Name" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", id: "name2", placeholder: "Last Name" }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", className: "form-control", id: "inputEmail5", placeholder: "Email Address" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", id: "address", placeholder: "AddressLine1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", id: "country", placeholder: "Country" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", id: "region", placeholder: "Country/Region" }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", id: "city", placeholder: "City" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "6", className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "form-control", id: "postal", placeholder: "Zip/Postal" }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-footer mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-primary", children: "Confirm  Details" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "CheckOut" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-options", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(UncontrolledDropdown, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownToggle, { tag: "a", color: "", type: "button", className: "btn btn-primary dropdown-toggle", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: [
              "Visa",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { className: "dropdown-menu", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Visa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Rupay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "Mastercard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownItem, { href: "#", children: "PayPal" })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Card Holder Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", id: "name11", placeholder: "First Name" })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "9", className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Credit card Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "form-control", id: "number", placeholder: "number" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "3", className: "mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "CVV Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "form-control", id: "region1", placeholder: "675" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 m-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Expiration Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: monthsOption,
                  onChange: setMonthsOption,
                  options: Monthsoptions,
                  placeholder: "Months",
                  classNamePrefix: "Search"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: yearOption,
                  onChange: setYearOption,
                  options: Yearoptions,
                  placeholder: "Year",
                  classNamePrefix: "Search"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 mb-0 text-dark", children: "Your Credit card information is encrypted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-footer mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-primary", children: "Make Payment" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "6", lg: "12", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Billing Information" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
              "First Name ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "First name" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
              "Last Name ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Last name" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
              "Company Name ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Company name" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
              "Email address ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", className: "form-control", placeholder: "Email" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
              "Country ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                defaultValue: countryOption,
                onChange: setCountryOption,
                options: Countryoptions,
                placeholder: "Country",
                classNamePrefix: "Search"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
              "Address ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Home Address" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
              "City ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "City" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
              "Postal Code ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "form-control", placeholder: "ZIP Code" })
          ] }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "6", lg: "12", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Payment Information" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-pay", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Nav, { className: "tabs-menu nav", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(NavLink, { href: "#tab20", className: classnames({ active: Tab1 === "tab20" }), onClick: () => {
              style1("tab20");
            }, "data-bs-toggle": "tab", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-credit-card" }),
              " Credit Card"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(NavLink, { href: "#tab21", className: classnames({ active: Tab1 === "tab21" }), onClick: () => {
              style1("tab21");
            }, "data-bs-toggle": "tab", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-paypal" }),
              "  Paypal"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(NavLink, { href: "#tab22", className: classnames({ active: Tab1 === "tab22" }), onClick: () => {
              style1("tab22");
            }, "data-bs-toggle": "tab", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-university" }),
              "  Bank Transfer"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-body tabs-menu-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabContent, { className: "tab-content", activeTab: Tab1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-danger-transparent-2 text-danger px-4 py-2 br-3 mb-4", role: "alert", children: "Please Enter Valid Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Card Holder Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "First Name" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Card number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Search for..." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { color: "", className: "btn btn-secondary box-shadow-0", type: "button", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cc-visa" }),
                    "   ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cc-amex" }),
                    "  ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-cc-mastercard" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Expiration" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "form-control", placeholder: "MM", name: "Month" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "form-control", placeholder: "YY", name: "Year" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
                    "CVV ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-question-circle" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "form-control", required: true })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-primary", children: "Confirm" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Paypal is easiest way to pay online" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "#", className: "btn btn-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-paypal" }),
                " Log in my Paypal"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabPane, { className: "tab-pane", tabId: "tab22", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bank account details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "card-text", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "BANK: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: " THE UNION BANK 0456" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "card-text", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "Account number: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: " 67542897653214" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "card-text", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "IBAN: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: "543218769" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
              ] })
            ] })
          ] }) })
        ] }) })
      ] }) })
    ] })
  ] });
};
FormElements.propTypes = {};
FormElements.defaultProps = {};
export {
  FormElements as default
};

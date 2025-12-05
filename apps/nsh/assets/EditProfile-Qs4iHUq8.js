import { a as React, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, h as CardBody, b as Link, n as CardHeader, L as Label, I as Input } from "./index-PSM4fvJQ.js";
import { C as CardFooter } from "./CardFooter-DmrFf5V7.js";
import { C as CardTitle } from "./CardTitle-BC9vGAnP.js";
import { u as user16 } from "./16-Cuc8by-s.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-uqX4oSmU.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const EditProfile = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const options = [
    { value: "Germany", label: "Germany" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Canada", label: "Canada" },
    { value: "Usa", label: "Usa " },
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Usa", label: "Usa " },
    { value: "Albania", label: "Albania" },
    { value: "China", label: "China " },
    { value: "Denmark", label: "Denmark" },
    { value: "Finland", label: "Finland " },
    { value: "India", label: "India" },
    { value: "China", label: "China " },
    { value: "Kiribati", label: "Kiribati" },
    { value: "Kuwait", label: "Kuwait " },
    { value: "Mexico", label: "Mexico" },
    { value: "Pakistan", label: "Pakistan" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "EditProfile",
        home: "Home",
        name: "Pages",
        fonticonsname: "EditProfile"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "4", lg: "5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "box-widget widget-user", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "widget-user-image mx-auto mt-5 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "User Avatar", className: "rounded-circle", src: user16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pro-user", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pro-user-username text-dark mb-1", children: "Jenna Side" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "pro-user-desc text-muted", children: "Web Designer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/"}pages/profile/profile01`, className: "btn btn-primary mt-3", children: "View Profile" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", className: "border-end text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "description-block p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "description-header mb-1 font-weight-bold", children: "689k" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Followers" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "description-block text-center p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "description-header mb-1 font-weight-bold", children: "3,765" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Following" })
            ] }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Edit Password" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "User Avatar", className: "rounded-circle  me-3", src: user16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 ms-0 ms-sm-auto ", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-primary mb-1 me-1", children: "Edit profile" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-danger mb-1 me-1", children: "Delete profile" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Change Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", className: "form-control", defaultValue: "password" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "New Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", className: "form-control", defaultValue: "password" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Confirm Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", className: "form-control", defaultValue: "password" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { className: "text-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-primary me-1", children: "Updated" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-danger me-1", children: "Cancel" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "8", lg: "7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Edit Profile" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-weight-bold", children: "Basic info:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "First Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "First Name" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Last Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Last Name" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Email address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", className: "form-control", placeholder: "Email" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "form-control", placeholder: "Number" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Home Address" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "City" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Postal Code" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "form-control", placeholder: "ZIP Code" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Country" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: selectedOption,
                  onChange: setSelectedOption,
                  options,
                  placeholder: "Chrome",
                  classNamePrefix: "Search"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-weight-bold mt-5", children: "External Links:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Facebook" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "https://www.facebook.com/" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Google" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "https://www.google.com/" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Twitter" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "https://twitter.com/" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Pinterest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "https://in.pinterest.com/" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-weight-bold mt-5", children: "About:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "About Me" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: "5", className: "form-control", placeholder: "Enter About your description" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-primary", children: "Updated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn btn-danger", children: "Cancel" })
        ] }) })
      ] }) })
    ] })
  ] });
};
EditProfile.propTypes = {};
EditProfile.defaultProps = {};
export {
  EditProfile as default
};

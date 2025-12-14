import { r as reactExports, a as React, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { a as useNavigate, R as Row, C as Col, g as Card, h as CardBody, p as Alert, I as Input, L as Label, b as Link, B as Button } from "./index-zbnKGqDS.js";
import { I as InputGroup } from "./InputGroup-C_oGzqz7.js";
import { a as auth } from "./firebase-DfbfLo-p.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Register = () => {
  document.querySelector("body").classList.add("main-body", "light-mode", "ltr", "page-style1", "error-page");
  document.querySelector("body").classList.remove("app", "sidebar-mini");
  const [err, setError] = reactExports.useState("");
  const [data, setData] = React.useState({
    fullname: "",
    email: "",
    password: ""
  });
  const { email, password, fullname } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const Signup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(
      (user) => {
        console.log(user);
        RouteChange();
      }
    ).catch((err2) => {
      console.log(err2);
      setError(err2.message);
    });
  };
  let navigate = useNavigate();
  const RouteChange = () => {
    let path = "/dashboard/dashboard01";
    navigate(path);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-single", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "justify-content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: 7, lg: 6, xl: 5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4 mb-0 mt-7 mt-md-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center title-style mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-2", children: "Register" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted", children: "Create New Account" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list d-lg-flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.google.com/gmail/", target: "_blank", className: "btn btn-danger btn-w-lg d-block", children: "Google" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://twitter.com/", target: "_blank", className: "btn btn-info d-lg-inline d-block", children: "Twitter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/", target: "_blank", className: "btn btn-primary d-lg-inline d-block me-2", children: "Facebook" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "divider my-6" }),
      err && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { color: "danger", children: err }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InputGroup, { className: "input-group mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-group-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z", opacity: ".3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control", placeholder: "Enter your Name", name: "fullname", type: "text", value: fullname, onChange: changeHandler, required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InputGroup, { className: "input-group mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-group-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z", opacity: ".3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control", placeholder: "Enter your email", type: "email", name: "email", value: email, onChange: changeHandler, required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(InputGroup, { className: "input-group mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-group-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { fill: "none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", opacity: ".87" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z", opacity: ".3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "form-control", placeholder: "Enter your password", name: "password", type: "password", value: password, onChange: changeHandler, required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "custom-control-label", children: [
          "Agree the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "btn-link", children: "Terms and policy" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { color: "", role: "button", onClick: Signup, className: "btn btn-lg btn-primary btn-block px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-arrow-right" }),
        " Create a new account"
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-weight-normal fs-16", children: [
      "You Already have an account ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn-link font-weight-normal", to: `Auth/Login/Login`, children: "Login Here" })
    ] }) })
  ] }) }) }) }) }) });
};
Register.propTypes = {};
Register.defaultProps = {};
export {
  Register as default
};

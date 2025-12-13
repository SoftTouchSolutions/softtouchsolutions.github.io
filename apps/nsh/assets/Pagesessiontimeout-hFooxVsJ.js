import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { S as Swal, f as PageHeaders, g as Card, n as CardHeader, h as CardBody } from "./index-BtyINLIY.js";
import { C as CardTitle } from "./CardTitle-BLcyN_Gi.js";
import { f as favicon } from "./favicon-TrKW_Zmf.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Pagesessiontimeout = () => {
  reactExports.useEffect(() => {
    Swal.fire({
      title: "Session Timeout",
      text: "Do you want to continue",
      imageUrl: favicon,
      confirmButtonText: "Stay Logedin",
      timer: 2e3,
      timerProgressBar: true
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Session Time Out",
        home: "Home",
        name: "Apps",
        fonticonsname: "Session TimeOut"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Session Time Out Demo" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mg-b-20", children: "The Basic Collapse Accordion Styles of Dashtic template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mg-b-10", children: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences" })
      ] })
    ] })
  ] });
};
Pagesessiontimeout.propTypes = {};
Pagesessiontimeout.defaultProps = {};
export {
  Pagesessiontimeout as default
};

import { j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { ai as Routes, aj as Route, ak as AppraisalConfiguration, al as PerformanceAssessment, am as SelfAssessment, an as EmployeeSelector, ao as ManagerAssessment, ap as PeerAssessment, aq as SubordinateAssessment } from "./index-BtyINLIY.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const AppraisalRoutes = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/appraisal-configurations", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AppraisalConfiguration, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/performance-assessment/:configId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceAssessment, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/performance-assessment", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceAssessment, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/assessment/:configId/self/current", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SelfAssessment, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/assessment/continue/:assessmentId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SelfAssessment, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/assessment/:configId/manager/select", element: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeSelector, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/assessment/:configId/manager/:employeeId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagerAssessment, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/assessment/:configId/peer/select", element: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeSelector, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/assessment/:configId/peer/:peerId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PeerAssessment, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/assessment/:configId/subordinate/select", element: /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeSelector, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/assessment/:configId/subordinate/:managerId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SubordinateAssessment, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/assessment/view/:assessmentId", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceAssessment, {}) })
  ] });
};
export {
  AppraisalRoutes as default
};

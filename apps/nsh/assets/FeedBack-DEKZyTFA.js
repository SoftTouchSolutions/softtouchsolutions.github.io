import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { a as useNavigate, A as APIServices, S as Swal, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, F as Form, E as FormGroup, L as Label, I as Input, B as Button, o as Spinner } from "./index-DRovfVAv.js";
import { C as CardTitle } from "./CardTitle-Bk04aMpl.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const FeedbackForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = reactExports.useState(false);
  const [formErrors, setFormErrors] = reactExports.useState({});
  const [submitSuccess, setSubmitSuccess] = reactExports.useState(false);
  const [departments, setDepartments] = reactExports.useState([]);
  const [employees, setEmployees] = reactExports.useState([]);
  const [formData, setFormData] = reactExports.useState({
    employeeID: "",
    staff_name: "",
    deptcode: "",
    deptname: "",
    reviewPeriod: "",
    feedback_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    task_execution: "",
    power_skills: "",
    attitude: "",
    overall_goal_status: "",
    points_earned: "",
    total_score: "",
    finalGrade: "",
    recommendation: "",
    approved: "No"
  });
  reactExports.useEffect(() => {
    fetchDepartments();
    fetchEmployees();
  }, []);
  const fetchDepartments = async () => {
    setLoading(true);
    try {
      const departmentsData = await APIServices.getAllDepartments();
      if (departmentsData && departmentsData.length > 0) {
        setDepartments(departmentsData);
      } else {
        setDepartments([]);
        console.log("No departments found in the database");
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      setDepartments([]);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch departments from the server. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const employeesData = await APIServices.getAllEmployees();
      if (employeesData && employeesData.length > 0) {
        setEmployees(employeesData);
      } else {
        setEmployees([]);
        console.log("No employees found in the database");
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
      setEmployees([]);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch employees from the server. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    if (name === "employeeID" && value) {
      const selectedEmployee = employees.find((emp) => emp.employeeID === value);
      if (selectedEmployee) {
        setFormData((prevState) => ({
          ...prevState,
          staff_name: selectedEmployee.staff_name || "",
          deptcode: selectedEmployee.deptcode || "",
          deptname: selectedEmployee.deptname || ""
        }));
      }
    }
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: void 0
      });
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.employeeID) errors.employeeID = "Employee is required";
    if (!formData.reviewPeriod) errors.reviewPeriod = "Review period is required";
    if (!formData.feedback_date) errors.feedback_date = "Feedback date is required";
    if (!formData.task_execution) errors.task_execution = "Task execution rating is required";
    if (!formData.attitude) errors.attitude = "Attitude rating is required";
    if (!formData.overall_goal_status) errors.overall_goal_status = "Overall goal status is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill in all required fields."
      });
      return;
    }
    setLoading(true);
    try {
      const requiredFields = ["employeeID", "reviewPeriod"];
      const missingFields = requiredFields.filter((field) => !formData[field]);
      if (missingFields.length > 0) {
        Swal.fire("Error", `Please fill in the following required fields: ${missingFields.join(", ")}`, "error");
        setLoading(false);
        return;
      }
      let reviewPeriod = formData.reviewPeriod;
      if (!reviewPeriod.match(/^\d{4}-(?:Q[1-4]|H[1-2]|Annual)$/)) {
        const year = (/* @__PURE__ */ new Date()).getFullYear();
        const quarter = Math.ceil(((/* @__PURE__ */ new Date()).getMonth() + 1) / 3);
        reviewPeriod = `${year}-Q${quarter}`;
      }
      const feedbackData = {
        employeeID: formData.employeeID,
        // Include staff name and department information
        staff_name: formData.staff_name || "",
        deptcode: formData.deptcode || "",
        deptname: formData.deptname || "",
        reviewPeriod,
        // Keep string values for rating fields exactly as selected by the user
        task_execution: formData.task_execution,
        // Use actual selected value from dropdown
        power_skills: formData.power_skills,
        // Use actual selected value from dropdown
        attitude: formData.attitude,
        // Use actual selected value from dropdown
        overall_goal_status: formData.overall_goal_status,
        // Use actual selected value from dropdown
        // Only convert numeric fields
        points_earned: parseInt(formData.points_earned || 0, 10),
        total_score: Math.min(Math.max(parseFloat(formData.total_score || 0), 0), 100),
        approved: formData.approved === "Yes" ? 1 : 0,
        recommendation: formData.recommendation || ""
      };
      console.log("Formatted feedback data:", feedbackData);
      const response = await APIServices.createFeedback(feedbackData);
      console.log("Feedback created:", response);
      setSubmitSuccess(true);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Feedback submitted successfully!",
        showConfirmButton: true
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || "Failed to submit feedback. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "",
        home: "Home",
        name: "Feedback",
        fonticonsname: "Create Feedback"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Employee Feedback Form" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "employeeSelect", children: "Select Employee *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Input,
              {
                type: "select",
                name: "employeeID",
                id: "employeeSelect",
                value: formData.employeeID,
                onChange: handleInputChange,
                className: `form-control ${formErrors.employeeID ? "is-invalid" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Employee --" }),
                  employees.map((employee) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: employee.employeeID, children: [
                    employee.staff_name,
                    " - ",
                    employee.job_role || "N/A"
                  ] }, employee.employeeID))
                ]
              }
            ),
            formErrors.employeeID && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: formErrors.employeeID })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "staff_name", children: "Staff Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                id: "staff_name",
                name: "staff_name",
                value: formData.staff_name,
                readOnly: true,
                className: "form-control"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "deptname", children: "Department" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                id: "deptname",
                name: "deptname",
                value: formData.deptname,
                readOnly: true,
                className: "form-control"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "reviewPeriod", children: "Review Period *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                id: "reviewPeriod",
                name: "reviewPeriod",
                value: formData.reviewPeriod,
                onChange: handleInputChange,
                placeholder: "e.g. Q1 2024",
                className: `form-control ${formErrors.reviewPeriod ? "is-invalid" : ""}`
              }
            ),
            formErrors.reviewPeriod && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: formErrors.reviewPeriod })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "feedback_date", children: "Feedback Date *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "feedback_date",
                name: "feedback_date",
                value: formData.feedback_date,
                onChange: handleInputChange,
                className: `form-control ${formErrors.feedback_date ? "is-invalid" : ""}`
              }
            ),
            formErrors.feedback_date && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: formErrors.feedback_date })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "task_execution", children: "Task Execution *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Input,
              {
                type: "select",
                id: "task_execution",
                name: "task_execution",
                value: formData.task_execution,
                onChange: handleInputChange,
                className: `form-control ${formErrors.task_execution ? "is-invalid" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Rating --" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Excellent", children: "Excellent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Good", children: "Good" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Average", children: "Average" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Poor", children: "Poor" })
                ]
              }
            ),
            formErrors.task_execution && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: formErrors.task_execution })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "power_skills", children: "Power Skills" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Input,
              {
                type: "select",
                id: "power_skills",
                name: "power_skills",
                value: formData.power_skills,
                onChange: handleInputChange,
                className: "form-control",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Rating --" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Strong", children: "Strong" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Good", children: "Good" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Average", children: "Average" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Weak", children: "Weak" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "attitude", children: "Attitude *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Input,
              {
                type: "select",
                id: "attitude",
                name: "attitude",
                value: formData.attitude,
                onChange: handleInputChange,
                className: `form-control ${formErrors.attitude ? "is-invalid" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Rating --" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Positive", children: "Positive" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Neutral", children: "Neutral" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Negative", children: "Negative" })
                ]
              }
            ),
            formErrors.attitude && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: formErrors.attitude })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "overall_goal_status", children: "Overall Goal Status *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Input,
              {
                type: "select",
                id: "overall_goal_status",
                name: "overall_goal_status",
                value: formData.overall_goal_status,
                onChange: handleInputChange,
                className: `form-control ${formErrors.overall_goal_status ? "is-invalid" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Status --" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "On Track", children: "On Track" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Achieved", children: "Achieved" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Partially Achieved", children: "Partially Achieved" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Not Achieved", children: "Not Achieved" })
                ]
              }
            ),
            formErrors.overall_goal_status && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: formErrors.overall_goal_status })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "points_earned", children: "Points Earned" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                id: "points_earned",
                name: "points_earned",
                value: formData.points_earned,
                onChange: handleInputChange,
                placeholder: "Points Earned",
                className: "form-control"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "total_score", children: "Total Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                id: "total_score",
                name: "total_score",
                value: formData.total_score,
                onChange: handleInputChange,
                placeholder: "Total Score",
                className: "form-control"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "finalGrade", children: "Final Grade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Input,
              {
                type: "select",
                id: "finalGrade",
                name: "finalGrade",
                value: formData.finalGrade,
                onChange: handleInputChange,
                className: "form-control",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Grade --" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "A", children: "A" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "B", children: "B" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "C", children: "C" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "D", children: "D" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "F", children: "F" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "recommendation", children: "Recommendation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "textarea",
                id: "recommendation",
                name: "recommendation",
                value: formData.recommendation,
                onChange: handleInputChange,
                placeholder: "Recommendation",
                className: "form-control",
                rows: "4"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "approved", children: "Approved" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, { check: true, className: "me-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { check: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "approved",
                    value: "Yes",
                    checked: formData.approved === "Yes",
                    onChange: handleInputChange,
                    className: "form-check-input"
                  }
                ),
                "Yes"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, { check: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { check: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "approved",
                    value: "No",
                    checked: formData.approved === "No",
                    onChange: handleInputChange,
                    className: "form-check-input"
                  }
                ),
                "No"
              ] }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-footer mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { color: "primary", type: "submit", disabled: loading, children: [
            loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "sm" }) : null,
            " Submit Feedback"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", className: "ms-2", onClick: () => navigate("/feed/back/details"), children: "Cancel" })
        ] })
      ] }) })
    ] }) }) })
  ] });
};
export {
  FeedbackForm as default
};

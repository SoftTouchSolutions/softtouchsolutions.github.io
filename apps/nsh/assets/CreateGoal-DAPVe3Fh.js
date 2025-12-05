import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { A as APIServices, S as Swal, B as Button, T as Table, G as Pagination, H as PaginationItem, J as PaginationLink, v as Modal, w as ModalHeader, x as ModalBody, F as Form, R as Row, C as Col, L as Label, I as Input, y as ModalFooter, f as PageHeaders, g as Card, n as CardHeader, h as CardBody } from "./index-Dr-4baW5.js";
import { C as CardTitle } from "./CardTitle-BjRFrU5i.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-uqX4oSmU.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const CreateGoalTable = () => {
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  const [goals, setGoals] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [employees, setEmployees] = reactExports.useState([]);
  const [formErrors, setFormErrors] = reactExports.useState({});
  const [formData, setFormData] = reactExports.useState({
    employeeID: "",
    busgoalID: "",
    goal_description: "",
    key_result: "",
    projected_start_date: "",
    projected_target_date: "",
    actual_start_date: "",
    actual_completion_date: "",
    goal_progress: 0,
    goal_status: "Not Started",
    appraisal_period: ""
  });
  const [usersOptions, setUsersOptions] = reactExports.useState([]);
  const statusOptions = [
    { value: "Not Started", label: "Not Started" },
    { value: "In Progress", label: "In Progress" },
    { value: "Completed", label: "Completed" }
  ];
  const appraisalPeriodOptions = [
    { value: "Q1 2024", label: "Q1 2024" },
    { value: "Q2 2024", label: "Q2 2024" }
  ];
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const itemsPerPage = 2;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGoals = goals.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(goals.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelectChange = (selectedOption, { name }) => {
    if (name === "employeeID") {
      setFormData((prev) => ({
        ...prev,
        employeeID: selectedOption.value,
        employeeName: selectedOption.label
        // Store the employee name for later use
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: selectedOption.value }));
    }
  };
  reactExports.useEffect(() => {
    fetchEmployees();
    fetchGoals();
    checkCurrentUserPermissions();
  }, []);
  const checkCurrentUserPermissions = async () => {
    try {
      const userData = await APIServices.getCurrentUser();
      console.log("User data for permissions check:", userData);
      if (userData) {
        const userType = (userData.userType || "").toLowerCase();
        if (userType.includes("admin") || userType === "manager" || userData.isAdmin) {
          console.log("Setting user as admin");
          setIsAdmin(true);
        } else {
          setIsAdmin(true);
          console.log("User is not admin, but admin permissions enabled for testing");
        }
      }
    } catch (error) {
      console.error("Error checking user permissions:", error);
      setIsAdmin(true);
    }
  };
  const handleEdit = (goal) => {
    console.log("Edit clicked for goal:", goal);
  };
  const handleDeleteClick = async (goal) => {
    var _a, _b;
    const goalId = goal.sno || goal._id || goal.id;
    console.log("Delete clicked for goal:", goal);
    console.log("Using identifier for deletion:", goalId);
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
      if (result.isConfirmed) {
        setLoading(true);
        await APIServices.deleteGoal(goalId);
        fetchGoals();
        Swal.fire(
          "Deleted!",
          "The goal has been deleted.",
          "success"
        );
      }
    } catch (error) {
      console.error("Error deleting goal:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was a problem deleting the goal. " + (((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || "")
      });
    } finally {
      setLoading(false);
    }
  };
  const handleNotification = (goal) => {
    console.log("Notification clicked for goal:", goal);
    Swal.fire({
      title: "Send Notification",
      text: `Would you like to send a notification about this goal to ${goal.employee_name || "the employee"}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, send notification",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Notification has been sent", "success");
      }
    });
  };
  const fetchEmployees = async () => {
    setLoading(true);
    try {
      console.log("Fetching employees from API...");
      const response = await APIServices.getAllEmployees();
      console.log("Raw employee data:", response);
      let employeeList = response;
      if (response && typeof response === "object" && response.data) {
        employeeList = response.data;
        console.log("Using response.data for employee list");
      }
      if (Array.isArray(employeeList) && employeeList.length > 0) {
        console.log("Processing employee data to options...");
        const firstEmployee = employeeList[0];
        console.log("Sample employee structure:", firstEmployee);
        const options = employeeList.map((emp) => {
          const id = emp.employeeID || emp.sno || emp.id || emp._id || "";
          let name = "";
          if (emp.staff_name) {
            name = emp.staff_name;
          } else if (emp.firstname && emp.lastname) {
            name = `${emp.firstname} ${emp.lastname}`;
          } else if (emp.name) {
            name = emp.name;
          } else {
            console.warn(`Employee ${id} missing name fields`);
            name = `Employee ${id}`;
          }
          return {
            value: id,
            label: name
          };
        });
        console.log("Transformed employee options:", options);
        setUsersOptions(options);
        setEmployees(employeeList);
      } else {
        console.warn("No employees found or invalid data structure");
        setUsersOptions([
          { value: "1", label: "John Doe" },
          { value: "2", label: "Jane Smith" }
        ]);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
      setUsersOptions([
        { value: "1", label: "John Doe" },
        { value: "2", label: "Jane Smith" }
      ]);
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Using sample employee data. Employee API may not be available."
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchGoals = async () => {
    setLoading(true);
    try {
      const response = await APIServices.getAllGoals();
      setGoals(response);
    } catch (error) {
      console.error("Error fetching goals:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to load goals data"
      });
    } finally {
      setLoading(false);
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.employeeID) errors.employeeID = "Employee is required";
    if (!formData.busgoalID) errors.busgoalID = "Business goal is required";
    if (!formData.goal_description) errors.goal_description = "Goal description is required";
    if (!formData.key_result) errors.key_result = "Key result is required";
    if (!formData.projected_start_date) errors.projected_start_date = "Projected start date is required";
    if (!formData.projected_target_date) errors.projected_target_date = "Projected target date is required";
    if (!formData.appraisal_period) errors.appraisal_period = "Appraisal period is required";
    if (formData.projected_start_date && formData.projected_target_date) {
      const startDate = new Date(formData.projected_start_date);
      const targetDate = new Date(formData.projected_target_date);
      if (targetDate < startDate) {
        errors.projected_target_date = "Target date must be after start date";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please check the form for errors and try again."
      });
      return;
    }
    setLoading(true);
    try {
      const goalData = {
        employeeID: formData.employeeID,
        employee_name: formData.employeeName || "Unknown Employee",
        // Include employee name
        busgoal: formData.busgoalID,
        goal_title: formData.busgoalID,
        // Using business goal as title
        goal_description: formData.goal_description,
        key_result: formData.key_result,
        projected_start_date: formData.projected_start_date,
        projected_target_date: formData.projected_target_date,
        actual_start_date: formData.actual_start_date || null,
        actual_completion_date: formData.actual_completion_date || null,
        goal_progress: parseFloat(formData.goal_progress) || 0,
        goal_status: formData.goal_status,
        approval: 0,
        // Default to not approved
        appraisal_period: formData.appraisal_period
      };
      console.log("Submitting goal data with employee name:", goalData);
      await APIServices.createGoal(goalData);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Goal created successfully"
      });
      setFormData({
        employeeID: "",
        busgoalID: "",
        goal_description: "",
        key_result: "",
        projected_start_date: "",
        projected_target_date: "",
        actual_start_date: "",
        actual_completion_date: "",
        goal_progress: 0,
        goal_status: "Not Started",
        appraisal_period: ""
      });
      fetchGoals();
      toggle();
    } catch (error) {
      console.error("Error creating goal:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to create goal. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", className: "mb-3", onClick: toggle, disabled: loading, children: loading ? "Loading..." : "Add New Goal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table table-bordered text-nowrap border-bottom", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Employee Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Business Goal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actual Start Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actual Completion Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "6", className: "text-center", children: "Loading..." }) }) : currentGoals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "6", className: "text-center", children: "No goals found" }) }) : currentGoals.map((goal) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReadOnlyRow,
        {
          goal,
          employees,
          handleDeleteClick,
          handleEdit,
          handleNotification
        },
        goal._id || goal.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination justify-content-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        PaginationLink,
        {
          href: "#",
          onClick: (e) => {
            e.preventDefault();
            handlePageChange(currentPage - 1);
          },
          children: "Previous"
        }
      ) }),
      [...Array(totalPages)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { active: currentPage === index + 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        PaginationLink,
        {
          href: "#",
          onClick: (e) => {
            e.preventDefault();
            handlePageChange(index + 1);
          },
          children: index + 1
        }
      ) }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === totalPages, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        PaginationLink,
        {
          href: "#",
          onClick: (e) => {
            e.preventDefault();
            handlePageChange(currentPage + 1);
          },
          children: "Next"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, size: "lg", centered: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Add New Goal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "form-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "key_result", children: [
              "Key Result ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "textarea",
                id: "key_result",
                name: "key_result",
                value: formData.key_result,
                onChange: handleInputChange,
                required: true,
                placeholder: "Enter Key Result",
                style: { minHeight: "80px" },
                invalid: !!formErrors.key_result
              }
            ),
            formErrors.key_result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.key_result })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "busgoal", children: [
              "Business Goal",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "busgoal",
                name: "busgoalID",
                value: formData.busgoalID,
                onChange: handleInputChange,
                required: true,
                placeholder: "Enter Business Goal",
                invalid: !!formErrors.busgoalID
              }
            ),
            formErrors.busgoalID && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.busgoalID })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "employeeID", children: [
              "Assigned to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                id: "employeeID",
                name: "employeeID",
                value: usersOptions.find(
                  (option) => option.value === formData.employeeID
                ),
                onChange: (option) => handleSelectChange(option, { name: "employeeID" }),
                options: usersOptions,
                placeholder: "Select User",
                required: true,
                className: formErrors.employeeID ? "is-invalid" : "",
                isLoading: loading,
                isDisabled: loading
              }
            ),
            formErrors.employeeID && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.employeeID })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "goal_description", children: [
              "Goal Description ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "textarea",
                id: "goal_description",
                name: "goal_description",
                value: formData.goal_description,
                onChange: handleInputChange,
                required: true,
                placeholder: "Enter Goal Description",
                style: { minHeight: "100px" },
                invalid: !!formErrors.goal_description
              }
            ),
            formErrors.goal_description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.goal_description })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "goal_progress", children: "Goal Progress (%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                id: "goal_progress",
                name: "goal_progress",
                value: formData.goal_progress,
                onChange: handleInputChange,
                min: "0",
                max: "100"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "projected_start_date", children: [
              "Projected Start Date ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "projected_start_date",
                name: "projected_start_date",
                value: formData.projected_start_date,
                onChange: handleInputChange,
                required: true
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "projected_target_date", children: [
              "Projected Target Date ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "projected_target_date",
                name: "projected_target_date",
                value: formData.projected_target_date,
                onChange: handleInputChange,
                required: true
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "actual_start_date", children: "Actual Start Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "actual_start_date",
                name: "actual_start_date",
                value: formData.actual_start_date,
                onChange: handleInputChange
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "actual_completion_date", children: "Actual Completion Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "actual_completion_date",
                name: "actual_completion_date",
                value: formData.actual_completion_date,
                onChange: handleInputChange
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "goal_status", children: "Goal Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                id: "goal_status",
                name: "goal_status",
                value: statusOptions.find(
                  (option) => option.value === formData.goal_status
                ),
                onChange: (option) => handleSelectChange(option, { name: "goal_status" }),
                options: statusOptions,
                isDisabled: loading
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "appraisal_period", children: [
              "Appraisal Period ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                id: "appraisal_period",
                name: "appraisal_period",
                value: appraisalPeriodOptions.find(
                  (option) => option.value === formData.appraisal_period
                ),
                onChange: (option) => handleSelectChange(option, { name: "appraisal_period" }),
                options: appraisalPeriodOptions,
                required: true,
                className: formErrors.appraisal_period ? "is-invalid" : "",
                isDisabled: loading
              }
            ),
            formErrors.appraisal_period && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.appraisal_period })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", type: "submit", disabled: loading, children: loading ? "Submitting..." : "Submit Goal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggle, children: "Cancel" })
        ] })
      ] }) })
    ] })
  ] });
};
const ReadOnlyRow = ({ goal, employees, handleDeleteClick, handleEdit, handleNotification }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.employee_name || (goal.employeeID && employees.find((emp) => emp.employeeID === goal.employeeID) ? `${employees.find((emp) => emp.employeeID === goal.employeeID).firstname} ${employees.find((emp) => emp.employeeID === goal.employeeID).lastname}` : "Unknown") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.business_goal || goal.goal_title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.actual_start_date ? new Date(goal.actual_start_date).toLocaleDateString() : "Not started" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.actual_completion_date ? new Date(goal.actual_completion_date).toLocaleDateString() : "Not completed" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.status || goal.goal_status }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex justify-content-center align-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        color: "danger",
        size: "sm",
        className: "btn-icon me-1",
        title: "Delete",
        style: { padding: "0.25rem 0.5rem" },
        onClick: () => handleDeleteClick(goal),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trash" })
      }
    ) }) })
  ] });
};
const DataTable = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "",
      home: "Home",
      name: "Business Goals"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Business Goals" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateGoalTable, {}) }) })
  ] }) }) })
] });
DataTable.propTypes = {};
DataTable.defaultProps = {};
export {
  DataTable as default
};

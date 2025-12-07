import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { A as APIServices, S as Swal, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, o as Spinner, I as Input, B as Button, h as CardBody, F as Form, T as Table, G as Pagination, H as PaginationItem, J as PaginationLink, v as Modal, w as ModalHeader, x as ModalBody, z as FormGroup, L as Label, y as ModalFooter } from "./index-CPwjB16p.js";
import { C as CardTitle } from "./CardTitle-Cqv0xue5.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const DevelopmentPlan = () => {
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => {
    if (!modal) {
      setFormData(initialFormState);
      setFormErrors({});
    }
    setModal(!modal);
  };
  const [loading, setLoading] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [formErrors, setFormErrors] = reactExports.useState({});
  const [departments, setDepartments] = reactExports.useState([]);
  const [employees, setEmployees] = reactExports.useState([]);
  const [developmentPlans, setDevelopmentPlans] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const itemsPerPage = 5;
  const initialFormState = {
    employeeID: "",
    sno: "",
    // Add sno field for employee sequence number
    staff_name: "",
    departmentID: "",
    deptname: "",
    competency_area: "",
    skills: "",
    plan_description: "",
    projected_start_date: "",
    projected_target_date: "",
    dev_year: (/* @__PURE__ */ new Date()).getFullYear(),
    mode: "",
    plan_status: "Not Started",
    dev_progress: "0"
  };
  const [formData, setFormData] = reactExports.useState({
    employeeID: "",
    sno: "",
    // Add sno field for employee sequence number
    staff_name: "",
    departmentID: "",
    deptname: "",
    competency_area: "",
    skills: "",
    plan_description: "",
    projected_start_date: "",
    projected_target_date: "",
    dev_year: (/* @__PURE__ */ new Date()).getFullYear(),
    mode: "",
    plan_status: "Not Started",
    dev_progress: "0"
  });
  const [editFormData, setEditFormData] = reactExports.useState({
    id: "",
    employeeID: "",
    sno: "",
    // Add sno field for employee sequence number
    staff_name: "",
    departmentID: "",
    deptname: "",
    competency_area: "",
    skills: "",
    plan_description: "",
    projected_start_date: "",
    projected_target_date: "",
    dev_year: "",
    mode: "",
    plan_status: "",
    dev_progress: ""
  });
  const [editPlanId, setEditPlanId] = reactExports.useState(null);
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (e) {
      return dateString;
    }
  };
  const filterDevelopmentPlans = (searchText) => {
    if (!searchText) {
      return developmentPlans;
    }
    const searchLower = searchText.toLowerCase();
    return developmentPlans.filter((plan) => {
      return plan.staff_name && plan.staff_name.toLowerCase().includes(searchLower) || plan.competency_area && plan.competency_area.toLowerCase().includes(searchLower) || plan.skills && plan.skills.toLowerCase().includes(searchLower) || plan.deptname && plan.deptname.toLowerCase().includes(searchLower);
    });
  };
  const filteredPlans = reactExports.useMemo(
    () => filterDevelopmentPlans(searchQuery),
    [developmentPlans, searchQuery]
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlans = filteredPlans.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPlans.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  reactExports.useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        console.log("Fetching departments...");
        const deptData = await APIServices.getAllDepartments(null);
        if (deptData && Array.isArray(deptData)) {
          console.log(`${deptData.length} departments loaded successfully:`, deptData);
          setDepartments(deptData);
        } else {
          console.warn("No departments data received");
          setDepartments([]);
        }
        console.log("Fetching employees...");
        const empData = await APIServices.getAllEmployees();
        if (empData && Array.isArray(empData)) {
          const filteredEmps = empData.filter((emp) => emp.job_role !== "Human Resources officer");
          console.log(`${filteredEmps.length} employees loaded successfully:`, filteredEmps);
          setEmployees(filteredEmps);
          await fetchDevelopmentPlans();
        } else {
          console.warn("No employees data received");
          setEmployees([]);
          await fetchDevelopmentPlans();
        }
      } catch (error) {
        console.error("Error during data fetching:", error);
        Swal.fire({
          icon: "error",
          title: "Data Loading Error",
          text: "There was a problem loading the necessary data. Please try refreshing the page."
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  const fetchDepartments = async () => {
    console.log("Starting to fetch departments");
    try {
      const departmentsData = await APIServices.getAllDepartments(null);
      console.log("Raw department response:", departmentsData);
      if (departmentsData && Array.isArray(departmentsData) && departmentsData.length > 0) {
        console.log(`Setting ${departmentsData.length} departments`);
        setDepartments(departmentsData);
      } else {
        console.warn("No valid departments data found, setting empty array");
        setDepartments([]);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      setDepartments([]);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch departments from the server. Please try again later."
      });
    }
  };
  const fetchEmployees = async () => {
    console.log("Starting to fetch employees");
    try {
      const employeesData = await APIServices.getAllEmployees();
      console.log("Raw employee response:", employeesData);
      if (employeesData && Array.isArray(employeesData) && employeesData.length > 0) {
        const filteredEmployees = employeesData.filter(
          (emp) => emp.job_role !== "Human Resources officer"
        );
        console.log(`Setting ${filteredEmployees.length} employees after filtering HR officers`);
        setEmployees(filteredEmployees);
      } else {
        console.warn("No valid employees data found, setting empty array");
        setEmployees([]);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
      setEmployees([]);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch employees from the server. Please try again later."
      });
    }
  };
  const fetchDevelopmentPlans = async () => {
    setLoading(true);
    try {
      const plansData = await APIServices.getAllDevelopmentPlans();
      console.log("Fetched development plans:", plansData);
      console.log("Current employees data:", employees);
      console.log("Current departments data:", departments);
      if (plansData && Array.isArray(plansData) && plansData.length > 0) {
        const processedPlans = plansData.map((plan) => {
          const hasEmployeeName = plan.employee_name && plan.employee_name !== "Unknown Employee";
          const hasDeptName = plan.department_name && plan.department_name !== "Unknown Department";
          let employeeName = "Unknown";
          let deptName = "Unknown";
          if (hasEmployeeName) {
            employeeName = plan.employee_name;
            console.log(`Using backend employee name: ${employeeName}`);
          } else {
            const planEmployeeId = String(plan.employeeID || "").trim();
            console.log(`Looking for employee with ID: ${planEmployeeId}`);
            const employee = employees.find((emp) => String(emp.employeeID || "").trim() === planEmployeeId);
            if (employee) {
              employeeName = employee.staff_name;
              console.log(`Found matching employee from local data: ${employeeName}`);
            }
          }
          if (hasDeptName) {
            deptName = plan.department_name;
            console.log(`Using backend department name: ${deptName}`);
          } else {
            const planDepartmentId = String(plan.departmentID || "").trim();
            console.log(`Looking for department with ID: ${planDepartmentId}`);
            const department = departments.find((dept) => String(dept.deptcode || "").trim() === planDepartmentId);
            if (department) {
              deptName = department.deptname;
              console.log(`Found matching department from local data: ${deptName}`);
            }
          }
          return {
            ...plan,
            staff_name: plan.staff_name || employeeName,
            deptname: plan.deptname || deptName,
            // Format dates for display
            projected_start_date: plan.projected_start_date ? formatDate(plan.projected_start_date) : "N/A",
            projected_target_date: plan.projected_target_date ? formatDate(plan.projected_target_date) : "N/A",
            // Convert progress to a string format if it's a number
            dev_progress: typeof plan.dev_progress === "number" ? `${plan.dev_progress}` : plan.dev_progress || "0"
          };
        });
        setDevelopmentPlans(processedPlans);
      } else {
        setDevelopmentPlans([]);
        console.log("No development plans found in the database");
      }
    } catch (error) {
      console.error("Error fetching development plans:", error);
      setDevelopmentPlans([]);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch development plans from the server. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`);
    setState((prev) => {
      const newState = { ...prev, [name]: value };
      console.log("Updated state:", newState);
      return newState;
    });
    if (name === "employeeID" && value) {
      console.log(`Looking for employee with ID: ${value}`);
      console.log("Available employees:", employees);
      const valueStr = String(value).trim();
      const selectedEmployee = employees.find((emp) => String(emp.employeeID || "").trim() === valueStr);
      if (selectedEmployee) {
        console.log("Found employee:", selectedEmployee);
        setState((prev) => {
          const updatedState = {
            ...prev,
            sno: selectedEmployee.sno || 1,
            // Include sno with default of 1
            staff_name: selectedEmployee.staff_name || "",
            departmentID: selectedEmployee.deptcode || ""
          };
          console.log("Updated state with employee info:", updatedState);
          return updatedState;
        });
        if (selectedEmployee.deptcode) {
          console.log(`Looking for department with code: ${selectedEmployee.deptcode}`);
          console.log("Available departments:", departments);
          const department = departments.find((dept) => dept.deptcode.toString() === selectedEmployee.deptcode.toString());
          if (department) {
            console.log("Found department:", department);
            setState((prev) => {
              const updatedState = { ...prev, deptname: department.deptname || "" };
              console.log("Updated state with department info:", updatedState);
              return updatedState;
            });
          } else {
            console.warn(`Department not found for code: ${selectedEmployee.deptcode}`);
          }
        }
      } else {
        console.warn(`Employee not found for ID: ${value}`);
      }
    }
    if (name === "departmentID" && value) {
      console.log(`Looking for department with code: ${value}`);
      const selectedDept = departments.find((dept) => dept.deptcode.toString() === value.toString());
      if (selectedDept) {
        console.log("Found department:", selectedDept);
        setState((prev) => {
          const updatedState = { ...prev, deptname: selectedDept.deptname || "" };
          console.log("Updated state with department name:", updatedState);
          return updatedState;
        });
      } else {
        console.warn(`Department not found for code: ${value}`);
      }
    }
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const validateForm = (data) => {
    const errors = {};
    if (!data.employeeID) errors.employeeID = "Employee is required";
    if (!data.sno && data.sno !== 0) errors.sno = "Employee sequence number is required";
    if (!data.departmentID) errors.departmentID = "Department is required";
    if (!data.competency_area) errors.competency_area = "Competency area is required";
    if (!data.skills) errors.skills = "Skills are required";
    if (!data.projected_start_date) errors.projected_start_date = "Start date is required";
    if (!data.projected_target_date) errors.projected_target_date = "Target date is required";
    if (!data.dev_year) errors.dev_year = "Development year is required";
    if (!data.mode) errors.mode = "Development mode is required";
    if (data.projected_start_date && data.projected_target_date) {
      const start = new Date(data.projected_start_date);
      const end = new Date(data.projected_target_date);
      if (start > end) {
        errors.projected_target_date = "Target date must be after start date";
      }
    }
    if (data.dev_year && isNaN(parseInt(data.dev_year))) {
      errors.dev_year = "Development year must be a valid number";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setLoading(true);
    let deptname = formData.deptname;
    if (!deptname && formData.departmentID) {
      const dept = departments.find((d) => d.deptcode === formData.departmentID);
      if (dept) {
        deptname = dept.deptname;
      }
    }
    let staff_name = formData.staff_name;
    if (!staff_name && formData.employeeID) {
      const emp = employees.find((e2) => e2.employeeID === formData.employeeID);
      if (emp) {
        staff_name = emp.staff_name;
      }
    }
    const planData = {
      employeeID: formData.employeeID,
      sno: parseInt(formData.sno || 1),
      // Include sno field, convert to integer
      departmentID: formData.departmentID,
      competency_area: formData.competency_area || "",
      plan_description: formData.plan_description || "",
      skills: formData.skills || "",
      // Use ISO format for dates that the backend can parse
      projected_start_date: formData.projected_start_date ? new Date(formData.projected_start_date).toISOString().split("T")[0] : null,
      projected_target_date: formData.projected_target_date ? new Date(formData.projected_target_date).toISOString().split("T")[0] : null,
      // Ensure numeric fields are sent as numbers
      dev_year: formData.dev_year ? parseInt(formData.dev_year) : (/* @__PURE__ */ new Date()).getFullYear(),
      mode: formData.mode || "",
      plan_status: formData.plan_status || "Not Started",
      dev_progress: formData.dev_progress ? parseFloat(formData.dev_progress) : 0
    };
    console.log("Submitting plan data:", planData);
    APIServices.createDevelopmentPlan(planData).then((response) => {
      console.log("Development plan created successfully:", response);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Development plan created successfully!"
      });
      setFormData(initialFormState);
      setFormErrors({});
      setModal(false);
      fetchDevelopmentPlans();
    }).catch((error) => {
      console.error("Error creating development plan:", error);
      let errorMessage = "Failed to create development plan. Please try again.";
      if (error.response && error.response.data && error.response.data.detail) {
        errorMessage = error.response.data.detail;
      }
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage
      });
    }).finally(() => {
      setLoading(false);
    });
  };
  const handleEditClick = (event, plan) => {
    event.preventDefault();
    const planId = plan.id || plan._id || plan.sno || plan.employeeID;
    setEditPlanId(planId);
    setEditFormData({
      id: planId,
      employeeID: plan.employeeID || "",
      sno: plan.sno || 1,
      // Include sno with default of 1
      staff_name: plan.staff_name || "",
      departmentID: plan.departmentID || "",
      deptname: plan.deptname || "",
      competency_area: plan.competency_area || "",
      skills: plan.skills || "",
      plan_description: plan.plan_description || "",
      projected_start_date: plan.projected_start_date ? plan.projected_start_date.substring(0, 10) : "",
      projected_target_date: plan.projected_target_date ? plan.projected_target_date.substring(0, 10) : "",
      dev_year: plan.dev_year || "",
      mode: plan.mode || "",
      plan_status: plan.plan_status || "",
      dev_progress: plan.dev_progress || ""
    });
  };
  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(editFormData)) return;
    setLoading(true);
    try {
      const planData = {
        ID: editPlanId,
        // Include ID for update requests
        employeeID: editFormData.employeeID,
        sno: parseInt(editFormData.sno || 1),
        // Include sno, convert to integer
        departmentID: editFormData.departmentID,
        competency_area: editFormData.competency_area || "",
        skills: editFormData.skills || "",
        plan_description: editFormData.plan_description || editFormData.skills || "",
        projected_start_date: editFormData.projected_start_date,
        projected_target_date: editFormData.projected_target_date,
        dev_year: parseInt(editFormData.dev_year) || (/* @__PURE__ */ new Date()).getFullYear(),
        mode: editFormData.mode || "",
        plan_status: editFormData.plan_status || "Not Started",
        dev_progress: parseFloat(editFormData.dev_progress) || 0
      };
      const response = await APIServices.updateDevelopmentPlan(editPlanId, planData);
      console.log("Development plan updated:", response);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Development plan updated successfully"
      });
      fetchDevelopmentPlans();
      setEditPlanId(null);
    } catch (error) {
      console.error("Error updating development plan:", error);
      let errorMessage = "Failed to update development plan. Please try again.";
      if (error.response) {
        if (error.response.data && error.response.data.detail) {
          errorMessage = error.response.data.detail;
        } else if (error.response.status === 400) {
          errorMessage = "Invalid data submitted. Please check all fields and try again.";
        } else if (error.response.status === 401) {
          errorMessage = "You are not authorized to update development plans.";
        } else if (error.response.status === 404) {
          errorMessage = "The development plan you're trying to update could not be found.";
        }
      }
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteClick = async (plan) => {
    const planSno = plan.sno;
    if (!planSno) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Cannot delete this plan: missing sequence number."
      });
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await APIServices.deleteDevelopmentPlan(planSno);
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Development plan has been deleted."
          });
          fetchDevelopmentPlans();
        } catch (error) {
          console.error("Error deleting development plan:", error);
          let errorMessage = "Failed to delete development plan. Please try again.";
          if (error.response) {
            if (error.response.data && error.response.data.detail) {
              errorMessage = error.response.data.detail;
            } else if (error.response.status === 401) {
              errorMessage = "You are not authorized to delete development plans.";
            } else if (error.response.status === 404) {
              errorMessage = "The development plan you're trying to delete could not be found.";
            }
          }
          Swal.fire({
            icon: "error",
            title: "Error",
            text: errorMessage
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };
  const handleCancelClick = () => {
    setEditPlanId(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "",
        home: "Home",
        name: "Development Plan"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "d-flex justify-content-between align-items-center pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h5", className: "mb-0", children: "Employee Development Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center", children: [
          loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "sm", color: "primary", className: "me-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "input-group me-2", style: { width: "200px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              placeholder: "Search...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value)
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              color: "primary",
              size: "sm",
              onClick: toggle,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-plus me-1" }),
                "New Development Plan"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "table-responsive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { onSubmit: handleEditFormSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table-striped", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Employee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Department" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Competency Area" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Skills" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Start Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Target Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Mode" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: currentPlans.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "11", className: "text-center", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { color: "primary" }) : "No development plans found" }) }) : currentPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: editPlanId === (plan.id || plan._id || plan.sno || plan.employeeID) ? (
            // Edit row
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Input,
                  {
                    type: "select",
                    name: "employeeID",
                    value: editFormData.employeeID,
                    onChange: (e) => handleInputChange(e, setEditFormData),
                    className: "form-control",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Employee" }),
                      employees.filter((emp) => emp.job_role !== "Human Resources officer").map((employee) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: employee.employeeID, children: [
                        employee.staff_name,
                        " - ",
                        employee.job_role || "N/A"
                      ] }, employee.employeeID))
                    ]
                  }
                ),
                formErrors.employeeID && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.employeeID })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Input,
                  {
                    type: "select",
                    name: "departmentID",
                    value: editFormData.departmentID,
                    onChange: (e) => handleInputChange(e, setEditFormData),
                    required: true,
                    className: "form-control",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Department" }),
                      departments.map((dept) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: dept.deptcode, children: dept.deptname }, dept.deptcode))
                    ]
                  }
                ),
                formErrors.departmentID && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.departmentID })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "text",
                    name: "competency_area",
                    value: editFormData.competency_area,
                    onChange: (e) => handleInputChange(e, setEditFormData),
                    className: "form-control",
                    required: true
                  }
                ),
                formErrors.competency_area && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.competency_area })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "text",
                    name: "skills",
                    value: editFormData.skills,
                    onChange: (e) => handleInputChange(e, setEditFormData),
                    className: "form-control",
                    required: true
                  }
                ),
                formErrors.skills && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.skills })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    name: "projected_start_date",
                    value: editFormData.projected_start_date,
                    onChange: (e) => handleInputChange(e, setEditFormData),
                    className: "form-control",
                    required: true
                  }
                ),
                formErrors.projected_start_date && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.projected_start_date })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    name: "projected_target_date",
                    value: editFormData.projected_target_date,
                    onChange: (e) => handleInputChange(e, setEditFormData),
                    className: "form-control",
                    required: true
                  }
                ),
                formErrors.projected_target_date && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.projected_target_date })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "text",
                    name: "dev_year",
                    value: editFormData.dev_year,
                    onChange: (e) => handleInputChange(e, setEditFormData),
                    className: "form-control",
                    required: true
                  }
                ),
                formErrors.dev_year && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.dev_year })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Input,
                  {
                    type: "select",
                    name: "mode",
                    value: editFormData.mode,
                    onChange: (e) => handleInputChange(e, setEditFormData),
                    className: "form-control",
                    required: true,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Mode" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Training", children: "Training" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Workshop", children: "Workshop" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Online", children: "Online" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Mentoring", children: "Mentoring" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Self-study", children: "Self-study" })
                    ]
                  }
                ),
                formErrors.mode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.mode })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Input,
                {
                  type: "select",
                  name: "plan_status",
                  value: editFormData.plan_status,
                  onChange: (e) => handleInputChange(e, setEditFormData),
                  className: "form-control",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Not Started", children: "Not Started" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "In Progress", children: "In Progress" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Completed", children: "Completed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Cancelled", children: "Cancelled" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Input,
                {
                  type: "select",
                  name: "dev_progress",
                  value: editFormData.dev_progress,
                  onChange: (e) => handleInputChange(e, setEditFormData),
                  className: "form-control",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0", children: "0%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "25", children: "25%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "50", children: "50%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "75", children: "75%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "100", children: "100%" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "primary",
                    size: "sm",
                    className: "me-1",
                    type: "submit",
                    children: "Save"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "danger",
                    size: "sm",
                    onClick: handleCancelClick,
                    children: "Cancel"
                  }
                )
              ] })
            ] })
          ) : (
            // Read-only row
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: plan.staff_name || "Unknown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: plan.deptname || "Unknown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: plan.competency_area }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: plan.skills }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatDate(plan.projected_start_date) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatDate(plan.projected_target_date) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: plan.dev_year }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: plan.mode }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge ${plan.plan_status === "Completed" ? "bg-success" : plan.plan_status === "In Progress" ? "bg-primary" : plan.plan_status === "Cancelled" ? "bg-danger" : "bg-warning"}`, children: plan.plan_status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progress", style: { height: "20px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `progress-bar ${parseInt(plan.dev_progress) === 100 ? "bg-success" : "bg-primary"}`,
                  role: "progressbar",
                  style: {
                    width: typeof plan.dev_progress === "string" && plan.dev_progress.includes("%") ? plan.dev_progress : `${plan.dev_progress}%`
                  },
                  "aria-valuenow": parseInt(plan.dev_progress),
                  "aria-valuemin": "0",
                  "aria-valuemax": "100",
                  children: typeof plan.dev_progress === "string" && plan.dev_progress.includes("%") ? plan.dev_progress : `${plan.dev_progress}%`
                }
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-center align-items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "primary",
                    size: "sm",
                    className: "btn-icon me-1",
                    title: "Edit",
                    style: { padding: "0.25rem 0.5rem" },
                    onClick: (e) => handleEditClick(e, plan),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-edit" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "danger",
                    size: "sm",
                    className: "btn-icon",
                    title: "Delete",
                    style: { padding: "0.25rem 0.5rem" },
                    onClick: () => handleDeleteClick(plan),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trash" })
                  }
                )
              ] }) })
            ] })
          ) }, plan.id || plan._id || plan.sno || plan.employeeID)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination justify-content-end mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(currentPage - 1), children: "Previous" }) }),
          [...Array(totalPages)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { active: currentPage === index + 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(index + 1), children: index + 1 }) }, index)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === totalPages, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(currentPage + 1), children: "Next" }) })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, size: "lg", onOpened: () => {
      console.log("Modal opened, current employees:", employees);
      console.log("Modal opened, current departments:", departments);
      setTimeout(() => {
        if (employees.length === 0 || departments.length === 0) {
          console.log("Re-fetching data for dropdowns...");
          fetchEmployees();
          fetchDepartments();
        }
      }, 500);
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Add New Development Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleAddFormSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "employeeSelect", children: "Select Employee *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Input,
            {
              type: "select",
              name: "employeeID",
              id: "employeeSelect",
              value: formData.employeeID || "",
              onChange: (e) => handleInputChange(e, setFormData),
              className: "mb-2",
              required: true,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Employee --" }),
                employees && employees.length > 0 ? employees.filter((emp) => emp.job_role !== "Human Resources officer").map((employee) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: employee.employeeID, children: [
                  employee.staff_name || "Unknown",
                  " - ",
                  employee.job_role || "N/A"
                ] }, employee.employeeID)) : /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "No employees available" })
              ]
            }
          ),
          formErrors.employeeID && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.employeeID })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "staff_name", children: "Employee Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              id: "staff_name",
              name: "staff_name",
              value: formData.staff_name,
              disabled: true,
              className: "mb-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "departmentID", children: "Department *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Input,
            {
              type: "select",
              id: "departmentID",
              name: "departmentID",
              value: formData.departmentID || "",
              onChange: (e) => handleInputChange(e, setFormData),
              required: true,
              className: "mb-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Department --" }),
                departments && departments.length > 0 ? departments.map((dept) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: dept.deptcode, children: dept.deptname || "Unknown" }, dept.deptcode)) : /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "No departments available" })
              ]
            }
          ),
          formErrors.departmentID && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.departmentID })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "competency_area", children: "Competency Area *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                id: "competency_area",
                name: "competency_area",
                placeholder: "e.g., Leadership, Technical, Communication",
                value: formData.competency_area,
                onChange: (e) => handleInputChange(e, setFormData),
                required: true,
                className: "mb-2"
              }
            ),
            formErrors.competency_area && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.competency_area })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "skills", children: "Skills *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                id: "skills",
                name: "skills",
                placeholder: "e.g., JavaScript, Communication, Project Management",
                value: formData.skills,
                onChange: (e) => handleInputChange(e, setFormData),
                required: true,
                className: "mb-2"
              }
            ),
            formErrors.skills && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.skills })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "projected_start_date", children: "Start Date *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "projected_start_date",
                name: "projected_start_date",
                value: formData.projected_start_date,
                onChange: (e) => handleInputChange(e, setFormData),
                required: true,
                className: "mb-2"
              }
            ),
            formErrors.projected_start_date && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.projected_start_date })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "projected_target_date", children: "Target End Date *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "projected_target_date",
                name: "projected_target_date",
                value: formData.projected_target_date,
                onChange: (e) => handleInputChange(e, setFormData),
                required: true,
                className: "mb-2"
              }
            ),
            formErrors.projected_target_date && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.projected_target_date })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "dev_year", children: "Development Year *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                id: "dev_year",
                name: "dev_year",
                placeholder: "e.g., 2025",
                value: formData.dev_year,
                onChange: (e) => handleInputChange(e, setFormData),
                required: true,
                className: "mb-2"
              }
            ),
            formErrors.dev_year && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.dev_year })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "mode", children: "Development Mode *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Input,
              {
                type: "select",
                id: "mode",
                name: "mode",
                value: formData.mode,
                onChange: (e) => handleInputChange(e, setFormData),
                required: true,
                className: "mb-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Mode" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Training", children: "Training" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Workshop", children: "Workshop" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Online", children: "Online" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Mentoring", children: "Mentoring" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Self-study", children: "Self-study" })
                ]
              }
            ),
            formErrors.mode && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.mode })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "plan_status", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Input,
              {
                type: "select",
                id: "plan_status",
                name: "plan_status",
                value: formData.plan_status,
                onChange: (e) => handleInputChange(e, setFormData),
                className: "mb-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Not Started", children: "Not Started" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "In Progress", children: "In Progress" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Completed", children: "Completed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Cancelled", children: "Cancelled" })
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "plan_description", children: "Plan Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "textarea",
              id: "plan_description",
              name: "plan_description",
              placeholder: "Detailed description of the development plan",
              value: formData.plan_description,
              onChange: (e) => handleInputChange(e, setFormData),
              className: "mb-2"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", type: "button", onClick: handleAddFormSubmit, disabled: loading, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "sm" }),
          " Adding..."
        ] }) : "Add Development Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: () => {
          setFormData(initialFormState);
          setFormErrors({});
          setModal(false);
        }, children: "Cancel" })
      ] })
    ] })
  ] });
};
export {
  DevelopmentPlan as default
};

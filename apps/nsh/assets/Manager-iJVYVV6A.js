import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { k as useDispatch, A as APIServices, S as Swal, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, o as Spinner, I as Input, B as Button, h as CardBody, T as Table, F as Form, L as Label, G as Pagination, H as PaginationItem, J as PaginationLink, v as Modal, w as ModalHeader, x as ModalBody, z as FormGroup, y as ModalFooter } from "./index-Dr-4baW5.js";
import { C as CardTitle } from "./CardTitle-BjRFrU5i.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const ManagerTable = () => {
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  const [loading, setLoading] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [formErrors, setFormErrors] = reactExports.useState({});
  const dispatch = useDispatch();
  const [departments, setDepartments] = reactExports.useState([]);
  const [employees, setEmployees] = reactExports.useState([]);
  const [managers, setManagers] = reactExports.useState([]);
  const [managerUsers, setManagerUsers] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const itemsPerPage = 5;
  const [formData, setFormData] = reactExports.useState({
    staff_name: "",
    email: "",
    deptname: "",
    date_of_appointment: ""
  });
  const [editFormData, setEditFormData] = reactExports.useState({
    id: "",
    staff_name: "",
    email: "",
    department: "",
    date_of_appointment: "",
    employeeID: ""
  });
  const [editManagerId, setEditManagerId] = reactExports.useState(null);
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (e) {
      return dateString;
    }
  };
  const filterManagers = (searchText) => {
    if (!searchText) {
      return managers;
    }
    const searchLower = searchText.toLowerCase();
    return managers.filter((manager) => {
      return manager.staff_name && manager.staff_name.toLowerCase().includes(searchLower) || manager.email && manager.email.toLowerCase().includes(searchLower) || manager.department && manager.department.toLowerCase().includes(searchLower);
    });
  };
  const filteredManagers = reactExports.useMemo(
    () => filterManagers(searchQuery),
    [managers, searchQuery]
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentManagers = filteredManagers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredManagers.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  reactExports.useEffect(() => {
    fetchManagers();
    fetchManagerUsers();
  }, []);
  const fetchManagerUsers = async () => {
    setLoading(true);
    try {
      const managerUsersData = await APIServices.getManagerUsers();
      console.log("Fetched manager users:", managerUsersData);
      if (managerUsersData && managerUsersData.length > 0) {
        setManagerUsers(managerUsersData);
        console.log("Manager users set successfully:", managerUsersData);
      } else {
        setManagerUsers([]);
        console.log("No manager users found in the database");
      }
    } catch (error) {
      console.error("Error fetching manager users:", error);
      setManagerUsers([]);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch manager users from the server. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchManagers = async () => {
    var _a, _b;
    setLoading(true);
    let hasError = false;
    const authToken = localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token") || localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    console.log("Auth token available:", authToken ? "Yes" : "No");
    let managersData = [];
    try {
      console.log("Attempting to fetch managers...");
      console.log("Using auth token:", authToken ? `${authToken.substring(0, 10)}...` : "No token");
      managersData = await APIServices.getallmanagers(dispatch);
      console.log("Successfully fetched managers:", managersData);
      if (!Array.isArray(managersData)) {
        console.warn("API returned non-array managers data, converting to array:", managersData);
        managersData = managersData ? [managersData] : [];
      }
      const normalizedData = managersData.map((manager) => ({
        id: manager.id || manager.sno || manager._id || "",
        staff_name: manager.staff_name || manager.fullname || manager.name || "Unknown",
        email: manager.email || "",
        department: manager.department || manager.deptname || "",
        date_of_appointment: manager.date_of_appointment || null,
        employeeID: manager.employeeID || manager.employee_id || ""
      }));
      if (normalizedData && normalizedData.length > 0) {
        console.log("Normalized managers data:", normalizedData);
        setManagers(normalizedData);
        console.log("All managers set with normalized data");
      } else {
        setManagers([]);
        console.warn("No managers returned - check authentication or data availability");
        console.log("No managers found in the database");
      }
    } catch (managerError) {
      hasError = true;
      console.error("Error fetching managers:", managerError);
      console.error("Error details:", (_a = managerError.response) == null ? void 0 : _a.data);
      console.error("Error status:", (_b = managerError.response) == null ? void 0 : _b.status);
      setManagers([]);
    }
    let managerUsersData = [];
    try {
      console.log("Attempting to fetch manager users...");
      managerUsersData = await APIServices.getManagerUsers(dispatch);
      console.log("Successfully fetched manager users:", managerUsersData);
      if (managerUsersData && managerUsersData.length > 0) {
        setManagerUsers(managerUsersData);
        console.log("All manager users set:", managerUsersData);
      } else {
        setManagerUsers([]);
        console.log("No manager users found in the database");
      }
    } catch (userError) {
      hasError = true;
      console.error("Error fetching manager users:", userError);
      setManagerUsers([]);
    }
    if (hasError) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch managers or manager users from the server. Please try again later."
      });
    }
    setLoading(false);
  };
  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    if (name === "employeeID" && employees.length > 0) {
      const selectedEmployee = employees.find((emp) => emp.employeeID === value);
      if (selectedEmployee) {
        setState((prev) => ({
          ...prev,
          staff_name: selectedEmployee.staff_name || "",
          email: selectedEmployee.email || "",
          employeeID: value
        }));
      } else {
        setState((prev) => ({ ...prev, employeeID: value }));
      }
    } else {
      setState((prev) => ({ ...prev, [name]: value }));
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.staff_name) errors.staff_name = "Full name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.department) errors.department = "Department is required";
    if (!formData.date_of_appointment) errors.date_of_appointment = "Date of appointment is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleAddFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill in all required fields"
      });
      return;
    }
    setLoading(true);
    try {
      const managerData = {
        staff_name: formData.staff_name,
        email: formData.email,
        department: formData.department,
        date_of_appointment: formData.date_of_appointment
      };
      console.log("Sending manager data:", managerData);
      await APIServices.createManager(managerData);
      await fetchManagers();
      setFormData({
        staff_name: "",
        email: "",
        department: "",
        date_of_appointment: ""
      });
      toggle();
    } catch (error) {
      console.error("Error adding manager:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleEditClick = (event, manager) => {
    event.preventDefault();
    setEditManagerId(manager.id);
    setEditFormData({
      id: manager.id,
      staff_name: manager.staff_name,
      email: manager.email,
      department: manager.department,
      date_of_appointment: manager.date_of_appointment,
      employeeID: manager.employeeID
    });
  };
  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updateData = {
        staff_name: editFormData.staff_name,
        email: editFormData.email,
        department: editFormData.department,
        date_of_appointment: editFormData.date_of_appointment
      };
      await APIServices.updateManager(editFormData.sno || editFormData.id, updateData);
      await fetchManagers();
      setEditManagerId(null);
    } catch (error) {
      console.error("Error updating manager:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteClick = (manager) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete manager "${manager.staff_name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await APIServices.deleteManager(manager.sno);
          await fetchManagers();
        } catch (error) {
          console.error("Error deleting manager:", error);
        } finally {
          setLoading(false);
        }
      }
    });
  };
  const handleCancelClick = () => {
    setEditManagerId(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "",
        home: "Home",
        name: "Managers",
        fonticonsname: "Managers"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Managers" }),
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
                "New Manager"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table-bordered", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Department" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Date of Appointment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: currentManagers.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: currentManagers.map((manager) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: manager.id === editManagerId ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { onSubmit: handleEditFormSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex flex-wrap align-items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "me-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "editStaffName", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  name: "staff_name",
                  id: "editStaffName",
                  value: editFormData.staff_name,
                  onChange: (e) => handleInputChange(e, setEditFormData),
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "me-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "editEmail", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "email",
                  name: "email",
                  id: "editEmail",
                  value: editFormData.email,
                  onChange: (e) => handleInputChange(e, setEditFormData),
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "me-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "editEmail", children: "Department" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  name: "department",
                  id: "editDepartment",
                  value: editFormData.department,
                  onChange: (e) => handleInputChange(e, setEditFormData),
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "me-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "editDate", children: "Date of Appointment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "date",
                  name: "date_of_appointment",
                  id: "editDate",
                  value: editFormData.date_of_appointment,
                  onChange: (e) => handleInputChange(e, setEditFormData),
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "success", type: "submit", className: "me-2", children: "Save" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", color: "secondary", onClick: handleCancelClick, children: "Cancel" })
            ] })
          ] }) }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: manager.staff_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: manager.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: manager.department }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatDate(manager.date_of_appointment) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-center align-items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "primary",
                  size: "sm",
                  className: "btn-icon me-1",
                  title: "Edit",
                  style: { padding: "0.25rem 0.5rem" },
                  onClick: (event) => handleEditClick(event, manager),
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
                  onClick: () => handleDeleteClick(manager),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trash" })
                }
              )
            ] }) })
          ] }) }, manager.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "6", className: "text-center", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "sm", color: "primary" }) : "No managers found" }) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination justify-content-end mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(currentPage - 1), children: "Previous" }) }),
          [...Array(totalPages)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { active: currentPage === index + 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(index + 1), children: index + 1 }) }, index)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === totalPages, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(currentPage + 1), children: "Next" }) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Add New Manager" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleAddFormSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "employeeSelect", children: "Select Manager" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Input,
            {
              type: "select",
              name: "employeeID",
              id: "employeeSelect",
              value: formData.employeeID,
              onChange: (e) => {
                handleInputChange(e, setFormData);
                if (e.target.value) {
                  const selectedManager = managerUsers.find((manager) => manager.email === e.target.value);
                  if (selectedManager) {
                    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
                    setFormData((prev) => ({
                      ...prev,
                      staff_name: selectedManager.staff_name || "",
                      email: selectedManager.email || "",
                      department: selectedManager.department || "",
                      // Set deptcode to match department for validation to pass
                      deptcode: selectedManager.department || "",
                      // Set default date of appointment to today
                      date_of_appointment: today,
                      job_role: selectedManager.job_role || ""
                    }));
                  }
                }
              },
              className: "mb-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Manager --" }),
                managerUsers.map((manager) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: manager.email, children: manager.staff_name }, manager.email))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "staff_name", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              id: "staff_name",
              name: "staff_name",
              placeholder: "Full Name",
              value: formData.staff_name,
              onChange: (e) => handleInputChange(e, setFormData),
              required: true,
              className: "mb-2"
            }
          ),
          formErrors.staff_name && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.staff_name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "email",
              id: "email",
              name: "email",
              placeholder: "Email",
              value: formData.email,
              onChange: (e) => handleInputChange(e, setFormData),
              required: true,
              className: "mb-2"
            }
          ),
          formErrors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "department", children: "Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              id: "department",
              name: "department",
              placeholder: "Department",
              value: formData.department,
              onChange: (e) => handleInputChange(e, setFormData),
              className: "mb-2"
            }
          ),
          formErrors.department && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.department })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "dateAppointment", children: "Date of Appointment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              id: "dateAppointment",
              name: "date_of_appointment",
              placeholder: "Date of Appointment",
              value: formData.date_of_appointment,
              onChange: (e) => handleInputChange(e, setFormData),
              required: true,
              className: "mb-2"
            }
          ),
          formErrors.date_of_appointment && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.date_of_appointment })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: handleAddFormSubmit, children: "Add Manager" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggle, children: "Close" })
      ] })
    ] })
  ] });
};
export {
  ManagerTable as default
};

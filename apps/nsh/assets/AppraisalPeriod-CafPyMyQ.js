import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { F as Form, B as Button, o as Spinner, T as Table, v as Modal, w as ModalHeader, x as ModalBody, R as Row, L as Label, I as Input, y as ModalFooter, A as APIServices, S as Swal, f as PageHeaders, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-Dr-4baW5.js";
import { C as CardTitle } from "./CardTitle-BjRFrU5i.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const AppraisalPeriodsTable = (args) => {
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  const [loading, setLoading] = reactExports.useState(false);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const fallbackData = [
    {
      id: "1",
      period_name: "H1 2024",
      period_start: "2024-01-01",
      period_end: "2024-06-30",
      review_start_date: "2024-07-01",
      review_end_date: "2024-07-15",
      review_status: "Completed"
    },
    {
      id: "2",
      period_name: "H2 2024",
      period_start: "2024-07-01",
      period_end: "2024-12-31",
      review_start_date: "2025-01-01",
      review_end_date: "2025-01-15",
      review_status: "Pending"
    }
  ];
  const [appraisalPeriods, setAppraisalPeriods] = reactExports.useState([]);
  const [formErrors, setFormErrors] = reactExports.useState({});
  const [addFormData, setAddFormData] = reactExports.useState({
    period_name: "",
    period_start: "",
    period_end: "",
    review_start_date: "",
    review_end_date: "",
    review_status: ""
  });
  const [editFormData, setEditFormData] = reactExports.useState({
    period_name: "",
    period_start: "",
    period_end: "",
    review_start_date: "",
    review_end_date: "",
    review_status: ""
  });
  const [editPeriodId, setEditPeriodId] = reactExports.useState(null);
  const validateForm = () => {
    const errors = {};
    if (!addFormData.period_name) errors.period_name = "Period name is required";
    if (!addFormData.period_start) errors.period_start = "Start date is required";
    if (!addFormData.period_end) errors.period_end = "End date is required";
    if (!addFormData.review_start_date) errors.review_start_date = "Review start date is required";
    if (!addFormData.review_end_date) errors.review_end_date = "Review end date is required";
    if (!addFormData.review_status) errors.review_status = "Review status is required";
    if (addFormData.period_start && addFormData.period_end) {
      const start = new Date(addFormData.period_start);
      const end = new Date(addFormData.period_end);
      if (start > end) {
        errors.period_end = "End date must be after start date";
      }
    }
    if (addFormData.review_start_date && addFormData.review_end_date) {
      const reviewStart = new Date(addFormData.review_start_date);
      const reviewEnd = new Date(addFormData.review_end_date);
      if (reviewStart > reviewEnd) {
        errors.review_end_date = "Review end date must be after review start date";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    if (formErrors[fieldName]) {
      const newErrors = { ...formErrors };
      delete newErrors[fieldName];
      setFormErrors(newErrors);
    }
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fix the errors in the form"
      });
      return;
    }
    setLoading(true);
    try {
      const periodData = {
        period_name: addFormData.period_name,
        period_start: addFormData.period_start,
        period_end: addFormData.period_end,
        review_start_date: addFormData.review_start_date,
        review_end_date: addFormData.review_end_date,
        review_status: addFormData.review_status || "Pending"
        // Provide a default if empty
      };
      const response = await APIServices.createAppraisalPeriod(periodData);
      console.log("Create appraisal period response:", response);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Appraisal period created successfully!"
      });
      await fetchAppraisalPeriods();
      toggle();
      setAddFormData({
        period_name: "",
        period_start: "",
        period_end: "",
        review_start_date: "",
        review_end_date: "",
        review_status: ""
      });
    } catch (error) {
      console.error("Error adding appraisal period:", error);
      let errorMessage = "Failed to create appraisal period. Please try again.";
      if (error.response) {
        if (error.response.data && error.response.data.detail) {
          errorMessage = error.response.data.detail;
        } else if (error.response.status === 400) {
          errorMessage = "Invalid data submitted. Please check all fields and try again.";
        } else if (error.response.status === 401) {
          errorMessage = "You are not authorized to create appraisal periods.";
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
  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const periodToEdit = appraisalPeriods.find((period) => period.id === editPeriodId);
      if (!periodToEdit || !periodToEdit.sno) {
        console.error("Cannot find period to edit or missing sno:", editPeriodId);
        throw new Error("Cannot find period to edit");
      }
      const periodData = {
        period_name: editFormData.period_name,
        period_start: editFormData.period_start,
        period_end: editFormData.period_end,
        review_start_date: editFormData.review_start_date,
        review_end_date: editFormData.review_end_date,
        review_status: editFormData.review_status
      };
      await APIServices.updateAppraisalPeriod(periodToEdit.sno, periodData);
      await fetchAppraisalPeriods();
      setEditPeriodId(null);
    } catch (error) {
      console.error("Error updating appraisal period:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update appraisal period. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };
  const handleEditClick = (event, period) => {
    event.preventDefault();
    setEditPeriodId(period.id);
    const formValues = { ...period };
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditPeriodId(null);
  };
  const handleDeleteClick = (period) => {
    if (!period || !period.sno) {
      console.error("Cannot delete period, missing sno:", period);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Cannot delete this period. Missing identifier."
      });
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete the appraisal period "${period.period_name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel"
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await APIServices.deleteAppraisalPeriod(period.sno);
          await fetchAppraisalPeriods();
        } catch (error) {
          console.error("Error deleting appraisal period:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete appraisal period. Please try again."
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };
  const checkUserPermissions = () => {
    setIsAdmin(true);
  };
  const fetchAppraisalPeriods = async () => {
    setLoading(true);
    try {
      const periods = await APIServices.getAllAppraisalPeriods();
      console.log("Fetched appraisal periods:", periods);
      if (Array.isArray(periods) && periods.length > 0) {
        setAppraisalPeriods(periods);
      } else {
        console.warn("No appraisal periods found, using fallback data");
        setAppraisalPeriods(fallbackData);
      }
    } catch (error) {
      console.error("Error fetching appraisal periods:", error);
      setAppraisalPeriods(fallbackData);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    checkUserPermissions();
    fetchAppraisalPeriods();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleEditFormSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggle, disabled: loading, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "sm" }),
          " Adding..."
        ] }) : "Add New Appraisal Period" }),
        loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { color: "primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table table-bordered text-nowrap border-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Period Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Period Start" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Period End" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Review Start Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Review End Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Review Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: appraisalPeriods.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "7", className: "text-center", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { color: "primary" }) : "No appraisal periods found" }) }) : appraisalPeriods.map((period) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: editPeriodId === period.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableRow,
          {
            editFormData,
            handleEditFormChange,
            handleCancelClick
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReadOnlyRow,
          {
            period,
            handleEditClick,
            handleDeleteClick
          }
        ) }, period.id || period._id || period.sno)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, ...args, size: "lg", centered: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fw-bold", children: "Add New Appraisal Period" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleAddFormSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-12 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "period_name", children: "Period Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                id: "period_name",
                name: "period_name",
                placeholder: "Enter Period Name (e.g., H1 2025, Q3 2025)",
                value: addFormData.period_name,
                onChange: handleAddFormChange,
                required: true,
                className: "form-control"
              }
            ),
            formErrors.period_name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger small", children: formErrors.period_name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "period_start", children: "Period Start" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "period_start",
                name: "period_start",
                value: addFormData.period_start,
                onChange: handleAddFormChange,
                required: true,
                className: "form-control"
              }
            ),
            formErrors.period_start && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger small", children: formErrors.period_start })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "period_end", children: "Period End" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "period_end",
                name: "period_end",
                value: addFormData.period_end,
                onChange: handleAddFormChange,
                required: true,
                className: "form-control"
              }
            ),
            formErrors.period_end && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger small", children: formErrors.period_end })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "review_start_date", children: "Review Start Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "review_start_date",
                name: "review_start_date",
                value: addFormData.review_start_date,
                onChange: handleAddFormChange,
                required: true,
                className: "form-control"
              }
            ),
            formErrors.review_start_date && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger small", children: formErrors.review_start_date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "review_end_date", children: "Review End Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "review_end_date",
                name: "review_end_date",
                value: addFormData.review_end_date,
                onChange: handleAddFormChange,
                required: true,
                className: "form-control"
              }
            ),
            formErrors.review_end_date && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger small", children: formErrors.review_end_date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-12 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "review_status", children: "Review Status (Optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Input,
              {
                type: "select",
                id: "review_status",
                name: "review_status",
                value: addFormData.review_status,
                onChange: handleAddFormChange,
                className: "form-control",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Status (Optional)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pending", children: "Pending" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Completed", children: "Completed" })
                ]
              }
            ),
            formErrors.review_status && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger small", children: formErrors.review_status })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", className: "mt-2 px-4", type: "submit", children: "Add Appraisal Period" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggle, children: "Close" }) })
    ] })
  ] });
};
const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "text",
        required: true,
        name: "period_name",
        value: editFormData.period_name,
        onChange: handleEditFormChange,
        className: "form-control"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        required: true,
        name: "period_start",
        value: editFormData.period_start,
        onChange: handleEditFormChange,
        className: "form-control"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        required: true,
        name: "period_end",
        value: editFormData.period_end,
        onChange: handleEditFormChange,
        className: "form-control"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        required: true,
        name: "review_start_date",
        value: editFormData.review_start_date,
        onChange: handleEditFormChange,
        className: "form-control"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        required: true,
        name: "review_end_date",
        value: editFormData.review_end_date,
        onChange: handleEditFormChange,
        className: "form-control"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Input,
      {
        type: "select",
        name: "review_status",
        value: editFormData.review_status,
        onChange: handleEditFormChange,
        className: "form-control",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Status (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pending", children: "Pending" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Completed", children: "Completed" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", className: "me-1", type: "submit", children: "Save" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "danger", className: "me-1", type: "button", onClick: handleCancelClick, children: "Cancel" })
    ] })
  ] });
};
const ReadOnlyRow = ({ period, handleEditClick, handleDeleteClick }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (e) {
      return dateString;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: period.period_name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatDate(period.period_start) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatDate(period.period_end) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatDate(period.review_start_date) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatDate(period.review_end_date) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge bg-${period.review_status === "Completed" ? "success" : period.review_status === "In Progress" ? "warning" : period.review_status === "Planned" ? "info" : "danger"}`, children: period.review_status }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-center align-items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "primary",
          size: "sm",
          className: "btn-icon me-1",
          title: "Edit",
          style: { padding: "0.25rem 0.5rem" },
          onClick: (event) => handleEditClick(event, period),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-edit" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "danger",
          size: "sm",
          className: "btn-icon me-1",
          title: "Delete",
          style: { padding: "0.25rem 0.5rem" },
          onClick: () => handleDeleteClick(period),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trash" })
        }
      )
    ] }) })
  ] });
};
const DataTable = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "",
      home: "Home",
      name: "Appraisal Period"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Appraisal Period" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppraisalPeriodsTable, {}) }) })
  ] }) }) })
] });
DataTable.propTypes = {};
DataTable.defaultProps = {};
export {
  DataTable as default
};

import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { B as Button, T as Table, H as Pagination, J as PaginationItem, K as PaginationLink, w as Modal, x as ModalHeader, y as ModalBody, F as Form, L as Label, I as Input, S as Swal } from "./index-AOv_UoEY.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const PerformanceMetricTable = () => {
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  const [metrics, setMetrics] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const itemsPerPage = 3;
  const [formData, setFormData] = reactExports.useState({ metricName: "" });
  const [editFormData, setEditFormData] = reactExports.useState({});
  const [editMetricId, setEditMetricId] = reactExports.useState(null);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMetrics = metrics.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(metrics.length / itemsPerPage);
  const fetchMetrics = async () => {
    try {
      const result = await APIService.getAllPerformanceMetrics();
      console.log("API Response:", result);
      setMetrics(result || []);
    } catch (error) {
      console.error("Error fetching metrics:", error);
      Swal.fire("Error", "Failed to fetch metrics", "error");
    }
  };
  reactExports.useEffect(() => {
    fetchMetrics();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await APIService.createPerformanceMetric(formData);
      await Swal.fire("Success", "Metric added successfully", "success");
      fetchMetrics();
      setFormData({ metricName: "" });
      toggle();
    } catch (error) {
      console.error("Error adding metric:", error);
      Swal.fire("Error", "Failed to add metric", "error");
    }
  };
  const handleEditFormSubmit = async (e) => {
    var _a;
    e.preventDefault();
    console.log("Submitting edit for ID:", editMetricId);
    if (!editMetricId || isNaN(editMetricId)) {
      Swal.fire("Error", "Invalid metric selection", "error");
      return;
    }
    try {
      const response = await APIService.updatePerformanceMetric(
        editMetricId,
        editFormData
      );
      console.log("Update response:", response);
      await Swal.fire("Success", "Metric updated successfully", "success");
      fetchMetrics();
      setEditMetricId(null);
    } catch (error) {
      console.error("Update error:", ((_a = error.response) == null ? void 0 : _a.data) || error.message);
      Swal.fire("Error", "Failed to update metric", "error");
    }
  };
  const handleEditClick = (e, metric) => {
    e.preventDefault();
    console.log("Editing metric:", metric);
    if (!metric || typeof metric !== "object") {
      Swal.fire("Error", "Invalid metric data", "error");
      return;
    }
    const metricId = metric.sno;
    if (!metricId || isNaN(metricId) || metricId <= 0) {
      Swal.fire("Error", "Invalid metric ID format", "error");
      return;
    }
    setEditMetricId(metricId);
    setEditFormData({ metricName: metric.metricName });
    setModal(false);
  };
  const handleCancelClick = () => setEditMetricId(null);
  const handleDeleteClick = async (metricId) => {
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
      try {
        await APIService.deletePerformanceMetric(metricId);
        await Swal.fire("Deleted!", "Metric has been deleted.", "success");
        fetchMetrics();
      } catch (error) {
        console.error("Error deleting metric:", error);
        Swal.fire("Error", "Failed to delete metric", "error");
      }
    }
  };
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", className: "mb-3", onClick: toggle, children: "Add New Metric" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { bordered: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Metric Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: currentMetrics.map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: editMetricId === metric.sno ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableRow,
        {
          editFormData,
          handleEditInputChange,
          handleEditFormSubmit,
          handleCancelClick
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReadOnlyRow,
        {
          metric,
          handleEditClick,
          handleDeleteClick
        }
      ) }, metric.sno)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination justify-content-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(currentPage - 1), children: "«" }) }),
      [...Array(totalPages)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { active: currentPage === index + 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(index + 1), children: index + 1 }) }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === totalPages, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(currentPage + 1), children: "»" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Add New Metric" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleAddFormSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "metricName", children: "Metric Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            id: "metricName",
            name: "metricName",
            value: formData.metricName,
            onChange: handleInputChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", className: "mt-3", type: "submit", children: "Add Metric" })
      ] }) })
    ] })
  ] });
};
const EditableRow = ({
  editFormData,
  handleEditInputChange,
  handleEditFormSubmit,
  handleCancelClick
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleEditFormSubmit, className: "d-flex align-items-center gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      type: "text",
      name: "metricName",
      value: editFormData.metricName,
      onChange: handleEditInputChange,
      required: true,
      className: "flex-grow-1"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", color: "success", type: "submit", children: "Save" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", color: "danger", onClick: handleCancelClick, children: "Cancel" })
] }) }) });
const ReadOnlyRow = ({ metric, handleEditClick, handleDeleteClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: metric.metricName }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        color: "warning",
        onClick: (e) => {
          console.log("Edit clicked for:", metric);
          handleEditClick(e, metric);
        },
        className: "me-2",
        children: "Edit"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        color: "danger",
        onClick: () => {
          const metricId = metric.sno;
          console.log("Delete ID:", metricId);
          if (metricId !== void 0 && metricId !== null) {
            handleDeleteClick(metricId);
          } else {
            console.error("Cannot delete metric with undefined ID");
            Swal.fire("Error", "Cannot delete this metric - ID is missing", "error");
          }
        },
        children: "Delete"
      }
    )
  ] })
] });
export {
  PerformanceMetricTable as default
};

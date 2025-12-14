import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { B as Button, T as Table, H as Pagination, J as PaginationItem, K as PaginationLink, w as Modal, x as ModalHeader, y as ModalBody, F as Form, L as Label, I as Input } from "./index-DRovfVAv.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const PerformanceCriteriaTable = () => {
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  const [criteria, setCriteria] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const itemsPerPage = 3;
  const [formData, setFormData] = reactExports.useState({ criteriaName: "" });
  const [editFormData, setEditFormData] = reactExports.useState({});
  const [editCriteriaId, setEditCriteriaId] = reactExports.useState(null);
  const fetchCriteria = async () => {
    try {
      const result = await APIService.getAllPcriteria();
      setCriteria(result || []);
    } catch (error) {
      console.error("Error fetching criteria:", error);
    }
  };
  reactExports.useEffect(() => {
    fetchCriteria();
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
      await APIService.createPcriteria(formData);
      fetchCriteria();
      setFormData({ criteriaName: "" });
      toggle();
    } catch (error) {
      console.error("Error adding criteria:", error);
    }
  };
  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await APIService.updatePcriteria(editCriteriaId, editFormData);
      fetchCriteria();
      setEditCriteriaId(null);
    } catch (error) {
      console.error("Error updating criteria:", error);
    }
  };
  const handleEditClick = (e, crit) => {
    e.preventDefault();
    setEditCriteriaId(crit.sno);
    setEditFormData({
      criteriaName: crit.criteriaName
    });
  };
  const handleCancelClick = () => setEditCriteriaId(null);
  const handleDeleteClick = async (criteriaId) => {
    try {
      await APIService.deletePcriteria(criteriaId);
      fetchCriteria();
    } catch (error) {
      console.error("Error deleting criteria:", error);
    }
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCriteria = criteria.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(criteria.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", className: "mb-3", onClick: toggle, children: "Add New Performance Criteria" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { bordered: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Criteria Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: currentCriteria.map((crit) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: editCriteriaId === crit.sno ? /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          crit,
          handleEditClick,
          handleDeleteClick
        }
      ) }, crit.sno)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination justify-content-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(currentPage - 1), children: "«" }) }),
      [...Array(totalPages)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { active: currentPage === index + 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(index + 1), children: index + 1 }) }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === totalPages, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(currentPage + 1), children: "»" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Add New Performance Criteria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleAddFormSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "criteriaName", children: "Criteria Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            id: "criteriaName",
            name: "criteriaName",
            value: formData.criteriaName,
            onChange: handleInputChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", className: "mt-3", type: "submit", children: "Add Criteria" })
      ] }) })
    ] })
  ] });
};
const EditableRow = ({
  editFormData,
  handleEditInputChange,
  handleEditFormSubmit,
  handleCancelClick
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      type: "text",
      name: "criteriaName",
      value: editFormData.criteriaName,
      onChange: handleEditInputChange
    }
  ) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", color: "success", onClick: handleEditFormSubmit, children: "Save" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", color: "danger", onClick: handleCancelClick, className: "ms-2", children: "Cancel" })
  ] })
] });
const ReadOnlyRow = ({ crit, handleEditClick, handleDeleteClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: crit.criteriaName }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", color: "warning", onClick: (e) => handleEditClick(e, crit), className: "me-2", children: "Edit" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", color: "danger", onClick: () => handleDeleteClick(crit.sno), children: "Delete" })
  ] })
] });
export {
  PerformanceCriteriaTable as default
};

import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { B as Button, T as Table, H as Pagination, J as PaginationItem, K as PaginationLink, w as Modal, x as ModalHeader, y as ModalBody, F as Form, L as Label, I as Input, A as APIServices, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-zbnKGqDS.js";
import { C as CardTitle } from "./CardTitle-5XhNrNGW.js";
import { L as ListGroup, a as ListGroupItem } from "./ListGroupItem-BgaLnW1F.js";
import "./index.es-Dn4wSDoi.js";
import PerformanceCriteriaTable from "./PerformanceCriteria-D9zcb2oY.js";
import PerformanceMetricTable from "./PerformanceMetric-ChLc2ZGz.js";
import GoalCategoryForm from "./GoalCategory-CFN4-fi2.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const DepartmentTable = () => {
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  const [departments, setDepartments] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const itemsPerPage = 3;
  const [formData, setFormData] = reactExports.useState({ deptname: "" });
  const [editFormData, setEditFormData] = reactExports.useState({});
  const [editDeptId, setEditDeptId] = reactExports.useState(null);
  const fetchDepartments = async () => {
    try {
      const result = await APIServices.getAllDepartments();
      setDepartments(result || []);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };
  reactExports.useEffect(() => {
    fetchDepartments();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await APIServices.createDepartment(formData);
      fetchDepartments();
      setFormData({ deptname: "" });
      toggle();
    } catch (error) {
      console.error("Error adding department:", error);
    }
  };
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleEditClick = (dept) => {
    setEditDeptId(dept.sno);
    setEditFormData({ deptcode: dept.deptcode, deptname: dept.deptname });
  };
  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await APIServices.updateDepartment(editDeptId, editFormData);
      fetchDepartments();
      setEditDeptId(null);
    } catch (error) {
      console.error("Error updating department:", error);
    }
  };
  const handleDeleteClick = async (sno) => {
    try {
      await APIServices.deleteDepartment(sno);
      fetchDepartments();
    } catch (error) {
      console.error("Error deleting department:", error);
    }
  };
  const currentDepartments = departments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(departments.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", className: "mb-3", onClick: toggle, children: "Add New Department" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { bordered: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Department Code" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Department Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: currentDepartments.map((dept) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: editDeptId === dept.sno ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableRow,
        {
          editFormData,
          handleEditInputChange,
          handleEditFormSubmit,
          handleCancelClick: () => setEditDeptId(null)
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReadOnlyRow,
        {
          dept,
          handleEditClick: () => handleEditClick(dept),
          handleDeleteClick
        }
      ) }, dept.sno)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination justify-content-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(currentPage - 1), children: "«" }) }),
      [...Array(totalPages)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { active: currentPage === index + 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(index + 1), children: index + 1 }) }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === totalPages, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(currentPage + 1), children: "»" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Add New Department" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleAddFormSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "deptname", children: "Department Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            name: "deptname",
            value: formData.deptname,
            onChange: handleInputChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", color: "primary", className: "mt-3", children: "Add" })
      ] }) })
    ] })
  ] });
};
const EditableRow = ({ editFormData, handleEditInputChange, handleEditFormSubmit, handleCancelClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      type: "text",
      name: "deptcode",
      value: editFormData.deptcode,
      onChange: handleEditInputChange,
      readOnly: true
    }
  ) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      type: "text",
      name: "deptname",
      value: editFormData.deptname,
      onChange: handleEditInputChange
    }
  ) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", color: "success", onClick: handleEditFormSubmit, children: "Update" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", color: "danger", onClick: handleCancelClick, className: "ms-2", children: "Cancel" })
  ] })
] });
const ReadOnlyRow = ({ dept, handleEditClick, handleDeleteClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: dept.deptcode }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: dept.deptname }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", color: "warning", onClick: handleEditClick, className: "me-2", children: "Edit" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", color: "danger", onClick: () => handleDeleteClick(dept.sno), children: "Delete" })
  ] })
] });
const GeneralSettingsContent = () => {
  const [monthsOption, setMonthsOption] = reactExports.useState(null);
  const [selectedCurrency, setSelectedCurrency] = reactExports.useState(null);
  const [Currencysymbolposition, setCurrencysymbolposition] = reactExports.useState(null);
  const [Decimaligitsoption, setDecimaligitsoption] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive datatble-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DepartmentTable, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, {})
  ] });
};
const SetCompanyContent = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive datatble-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceCriteriaTable, {}) }) }) });
const LogoFaviconContent = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive datatble-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceMetricTable, {}) }) }) });
const WhatsAPPAPISetting = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive datatble-filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoalCategoryForm, {}) }) }) });
const NotificationTemplates = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Notification Templates" }) });
const DefaultNotificationTemplates = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Default Notification Templates" }) });
const Settings = () => {
  const [selectedSetting, setSelectedSetting] = reactExports.useState("generalSettings");
  const renderContent = () => {
    switch (selectedSetting) {
      case "general-Settings":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(GeneralSettingsContent, {});
      case "System Configuration":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SetCompanyContent, {});
      case "Performance Metric":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(LogoFaviconContent, {});
      case "Goal Category":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAPPAPISetting, {});
      case "NotificationTemplates":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationTemplates, {});
      case "DefaultNotificationTemplates":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultNotificationTemplates, {});
      // Add more cases for other settings...
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Select a setting from the left menu" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Settings",
        home: "Home",
        name: "Pages",
        fonticonsname: "Settings"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "4", xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Configuration" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ListGroup, { className: "list-group list-group-transparent mb-0 mail-inbox pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ListGroupItem,
            {
              action: true,
              active: selectedSetting === "general Settings",
              onClick: () => setSelectedSetting("general-Settings"),
              tag: "a",
              className: "list-group-item list-group-item-action d-flex align-items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-home fs-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-3 mt-1", children: "Department Settings" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ListGroupItem,
            {
              action: true,
              active: selectedSetting === "System Configuration",
              onClick: () => setSelectedSetting("System Configuration"),
              tag: "a",
              className: "list-group-item list-group-item-action d-flex align-items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-grid fs-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-3 mt-1", children: "Performance Criteria" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ListGroupItem,
            {
              action: true,
              active: selectedSetting === "Performance Metric",
              onClick: () => setSelectedSetting("Performance Metric"),
              tag: "a",
              className: "list-group-item list-group-item-action d-flex align-items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-server fs-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-3 mt-1", children: "Performance Metric" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ListGroupItem,
            {
              action: true,
              active: selectedSetting === "Goal Category",
              onClick: () => setSelectedSetting("Goal Category"),
              tag: "a",
              className: "list-group-item list-group-item-action d-flex align-items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-globe fs-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-3 mt-1", children: "Goal Category" })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "8", xl: "9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "d-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", className: "mb-1 mt-3", children: selectedSetting }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: renderContent() })
      ] }) })
    ] })
  ] });
};
export {
  Settings as default
};

import { r as reactExports, a as React, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { a as useNavigate, B as Button, A as APIServices, o as Spinner, I as Input, S as Swal, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-BtyINLIY.js";
import { C as CardTitle } from "./CardTitle-BLcyN_Gi.js";
import { r as reactTableExports } from "./index-D8JvFaG3.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const CenteredHeader = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
  textAlign: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, children });
const ErrorMessage = ({ message }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-danger", role: "alert", children: message });
const TableLoader = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-5", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { color: "primary" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3", children: "Loading employee data..." })
] });
const FALLBACK_DATA = [
  {
    EmployeeName: "Tiger Nixon",
    Phonenumber: "123-456-7890",
    Department: "Engineering",
    Manager: "John Doe",
    jobrole: "System Architect",
    contracttype: "Full-time",
    employmentdate: "2019-02-15",
    Training: "Leadership Development",
    skills: "JavaScript, React"
  },
  {
    EmployeeName: "Jane Smith",
    Phonenumber: "987-654-3210",
    Department: "Sales",
    Manager: "Alice Johnson",
    jobrole: "Sales Manager",
    contracttype: "Part-time",
    employmentdate: "2021-07-22",
    Training: "Sales Strategy",
    skills: "Negotiation, Communication"
  }
];
const BasicTable = () => {
  const [employeeData, setEmployeeData] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const navigate = useNavigate();
  const checkUserPermissions = async () => {
    try {
      const userData = await APIServices.getCurrentUser();
      console.log("User data for permissions check:", userData);
      if (userData) {
        const userType = (userData.userType || "").toLowerCase();
        if (userType.includes("admin") || userType === "manager" || userData.isAdmin) {
          console.log("Setting user as admin");
          setIsAdmin(true);
        } else {
          console.log("User is not admin, but admin permissions enabled for testing");
          setIsAdmin(true);
        }
      }
    } catch (error2) {
      console.error("Error checking user permissions:", error2);
      setIsAdmin(true);
    }
  };
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching employees...");
      const response = await APIServices.getAllEmployees();
      console.log("API response received:", response);
      let employees = [];
      if (!response) {
        console.warn("Empty response received");
        employees = [];
      } else if (response.data && Array.isArray(response.data)) {
        console.log("Using response.data array");
        employees = response.data;
      } else if (Array.isArray(response)) {
        console.log("Using response array directly");
        employees = response;
      } else {
        console.warn("Response is not in expected format:", response);
        employees = [];
      }
      console.log("Processing employee data, count:", employees.length);
      const formattedData = (employees || []).filter((emp) => emp !== null && emp !== void 0).map((emp) => ({
        id: (emp == null ? void 0 : emp.id) || (emp == null ? void 0 : emp._id) || "",
        sno: (emp == null ? void 0 : emp.sno) || "",
        EmployeeName: (emp == null ? void 0 : emp.staff_name) || `${(emp == null ? void 0 : emp.firstname) || ""} ${(emp == null ? void 0 : emp.lastname) || ""}`,
        Phonenumber: (emp == null ? void 0 : emp.phonenumber) || (emp == null ? void 0 : emp.phone) || "",
        Department: (emp == null ? void 0 : emp.deptcode) || (emp == null ? void 0 : emp.department) || "",
        Manager: (emp == null ? void 0 : emp.managerID) || "",
        jobrole: (emp == null ? void 0 : emp.job_role) || "",
        contracttype: (emp == null ? void 0 : emp.contract_type) || "",
        employmentdate: (emp == null ? void 0 : emp.employment_date) ? new Date(emp == null ? void 0 : emp.employment_date).toLocaleDateString() : "",
        Training: (emp == null ? void 0 : emp.training) || "",
        skills: (emp == null ? void 0 : emp.skills) || ""
      }));
      setEmployeeData(formattedData);
    } catch (error2) {
      console.error("Error fetching employees:", error2);
      setError("Failed to load employee data. Please try again later.");
      setEmployeeData(FALLBACK_DATA);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    checkUserPermissions();
    fetchEmployees();
  }, []);
  const handleEdit = (employee) => {
    console.log("Edit clicked for:", employee);
    navigate(`/employee/edit/${employee.id || employee._id || employee.sno}`);
  };
  const handleDelete = async (employee) => {
    var _a, _b;
    const employeeId = employee.sno || employee._id || employee.id;
    console.log("Delete clicked for employee:", employee);
    console.log("Using identifier for deletion:", employeeId);
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
        await APIServices.deleteEmployee(employeeId);
        fetchEmployees();
        Swal.fire(
          "Deleted!",
          "The employee has been deleted.",
          "success"
        );
      }
    } catch (error2) {
      console.error("Error deleting employee:", error2);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was a problem deleting the employee. " + (((_b = (_a = error2.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || "")
      });
    } finally {
      setLoading(false);
    }
  };
  const handleNotification = (rowData) => {
    console.log("Notification clicked for:", rowData);
    Swal.fire({
      title: "Send Notification",
      text: `Would you like to send a notification to ${rowData.EmployeeName}?`,
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
  const COLUMNS = [
    {
      Header: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CenteredHeader, { children: "Employee Name" }),
      accessor: "EmployeeName",
      className: "text-center w-20 borderrigth"
    },
    {
      Header: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CenteredHeader, { children: "Phone Number" }),
      accessor: "Phonenumber",
      className: "text-center w-25 borderrigth"
    },
    {
      Header: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CenteredHeader, { children: "Department" }),
      accessor: "Department",
      className: "text-center w-20 borderrigth"
    },
    {
      Header: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CenteredHeader, { children: "Manager" }),
      accessor: "Manager",
      className: "text-center w-15 borderrigth"
    },
    {
      Header: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CenteredHeader, { children: "Job Role" }),
      accessor: "jobrole",
      className: "text-center w-20 borderrigth"
    },
    {
      Header: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CenteredHeader, { children: "Contract Type" }),
      accessor: "contracttype",
      className: "text-center w-20 borderrigth"
    },
    {
      Header: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CenteredHeader, { children: "Employment Date" }),
      accessor: "employmentdate",
      className: "text-center w-20 borderrigth"
    },
    {
      Header: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CenteredHeader, { children: "Training" }),
      accessor: "Training",
      className: "text-center w-15 borderrigth"
    },
    {
      Header: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CenteredHeader, { children: "Skills" }),
      accessor: "skills",
      className: "text-center w-15 borderrigth"
    },
    {
      Header: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CenteredHeader, { children: "Actions" }),
      accessor: "actions",
      className: "text-center",
      Cell: ({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-center align-items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "primary",
            size: "sm",
            className: "btn-icon me-1",
            title: "Edit",
            style: { padding: "0.25rem 0.5rem" },
            onClick: () => handleEdit(row.original),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-edit" })
          }
        ),
        isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "danger",
            size: "sm",
            className: "btn-icon me-1",
            title: "Delete",
            style: { padding: "0.25rem 0.5rem" },
            onClick: () => handleDelete(row.original),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trash" })
          }
        )
      ] }),
      disableSortBy: true
      // Disable sorting for actions column
    }
  ];
  reactExports.useEffect(() => {
    let isMounted = true;
    const initializeComponent = async () => {
      if (isMounted) {
        await checkUserPermissions();
        await fetchEmployees();
      }
    };
    initializeComponent();
    return () => {
      isMounted = false;
    };
  }, []);
  const tableData = React.useMemo(
    () => employeeData.length > 0 ? employeeData : FALLBACK_DATA,
    [employeeData]
  );
  const tableColumns = React.useMemo(() => COLUMNS, []);
  const tableInstance = reactTableExports.useTable(
    {
      columns: tableColumns,
      data: tableData,
      initialState: { pageIndex: 0 }
      // Add initial state explicitly
    },
    reactTableExports.useGlobalFilter,
    reactTableExports.useSortBy,
    reactTableExports.usePagination
  );
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize
  } = tableInstance;
  const { globalFilter, pageIndex, pageSize } = state;
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TableLoader, {});
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorMessage, { message: error });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          className: "mb-4 selectpage border me-1",
          value: pageSize,
          onChange: (e) => setPageSize(Number(e.target.value)),
          children: [10, 25, 50].map((pageSize2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: pageSize2, children: [
            "Show ",
            pageSize2
          ] }, pageSize2))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalFilter, { filter: globalFilter, setFilter: setGlobalFilter })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "table",
      {
        ...getTableProps(),
        className: "table table-bordered table-hover mb-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: headerGroups.map((headerGroup) => /* @__PURE__ */ reactExports.createElement("tr", { ...headerGroup.getHeaderGroupProps(), key: headerGroup.id }, headerGroup.headers.map((column) => /* @__PURE__ */ reactExports.createElement(
            "th",
            {
              ...column.getHeaderProps(column.getSortByToggleProps()),
              className: column.className,
              key: column.id
            },
            column.render("Header"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ms-2", children: column.isSorted ? column.isSortedDesc ? /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-down" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-up" }) : "" })
          )))) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ...getTableBodyProps(), children: page.map((row) => {
            prepareRow(row);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              ReadOnlyRow,
              {
                employee: row.original,
                handleDeleteClick: handleDelete,
                handleEdit,
                handleNotification,
                isAdmin
              },
              row.id || row.index
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-block d-sm-flex mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Page",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          pageIndex + 1,
          " of ",
          pageOptions.length
        ] }),
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ms-sm-auto d-flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn-default tablebutton me-2",
            onClick: () => gotoPage(0),
            disabled: !canPreviousPage,
            children: "<<"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn-default tablebutton me-2",
            onClick: previousPage,
            disabled: !canPreviousPage,
            children: "<"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn-default tablebutton me-2",
            onClick: nextPage,
            disabled: !canNextPage,
            children: ">"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn-default tablebutton",
            onClick: () => gotoPage(pageCount - 1),
            disabled: !canNextPage,
            children: ">>"
          }
        )
      ] })
    ] })
  ] });
};
const GlobalFilter = ({ filter, setFilter }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "d-flex ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      value: filter || "",
      onChange: (e) => setFilter(e.target.value),
      className: "form-control mb-4",
      placeholder: "Search..."
    }
  ) });
};
const ReadOnlyRow = ({ employee, handleDeleteClick, handleEdit, handleNotification, isAdmin }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: employee.EmployeeName || "Unknown" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: employee.Phonenumber || "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: employee.Department || "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: employee.Manager || "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: employee.jobrole || "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: employee.contracttype || "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: employee.employmentdate || "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: employee.Training || "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: employee.skills || "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-center align-items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "primary",
          size: "sm",
          className: "btn-icon me-1",
          title: "Edit",
          style: { padding: "0.25rem 0.5rem" },
          onClick: () => handleEdit(employee),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-edit" })
        }
      ),
      isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "danger",
          size: "sm",
          className: "btn-icon me-1",
          title: "Delete",
          style: { padding: "0.25rem 0.5rem" },
          onClick: () => handleDeleteClick(employee),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trash" })
        }
      )
    ] }) })
  ] });
};
const DataTable = () => {
  const navigate = useNavigate();
  const handleCreateUser = () => {
    console.log("Navigating to create employee page");
    navigate("/employee/create");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "",
        home: "Home",
        name: "List",
        fonticonsname: "Emplyees"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        height: "80px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "List of Employees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "primary",
            className: "mb-3",
            onClick: handleCreateUser,
            style: {
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)"
            },
            children: "Create New Employee"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BasicTable, {}, "employee-table") }) })
    ] }) }) })
  ] });
};
DataTable.propTypes = {};
DataTable.defaultProps = {};
export {
  DataTable as default
};

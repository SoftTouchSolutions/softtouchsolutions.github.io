import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { A as APIServices, S as Swal, o as Spinner, T as Table, s as Badge, B as Button, H as Pagination, J as PaginationItem, K as PaginationLink, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody } from "./index-DRovfVAv.js";
import { C as CardTitle } from "./CardTitle-Bk04aMpl.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const GoalApprovalTable = () => {
  const [goals, setGoals] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    fetchGoals();
  }, []);
  const fetchGoals = async () => {
    setLoading(true);
    try {
      const data = await APIServices.getAllGoals();
      console.log("Fetched goals:", data);
      const formattedGoals = Array.isArray(data) ? data.map((goal) => ({
        id: goal.id || goal._id || goal.goalId,
        sno: goal.sno,
        // Add the sno field for approval/rejection
        employee_name: goal.employee_name || goal.staff_name || "Unknown",
        business_goal: goal.business_goal || goal.goal_description || goal.description || "",
        actual_start_date: goal.actual_start_date || goal.start_date || "",
        actual_completion_date: goal.actual_completion_date || goal.completion_date || "",
        status: goal.status || "Pending",
        approved: goal.approved
      })) : [];
      setGoals(formattedGoals);
      setError(null);
    } catch (err) {
      console.error("Error fetching goals:", err);
      setError("Failed to load goals. Please try again later.");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to load goals. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGoals = goals.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(goals.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const getStatusBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "success";
      case "rejected":
        return "danger";
      case "in progress":
        return "primary";
      case "completed":
        return "info";
      case "pending":
        return "warning";
      default:
        return "secondary";
    }
  };
  const handleApproveClick = async (goalId, sno) => {
    try {
      setLoading(true);
      await APIServices.approveGoal(sno);
      const updatedGoals = goals.map(
        (goal) => goal.id === goalId ? { ...goal, status: "Approved", approved: true } : goal
      );
      setGoals(updatedGoals);
    } catch (error2) {
      console.error("Error approving goal:", error2);
    } finally {
      setLoading(false);
    }
  };
  const handleRejectClick = async (goalId, sno) => {
    try {
      setLoading(true);
      await APIServices.rejectGoal(sno);
      const updatedGoals = goals.map(
        (goal) => goal.id === goalId ? { ...goal, status: "Rejected", approved: false } : goal
      );
      setGoals(updatedGoals);
    } catch (error2) {
      console.error("Error rejecting goal:", error2);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-container", children: [
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center my-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { color: "primary" }) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-danger", role: "alert", children: error }),
    !loading && !error && goals.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-info", role: "alert", children: "No goals found. Goals will appear here once they are created." }),
    !loading && goals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table table-bordered text-nowrap border-bottom", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Employee Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Business Goal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actual Start Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actual Completion Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Approval Status" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: currentGoals.map((goal) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.employee_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.business_goal }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.actual_start_date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.actual_completion_date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: getStatusBadgeColor(goal.status), children: goal.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.status === "Approved" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "success", children: "Approved" }) : goal.status === "Rejected" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "danger", children: "Rejected" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              color: "success",
              className: "me-2",
              onClick: () => handleApproveClick(goal.id, goal.sno),
              disabled: loading,
              children: "Approve"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              color: "danger",
              onClick: () => handleRejectClick(goal.id, goal.sno),
              disabled: loading,
              children: "Reject"
            }
          )
        ] }) })
      ] }) }, goal.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Page navigation", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination justify-content-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        PaginationLink,
        {
          href: "#",
          onClick: (e) => {
            e.preventDefault();
            handlePageChange(currentPage - 1);
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-left" })
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
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-angle-right" })
        }
      ) })
    ] }) })
  ] });
};
const DataTable = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "",
      home: "Home",
      name: "Goals Approval"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Goals Approval" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoalApprovalTable, {}) }) })
  ] }) }) })
] });
DataTable.propTypes = {};
DataTable.defaultProps = {};
export {
  DataTable as default
};

import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { A as APIServices, S as Swal, o as Spinner, T as Table, s as Badge, r as Progress, B as Button, H as Pagination, J as PaginationItem, K as PaginationLink, w as Modal, x as ModalHeader, y as ModalBody, F as Form, R as Row, C as Col, E as FormGroup, L as Label, I as Input, z as ModalFooter, g as Card, h as CardBody, f as PageHeaders, n as CardHeader } from "./index-AOv_UoEY.js";
import { C as CardTitle } from "./CardTitle-p-89_2wb.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const GoalTrackingTable = () => {
  const [goals, setGoals] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [selectedGoal, setSelectedGoal] = reactExports.useState(null);
  const [progressHistory, setProgressHistory] = reactExports.useState([]);
  const [showProgressHistory, setShowProgressHistory] = reactExports.useState(false);
  const [showUpdateModal, setShowUpdateModal] = reactExports.useState(false);
  const [progressData, setProgressData] = reactExports.useState({
    progress_percentage: 0,
    status: "",
    comments: "",
    milestones_achieved: "",
    challenges: "",
    next_steps: ""
  });
  const itemsPerPage = 5;
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
        employee_name: goal.employee_name || goal.staff_name || "Unknown",
        business_goal: goal.business_goal || goal.goal_description || goal.description || "",
        actual_start_date: goal.actual_start_date || goal.start_date || "",
        actual_completion_date: goal.actual_completion_date || goal.completion_date || "",
        status: goal.status || "Pending",
        progress_percentage: goal.current_progress || goal.progress_percentage || 0,
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
  const getProgressBarColor = (percentage) => {
    if (percentage < 25) return "danger";
    if (percentage < 50) return "warning";
    if (percentage < 75) return "info";
    return "success";
  };
  const handleViewProgress = async (goalId) => {
    try {
      setLoading(true);
      const history = await APIServices.getGoalProgressHistory(goalId);
      setProgressHistory(history);
      setShowProgressHistory(true);
    } catch (error2) {
      console.error("Error fetching progress history:", error2);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch progress history."
      });
    } finally {
      setLoading(false);
    }
  };
  const handleUpdateProgress = (goal) => {
    setSelectedGoal(goal);
    setProgressData({
      progress_percentage: goal.progress_percentage || 0,
      status: goal.status || "",
      comments: "",
      milestones_achieved: "",
      challenges: "",
      next_steps: ""
    });
    setShowUpdateModal(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProgressData((prev) => ({
      ...prev,
      [name]: name === "progress_percentage" ? parseInt(value) : value
    }));
  };
  const handleSubmitProgress = async () => {
    if (!selectedGoal) return;
    try {
      setLoading(true);
      const formattedData = {
        ...progressData,
        milestones_achieved: progressData.milestones_achieved ? progressData.milestones_achieved.split(",").map((item) => item.trim()) : []
      };
      await APIServices.createGoalProgress(selectedGoal.id, formattedData);
      const updatedGoals = goals.map(
        (goal) => goal.id === selectedGoal.id ? {
          ...goal,
          progress_percentage: formattedData.progress_percentage,
          status: formattedData.status
        } : goal
      );
      setGoals(updatedGoals);
      setShowUpdateModal(false);
      setSelectedGoal(null);
    } catch (error2) {
      console.error("Error updating goal progress:", error2);
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Start Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Target Completion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: currentGoals.map((goal) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.employee_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.business_goal }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.actual_start_date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.actual_completion_date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: getStatusBadgeColor(goal.status), children: goal.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { width: "200px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Progress,
            {
              value: goal.progress_percentage,
              color: getProgressBarColor(goal.progress_percentage),
              className: "progress-sm"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ms-2", children: [
            goal.progress_percentage,
            "%"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              color: "primary",
              size: "sm",
              className: "me-2",
              onClick: () => handleUpdateProgress(goal),
              disabled: loading,
              children: "Update Progress"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              color: "info",
              size: "sm",
              onClick: () => handleViewProgress(goal.id),
              disabled: loading,
              children: "History"
            }
          )
        ] })
      ] }) }, goal.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Page navigation", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination justify-content-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { previous: true, onClick: () => handlePageChange(currentPage - 1) }) }),
      [...Array(totalPages)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { active: i + 1 === currentPage, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(i + 1), children: i + 1 }) }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === totalPages, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { next: true, onClick: () => handlePageChange(currentPage + 1) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: showUpdateModal, toggle: () => setShowUpdateModal(!showUpdateModal), size: "lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: () => setShowUpdateModal(!showUpdateModal), children: "Update Goal Progress" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: selectedGoal && /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "progress_percentage", children: "Progress Percentage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                name: "progress_percentage",
                id: "progress_percentage",
                min: "0",
                max: "100",
                value: progressData.progress_percentage,
                onChange: handleInputChange
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "status", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Input,
              {
                type: "select",
                name: "status",
                id: "status",
                value: progressData.status,
                onChange: handleInputChange,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Not Started", children: "Not Started" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "In Progress", children: "In Progress" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "On Hold", children: "On Hold" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Completed", children: "Completed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Cancelled", children: "Cancelled" })
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "comments", children: "Comments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "textarea",
              name: "comments",
              id: "comments",
              rows: "3",
              value: progressData.comments,
              onChange: handleInputChange,
              placeholder: "Add comments about current progress"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "milestones_achieved", children: "Milestones Achieved" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "textarea",
              name: "milestones_achieved",
              id: "milestones_achieved",
              rows: "2",
              value: progressData.milestones_achieved,
              onChange: handleInputChange,
              placeholder: "Enter milestones separated by commas"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "form-text text-muted", children: 'Enter milestones separated by commas (e.g., "Research completed, Design phase started")' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "challenges", children: "Challenges" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "textarea",
                name: "challenges",
                id: "challenges",
                rows: "3",
                value: progressData.challenges,
                onChange: handleInputChange,
                placeholder: "Describe any challenges faced"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "next_steps", children: "Next Steps" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "textarea",
                name: "next_steps",
                id: "next_steps",
                rows: "3",
                value: progressData.next_steps,
                onChange: handleInputChange,
                placeholder: "Outline the next steps"
              }
            )
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: () => setShowUpdateModal(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: handleSubmitProgress, disabled: loading, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "sm" }) : "Save Progress" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: showProgressHistory, toggle: () => setShowProgressHistory(!showProgressHistory), size: "lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: () => setShowProgressHistory(!showProgressHistory), children: "Goal Progress History" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: progressHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-info", children: "No progress history available for this goal." }) : progressHistory.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-between align-items-center mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "mb-0", children: [
            "Progress: ",
            entry.progress_percentage,
            "% -",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: getStatusBadgeColor(entry.status), className: "ms-2", children: entry.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted", children: new Date(entry.created_at).toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Progress,
          {
            value: entry.progress_percentage,
            color: getProgressBarColor(entry.progress_percentage),
            className: "mb-3"
          }
        ),
        entry.comments && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Comments:" }),
          " ",
          entry.comments
        ] }),
        entry.milestones_achieved && entry.milestones_achieved.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Milestones:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mb-0 ps-3", children: entry.milestones_achieved.map((milestone, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: milestone }, i)) })
        ] }),
        entry.challenges && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Challenges:" }),
          " ",
          entry.challenges
        ] }),
        entry.next_steps && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Next Steps:" }),
          " ",
          entry.next_steps
        ] })
      ] }) }, entry.id || index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: () => setShowProgressHistory(false), children: "Close" }) })
    ] })
  ] });
};
const GoalTracking = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "",
        home: "Home",
        name: "Goal Tracking"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Goal Progress Tracking" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoalTrackingTable, {}) }) })
    ] }) }) })
  ] });
};
export {
  GoalTracking as default
};

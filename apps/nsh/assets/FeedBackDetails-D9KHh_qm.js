import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { a as useNavigate, A as APIServices, S as Swal, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, B as Button, h as CardBody, I as Input, o as Spinner, T as Table, G as Pagination, H as PaginationItem, J as PaginationLink, v as Modal, w as ModalHeader, x as ModalBody, F as Form, z as FormGroup, L as Label, y as ModalFooter } from "./index-Dr-4baW5.js";
import { C as CardTitle } from "./CardTitle-BjRFrU5i.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const FeedBackDetails = () => {
  const navigate = useNavigate();
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  const [loading, setLoading] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [formErrors, setFormErrors] = reactExports.useState({});
  const [departments, setDepartments] = reactExports.useState([]);
  const [employees, setEmployees] = reactExports.useState([]);
  const [feedbacks, setFeedbacks] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const itemsPerPage = 5;
  const [formData, setFormData] = reactExports.useState({
    employeeID: "",
    staff_name: "",
    deptcode: "",
    deptname: "",
    reviewPeriod: "",
    feedback_date: "",
    task_execution: "",
    power_skills: "",
    attitude: "",
    overall_goal_status: "",
    points_earned: "",
    total_score: "",
    finalGrade: "",
    recommendation: "",
    approved: "No"
  });
  const [editFormData, setEditFormData] = reactExports.useState({
    id: "",
    employeeID: "",
    staff_name: "",
    deptcode: "",
    deptname: "",
    reviewPeriod: "",
    feedback_date: "",
    task_execution: "",
    power_skills: "",
    attitude: "",
    overall_goal_status: "",
    points_earned: "",
    total_score: "",
    finalGrade: "",
    recommendation: "",
    approved: "No"
  });
  const [editFeedbackId, setEditFeedbackId] = reactExports.useState(null);
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (e) {
      return dateString;
    }
  };
  const filterFeedbacks = (searchText) => {
    if (!searchText) {
      return feedbacks;
    }
    const searchLower = searchText.toLowerCase();
    return feedbacks.filter((feedback) => {
      return feedback.staff_name && feedback.staff_name.toLowerCase().includes(searchLower) || feedback.reviewPeriod && feedback.reviewPeriod.toLowerCase().includes(searchLower) || feedback.deptname && feedback.deptname.toLowerCase().includes(searchLower);
    });
  };
  const filteredFeedbacks = reactExports.useMemo(
    () => filterFeedbacks(searchQuery),
    [feedbacks, searchQuery]
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeedbacks = filteredFeedbacks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFeedbacks.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleCreateFeedback = () => {
    navigate("/feed/back");
  };
  reactExports.useEffect(() => {
    fetchDepartments();
    fetchEmployees();
    fetchFeedbacks();
  }, []);
  const fetchDepartments = async () => {
    setLoading(true);
    try {
      const departmentsData = await APIServices.getAllDepartments();
      console.log("Fetched departments:", departmentsData);
      if (departmentsData && departmentsData.length > 0) {
        setDepartments(departmentsData);
      } else {
        setDepartments([]);
        console.log("No departments found in the database");
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      setDepartments([]);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch departments from the server. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const employeesData = await APIServices.getAllEmployees();
      console.log("Fetched employees:", employeesData);
      if (employeesData && employeesData.length > 0) {
        setEmployees(employeesData);
      } else {
        setEmployees([]);
        console.log("No employees found in the database");
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
      setEmployees([]);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch employees from the server. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const response = await APIServices.getAllFeedbacks(0, 100);
      console.log("Fetched feedbacks:", response);
      if (!response || !response.feedbacks) {
        setFeedbacks([]);
        console.log("No valid feedback data received");
        return;
      }
      const transformedFeedbacks = response.feedbacks.map((feedback) => {
        let employeeData = {};
        if (feedback.employeeID && (!feedback.staff_name || !feedback.deptname)) {
          const employee = employees.find((emp) => emp.employeeID === feedback.employeeID);
          if (employee) {
            employeeData = {
              staff_name: employee.staff_name || "",
              deptcode: employee.deptcode || "",
              deptname: employee.deptname || ""
            };
            console.log(`Found employee data for ${feedback.employeeID}:`, employeeData);
          } else {
            console.log(`No employee found for ID ${feedback.employeeID}`);
          }
        }
        const transformedFeedback = {
          id: feedback.feedbackID || feedback._id,
          sno: feedback.sno,
          // Store the sno field for API operations
          employeeID: feedback.employeeID,
          staff_name: feedback.staff_name || employeeData.staff_name || "",
          // Use employee data if missing
          deptcode: feedback.deptcode || employeeData.deptcode || "",
          // Use employee data if missing
          deptname: feedback.deptname || employeeData.deptname || "",
          // Use employee data if missing
          reviewPeriod: feedback.reviewPeriod,
          feedback_date: feedback.feedback_date,
          task_execution: feedback.task_execution ? feedback.task_execution.toString() : "",
          power_skills: feedback.power_skills ? feedback.power_skills.toString() : "",
          attitude: feedback.attitude ? feedback.attitude.toString() : "",
          overall_goal_status: feedback.overall_goal_status ? feedback.overall_goal_status.toString() : "",
          points_earned: feedback.points_earned ? feedback.points_earned.toString() : "0",
          total_score: feedback.total_score ? feedback.total_score.toString() : "0.0",
          finalGrade: feedback.finalGrade || "Unsatisfactory",
          recommendation: feedback.recommendation || "",
          approved: feedback.approved === 1 ? "Yes" : "No"
        };
        console.log(`Transformed feedback for ${feedback.employeeID}:`, {
          staff_name: transformedFeedback.staff_name,
          deptname: transformedFeedback.deptname
        });
        return transformedFeedback;
      });
      if (transformedFeedbacks && transformedFeedbacks.length > 0) {
        setFeedbacks(transformedFeedbacks);
      } else {
        setFeedbacks([]);
        console.log("No feedbacks found in the database");
      }
      if (transformedFeedbacks && transformedFeedbacks.length > 0) {
        fetchFeedbackStats().catch((err) => {
          console.warn("Could not fetch feedback stats:", err);
        });
      }
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      setFeedbacks([]);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch feedbacks from the server. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchFeedbackStats = async () => {
    try {
      const stats = await APIServices.getFeedbackStats();
      console.log("Feedback stats:", stats);
      return stats;
    } catch (error) {
      console.error("Error fetching feedback stats:", error);
      return null;
    }
  };
  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
    if (name === "employeeID" && value) {
      const selectedEmployee = employees.find((emp) => emp.employeeID === value);
      if (selectedEmployee) {
        setState((prevState) => ({
          ...prevState,
          staff_name: selectedEmployee.staff_name || "",
          deptcode: selectedEmployee.deptcode || "",
          deptname: selectedEmployee.deptname || ""
        }));
      }
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.employeeID) errors.employeeID = "Employee is required";
    if (!formData.reviewPeriod) errors.reviewPeriod = "Review period is required";
    if (!formData.feedback_date) errors.feedback_date = "Feedback date is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleAddFormSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const submissionData = { ...formData };
      if (submissionData.employeeID && (!submissionData.staff_name || !submissionData.deptname)) {
        const selectedEmployee = employees.find((emp) => emp.employeeID === submissionData.employeeID);
        if (selectedEmployee) {
          submissionData.staff_name = selectedEmployee.staff_name || "";
          submissionData.deptcode = selectedEmployee.deptcode || "";
          submissionData.deptname = selectedEmployee.deptname || "";
        }
      }
      console.log("Submitting feedback with employee data:", {
        employeeID: submissionData.employeeID,
        staff_name: submissionData.staff_name,
        deptcode: submissionData.deptcode,
        deptname: submissionData.deptname
      });
      const response = await APIServices.createFeedback(submissionData);
      console.log("Created feedback:", response);
      await fetchFeedbacks();
      setFormData({
        employeeID: "",
        staff_name: "",
        deptcode: "",
        deptname: "",
        reviewPeriod: "",
        feedback_date: "",
        task_execution: "",
        power_skills: "",
        attitude: "",
        overall_goal_status: "",
        points_earned: "",
        total_score: "",
        finalGrade: "",
        recommendation: "",
        approved: "No"
      });
      setFormErrors({});
      toggle();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Feedback added successfully!"
      });
    } catch (error) {
      console.error("Error adding feedback:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || "Failed to add feedback. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };
  const handleEditClick = (event, feedback) => {
    event.preventDefault();
    setEditFeedbackId(feedback.id);
    const formValues = {
      id: feedback.id,
      sno: feedback.sno,
      // Include sno for API operations
      employeeID: feedback.employeeID || "",
      staff_name: feedback.staff_name || "",
      deptcode: feedback.deptcode || "",
      deptname: feedback.deptname || "",
      reviewPeriod: feedback.reviewPeriod || "",
      feedback_date: feedback.feedback_date || "",
      task_execution: feedback.task_execution || "",
      power_skills: feedback.power_skills || "",
      attitude: feedback.attitude || "",
      overall_goal_status: feedback.overall_goal_status || "",
      points_earned: feedback.points_earned || "",
      total_score: feedback.total_score || "",
      finalGrade: feedback.finalGrade || "",
      recommendation: feedback.recommendation || "",
      approved: feedback.approved || "No"
    };
    setEditFormData(formValues);
    toggle();
  };
  const handleEditFormSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    setLoading(true);
    try {
      const updateData = { ...editFormData };
      if (updateData.employeeID && (!updateData.staff_name || !updateData.deptname)) {
        const selectedEmployee = employees.find((emp) => emp.employeeID === updateData.employeeID);
        if (selectedEmployee) {
          updateData.staff_name = selectedEmployee.staff_name || "";
          updateData.deptcode = selectedEmployee.deptcode || "";
          updateData.deptname = selectedEmployee.deptname || "";
        }
      }
      console.log("Updating feedback with employee data:", {
        employeeID: updateData.employeeID,
        staff_name: updateData.staff_name,
        deptcode: updateData.deptcode,
        deptname: updateData.deptname
      });
      const idToUse = updateData.sno || editFeedbackId;
      await APIServices.updateFeedback(idToUse, updateData);
      await fetchFeedbacks();
      setEditFeedbackId(null);
      toggle();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Feedback updated successfully!"
      });
    } catch (error) {
      console.error("Error updating feedback:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || "Failed to update feedback. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteClick = (feedback) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      var _a, _b;
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await APIServices.deleteFeedback(feedback.sno || feedback.id);
          await fetchFeedbacks();
        } catch (error) {
          console.error("Error deleting feedback:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || "Failed to delete feedback. Please try again."
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };
  const handleCancelClick = () => {
    setEditFeedbackId(null);
    setFormErrors({});
    toggle();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "",
        home: "Home",
        name: "List",
        fonticonsname: "Feed Backs"
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Feed Backs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "primary",
            className: "mb-3",
            onClick: handleCreateFeedback,
            style: {
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)"
            },
            children: "Create New FeedBack"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            placeholder: "Search...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "form-control w-25"
          }
        ) }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center my-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { color: "primary" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "table-responsive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { bordered: true, hover: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Staff Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Review Period" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Department" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Feedback Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Task Execution" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Power Skills" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Attitude" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Overall Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Points" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Grade" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Approved" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: currentFeedbacks.length > 0 ? currentFeedbacks.map((feedback) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: feedback.staff_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: feedback.reviewPeriod }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: feedback.deptname }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatDate(feedback.feedback_date) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: feedback.task_execution }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: feedback.power_skills }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: feedback.attitude }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: feedback.overall_goal_status }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: feedback.points_earned }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: feedback.total_score }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: feedback.finalGrade }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge ${feedback.approved === "Yes" ? "bg-success" : "bg-danger"}`, children: feedback.approved }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "primary",
                    size: "sm",
                    className: "me-2",
                    onClick: (event) => handleEditClick(event, feedback),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-edit" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "danger",
                    size: "sm",
                    onClick: () => handleDeleteClick(feedback),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trash" })
                  }
                )
              ] }) })
            ] }, feedback.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "13", className: "text-center", children: "No feedback records found" }) }) })
          ] }),
          filteredFeedbacks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-between align-items-center mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Showing ",
              indexOfFirstItem + 1,
              " to ",
              Math.min(indexOfLastItem, filteredFeedbacks.length),
              " of ",
              filteredFeedbacks.length,
              " entries"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { first: true, onClick: () => handlePageChange(1) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { previous: true, onClick: () => handlePageChange(currentPage - 1) }) }),
              [...Array(totalPages).keys()].map((pageNumber) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { active: currentPage === pageNumber + 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { onClick: () => handlePageChange(pageNumber + 1), children: pageNumber + 1 }) }, pageNumber)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === totalPages, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { next: true, onClick: () => handlePageChange(currentPage + 1) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: currentPage === totalPages, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { last: true, onClick: () => handlePageChange(totalPages) }) })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, size: "lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: editFeedbackId ? "Edit Feedback" : "Add New Feedback" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { onSubmit: editFeedbackId ? handleEditFormSubmit : handleAddFormSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "employeeSelect", children: "Select Employee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Input,
            {
              type: "select",
              name: "employeeID",
              id: "employeeSelect",
              value: editFeedbackId ? editFormData.employeeID : formData.employeeID,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              className: "mb-2",
              disabled: editFeedbackId,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Employee --" }),
                employees.map((employee) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: employee.employeeID, children: [
                  employee.staff_name,
                  " - ",
                  employee.job_role || "N/A"
                ] }, employee.employeeID))
              ]
            }
          ),
          formErrors.employeeID && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.employeeID })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "staff_name", children: "Staff Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              id: "staff_name",
              name: "staff_name",
              placeholder: "Staff Name",
              value: editFeedbackId ? editFormData.staff_name : formData.staff_name,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              readOnly: true,
              className: "mb-2"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "deptname", children: "Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              id: "deptname",
              name: "deptname",
              placeholder: "Department",
              value: editFeedbackId ? editFormData.deptname : formData.deptname,
              readOnly: true,
              className: "mb-2"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "reviewPeriod", children: "Review Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              id: "reviewPeriod",
              name: "reviewPeriod",
              placeholder: "e.g. Q1 2024",
              value: editFeedbackId ? editFormData.reviewPeriod : formData.reviewPeriod,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              required: true,
              className: "mb-2"
            }
          ),
          formErrors.reviewPeriod && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.reviewPeriod })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "feedback_date", children: "Feedback Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              id: "feedback_date",
              name: "feedback_date",
              value: editFeedbackId ? editFormData.feedback_date : formData.feedback_date,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              required: true,
              className: "mb-2"
            }
          ),
          formErrors.feedback_date && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.feedback_date })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "task_execution", children: "Task Execution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Input,
            {
              type: "select",
              id: "task_execution",
              name: "task_execution",
              value: editFeedbackId ? editFormData.task_execution : formData.task_execution,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              className: "mb-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Rating --" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Excellent", children: "Excellent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Good", children: "Good" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Average", children: "Average" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Poor", children: "Poor" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "power_skills", children: "Power Skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Input,
            {
              type: "select",
              id: "power_skills",
              name: "power_skills",
              value: editFeedbackId ? editFormData.power_skills : formData.power_skills,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              className: "mb-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Rating --" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Strong", children: "Strong" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Good", children: "Good" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Average", children: "Average" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Weak", children: "Weak" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "attitude", children: "Attitude" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Input,
            {
              type: "select",
              id: "attitude",
              name: "attitude",
              value: editFeedbackId ? editFormData.attitude : formData.attitude,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              className: "mb-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Rating --" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Positive", children: "Positive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Neutral", children: "Neutral" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Negative", children: "Negative" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "overall_goal_status", children: "Overall Goal Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Input,
            {
              type: "select",
              id: "overall_goal_status",
              name: "overall_goal_status",
              value: editFeedbackId ? editFormData.overall_goal_status : formData.overall_goal_status,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              className: "mb-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Status --" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "On Track", children: "On Track" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Achieved", children: "Achieved" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Partially Achieved", children: "Partially Achieved" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Not Achieved", children: "Not Achieved" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "points_earned", children: "Points Earned" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              id: "points_earned",
              name: "points_earned",
              placeholder: "Points Earned",
              value: editFeedbackId ? editFormData.points_earned : formData.points_earned,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              className: "mb-2"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "total_score", children: "Total Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              id: "total_score",
              name: "total_score",
              placeholder: "Total Score",
              value: editFeedbackId ? editFormData.total_score : formData.total_score,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              className: "mb-2"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "finalGrade", children: "Final Grade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Input,
            {
              type: "select",
              id: "finalGrade",
              name: "finalGrade",
              value: editFeedbackId ? editFormData.finalGrade : formData.finalGrade,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              className: "mb-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Grade --" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "A", children: "A" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "B", children: "B" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "C", children: "C" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "D", children: "D" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "F", children: "F" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "recommendation", children: "Recommendation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "textarea",
              id: "recommendation",
              name: "recommendation",
              placeholder: "Recommendation",
              value: editFeedbackId ? editFormData.recommendation : formData.recommendation,
              onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData),
              className: "mb-2"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "approved", children: "Approved" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, { check: true, className: "me-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { check: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "radio",
                  name: "approved",
                  value: "Yes",
                  checked: editFeedbackId ? editFormData.approved === "Yes" : formData.approved === "Yes",
                  onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData)
                }
              ),
              "Yes"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, { check: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { check: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "radio",
                  name: "approved",
                  value: "No",
                  checked: editFeedbackId ? editFormData.approved === "No" : formData.approved === "No",
                  onChange: (e) => handleInputChange(e, editFeedbackId ? setEditFormData : setFormData)
                }
              ),
              "No"
            ] }) })
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { color: "primary", onClick: editFeedbackId ? handleEditFormSubmit : handleAddFormSubmit, children: [
          editFeedbackId ? "Update" : "Add",
          " Feedback"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: handleCancelClick, children: "Cancel" })
      ] })
    ] })
  ] });
};
export {
  FeedBackDetails as default
};

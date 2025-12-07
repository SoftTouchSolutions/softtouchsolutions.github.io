import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { F as Form, B as Button, L as Label, I as Input, T as Table, v as Modal, w as ModalHeader, x as ModalBody, R as Row, C as Col, y as ModalFooter, A as APIServices, S as Swal, f as PageHeaders, g as Card, n as CardHeader, h as CardBody, o as Spinner } from "./index-CPwjB16p.js";
import { C as CardTitle } from "./CardTitle-Cqv0xue5.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-uqX4oSmU.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const BusinessGoalsTable = ({ goals: propGoals = [], onRefresh, predefinedCategories = [] }) => {
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  const [loading, setLoading] = reactExports.useState(false);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [departments, setDepartments] = reactExports.useState([]);
  const [departmentOptions, setDepartmentOptions] = reactExports.useState([]);
  const [categories, setCategories] = reactExports.useState([]);
  const [categoryOptions, setCategoryOptions] = reactExports.useState([]);
  const [goals, setGoals] = reactExports.useState(propGoals || []);
  const [formErrors, setFormErrors] = reactExports.useState({});
  const defaultCategoryOptions = [
    { value: "Growth", label: "Growth" },
    { value: "Technology", label: "Technology" },
    { value: "People", label: "People" },
    { value: "Process", label: "Process" },
    { value: "Customer", label: "Customer" },
    { value: "Financial", label: "Financial" }
  ];
  const [addFormData, setAddFormData] = reactExports.useState({
    department: "",
    busgoal_title: "",
    busgoal_description: "",
    goal_category: "",
    key_result: "",
    start_date: "",
    end_date: ""
  });
  const [editFormData, setEditFormData] = reactExports.useState({
    id: "",
    department: "",
    busgoal_title: "",
    goal_category: "",
    key_result: "",
    start_date: "",
    end_date: ""
  });
  const [editGoalId, setEditGoalId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setGoals(propGoals || []);
  }, [propGoals]);
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
  const handleSelectChange = (selectedOption, { name }) => {
    const newFormData = { ...addFormData };
    newFormData[name] = selectedOption.value;
    setAddFormData(newFormData);
    if (formErrors[name]) {
      const newErrors = { ...formErrors };
      delete newErrors[name];
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
  const validateForm = () => {
    const errors = {};
    if (!addFormData.department) errors.department = "Department is required";
    if (!addFormData.busgoal_title) errors.busgoal_title = "Goal title is required";
    if (!addFormData.goal_category) errors.goal_category = "Category is required";
    if (!addFormData.key_result) errors.key_result = "Key result is required";
    if (!addFormData.start_date) errors.start_date = "Start date is required";
    if (!addFormData.end_date) errors.end_date = "End date is required";
    if (addFormData.start_date && addFormData.end_date) {
      const startDate = new Date(addFormData.start_date);
      const endDate = new Date(addFormData.end_date);
      if (endDate < startDate) {
        errors.end_date = "End date must be after start date";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setLoading(true);
    try {
      const selectedCategory = categoryOptions.find((opt) => opt.value === addFormData.goal_category);
      const selectedDepartment = departmentOptions.find((opt) => opt.value === addFormData.department);
      const newGoal = {
        departmentID: selectedDepartment ? selectedDepartment.value : addFormData.department,
        // Use exact deptcode format
        busgoal_title: addFormData.busgoal_title,
        busgoal_description: addFormData.busgoal_description || "",
        goal_category: selectedCategory ? selectedCategory.value : addFormData.goal_category,
        // Use the ID format expected by backend
        key_result: addFormData.key_result,
        start_date: addFormData.start_date,
        end_date: addFormData.end_date
      };
      console.log("Department options:", departmentOptions);
      console.log("Category options:", categoryOptions);
      console.log("Selected department:", selectedDepartment);
      console.log("Selected category:", selectedCategory);
      console.log("Department ID being sent:", newGoal.departmentID);
      console.log("Goal category being sent:", newGoal.goal_category);
      console.log("Full data being sent:", newGoal);
      let response;
      try {
        response = await APIServices.createBusinessGoal(newGoal);
        console.log("Business goal created:", response);
        const updatedGoals = [...goals, response];
        setGoals(updatedGoals);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Business goal created successfully!"
        });
        setAddFormData({
          department: "",
          busgoal_title: "",
          busgoal_description: "",
          goal_category: "",
          key_result: "",
          start_date: "",
          end_date: ""
        });
        if (typeof toggleAddModal === "function") {
          toggleAddModal();
        }
      } catch (error) {
        console.error("Error adding business goal:", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          let errorMsg = "Failed to create business goal";
          if (error.response.data && error.response.data.detail) {
            errorMsg = error.response.data.detail;
          }
          Swal.fire({
            icon: "error",
            title: "Error",
            text: errorMsg
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to create business goal. Please try again."
          });
        }
        setLoading(false);
        return;
      }
      setAddFormData({
        department: "",
        busgoal_title: "",
        busgoal_description: "",
        goal_category: "",
        key_result: "",
        start_date: "",
        end_date: ""
      });
      toggle();
      if (typeof onRefresh === "function") {
        onRefresh();
      }
    } catch (error) {
      console.error("Error adding business goal:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add business goal. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };
  const handleUpdateFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const editedGoal = {
        department: editFormData.department,
        busgoal_title: editFormData.busgoal_title,
        goal_category: editFormData.goal_category,
        key_result: editFormData.key_result,
        start_date: editFormData.start_date,
        end_date: editFormData.end_date
      };
      await APIServices.updateBusinessGoal(editGoalId, editedGoal);
      console.log("Business goal updated:", editGoalId);
      const index = goals.findIndex((goal) => goal.id === editGoalId || goal.sno === editGoalId);
      if (index !== -1) {
        const updatedGoals = [...goals];
        updatedGoals[index] = { ...updatedGoals[index], ...editedGoal };
        setGoals(updatedGoals);
      }
      setEditGoalId(null);
      if (typeof onRefresh === "function") {
        onRefresh();
      }
    } catch (error) {
      console.error("Error updating business goal:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update business goal. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };
  const handleEditClick = (event, goal) => {
    event.preventDefault();
    setEditGoalId(goal.id);
    const formValues = {
      id: goal.id,
      department: goal.department,
      busgoal_title: goal.busgoal_title,
      goal_category: goal.goal_category,
      key_result: goal.key_result,
      start_date: goal.start_date,
      end_date: goal.end_date
    };
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditGoalId(null);
  };
  const handleDeleteClick = async (goal) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });
    if (result.isConfirmed) {
      setLoading(true);
      try {
        const goalId = goal.id || goal.sno;
        await APIServices.deleteBusinessGoal(goalId);
        console.log("Business goal deleted:", goalId);
        const newGoals = goals.filter((g) => {
          if (goal.id) return g.id !== goal.id;
          return g.sno !== goal.sno;
        });
        setGoals(newGoals);
        Swal.fire("Deleted!", "The business goal has been deleted.", "success");
        if (typeof onRefresh === "function") {
          onRefresh();
        }
      } catch (error) {
        console.error("Error deleting business goal:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete business goal. Please try again."
        });
      } finally {
        setLoading(false);
      }
    }
  };
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
    } catch (error) {
      console.error("Error checking user permissions:", error);
      setIsAdmin(true);
    }
  };
  const fetchDepartments = async () => {
    setLoading(true);
    try {
      console.log("Fetching departments from API...");
      const response = await APIServices.getAllDepartments();
      console.log("Raw department data:", response);
      let deptList = response;
      if (response && typeof response === "object" && response.data) {
        deptList = response.data;
        console.log("Using response.data for department list");
      }
      if (Array.isArray(deptList) && deptList.length > 0) {
        console.log("Processing department data to options...");
        const firstDept = deptList[0];
        console.log("Sample department structure:", firstDept);
        const options = deptList.map((dept) => {
          const id = dept.deptcode || dept.id || dept._id || "";
          let name = dept.deptname || dept.name || "Unknown Department";
          return {
            value: id,
            label: name
          };
        });
        console.log("Transformed department options:", options);
        setDepartmentOptions(options);
        setDepartments(deptList);
      } else {
        console.warn("No departments found or invalid data structure");
        setDepartmentOptions([
          { value: "SALES", label: "Sales" },
          { value: "ENG", label: "Engineering" },
          { value: "HR", label: "Human Resources" },
          { value: "FINANCE", label: "Finance" }
        ]);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      setDepartmentOptions([
        { value: "SALES", label: "Sales" },
        { value: "ENG", label: "Engineering" },
        { value: "HR", label: "Human Resources" },
        { value: "FINANCE", label: "Finance" }
      ]);
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Using sample department data. Department API may not be available."
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchCategories = async () => {
    setLoading(true);
    try {
      if (predefinedCategories && predefinedCategories.length > 0) {
        console.log("Using predefined categories:", predefinedCategories);
        const options = predefinedCategories.map((category) => {
          const id = category.id || category._id || category.value || "";
          const name = category.categoryName || category.name || category.label || "Unknown Category";
          return {
            value: id,
            label: name
          };
        });
        console.log("Using categories from parent component:", options);
        setCategoryOptions(options);
        setCategories(predefinedCategories);
      } else {
        console.log("No predefined categories, fetching from API...");
        const response = await APIServices.getAllGoalCategories();
        console.log("Raw category data from API:", response);
        let categoryList = response;
        if (response && typeof response === "object" && response.data) {
          categoryList = response.data;
          console.log("Using response.data for category list");
        }
        if (Array.isArray(categoryList) && categoryList.length > 0) {
          console.log("Processing category data to options...");
          const firstCategory = categoryList[0];
          console.log("Sample category structure:", firstCategory);
          const options = categoryList.map((category) => {
            const id = category.id || category._id || category.code || "";
            let name = category.categoryName || category.name || category.value || "Unknown Category";
            return {
              value: id,
              label: name
            };
          });
          console.log("Transformed category options:", options);
          setCategoryOptions(options);
          setCategories(categoryList);
        } else {
          console.warn("No categories found or invalid data structure");
          setCategoryOptions(defaultCategoryOptions);
        }
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategoryOptions(defaultCategoryOptions);
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Using sample category data. Categories may not be available."
      });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    checkUserPermissions();
    fetchDepartments();
    fetchCategories();
  }, []);
  const filterGoals = (searchText) => {
    if (!searchText) {
      setGoals(propGoals || []);
      return;
    }
    const filteredGoals = goals.filter(
      (goal) => (goal.department_name || goal.department || "").toLowerCase().includes(searchText.toLowerCase()) || (goal.busgoal_title || "").toLowerCase().includes(searchText.toLowerCase()) || (goal.goal_category || "").toLowerCase().includes(searchText.toLowerCase())
    );
    setGoals(filteredGoals);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleUpdateFormSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary mb-3", onClick: toggle, children: "Add New Business Goal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "float-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "text",
          placeholder: "Search...",
          className: "mb-4 form-control-sm form-control",
          onChange: (e) => filterGoals(e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table table-bordered text-nowrap border-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Goal Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Key Result" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Start Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "End Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: goals.map((goal) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: editGoalId === goal.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableRow,
          {
            editFormData,
            handleEditFormChange,
            handleCancelClick
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReadOnlyRow,
          {
            goal,
            handleEditClick,
            handleDeleteClick
          }
        ) }, goal.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, size: "lg", centered: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalHeader, { children: [
        "Add New Business Goal",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-close", onClick: toggle, children: "x" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleAddFormSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "department", children: [
              "Department ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                id: "department",
                name: "department",
                value: departmentOptions.find((option) => option.value === addFormData.department),
                onChange: (option) => handleSelectChange(option, { name: "department" }),
                options: departmentOptions,
                placeholder: "Select Department",
                required: true,
                className: formErrors.department ? "is-invalid" : "",
                isLoading: loading,
                isDisabled: loading
              }
            ),
            formErrors.department && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.department })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "busgoal_title", children: [
              "Goal Title ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "busgoal_title",
                name: "busgoal_title",
                value: addFormData.busgoal_title,
                onChange: handleAddFormChange,
                required: true,
                placeholder: "Enter Goal Title",
                invalid: !!formErrors.busgoal_title
              }
            ),
            formErrors.busgoal_title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.busgoal_title })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "busgoal_description", children: "Goal Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "busgoal_description",
                name: "busgoal_description",
                value: addFormData.busgoal_description,
                onChange: handleAddFormChange,
                placeholder: "Enter Goal Description"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "goal_category", children: [
              "Category ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                id: "goal_category",
                name: "goal_category",
                value: categoryOptions.find((option) => option.value === addFormData.goal_category),
                onChange: (option) => handleSelectChange(option, { name: "goal_category" }),
                options: categoryOptions,
                placeholder: "Select Category",
                required: true,
                className: formErrors.goal_category ? "is-invalid" : "",
                isLoading: loading,
                isDisabled: loading
              }
            ),
            formErrors.goal_category && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.goal_category })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "key_result", children: [
              "Key Result ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "textarea",
                id: "key_result",
                name: "key_result",
                value: addFormData.key_result,
                onChange: handleAddFormChange,
                required: true,
                placeholder: "Enter Key Result",
                style: { minHeight: "80px" },
                invalid: !!formErrors.key_result
              }
            ),
            formErrors.key_result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.key_result })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "start_date", children: [
              "Start Date ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "start_date",
                name: "start_date",
                value: addFormData.start_date,
                onChange: handleAddFormChange,
                required: true,
                invalid: !!formErrors.start_date
              }
            ),
            formErrors.start_date && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.start_date })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { for: "end_date", children: [
              "End Date ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                id: "end_date",
                name: "end_date",
                value: addFormData.end_date,
                onChange: handleAddFormChange,
                required: true,
                invalid: !!formErrors.end_date
              }
            ),
            formErrors.end_date && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-danger", children: formErrors.end_date })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", className: "me-2", type: "submit", disabled: loading, children: loading ? "Submitting..." : "Add Goal" })
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
        name: "department",
        value: editFormData.department,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "text",
        required: true,
        name: "busgoal_title",
        value: editFormData.busgoal_title,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "text",
        required: true,
        name: "goal_category",
        value: editFormData.goal_category,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "text",
        required: true,
        name: "key_result",
        value: editFormData.key_result,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        required: true,
        name: "start_date",
        value: editFormData.start_date,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        required: true,
        name: "end_date",
        value: editFormData.end_date,
        onChange: handleEditFormChange,
        className: "border"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary me-1", type: "submit", children: "Save" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-danger me-1", type: "button", onClick: handleCancelClick, children: "Cancel" })
    ] })
  ] });
};
const ReadOnlyRow = ({ goal, handleEditClick, handleDeleteClick }) => {
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.department_name || goal.department }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.busgoal_title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.goal_category }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: goal.key_result }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatDate(goal.start_date) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatDate(goal.end_date) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-center align-items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "primary",
          size: "sm",
          className: "btn-icon me-1",
          title: "Edit",
          style: { padding: "0.25rem 0.5rem" },
          onClick: (event) => handleEditClick(event, goal),
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
          onClick: () => handleDeleteClick(goal),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trash" })
        }
      )
    ] }) })
  ] });
};
const BusinessGoal = () => {
  const [goals, setGoals] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetchBusinessGoals();
  }, []);
  const fetchBusinessGoals = async () => {
    setLoading(true);
    try {
      const goalsData = await APIServices.getAllBusinessGoals();
      console.log("Fetched business goals:", goalsData);
      if (goalsData && Array.isArray(goalsData)) {
        setGoals(goalsData);
      } else {
        console.warn("No valid business goals data returned");
        setGoals([]);
      }
    } catch (error) {
      console.error("Error fetching business goals:", error);
      setGoals([]);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch business goals from the server. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaders, { title: "Business Goals" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Business Goals List" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            color: "primary",
            size: "sm",
            onClick: fetchBusinessGoals,
            disabled: loading,
            className: "me-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-refresh me-1" }),
              loading ? "Refreshing..." : "Refresh"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { color: "primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Loading business goals..." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        BusinessGoalsTable,
        {
          goals,
          onRefresh: fetchBusinessGoals
        }
      ) })
    ] }) }) })
  ] });
};
BusinessGoal.propTypes = {};
BusinessGoal.defaultProps = {};
export {
  BusinessGoal as default
};

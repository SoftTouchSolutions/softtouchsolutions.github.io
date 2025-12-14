import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { A as APIServices, B as Button, w as Modal, x as ModalHeader, y as ModalBody, F as Form, E as FormGroup, L as Label, I as Input, T as Table, o as Spinner, S as Swal } from "./index-zbnKGqDS.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const GoalCategoryForm = () => {
  const [categories, setCategories] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [modal, setModal] = reactExports.useState(false);
  const [newCategory, setNewCategory] = reactExports.useState({ categoryName: "", category_description: "" });
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  reactExports.useEffect(() => {
    fetchCategories();
    checkUserPermissions();
  }, []);
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
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await APIServices.getAllGoalCategories();
      console.log("API Response:", response);
      let categoriesList = [];
      if (Array.isArray(response)) {
        categoriesList = response;
      } else if (response && response.data && Array.isArray(response.data)) {
        categoriesList = response.data;
      }
      const processedCategories = categoriesList.map((cat) => ({
        id: cat._id || cat.id || `temp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        sno: cat.sno || 0,
        // Include sno field for deletion
        categoryName: cat.categoryName || "",
        category_description: cat.category_description || ""
      }));
      console.log("Processed Categories:", processedCategories);
      setCategories(processedCategories);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };
  const handleCreateCategory = async (e) => {
    var _a, _b;
    e.preventDefault();
    if (!newCategory.categoryName || !newCategory.category_description) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required"
      });
      return;
    }
    setLoading(true);
    try {
      await APIServices.createGoalCategory(newCategory);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Category created successfully"
      });
      setNewCategory({ categoryName: "", category_description: "" });
      toggle();
      await fetchCategories();
    } catch (err) {
      console.error("Error creating category:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || "Failed to create category"
      });
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteCategory = async (categoryId) => {
    var _a, _b;
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
        await APIServices.deleteGoalCategory(categoryId);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "The category has been deleted."
        });
        await fetchCategories();
      }
    } catch (err) {
      console.error("Error deleting category:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || "Failed to delete category"
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Goal Categories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggle, children: "Create New Category" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Create New Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleCreateCategory, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "categoryName", children: "Category Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", name: "categoryName", value: newCategory.categoryName, onChange: handleInputChange, required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { for: "category_description", children: "Category Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "textarea", name: "category_description", value: newCategory.category_description, onChange: handleInputChange, required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", type: "submit", children: "Create" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Category Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Category Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: category.categoryName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: category.category_description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex justify-content-center align-items-center", children: isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "danger",
            size: "sm",
            className: "btn-icon me-1",
            title: "Delete",
            style: { padding: "0.25rem 0.5rem" },
            onClick: () => handleDeleteCategory(category.sno),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-trash" })
          }
        ) }) })
      ] }, category.id)) })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { color: "primary" }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "red" }, children: error })
  ] });
};
export {
  GoalCategoryForm as default
};

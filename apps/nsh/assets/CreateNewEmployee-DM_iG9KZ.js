import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { k as useDispatch, a as useNavigate, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, F as Form, L as Label, I as Input, B as Button, A as APIServices, S as Swal } from "./index-Dr-4baW5.js";
import { C as CardTitle } from "./CardTitle-BjRFrU5i.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const EmployeeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = reactExports.useState({
    title: "",
    firstname: "",
    lastname: "",
    gender: "",
    phonenumber: "",
    address: "",
    ethnicity: "",
    deptcode: "",
    managerID: "",
    job_role: "",
    contract_type: "",
    employment_date: "",
    branch: "",
    training: "",
    certification: "",
    skills: "",
    interests: "",
    status: false
  });
  const [error, setError] = reactExports.useState(null);
  const [success, setSuccess] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const checkAuth = async () => {
      try {
        await APIServices.getCurrentUser();
      } catch (error2) {
        if (error2.response && error2.response.status === 401) {
          navigate("/login");
        }
      }
    };
    checkAuth();
  }, [navigate]);
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const requiredFields = ["firstname", "lastname", "deptcode", "job_role", "contract_type"];
      const missingFields = requiredFields.filter((field) => !formData[field]);
      if (missingFields.length > 0) {
        setLoading(false);
        await Swal.fire({
          title: "Required Fields Missing",
          text: `Please fill in all required fields: ${missingFields.join(", ")}`,
          icon: "warning",
          confirmButtonText: "OK"
        });
        return;
      }
      console.log("Form data being submitted:", formData);
      const response = await APIServices.createEmployee(formData, dispatch);
      console.log("Create employee response:", response);
      setLoading(false);
      await Swal.fire({
        title: "Success",
        text: "Employee created successfully!",
        icon: "success",
        timer: 2e3,
        showConfirmButton: false
      });
      setFormData({
        title: "",
        firstname: "",
        lastname: "",
        gender: "",
        phonenumber: "",
        address: "",
        ethnicity: "",
        deptcode: "",
        managerID: "",
        job_role: "",
        contract_type: "",
        employment_date: "",
        branch: "",
        training: "",
        certification: "",
        skills: "",
        interests: "",
        status: false
      });
      navigate("/employee");
    } catch (err) {
      console.error("Error creating employee:", err);
      setLoading(false);
      await Swal.fire({
        title: "Error",
        text: err.message || "Failed to create employee. Please try again.",
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "",
        home: "Home",
        name: "New",
        fonticonsname: "Emplyees"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Add New Employee" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "title",
                value: formData.title,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Title"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "First Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "firstname",
                value: formData.firstname,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "First Name"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Last Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "lastname",
                value: formData.lastname,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Last Name"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Gender" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "gender",
                value: formData.gender,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Gender"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "phonenumber",
                value: formData.phonenumber,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Phone Number"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "address",
                value: formData.address,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Address"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Ethnicity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "ethnicity",
                value: formData.ethnicity,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Ethnicity"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Department Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "deptcode",
                value: formData.deptcode,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Department Code"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Manager ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "managerID",
                value: formData.managerID,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Manager ID"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Job Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "job_role",
                value: formData.job_role,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Job Role"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Contract Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "contract_type",
                value: formData.contract_type,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Contract Type"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Employment Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                name: "employment_date",
                value: formData.employment_date,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Employment Date"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Branch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "branch",
                value: formData.branch,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Branch"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Training" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "training",
                value: formData.training,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Training"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Certification" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "certification",
                value: formData.certification,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Certification"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Skills" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "skills",
                value: formData.skills,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Skills"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Interests" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                name: "interests",
                value: formData.interests,
                onChange: handleInputChange,
                className: "form-control",
                placeholder: "Interests"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "checkbox",
                name: "status",
                checked: formData.status,
                onChange: handleInputChange,
                className: "form-check-input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ms-2", children: "Active" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-footer mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", type: "submit", disabled: loading || success, children: loading ? "Creating..." : "Add New Employee" }) })
      ] }) })
    ] }) }) })
  ] });
};
export {
  EmployeeForm as default
};

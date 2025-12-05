import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { ag as useParams, f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, I as Input, L as Label, A as APIServices, S as Swal } from "./index-PSM4fvJQ.js";
import { C as CardFooter } from "./CardFooter-DmrFf5V7.js";
import { C as CardTitle } from "./CardTitle-BC9vGAnP.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-uqX4oSmU.js";
import { u as user16 } from "./16-Cuc8by-s.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const EmployeeProfile = () => {
  const [departments, setDepartments] = reactExports.useState([]);
  const [managers, setManagers] = reactExports.useState([]);
  const [filteredManagers, setFilteredManagers] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [profilePicture, setProfilePicture] = reactExports.useState(user16);
  const { employeeId } = useParams();
  const [formData, setFormData] = reactExports.useState({
    loading: false,
    title: "",
    staff_name: "",
    email: "",
    userId: "",
    employeeID: "",
    phonenumber: "",
    address: "",
    deptcode: "",
    deptname: "",
    managerId: "",
    // Store manager's ID from managers collection
    managername: "",
    // Store manager's name for display
    job_role: "",
    contract_type: "",
    employment_date: "",
    branch: "",
    training: "",
    certification: "",
    skills: "",
    interests: "",
    status: "active"
    // Default status
  });
  const [passwordData, setPasswordData] = reactExports.useState({
    current_password: "",
    new_password: "",
    confirm_password: ""
  });
  const [passwordValidation, setPasswordValidation] = reactExports.useState({
    hasMinLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
    passwordsMatch: false
  });
  const [showPasswordHints, setShowPasswordHints] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userInfo = JSON.parse(localStorage.getItem("user_info") || sessionStorage.getItem("user_info") || "{}");
        const userRole = userInfo.userType || "employee";
        const promises = [fetchDepartments()];
        if (userRole === "manager") {
          promises.push(fetchManagers());
        }
        await Promise.all(promises);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  reactExports.useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        setLoading(true);
        if (employeeId) {
          console.log(`Fetching specific employee data for ID: ${employeeId}`);
          const employeeData = await APIServices.getEmployee(employeeId);
          if (employeeData) {
            setFormData((prev) => {
              var _a, _b, _c;
              return {
                ...prev,
                ...employeeData,
                // Ensure nested objects are handled correctly
                deptname: ((_a = employeeData.department) == null ? void 0 : _a.deptname) || "",
                deptcode: ((_b = employeeData.department) == null ? void 0 : _b.deptcode) || "",
                managername: ((_c = employeeData.manager) == null ? void 0 : _c.staff_name) || ""
              };
            });
          }
        } else {
          console.log("No employeeId provided, fetching current user profile");
          const profileData = await APIServices.getUserProfile();
          if (profileData) {
            console.log("Setting form data with profile data:", profileData);
            setFormData((prev) => ({
              ...prev,
              ...profileData
              // All fields should be properly named and match the formData structure
            }));
          }
        }
      } catch (error) {
        console.error(`Failed to fetch profile data:`, error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load profile data. Please try again later."
        });
      } finally {
        setLoading(false);
      }
    };
    fetchEmployeeData();
  }, [employeeId]);
  const fetchDepartments = async () => {
    try {
      const departmentsData = await APIServices.getAllDepartments();
      if (departmentsData && departmentsData.length > 0) {
        setDepartments(departmentsData.map((dept) => ({
          value: dept.deptcode,
          label: dept.deptname,
          data: dept
        })));
      } else {
        console.log("No departments found");
        setDepartments([]);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch departments. Please try again later."
      });
    }
  };
  const fetchManagers = async () => {
    var _a;
    try {
      const managersData = await APIServices.getallmanagers();
      if (managersData && managersData.length > 0) {
        console.log("Fetched managers:", managersData);
        setManagers(managersData.map((manager) => ({
          value: manager._id,
          // Store the manager's _id as the value
          label: manager.staff_name,
          // Show the manager's name as the label
          data: manager
          // Keep the full manager object for reference
        })));
      } else {
        console.log("No managers found - this may be due to insufficient role permissions");
        setManagers([]);
        const userInfo = JSON.parse(localStorage.getItem("user_info") || sessionStorage.getItem("user_info") || "{}");
        const userRole = userInfo.role || "employee";
        if (userRole === "employee") {
          console.log("Employee role detected - manager access not available");
          (_a = toast == null ? void 0 : toast.info) == null ? void 0 : _a.call(toast, "Manager selection not available with your current role permissions.", {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      }
    } catch (error) {
      console.error("Error fetching managers:", error);
      if (!error.response || error.response.status !== 403) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch managers. Please try again later."
        });
      }
    }
  };
  const filterManagersByDepartment = async (deptName) => {
    if (!deptName) {
      setFilteredManagers([]);
      return;
    }
    try {
      setLoading(true);
      const managersForDept = await APIServices.getManagersByDepartment(deptName);
      if (managersForDept && managersForDept.length > 0) {
        const departmentManagers = managersForDept.map((manager) => ({
          value: manager._id,
          label: manager.staff_name,
          data: manager
        }));
        setFilteredManagers(departmentManagers);
        console.log(`Filtered managers for ${deptName}:`, departmentManagers);
      } else {
        setFilteredManagers([]);
        console.log(`No managers found for department ${deptName}`);
      }
    } catch (error) {
      setFilteredManagers([]);
      console.error(`Error fetching managers for ${deptName}:`, error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Could not fetch managers for ${deptName}. Please try again later.`
      });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (formData.deptname) {
      console.log(`Department changed to: ${formData.deptname}`);
      filterManagersByDepartment(formData.deptname);
    } else {
      setFilteredManagers([]);
    }
  }, [formData.deptname]);
  reactExports.useEffect(() => {
    const loadUserData = async () => {
      try {
        setFormData((prevData) => ({
          ...prevData,
          loading: true
        }));
        const response = await APIServices.getCurrentUser();
        console.log("User data response:", response);
        if (response && response.data) {
          if (response.data.profile_picture) {
            console.log("Profile picture found:", response.data.profile_picture);
            const timestamp = (/* @__PURE__ */ new Date()).getTime();
            setProfilePicture(`http://localhost:8000${response.data.profile_picture}?t=${timestamp}`);
          }
          const userData = response.data;
          const jobRole = (userData == null ? void 0 : userData.job_role) || (userData == null ? void 0 : userData.jobRole) || (userData == null ? void 0 : userData.jobrole) || "";
          const contractType = (userData == null ? void 0 : userData.contract_type) || (userData == null ? void 0 : userData.contractType) || (userData == null ? void 0 : userData.contracttype) || "";
          setFormData((prevData) => {
            const updatedData = {
              ...prevData,
              loading: false,
              staff_name: userData.staff_name || userData.email || "",
              email: userData.email || "",
              userId: userData.id || userData._id || "",
              employeeID: userData.id || userData._id || "",
              userType: userData.userType || "",
              job_role: jobRole,
              contract_type: contractType,
              deptname: userData.deptname || "",
              deptcode: userData.deptcode || "",
              // Only set manager data if we have both department and manager info
              // The validation useEffect will clear it if it doesn't match
              managerId: userData.managerId || "",
              managername: userData.managername || ""
            };
            console.log("Updated form data:", updatedData);
            return updatedData;
          });
        }
      } catch (error) {
        console.error("Error loading user data:", error);
        setFormData((prevData) => ({
          ...prevData,
          loading: false
        }));
        Swal.fire("Error", "Failed to load user data. Please try again later.", "error");
      }
    };
    loadUserData();
  }, []);
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (name === "deptcode" && value) {
      try {
        const selectedDept = departments.find((dept) => dept.value === value);
        if (selectedDept && selectedDept.label) {
          const deptName = selectedDept.label;
          console.log(`Found department name "${deptName}" for code ${value}, fetching manager`);
          const managerData = await APIServices.getManagerByDepartment(deptName);
          if (managerData && managerData.staff_name) {
            setFormData((prevData) => ({
              ...prevData,
              managername: managerData.staff_name,
              managerId: managerData._id || ""
            }));
          } else {
            console.log(`No manager found for department "${deptName}"`);
            setFormData((prevData) => ({
              ...prevData,
              managername: "",
              managerId: ""
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching manager:", error);
      }
    }
  };
  const handleSelectChange = (selectedOption, name) => {
    if (!selectedOption && name === "deptname") {
      setFormData({
        ...formData,
        [name]: "",
        deptcode: "",
        managerId: "",
        managername: ""
      });
      setFilteredManagers([]);
    } else if (selectedOption && name === "deptname") {
      const deptName = selectedOption.label;
      const deptCode = selectedOption.value;
      setFormData({
        ...formData,
        [name]: deptName,
        deptcode: deptCode,
        managerId: "",
        // Clear manager ID immediately
        managername: ""
        // Clear manager name immediately
      });
      filterManagersByDepartment(deptName);
    } else if (selectedOption && name === "managerId") {
      setFormData({
        ...formData,
        managerId: selectedOption.value,
        managername: selectedOption.label
      });
    } else if (!selectedOption && name === "managerId") {
      setFormData({
        ...formData,
        managerId: "",
        managername: ""
      });
    } else {
      setFormData({
        ...formData,
        [name]: selectedOption ? selectedOption.value : ""
      });
    }
  };
  const handleSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    const requiredFields = ["staff_name", "job_role", "contract_type"];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      Swal.fire("Error", `Please fill in the following required fields: ${missingFields.join(", ")}`, "error");
      return;
    }
    try {
      const dataToSubmit = {
        ...formData,
        // Make sure employeeID is set to the user's ID
        employeeID: formData.employeeID || formData.userId,
        // Ensure managerId is included in the submission
        managerId: formData.managerId || "",
        managername: formData.managername || "",
        // Format date if needed
        employment_date: formData.employment_date ? new Date(formData.employment_date).toISOString() : null
      };
      console.log("Sending profile update data:", dataToSubmit);
      const response = await APIServices.updateUserProfile(dataToSubmit);
      Swal.fire("Success", "Profile updated successfully", "success");
    } catch (error) {
      console.error("Error updating profile:", error);
      const errorMessage = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || "Failed to update profile";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage
      });
    }
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const response = await APIServices.uploadProfilePicture(file);
      if (response.path) {
        const timestamp = (/* @__PURE__ */ new Date()).getTime();
        setProfilePicture(`http://localhost:8000${response.path}?t=${timestamp}`);
      }
      Swal.fire("Success", "Profile picture updated successfully", "success");
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      Swal.fire("Error", "Failed to upload profile picture", "error");
    }
  };
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    const updatedPasswordData = {
      ...passwordData,
      [name]: value
    };
    setPasswordData(updatedPasswordData);
    if (name === "new_password" || name === "confirm_password") {
      validatePassword(updatedPasswordData.new_password, updatedPasswordData.confirm_password);
    }
  };
  const validatePassword = (newPassword, confirmPassword) => {
    setPasswordValidation({
      hasMinLength: newPassword.length >= 8,
      hasUppercase: /[A-Z]/.test(newPassword),
      hasLowercase: /[a-z]/.test(newPassword),
      hasNumber: /\d/.test(newPassword),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
      passwordsMatch: newPassword === confirmPassword && newPassword.length > 0
    });
  };
  const isPasswordValid = () => {
    return Object.values(passwordValidation).every(Boolean);
  };
  const handleChangePassword = async (e) => {
    var _a, _b;
    e.preventDefault();
    if (!passwordData.current_password || !passwordData.new_password || !passwordData.confirm_password) {
      Swal.fire("Error", "All password fields are required.", "error");
      return;
    }
    if (!isPasswordValid()) {
      Swal.fire("Error", "Password does not meet the requirements.", "error");
      return;
    }
    try {
      await APIServices.changePassword({
        current_password: passwordData.current_password,
        new_password: passwordData.new_password,
        confirm_password: passwordData.confirm_password
      });
      setPasswordData({
        current_password: "",
        new_password: "",
        confirm_password: ""
      });
      Swal.fire("Success", "Password changed successfully.", "success");
    } catch (error) {
      console.error("Error changing password:", error);
      Swal.fire("Error", ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || "Failed to change password", "error");
    }
  };
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Employee Profile",
        home: "Home",
        name: "Pages",
        fonticonsname: "EditProfile"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", lg: "5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Edit Password" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "User Avatar",
                className: "rounded-circle me-3",
                src: profilePicture,
                style: { width: "150px", height: "150px", objectFit: "cover" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 ms-0 ms-sm-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "file",
                  accept: "image/*",
                  onChange: handleFileChange,
                  style: { display: "none" },
                  id: "profile-picture-input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "profile-picture-input", className: "btn btn-primary mb-1 me-1", children: "Change Picture" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Current Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "password",
                name: "current_password",
                value: passwordData.current_password,
                onChange: handlePasswordChange,
                className: "form-control"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "New Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "password",
                name: "new_password",
                value: passwordData.new_password,
                onChange: handlePasswordChange,
                onFocus: () => setShowPasswordHints(true),
                className: `form-control ${passwordData.new_password && !isPasswordValid() ? "is-invalid" : passwordData.new_password && isPasswordValid() ? "is-valid" : ""}`
              }
            ),
            showPasswordHints && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "password-requirements mt-2 p-3 border rounded bg-light", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted d-block mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Password Requirements:" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-md-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: `d-block ${passwordValidation.hasMinLength ? "text-success" : "text-danger"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `fas ${passwordValidation.hasMinLength ? "fa-check" : "fa-times"} me-1` }),
                    "At least 8 characters"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: `d-block ${passwordValidation.hasUppercase ? "text-success" : "text-danger"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `fas ${passwordValidation.hasUppercase ? "fa-check" : "fa-times"} me-1` }),
                    "One uppercase letter"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: `d-block ${passwordValidation.hasLowercase ? "text-success" : "text-danger"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `fas ${passwordValidation.hasLowercase ? "fa-check" : "fa-times"} me-1` }),
                    "One lowercase letter"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-md-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: `d-block ${passwordValidation.hasNumber ? "text-success" : "text-danger"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `fas ${passwordValidation.hasNumber ? "fa-check" : "fa-times"} me-1` }),
                    "One number"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { className: `d-block ${passwordValidation.hasSpecialChar ? "text-success" : "text-danger"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `fas ${passwordValidation.hasSpecialChar ? "fa-check" : "fa-times"} me-1` }),
                    "One special character"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Confirm Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "password",
                name: "confirm_password",
                value: passwordData.confirm_password,
                onChange: handlePasswordChange,
                className: `form-control ${passwordData.confirm_password && !passwordValidation.passwordsMatch ? "is-invalid" : passwordData.confirm_password && passwordValidation.passwordsMatch ? "is-valid" : ""}`
              }
            ),
            passwordData.confirm_password && !passwordValidation.passwordsMatch && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invalid-feedback", children: "Passwords do not match" }),
            passwordData.confirm_password && passwordValidation.passwordsMatch && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "valid-feedback", children: "Passwords match" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { className: "text-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleChangePassword,
              className: "btn btn-primary me-1",
              disabled: !isPasswordValid() || !passwordData.current_password,
              children: "Update Password"
            }
          ),
          !isPasswordValid() && passwordData.new_password && /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-muted d-block mt-1", children: "Please meet all password requirements" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "8", lg: "7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Edit Employee Profile" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-weight-bold", children: "Basic Info:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  name: "title",
                  value: formData.title || "",
                  onChange: handleInputChange,
                  className: "form-control",
                  placeholder: "Title"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
                "Full Name",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  name: "staff_name",
                  value: formData.staff_name || "",
                  onChange: handleInputChange,
                  className: "form-control",
                  placeholder: "Full Name",
                  required: true
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Gender" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  options: genderOptions,
                  value: genderOptions.find((option) => option.value === formData.gender),
                  onChange: (selectedOption) => handleSelectChange(selectedOption, "gender"),
                  placeholder: "Select Gender",
                  classNamePrefix: "select",
                  isClearable: true
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  name: "phonenumber",
                  value: formData.phonenumber || "",
                  onChange: handleInputChange,
                  className: "form-control",
                  placeholder: "Phone Number"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  name: "address",
                  value: formData.address || "",
                  onChange: handleInputChange,
                  className: "form-control",
                  placeholder: "Address"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Ethnicity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  name: "ethnicity",
                  value: formData.ethnicity || "",
                  onChange: handleInputChange,
                  className: "form-control",
                  placeholder: "Ethnicity"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-weight-bold mt-5", children: "Job Details:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
                "Department",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  name: "deptname",
                  value: departments.find((option) => option.label === formData.deptname) || null,
                  onChange: (selectedOption) => handleSelectChange(selectedOption, "deptname"),
                  options: departments,
                  placeholder: "Select Department",
                  isClearable: true,
                  isLoading: loading,
                  classNamePrefix: "select"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Manager" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  name: "managerId",
                  value: filteredManagers.find((option) => option.value === formData.managerId) || null,
                  onChange: (selectedOption) => handleSelectChange(selectedOption, "managerId"),
                  options: filteredManagers,
                  placeholder: formData.deptname ? "Select Manager" : "Select Department First",
                  isClearable: true,
                  isLoading: loading,
                  classNamePrefix: "select"
                },
                `manager-${formData.deptname || "none"}`
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
                "Job Role",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  name: "job_role",
                  value: formData.job_role || "",
                  onChange: handleInputChange,
                  className: "form-control",
                  placeholder: "Job Role"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-label", children: [
                "Contract Type",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  name: "contract_type",
                  value: formData.contract_type || "",
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
                  value: formData.employment_date || "",
                  onChange: handleInputChange,
                  className: "form-control"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-weight-bold mt-5", children: "Other Details:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "6", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Training" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  name: "training",
                  value: formData.training || "",
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
                  value: formData.certification || "",
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
                  value: formData.skills || "",
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
                  value: formData.interests || "",
                  onChange: handleInputChange,
                  className: "form-control",
                  placeholder: "Interests"
                }
              )
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-list", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSubmit, className: "btn btn-primary", children: "Save Profile" }) }) })
      ] }) })
    ] })
  ] });
};
export {
  EmployeeProfile as default
};

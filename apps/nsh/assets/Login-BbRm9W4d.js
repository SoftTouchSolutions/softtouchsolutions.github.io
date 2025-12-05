import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { a as useNavigate, k as useDispatch, ar as useAuth, h as CardBody, R as Row, C as Col, I as Input, B as Button, v as Modal, w as ModalHeader, x as ModalBody, L as Label, S as Swal, A as APIServices } from "./index-PSM4fvJQ.js";
import { I as InputGroup } from "./InputGroup-Bd6udR3n.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const myImage = "/assets/logo2-C5aQrODH.webp";
const Login02 = () => {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [forgotPasswordModal, setForgotPasswordModal] = reactExports.useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = reactExports.useState("");
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = reactExports.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useAuth();
  const toggleForgotPasswordModal = () => {
    setForgotPasswordModal(!forgotPasswordModal);
    setForgotPasswordEmail("");
    setForgotPasswordSuccess(false);
  };
  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    if (!forgotPasswordEmail) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please enter your email address."
      });
      return;
    }
    try {
      console.log("Sending password reset request for:", forgotPasswordEmail);
      const response = await APIServices.forgotPassword({ email: forgotPasswordEmail });
      if (response) {
        console.log("Password reset request successful");
        setForgotPasswordSuccess(true);
        Swal.fire({
          icon: "success",
          title: "Reset Request Sent",
          text: "Password recovery notification has been sent. Please check your notifications.",
          timer: 3e3,
          showConfirmButton: false
        });
        setTimeout(() => {
          setForgotPasswordModal(false);
          setForgotPasswordSuccess(false);
          setForgotPasswordEmail("");
        }, 2e3);
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      Swal.fire({
        icon: "error",
        title: "Request Failed",
        text: error.message || "Failed to send password reset request. Please try again."
      });
    }
  };
  const handleLogin = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please enter both email and password."
      });
      return;
    }
    try {
      console.log("Attempting login with:", { email });
      const payload = { email, password };
      let authResult;
      try {
        authResult = await login(payload);
        console.log("AuthContext login result:", authResult);
        if (authResult && authResult.success) {
          redirectAfterLogin(email);
          return;
        }
      } catch (authError) {
        console.error("AuthContext login error:", authError);
      }
      const response = await APIServices.login(payload, dispatch);
      console.log("API login response:", response);
      if (response && !localStorage.getItem("auth_token")) {
        localStorage.setItem("auth_token", "token_from_api_response");
      }
      const userEmail = (response == null ? void 0 : response.user) || email;
      redirectAfterLogin(userEmail);
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message || "An unexpected error occurred."
      });
    }
  };
  const redirectAfterLogin = (userEmail) => {
    try {
      const hasLoggedInBefore = localStorage.getItem(`user_${userEmail}_has_logged_in`);
      console.log("Has logged in before:", hasLoggedInBefore);
      let targetPath;
      if (!hasLoggedInBefore) {
        console.log("First time login - redirecting to profile");
        localStorage.setItem(`user_${userEmail}_has_logged_in`, "true");
        targetPath = "/employee/profile";
      } else {
        let userType = "employee";
        if (userEmail.includes("admin") || userEmail.includes("administrator")) {
          userType = "admin";
        } else if (userEmail.includes("manager") || userEmail.includes("mgr")) {
          userType = "manager";
        }
        console.log("Return user login with determined type:", userType);
        if (userType === "admin") {
          targetPath = "/dashboard/dashboard01";
        } else if (userType === "manager") {
          targetPath = "/dashboard/dashboard02";
        } else {
          targetPath = "/dashboard/dashboard03";
        }
      }
      console.log("Redirecting to:", targetPath);
      try {
        navigate(targetPath, { replace: true });
        console.log("Navigation method 1 executed");
        setTimeout(() => {
          if (window.location.pathname.includes("login")) {
            console.log("Navigation fallback triggered after timeout");
            window.location.href = targetPath;
          }
        }, 100);
      } catch (navError) {
        console.error("Navigation error:", navError);
        window.location.href = targetPath;
      }
    } catch (redirectError) {
      console.error("Redirect error:", redirectError);
      window.location.href = "/";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-md-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            width: "49%",
            height: "100%",
            minHeight: "100vh",
            backgroundImage: `url(${myImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 1
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-60 page-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-single-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: 8, className: "mx-auto d-block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-2", children: "Login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted", children: "Sign In to your account" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "divider my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(InputGroup, { className: "input-group mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-group-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zM12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              className: "form-control",
              placeholder: "Email",
              value: email,
              onChange: (e) => setEmail(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(InputGroup, { className: "input-group mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-group-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z", opacity: ".3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "password",
              className: "form-control",
              placeholder: "Password",
              value: password,
              onChange: (e) => setPassword(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-grid gap-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "btn btn-primary login-btn",
            onClick: handleLogin,
            style: {
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              borderRadius: "6px",
              padding: "14px 24px",
              fontSize: "15px",
              fontWeight: "500",
              letterSpacing: "0.3px",
              boxShadow: "0 2px 8px rgba(102, 126, 234, 0.25)",
              transition: "all 0.2s ease",
              position: "relative",
              overflow: "hidden"
            },
            onMouseEnter: (e) => {
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.35)";
            },
            onMouseLeave: (e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 8px rgba(102, 126, 234, 0.25)";
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-arrow-right me-2" }),
              " Login"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "link",
            className: "btn-link box-shadow-0 px-0 text-decoration-none",
            onClick: toggleForgotPasswordModal,
            style: {
              fontSize: "14px",
              color: "#6c757d",
              padding: "0"
            },
            children: "Forgot password?"
          }
        ) })
      ] }) }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: forgotPasswordModal, toggle: toggleForgotPasswordModal, centered: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggleForgotPasswordModal, children: "Forgot Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: !forgotPasswordSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleForgotPasswordSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted", children: "Enter your email address and we'll send you a link to reset your password." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(InputGroup, { className: "input-group mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "input-group-addon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z", opacity: ".3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "email",
              className: "form-control",
              placeholder: "Enter your email address",
              value: forgotPasswordEmail,
              onChange: (e) => setForgotPasswordEmail(e.target.value),
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "I agree to the terms and policy" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "submit",
            color: "primary",
            className: "btn btn-lg btn-primary btn-block",
            disabled: !forgotPasswordEmail,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-mail" }),
              " Send Reset Link"
            ]
          }
        ) }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check-circle text-success", style: { fontSize: "3rem" } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-success", children: "Email Sent!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted", children: "We've sent a password reset link to your email address." })
      ] }) })
    ] })
  ] });
};
export {
  Login02 as default
};

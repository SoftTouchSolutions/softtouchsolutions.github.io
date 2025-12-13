import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, B as Button, L as Label, I as Input, S as Swal } from "./index-Drmsz9hA.js";
import { f as favicon } from "./favicon-TrKW_Zmf.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Sweetalerts = () => {
  const [title, settitle] = reactExports.useState("Congratulations!");
  const [message, setmessage] = reactExports.useState("New Notification from Dashtic.");
  function Primaryalert() {
    Swal.fire({
      title: "Congratulations!",
      icon: "success",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#4454c3",
      text: "Your message has been succesfully sent"
    });
  }
  function Warningalert() {
    Swal.fire({
      title: "Some Risk File Is Founded",
      icon: "warning",
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: "Stay on the page",
      confirmButtonText: "Exit",
      cancelButtonColor: "#6259ca",
      text: "Some Virus file is detected your system going to be in Risk"
    });
  }
  function Dangeralert() {
    Swal.fire({
      title: "Something Went Wrong",
      icon: "error",
      allowOutsideClick: false,
      confirmButtonText: "Exit",
      showCancelButton: "true",
      cancelButtonText: "Stay on the page",
      cancelButtonColor: "#6259ca",
      text: "Please fix the issue the issue file not loaded & items not found"
    });
  }
  function Infoalert() {
    Swal.fire({
      title: "Notification Alert",
      icon: "info",
      allowOutsideClick: false,
      confirmButtonText: "Exit",
      cancelButtonText: "Stay on the page",
      showCancelButton: "true",
      cancelButtonColor: "#6259ca",
      text: "your getting some notification from mail please check it"
    });
  }
  function Warningalertbutton() {
    Swal.fire({
      title,
      allowOutsideClick: false,
      text: "Your message(close after 2seconds)",
      showConfirmButton: false,
      timer: 2e3
    });
  }
  function Basic() {
    Swal.fire({
      text: message,
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#4454c3"
    });
  }
  function Title() {
    Swal.fire({
      title,
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#4454c3",
      text: message
    });
  }
  function Infoalertimg() {
    Swal.fire({
      title,
      text: message,
      imageUrl: favicon,
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: "Custom image"
    });
  }
  const Ajax = () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(``).then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        }).catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`);
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  };
  const Timer = () => {
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2e3,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Sweet Alert",
        home: "Home",
        name: "Apps",
        fonticonsname: "Sweet Alert"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "sweetalerts", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: 12, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Sample Sweet Alerts" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", onClick: Primaryalert, className: "btn-success mt-2 me-1", id: "click", children: "success alert" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", onClick: Warningalert, className: "btn-warning mt-2 me-1", id: "click1", children: "Warning alert" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", onClick: Dangeralert, className: "btn-danger mt-2 me-1", id: "click2", children: "Danger alert" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", onClick: Infoalert, className: "btn-info mt-2 me-1", id: "click3", children: "Info alert" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Forms Sweet-alert" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", onChange: (ele) => {
              settitle(ele.target.value);
            }, placeholder: "Title text", id: "title" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", onChange: (ele) => {
              setmessage(ele.target.value);
            }, placeholder: "Your message", id: "message" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", onClick: Basic, className: "btn-primary mt-2", id: "but1", children: "Simple alert" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", onClick: Title, className: "btn-secondary mt-2", id: "but2", children: "Alert with title " }),
          "  ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", onClick: Infoalertimg, className: "btn-info mt-2", id: "but3", children: "Alert with image" }),
          "  ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", onClick: Warningalertbutton, className: "btn-warning mt-2", id: "but4", children: "With timer" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "sweetalerts", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Prompt and confirm box Demo" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: Timer, color: "", className: "btn-secondary me-1", id: "prompt", children: "Timer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: Ajax, color: "", className: "btn-primary me-1", id: "confirm", children: "AJAX ALERT" })
      ] })
    ] }) }) })
  ] });
};
Sweetalerts.propTypes = {};
Sweetalerts.defaultProps = {};
export {
  Sweetalerts as default
};

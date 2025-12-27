import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { u as useLocation, f as PageHeaders, g as Card, R as Row, C as Col, n as CardHeader, b as Link, w as Modal, x as ModalHeader, y as ModalBody, E as FormGroup, I as Input, B as Button, F as Form, L as Label, z as ModalFooter } from "./index-AOv_UoEY.js";
import { u as user16 } from "./16-Cj3VG8Ln.js";
import { u as user12 } from "./12-DCQ8KYQr.js";
import { u as user1 } from "./1-D9D-sDJ2.js";
import { u as user3 } from "./3-sVDGTRrN.js";
import { u as user4 } from "./4-B2cp7gEW.js";
import { u as user5 } from "./5-vtpEo8ki.js";
import { u as user6 } from "./6-BnLqC6y1.js";
import { u as user7 } from "./7-DPYO_OwL.js";
import { u as user8 } from "./8-BqL85zok.js";
import { S as SimpleBar } from "./index-DWkztd76.js";
import { C as CardTitle } from "./CardTitle-p-89_2wb.js";
import { E as EditProfileService, P as ProfileService } from "./editprofile-CWaPFwGl.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Contactlist02 = () => {
  const [firstName, setFirstName] = reactExports.useState("");
  const [lastName, setLastName] = reactExports.useState("");
  const [role, setRole] = reactExports.useState("");
  const [outPut, setoutPut] = reactExports.useState(EditProfileService.returnId());
  const putData = () => {
    EditProfileService.editDataFrom(firstName, lastName, role);
    setoutPut(EditProfileService.returnId());
  };
  const [smShow, setSmShow] = reactExports.useState(false);
  const [UrlImage, setUrlImage] = reactExports.useState(user16);
  const [UrlDisabled, setUrlDisabled] = reactExports.useState(true);
  const [img, setimg] = reactExports.useState(user16);
  const [fileDisabled, setfileDisabled] = reactExports.useState(false);
  const [Image, setImage] = reactExports.useState(user16);
  let location = useLocation();
  const putImage = () => {
    setImage(ProfileService.returnImage());
    if (UrlImage != Image) {
      ProfileService.handleChangeUrl(UrlImage);
      setImage(ProfileService.returnImage());
    }
    setSmShow(false);
  };
  const toggleImage = (type) => {
    if (type == "fileDisabled") {
      setfileDisabled(false);
      setUrlDisabled(true);
    }
    if (type == "UrlDisabled") {
      setUrlDisabled(false);
      setfileDisabled(true);
    }
  };
  const [show, setShow] = reactExports.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  reactExports.useEffect(() => {
    if (ProfileService.returnImage() != void 0) {
      setImage(ProfileService.returnImage());
    }
  }, [location]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Contact List",
        home: "Home",
        name: "Apps",
        fonticonsname: "Contact List"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "no-gutters", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-content-left main-content-left-contacts", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "All Contacts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-options", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "", to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "svg-icon",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M15 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                    opacity: ".3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "15", cy: "8", opacity: ".3", r: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z" })
              ]
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-contacts-list", id: "mainContactList", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SimpleBar, { style: { height: 480 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-contact-label", children: "A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item selected", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user online", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user12,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Arlena Soles" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "phone", children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user1,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Athena Manske" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user3,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Amalia Peng" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user3,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Anita Garza" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-contact-label", children: "B" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user4,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Bret Guadalupe" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user online", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user5,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Britney Labares" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user online", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user5,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Basil Ambrose" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-contact-label", children: "C" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user6,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Cinda Hope" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user online", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user6,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Chassidy Kerr" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user online", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user7,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Chau Weldy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-contact-label", children: "D" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user online", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user7,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Daniela Agrawal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user8,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Dori Daring" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-img-user online", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                alt: "",
                src: user8,
                className: "avatar avatar-md brround"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Dalton Gracia" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1-457-658-856" })
            ] })
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-content-body main-content-body-contacts", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-info-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-img-user brround", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "", src: Image, className: "w-100 h-100 brround" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", onClick: () => setSmShow(true), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M20 6h-4.05l-1.83-2H9.88L8.05 6H4v12h16V6zm-8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 6h4.05l1.83-2h4.24l1.83 2H20v12H4V6zm8 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Modal,
                {
                  size: "sm",
                  isOpen: smShow,
                  centered: true,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ModalHeader,
                      {
                        id: "example-modal-sizes-title-sm",
                        children: "Upload New Image"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => {
                        toggleImage("fileDisabled");
                      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "file", disabled: fileDisabled, onChange: (ele) => ProfileService.handleChange(ele) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => {
                        toggleImage("UrlDisabled");
                      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", disabled: UrlDisabled, onChange: (ele) => {
                        setUrlImage(ele.target.value);
                      } }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn-sm btn-primary", onClick: () => {
                        putImage();
                      }, children: "submit" }) })
                    ] }) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
                outPut.firstName == void 0 ? "John" : outPut.firstName,
                " ",
                outPut.lastName == void 0 ? "Thomson" : outPut.lastName
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: outPut.role == void 0 ? "App Developer" : outPut.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "nav", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "nav-link", href: "#", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-1",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.07 7.57C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5c.07.89.22 1.76.46 2.59L5.79 8.8z" })
                      ]
                    }
                  ),
                  " ",
                  "Call"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "nav-link", href: "#", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-1",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" })
                      ]
                    }
                  ),
                  " ",
                  "Message"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "nav-link", href: "#", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-1",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z",
                            opacity: ".3"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", opacity: ".3", r: "2" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" })
                      ]
                    }
                  ),
                  " ",
                  "Add to Group"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "nav-link", href: "#", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "svg-icon me-1",
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" })
                      ]
                    }
                  ),
                  " ",
                  "Block"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-contact-action", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "btn btn-white btn-svgs", onClick: handleShow, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M5 18.08V19h.92l9.06-9.06-.92-.92z",
                        opacity: ".3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z" })
                  ]
                }
              ),
              " ",
              "Edit ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " Contact" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: show, size: "lg", centered: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { children: "Profile Update" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Enter Full Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mb-3", type: "text", placeholder: "First Name", onChange: (ele) => {
                    setFirstName(ele.target.value);
                  } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mb-3", type: "text", placeholder: "Last Name", onChange: (ele) => {
                    setLastName(ele.target.value);
                  } })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Enter Designation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", placeholder: "Designation", onChange: (ele) => {
                    setRole(ele.target.value);
                  } })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: handleClose, children: "Close" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: () => {
                  handleClose();
                  putData();
                }, children: "Save Changes" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "btn btn-danger btn-svgs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "svg-icon",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 9h8v10H8z", opacity: ".3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" })
                  ]
                }
              ),
              "Delete ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Contact" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-contact-info-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-list pt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media p-4 mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-icon bg-light text-primary me-3 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-phone" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Work" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold fs-14", children: "+1 (425) 857 5463" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-icon bg-light text-primary me-3 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-phone" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Personal" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold fs-14", children: "+1 (547) 542 3568" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media p-4 border-top mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "media-body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-icon bg-light text-primary me-3 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-envelope" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Gmail Account" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold fs-14", children: "arlena.soles@gmail.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-icon bg-light text-primary me-3 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-envelope" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Other Account" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold fs-14", children: "me@spruko.com" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media p-4 border-top mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-icon bg-light text-primary me-3 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-map-marker" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Current Address" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-weight-semibold fs-14", children: "012 Dashboard Apartments, San Francisco, California 13245" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media p-4 border-top mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-icon bg-light text-primary me-3 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-map-marker" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Office Address" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-weight-semibold fs-14", children: [
                " ",
                "#302-51/5, Z Apartments, Dacid colony, San Francisco, USA"
              ] })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media mb-0 p-4 border-top mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "media-icon bg-light text-primary me-3 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-clock-o" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Call History" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "font-weight-semibold fs-14", href: "#", children: "Duration of last call: 2m 32sec" })
            ] })
          ] }) }) })
        ] }) })
      ] }) }) })
    ] }) })
  ] });
};
Contactlist02.propTypes = {};
Contactlist02.defaultProps = {};
export {
  Contactlist02 as default
};

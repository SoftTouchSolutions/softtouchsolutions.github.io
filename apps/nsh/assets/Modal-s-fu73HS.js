import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-CaNXbm0e.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, B as Button, v as Modal, w as ModalHeader, x as ModalBody, y as ModalFooter, F as Form, z as FormGroup, L as Label, I as Input } from "./index-Drmsz9hA.js";
import { C as CardTitle } from "./CardTitle-DTApbb8G.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-YSmGIrnj.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./TooltipPopoverWrapper-BZlnwhoL.js";
const Modals = (args) => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
  const elementRef4 = reactExports.useRef();
  const elementRef5 = reactExports.useRef();
  const elementRef6 = reactExports.useRef();
  const elementRef7 = reactExports.useRef();
  let CopytoClipBoard = (ele) => {
    var _a;
    let data = (_a = ele.current) == null ? void 0 : _a.innerText;
    navigator.clipboard.writeText(data);
    alert("Text copied successfully");
  };
  const [selectedOption, setSelectedOption] = reactExports.useState(null);
  const [modal, setModal] = reactExports.useState(false);
  const toggle = () => setModal(!modal);
  const [modal1, setModal1] = reactExports.useState(false);
  const toggle1 = () => setModal1(!modal1);
  const [modalsmall, setModalsmall] = reactExports.useState(false);
  const togglesmall = () => setModalsmall(!modalsmall);
  const [modallg, setModallg] = reactExports.useState(false);
  const togglelg = () => setModallg(!modallg);
  const [modalsuccess, setModalsuccess] = reactExports.useState(false);
  const togglesuccess = () => setModalsuccess(!modalsuccess);
  const [modaldanger, setModaldanger] = reactExports.useState(false);
  const toggledanger = () => setModaldanger(!modaldanger);
  const [modaldefault, setModaldefault] = reactExports.useState(false);
  const toggledefault = () => setModaldefault(!modaldefault);
  const [modallarge, setModallarge] = reactExports.useState(false);
  const togglelarge = () => setModallarge(!modallarge);
  const [modalGrid, setModalGrid] = reactExports.useState(false);
  const toggleGrid = () => setModalGrid(!modalGrid);
  const [modalFade, setModalFade] = reactExports.useState(false);
  const toggleFade = () => setModalFade(!modalFade);
  const [modalScroll, setModalScroll] = reactExports.useState(false);
  const toggleScroll = () => setModalScroll(!modalScroll);
  const [modalmdo, setModalmdo] = reactExports.useState(false);
  const togglemdo = () => setModalmdo(!modalmdo);
  const [modalfat, setModalfat] = reactExports.useState(false);
  const togglefat = () => setModalfat(!modalfat);
  const [modaljustme, setModaljustme] = reactExports.useState(false);
  const togglejustme = () => setModaljustme(!modaljustme);
  const [modaltooltip, setModaltooltip] = reactExports.useState(false);
  const toggletooltip = () => setModaltooltip(!modaltooltip);
  const [modalselect, setModalselect] = reactExports.useState(false);
  const toggleselect = () => setModalselect(!modalselect);
  const [modaltimeout, setModaltimeout] = reactExports.useState(false);
  const toggletimeout = () => setModaltimeout(!modaltimeout);
  const [modalVertically, setModalVertically] = reactExports.useState(false);
  const toggleVertically = () => setModalVertically(!modalVertically);
  const [modalgetbootstrap, setModalgetbootstrap] = reactExports.useState(false);
  const togglegetbootstrap = () => setModalgetbootstrap(!modalgetbootstrap);
  const [modalNest, setModalNest] = reactExports.useState(false);
  const [nestedModal, setNestedModal] = reactExports.useState(false);
  const [closeAll, setCloseAll] = reactExports.useState(false);
  const toggleNest = () => setModalNest(!modalNest);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };
  const options = [
    { value: "Firefox", label: "Firefox" },
    { value: "Chrome", label: "Chrome" },
    { value: "Safari", label: "Safari" },
    { value: "Opera", label: "Opera " },
    { value: "Internet Explorer", label: "Internet Explorer" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Modal",
        home: "Home",
        name: "Elements",
        fonticonsname: "Modal"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { lg: "12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "modal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Basic Modal" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-light border border-bottom-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-block pos-static", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-dialog", role: "document", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-content modal-content-demo", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "modal-title", children: "Message Preview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  "aria-label": "Close",
                  className: "btn-close",
                  "data-bs-dismiss": "modal",
                  type: "button"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-indigo",
                  type: "button",
                  children: "Save changes"
                }
              ),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  className: "btn btn-light",
                  type: "button",
                  children: "Close"
                }
              )
            ] })
          ] }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 bg-light border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", onClick: toggle, children: "View Live Demo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal, toggle, ...args, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle, children: "Message Preview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "",
                    className: "btn btn-indigo",
                    onClick: toggle,
                    children: "Save changes"
                  }
                ),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-light", onClick: toggle, children: "Colse" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "svg-icon me-2",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
              ]
            }
          ),
          " ",
          "Show Code",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
  <Button color="" className="btn btn-primary" onClick={toggle}>
    View Live Demo
  </Button>
  <Modal isOpen={modal} toggle={toggle} {...args}>
  <ModalHeader toggle={toggle}>Message Preview</ModalHeader>
    <ModalBody>
      <h6>Why We Use Electoral College, Not Popular Vote</h6>
      <p>
        It is a long established fact that a reader will be
        distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it
        has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
    </ModalBody>
    <ModalFooter>
      <Button
        color=""
        className="btn btn-indigo"
        onClick={toggle}
      >
        Save changes
      </Button>{" "}
      <Button color="" className="btn btn-light" onClick={toggle}>
        Colse
      </Button>
    </ModalFooter>
  </Modal>
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef);
              },
              className: "svg-icon",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "modal1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Small Modal" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-light border border-bottom-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-block pos-static", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-dialog modal-sm", role: "document", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-content modal-content-demo", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "modal-title", children: "Notice" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  "aria-label": "Close",
                  className: "btn-close",
                  "data-bs-dismiss": "modal",
                  type: "button"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer justify-content-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-indigo", type: "button", children: "Save changes" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-light", type: "button", children: "Close" })
            ] })
          ] }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 bg-light border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", onClick: toggle1, children: "View Live Demo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modal1, toggle: toggle1, size: "sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggle1, children: "Message " }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "",
                    className: "btn btn-indigo",
                    onClick: toggle1,
                    children: "Save changes"
                  }
                ),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "",
                    className: "btn btn-light",
                    onClick: toggle1,
                    children: "Colse"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "svg-icon me-2",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
              ]
            }
          ),
          " ",
          "Show Code",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "language-markup mb-0", children: [
            " ",
            `            
    <Button color="" className="btn btn-primary" onClick={toggle1}>
      View Live Demo
    </Button>
    <Modal isOpen={modal1} toggle={toggle1} size="sm">
    <ModalHeader toggle={toggle1}>Message </ModalHeader>
      <ModalBody>
        <h6>Why We Use Electoral College, Not Popular Vote</h6>
        <p>
          It is a long established fact that a reader will be
          distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
          color=""
          className="btn btn-indigo"
          onClick={toggle1}
        >
          Save changes
        </Button>{" "}
        <Button
          color=""
          className="btn btn-light"
          onClick={toggle1}
        >
          Colse
        </Button>
      </ModalFooter>
    </Modal>
                  `
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef2);
              },
              className: "svg-icon",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "modal2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Large Modal" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-light border border-bottom-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-block pos-static", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-dialog modal-lg", role: "document", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-content modal-content-demo", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "modal-title", children: "Message Preview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  color: "",
                  "aria-label": "Close",
                  className: "btn-close",
                  "data-bs-dismiss": "modal",
                  type: "button"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-indigo", type: "button", children: "Save changes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-light", type: "button", children: "Close" })
            ] })
          ] }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 bg-light border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", onClick: togglelg, children: "View Live Demo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modallg, toggle: togglelg, size: "lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: togglelg, children: "Message " }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "",
                    className: "btn btn-indigo",
                    onClick: togglelg,
                    children: "Save changes"
                  }
                ),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    color: "",
                    className: "btn btn-light",
                    onClick: togglelg,
                    children: "Colse"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "svg-icon me-2",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
              ]
            }
          ),
          " ",
          "Show Code",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Button color="" className="btn btn-primary" onClick={togglelg}>
      View Live Demo
    </Button>
    <Modal isOpen={modallg} toggle={togglelg} size="lg">
      <ModalHeader toggle={togglelg}>Message </ModalHeader>
      <ModalBody>
        <h6>Why We Use Electoral College, Not Popular Vote</h6>
        <p>
          It is a long established fact that a reader will be
          distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
          color=""
          className="btn btn-indigo"
          onClick={togglelg}
        >
          Save changes
        </Button>{" "}
        <Button
          color=""
          className="btn btn-light"
          onClick={togglelg}
        >
          Colse
        </Button>
      </ModalFooter>
    </Modal>
              ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef3);
              },
              className: "svg-icon",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "modal3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Success Alert Messages" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-light border border-bottom-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-block pos-static", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-dialog", role: "document", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body text-center p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                "aria-label": "Close",
                className: "btn-close",
                "data-bs-dismiss": "modal",
                type: "button"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check-circle fs-100 text-success lh-1 mb-4 d-inline-block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-success mb-4", children: "Congratulations!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 mx-4", children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-success pd-x-25",
                type: "button",
                children: "Continue"
              }
            )
          ] }) }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 bg-light border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-primary",
                onClick: togglesuccess,
                children: "View Live Demo"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modalsuccess, toggle: togglesuccess, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: togglesuccess, children: "Message " }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { className: "text-center p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-check-circle fs-100 text-success lh-1 mb-4 d-inline-block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-success mb-4", children: "Congratulations!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 mx-4", children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: togglesuccess,
                    color: "",
                    className: "btn btn-success pd-x-25",
                    type: "button",
                    children: "Continue"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "svg-icon me-2",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
              ]
            }
          ),
          " ",
          "Show Code",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: ` 
    <Button
      color=""
      className="btn btn-primary"
      onClick={togglesuccess}
    >
      View Live Demo
    </Button>
    <Modal isOpen={modalsuccess} toggle={togglesuccess}>
    <ModalHeader toggle={togglesuccess}>Message </ModalHeader>
      <ModalBody className="text-center p-4">
        <i className="fe fe-check-circle fs-100 text-success lh-1 mb-4 d-inline-block"></i>
        <h4 className="text-success mb-4">Congratulations!</h4>
        <p className="mb-4 mx-4">
          There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration.
        </p>
        <Button
          onClick={togglesuccess}
          color=""
          className="btn btn-success pd-x-25"
          type="button"
        >
          Continue
        </Button>
      </ModalBody>
    </Modal>` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef4);
              },
              className: "svg-icon",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "modal4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Warning Alert Messages" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-light border border-bottom-0 mg-t-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-block pos-static", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-dialog", role: "document", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body text-center p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                "aria-label": "Close",
                className: "btn-close",
                "data-bs-dismiss": "modal",
                type: "button"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x-circle fs-100 text-danger lh-1 mb-4 d-inline-block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-danger mb-20", children: "Error: Cannot process your entry!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 mx-4", children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                "aria-label": "Close",
                className: "btn btn-danger pd-x-25",
                type: "button",
                children: "Continue"
              }
            )
          ] }) }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 bg-light border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-primary",
                onClick: toggledanger,
                children: "View Live Demo"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modaldanger, toggle: toggledanger, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggledanger, children: "Message " }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { className: "text-center p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-x-circle fs-100 text-danger lh-1 mb-4 d-inline-block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-danger mb-20", children: "Error: Cannot process your entry!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 mx-4", children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: toggledanger,
                    color: "",
                    className: "btn btn-danger pd-x-25",
                    type: "button",
                    children: "Continue"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "svg-icon me-2",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
              ]
            }
          ),
          " ",
          "Show Code",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Button
      color=""
      className="btn btn-primary"
      onClick={toggledanger}
    >
      View Live Demo
    </Button>
    <Modal isOpen={modaldanger} toggle={toggledanger}>
    <ModalHeader toggle={toggledanger}>Message </ModalHeader>
      <ModalBody className="text-center p-4">
        <i className="fe fe-x-circle fs-100 text-danger lh-1 mb-4 d-inline-block"></i>
        <h4 className="text-danger mb-20">
          Error: Cannot process your entry!
        </h4>
        <p className="mb-4 mx-4">
          There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration.
        </p>
        <Button
          onClick={toggledanger}
          color=""
          className="btn btn-danger pd-x-25"
          type="button"
        >
          Continue
        </Button>
      </ModalBody>
    </Modal>
    ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef5);
              },
              className: "svg-icon",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { id: "modal5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Modal Styles" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: toggleGrid,
                color: "",
                className: "modal-effect btn btn-primary btn-block mb-3",
                children: "Grid Modal"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Modal,
              {
                isOpen: modalGrid,
                toggle: toggleGrid,
                ...args,
                size: "lg",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggleGrid, children: "Grid Modal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "6", children: [
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." })
                      ] }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "6", children: [
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the who loves toil and pain can procureor sit aspernatur system." })
                      ] }),
                      " "
                    ] }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "6", children: [
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure desires to obtain pain." })
                      ] }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "6", children: [
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat aut odit voluptatem." })
                      ] }),
                      " "
                    ] }),
                    " "
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggleGrid, children: "Save Changes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggleGrid, children: "Close" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                onClick: toggleFade,
                className: "modal-effect btn btn-primary btn-block mb-3",
                "data-bs-effect": "effect-slide-in-right",
                "data-bs-toggle": "modal",
                children: "FadeLess"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modalFade, fade: false, toggle: toggleFade, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggleFade, children: "Modal title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggleFade, children: "Save changes" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggleFade, children: "Cancel" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                onClick: toggleNest,
                className: "modal-effect btn btn-primary btn-block mb-3",
                "data-bs-effect": "effect-slide-in-bottom",
                "data-bs-toggle": "modal",
                children: "Nested"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modalNest, toggle: toggleNest, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggleNest, children: "Modal title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggleNested, children: "Show Nested Modal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Modal,
                  {
                    isOpen: nestedModal,
                    toggle: toggleNested,
                    onClosed: closeAll ? toggle : void 0,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggleNested, children: "Nested Modal title" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggleNested, children: "Done" }),
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggleAll, children: "All Done" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggleNest, children: "Save changes" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggleNest, children: "Cancel" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "modal-effect btn btn-primary btn-block mb-3",
                color: "",
                onClick: toggleScroll,
                children: "Scroll Modal"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Modal,
              {
                isOpen: modalScroll,
                toggle: toggleScroll,
                scrollable: true,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggleScroll, children: "Scrolling With Content Modal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggleScroll, children: "Save Changes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggleScroll, children: "Close" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "modal-effect btn btn-primary btn-block mb-3",
                onClick: togglemdo,
                children: "Open modal for @mdo"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modalmdo, onClick: togglemdo, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: togglemdo, children: "Modal heading" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Recipient:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", placeholder: "@mdo", autoFocus: true })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Message:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      className: "form-control",
                      rows: 3
                    }
                  )
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: togglemdo, children: "Close" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", children: "Send message" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "modal-effect btn btn-primary btn-block mb-3",
                color: "primary",
                onClick: togglefat,
                children: "Open modal for @fat"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modalfat, onClick: togglefat, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: togglefat, children: "Modal heading" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Recipient:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", placeholder: "@mdo", autoFocus: true })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Message:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      as: "textarea",
                      className: "form-control",
                      rows: 3
                    }
                  )
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: togglefat, children: "Close" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", children: "Send message" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "modal-effect btn btn-primary btn-block mb-3",
                color: "primary",
                onClick: togglegetbootstrap,
                children: "Open modal for @getbootstrap"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Modal,
              {
                isOpen: modalgetbootstrap,
                onClick: togglegetbootstrap,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: togglegetbootstrap, children: "Modal heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Recipient:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "email",
                          placeholder: " @getbootstrap",
                          autoFocus: true
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Message:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          className: "form-control",
                          as: "textarea",
                          rows: 3
                        }
                      )
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: togglegetbootstrap, children: "Close" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", children: "Send message" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "modal-effect btn btn-primary btn-block mb-3",
                "data-bs-effect": "effect-super-scaled",
                "data-bs-toggle": "modal",
                onClick: toggletooltip,
                children: "Tooltips Modal"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modaltooltip, onClick: toggletooltip, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggletooltip, children: "Modal heading" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { className: "", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "", id: "toltip", children: "Tooltip" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(UncontrolledTooltip, { placement: "right", target: "toltip", children: " " })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggletooltip, children: "Close" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggletooltip, children: "Send message" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "modal-effect btn btn-primary btn-block mb-3",
                color: "",
                onClick: toggleselect,
                children: "Select2 Modal"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modalselect, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggleselect, children: "Select2 Modal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Modal Body" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " SlectBox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StateManagedSelect$1,
                  {
                    defaultValue: selectedOption,
                    onChange: setSelectedOption,
                    options,
                    placeholder: "Chrome",
                    classNamePrefix: "Search"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggleselect, children: "Save Changes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggleselect, children: "Close" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "modal-effect btn btn-primary btn-block mb-3",
                color: "",
                onClick: toggleVertically,
                children: "View Demo"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Modal,
              {
                size: "lg",
                isOpen: modalVertically,
                onClick: toggleVertically,
                centered: true,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggleVertically, children: "Modal Heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Centered Modal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      className: "modal-effect  d-grid mb-3",
                      onClick: toggleVertically,
                      children: "Close"
                    }
                  ) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "modal-effect btn btn-primary btn-block mb-3",
                color: "",
                onClick: toggletimeout,
                children: "TimeOut"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Modal,
              {
                isOpen: modaltimeout,
                modalTransition: { timeout: 600 },
                backdropTransition: { timeout: 1e3 },
                toggle: toggletimeout,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggletimeout, children: "Modal Heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", onClick: toggletimeout, children: "Do Something" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: toggletimeout, children: "Cancel" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "4", xl: "3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "modal-effect btn btn-primary btn-block mb-3",
                color: "primary",
                onClick: togglejustme,
                children: "Just Me"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Modal,
              {
                isOpen: modaljustme,
                onClick: togglejustme,
                className: "effect-just-me",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: togglejustme, children: "Modal Heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { className: "", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "secondary", onClick: togglejustme, children: "Close" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "primary", children: "Send message" })
                  ] })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "svg-icon me-2",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
              ]
            }
          ),
          " ",
          "Show Code",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef6, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Button
      onClick={toggleGrid}
      color=""
      className="modal-effect btn btn-primary btn-block mb-3"
    >
      Grid Modal
    </Button>
    <Modal
      isOpen={modalGrid}
      toggle={toggleGrid}
      {...args}
      size="lg"
    >
      <ModalHeader toggle={toggleGrid}>Grid Modal</ModalHeader>
      <ModalBody>
        <Row>
          {" "}
          <Col md="6">
            {" "}
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta
              sunt explicabo.
            </p>
          </Col>{" "}
          <Col md="6">
            {" "}
            <p>
              But I must explain to you how all this mistaken idea
              of denouncing pleasure and praising pain was born
              and I will give you a complete account of the who
              loves toil and pain can procureor sit aspernatur
              system.
            </p>
          </Col>{" "}
        </Row>{" "}
        <Row>
          {" "}
          <Col md="6">
            {" "}
            <p>
              expound the actual teachings of the great explorer
              of the truth, the master-builder of human happiness.
              No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure desires to obtain pain.
            </p>
          </Col>{" "}
          <Col md="6">
            {" "}
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed
              quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat aut odit
              voluptatem.
            </p>
          </Col>{" "}
        </Row>{" "}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleGrid}>
          Save Changes
        </Button>
        <Button color="secondary" onClick={toggleGrid}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
                
                ` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              onClick: () => {
                CopytoClipBoard(elementRef6);
              },
              className: "svg-icon",
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
              ]
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Modal Sizes" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "highlighter-rouge", children: ".modal-sm " }),
          " or",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "highlighter-rouge", children: ".modal-lg " }),
          " to modal-dialog to increase and decrease the modal box sizes."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn btn-primary mt-3 me-1",
            onClick: togglesmall,
            children: "Small Modal"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modalsmall, toggle: togglesmall, size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: togglesmall, children: "Message Preview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-secondary",
                onClick: togglesmall,
                children: "Colse"
              }
            ),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-primary",
                onClick: togglesmall,
                children: "Save changes"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn btn-secondary mt-3 me-1",
            onClick: toggledefault,
            children: "Default Modal"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modaldefault, toggle: toggledefault, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: toggledefault, children: "Message Preview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-secondary",
                onClick: toggledefault,
                children: "Colse"
              }
            ),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-primary",
                onClick: toggledefault,
                children: "Save changes"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            color: "",
            className: "btn btn-info mt-3 me-1",
            onClick: togglelarge,
            children: "Large Modal"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { isOpen: modallarge, toggle: togglelarge, size: "lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { toggle: togglelarge, children: "Message Preview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Why We Use Electoral College, Not Popular Vote" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-secondary",
                onClick: togglelarge,
                children: "Colse"
              }
            ),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "",
                className: "btn btn-primary",
                onClick: togglelarge,
                children: "Save changes"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "html-code", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "svg-icon me-2",
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" })
            ]
          }
        ),
        " ",
        "Show Code",
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight mb-0", id: "element7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef7, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup mb-0", children: `
    <Button
      color=""
      className="btn btn-primary mt-3 me-1"
      onClick={togglesmall}
    >
      Small Modal
    </Button>
    <Modal isOpen={modalsmall} toggle={togglesmall} size="sm">
      <ModalHeader toggle={togglesmall}>Message Preview</ModalHeader>
      <ModalBody>
        <h6>Why We Use Electoral College, Not Popular Vote</h6>
        <p>
          It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to
          using 'Content here, content here', making it look like
          readable English.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
          color=""
          className="btn btn-secondary"
          onClick={togglesmall}
        >
          Colse
        </Button>{" "}
        <Button
          color=""
          className="btn btn-primary"
          onClick={togglesmall}
        >
          Save changes
        </Button>
      </ModalFooter>
    </Modal>
                  ` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clipboard-icon", "data-clipboard-target": "#element7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            onClick: () => {
              CopytoClipBoard(elementRef7);
            },
            className: "svg-icon",
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7H8v14h11v-9h-5z", opacity: ".3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" })
            ]
          }
        ) })
      ] })
    ] }) }) })
  ] });
};
Modals.propTypes = {};
Modals.defaultProps = {};
export {
  Modals as default
};

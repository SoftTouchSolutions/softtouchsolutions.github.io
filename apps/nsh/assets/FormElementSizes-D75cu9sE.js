import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, I as Input, L as Label } from "./index-PSM4fvJQ.js";
import { C as CardTitle } from "./CardTitle-BC9vGAnP.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const FormElementSizes = () => {
  const elementRef = reactExports.useRef();
  const elementRef2 = reactExports.useRef();
  const elementRef3 = reactExports.useRef();
  const elementRef4 = reactExports.useRef();
  const elementRef5 = reactExports.useRef();
  let CopytoClipBoard = (ele) => {
    var _a;
    let data = (_a = ele.current) == null ? void 0 : _a.innerText;
    navigator.clipboard.writeText(data);
    alert("Text copied successfully");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Form Sizes",
        home: "Home",
        name: "Forms",
        fonticonsname: "Form Sizes"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", className: "mb-0 ", children: "Form Element Sizes" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Form control small Size add class",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "highlighter-rouge", children: ".form-control-sm" }),
                " to",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "highlighter-rouge", children: ".form-control" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  className: "form-control form-control-sm",
                  name: "input"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Form Control Medium Size",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "highlighter-rouge", children: ".form-control" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", name: "input" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Form control small Size add class",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "highlighter-rouge", children: ".form-control-lg" }),
                " ",
                "to ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "highlighter-rouge", children: ".form-control" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  className: "form-control form-control-lg",
                  name: "input"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight", id: "Element", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup", children: `
   <Row>
     <Col xl="12">
       <p>
         Form control small Size add class{" "}
         <code className="highlighter-rouge">
           .form-control-sm
         </code>{" "}
         to{" "}
         <code className="highlighter-rouge">
           .form-control
         </code>
       </p>
       <div className="mb-3">
         <Input
           type="text"
           className="form-control form-control-sm"
           name="input"
         />
       </div>
     </Col>
     <Col xl="12">
       <div className="mb-3">
         <Label>
           Form Control Medium Size{" "}
           <code className="highlighter-rouge">
             .form-control
           </code>
         </Label>
         <Input
           type="text"
           className="form-control"
           name="input"
         />
       </div>
     </Col>
     <Col xl="12">
       <div className="mb-3">
         <p>
           Form control small Size add class{" "}
           <code className="highlighter-rouge">
             .form-control-lg
           </code>{" "}
           to{" "}
           <code className="highlighter-rouge">
             .form-control
           </code>
         </p>
         <Input
           type="text"
           className="form-control form-control-lg"
           name="input"
         />
       </div>
     </Col>
   </Row>
                ` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "clipboard-icon text-white-50",
                "data-clipboard-target": "#Element",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                )
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", className: "mb-0 ", children: "Checkbox Sizes" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 m-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label mb-4", children: "Checkboxes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-controls-stacked", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox1",
                      value: "option1",
                      defaultChecked: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      value: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox3",
                      value: "option3",
                      disabled: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option Disabled" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox4",
                      value: "option4",
                      defaultChecked: true,
                      disabled: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option Disabled Checked" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", className: "mt-4 mt-xl-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 m-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label mb-4", children: "Checkboxes Medium Sizes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-controls-stacked", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox custom-control-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox1",
                      value: "option1",
                      defaultChecked: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-md", children: "Option 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox custom-control-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      value: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-md", children: "Option 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox custom-control-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox3",
                      value: "option3",
                      disabled: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-md", children: "Option Disabled" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox custom-control-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox4",
                      value: "option4",
                      defaultChecked: true,
                      disabled: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-md", children: "Option Disabled Checked" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", className: "mt-4 mt-xl-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 m-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label mb-4", children: "Checkboxes Large Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-controls-stacked", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox custom-control-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox1",
                      value: "option1",
                      defaultChecked: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-lg", children: "Option 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox custom-control-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox2",
                      value: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-lg", children: "Option 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox custom-control-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox3",
                      value: "option3",
                      disabled: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-lg", children: "Option Disabled" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox custom-control-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "checkbox",
                      className: "custom-control-input",
                      name: "example-checkbox4",
                      value: "option4",
                      defaultChecked: true,
                      disabled: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-lg", children: "Option Disabled Checked" })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight", id: "Element1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup", children: `
   <Row>
     <Col xl="4">
       <div className="mb-3 m-0">
         <div className="form-label mb-4">Checkboxes</div>
         <div className="custom-controls-stacked">
           <Label className="custom-control custom-checkbox">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox1"
               value="option1"
               defaultChecked
             />
             <span className="custom-control-label">
               Option 1
             </span>
           </Label>
           <Label className="custom-control custom-checkbox">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox2"
               value="option2"
             />
             <span className="custom-control-label">
               Option 2
             </span>
           </Label>
           <Label className="custom-control custom-checkbox">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox3"
               value="option3"
               disabled
             />
             <span className="custom-control-label">
               Option Disabled
             </span>
           </Label>
           <Label className="custom-control custom-checkbox">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox4"
               value="option4"
               defaultChecked
               disabled
             />
             <span className="custom-control-label">
               Option Disabled Checked
             </span>
           </Label>
         </div>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3 m-0">
         <div className="form-label mb-4">
           Checkboxes Medium Sizes
         </div>
         <div className="custom-controls-stacked">
           <Label className="custom-control custom-checkbox custom-control-md">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox1"
               value="option1"
               defaultChecked
             />
             <span className="custom-control-label custom-control-label-md">
               Option 1
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-md">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox2"
               value="option2"
             />
             <span className="custom-control-label custom-control-label-md">
               Option 2
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-md">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox3"
               value="option3"
               disabled
             />
             <span className="custom-control-label custom-control-label-md">
               Option Disabled
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-md">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox4"
               value="option4"
               defaultChecked
               disabled
             />
             <span className="custom-control-label custom-control-label-md">
               Option Disabled Checked
             </span>
           </Label>
         </div>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3 m-0">
         <div className="form-label mb-4">
           Checkboxes Large Size
         </div>
         <div className="custom-controls-stacked">
           <Label className="custom-control custom-checkbox custom-control-lg">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox1"
               value="option1"
               defaultChecked
             />
             <span className="custom-control-label custom-control-label-lg">
               Option 1
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-lg">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox2"
               value="option2"
             />
             <span className="custom-control-label custom-control-label-lg">
               Option 2
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-lg">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox3"
               value="option3"
               disabled
             />
             <span className="custom-control-label custom-control-label-lg">
               Option Disabled
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-lg">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox4"
               value="option4"
               defaultChecked
               disabled
             />
             <span className="custom-control-label custom-control-label-lg">
               Option Disabled Checked
             </span>
           </Label>
         </div>
       </div>
     </Col>
   </Row>
                ` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "clipboard-icon text-white-50",
                "data-clipboard-target": "#Element1",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                )
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", className: "mb-0 ", children: "Radio Sizes" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label", children: "Radios" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-controls-stacked", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios",
                      value: "option1",
                      defaultChecked: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios",
                      value: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios",
                      value: "option3",
                      disabled: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option Disabled" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios02",
                      value: "option4",
                      disabled: true,
                      defaultChecked: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Option Disabled Checked" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", className: "mt-4 mt-xl-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label", children: "Medium Radios" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-controls-stacked", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio custom-control-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios1",
                      value: "option1",
                      defaultChecked: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-md", children: "Option 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio custom-control-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios1",
                      value: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-md", children: "Option 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio custom-control-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios1",
                      value: "option3",
                      disabled: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-md", children: "Option Disabled" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio custom-control-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios12",
                      value: "option4",
                      disabled: true,
                      defaultChecked: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-md", children: "Option Disabled Checked" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", className: "mt-4 mt-xl-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-label", children: "Large Radios" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-controls-stacked", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio custom-control-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios2",
                      value: "option1",
                      defaultChecked: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-lg", children: "Option 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio custom-control-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios2",
                      value: "option2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-lg", children: "Option 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio custom-control-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios2",
                      value: "option3",
                      disabled: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-lg", children: "Option Disabled" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio custom-control-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "radio",
                      className: "custom-control-input",
                      name: "example-radios22",
                      value: "option4",
                      disabled: true,
                      defaultChecked: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label custom-control-label-lg", children: "Option Disabled Checked" })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight", id: "Element2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup", children: `                 
    <Row>
      <Col xl="4">
        <div className="mb-3 ">
          <div className="form-label">Radios</div>
          <div className="custom-controls-stacked">
            <Label className="custom-control custom-radio">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios"
                value="option1"
                defaultChecked
              />
              <span className="custom-control-label">
                Option 1
              </span>
            </Label>
            <Label className="custom-control custom-radio">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios"
                value="option2"
              />
              <span className="custom-control-label">
                Option 2
              </span>
            </Label>
            <Label className="custom-control custom-radio">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios"
                value="option3"
                disabled
              />
              <span className="custom-control-label">
                Option Disabled
              </span>
            </Label>
            <Label className="custom-control custom-radio">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios02"
                value="option4"
                disabled
                defaultChecked
              />
              <span className="custom-control-label">
                Option Disabled Checked
              </span>
            </Label>
          </div>
        </div>
      </Col>
      <Col xl="4" className="mt-4 mt-xl-0">
        <div className="mb-3 ">
          <div className="form-label">Medium Radios</div>
          <div className="custom-controls-stacked">
            <Label className="custom-control custom-radio custom-control-md">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios1"
                value="option1"
                defaultChecked
              />
              <span className="custom-control-label custom-control-label-md">
                Option 1
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-md">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios1"
                value="option2"
              />
              <span className="custom-control-label custom-control-label-md">
                Option 2
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-md">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios1"
                value="option3"
                disabled
              />
              <span className="custom-control-label custom-control-label-md">
                Option Disabled
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-md">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios12"
                value="option4"
                disabled
                defaultChecked
              />
              <span className="custom-control-label custom-control-label-md">
                Option Disabled Checked
              </span>
            </Label>
          </div>
        </div>
      </Col>
      <Col xl="4" className="mt-4 mt-xl-0">
        <div className="mb-3 ">
          <div className="form-label">Large Radios</div>
          <div className="custom-controls-stacked">
            <Label className="custom-control custom-radio custom-control-lg">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios2"
                value="option1"
                defaultChecked
              />
              <span className="custom-control-label custom-control-label-lg">
                Option 1
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-lg">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios2"
                value="option2"
              />
              <span className="custom-control-label custom-control-label-lg">
                Option 2
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-lg">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios2"
                value="option3"
                disabled
              />
              <span className="custom-control-label custom-control-label-lg">
                Option Disabled
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-lg">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios22"
                value="option4"
                disabled
                defaultChecked
              />
              <span className="custom-control-label custom-control-label-lg">
                Option Disabled Checked
              </span>
            </Label>
          </div>
        </div>
      </Col>
    </Row>
    ` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "clipboard-icon text-white-50",
                "data-clipboard-target": "#Element2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                )
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", className: "mb-0 ", children: "Check Box Sizes Switches" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Check Box" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "checkbox",
                    name: "form-switch-checkbox1",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Check Box" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "checkbox",
                    name: "form-switch-checkbox1",
                    className: "form-switch-input",
                    defaultChecked: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-lg" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Check Box" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "checkbox",
                    name: "form-switch-checkbox1",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-xl" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "4", className: "mt-4 mt-xl-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Check Box" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "checkbox",
                    name: "form-switch-checkbox2",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator custom-square" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Check Box" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "checkbox",
                    name: "form-switch-checkbox2",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-lg custom-square" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Check Box" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "checkbox",
                    name: "form-switch-checkbox2",
                    className: "form-switch-input",
                    defaultChecked: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-xl custom-square" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "4", className: "mt-4 mt-xl-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Check Box" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "checkbox",
                    name: "form-switch-checkbox3",
                    className: "form-switch-input",
                    defaultChecked: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator custom-radius" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Check Box" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "checkbox",
                    name: "form-switch-checkbox3",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-lg custom-radius" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Check Box" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "checkbox",
                    name: "form-switch-checkbox3",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-xl custom-radius" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight", id: "Element3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup", children: `
   <Row>
     <Col xl="4">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl"></span>
         </Label>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator custom-square"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg custom-square"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl custom-square"></span>
         </Label>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator custom-radius"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg custom-radius"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl custom-radius"></span>
         </Label>
       </div>
     </Col>
   </Row>
                ` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "clipboard-icon text-white-50",
                "data-clipboard-target": "#Element3",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                )
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", className: "mb-0 ", children: "Radio Button Sizes Switches" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Radio Buttons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "form-switch-radio",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Radio Buttons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "form-switch-radio",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-lg" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Radio Buttons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "form-switch-radio",
                    className: "form-switch-input",
                    defaultChecked: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-xl" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "4", className: "mt-4 mt-xl-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Radio Buttons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "form-switch-radio1",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator custom-square" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Radio Buttons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "form-switch-radio1",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-lg custom-square" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Radio Buttons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "form-switch-radio1",
                    className: "form-switch-input",
                    defaultChecked: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-xl custom-square" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "4", className: "mt-4 mt-xl-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Radio Buttons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "form-switch-radio2",
                    className: "form-switch-input",
                    defaultChecked: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator custom-radius" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Radio Buttons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "form-switch-radio2",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-lg custom-radius" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "form-switch", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-description me-2", children: "Radio Buttons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "radio",
                    name: "form-switch-radio2",
                    className: "form-switch-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "form-switch-indicator form-switch-indicator-xl custom-radius" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "highlight", id: "Element4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { ref: elementRef5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "language-markup", children: `
  <Row>
     <Col xl="4">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio"
             className="form-switch-input"
           />
           <span className="form-switch-indicator"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl"></span>
         </Label>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio1"
             className="form-switch-input"
           />
           <span className="form-switch-indicator custom-square"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio1"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg custom-square"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio1"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl custom-square"></span>
         </Label>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio2"
             className="form-switch-input"
           />
           <span className="form-switch-indicator custom-radius"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio2"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg custom-radius"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio2"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl custom-radius"></span>
         </Label>
       </div>
     </Col>
   </Row>
                ` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "clipboard-icon text-white-50",
                "data-clipboard-target": "#Element4",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                )
              }
            )
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
FormElementSizes.propTypes = {};
FormElementSizes.defaultProps = {};
export {
  FormElementSizes as default
};

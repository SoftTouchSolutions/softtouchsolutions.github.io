import { j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { v as PageHeaderstyle, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, L as Label, I as Input, T as Table, b as Link } from "./index-DRovfVAv.js";
import { C as CardFooter } from "./CardFooter-Df6sAJQc.js";
import { C as CardTitle } from "./CardTitle-Bk04aMpl.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const EditInvoice = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaderstyle,
    {
      title: "Invoice Edit",
      home: "Home",
      Pages: "Pages",
      elements: "Invoice",
      name: "Invoice Edit"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Edit Invoice" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Invoice Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "form-control",
              placeholder: "Invoice title",
              defaultValue: "Invoice"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              className: "form-control",
              rows: "4",
              placeholder: "Subject of Invoice",
              defaultValue: "Hi Jessica Allen,This is the receipt for a payment of $450.00 (USD) for your works"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Payment Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "form-control",
              placeholder: "Payment Number",
              defaultValue: "23543"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Payment Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "form-control",
              placeholder: "Payment Date"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Bill To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              className: "form-control",
              rows: "4",
              placeholder: "Bill To",
              defaultValue: "Street Address, State, City, Region, Postal Code, ctr@example.com"
            }
          )
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table nowrap text-nowrap border mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "PRODUCT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-40", children: "DESCRIPTION" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "QNTY" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "UNIT PRICE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "AMOUNT" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "form-control",
              placeholder: "",
              type: "text",
              defaultValue: "Logo Creation"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: "1",
              className: "form-control",
              defaultValue: "Logo and business cards design"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "form-control",
              placeholder: "",
              type: "text",
              defaultValue: "2"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "form-control",
              placeholder: "",
              type: "text",
              defaultValue: "$60.00"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "form-control",
              placeholder: "",
              type: "text",
              defaultValue: "$120.00"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "btn btn-light", to: "#", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-plus" }),
            " Add Product"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", {})
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { md: "12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Vat Rate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "form-control",
            placeholder: "Vat Rate",
            type: "text",
            defaultValue: "20%"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "card-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { className: "col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-success me-1", to: "#", children: "Save" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-light me-1", to: "#", children: "Cancel" })
    ] }) }) })
  ] }) }) })
] });
EditInvoice.propTypes = {};
EditInvoice.defaultProps = {};
export {
  EditInvoice as default
};

import { r as reactExports, a as React, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { af as connect_default, s as PageHeaderstyle, R as Row, C as Col, g as Card, h as CardBody, I as Input, B as Button, n as CardHeader, L as Label, z as FormGroup, b as Link, G as Pagination, H as PaginationItem, J as PaginationLink } from "./index-BtyINLIY.js";
import { C as CardTitle } from "./CardTitle-BLcyN_Gi.js";
import { A as AddToCart } from "./Action-jflwqxF-.js";
import { P as PODUCTDATA } from "./data-CEwbOx7G.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-CaNXbm0e.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./4-C6YgBNXp.js";
import "./2-D-V5ih7N.js";
import "./5-Bf8W3P_a.js";
const Products = ({ local_varaiable, AddToCart: AddToCart2 }) => {
  const Occasionoptions = [
    { value: "Party Wear", label: "Party Wear" },
    { value: "Casual Wear", label: "Casual Wear" },
    { value: "Wedding", label: "Wedding" },
    { value: "Festive", label: "Festive" }
  ];
  const [occasionOption, setOccasionOption] = reactExports.useState(null);
  const Typeoptions = [
    { value: "Western wear", label: "Western wear" },
    { value: "Foot wear", label: "Foot wear" },
    { value: "Top wear", label: "Top wear" },
    { value: "Bootom wear", label: "Bootom wear" },
    { value: "Beauty Groming", label: "Beauty Groming" },
    { value: "Accessories", label: "Accessories" }
  ];
  const [typeOption, setTypeOption] = reactExports.useState(null);
  const [allData, setAllData] = React.useState(PODUCTDATA);
  let allElement2 = [];
  let myfunction = (InputData) => {
    let allElement;
    for (allElement of PODUCTDATA) {
      if (allElement.title[0] == " ") {
        allElement.title = allElement.title.trim();
      }
      if (allElement.title.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.title.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }
    }
    setAllData(allElement2);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "Products", home: "Home", Pages: "Pages", elements: "E-commerce", name: "Products" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "row-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { sm: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", onChange: (ele) => {
            myfunction(ele.target.value);
          }, className: "form-control", placeholder: "Search ..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", type: "button", children: "Search" })
        ] }) }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Categories & Filters" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-controls-stacked", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", name: "example-checkbox1", value: "option1", defaultChecked: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Men" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", name: "example-checkbox2", value: "option2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Women" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", name: "example-checkbox2", value: "option2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Kids" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-checkbox", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "checkbox", className: "custom-control-input", name: "example-checkbox2", value: "option2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Others" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Category" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label tx-medium", children: "Occasion" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: occasionOption,
                  onChange: setOccasionOption,
                  options: Occasionoptions,
                  placeholder: "--Select--",
                  classNamePrefix: "Search"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "form-group mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label tx-medium", children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StateManagedSelect$1,
                {
                  defaultValue: typeOption,
                  onChange: setTypeOption,
                  options: Typeoptions,
                  placeholder: "--Select--",
                  classNamePrefix: "Search"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Color" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", value: "azure", className: "colorinput-input", defaultChecked: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-primary me-1" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", value: "indigo", className: "colorinput-input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-indigo me-1" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", value: "teal", className: "colorinput-input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-teal me-1" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", value: "pink", className: "colorinput-input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-pink me-1" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", value: "red", className: "colorinput-input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-danger me-1" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", value: "orange", className: "colorinput-input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-orange me-1" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "color", type: "checkbox", value: "yellow", className: "colorinput-input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-warning" })
            ] }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Price" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: "form-group mb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", className: "custom-control-input", name: "example-radios", value: "option1", defaultChecked: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Under $25" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", className: "custom-control-input", name: "example-radios", value: "option2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "$25 to $50" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", className: "custom-control-input", name: "example-radios", value: "option2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "$50 to $100" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "custom-control custom-radio", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "radio", className: "custom-control-input", name: "example-radios", value: "option2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "custom-control-label", children: "Other (specify)" })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: allData.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", lg: "6", sm: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "item-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: list.pic, alt: "img", className: "img-fluid w-100 product-img" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "px-0 ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-half-o text-yellow fs-16" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-o text-yellow fs-16" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "#", children: [
                    " (",
                    list.item,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "shop-title", children: list.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cardprice", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type--strikethrough", children: list.discount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: list.price })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-top p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `pages/ecommerce/productdetails/${list.id}`, className: "btn btn-light btn-svgs mt-1 mb-1 me-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z" })
              ] }),
              " View More"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `pages/ecommerce/shoppingcart`, onClick: () => {
              AddToCart2(list.id);
            }, className: "btn btn-primary btn-svgs mt-1 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 11l2.76-5H6.16l2.37 5z", opacity: ".3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" })
              ] }),
              " Add to cart"
            ] })
          ] })
        ] }) }, Math.random())) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex justify-content-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item page-prev", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", tabIndex: "-1", children: "Prev" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item page-next", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", href: "#", children: "Next" }) })
        ] }) })
      ] })
    ] })
  ] });
};
Products.propTypes = {};
Products.defaultProps = {};
const mapStateToProps = (state) => ({
  local_varaiable: state
});
const Products_default = connect_default(mapStateToProps, { AddToCart })(Products);
export {
  Products_default as default
};

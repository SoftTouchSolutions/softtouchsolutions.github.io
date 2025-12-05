import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { af as connect_default, s as PageHeaderstyle, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, T as Table, b as Link, I as Input, B as Button } from "./index-Dr-4baW5.js";
import { C as CardTitle } from "./CardTitle-BjRFrU5i.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-Dhj_EzA1.js";
import { P as ProductReduxData, A as AddToCart } from "./Action-jflwqxF-.js";
import { p as product1, a as product9, b as product4 } from "./4-C6YgBNXp.js";
import { p as product2 } from "./2-D-V5ih7N.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./TooltipPopoverWrapper--vPxev6P.js";
const product6 = "/apps/nsh/assets/6-BpBOdD4L.jpg";
const cartData = [
  {
    pic: product1,
    title: "Flower Pot",
    items: "1",
    price: "$ 122.21",
    subprice: "$ 122.21"
  },
  {
    pic: product2,
    title: "Office Chair",
    items: "2",
    price: "$ 20.63",
    subprice: "$ 41.26"
  },
  {
    pic: product9,
    title: "Bracelet",
    items: "1",
    price: "$ 40.63",
    subprice: "$ 40.63"
  },
  {
    pic: product4,
    title: "Cup",
    items: "1",
    price: "$ 60.63",
    subprice: "$ 60.63"
  },
  {
    pic: product6,
    title: "Headset",
    items: "1",
    price: "$ 63,830.43",
    subprice: "$45,530.43"
  }
];
const ShoppingCart = ({ local_varaiable, AddToCart: AddToCart2, ProductReduxData: ProductReduxData2 }) => {
  const [FiltercartData, setCartData] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (local_varaiable == void 0) {
      setCartData(cartData);
    } else if (local_varaiable.length == 0) {
      setCartData(cartData);
    } else {
      setCartData(local_varaiable);
    }
  }, [local_varaiable]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "Shopping Cart", home: "Home", Pages: "Pages", elements: "E-commerce", name: "Shopping Cart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { lg: "12", md: "12", sm: "12", className: "bootstrap snippets", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Shopping Cart" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table table-bordered text-nowrap border-top", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Product Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Quantity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Unit Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Sub Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-5" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            FiltercartData.map((idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex w-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: idx.pic, alt: "img", title: "", className: "w-7 h-7 br-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0 mt-4 font-weight-bold ms-4", children: idx.title })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: idx.items }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "price", children: idx.price }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: idx.price }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "remove_cart", "data-bs-toggle": "tooltip", "data-bs-placement": "top", id: "delete", "data-bs-original-title": "Remove", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 9h8v10H8z", opacity: ".3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  UncontrolledTooltip,
                  {
                    placement: "top",
                    target: "delete",
                    children: "Remove"
                  }
                )
              ] })
            ] }, Math.random())),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "3", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "total h4 mb-0 font-weight-bold", colSpan: "2", children: "$45,795.16" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", className: "form-control", placeholder: "Apply Coupon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "", className: "btn btn-primary", type: "button", children: "Apply" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " float-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `${"/apps/nsh/"}pages/ecommerce/products`, className: "btn btn-info mt-2 me-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-arrow-left" }),
            " Continue Shopping"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/apps/nsh/"}pages/ecommerce/shoppingcart`, className: "btn btn-primary mt-2 me-1", children: "Update Cart" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `${"/apps/nsh/"}pages/ecommerce/checkout`, className: "btn btn-secondary mt-2 me-1", children: [
            "Checkout ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fe fe-arrow-right" })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
};
ShoppingCart.propTypes = {};
ShoppingCart.defaultProps = {};
const mapStateToProps = (state) => ({
  local_varaiable: state
});
const ShoppingCart_default = connect_default(mapStateToProps, { AddToCart, ProductReduxData })(ShoppingCart);
export {
  ShoppingCart_default as default
};

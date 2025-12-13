import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { af as connect_default, s as PageHeaderstyle, R as Row, C as Col, g as Card, h as CardBody, b as Link } from "./index-Drmsz9hA.js";
import { C as CardFooter } from "./CardFooter-D9Bpfg9x.js";
import { C as CardTitle } from "./CardTitle-DTApbb8G.js";
import { P as ProductReduxData, A as AddToCart } from "./Action-jflwqxF-.js";
import { P as PODUCTDATA } from "./data-CEwbOx7G.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
import "./4-C6YgBNXp.js";
import "./2-D-V5ih7N.js";
import "./5-Bf8W3P_a.js";
const Wishlist = ({ local_varaiable, AddToCart: AddToCart2, ProductReduxData: ProductReduxData2 }) => {
  const [show, setshow] = reactExports.useState(PODUCTDATA);
  function handleRemove(id) {
    const RemoveData = show.filter((idx) => idx.id !== id);
    setshow(RemoveData);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "Wishlist", home: "Home", Pages: "Pages", elements: "E-commerce", name: "Wishlist" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: show.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "3", lg: "6", sm: "6", className: "alert mb-0 py-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "item-card", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: list.pric })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `pages/ecommerce/shoppingcart`, onClick: () => {
          AddToCart2(list.id);
        }, className: "btn btn-primary btn-svgs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 11l2.76-5H6.16l2.37 5z", opacity: ".3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add to cart" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "#", onClick: () => {
          handleRemove(list.id);
        }, className: "btn btn-light btn-svgs", "data-bs-dismiss": "alert", "aria-label": "Close", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "svg-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Remove" })
        ] })
      ] }) })
    ] }) }, Math.random())) })
  ] });
};
Wishlist.propTypes = {};
Wishlist.defaultProps = {};
const mapStateToProps = (state) => ({
  local_varaiable: state
});
const Wishlist_default = connect_default(mapStateToProps, { AddToCart, ProductReduxData })(Wishlist);
export {
  Wishlist_default as default
};

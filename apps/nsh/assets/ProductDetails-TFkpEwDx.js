import { r as reactExports, j as jsxRuntimeExports } from "./mui-6YGer9Nu.js";
import { P as PODUCTDATA, p as product7 } from "./data-CEwbOx7G.js";
import { p as product1, a as product9 } from "./4-C6YgBNXp.js";
import { af as connect_default, ag as useParams, v as PageHeaderstyle, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, b as Link, L as Label, I as Input, T as Table } from "./index-zbnKGqDS.js";
import { C as CardFooter } from "./CardFooter-DqGMT4Rw.js";
import { C as CardTitle } from "./CardTitle-5XhNrNGW.js";
import { A as AddToCart } from "./Action-jflwqxF-.js";
import "./vendor-DcOWwNOt.js";
import "./2-D-V5ih7N.js";
import "./5-Bf8W3P_a.js";
import "./utils-pMlYcaaZ.js";
const ProductDetails = ({ local_varaiable, AddToCart: AddToCart2 }) => {
  let { id } = useParams();
  const [defaultData, setdefaultData] = reactExports.useState();
  reactExports.useEffect(() => {
    if (id != void 0) {
      let data = PODUCTDATA.filter((ele) => {
        return ele.id == id;
      });
      setdefaultData(data[0]);
    } else {
      setdefaultData({
        id: Math.random(),
        pic: product1,
        imges: [
          { img: product7 }
        ]
      });
    }
  }, [id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeaderstyle, { title: "Products Details", home: "Home", Pages: "Pages", elements: "E-commerce", name: "Products Details" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", className: " wrapper wrapper-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "ibox", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: "Items in your cart" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xxl: "4", lg: "12", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                className: "mx-auto d-block br-5 h-100",
                src: defaultData && defaultData.pic,
                alt: "image"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xxl: "8", lg: "12", md: "12", className: "mt-4 mt-xl-0 mt-2 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ibox-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "text-navy", children: defaultData && defaultData.title }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-warning" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-warning" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-warning" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-warning" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-o text-warning" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-16 ms-3", children: [
                  "3.5 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "(45 Reviews)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: "Description lists" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-weight-bold", children: [
                defaultData && defaultData.price,
                /* @__PURE__ */ jsxRuntimeExports.jsx("del", { className: "h5 font-weight-normal", children: defaultData && defaultData.discount })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label fs-16", children: "Select Color" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput me-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        name: "color",
                        type: "radio",
                        value: "red",
                        className: "colorinput-input",
                        defaultChecked: ""
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-red" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput me-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        name: "color",
                        type: "radio",
                        value: "indigo",
                        className: "colorinput-input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-indigo" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput me-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        name: "color",
                        type: "radio",
                        value: "purple",
                        className: "colorinput-input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-purple" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "colorinput me-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        name: "color",
                        type: "radio",
                        value: "pink",
                        className: "colorinput-input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "colorinput-color bg-pink" })
                  ] })
                ] })
              ] })
            ] }) }) }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mt-4 mb-4", children: "Product Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table table-striped table-bordered", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "Model:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Model 2.3" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "color:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "red" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "features" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "New Model ,High Sales" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "Advanced" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Feel Comfortability " })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "ibox-content text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "btn-list", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `pages/ecommerce/shoppingcart`, className: "btn btn-light", children: "Buy Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `pages/ecommerce/shoppingcart`, className: "btn btn-primary", children: "Add to cart" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "item-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product7,
              alt: "img",
              className: "img-fluid w-100 product-img"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "px-0 ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-half text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-o text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: " (48)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "shop-title", children: "Flower Pot" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cardprice", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type--strikethrough", children: "$750" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$974" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-top p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `pages/ecommerce/productdetails`,
              className: "btn btn-light btn-svgs mt-1 mb-1 me-2",
              children: [
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
                          d: "M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z",
                          opacity: ".3"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z" })
                    ]
                  }
                ),
                " ",
                "View More"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `pages/ecommerce/shoppingcart`, className: "btn btn-primary btn-svgs mt-1 mb-1", children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 11l2.76-5H6.16l2.37 5z", opacity: ".3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" })
                ]
              }
            ),
            " ",
            "Add to cart"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "item-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product1,
              alt: "img",
              className: "img-fluid w-100 product-img"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "px-0 ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-half text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-o text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: " (32)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "shop-title", children: "Flower pot" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cardprice", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type--strikethrough", children: "$1,457" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$986" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-top p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `pages/ecommerce/productdetails`,
              className: "btn btn-light btn-svgs mt-1 mb-1 me-2",
              children: [
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
                          d: "M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z",
                          opacity: ".3"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z" })
                    ]
                  }
                ),
                " ",
                "View More"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `pages/ecommerce/shoppingcart`, className: "btn btn-primary btn-svgs mt-1 mb-1", children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 11l2.76-5H6.16l2.37 5z", opacity: ".3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" })
                ]
              }
            ),
            " ",
            "Add to cart"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", md: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "item-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product9,
              alt: "img",
              className: "img-fluid w-100 product-img"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { className: "px-0 ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-half text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-star-o text-yellow fs-16" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: " (64)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "shop-title", children: "Bracelet" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cardprice", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type--strikethrough", children: "$18,967" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$12,724" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-top p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `pages/ecommerce/productdetails`,
              className: "btn btn-light btn-svgs mt-1 mb-1 me-2",
              children: [
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
                          d: "M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z",
                          opacity: ".3"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z" })
                    ]
                  }
                ),
                " ",
                "View More"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `pages/ecommerce/shoppingcart`, className: "btn btn-primary btn-svgs mt-1 mb-1", children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 11l2.76-5H6.16l2.37 5z", opacity: ".3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" })
                ]
              }
            ),
            " ",
            "Add to cart"
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
ProductDetails.propTypes = {};
ProductDetails.defaultProps = {};
const mapStateToProps = (state) => ({
  local_varaiable: state
});
const ProductDetails_default = connect_default(mapStateToProps, { AddToCart })(ProductDetails);
export {
  ProductDetails_default as default
};

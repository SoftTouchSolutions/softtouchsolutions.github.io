import { r as reactExports, j as jsxRuntimeExports, p as Rating } from "./mui-6YGer9Nu.js";
import { f as PageHeaders, R as Row, C as Col, g as Card, n as CardHeader, h as CardBody, L as Label, b as Link, I as Input, B as Button, T as Table, H as Pagination, J as PaginationItem, K as PaginationLink } from "./index-zbnKGqDS.js";
import { C as CardTitle } from "./CardTitle-5XhNrNGW.js";
import { S as StateManagedSelect$1 } from "./react-select.esm-CaNXbm0e.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const Search = () => {
  const Mensoptions = [
    { value: "--Select--", label: "--Select--" },
    { value: "Foot wear", label: "Foot wear" },
    { value: "Top wear", label: "Top wear" },
    { value: "Bootom wear", label: "Bootom wear" },
    { value: "Mens Groming", label: "Mens Groming" },
    { value: "Accessories", label: "Accessories" }
  ];
  const [mensOption, setMensOption] = reactExports.useState(null);
  const Womenoptions = [
    { value: "--Select--", label: "--Select--" },
    { value: "Western wear", label: "Western wear" },
    { value: "Top wear", label: "Top wear" },
    { value: "Bootom wear", label: "Bootom wear" },
    { value: "Beuty Groming", label: "Beuty Groming" },
    { value: "Accessories", label: "Accessories" },
    { value: "jewellery", label: "jewellery" }
  ];
  const [womenOption, setWomenOption] = reactExports.useState(null);
  const Booksoptions = [
    { value: "--Select--", label: "--Select--" },
    { value: "Stationery", label: "Stationery" },
    { value: "Books", label: "Books" },
    { value: "Gaming", label: "Gaming" },
    { value: "Music", label: "Music" },
    { value: "Exercise & fitness", label: "Exercise & fitness" }
  ];
  const [booksOption, setBooksOption] = reactExports.useState(null);
  const Kidsoptions = [
    { value: "--Select--", label: "--Select--" },
    { value: "Boys clothing", label: "Boys clothing" },
    { value: "girls Clothing", label: "girls Clothing" },
    { value: "Toys", label: "Toys" },
    { value: "Baby Care", label: "Baby Care" },
    { value: "Kids footwear", label: "Kids footwear" }
  ];
  const [kidsOption, setKidsOption] = reactExports.useState(null);
  const Electronicsoptions = [
    { value: "--Select--", label: "--Select--" },
    { value: "Mobiles", label: "Mobiles" },
    { value: "Laptops", label: "Laptops" },
    { value: "Gaming & Accessories", label: "Gaming & Accessories" },
    { value: "Health care Appliances", label: "Health care Appliances" }
  ];
  const [electronicsOption, setElectronicsOption] = reactExports.useState(null);
  const searchData = [
    { id: 1, ProductName: "Mens Jackets", badgeClassName: "", views: "987", discount: "50%", price: "$1,987" },
    { id: 2, ProductName: "Occational Special Edition", badgeClassName: "", views: "675", discount: "60%", price: "$2,679" },
    { id: 3, ProductName: "Sares", badgeClassName: "badge bg-primary badge-md", views: "765", discount: "25%", price: "$999" },
    { id: 4, ProductName: "Western Wear", badgeClassName: "", views: "678", discount: "30%", price: "$699" },
    { id: 5, ProductName: "Kids Dress", badgeClassName: "badge badge-default badge-md", views: "345", discount: "47%", price: "$399" },
    { id: 6, ProductName: "Kids Toys", badgeClassName: "", views: "876", discount: "26%", price: "$299" },
    { id: 7, ProductName: "Sony KD-49XE7005", badgeClassName: "badge bg-primary badge-md", views: "563", discount: "43%", price: "$22,269" },
    { id: 8, ProductName: "Huawei Mate Pro Dual SIM", badgeClassName: "", views: "671", discount: "20%", price: "$9,999" },
    { id: 9, ProductName: "Novel Books", badgeClassName: "badge badge-default badge-md", views: "354", discount: "14%", price: "$899" },
    { id: 10, ProductName: "Welcare Fitness", badgeClassName: "", views: "937", discount: "40%", price: "$3,987" },
    { id: 11, ProductName: "Red rose Gift", badgeClassName: "", views: "137", discount: "80%", price: "$987" },
    { id: 12, ProductName: "New Model Saree", badgeClassName: "", views: "157", discount: "30%", price: "$2,452" },
    { id: 13, ProductName: "Welcare Fitness", badgeClassName: "", views: "937", discount: "40%", price: "$3,987" },
    { id: 14, ProductName: "W-top", badgeClassName: "", views: "1452 ", discount: "40%", price: "$123" },
    { id: 15, ProductName: "Watch", badgeClassName: "", views: "637", discount: "10%", price: "$87" },
    { id: 16, ProductName: "College Bag", badgeClassName: "", views: "536", discount: "25%", price: "$1,251" }
  ];
  const [allData, setAllData] = reactExports.useState(searchData);
  let allElement2 = [];
  let myfunction = (InputData) => {
    let allElement;
    for (allElement of allData) {
      if (allElement.ProductName[0] == " ") {
        allElement.ProductName = allElement.ProductName.trim();
      }
      if (allElement.ProductName.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.ProductName.toLowerCase().startsWith(InputData.toLowerCase())) {
          console.log(allElement);
          allElement2.push(allElement);
        }
      }
    }
    setAllData(allElement2);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeaders,
      {
        title: "Search",
        home: "Home",
        name: "Pages",
        fonticonsname: "Search"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { md: "12", lg: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { tag: "h3", children: " Categories" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Mens" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                defaultValue: mensOption,
                onChange: setMensOption,
                options: Mensoptions,
                placeholder: "--Select--",
                classNamePrefix: "Search"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Women" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                defaultValue: womenOption,
                onChange: setWomenOption,
                options: Womenoptions,
                placeholder: "--Select--",
                classNamePrefix: "Search"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Baby & Kids" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                defaultValue: kidsOption,
                onChange: setKidsOption,
                options: Kidsoptions,
                placeholder: "--Select--",
                classNamePrefix: "Search"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Electronics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                defaultValue: electronicsOption,
                onChange: setElectronicsOption,
                options: Electronicsoptions,
                placeholder: "--Select--",
                classNamePrefix: "Search"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "form-label", children: "Sport,Books & More " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateManagedSelect$1,
              {
                defaultValue: booksOption,
                onChange: setBooksOption,
                options: Booksoptions,
                placeholder: "--Select--",
                classNamePrefix: "Search"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "btn btn-primary btn-block", to: "#", children: "Search" })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { xl: "9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              onChange: (ele) => {
                myfunction(ele.target.value);
              },
              type: "text",
              className: "form-control br-tl-7 br-bl-7",
              placeholder: "Search for...."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              color: "",
              type: "button",
              className: "btn btn-primary br-tr-7 br-br-7",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-search", "aria-hidden": "true" })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-5 store", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table card-table table-vcenter text-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: allData.map((idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              idx.ProductName,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: idx.badgeClassName, children: "New" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rating, { name: "no-value", size: "small", value: 3, max: 5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-end text-muted d-none d-md-table-cell text-nowrap", children: [
              idx.views,
              " views"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-end text-muted d-none d-md-table-cell text-nowrap", children: [
              idx.discount,
              " off"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: idx.price }) })
          ] }, Math.random())) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex p-4 border-top", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Pagination, { className: "pagination mb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { disabled: true, className: " page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", children: "‹" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { active: true, className: " page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", children: "1" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", children: "2" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", children: "3" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", children: "4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", children: "5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", children: "›" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { className: "page-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationLink, { className: "page-link", children: "»" }) })
          ] }) })
        ] })
      ] })
    ] })
  ] });
};
Search.propTypes = {};
Search.defaultProps = {};
export {
  Search as default
};

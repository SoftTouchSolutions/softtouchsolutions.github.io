import { r as reactExports, j as jsxRuntimeExports } from "./mui-BeFIxXnL.js";
import { b as Link, f as PageHeaders, R as Row, C as Col, g as Card, h as CardBody, T as Table } from "./index-CPwjB16p.js";
import { S as Slider } from "./slick-theme-CpT3GHcG.js";
import { p as photo1 } from "./1-CXDQDCif.js";
import { p as photo2, a as photo12 } from "./14-0pej-tsD.js";
import { p as photo3, a as photo4 } from "./4-CUU99mC1.js";
import { p as photo5, a as photo6 } from "./6-NgB5q-sK.js";
import { p as photo7 } from "./7-oZbLhkCE.js";
import { p as photo8 } from "./8-DBQQbcvu.js";
import { p as photo9 } from "./9-Cd4JggXr.js";
import { p as photo10 } from "./10-8A9hOF9c.js";
import { p as photo11 } from "./11-_IJrd_jw.js";
import { L as Lightbox, C as Captions } from "./thumbnails-DMNhovF9.js";
import { f as fileimg1 } from "./fileimage1-Dq_zGUdJ.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
const blog = "/apps/nsh/assets/blog-main-fegFbRZd.jpg";
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2e3,
  arrows: true,
  autoplaySpeed: 2e3,
  pauseOnHover: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 3e3,
        autoplay: true
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 3e3,
        autoplay: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 3e3,
        autoplay: true
      }
    }
  ]
};
const LightboxGalleryDescription = () => {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { id: "lightgallery", className: "list-unstyled row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/1.jpg", "data-src": "../assets/images/photos/1.jpg", "data-sub-html": "<h4>Gallery Image 1</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo1, alt: "Thumb-1" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/13.jpg", "data-src": "../assets/images/photos/13.jpg", "data-sub-html": "<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo2, alt: "Thumb-2" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/3.jpg", "data-src": "../assets/images/photos/3.jpg", "data-sub-html": "<h4>Gallery Image 3</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo3, alt: "Thumb-1" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/4.jpg", "data-src": "../assets/images/photos/4.jpg", "data-sub-html": " <h4>Gallery Image 4</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo4, alt: "Thumb-2" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/5.jpg", "data-src": "../assets/images/photos/5.jpg", "data-sub-html": "<h4>Gallery Image 5</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo5, alt: "Thumb-1" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/6.jpg", "data-src": "../assets/images/photos/6.jpg", "data-sub-html": "<h4>Gallery Image 6</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo6, alt: "Thumb-2" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/7.jpg", "data-src": "../assets/images/photos/7.jpg", "data-sub-html": "<h4>Gallery Image 7</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo7, alt: "Thumb-1" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/8.jpg", "data-src": "../assets/images/photos/8.jpg", "data-sub-html": "<h4>Gallery Image 8</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo8, alt: "Thumb-2" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/9.jpg", "data-src": "../assets/images/photos/9.jpg", "data-sub-html": "<h4>Gallery Image 9</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo9, alt: "Thumb-1" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/10.jpg", "data-src": "../assets/images/photos/10.jpg", "data-sub-html": "<h4>Gallery Image 10</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo10, alt: "Thumb-2" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/11.jpg", "data-src": "../assets/images/photos/11.jpg", "data-sub-html": "<h4>Gallery Image 11</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo11, alt: "Thumb-1" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "col-xs-6 col-sm-4 col-md-3", "data-responsive": "../assets/images/photos/14.jpg", "data-src": "../assets/images/photos/14.jpg", "data-sub-html": "<h4>Gallery Image 12</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "img-responsive br-5", onClick: () => setOpen(true), src: photo12, alt: "Thumb-2" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lightbox,
      {
        open,
        close: () => setOpen(false),
        plugins: [Captions],
        captions: { descriptionTextAlign: "center" },
        slides: [
          {
            src: photo1,
            title: "Image-1"
          },
          {
            src: photo2,
            title: "Image-2"
          },
          {
            src: photo3,
            title: "Image-3"
          },
          {
            src: photo4,
            title: "Image-4"
          }
        ]
      }
    )
  ] });
};
const fileimg4 = "/apps/nsh/assets/fileimage4-BLralYNq.jpg";
const fileimg2 = "/apps/nsh/assets/fileimage2-iOAmFYpk.jpg";
const fileimg3 = "/apps/nsh/assets/fileimage3-BXjjcSac.jpg";
const fileimg5 = "/apps/nsh/assets/fileimage5-CgWD7XUY.jpg";
const FileDetails = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageHeaders,
    {
      title: "File Details",
      home: "Home",
      name: "Apps",
      fonticonsname: "File Details"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { className: "row-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "8", lg: "12", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "px-4 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/apps/nsh/"}pages/blog/blog03`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: blog,
        alt: "img",
        className: "cover-image br-5 w-100"
      }
    ) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", lg: "12", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3", children: "File details :" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { className: "table mb-0 border-top table-bordered text-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "File-name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "image.jpg" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "File-size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "12.45mb" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "uploaded-date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "01-12-2020" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "uploaded-by" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "prityy abodh" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "image-width" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "1000" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "image-height" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "600" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "File-formate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "jpg" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-bottom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: "File-location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "storage/photos/image.jpg" })
        ] })
      ] }) }) }) }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "8", lg: "12", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: "h-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Slider, { ...settings, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slicksliders", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-card overflow-hidden mb-0 me-2 br-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/apps/nsh/"}apps/filemanager/filedetails`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "",
          alt: "",
          src: fileimg4
        }
      ) }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slicksliders", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-card overflow-hidden mb-0 me-2 br-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/apps/nsh/"}apps/filemanager/filedetails`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "",
          alt: "",
          src: fileimg1
        }
      ) }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slicksliders", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-card overflow-hidden mb-0 me-2 br-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/apps/nsh/"}apps/filemanager/filedetails`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "",
          alt: "",
          src: fileimg2
        }
      ) }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slicksliders", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-card overflow-hidden mb-0 me-2 br-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/apps/nsh/"}apps/filemanager/filedetails`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "",
          alt: "",
          src: fileimg3
        }
      ) }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slicksliders", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-card overflow-hidden mb-0 me-2 br-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/apps/nsh/"}apps/filemanager/filedetails`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "",
          alt: "",
          src: fileimg4
        }
      ) }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slicksliders", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-card overflow-hidden mb-0 me-2 br-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/apps/nsh/"}apps/filemanager/filedetails`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "",
          alt: "",
          src: fileimg5
        }
      ) }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slicksliders", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-card overflow-hidden mb-0 me-2 br-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/apps/nsh/"}apps/filemanager/filedetails`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "",
          alt: "",
          src: fileimg1
        }
      ) }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slicksliders", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "custom-card overflow-hidden mb-0 me-2 br-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `${"/apps/nsh/"}apps/filemanager/filedetails`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "",
          alt: "",
          src: fileimg3
        }
      ) }) }) }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { xl: "4", lg: "12", md: "12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3", children: "Recent Files" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LightboxGalleryDescription, {})
    ] }) }) })
  ] })
] });
FileDetails.propTypes = {};
FileDetails.defaultProps = {};
export {
  FileDetails as default
};

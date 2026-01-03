import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BaCLzjMP.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Dickinson House Park Booking</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="font-['Montserrat'] bg-white text-gray-900" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/work/Favorites/Lenovo/ee0/revised/web/adonis/parking/frontend/src/layouts/Layout.astro", void 0);

const DickinsonHeader = () => {
  return /* @__PURE__ */ jsxs("header", { className: "relative w-full py-16 bg-white border-b border-gray-100 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4 scale-150 grayscale animate-pulse", children: /* @__PURE__ */ jsx("img", { src: "/images/pfiLogo.png", alt: "", className: "h-64 object-contain" }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 opacity-[0.03] pointer-events-none transform -translate-x-1/4 translate-y-1/4 scale-150 grayscale animate-pulse [animation-delay:2s]", children: /* @__PURE__ */ jsx("img", { src: "/images/itsLogo.png", alt: "", className: "h-64 object-contain" }) }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-center relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] animate-bounce", children: "Live Availability" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-black tracking-tighter text-gray-900 text-center uppercase leading-none", children: [
        "Dickinson ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600", children: "House" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs md:text-sm font-bold text-gray-300 tracking-[0.5em] uppercase", children: "Professional Parking Registry" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-8 saturate-0 opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/pfiLogo.png", alt: "PFI", className: "h-10 object-contain" }),
        /* @__PURE__ */ jsx("div", { className: "w-px h-6 bg-gray-200" }),
        /* @__PURE__ */ jsx("img", { src: "/images/itsLogo.png", alt: "ITS", className: "h-10 object-contain" })
      ] })
    ] })
  ] });
};

const InitialsInput = ({ onInitialsChange = () => {
}, disabled }) => {
  const [initials, setInitials] = useState("");
  useEffect(() => {
    const saved = localStorage.getItem("user_initials");
    if (saved) {
      setInitials(saved);
      onInitialsChange(saved);
    }
  }, []);
  const handleChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 3);
    setInitials(val);
    localStorage.setItem("user_initials", val);
    onInitialsChange(val);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-inner max-w-sm mx-auto", children: [
    /* @__PURE__ */ jsx("label", { className: "text-xs font-black uppercase tracking-[0.3em] text-gray-400", children: "Your Identity" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: initials,
        onChange: handleChange,
        disabled,
        placeholder: "ABC",
        className: "w-32 text-center text-4xl font-black bg-white border-2 border-gray-100 rounded-xl py-4 focus:outline-none focus:border-indigo-600 focus:ring-8 focus:ring-indigo-100 transition-all uppercase placeholder:text-gray-100"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-widest", children: "2-3 Characters Only" })
  ] });
};

const AdminPasswordModal = ({ isOpen, onClose = () => {
}, onSubmit = () => {
}, adminType }) => {
  const [password, setPassword] = useState("");
  if (!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password);
    setPassword("");
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-600 p-8 text-white relative", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black uppercase tracking-tight", children: "Admin Override" }),
      /* @__PURE__ */ jsxs("p", { className: "text-indigo-100 font-bold text-sm tracking-wide opacity-80 uppercase mt-1", children: [
        "Authenticating for ",
        adminType
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onClose,
          className: "absolute top-8 right-8 text-white hover:text-indigo-200",
          children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "p-8 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-black uppercase tracking-[0.2em] text-gray-400", children: "Passphrase" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            autoFocus: true,
            type: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: "••••••••",
            className: "w-full text-2xl font-black bg-gray-50 border-2 border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-indigo-600 focus:ring-8 focus:ring-indigo-100 transition-all font-mono"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "w-full bg-gray-900 text-white font-black py-5 rounded-xl uppercase tracking-widest text-sm hover:bg-gray-800 transition-all hover:shadow-xl active:scale-[0.98]",
          children: "Proceed Securely"
        }
      )
    ] })
  ] }) });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex flex-col"> ${renderComponent($$result2, "DickinsonHeader", DickinsonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/work/Favorites/Lenovo/ee0/revised/web/adonis/parking/frontend/src/presentation/DickinsonHeader", "client:component-export": "default" })} <main class="flex-1 bg-white"> <div class="max-w-7xl mx-auto py-12 px-4 space-y-12"> <section class="animate-in fade-in slide-in-from-bottom-8 duration-700"> ${renderComponent($$result2, "InitialsInput", InitialsInput, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/work/Favorites/Lenovo/ee0/revised/web/adonis/parking/frontend/src/presentation/InitialsInput", "client:component-export": "default" })} </section> <section class="animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-backwards"> ${renderComponent($$result2, "SmartBookingGrid", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/work/Favorites/Lenovo/ee0/revised/web/adonis/parking/frontend/src/container/SmartBookingGrid", "client:component-export": "default" })} </section> </div> </main> <footer class="py-12 bg-gray-50 border-t border-gray-100"> <div class="container mx-auto px-4 text-center"> <p class="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">
Built with Astro + React + AdonisJS
</p> </div> </footer> ${renderComponent($$result2, "AdminPasswordModal", AdminPasswordModal, { "isOpen": false, "adminType": "HA", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/work/Favorites/Lenovo/ee0/revised/web/adonis/parking/frontend/src/presentation/AdminPasswordModal", "client:component-export": "default" })} </div> ` })}`;
}, "C:/work/Favorites/Lenovo/ee0/revised/web/adonis/parking/frontend/src/pages/index.astro", void 0);

const $$file = "C:/work/Favorites/Lenovo/ee0/revised/web/adonis/parking/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

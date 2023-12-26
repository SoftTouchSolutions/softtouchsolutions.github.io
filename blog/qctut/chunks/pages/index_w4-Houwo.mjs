import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, i as renderHead, b as addAttribute } from '../astro_vew1cvCL.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, S as SITE_TITLE, c as SITE_DESCRIPTION, g as getCollection, d as $$FormattedDate } from './__fyYQRwSc.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$2 = createAstro("https://example.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })} <main> <h2>🧑‍💻 Quantum Computing Tutor!</h2> <p>
Welcome to Quantum Computing Tutor.  
				A blog dedicated to learn the basics of Quantum Computing
</p> <p>
Quantum Computing is said to be the next revolution in the 
				Computing technology designed to achieve computation speed ups in 
        specific domains of computation.  
				Quantum Computers use ideas from Quantum mechanics to achieve these 
				computation speedups. In particular, the two basic concepts of superposition and 
				entanglement both in Quantum mechanics are detailed in this blog.
</p> <p>Because this blog is designed with the very basics of Quantum Computing in mind,
				Here are the topics covered in this blog:
</p> <ul> <li>Probability and Statistics</li> <li>Linear Algebra Concepts</li> <li>Basics of Quantum Computation</li> <li>Qiskit Examples</li> <li>Q-sharp (Q# QDK) guide</li> </ul> <p>
Have fun!
</p> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/johna/src/repos/ee0/revised/web/astro/qcblog/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/johna/src/repos/ee0/revised/web/astro/qcblog/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("statistics")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-kt2pfoco> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-kt2pfoco": true })}${renderHead()}</head> <body data-astro-cid-kt2pfoco> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-kt2pfoco": true })} <main data-astro-cid-kt2pfoco> <section data-astro-cid-kt2pfoco> <ul data-astro-cid-kt2pfoco> ${posts.map((post) => renderTemplate`<li data-astro-cid-kt2pfoco> <a${addAttribute(`/statistics/${post.slug}/`, "href")} data-astro-cid-kt2pfoco> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-kt2pfoco> <h4 class="title" data-astro-cid-kt2pfoco>${post.data.title}</h4> <p class="date" data-astro-cid-kt2pfoco> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-kt2pfoco": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-kt2pfoco": true })} </body></html>`;
}, "C:/Users/johna/src/repos/ee0/revised/web/astro/qcblog/src/pages/statistics/index.astro", void 0);

const $$file$1 = "C:/Users/johna/src/repos/ee0/revised/web/astro/qcblog/src/pages/statistics/index.astro";
const $$url$1 = "/statistics";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  console.log(await getCollection("quantum"));
  const posts = (await getCollection("quantum")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-gffzyqxk> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-gffzyqxk": true })}${renderHead()}</head> <body data-astro-cid-gffzyqxk> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-gffzyqxk": true })} <main data-astro-cid-gffzyqxk> <section data-astro-cid-gffzyqxk> <ul data-astro-cid-gffzyqxk> ${posts.map((post) => renderTemplate`<li data-astro-cid-gffzyqxk> <a${addAttribute(`/quantum/${post.slug}/`, "href")} data-astro-cid-gffzyqxk> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-gffzyqxk> <h4 class="title" data-astro-cid-gffzyqxk>${post.data.title}</h4> <p class="date" data-astro-cid-gffzyqxk> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-gffzyqxk": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-gffzyqxk": true })} </body></html>`;
}, "C:/Users/johna/src/repos/ee0/revised/web/astro/qcblog/src/pages/quantum/index.astro", void 0);

const $$file = "C:/Users/johna/src/repos/ee0/revised/web/astro/qcblog/src/pages/quantum/index.astro";
const $$url = "/quantum";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };

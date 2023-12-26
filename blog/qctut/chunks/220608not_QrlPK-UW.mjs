import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_vew1cvCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Math Notation\n![[math_notation.png]]\nVector notation\n<img src=\"https://miro.medium.com/v2/resize:fit:720/format:webp/1*eX2rgS6J08uEmf_noXSCqA.png\" alt=\"vector notation\">\nQuantum operators\n<img src=\"https://miro.medium.com/v2/resize:fit:720/format:webp/1*3PJoyN3dzMcAepDJohP6AA.png\" alt=\"\"></p>";

				const frontmatter = {"title":"Basic Notation","description":"Basic Math notation for Quantum Computing","pubDate":"Jul 08 2022","heroImage":"/blog-placeholder-3.jpg"};
				const file = "C:/Users/johna/src/repos/ee0/revised/web/astro/qcblog/src/content/quantum/220608not.md";
				const url = undefined;
				function rawContent() {
					return "\n\nMath Notation\n![[math_notation.png]]\nVector notation\n![vector notation](https://miro.medium.com/v2/resize:fit:720/format:webp/1*eX2rgS6J08uEmf_noXSCqA.png)\nQuantum operators\n![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*3PJoyN3dzMcAepDJohP6AA.png)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

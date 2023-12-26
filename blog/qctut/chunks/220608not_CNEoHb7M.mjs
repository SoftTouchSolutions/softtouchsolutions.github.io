import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_vew1cvCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The following tables below taken from the <a href=\"https://medium.com/queen-of-qiskit/0-d3f42c35de7\">Queen of Qiskit’s blog</a>\nillustrate basic terminology in the Quantum Computing space.</p>\n<p>Math Notation\n<img src=\"https://miro.medium.com/v2/resize:fit:720/format:webp/1*z5rMaCPwZDOApYw_OiZSmA.png\" alt=\"math_notation.png\">\nVector notation\n<img src=\"https://miro.medium.com/v2/resize:fit:720/format:webp/1*eX2rgS6J08uEmf_noXSCqA.png\" alt=\"vector notation\">\nQuantum operators\n<img src=\"https://miro.medium.com/v2/resize:fit:720/format:webp/1*3PJoyN3dzMcAepDJohP6AA.png\" alt=\"\"></p>\n<p>While these will be discussed in this blog and subsequent\nblogs,  feel free to peruse the original blog post for an introduction to the basic\nQuantum Computing mathematical notation.</p>";

				const frontmatter = {"title":"Basic Notation","description":"Basic Math notation for Quantum Computing","pubDate":"Jul 08 2022","heroImage":"/blog-placeholder-3.jpg"};
				const file = "C:/Users/johna/src/repos/ee0/revised/web/astro/qcblog/src/content/quantum/220608not.md";
				const url = undefined;
				function rawContent() {
					return "\nThe following tables below taken from the [Queen of Qiskit's blog](https://medium.com/queen-of-qiskit/0-d3f42c35de7) \nillustrate basic terminology in the Quantum Computing space.  \n\nMath Notation\n![math_notation.png](https://miro.medium.com/v2/resize:fit:720/format:webp/1*z5rMaCPwZDOApYw_OiZSmA.png)\nVector notation\n![vector notation](https://miro.medium.com/v2/resize:fit:720/format:webp/1*eX2rgS6J08uEmf_noXSCqA.png)\nQuantum operators\n![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*3PJoyN3dzMcAepDJohP6AA.png)\n\nWhile these will be discussed in this blog and subsequent\nblogs,  feel free to peruse the original blog post for an introduction to the basic\nQuantum Computing mathematical notation.";
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

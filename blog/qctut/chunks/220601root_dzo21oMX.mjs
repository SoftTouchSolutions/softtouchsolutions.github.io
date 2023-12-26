import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_vew1cvCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Here is a list of the articles covered in this section.</p>\n<ul>\n<li>Basic Notation</li>\n</ul>";

				const frontmatter = {"title":"Basics of Quantum Computation","description":"'Compilation of articles to quickly get you started on tomorrow's technology.","pubDate":"Jul 01 2022","heroImage":"/img/ai-generated_720.jpg"};
				const file = "C:/Users/johna/src/repos/ee0/revised/web/astro/qcblog/src/content/quantum/220601root.md";
				const url = undefined;
				function rawContent() {
					return "Here is a list of the articles covered in this section.\n- Basic Notation";
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

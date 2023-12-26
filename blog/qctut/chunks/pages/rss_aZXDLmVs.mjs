import rss from '@astrojs/rss';
import { g as getCollection, S as SITE_TITLE, c as SITE_DESCRIPTION } from './__53QCYqmC.mjs';

async function GET(context) {
	const statistics = await getCollection('statistics');
	const quantum = await getCollection('quantum');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [statistics.map((post) => ({
				...post.data,
				link: `/blog/${post.slug}/`,
			})), ...quantum.map((post) => ({
				...post.data,
				link: `/blog/${post.slug}/`,
			}))
		],
	});
}

export { GET };

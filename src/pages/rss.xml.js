import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const post = await getCollection('tips');
  return rss({
    title: 'AstroBuild.Tips',
    description: 'My First Page in Astro',
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}/`
    })),
  });
};
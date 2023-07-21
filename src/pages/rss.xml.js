import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'

import { SITE_DESCRIPTION, SITE_TITLE } from '../data'

export async function get(context) {
  const posts = await getCollection('blog')
  return rss({
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
    description: SITE_DESCRIPTION,
    site: context.site,
    title: SITE_TITLE,
  })
}

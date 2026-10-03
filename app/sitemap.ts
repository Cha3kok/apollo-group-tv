import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog-data'
import { LAST_UPDATED, SITE_URL } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getBlogPosts()

    return [
        { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
        { url: `${SITE_URL}/apollo-tv`, lastModified: new Date(LAST_UPDATED), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE_URL}/apollo-group`, lastModified: new Date(LAST_UPDATED), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}/channels-list`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
        ...posts.map((post) => ({
            url: `${SITE_URL}/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
        { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.4 },
        { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
        { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.2 },
        { url: `${SITE_URL}/refund`, changeFrequency: 'yearly', priority: 0.2 },
        { url: `${SITE_URL}/dmca`, changeFrequency: 'yearly', priority: 0.2 },
    ]
}

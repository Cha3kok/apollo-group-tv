import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// AI search crawlers that decide whether a page can be cited in AI answers
// (ChatGPT Search, Claude, Perplexity, Apple). Listed explicitly so they stay allowed
// even if the default rule changes later. Google AI Overviews uses the normal Googlebot.
const AI_SEARCH_CRAWLERS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/private/' },
      { userAgent: AI_SEARCH_CRAWLERS, allow: '/', disallow: '/private/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}

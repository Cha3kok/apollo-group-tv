/**
 * The live address of the website. Every canonical URL, sitemap entry, structured-data URL,
 * robots.txt line and WhatsApp message is built from this one value.
 * To move domains, set NEXT_PUBLIC_SITE_URL in Vercel (or change the default below) and redeploy.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://ww1.appoloiptv.com").replace(/\/$/, "")
export const SITE_HOST = new URL(SITE_URL).host

/** Brand facts shared by structured data, llms.txt-style summaries and the visible "key facts" blocks. */
export const SITE = {
  name: "Apollo Group TV",
  alternateNames: ["Apollo TV", "ApolloGroup TV", "Apollo Group IPTV", "apollogrouptv"],
  phone: "+212-707-711-512",
  phoneDisplay: "+212 707 711 512",
  languages: ["English", "French", "Arabic", "Spanish"],
} as const

/** Shown on pages as "Last updated" and used as dateModified. Update when content changes. */
export const LAST_UPDATED = "2026-10-03"
export const LAST_UPDATED_LABEL = "October 3, 2026"

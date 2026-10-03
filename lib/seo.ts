import type { Metadata } from "next"

const SHARE_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "Apollo Group TV: premium IPTV subscription" }

/**
 * Page metadata with a self-referencing canonical, Open Graph and Twitter tags.
 * Page-level openGraph replaces the root one in Next.js, so every page sets url and image here.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: {
  title: string
  description: string
  path: string
  type?: "website" | "article"
  publishedTime?: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: "Apollo Group TV",
      locale: "en_US",
      images: [SHARE_IMAGE],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [SHARE_IMAGE.url] },
  }
}

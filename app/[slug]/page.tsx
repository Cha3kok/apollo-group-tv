import { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import { notFound } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { getBlogPost, getBlogPosts, getAllBlogPostSlugs } from "@/lib/blog-data"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import BlogPostHero from "@/components/blog-post-hero"
import BlogPostContent from "@/components/blog-post-content"
import BlogPostRelated from "@/components/blog-post-related"
import BlogPostCTA from "@/components/blog-post-cta"
import { JsonLd, breadcrumb } from "@/components/json-ld"
import { SITE_URL } from "@/lib/site"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Allow dynamic params for on-demand ISR
export const dynamicParams = true
export const revalidate = 3600 // Revalidate every hour

export async function generateStaticParams() {
  try {
    const slugs = await getAllBlogPostSlugs()
    return slugs.map((slug) => ({
      slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    // Return empty array - dynamic rendering will handle it
    return []
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const suffixed = `${post.title} | Apollo Group TV`
  return pageMeta({
    title: suffixed.length <= 60 ? suffixed : post.title,
    description: post.description,
    path: `/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const [post, allPosts] = await Promise.all([
    getBlogPost(slug),
    getBlogPosts(),
  ])

  if (!post) {
    notFound()
  }

  const relatedPosts = allPosts
    .filter(
      (p) => p.category === post.category && p.id !== post.id
    )
    .slice(0, 3)

  const url = `${SITE_URL}/${post.slug}`
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: url,
        inLanguage: "en",
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        image: post.image || `${SITE_URL}/opengraph-image`,
        author: { "@type": "Organization", name: post.author || "Apollo Group TV", url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      breadcrumb([
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/${post.slug}` },
      ]),
    ],
  }

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="min-h-screen">
        <BlogPostHero post={post} />
        <BlogPostContent post={post} />
        
        {relatedPosts.length > 0 && (
          <BlogPostRelated posts={relatedPosts} />
        )}

        <BlogPostCTA />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}

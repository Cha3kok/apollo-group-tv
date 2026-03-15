import { Metadata } from "next"
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

  return {
    title: `${post.title} | Apollo Group TV`,
    description: post.description,
    keywords: post.category ? [post.category, "IPTV", "Apollo Group TV"] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
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

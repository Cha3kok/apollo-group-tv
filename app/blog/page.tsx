import { Metadata } from "next"
import { Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import BlogCard from "@/components/blog-card"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { getBlogPosts, getAllCategories } from "@/lib/blog-data"
import BlogHero from "@/components/blog-hero"
import BlogCategories from "@/components/blog-categories"

export const metadata: Metadata = {
  title: "Apollo Group TV Blog | IPTV Tips, Guides & Updates",
  description: "Read the latest IPTV guides, setup tutorials, and industry news on the Apollo Group TV blog. Learn how to maximize your streaming experience.",
  keywords: ["IPTV blog", "streaming guides", "IPTV setup", "IPTV tips", "Apollo Group TV"],
  openGraph: {
    title: "Apollo Group TV Blog",
    description: "Expert guides and tips for IPTV streaming",
    type: "website",
  },
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getAllCategories(),
  ])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <BlogHero />

        {/* Blog Posts Grid */}
        <section className="relative px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="mb-2 text-2xl font-bold">Latest Articles</h2>
              <p className="text-muted-foreground">
                Explore our collection of helpful guides and articles about IPTV streaming
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <BlogCategories categories={categories} />

        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}

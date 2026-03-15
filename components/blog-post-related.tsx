"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BlogPost } from "@/lib/blog-data"

interface BlogPostRelatedProps {
  posts: BlogPost[]
}

export default function BlogPostRelated({ posts }: BlogPostRelatedProps) {
  return (
    <section className="relative px-4 py-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-2xl font-bold"
        >
          Related Articles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((relatedPost, index) => (
            <motion.div
              key={relatedPost.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-lg border border-border/50 bg-secondary/20 p-6 hover:border-primary/50 hover:bg-secondary/40 transition-all"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary transition-colors">
                {relatedPost.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {relatedPost.description}
              </p>
              <Link
                href={`/${relatedPost.slug}`}
                className="text-sm text-primary hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

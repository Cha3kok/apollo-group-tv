"use client"

import { motion } from "framer-motion"
import { BlogPost } from "@/lib/blog-data"

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  // Check if content is HTML or markdown
  const isHtml = post.content.includes("<") && post.content.includes(">")

  return (
    <section className="relative px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {isHtml ? (
            // Render HTML content from WordPress with comprehensive styling
            <div
              className="prose prose-invert max-w-none
                [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4
                [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4
                [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
                [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-3
                [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:mt-4 [&_h5]:mb-2
                [&_h6]:text-base [&_h6]:font-semibold [&_h6]:mt-4 [&_h6]:mb-2
                [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:text-base [&_p]:my-4
                [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_ul]:my-4
                [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:space-y-2 [&_ol]:my-4
                [&_li]:text-muted-foreground [&_li]:leading-relaxed
                [&_strong]:text-foreground [&_strong]:font-bold
                [&_em]:italic [&_em]:text-muted-foreground
                [&_a]:text-primary [&_a]:underline hover:[&_a]:brightness-110
                [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4
                [&_code]:bg-secondary/50 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm
                [&_pre]:bg-secondary/50 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:my-4
                [&_table]:w-full [&_table]:border-collapse [&_table]:my-4
                [&_th]:border [&_th]:border-border [&_th]:px-4 [&_th]:py-2 [&_th]:bg-secondary/30 [&_th]:text-left
                [&_td]:border [&_td]:border-border [&_td]:px-4 [&_td]:py-2
                [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded [&_img]:my-4
                [&_hr]:my-8 [&_hr]:border-border"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            // Render markdown content for fallback posts
            <div className="space-y-6 text-foreground">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("###")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                }
                if (paragraph.startsWith("-")) {
                  return (
                    <ul key={index} className="space-y-2 ml-6 list-disc">
                      {paragraph.split("\n").map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed text-base">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          )}
        </motion.article>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { BlogPost } from "@/lib/blog-data"

interface BlogPostContentProps {
  post: BlogPost
}

type Block = { type: "h2" | "h3" | "p"; text: string } | { type: "ul" | "ol"; items: string[] }

/** Renders **bold** inside a line of text. */
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  )
}

/** Minimal line-based markdown for the built-in fallback posts: ## / ### headings, - and 1. lists, paragraphs, **bold**. */
function renderMarkdown(content: string) {
  const blocks: Block[] = []
  for (const raw of content.split("\n")) {
    const line = raw.trim()
    const last = blocks[blocks.length - 1]
    if (!line) continue
    const heading = line.match(/^(#{2,6})\s+(.*)$/)
    const bullet = line.match(/^[-*]\s+(.*)$/)
    const numbered = line.match(/^\d+[.)]\s+(.*)$/)
    if (heading) blocks.push({ type: heading[1].length === 2 ? "h2" : "h3", text: heading[2] })
    else if (bullet) last?.type === "ul" ? last.items.push(bullet[1]) : blocks.push({ type: "ul", items: [bullet[1]] })
    else if (numbered) last?.type === "ol" ? last.items.push(numbered[1]) : blocks.push({ type: "ol", items: [numbered[1]] })
    else blocks.push({ type: "p", text: line })
  }

  return blocks.map((block, i) => {
    switch (block.type) {
      case "h2":
        return (
          <h2 key={i} className="pt-6 text-2xl font-bold">
            {inline(block.text)}
          </h2>
        )
      case "h3":
        return (
          <h3 key={i} className="pt-3 text-xl font-semibold">
            {inline(block.text)}
          </h3>
        )
      case "ul":
      case "ol": {
        const List = block.type
        return (
          <List key={i} className={`ml-6 space-y-2 ${block.type === "ul" ? "list-disc" : "list-decimal"} marker:text-primary`}>
            {block.items.map((item, j) => (
              <li key={j} className="pl-1 text-muted-foreground">
                {inline(item)}
              </li>
            ))}
          </List>
        )
      }
      default:
        return (
          <p key={i} className="text-base leading-relaxed text-muted-foreground">
            {inline(block.text)}
          </p>
        )
    }
  })
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
            <div className="space-y-5 text-foreground">{renderMarkdown(post.content)}</div>
          )}
        </motion.article>
      </div>
    </section>
  )
}

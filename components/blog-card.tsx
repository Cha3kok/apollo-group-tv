"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border border-border/50 bg-secondary/20 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-secondary/40"
    >
      {/* Featured Image */}
      {post.image && (
        <div className="relative h-48 w-full overflow-hidden bg-secondary/30">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/20" />
        </div>
      )}

      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-4 inline-block">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {post.description}
        </p>

        {/* Meta Info */}
        <div className="mb-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Read More Link */}
        <Link
          href={`/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Hover Effect - Border Animation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  )
}

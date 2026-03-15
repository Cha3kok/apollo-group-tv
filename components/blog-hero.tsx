"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

export default function BlogHero() {
  return (
    <section className="relative px-4 py-20 pt-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Expert Guides & Tips
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight">
            Apollo Group TV Blog
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground">
            Learn everything about IPTV streaming, setup guides, device compatibility, and industry insights from our expert team.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

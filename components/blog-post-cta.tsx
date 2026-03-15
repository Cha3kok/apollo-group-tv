"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function BlogPostCTA() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Stream?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Start your Apollo Group TV subscription today and enjoy 21,000+ channels in stunning 4K.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#pricing"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:brightness-110 transition-all"
            >
              View Plans
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-primary/30 bg-primary/10 px-6 py-3 font-semibold text-primary hover:bg-primary/20 transition-all"
            >
              Back to Blog
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

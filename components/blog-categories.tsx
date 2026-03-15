"use client"

import { motion } from "framer-motion"

interface BlogCategoriesProps {
  categories: string[]
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
  return (
    <section className="relative px-4 py-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold">Browse by Category</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium text-sm"
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

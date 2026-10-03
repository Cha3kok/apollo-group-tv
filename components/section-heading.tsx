"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

/** Eyebrow + title + intro used at the top of every homepage section. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#ffb224]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] text-foreground sm:text-5xl">{title}</h2>
      {intro && <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </motion.div>
  )
}

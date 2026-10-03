"use client"

import { motion } from "framer-motion"
import { ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"

// Genres and countries only: no third-party channel or brand names.
const rowOne = [
  { tag: "⚽", name: "Live Football" },
  { tag: "🏆", name: "Premium Sports" },
  { tag: "🥊", name: "PPV Events" },
  { tag: "🎬", name: "Box Office Movies" },
  { tag: "📺", name: "Series & Shows" },
  { tag: "4K", name: "4K Ultra HD" },
  { tag: "📰", name: "World News" },
  { tag: "🧸", name: "Kids & Family" },
  { tag: "🌍", name: "Documentaries" },
  { tag: "🎵", name: "Music" },
  { tag: "⏱", name: "24/7 Channels" },
  { tag: "📻", name: "Radio" },
]
const rowTwo = [
  { tag: "US", name: "United States" },
  { tag: "UK", name: "United Kingdom" },
  { tag: "CA", name: "Canada" },
  { tag: "AR", name: "Arabic" },
  { tag: "FR", name: "France" },
  { tag: "DE", name: "Germany" },
  { tag: "ES", name: "Spain" },
  { tag: "IT", name: "Italy" },
  { tag: "NL", name: "Netherlands" },
  { tag: "PT", name: "Portugal" },
  { tag: "TR", name: "Turkey" },
  { tag: "LA", name: "Latin America" },
]

const categories = ["Sports", "Movies", "Series", "News", "Kids", "Documentary", "Music", "International"]

function MarqueeRow({ items, reverse = false }: { items: { tag: string; name: string }[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 gap-4 pr-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items].map(({ tag, name }, i) => (
          <div
            key={`${name}-${i}`}
            className="glass flex shrink-0 items-center gap-3 rounded-2xl px-5 py-3.5 transition-colors hover:border-primary/40"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-white/15 to-white/[0.02] font-display text-xs font-bold text-foreground">
              {tag}
            </span>
            <span className="whitespace-nowrap text-sm font-medium text-foreground/85">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ChannelSearch() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="px-4">
        <SectionHeading
          eyebrow="Channel list"
          title={
            <>
              Apollo Group TV <span className="text-gradient">Channel List</span>: 21,000+ Live Channels
            </>
          }
          intro="Sports, movies, series, news, kids and international channels from 60+ countries and languages, all in one subscription."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-10 max-w-xl"
        >
          <Link
            href="/channels-list"
            className="glass group flex items-center gap-3 rounded-2xl px-5 py-4 transition-all hover:border-primary/40 hover:shadow-[0_0_40px_-10px_rgba(255,178,36,0.5)]"
          >
            <Search className="h-5 w-5 shrink-0 text-primary" />
            <span className="flex-1 text-left text-sm text-muted-foreground">Browse channels by country and language</span>
            <span className="flex items-center gap-1 rounded-lg bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary transition-transform group-hover:translate-x-0.5">
              Browse <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.05 }}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="marquee-pause relative mt-14 flex flex-col gap-4 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </section>
  )
}

"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Globe, Search } from "lucide-react"
import { CHANNEL_COUNTRIES, REGIONS, type Region } from "@/lib/channel-countries"
import SpotlightCard from "@/components/spotlight-card"

const max = Math.max(...CHANNEL_COUNTRIES.map((c) => c.channels))

export default function CountryBrowser() {
  const [region, setRegion] = useState<Region | "all">("all")
  const [query, setQuery] = useState("")

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CHANNEL_COUNTRIES.filter(
      (c) => (region === "all" || c.region === region) && (!q || c.name.toLowerCase().includes(q) || c.code.toLowerCase() === q),
    )
  }, [region, query])

  return (
    <div>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
        <label className="glass flex w-full items-center gap-3 rounded-2xl px-5 py-4 transition-shadow focus-within:border-primary/40 focus-within:shadow-[0_0_40px_-10px_rgba(255,178,36,0.5)]">
          <Search className="h-5 w-5 shrink-0 text-primary" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a country or language (e.g. France, Arabic, Canada)"
            className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/70"
            aria-label="Search countries"
          />
        </label>

        <div className="glass inline-flex flex-wrap justify-center gap-1 rounded-2xl p-1.5">
          {REGIONS.map((r) => (
            <button
              key={r.id}
              onClick={() => setRegion(r.id)}
              className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                region === r.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {region === r.id && (
                <motion.span
                  layoutId="region-tab"
                  className="absolute inset-0 -z-10 rounded-xl bg-[linear-gradient(100deg,#ffd56b,#ffb224,#ff7a45)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {visible.map((c, i) => (
            <motion.div
              key={c.code}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: Math.min(i, 16) * 0.025 }}
            >
              <SpotlightCard className="glass h-full rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 min-w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 px-2 font-mono text-xs font-bold text-primary ring-1 ring-primary/20">
                    {c.code === "INT" ? <Globe className="h-5 w-5" /> : c.code}
                  </span>
                  <span className="text-right">
                    <span className="block font-display text-2xl font-bold tabular-nums text-foreground">
                      {c.channels.toLocaleString("en-US")}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">channels</span>
                  </span>
                </div>
                <h2 className="mt-4 truncate text-base font-semibold text-foreground">{c.name}</h2>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.max(4, (c.channels / max) * 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-[linear-gradient(90deg,#ffb224,#ff4d8d)]"
                  />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          No match. Most countries are included; ask us on WhatsApp to confirm yours.
        </p>
      )}
    </div>
  )
}

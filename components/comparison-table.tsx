"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const rows = [
  { feature: "Anti-Freeze IPTV Technology", us: true, others: false },
  { feature: "4K / UHD IPTV Streaming Quality", us: true, others: false },
  { feature: "Instant IPTV Activation", us: true, others: false },
  { feature: "Electronic Program Guide (EPG)", us: true, others: false },
  { feature: "21,000+ Live IPTV Channels", us: true, others: false },
  { feature: "65,000+ VOD Movies & Series", us: true, others: false },
  { feature: "Catch-Up TV & Replay Feature", us: true, others: false },
  { feature: "24/7 Premium IPTV Support", us: true, others: false },
  { feature: "99.9% IPTV Server Uptime", us: true, others: false },
  { feature: "Multi-Device IPTV Streaming", us: true, others: true },
  { feature: "7-Day IPTV Money Back Guarantee", us: true, others: false },
]

export default function ComparisonTable() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose <span className="text-primary">Apollo Group TV</span> Over Other IPTV Providers?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Compare Apollo Group TV vs other IPTV services. See why thousands of subscribers choose Apollo Group TV as their go-to premium IPTV provider in 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass mt-10 overflow-hidden rounded-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    Apollo Group TV
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border/10 ${
                      index % 2 === 0 ? "bg-secondary/20" : ""
                    }`}
                  >
                    <td className="px-6 py-3.5 text-sm text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.us ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                      ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20">
                          <X className="h-4 w-4 text-destructive" />
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.others ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                      ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20">
                          <X className="h-4 w-4 text-destructive" />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

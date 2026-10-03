"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import SectionHeading from "@/components/section-heading"

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

function Mark({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
      <Check className="h-4 w-4 text-primary" />
    </span>
  ) : (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.04]">
      <X className="h-4 w-4 text-muted-foreground/60" />
    </span>
  )
}

export default function ComparisonTable() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Compare"
          title={
            <>
              Why Choose <span className="text-gradient">Apollo Group TV</span> Over Other IPTV Providers?
            </>
          }
          intro="See how Apollo Group TV compares with typical IPTV services."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative mt-12 overflow-hidden rounded-3xl"
        >
          {/* highlighted column */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-[22%] w-[22%] bg-gradient-to-b from-primary/[0.12] via-primary/[0.05] to-transparent sm:right-[20%] sm:w-[20%]" />
          <div className="overflow-x-auto">
            <table className="relative w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="px-5 py-5 text-left text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground sm:px-7">Feature</th>
                  <th className="w-[22%] px-3 py-5 text-center font-display text-sm font-bold text-primary sm:w-[20%]">Apollo</th>
                  <th className="w-[22%] px-3 py-5 text-center text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground sm:w-[20%]">Others</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.4 }}
                    className="border-b border-white/[0.04] transition-colors last:border-0 hover:bg-white/[0.03]"
                  >
                    <td className="px-5 py-4 text-sm text-foreground/90 sm:px-7">{row.feature}</td>
                    <td className="px-3 py-4 text-center"><Mark yes={row.us} /></td>
                    <td className="px-3 py-4 text-center"><Mark yes={row.others} /></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ResellerCTA() {
  return (
    <section id="reseller" className="relative px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-10 sm:p-14"
      >
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Briefcase className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Become an Apollo Group TV <span className="text-primary">Reseller</span>
            </h2>
            <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
              Start your own IPTV reseller business with Apollo Group TV. Get wholesale IPTV pricing,
              a dedicated reseller panel to manage your IPTV clients, and 24/7 priority support.
              Join the fastest-growing IPTV reseller program in 2026.
            </p>
          </div>

          <Link
            href="https://wa.me/212707711512?text=I%20want%20to%20become%20a%20reseller"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-glow flex shrink-0 items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Join IPTV Reseller Program
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

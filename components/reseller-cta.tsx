"use client"

import { motion } from "framer-motion"
import { ArrowRight, BadgeDollarSign, Briefcase, LayoutDashboard, LifeBuoy } from "lucide-react"
import Link from "next/link"
import { whatsappLinks } from "@/lib/whatsapp-utils"

const perks = [
  { icon: BadgeDollarSign, label: "Wholesale pricing" },
  { icon: LayoutDashboard, label: "Reseller panel & credits" },
  { icon: LifeBuoy, label: "Priority 24/7 support" },
]

export default function ResellerCTA() {
  return (
    <section id="reseller" className="relative px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="border-orbit relative mx-auto max-w-6xl overflow-hidden rounded-[2rem]"
      >
        <div className="relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
          {/* animated glow */}
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#ff7a45]/30 blur-[100px]" style={{ animation: "aurora-2 14s ease-in-out infinite" }} />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#3dd9ff]/20 blur-[100px]" style={{ animation: "aurora-1 18s ease-in-out infinite" }} />
          <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-70" />

          <div className="relative z-10 flex flex-col items-center gap-10 text-center lg:flex-row lg:items-end lg:text-left">
            <div className="flex-1">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 ring-1 ring-primary/30">
                <Briefcase className="h-7 w-7 text-primary" />
              </span>
              <h2 className="mt-6 text-balance text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                Become an Apollo Group TV <span className="text-gradient">Reseller</span>
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-muted-foreground sm:text-lg">
                Start your own IPTV business with wholesale pricing, a dedicated panel to manage your clients and
                credits, and a team that has your back around the clock.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
                {perks.map((p) => (
                  <span key={p.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-foreground/85">
                    <p.icon className="h-4 w-4 text-accent" />
                    {p.label}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={whatsappLinks.becomeReseller()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flame group flex shrink-0 items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold"
            >
              Join the Reseller Program
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

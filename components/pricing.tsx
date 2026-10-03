"use client"

import { motion } from "framer-motion"
import { Check, Crown, Lock, MessageCircle, RotateCcw, Zap } from "lucide-react"
import Link from "next/link"
import { whatsappLinks } from "@/lib/whatsapp-utils"
import { PLAN_FEATURES, PLANS, perMonth, savingsVsMonthly } from "@/lib/plans"
import SectionHeading from "@/components/section-heading"
import SpotlightCard from "@/components/spotlight-card"

const ease = [0.22, 1, 0.36, 1] as const

const guarantees = [
  { icon: Lock, title: "Secure checkout", text: "Card, PayPal, crypto" },
  { icon: Zap, title: "Instant delivery", text: "Login sent on WhatsApp" },
  { icon: RotateCcw, title: "7-day guarantee", text: "Full refund, no hassle" },
  { icon: MessageCircle, title: "24/7 support", text: "Real people, any time" },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#ff7a45]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Apollo Group TV <span className="text-gradient">Subscription Plans</span> & Pricing 2026
            </>
          }
          intro="Every plan unlocks the full service. The longer you go, the less you pay per month."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PLANS.map((plan, index) => {
            const save = savingsVsMonthly(plan)
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease }}
                whileHover={{ y: -8 }}
                className={`${plan.popular ? "order-first sm:order-none lg:-mt-6 sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <SpotlightCard
                  className={`flex h-full flex-col rounded-3xl p-6 ${
                    plan.popular ? "border-orbit shadow-[0_30px_80px_-20px_rgba(255,122,69,0.55)]" : "glass"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                    {plan.popular ? (
                      <span className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                        <Crown className="h-3 w-3" /> Popular
                      </span>
                    ) : save > 0 ? (
                      <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                        Save {save}%
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{plan.tagline} · 1 device</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-sm text-muted-foreground">$</span>
                    <span className="font-display text-5xl font-bold tracking-tight text-foreground">{plan.price.toFixed(2).split(".")[0]}</span>
                    <span className="font-display text-xl font-bold text-foreground">.{plan.price.toFixed(2).split(".")[1]}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {plan.months === 1 ? "billed monthly" : (
                      <>
                        <span className="font-semibold text-foreground">${perMonth(plan).toFixed(2)}</span>/month · {plan.months} months
                      </>
                    )}
                  </p>

                  <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                    {["All 21,000+ channels", "65,000+ movies & series", ...plan.extras].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={whatsappLinks.buyPlan(plan.name, plan.price, "1 Device Connection")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 rounded-2xl py-3.5 text-center text-sm font-semibold ${
                      plan.popular ? "btn-flame" : "btn-ghost text-foreground"
                    }`}
                  >
                    Order Now
                  </Link>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>

        {/* Included in every plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="glass mt-8 rounded-3xl p-7 sm:p-9"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Included in every plan</p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {PLAN_FEATURES.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.04 }}
                className="flex items-start gap-2.5 text-sm text-foreground/85"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="h-3 w-3 text-primary" />
                </span>
                {f}
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-7 lg:grid-cols-4">
            {guarantees.map((g) => (
              <div key={g.title} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
                  <g.icon className="h-5 w-5 text-accent" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{g.title}</span>
                  <span className="text-xs text-muted-foreground">{g.text}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Check, Star, Crown, Shield, MonitorPlay, Zap, Loader2 } from "lucide-react"
import Link from "next/link"
import { usePlans, useSiteSettings } from "@/hooks/use-db"
import { ComponentType } from "react"

const iconMap: Record<string, ComponentType<any>> = {
  MonitorPlay,
  Zap,
  Shield,
  Star,
  Crown,
}

export default function Pricing() {
  const { plans, loading: loadingPlans } = usePlans()
  const { settings, loading: loadingSettings } = useSiteSettings()

  return (
    <section id="pricing" className="relative px-4 py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Apollo Group TV <span className="text-primary">Subscription Plans</span> & Pricing 2026
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Buy the best IPTV subscription at affordable prices. Experience premium streaming with 21,000+ channels, 65,000+ VOD, and anti-freeze technology included.
          </p>
        </motion.div>

        {(loadingPlans || loadingSettings) ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="glass relative flex h-[500px] flex-col rounded-2xl p-6 animate-pulse">
                <div className="mb-6 flex flex-col items-center">
                  <div className="mb-4 h-12 w-12 rounded-xl bg-primary/20" />
                  <div className="h-6 w-3/4 rounded bg-primary/10" />
                  <div className="mt-2 h-4 w-1/2 rounded bg-primary/10" />
                </div>
                <div className="mb-6 flex flex-col items-center">
                  <div className="h-10 w-1/2 rounded bg-primary/10" />
                </div>
                <div className="flex flex-col gap-3">
                  {[...Array(6)].map((_, j) => (
                    <div key={j} className="h-4 w-full rounded bg-primary/10" />
                  ))}
                </div>
                <div className="mt-auto h-12 w-full rounded-xl bg-primary/20" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {plans.map((plan, index) => {
              const Icon = iconMap[plan.iconName] || Star;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass relative flex flex-col rounded-2xl p-6 ${plan.popular ? "ring-2 ring-primary scale-105 z-10" : ""
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold tracking-wider text-secondary-foreground shadow-sm shadow-secondary/20">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-6 flex flex-col items-center text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-xs mt-1 text-muted-foreground">{plan.subtitle}</p>
                  </div>

                  <div className="mb-6 text-center">
                    <span className="text-3xl font-bold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground"> / {plan.durationMonths === 1 ? 'mo' : plan.durationMonths + 'mos'}</span>
                  </div>

                  <ul className="mb-8 flex flex-1 flex-col gap-3 text-left">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`${settings?.supportWhatsAppUrl || 'https://wa.me/212707711512'}?text=Hello%20Apollo%20Group%20TV,%20I%20want%20to%20subscribe%20to%20the%20${encodeURIComponent(plan.name)}%20plan.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto rounded-xl py-3 text-center text-sm font-semibold transition-all ${plan.popular
                        ? "neon-glow bg-primary text-primary-foreground hover:brightness-110"
                        : "border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                      }`}
                  >
                    Order Now
                  </Link>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-border bg-secondary/30 px-6 py-8"
        >
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">100% Secure Checkout</p>
              <p className="text-xs text-muted-foreground">256-bit SSL Encryption</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="h-8 w-8 text-primary" />
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">Instant Delivery</p>
              <p className="text-xs text-muted-foreground">Via WhatsApp</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Check className="h-8 w-8 text-primary" />
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">7-Day Guarantee</p>
              <p className="text-xs text-muted-foreground">Money-Back Promise</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MonitorPlay className="h-8 w-8 text-primary" />
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">24/7 Support</p>
              <p className="text-xs text-muted-foreground">Priority Help</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

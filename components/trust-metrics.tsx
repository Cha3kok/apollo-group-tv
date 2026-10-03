"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, useInView } from "framer-motion"
import { Activity, Film, Tv, Users } from "lucide-react"

const metrics = [
  { icon: Tv, value: 21000, suffix: "+", label: "Live channels", decimals: 0 },
  { icon: Film, value: 65000, suffix: "+", label: "Movies & series", decimals: 0 },
  { icon: Activity, value: 99.9, suffix: "%", label: "Server uptime", decimals: 1 },
  { icon: Users, value: 12000, suffix: "+", label: "Subscribers worldwide", decimals: 0 },
]

function Counter({ to, decimals, suffix }: { to: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 2.2, ease: [0.16, 1, 0.3, 1], onUpdate: setValue })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}

export default function TrustMetrics() {
  return (
    <section className="relative px-4 py-10">
      <div className="glass mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative flex flex-col items-center gap-2 px-4 py-8 text-center sm:py-10 ${
              index % 2 === 0 ? "border-r border-white/[0.06]" : ""
            } ${index < 2 ? "border-b border-white/[0.06] lg:border-b-0" : ""} ${index === 1 ? "lg:border-r" : ""}`}
          >
            <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[linear-gradient(90deg,transparent,#ffb224,transparent)] transition-transform duration-500 group-hover:scale-x-100" />
            <metric.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
            <span className="counter-glow font-display text-3xl font-bold text-foreground sm:text-5xl">
              <Counter to={metric.value} decimals={metric.decimals} suffix={metric.suffix} />
            </span>
            <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground sm:text-sm">{metric.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

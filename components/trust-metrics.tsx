"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Tv, Film, Activity, Users } from "lucide-react"

const metrics = [
  { icon: Tv, value: 21000, suffix: "+", label: "IPTV Live Channels", prefix: "" },
  { icon: Film, value: 65000, suffix: "+", label: "VOD Movies & Series", prefix: "" },
  { icon: Activity, value: 99.9, suffix: "%", label: "IPTV Server Uptime", prefix: "" },
  { icon: Users, value: 12000, suffix: "+", label: "IPTV Subscribers Worldwide", prefix: "" },
]

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number
  suffix: string
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepTime = duration / steps
    const increment = target / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setCount(current)
    }, stepTime)

    return () => clearInterval(timer)
  }, [target, isInView])

  const formatted =
    target === 99.9 ? count.toFixed(1) : Math.floor(count).toLocaleString()

  return (
    <span className="counter-glow text-3xl font-bold text-foreground sm:text-4xl">
      {formatted}
      {suffix}
    </span>
  )
}

export default function TrustMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative px-4 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass flex flex-col items-center gap-3 rounded-2xl p-6 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <metric.icon className="h-6 w-6 text-primary" />
            </div>
            <AnimatedCounter
              target={metric.value}
              suffix={metric.suffix}
              isInView={isInView}
            />
            <span className="text-sm text-muted-foreground">{metric.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

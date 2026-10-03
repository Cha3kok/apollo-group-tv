"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, animate, motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion"
import { Apple, Flame, Laptop, MonitorPlay, Play, ShieldCheck, Smartphone, Star, Tv, Zap } from "lucide-react"
import Link from "next/link"
import { whatsappLinks } from "@/lib/whatsapp-utils"

const rotatingWords = ["Live Sports", "Blockbuster Movies", "Binge-worthy Series", "PPV Events", "World News"]

const nowPlaying = [
  { category: "Sports", title: "Live Football · Matchday", channel: "SPORTS HD 1", hue: "from-[#0f5132] via-[#1b7f4c] to-[#0b2e1f]" },
  { category: "Movies", title: "Premiere Night · Action Blockbuster", channel: "CINEMA 4K", hue: "from-[#3a0f2e] via-[#7a1f4f] to-[#1b0817]" },
  { category: "Series", title: "Season Finale · Drama", channel: "SERIES PLUS", hue: "from-[#1a1f5c] via-[#3b4bff] to-[#0c0f2e]" },
  { category: "PPV", title: "Championship Fight Night", channel: "PPV EVENT", hue: "from-[#4a1d05] via-[#c2410c] to-[#1c0a02]" },
]

const orbitDevices = [
  { icon: Tv, label: "Smart TV" },
  { icon: Flame, label: "Firestick" },
  { icon: Smartphone, label: "Android" },
  { icon: Apple, label: "iOS" },
  { icon: Laptop, label: "PC & Mac" },
  { icon: MonitorPlay, label: "MAG Box" },
]

const ease = [0.22, 1, 0.36, 1] as const

function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={rotatingWords[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease }}
          className="text-signal whitespace-nowrap"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function LiveScreen() {
  const [index, setIndex] = useState(0)
  const show = nowPlaying[index]

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % nowPlaying.length), 3200)
    return () => clearInterval(id)
  }, [index])

  return (
    <div className="glass relative overflow-hidden rounded-[1.75rem] p-2.5 shadow-[0_40px_120px_-30px_rgba(255,122,69,0.45)]">
      {/* Screen */}
      <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-black">
        <AnimatePresence mode="sync">
          <motion.div
            key={show.channel}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease }}
            className={`absolute inset-0 bg-gradient-to-br ${show.hue}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_55%)]" />
            <div className="grid-lines absolute inset-0 opacity-60" />
          </motion.div>
        </AnimatePresence>

        {/* scanline */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-scan h-1/3 w-full bg-gradient-to-b from-transparent via-white/[0.07] to-transparent" />
        </div>

        {/* top bar */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 sm:p-4">
          <span className="flex items-center gap-1.5 rounded-md bg-[#ff2d55] px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            LIVE
          </span>
          <span className="rounded-md border border-white/25 bg-black/30 px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-white backdrop-blur">
            4K UHD
          </span>
        </div>

        {/* center play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md sm:h-16 sm:w-16">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/10" />
            <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
          </span>
        </div>

        {/* now playing */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 sm:p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={show.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ffd56b]">
                {show.channel} · {show.category}
              </p>
              <p className="mt-0.5 truncate text-sm font-semibold text-white sm:text-base">{show.title}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/20">
            <motion.div
              key={show.channel}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.2, ease: "linear" }}
              className="h-full rounded-full bg-[linear-gradient(90deg,#ffb224,#ff4d8d)]"
            />
          </div>
        </div>
      </div>

      {/* Mini guide */}
      <div className="mt-2.5 grid grid-cols-4 gap-2">
        {nowPlaying.map((item, i) => (
          <button
            key={item.channel}
            onClick={() => setIndex(i)}
            aria-label={`Preview ${item.category}`}
            className={`rounded-xl px-2 py-2 text-left transition-all ${
              i === index ? "bg-white/10 ring-1 ring-primary/60" : "bg-white/[0.03] hover:bg-white/[0.06]"
            }`}
          >
            <span className="block truncate font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{item.category}</span>
            <span className="mt-1 flex h-3 items-end gap-0.5">
              {[0, 1, 2, 3].map((b) => (
                <span
                  key={b}
                  className={`live-bar w-1 rounded-sm ${i === index ? "bg-primary" : "bg-white/25"}`}
                  style={{ height: "100%", animationDelay: `${b * 0.15}s`, animationPlayState: i === index ? "running" : "paused" }}
                />
              ))}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

/** A device chip travelling an elliptical orbit: in front of the screen on the lower half, behind it on the upper half. */
function OrbitChip({ t, offset, icon: Icon, label }: { t: MotionValue<number>; offset: number; icon: typeof Tv; label: string }) {
  const left = useTransform(t, (v) => `${(50 + 60 * Math.cos(v + offset)).toFixed(2)}%`)
  const top = useTransform(t, (v) => `${(50 + 64 * Math.sin(v + offset)).toFixed(2)}%`)
  const zIndex = useTransform(t, (v) => (Math.sin(v + offset) > 0 ? 30 : 0))
  const scale = useTransform(t, (v) => 0.8 + 0.2 * ((Math.sin(v + offset) + 1) / 2))
  const opacity = useTransform(t, (v) => 0.45 + 0.55 * ((Math.sin(v + offset) + 1) / 2))

  return (
    <motion.span aria-hidden className="absolute" style={{ left, top, zIndex }}>
      <motion.span
        style={{ scale, opacity }}
        className="glass flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[11px] font-medium text-foreground shadow-lg"
      >
        <Icon className="h-3.5 w-3.5 text-primary" />
        <span className="hidden sm:inline">{label}</span>
      </motion.span>
    </motion.span>
  )
}

function HeroVisual() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 120, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-11, 11]), { stiffness: 120, damping: 18 })
  const t = useMotionValue(0)
  // orbit positions are float-heavy inline styles; render them client-side only to avoid hydration mismatches
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const controls = animate(t, Math.PI * 2, { duration: 36, ease: "linear", repeat: Infinity })
    return () => controls.stop()
  }, [t])

  return (
    <div
      className="relative mx-auto w-full max-w-[560px] [perspective:1200px]"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => {
        mx.set(0)
        my.set(0)
      }}
    >
      {/* orbit path and devices */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[128%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-white/10" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[100%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/[0.05]" />
      {mounted &&
        orbitDevices.map((d, i) => (
          <OrbitChip key={d.label} t={t} offset={(i / orbitDevices.length) * Math.PI * 2} icon={d.icon} label={d.label} />
        ))}

      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative z-10">
        <LiveScreen />

      </motion.div>

      {/* floating stat chips */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease }}
        className="absolute -left-8 -top-9 z-40 hidden sm:block"
      >
        <div className="glass animate-float flex items-center gap-2.5 rounded-2xl px-3 py-2.5 shadow-xl">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/15">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
          </span>
          <span>
            <span className="block font-display text-sm font-bold leading-none text-foreground">99.9%</span>
            <span className="text-[10px] text-muted-foreground">Server uptime</span>
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.7, ease }}
        className="absolute -bottom-10 -right-8 z-40 hidden sm:block"
      >
        <div className="glass animate-float flex items-center gap-2.5 rounded-2xl px-3 py-2.5 shadow-xl [animation-delay:-3s]">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15">
            <Tv className="h-4 w-4 text-primary" />
          </span>
          <span>
            <span className="block font-display text-sm font-bold leading-none text-foreground">21,000+</span>
            <span className="text-[10px] text-muted-foreground">Live channels</span>
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-24 pt-32 sm:pt-36 lg:pb-32">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-4 backdrop-blur"
          >
            <span className="flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">
              <Zap className="h-3 w-3" /> 2026
            </span>
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">Buffer-free 4K streaming with Anti-Freeze</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-7 text-balance text-[2.6rem] font-bold leading-[1.02] text-foreground sm:text-6xl xl:text-7xl"
          >
            Apollo Group TV: <span className="text-gradient">Premium IPTV</span> Subscription
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-5 font-display text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            21,000+ channels of <RotatingWord />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Stream live TV, sports, movies and series with 65,000+ on-demand titles, anti-freeze technology and
            99.9% uptime on every device you own.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link href="/#pricing" className="btn-flame flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold sm:w-auto">
              <Zap className="h-5 w-5" />
              Get Your Subscription
            </Link>
            <Link
              href={whatsappLinks.freeTrialHero()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold text-foreground sm:w-auto"
            >
              <Play className="h-5 w-5 text-accent" />
              Free 3-Hour Trial
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground lg:justify-start"
          >
            <span className="flex items-center gap-1.5">
              <span className="flex">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </span>
              12,000+ subscribers
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>7-day money-back guarantee</span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>Instant activation</span>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="px-10 py-10 sm:px-14"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { CalendarClock, Gauge, Headphones, MonitorSmartphone, Rewind, Sparkles } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import SpotlightCard from "@/components/spotlight-card"

const ease = [0.22, 1, 0.36, 1] as const

function SignalBars() {
  return (
    <div className="flex h-16 items-end gap-1.5">
      {[0.35, 0.55, 0.75, 0.9, 1].map((h, i) => (
        <span
          key={i}
          className="live-bar w-3 rounded-md bg-[linear-gradient(180deg,#ffd56b,#ff7a45)]"
          style={{ height: `${h * 100}%`, animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </div>
  )
}

function QualityLadder() {
  return (
    <div className="flex items-end gap-2">
      {["SD", "HD", "FHD", "4K"].map((q, i) => (
        <motion.span
          key={q}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.12, ease }}
          className={`rounded-lg px-2.5 py-1 font-mono text-xs font-bold ${
            q === "4K" ? "bg-primary text-primary-foreground shadow-[0_0_24px_rgba(255,178,36,0.6)]" : "bg-white/[0.06] text-muted-foreground"
          }`}
        >
          {q}
        </motion.span>
      ))}
    </div>
  )
}

function GuideRows() {
  const rows = [
    { time: "20:00", title: "Live Football", w: "w-3/4" },
    { time: "21:45", title: "Movie Premiere", w: "w-1/2" },
    { time: "23:30", title: "Late News", w: "w-2/3" },
  ]
  return (
    <div className="flex flex-col gap-2">
      {rows.map((r, i) => (
        <motion.div
          key={r.time}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.12, ease }}
          className="flex items-center gap-3 rounded-lg bg-white/[0.04] px-3 py-2"
        >
          <span className="font-mono text-[10px] text-accent">{r.time}</span>
          <span className="text-xs text-foreground/80">{r.title}</span>
          <span className={`ml-auto h-1 ${r.w} max-w-[80px] rounded-full ${i === 0 ? "bg-primary" : "bg-white/15"}`} />
        </motion.div>
      ))}
    </div>
  )
}

function DeviceRow() {
  const devices = ["Smart TV", "Firestick", "Android TV", "iPhone & iPad", "Apple TV", "MAG Box", "PC & Mac"]
  return (
    <div className="flex flex-wrap gap-2">
      {devices.map((d, i) => (
        <motion.span
          key={d}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.07, ease }}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-foreground/85"
        >
          {d}
        </motion.span>
      ))}
    </div>
  )
}

const features = [
  {
    icon: Gauge,
    title: "Anti-Freeze Technology",
    text: "Load-balanced servers switch your stream to the fastest route in real time, so live sports and PPV keep playing during peak hours.",
    visual: <SignalBars />,
    span: "md:col-span-2",
  },
  {
    icon: Sparkles,
    title: "Up to 4K UHD",
    text: "Pick SD, HD, Full HD or 4K to match your screen and connection.",
    visual: <QualityLadder />,
    span: "",
  },
  {
    icon: CalendarClock,
    title: "Full EPG Guide",
    text: "See what's on now and next for every channel.",
    visual: <GuideRows />,
    span: "",
  },
  {
    icon: Rewind,
    title: "Catch-Up TV",
    text: "Missed the match? Replay the last 7 days on supported channels.",
    visual: null,
    span: "",
  },
  {
    icon: Headphones,
    title: "24/7 Human Support",
    text: "Real people on WhatsApp in English, French, Arabic and Spanish, any time of day.",
    visual: null,
    span: "",
  },
  {
    icon: MonitorSmartphone,
    title: "Every Device",
    text: "Smart TV, Firestick, Android, iPhone, iPad, MAG, PC and Mac with IPTV Smarters, TiviMate and more.",
    visual: <DeviceRow />,
    span: "md:col-span-3",
  },
]

export default function Features() {
  return (
    <section className="relative px-4 py-24">
      <SectionHeading
        eyebrow="Why Apollo"
        title={
          <>
            Built for <span className="text-gradient">buffer-free</span> streaming
          </>
        }
        intro="Everything in one subscription: the channels, the picture quality and the support to keep it running."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease }}
            className={f.span}
          >
            <SpotlightCard className="glass flex h-full flex-col justify-between gap-8 rounded-3xl p-7">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-primary/5 ring-1 ring-primary/20">
                  <f.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
              {f.visual}
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

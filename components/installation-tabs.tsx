"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MonitorPlay, Flame, Smartphone, Apple, Download, Settings, Play } from "lucide-react"
import SectionHeading from "@/components/section-heading"

const tabs = [
  {
    id: "smart-tv",
    label: "Smart TV",
    icon: MonitorPlay,
    steps: [
      {
        icon: Download,
        title: "Download IPTV Player App",
        description: "Open your Smart TV app store and install IPTV Smarters Pro, TiviMate, or any compatible IPTV player for your Apollo Group TV subscription.",
      },
      {
        icon: Settings,
        title: "Enter Apollo Group TV Login",
        description: "Open the IPTV player and enter the Xtream Codes login credentials we send via WhatsApp after you buy your Apollo Group TV subscription.",
      },
      {
        icon: Play,
        title: "Start Watching IPTV",
        description: "Browse 21,000+ IPTV channels, pick your favorite sports, movies, or series, and enjoy buffer-free 4K IPTV streaming.",
      },
    ],
  },
  {
    id: "firestick",
    label: "Firestick",
    icon: Flame,
    steps: [
      {
        icon: Download,
        title: "Install IPTV on Firestick",
        description: "Go to Firestick settings, enable 'Apps from Unknown Sources', then install the Downloader app to sideload your Apollo Group TV player.",
      },
      {
        icon: Settings,
        title: "Configure Apollo Group TV",
        description: "Use the Downloader app to install IPTV Smarters Pro. Enter the Apollo Group TV credentials we provide after purchase.",
      },
      {
        icon: Play,
        title: "Stream IPTV on Firestick",
        description: "Launch the app and start streaming all 21,000+ Apollo Group TV channels and VOD content on your Firestick instantly.",
      },
    ],
  },
  {
    id: "android",
    label: "Android / MAG",
    icon: Smartphone,
    steps: [
      {
        icon: Download,
        title: "Download Android IPTV App",
        description: "Install IPTV Smarters Pro or TiviMate from the Google Play Store on your Android device, tablet, or MAG box for Apollo Group TV.",
      },
      {
        icon: Settings,
        title: "Add Apollo Group TV Playlist",
        description: "Open the IPTV app and add your M3U URL or Xtream Codes login that Apollo Group TV provides after your subscription purchase.",
      },
      {
        icon: Play,
        title: "Stream IPTV on Android",
        description: "All Apollo Group TV channels and VOD content load automatically. Enjoy lag-free 4K IPTV streaming on Android.",
      },
    ],
  },
  {
    id: "apple",
    label: "Apple / iOS",
    icon: Apple,
    steps: [
      {
        icon: Download,
        title: "Get IPTV App for iOS",
        description: "Download IPTV Smarters or GSE Smart IPTV from the Apple App Store on your iPhone, iPad, or Apple TV to use Apollo Group TV.",
      },
      {
        icon: Settings,
        title: "Login to Apollo Group TV",
        description: "Open the IPTV app and enter the Xtream Codes API login details provided after your Apollo Group TV subscription purchase.",
      },
      {
        icon: Play,
        title: "Watch IPTV on Apple Devices",
        description: "Stream Apollo Group TV on the go with your Apple device. All 21,000+ IPTV channels and 65,000+ VOD titles at your fingertips.",
      },
    ],
  },
]

export default function InstallationTabs() {
  const [activeTab, setActiveTab] = useState("smart-tv")
  const activeData = tabs.find((t) => t.id === activeTab)!

  return (
    <section id="setup" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Setup in 5 minutes"
          title={
            <>
              How to Set Up <span className="text-gradient">Apollo Group TV</span> on Any Device
            </>
          }
          intro="Three steps on Smart TV, Firestick, Android, iOS or MAG Box. Works with IPTV Smarters, TiviMate and every popular IPTV player."
        />

        {/* Tab buttons */}
        <div className="mt-12 flex justify-center">
          <div className="glass inline-flex flex-wrap justify-center gap-1 rounded-2xl p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors sm:px-5 ${
                  activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="setup-tab"
                    className="absolute inset-0 -z-10 rounded-xl bg-[linear-gradient(100deg,#ffd56b,#ffb224,#ff7a45)] shadow-[0_8px_24px_-8px_rgba(255,140,50,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="relative mt-12">
          {/* connecting line */}
          <div aria-hidden className="absolute left-[16.6%] right-[16.6%] top-9 hidden h-px md:block">
            <div className="h-full w-full bg-white/10" />
            <motion.div
              key={activeTab}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 origin-left bg-[linear-gradient(90deg,#ffb224,#ff4d8d,#3dd9ff)]"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              className="grid gap-5 md:grid-cols-3"
            >
              {activeData.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="relative flex flex-col items-center text-center"
                >
                  <span className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/10 bg-card shadow-[0_0_0_8px_var(--background)]">
                    <step.icon className="h-7 w-7 text-primary" />
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent font-display text-xs font-bold text-accent-foreground">
                      {index + 1}
                    </span>
                  </span>
                  <div className="glass mt-6 w-full flex-1 rounded-3xl p-6">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

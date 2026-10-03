"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Menu, X, Zap } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/logo"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Channels", href: "/channels-list" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Setup", href: "/#setup" },
  { label: "Reseller", href: "/#reseller" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6"
    >
      <nav
        className={`relative mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]" : "border border-transparent"
        }`}
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHovered(null)}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHovered(link.label)}
              className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {hovered === link.label && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 -z-10 rounded-lg bg-white/[0.06]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Servers online
          </span>
          <Link href="/#pricing" className="btn-flame flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold">
            <Zap className="h-4 w-4" />
            Buy IPTV
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <motion.span
          style={{ scaleX: progress }}
          className="absolute inset-x-4 -bottom-px h-px origin-left bg-[linear-gradient(90deg,#ffb224,#ff4d8d,#3dd9ff)]"
        />
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass mx-auto mt-2 max-w-7xl rounded-2xl p-3 lg:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-flame mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-semibold"
              >
                <Zap className="h-4 w-4" />
                Buy IPTV
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

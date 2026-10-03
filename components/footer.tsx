import Link from "next/link"
import { MessageCircle } from "lucide-react"
import Logo from "@/components/logo"
import { whatsappLinks } from "@/lib/whatsapp-utils"

const columns = [
  {
    title: "Apollo Group TV",
    links: [
      { label: "Home", href: "/" },
      { label: "Channels List", href: "/channels-list" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Setup Guide", href: "/#setup" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Apollo TV Guide", href: "/apollo-tv" },
      { label: "ApolloGroup TV Explained", href: "/apollo-group" },
      { label: "Firestick Setup", href: "/how-to-install-iptv-on-firestick" },
      { label: "4K Streaming Tips", href: "/4k-streaming-tips-maximize-viewing-experience" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Reseller Program", href: "/#reseller" },
      { label: "Contact Us", href: "/contact" },
      { label: "Free 3-Hour Trial", href: whatsappLinks.footerTrial() },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "DMCA Policy", href: "/dmca" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden px-4 pb-10 pt-20">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#ffb224,#ff4d8d,#3dd9ff,transparent)] opacity-60" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium IPTV subscription with 21,000+ live channels and 65,000+ movies and series in up to 4K, on
              Smart TV, Firestick, Android, iOS, MAG and PC.
            </p>
            <Link
              href={whatsappLinks.footerContact()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[#25D366]/60"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              +212 707 711 512
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-foreground">{col.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="mr-0 h-px w-0 bg-primary transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div aria-hidden className="mt-16 select-none text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.07)] lg:text-[11rem]">
          APOLLO
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Apollo Group TV. All rights reserved.</p>
          <p>Not affiliated with any third-party streaming platform.</p>
        </div>
      </div>
    </footer>
  )
}

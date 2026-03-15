import Link from "next/link"
import { whatsappLinks } from "@/lib/whatsapp-utils"

export default function Footer() {
  const footerLinks = [
    { label: "Apollo Group TV Home", href: "/" },
    { label: "IPTV Subscription Pricing", href: "/#pricing" },
    { label: "IPTV Reseller Program", href: "/#reseller" },
    { label: "Contact Apollo Group TV", href: "/contact" },
    { label: "Free IPTV Trial", href: whatsappLinks.footerTrial() },
  ]

  return (
    <footer className="border-t border-border/30 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Apollo</span> <span className="text-green-500">Group TV</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Apollo Group TV is the #1 premium IPTV subscription service in 2026.
              Stream 21,000+ live IPTV channels and 65,000+ VOD movies and series
              in 4K UHD quality on any device. The best IPTV provider with
              anti-freeze technology and 99.9% uptime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Apollo Group TV Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Devices */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              IPTV Compatible Devices
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Smart TV IPTV (Samsung, LG)",
                "Amazon Firestick IPTV",
                "Android IPTV / MAG Box",
                "Apple TV / iPhone IPTV",
                "PC / Mac IPTV Streaming",
              ].map((device) => (
                <li
                  key={device}
                  className="text-sm text-muted-foreground"
                >
                  {device}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Contact Apollo Group TV
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href={whatsappLinks.footerContact()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp: +212 707 711 512
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                24/7 IPTV Customer Support
              </li>
              <li className="text-sm text-muted-foreground">
                7-Day Money Back Guarantee
              </li>
              <li className="text-sm text-muted-foreground">
                Instant IPTV Activation
              </li>
            </ul>
          </div>
        </div>

        {/* SEO-rich footer text */}
        <div className="mt-10 border-t border-border/30 pt-6">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Apollo Group TV - Best Premium IPTV Subscription Service. All rights reserved. Apollo Group TV provides the highest quality IPTV streaming experience with 21,000+ live channels, 65,000+ movies and series, 4K UHD quality, anti-freeze technology, and support for Smart TV, Firestick, Android, iOS, and MAG Box. Apollo Group TV is not affiliated with any third-party streaming platforms.
          </p>
        </div>
      </div>
    </footer>
  )
}
